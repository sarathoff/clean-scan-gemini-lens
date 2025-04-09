
import React, { useState } from "react";
import Layout from "@/components/layout/Layout";
import ScannerToggle from "@/components/Scanner/ScannerToggle";
import CameraScanner from "@/components/Scanner/CameraScanner";
import ManualEntry from "@/components/Scanner/ManualEntry";
import IngredientsList from "@/components/Results/IngredientsList";
import NutritionInfo from "@/components/Results/NutritionInfo";
import ResultActions from "@/components/Results/ResultActions";
import { ScanQRCode, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/toast";
import { analyzeImageIngredients, analyzeTextIngredients } from "@/services/geminiService";
import { AnalysisResult } from "@/types/ingredients";
import { saveToHistory } from "@/services/storageService";
import { shareResults, downloadAsImage } from "@/services/shareService";

const Index = () => {
  const [scanMode, setScanMode] = useState<"camera" | "manual">("camera");
  const [scanningState, setScanningState] = useState<"ready" | "scanning" | "results">("ready");
  const [scanError, setScanError] = useState<string | null>(null);
  const [analysisResult, setAnalysisResult] = useState<AnalysisResult | null>(null);
  const { toast } = useToast();

  const handleScanModeToggle = (mode: "camera" | "manual") => {
    setScanMode(mode);
    // Reset any errors when switching modes
    setScanError(null);
  };

  const handleImageCapture = async (imageData: string) => {
    try {
      setScanningState("scanning");
      setScanError(null);

      // Analyze the image using Gemini
      const result = await analyzeImageIngredients(imageData);
      
      // Save the result to history
      saveToHistory(result, imageData);
      
      // Update the state with the results
      setAnalysisResult(result);
      setScanningState("results");
    } catch (error) {
      console.error("Error processing image:", error);
      setScanningState("ready");
      setScanError(error instanceof Error ? error.message : "Failed to analyze the image. Please try again.");
      toast({
        title: "Analysis Error",
        description: error instanceof Error ? error.message : "Failed to analyze the image. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleTextSubmit = async (text: string) => {
    try {
      setScanningState("scanning");
      setScanError(null);

      // Analyze the text using Gemini
      const result = await analyzeTextIngredients(text);
      
      // Save the result to history
      saveToHistory(result);
      
      // Update the state with the results
      setAnalysisResult(result);
      setScanningState("results");
    } catch (error) {
      console.error("Error processing text:", error);
      setScanningState("ready");
      setScanError(error instanceof Error ? error.message : "Failed to analyze the ingredients. Please try again.");
      toast({
        title: "Analysis Error",
        description: error instanceof Error ? error.message : "Failed to analyze the ingredients. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleScanAgain = () => {
    setScanningState("ready");
    setAnalysisResult(null);
    setScanError(null);
  };

  const handleShare = async () => {
    if (!analysisResult) return;
    
    const shared = await shareResults(analysisResult);
    if (shared) {
      toast({
        title: "Results Shared",
        description: "The scan results were successfully shared.",
      });
    } else {
      toast({
        title: "Share Failed",
        description: "Unable to share results. Try the download option instead.",
        variant: "destructive",
      });
    }
  };

  const handleDownload = async () => {
    if (!analysisResult) return;
    
    const downloaded = await downloadAsImage("results-container");
    if (downloaded) {
      toast({
        title: "Results Saved",
        description: "The scan results were saved as an image.",
      });
    } else {
      toast({
        title: "Download Failed",
        description: "Unable to save results as an image.",
        variant: "destructive",
      });
    }
  };

  return (
    <Layout>
      <div className="container px-4 py-8 mx-auto sm:px-6">
        {scanningState === "ready" && (
          <>
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold mb-4">CleanScan</h1>
              <p className="text-cleanscan-neutral-gray max-w-md mx-auto">
                Analyze product ingredients instantly with AI. Scan a label or enter ingredients manually to get a detailed breakdown.
              </p>
            </div>
            
            <ScannerToggle activeMode={scanMode} onToggle={handleScanModeToggle} />
            
            {scanMode === "camera" ? (
              <CameraScanner onCapture={handleImageCapture} onError={(error) => setScanError(error)} />
            ) : (
              <ManualEntry onSubmit={handleTextSubmit} />
            )}
            
            {scanError && (
              <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-md text-red-800 text-sm">
                <p className="flex items-center">
                  <Info className="w-4 h-4 mr-2" />
                  {scanError}
                </p>
              </div>
            )}
            
            <div className="mt-12 max-w-md mx-auto">
              <div className="flex items-center text-sm text-cleanscan-neutral-gray mb-3">
                <div className="flex-grow h-px bg-cleanscan-light-gray"></div>
                <span className="mx-3">Recent Scans</span>
                <div className="flex-grow h-px bg-cleanscan-light-gray"></div>
              </div>
              
              {/* Placeholder for recent scans - in a real app, these would be populated from localStorage */}
              <div className="flex justify-center">
                <p className="text-sm text-cleanscan-neutral-gray">
                  Your recent scans will appear here
                </p>
              </div>
            </div>
          </>
        )}

        {scanningState === "scanning" && (
          <div className="flex flex-col items-center justify-center py-16">
            <div className="w-16 h-16 mb-6">
              <div className="w-full h-full rounded-full border-4 border-cleanscan-light-green border-t-cleanscan-green animate-spin"></div>
            </div>
            <h2 className="text-xl font-semibold mb-2">Analyzing Ingredients</h2>
            <p className="text-cleanscan-neutral-gray text-center max-w-md">
              Our AI is examining the ingredients and preparing your detailed analysis...
            </p>
          </div>
        )}

        {scanningState === "results" && analysisResult && (
          <div className="max-w-md mx-auto mb-20" id="results-container">
            <div className="text-center mb-8">
              <h1 className="text-2xl font-bold mb-2">Analysis Results</h1>
              <p className="text-cleanscan-neutral-gray">
                Here's what we found in your product:
              </p>
              
              {analysisResult.didYouKnow && (
                <div className="mt-4 p-4 bg-cleanscan-light-green rounded-md">
                  <p className="text-sm">
                    <strong>Did you know?</strong> {analysisResult.didYouKnow}
                  </p>
                </div>
              )}
            </div>
            
            <IngredientsList ingredients={analysisResult.ingredients} />
            
            {analysisResult.nutrition && (
              <NutritionInfo nutritionData={analysisResult.nutrition} />
            )}
            
            <ResultActions 
              onScan={handleScanAgain} 
              onShare={handleShare} 
              onDownload={handleDownload} 
            />
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Index;

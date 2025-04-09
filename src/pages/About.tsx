
import React from "react";
import Layout from "@/components/layout/Layout";
import { ScanQRCode, ShieldCheck, Sparkles, Leaf } from "lucide-react";

const About = () => {
  return (
    <Layout>
      <div className="container px-4 py-8 mx-auto sm:px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">About CleanScan</h1>
          
          <div className="prose max-w-none">
            <p className="text-lg mb-6">
              CleanScan is a user-friendly tool designed to help you make informed decisions about the products you use every day by analyzing their ingredients.
            </p>
            
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
              <div className="flex items-center mb-4">
                <ScanQRCode className="w-6 h-6 mr-3 text-cleanscan-green" />
                <h2 className="text-xl font-semibold">Our Mission</h2>
              </div>
              <p className="mb-4">
                We believe that everyone should have easy access to clear, science-based information about product ingredients. Whether you're concerned about potential allergens, trying to avoid certain chemicals, or simply wanting to make more conscious consumer choices, CleanScan empowers you with knowledge.
              </p>
            </div>
            
            <h2 className="text-2xl font-semibold mb-4">How CleanScan Works</h2>
            
            <div className="grid gap-6 md:grid-cols-3 mb-8">
              <div className="bg-cleanscan-light-green rounded-lg p-5">
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
                    <ScanQRCode className="w-6 h-6 text-cleanscan-green" />
                  </div>
                </div>
                <h3 className="text-lg font-medium text-center mb-2">Scan or Enter</h3>
                <p className="text-sm text-center">
                  Use your camera to scan product ingredient lists or manually enter them into the app.
                </p>
              </div>
              
              <div className="bg-cleanscan-light-green rounded-lg p-5">
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
                    <Sparkles className="w-6 h-6 text-cleanscan-green" />
                  </div>
                </div>
                <h3 className="text-lg font-medium text-center mb-2">AI Analysis</h3>
                <p className="text-sm text-center">
                  Our AI powered by Google's Gemini analyzes each ingredient based on scientific research.
                </p>
              </div>
              
              <div className="bg-cleanscan-light-green rounded-lg p-5">
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
                    <ShieldCheck className="w-6 h-6 text-cleanscan-green" />
                  </div>
                </div>
                <h3 className="text-lg font-medium text-center mb-2">Get Results</h3>
                <p className="text-sm text-center">
                  Receive color-coded results with detailed explanations about each ingredient.
                </p>
              </div>
            </div>
            
            <h2 className="text-2xl font-semibold mb-4">Our Ingredient Analysis Methodology</h2>
            
            <p className="mb-4">
              CleanScan uses a three-tier rating system to classify ingredients:
            </p>
            
            <div className="mb-6 space-y-4">
              <div className="flex items-start">
                <span className="w-4 h-4 mt-1 mr-3 bg-cleanscan-green rounded-full"></span>
                <div>
                  <h3 className="font-medium">Good (Green)</h3>
                  <p className="text-sm text-cleanscan-neutral-gray">
                    Ingredients that are generally recognized as safe and beneficial, backed by scientific research.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <span className="w-4 h-4 mt-1 mr-3 bg-cleanscan-yellow rounded-full"></span>
                <div>
                  <h3 className="font-medium">Moderate (Yellow)</h3>
                  <p className="text-sm text-cleanscan-neutral-gray">
                    Ingredients that may cause issues for some people or have mixed scientific evidence regarding safety.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <span className="w-4 h-4 mt-1 mr-3 bg-cleanscan-red rounded-full"></span>
                <div>
                  <h3 className="font-medium">Concerning (Red)</h3>
                  <p className="text-sm text-cleanscan-neutral-gray">
                    Ingredients that have significant evidence of potential harm or those that are highly controversial.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
              <div className="flex items-center mb-4">
                <Leaf className="w-6 h-6 mr-3 text-cleanscan-green" />
                <h2 className="text-xl font-semibold">Our Technology</h2>
              </div>
              <p className="mb-4">
                CleanScan leverages Google's advanced Gemini Large Language Model (LLM) to analyze ingredients. This cutting-edge AI has been trained on extensive scientific literature about ingredients, their properties, and potential health effects.
              </p>
              <p>
                Our system is designed to continuously improve as more research becomes available, ensuring that you always have access to the most up-to-date information.
              </p>
            </div>
            
            <h2 className="text-2xl font-semibold mb-4">Disclaimer</h2>
            
            <div className="bg-cleanscan-light-gray rounded-lg p-5 mb-8">
              <p className="text-sm">
                CleanScan is designed to provide general information about product ingredients. While we strive for accuracy, the information provided should not be considered medical advice. Always consult with healthcare professionals regarding specific health concerns or allergies. Individual reactions to ingredients may vary.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;


import React, { useState, useRef, useEffect } from "react";
import { Camera, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

interface CameraScannerProps {
  onCapture: (imageData: string) => void;
  onError: (error: string) => void;
}

const CameraScanner = ({ onCapture, onError }: CameraScannerProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isStreaming, setIsStreaming] = useState(false);
  const [hasCamera, setHasCamera] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    let stream: MediaStream | null = null;

    const startCamera = async () => {
      try {
        if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
          setHasCamera(false);
          onError("Camera access not available on this device or browser.");
          return;
        }

        stream = await navigator.mediaDevices.getUserMedia({ 
          video: { facingMode: "environment" } 
        });
        
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          setIsStreaming(true);
        }
      } catch (err) {
        console.error("Error accessing camera:", err);
        setHasCamera(false);
        onError("Unable to access camera. Please ensure you've granted camera permissions.");
      }
    };

    startCamera();

    return () => {
      if (stream) {
        const tracks = stream.getTracks();
        tracks.forEach(track => track.stop());
      }
    };
  }, [onError]);

  const captureImage = () => {
    if (!isStreaming || !videoRef.current || !canvasRef.current) return;

    const video = videoRef.current;
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    
    if (!context) return;
    
    // Set canvas dimensions to match video
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    
    // Draw the current video frame to the canvas
    context.drawImage(video, 0, 0, canvas.width, canvas.height);
    
    // Get image data as base64 string
    try {
      const imageData = canvas.toDataURL("image/jpeg", 0.9);
      onCapture(imageData);
      toast({
        title: "Image captured",
        description: "Processing your ingredients...",
      });
    } catch (err) {
      console.error("Error capturing image:", err);
      onError("Failed to capture image. Please try again.");
    }
  };

  const retryCamera = async () => {
    try {
      await navigator.mediaDevices.getUserMedia({ video: true });
      setHasCamera(true);
    } catch (err) {
      onError("Camera access still unavailable. Please check your permissions.");
    }
  };

  if (!hasCamera) {
    return (
      <div className="flex flex-col items-center justify-center p-6 border-2 border-dashed border-gray-300 rounded-lg bg-gray-50 text-center">
        <Camera className="w-12 h-12 mb-4 text-cleanscan-neutral-gray" />
        <h3 className="mb-2 text-lg font-semibold">Camera Unavailable</h3>
        <p className="mb-4 text-sm text-cleanscan-neutral-gray">
          We can't access your device camera. Please check your browser permissions or try manual entry.
        </p>
        <Button onClick={retryCamera} variant="outline" className="mb-2">
          <RefreshCw className="w-4 h-4 mr-2" />
          Retry Camera
        </Button>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center w-full max-w-md mx-auto">
      <div className="relative w-full aspect-[4/3] bg-black rounded-lg overflow-hidden mb-4">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          autoPlay
          playsInline
        ></video>
        
        {/* Targeting rectangle */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-4/5 h-4/5 border-2 border-white rounded-md opacity-70"></div>
        </div>
      </div>
      
      {/* Hidden canvas for capturing */}
      <canvas ref={canvasRef} className="hidden"></canvas>
      
      <div className="flex justify-center w-full">
        <Button 
          onClick={captureImage}
          className="bg-cleanscan-green hover:bg-green-600 text-white rounded-full w-16 h-16 flex items-center justify-center shadow-md"
        >
          <Camera className="w-8 h-8" />
        </Button>
      </div>
      
      <p className="mt-4 text-sm text-center text-cleanscan-neutral-gray">
        Position the ingredients list within the frame and tap the button to capture
      </p>
    </div>
  );
};

export default CameraScanner;

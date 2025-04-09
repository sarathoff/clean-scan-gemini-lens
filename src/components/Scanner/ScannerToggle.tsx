
import React from "react";
import { Button } from "@/components/ui/button";
import { Camera, Type } from "lucide-react";

interface ScannerToggleProps {
  activeMode: "camera" | "manual";
  onToggle: (mode: "camera" | "manual") => void;
}

const ScannerToggle = ({ activeMode, onToggle }: ScannerToggleProps) => {
  return (
    <div className="flex justify-center mb-6">
      <div className="inline-flex rounded-md bg-cleanscan-light-gray p-1 shadow-sm">
        <Button
          variant="ghost"
          className={`flex items-center px-4 py-2 text-sm rounded-md ${
            activeMode === "camera"
              ? "bg-white shadow-sm"
              : "text-cleanscan-medium-gray hover:bg-white/50"
          }`}
          onClick={() => onToggle("camera")}
        >
          <Camera className="w-4 h-4 mr-2" />
          Scan
        </Button>

        <Button
          variant="ghost"
          className={`flex items-center px-4 py-2 text-sm rounded-md ${
            activeMode === "manual"
              ? "bg-white shadow-sm"
              : "text-cleanscan-medium-gray hover:bg-white/50"
          }`}
          onClick={() => onToggle("manual")}
        >
          <Type className="w-4 h-4 mr-2" />
          Manual Entry
        </Button>
      </div>
    </div>
  );
};

export default ScannerToggle;

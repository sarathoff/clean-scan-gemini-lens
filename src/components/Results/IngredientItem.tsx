
import React, { useState } from "react";
import { Info, ChevronDown, ChevronUp } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface IngredientItemProps {
  name: string;
  category: "good" | "moderate" | "bad";
  description: string;
}

const IngredientItem = ({ name, category, description }: IngredientItemProps) => {
  const [expanded, setExpanded] = useState(false);

  const getCategoryColor = () => {
    switch (category) {
      case "good":
        return "bg-green-100 text-green-800 border-green-200";
      case "moderate":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "bad":
        return "bg-red-100 text-red-800 border-red-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getCategoryIcon = () => {
    switch (category) {
      case "good":
        return <span className="w-2 h-2 bg-cleanscan-green rounded-full mr-2"></span>;
      case "moderate":
        return <span className="w-2 h-2 bg-cleanscan-yellow rounded-full mr-2"></span>;
      case "bad":
        return <span className="w-2 h-2 bg-cleanscan-red rounded-full mr-2"></span>;
      default:
        return null;
    }
  };

  return (
    <div className={`border rounded-md mb-2 overflow-hidden ${getCategoryColor()}`}>
      <div 
        className="p-3 flex items-center justify-between cursor-pointer"
        onClick={() => setExpanded(!expanded)}
      >
        <div className="flex items-center">
          {getCategoryIcon()}
          <span className="font-medium">{name}</span>
        </div>
        <div className="flex items-center">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <button className="p-1 hover:bg-black/10 rounded-full mr-1">
                  <Info className="h-4 w-4" />
                  <span className="sr-only">Info</span>
                </button>
              </TooltipTrigger>
              <TooltipContent>
                <p className="max-w-xs">Click to expand for more details</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          {expanded ? (
            <ChevronUp className="h-4 w-4" />
          ) : (
            <ChevronDown className="h-4 w-4" />
          )}
        </div>
      </div>
      
      {expanded && (
        <div className="px-3 py-2 bg-white/60 border-t">
          <p className="text-sm">{description}</p>
        </div>
      )}
    </div>
  );
};

export default IngredientItem;

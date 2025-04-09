
import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface NutritionData {
  calories?: string;
  totalFat?: string;
  saturatedFat?: string;
  transFat?: string;
  cholesterol?: string;
  sodium?: string;
  totalCarbs?: string;
  dietaryFiber?: string;
  sugars?: string;
  protein?: string;
  vitamins?: string[];
  minerals?: string[];
}

interface NutritionInfoProps {
  nutritionData?: NutritionData | null;
}

const NutritionInfo = ({ nutritionData }: NutritionInfoProps) => {
  const [expanded, setExpanded] = useState(false);

  if (!nutritionData) {
    return null;
  }

  return (
    <div className="w-full max-w-md mx-auto mt-6 border rounded-md bg-white overflow-hidden">
      <div
        className="p-3 flex items-center justify-between cursor-pointer bg-cleanscan-light-green"
        onClick={() => setExpanded(!expanded)}
      >
        <h3 className="font-medium">Nutritional Information</h3>
        {expanded ? (
          <ChevronUp className="h-4 w-4" />
        ) : (
          <ChevronDown className="h-4 w-4" />
        )}
      </div>

      {expanded && (
        <div className="p-4 space-y-3">
          <div className="grid grid-cols-2 gap-4 text-sm">
            {nutritionData.calories && (
              <div>
                <span className="font-medium">Calories:</span> {nutritionData.calories}
              </div>
            )}
            
            {nutritionData.totalFat && (
              <div>
                <span className="font-medium">Total Fat:</span> {nutritionData.totalFat}
              </div>
            )}
            
            {nutritionData.saturatedFat && (
              <div>
                <span className="font-medium">Saturated Fat:</span> {nutritionData.saturatedFat}
              </div>
            )}
            
            {nutritionData.transFat && (
              <div>
                <span className="font-medium">Trans Fat:</span> {nutritionData.transFat}
              </div>
            )}
            
            {nutritionData.cholesterol && (
              <div>
                <span className="font-medium">Cholesterol:</span> {nutritionData.cholesterol}
              </div>
            )}
            
            {nutritionData.sodium && (
              <div>
                <span className="font-medium">Sodium:</span> {nutritionData.sodium}
              </div>
            )}
            
            {nutritionData.totalCarbs && (
              <div>
                <span className="font-medium">Total Carbs:</span> {nutritionData.totalCarbs}
              </div>
            )}
            
            {nutritionData.dietaryFiber && (
              <div>
                <span className="font-medium">Dietary Fiber:</span> {nutritionData.dietaryFiber}
              </div>
            )}
            
            {nutritionData.sugars && (
              <div>
                <span className="font-medium">Sugars:</span> {nutritionData.sugars}
              </div>
            )}
            
            {nutritionData.protein && (
              <div>
                <span className="font-medium">Protein:</span> {nutritionData.protein}
              </div>
            )}
          </div>

          {nutritionData.vitamins && nutritionData.vitamins.length > 0 && (
            <div>
              <h4 className="font-medium mt-3 mb-1">Vitamins:</h4>
              <ul className="text-sm list-disc pl-5">
                {nutritionData.vitamins.map((vitamin, index) => (
                  <li key={index}>{vitamin}</li>
                ))}
              </ul>
            </div>
          )}

          {nutritionData.minerals && nutritionData.minerals.length > 0 && (
            <div>
              <h4 className="font-medium mt-3 mb-1">Minerals:</h4>
              <ul className="text-sm list-disc pl-5">
                {nutritionData.minerals.map((mineral, index) => (
                  <li key={index}>{mineral}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default NutritionInfo;

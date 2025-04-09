
import React from "react";
import IngredientItem from "./IngredientItem";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Ingredient } from "@/types/ingredients";

interface IngredientsListProps {
  ingredients: {
    good: Ingredient[];
    moderate: Ingredient[];
    bad: Ingredient[];
  };
}

const IngredientsList = ({ ingredients }: IngredientsListProps) => {
  const goodCount = ingredients.good.length;
  const moderateCount = ingredients.moderate.length;
  const badCount = ingredients.bad.length;
  const totalCount = goodCount + moderateCount + badCount;

  // Calculate percentages for the summary bar
  const goodPercentage = totalCount > 0 ? (goodCount / totalCount) * 100 : 0;
  const moderatePercentage = totalCount > 0 ? (moderateCount / totalCount) * 100 : 0;
  const badPercentage = totalCount > 0 ? (badCount / totalCount) * 100 : 0;

  return (
    <div className="w-full max-w-md mx-auto">
      {/* Summary bar */}
      <div className="mb-6">
        <div className="flex h-2 mb-1 overflow-hidden rounded-full bg-gray-200">
          <div 
            className="bg-cleanscan-green" 
            style={{ width: `${goodPercentage}%` }}
          ></div>
          <div 
            className="bg-cleanscan-yellow" 
            style={{ width: `${moderatePercentage}%` }}
          ></div>
          <div 
            className="bg-cleanscan-red" 
            style={{ width: `${badPercentage}%` }}
          ></div>
        </div>
        <div className="flex text-xs text-cleanscan-neutral-gray justify-between">
          <div>{Math.round(goodPercentage)}% Good</div>
          <div>{Math.round(moderatePercentage)}% Moderate</div>
          <div>{Math.round(badPercentage)}% Concerning</div>
        </div>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="all">
            All ({totalCount})
          </TabsTrigger>
          <TabsTrigger value="good" className="text-green-600">
            Good ({goodCount})
          </TabsTrigger>
          <TabsTrigger value="moderate" className="text-yellow-600">
            Moderate ({moderateCount})
          </TabsTrigger>
          <TabsTrigger value="bad" className="text-red-600">
            Bad ({badCount})
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="all" className="mt-4 space-y-2">
          {badCount > 0 && (
            <>
              <h3 className="text-sm font-semibold text-red-600 mt-2">Concerning</h3>
              {ingredients.bad.map((item) => (
                <IngredientItem
                  key={item.name}
                  name={item.name}
                  category="bad"
                  description={item.description}
                />
              ))}
            </>
          )}
          
          {moderateCount > 0 && (
            <>
              <h3 className="text-sm font-semibold text-yellow-600 mt-4">Moderate</h3>
              {ingredients.moderate.map((item) => (
                <IngredientItem
                  key={item.name}
                  name={item.name}
                  category="moderate"
                  description={item.description}
                />
              ))}
            </>
          )}
          
          {goodCount > 0 && (
            <>
              <h3 className="text-sm font-semibold text-green-600 mt-4">Good</h3>
              {ingredients.good.map((item) => (
                <IngredientItem
                  key={item.name}
                  name={item.name}
                  category="good"
                  description={item.description}
                />
              ))}
            </>
          )}
        </TabsContent>
        
        <TabsContent value="good" className="mt-4 space-y-2">
          {goodCount > 0 ? (
            ingredients.good.map((item) => (
              <IngredientItem
                key={item.name}
                name={item.name}
                category="good"
                description={item.description}
              />
            ))
          ) : (
            <p className="text-sm text-center text-cleanscan-neutral-gray py-4">
              No good ingredients found.
            </p>
          )}
        </TabsContent>
        
        <TabsContent value="moderate" className="mt-4 space-y-2">
          {moderateCount > 0 ? (
            ingredients.moderate.map((item) => (
              <IngredientItem
                key={item.name}
                name={item.name}
                category="moderate"
                description={item.description}
              />
            ))
          ) : (
            <p className="text-sm text-center text-cleanscan-neutral-gray py-4">
              No moderate ingredients found.
            </p>
          )}
        </TabsContent>
        
        <TabsContent value="bad" className="mt-4 space-y-2">
          {badCount > 0 ? (
            ingredients.bad.map((item) => (
              <IngredientItem
                key={item.name}
                name={item.name}
                category="bad"
                description={item.description}
              />
            ))
          ) : (
            <p className="text-sm text-center text-cleanscan-neutral-gray py-4">
              No concerning ingredients found.
            </p>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default IngredientsList;

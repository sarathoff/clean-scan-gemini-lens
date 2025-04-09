
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ClipboardPaste } from "lucide-react";

interface ManualEntryProps {
  onSubmit: (text: string) => void;
}

const ManualEntry = ({ onSubmit }: ManualEntryProps) => {
  const [ingredients, setIngredients] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (ingredients.trim()) {
      onSubmit(ingredients.trim());
    }
  };

  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText();
      setIngredients(text);
    } catch (err) {
      console.error("Failed to read clipboard:", err);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <label htmlFor="ingredients" className="block text-sm font-medium">
            Enter Ingredients List
          </label>
          <div className="relative">
            <Textarea
              id="ingredients"
              value={ingredients}
              onChange={(e) => setIngredients(e.target.value)}
              placeholder="Paste or type ingredients here..."
              className="min-h-[200px] resize-y pr-10"
              required
            />
            <button
              type="button"
              onClick={handlePaste}
              className="absolute right-2 top-2 p-1 rounded-md hover:bg-gray-100"
            >
              <ClipboardPaste className="w-4 h-4 text-cleanscan-neutral-gray" />
              <span className="sr-only">Paste from clipboard</span>
            </button>
          </div>
        </div>

        <div className="pt-2">
          <Button
            type="submit"
            className="w-full bg-cleanscan-green hover:bg-green-600 text-white"
            disabled={!ingredients.trim()}
          >
            Analyze Ingredients
          </Button>
        </div>
      </form>

      <div className="mt-6 p-4 bg-cleanscan-light-green rounded-lg">
        <h3 className="text-sm font-semibold mb-2">Tips:</h3>
        <ul className="text-xs text-cleanscan-dark-gray space-y-1">
          <li>• Copy & paste ingredients from product websites for best results</li>
          <li>• Include all ingredients for the most accurate analysis</li>
          <li>• Separate different ingredients with commas</li>
        </ul>
      </div>
    </div>
  );
};

export default ManualEntry;

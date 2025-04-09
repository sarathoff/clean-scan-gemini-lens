
export interface Ingredient {
  name: string;
  category: 'good' | 'moderate' | 'bad';
  description: string;
}

export interface AnalysisResult {
  ingredients: {
    good: Ingredient[];
    moderate: Ingredient[];
    bad: Ingredient[];
  };
  nutrition?: {
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
  } | null;
  didYouKnow?: string;
}

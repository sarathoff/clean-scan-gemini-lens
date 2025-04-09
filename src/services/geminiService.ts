
import { GoogleGenerativeAI } from "@google/generative-ai";
import { AnalysisResult } from "@/types/ingredients";

// This would be stored securely in a production environment
// For demo purposes, we're using a placeholder API key
// You need to replace this with a valid Google Gemini API key
const API_KEY = "YOUR_GEMINI_API_KEY"; 

// Initialize the Gemini API client
let genAI: GoogleGenerativeAI;

try {
  genAI = new GoogleGenerativeAI(API_KEY);
} catch (error) {
  console.error("Error initializing Gemini API:", error);
}

const MODEL_NAME = "gemini-1.5-pro";

// Helper function to convert blob to base64
const blobToBase64 = (blob: Blob): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result as string);
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
};

// Helper to convert data URL to blob
const dataURLtoBlob = (dataURL: string): Blob => {
  const arr = dataURL.split(',');
  const mime = arr[0].match(/:(.*?);/)![1];
  const bstr = atob(arr[1]);
  let n = bstr.length;
  const u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new Blob([u8arr], { type: mime });
};

export const analyzeImageIngredients = async (imageDataUrl: string): Promise<AnalysisResult> => {
  if (!genAI) {
    throw new Error("Gemini API not initialized. Please check your API key.");
  }

  try {
    const model = genAI.getGenerativeModel({ model: MODEL_NAME });

    // Convert data URL to Blob and then to base64
    const blob = dataURLtoBlob(imageDataUrl);
    const base64Image = await blobToBase64(blob);

    const prompt = `
      Analyze the following product ingredient list image. 
      
      1. Extract all ingredients.
      2. Categorize each ingredient as "good", "moderate", or "bad" based on scientific health research.
      3. For each ingredient, provide a brief explanation of what it is and why it's categorized that way.
      4. If this is a food product and nutritional information is visible, extract it.
      
      Return the results in JSON format like this:
      {
        "ingredients": {
          "good": [
            {"name": "ingredient name", "description": "explanation"}
          ],
          "moderate": [
            {"name": "ingredient name", "description": "explanation"}
          ],
          "bad": [
            {"name": "ingredient name", "description": "explanation"}
          ]
        },
        "nutrition": {
          // nutrition data if available, null if not
        },
        "didYouKnow": "An interesting fact about one of the ingredients"
      }
    `;

    const imagePart = {
      inlineData: {
        data: base64Image.split(',')[1],
        mimeType: "image/jpeg",
      },
    };

    const result = await model.generateContent([prompt, imagePart]);
    const response = await result.response;
    const text = response.text();

    // Extract JSON from the response
    const jsonMatch = text.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
      throw new Error("Failed to parse JSON response from Gemini");
    }

    const jsonData = JSON.parse(jsonMatch[0]) as AnalysisResult;
    return jsonData;
  } catch (error) {
    console.error("Error analyzing image:", error);
    throw new Error("Failed to analyze ingredients. Please try again.");
  }
};

export const analyzeTextIngredients = async (ingredientsText: string): Promise<AnalysisResult> => {
  if (!genAI) {
    throw new Error("Gemini API not initialized. Please check your API key.");
  }

  try {
    const model = genAI.getGenerativeModel({ model: MODEL_NAME });

    const prompt = `
      Analyze the following product ingredient list: 
      
      "${ingredientsText}"
      
      1. Identify all ingredients.
      2. Categorize each ingredient as "good", "moderate", or "bad" based on scientific health research.
      3. For each ingredient, provide a brief explanation of what it is and why it's categorized that way.
      4. If this is a food product and nutritional information is included, extract it.
      
      Return the results in JSON format like this:
      {
        "ingredients": {
          "good": [
            {"name": "ingredient name", "description": "explanation"}
          ],
          "moderate": [
            {"name": "ingredient name", "description": "explanation"}
          ],
          "bad": [
            {"name": "ingredient name", "description": "explanation"}
          ]
        },
        "nutrition": {
          // nutrition data if available, null if not
        },
        "didYouKnow": "An interesting fact about one of the ingredients"
      }
    `;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    // Extract JSON from the response
    const jsonMatch = text.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
      throw new Error("Failed to parse JSON response from Gemini");
    }

    const jsonData = JSON.parse(jsonMatch[0]) as AnalysisResult;
    return jsonData;
  } catch (error) {
    console.error("Error analyzing text:", error);
    throw new Error("Failed to analyze ingredients. Please try again.");
  }
};

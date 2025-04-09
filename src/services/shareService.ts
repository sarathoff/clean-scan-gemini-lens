
import { AnalysisResult } from "@/types/ingredients";
import html2canvas from "html2canvas";

// Share results using the Web Share API
export const shareResults = async (result: AnalysisResult): Promise<boolean> => {
  try {
    if (!navigator.share) {
      alert("Web Share API is not available on your browser. Try another share option.");
      return false;
    }

    // Create a text summary of the results
    const goodCount = result.ingredients.good.length;
    const moderateCount = result.ingredients.moderate.length;
    const badCount = result.ingredients.bad.length;
    const totalCount = goodCount + moderateCount + badCount;

    const shareText = `
CleanScan Results:
✅ Good ingredients: ${goodCount} (${Math.round((goodCount / totalCount) * 100)}%)
⚠️ Moderate ingredients: ${moderateCount} (${Math.round((moderateCount / totalCount) * 100)}%)
❌ Concerning ingredients: ${badCount} (${Math.round((badCount / totalCount) * 100)}%)

Learn more at cleanscan.app
`.trim();

    await navigator.share({
      title: "CleanScan Results",
      text: shareText,
    });

    return true;
  } catch (error) {
    console.error("Error sharing results:", error);
    return false;
  }
};

// Download results as an image
export const downloadAsImage = async (elementId: string): Promise<boolean> => {
  try {
    const element = document.getElementById(elementId);
    if (!element) {
      console.error("Element not found:", elementId);
      return false;
    }

    // Create a canvas from the element
    const canvas = await html2canvas(element, {
      backgroundColor: "#FFFFFF",
      scale: 2, // Higher scale for better quality
    });

    // Convert canvas to PNG data URL
    const dataUrl = canvas.toDataURL("image/png");

    // Create download link
    const link = document.createElement("a");
    link.download = `cleanscan-results-${new Date().toISOString().split("T")[0]}.png`;
    link.href = dataUrl;
    link.click();

    return true;
  } catch (error) {
    console.error("Error downloading image:", error);
    return false;
  }
};

// Copy results to clipboard
export const copyToClipboard = async (result: AnalysisResult): Promise<boolean> => {
  try {
    // Create a text summary of the results
    const goodIngredients = result.ingredients.good.map(i => `✅ ${i.name}`).join("\n");
    const moderateIngredients = result.ingredients.moderate.map(i => `⚠️ ${i.name}`).join("\n");
    const badIngredients = result.ingredients.bad.map(i => `❌ ${i.name}`).join("\n");

    const clipboardText = `
CleanScan Results:

Good ingredients:
${goodIngredients || "None"}

Moderate ingredients:
${moderateIngredients || "None"}

Concerning ingredients:
${badIngredients || "None"}

Analyzed with CleanScan
`.trim();

    await navigator.clipboard.writeText(clipboardText);
    return true;
  } catch (error) {
    console.error("Error copying to clipboard:", error);
    return false;
  }
};


import { AnalysisResult } from "@/types/ingredients";

const STORAGE_KEY = "cleanscan_history";

interface ScanHistory {
  id: string;
  timestamp: number;
  productName?: string;
  result: AnalysisResult;
  imageData?: string;
}

// Get scan history from localStorage
export const getHistory = (): ScanHistory[] => {
  try {
    const historyJson = localStorage.getItem(STORAGE_KEY);
    if (!historyJson) return [];
    
    return JSON.parse(historyJson) as ScanHistory[];
  } catch (error) {
    console.error("Error retrieving scan history:", error);
    return [];
  }
};

// Save a new scan result to history
export const saveToHistory = (result: AnalysisResult, imageData?: string, productName?: string): void => {
  try {
    const history = getHistory();
    
    // Create new history entry
    const newEntry: ScanHistory = {
      id: generateId(),
      timestamp: Date.now(),
      result,
      productName,
      // If imageData is provided, we may want to store a smaller version or just metadata
      // For simplicity, we'll store it as is for now
      imageData
    };
    
    // Add to beginning of array and limit to last 10 entries
    const updatedHistory = [newEntry, ...history].slice(0, 10);
    
    // Save to localStorage
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedHistory));
  } catch (error) {
    console.error("Error saving scan to history:", error);
  }
};

// Generate a simple ID
const generateId = (): string => {
  return Math.random().toString(36).substring(2, 9);
};

// Clear all scan history
export const clearHistory = (): void => {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    console.error("Error clearing scan history:", error);
  }
};

// Get a specific scan by ID
export const getScanById = (id: string): ScanHistory | undefined => {
  const history = getHistory();
  return history.find(item => item.id === id);
};

// Delete a specific scan by ID
export const deleteScanById = (id: string): void => {
  try {
    const history = getHistory();
    const updatedHistory = history.filter(item => item.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedHistory));
  } catch (error) {
    console.error("Error deleting scan:", error);
  }
};

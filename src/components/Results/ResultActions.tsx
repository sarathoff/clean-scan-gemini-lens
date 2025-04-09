
import React from "react";
import { Button } from "@/components/ui/button";
import { Share2, Download, Undo2 } from "lucide-react";

interface ResultActionsProps {
  onScan: () => void;
  onShare: () => void;
  onDownload: () => void;
}

const ResultActions = ({ onScan, onShare, onDownload }: ResultActionsProps) => {
  return (
    <div className="flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-3 w-full max-w-md mx-auto mt-6">
      <Button
        variant="outline"
        className="flex-1 flex items-center justify-center"
        onClick={onScan}
      >
        <Undo2 className="mr-2 h-4 w-4" />
        Scan Another
      </Button>
      <Button
        variant="outline"
        className="flex-1 flex items-center justify-center"
        onClick={onShare}
      >
        <Share2 className="mr-2 h-4 w-4" />
        Share
      </Button>
      <Button
        variant="outline"
        className="flex-1 flex items-center justify-center"
        onClick={onDownload}
      >
        <Download className="mr-2 h-4 w-4" />
        Save
      </Button>
    </div>
  );
};

export default ResultActions;


import React from "react";
import { Link } from "react-router-dom";
import { ScanQrCode } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="container flex items-center justify-between h-16 px-4 mx-auto sm:px-6">
        <Link to="/" className="flex items-center">
          <ScanQrCode className="w-6 h-6 mr-2 text-cleanscan-green" />
          <span className="text-xl font-bold">CleanScan</span>
        </Link>
        <nav className="hidden sm:flex items-center space-x-6">
          <Link to="/" className="text-sm font-medium hover:text-cleanscan-green transition-colors">
            Home
          </Link>
          <Link to="/about" className="text-sm font-medium hover:text-cleanscan-green transition-colors">
            About
          </Link>
          <Link to="/privacy" className="text-sm font-medium hover:text-cleanscan-green transition-colors">
            Privacy
          </Link>
          <Link to="/terms" className="text-sm font-medium hover:text-cleanscan-green transition-colors">
            Terms
          </Link>
          <Link to="/contact" className="text-sm font-medium hover:text-cleanscan-green transition-colors">
            Contact
          </Link>
        </nav>
        <div className="sm:hidden">
          <Button variant="ghost" className="p-2">
            <span className="sr-only">Open menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;

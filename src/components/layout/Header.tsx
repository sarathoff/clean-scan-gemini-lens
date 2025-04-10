
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ScanQrCode, X, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="container flex items-center justify-between h-16 px-4 mx-auto sm:px-6">
        <Link to="/" className="flex items-center">
          <ScanQrCode className="w-6 h-6 mr-2 text-cleanscan-green" />
          <span className="text-xl font-bold font-dm-sans">Under the Label</span>
        </Link>
        
        <NavigationMenu className="hidden sm:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link to="/" className={cn("px-4 py-2 text-sm font-medium transition-colors hover:text-cleanscan-green")}>
                Home
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/about" className={cn("px-4 py-2 text-sm font-medium transition-colors hover:text-cleanscan-green")}>
                About
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/privacy" className={cn("px-4 py-2 text-sm font-medium transition-colors hover:text-cleanscan-green")}>
                Privacy
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/terms" className={cn("px-4 py-2 text-sm font-medium transition-colors hover:text-cleanscan-green")}>
                Terms
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/contact" className={cn("px-4 py-2 text-sm font-medium transition-colors hover:text-cleanscan-green")}>
                Contact
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        
        <div className="sm:hidden">
          <Button variant="ghost" className="p-2" onClick={toggleMobileMenu}>
            <span className="sr-only">{mobileMenuOpen ? 'Close menu' : 'Open menu'}</span>
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-white sm:hidden">
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between p-4 border-b">
              <Link to="/" className="flex items-center" onClick={() => setMobileMenuOpen(false)}>
                <ScanQrCode className="w-6 h-6 mr-2 text-cleanscan-green" />
                <span className="text-xl font-bold font-dm-sans">Under the Label</span>
              </Link>
              <Button variant="ghost" className="p-2" onClick={toggleMobileMenu}>
                <X className="w-6 h-6" />
              </Button>
            </div>
            <nav className="flex flex-col p-4 space-y-4">
              <Link 
                to="/" 
                className="py-3 text-lg font-medium transition-colors hover:text-cleanscan-green"
                onClick={toggleMobileMenu}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className="py-3 text-lg font-medium transition-colors hover:text-cleanscan-green"
                onClick={toggleMobileMenu}
              >
                About
              </Link>
              <Link 
                to="/privacy" 
                className="py-3 text-lg font-medium transition-colors hover:text-cleanscan-green"
                onClick={toggleMobileMenu}
              >
                Privacy
              </Link>
              <Link 
                to="/terms" 
                className="py-3 text-lg font-medium transition-colors hover:text-cleanscan-green"
                onClick={toggleMobileMenu}
              >
                Terms
              </Link>
              <Link 
                to="/contact" 
                className="py-3 text-lg font-medium transition-colors hover:text-cleanscan-green"
                onClick={toggleMobileMenu}
              >
                Contact
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

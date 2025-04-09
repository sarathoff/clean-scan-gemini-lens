
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-cleanscan-light-green py-8 border-t border-gray-100">
      <div className="container px-4 mx-auto sm:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <h3 className="text-base font-bold mb-4 font-dm-sans">CleanScan</h3>
            <p className="text-sm text-cleanscan-dark-gray">
              Helping you make informed decisions about the products you use every day.
            </p>
          </div>
          <div>
            <h3 className="text-base font-bold mb-4 font-dm-sans">Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-cleanscan-green transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-cleanscan-green transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-cleanscan-green transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-base font-bold mb-4 font-dm-sans">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/privacy" className="hover:text-cleanscan-green transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-cleanscan-green transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-gray-200">
          <p className="text-sm text-center text-cleanscan-dark-gray">
            © {new Date().getFullYear()} CleanScan. All rights reserved. Created by Sarath Ramesh
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

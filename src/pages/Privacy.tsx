import React from "react";
import Layout from "@/components/layout/Layout";
import { Shield, Database, Eye, Lock } from "lucide-react";

const Privacy = () => {
  return (
    <Layout>
      <div className="container px-4 py-8 mx-auto sm:px-6"></div>
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

          <div className="prose max-w-none">
            <div className="flex items-center mb-4">
              <Shield className="w-6 h-6 mr-3 text-cleanscan-green" />
              <p className="text-lg font-medium">Last Updated: April 9, 2025</p>
            </div>
            
            <p className="mb-6">
              We at Under the Label ("we", "us", "our") respect your privacy and are committed to protecting your personal data. This privacy policy explains how we collect, use, and safeguard your information when you use our web application.
            </p>
            
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <Database className="w-5 h-5 mr-2" /> Information We Collect
              </h2>
              
              <p className="mb-4">
                When you use Under the Label, we collect the following types of information:
              </p>
              
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>
                  <strong>Camera Images:</strong> When you use the scanning feature, the app temporarily processes the image you capture of product ingredients. These images are processed locally on your device and through our secure API.
                </li>
                <li>
                  <strong>Text Input:</strong> Any text you manually enter for ingredient analysis.
                </li>
                <li>
                  <strong>Usage Data:</strong> Information about how you interact with our application, including features used and time spent.
                </li>
                <li>
                  <strong>Device Information:</strong> Basic information about your device such as browser type, operating system, and screen size to optimize your experience.
                </li>
              </ul>
              
              <p>
                <strong>Local Storage:</strong> We use your browser's local storage to save your recent scans, allowing you to access your history without requiring account creation.
              </p>
            </div>
            
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <Eye className="w-5 h-5 mr-2" /> How We Use Your Information
              </h2>
              
              <p className="mb-4">
                We use the information we collect to:
              </p>
              
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Analyze product ingredients and provide you with the results</li>
                <li>Improve and optimize our application and services</li>
                <li>Diagnose technical issues and enhance security</li>
                <li>Store your recent scan history for your convenience</li>
                <li>Display relevant, non-intrusive advertisements</li>
              </ul>
            </div>
            
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <Lock className="w-5 h-5 mr-2" /> Data Security
              </h2>
              
              <p className="mb-4">
                We implement appropriate security measures to protect your personal information:
              </p>
              
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Images processed through our API are not permanently stored on our servers</li>
                <li>Scan history is stored locally on your device, not on our servers</li>
                <li>We use secure protocols for all data transmission</li>
                <li>We regularly review and update our security practices</li>
              </ul>
            </div>
            
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Cookies and Tracking</h2>
              
              <p className="mb-4">
                Under the Label uses cookies and similar tracking technologies to enhance your user experience and collect usage data. We also use these technologies to serve relevant advertisements.
              </p>
              
              <p>
                You can control cookie settings through your browser preferences. Please note that disabling cookies may affect some functionality of the application.
              </p>
            </div>
            
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Third-Party Services</h2>
              
              <p className="mb-4">
                We use the following third-party services:
              </p>
              
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Google Gemini for AI-powered ingredient analysis</li>
                <li>Google AdSense for displaying advertisements</li>
                <li>Web analytics services to understand usage patterns</li>
              </ul>
              
              <p>
                Each of these services has their own privacy policies that govern how they process data.
              </p>
            </div>
            
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Your Rights</h2>
              
              <p className="mb-4">
                Depending on your location, you may have rights regarding your personal data, including:
              </p>
              
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Right to access information we have about you</li>
                <li>Right to correction of inaccurate information</li>
                <li>Right to deletion of your data</li>
                <li>Right to object to processing</li>
                <li>Right to data portability</li>
              </ul>
              
              <p>
                To exercise these rights, please contact us using the information provided below.
              </p>
            </div>
            
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Changes to This Policy</h2>
              
              <p>
                We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last Updated" date.
              </p>
            </div>
            
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
              
              <p>
                If you have any questions about this privacy policy or our data practices, please contact us at:
              </p>
              
              <div className="mt-4 p-4 bg-cleanscan-light-green rounded-md">
                <p className="font-medium">Under the Label</p>
                <p>privacy@underthelabel.app</p>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
};

export default Privacy;

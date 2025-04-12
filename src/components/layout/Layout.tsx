
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import SEO from "./SEO";

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

const Layout = ({ children, title, description }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <SEO title={title} description={description} />
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;

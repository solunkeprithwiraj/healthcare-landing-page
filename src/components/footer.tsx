import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Instagram, Facebook, Twitter } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-pink-50 to-purple-50 border-t border-pink-100">
      <Card className="max-w-7xl mx-auto px-4 py-10 flex flex-col md:flex-row items-center md:items-start justify-between gap-8 shadow-none border-none bg-transparent">
        <CardContent className="flex flex-col items-center md:items-start p-0">
          <div className="flex items-center gap-2 mb-3">
            <div className="relative w-8 h-8 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center">
              <span className="text-white font-bold text-sm">B</span>
            </div>
            <div className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">PregaCoach</div>
          </div>
          <p className="text-gray-600 text-sm max-w-xs text-center md:text-left">
            Your trusted companion through every step of motherhood.
          </p>
        </CardContent>
        
        <div className="flex flex-col gap-6">
          <h3 className="font-semibold text-gray-800">Quick Links</h3>
          <nav className="flex flex-col gap-3 text-gray-600 text-sm">
            <a href="/features" className="hover:text-pink-600 transition">Features</a>
            <a href="/about" className="hover:text-pink-600 transition">About</a>
            <a href="/blog" className="hover:text-pink-600 transition">Blog</a>
            <a href="/contact" className="hover:text-pink-600 transition">Contact</a>
          </nav>
        </div>
        
        <div className="flex flex-col gap-6">
          <h3 className="font-semibold text-gray-800">Legal</h3>
          <nav className="flex flex-col gap-3 text-gray-600 text-sm">
            <a href="/privacy" className="hover:text-pink-600 transition">Privacy Policy</a>
            <a href="/terms" className="hover:text-pink-600 transition">Terms of Service</a>
            <a href="/cookies" className="hover:text-pink-600 transition">Cookie Policy</a>
          </nav>
        </div>
        
        <div className="flex flex-col gap-6">
          <h3 className="font-semibold text-gray-800">Connect With Us</h3>
          <div className="flex gap-4">
            <Button asChild variant="ghost" size="icon" className="rounded-full bg-pink-100 hover:bg-pink-200 text-pink-500 hover:text-pink-600 transition">
              <a href="#" aria-label="Instagram">
                <Instagram size={18} />
              </a>
            </Button>
            <Button asChild variant="ghost" size="icon" className="rounded-full bg-blue-100 hover:bg-blue-200 text-blue-500 hover:text-blue-600 transition">
              <a href="#" aria-label="Facebook">
                <Facebook size={18} />
              </a>
            </Button>
            <Button asChild variant="ghost" size="icon" className="rounded-full bg-purple-100 hover:bg-purple-200 text-purple-500 hover:text-purple-600 transition">
              <a href="#" aria-label="Twitter">
                <Twitter size={18} />
              </a>
            </Button>
          </div>
        </div>
      </Card>
      
      <div className="border-t border-pink-100 mt-8 pt-6 pb-4 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} PregaCoach. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer; 
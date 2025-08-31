import React from "react";
import { Instagram, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-gray-800 bg-black text-white mt-16">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Links */}
        <div className="flex space-x-6 text-sm font-medium">
          <a href="#" className="hover:text-green-500 transition-colors">About</a>
          <a href="#" className="hover:text-green-500 transition-colors">Contact</a>
          <a href="#" className="hover:text-green-500 transition-colors">Privacy Policy</a>
        </div>

        {/* Socials */}
        <div className="flex space-x-6">
          <a href="https://instagram.com/earniko.malayalam" className="hover:text-green-500 transition-colors"><Instagram size={20} /></a>
          <a href="#" className="hover:text-green-500 transition-colors"><Linkedin size={20} /></a>
          <a href="#" className="hover:text-green-500 transition-colors"><Youtube size={20} /></a>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800 text-center py-4 text-sm text-gray-400">
        © 2025 <span className="text-green-500 font-semibold">EARNIKO</span>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from "lucide-react";
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa6';

const Fotter = () => {
    return (
           <footer className="bg-gray-950 text-white mt-20">
      
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Brand Section */}
        <div>
          <h2 className="text-2xl font-bold mb-3">BookLence</h2>
          <p className="text-gray-400 text-sm">
            Your trusted online bookstore. Discover thousands of books at the best price with fast delivery.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-5">
            <FaFacebook />
            <FaInstagram />
            <FaTwitter />
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">Books</li>
            <li className="hover:text-white cursor-pointer">About</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Contact Us</h2>

          <div className="space-y-3 text-gray-400 text-sm">

            <div className="flex items-center gap-2">
              <Mail size={18} />
              <span>support@booklence.com</span>
            </div>

            <div className="flex items-center gap-2">
              <Phone size={18} />
              <span>+880 1234-567890</span>
            </div>

            <p>📍 Kaliganj, Dhaka, Bangladesh</p>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 text-center py-4 text-gray-500 text-sm">
        © {new Date().getFullYear()} BookLence. All rights reserved.
      </div>

    </footer>
    );
};

export default Fotter;
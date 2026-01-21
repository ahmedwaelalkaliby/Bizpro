
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary text-slate-400 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Section */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-1 text-3xl font-black text-white">
              <span className="text-secondary">B</span>izpro
            </div>
            <p className="text-sm leading-relaxed max-w-xs">
              This is a big one and i consider it one of the most important things for a business.
            </p>
            <div className="flex items-center gap-4">
              <a 
               href="#" 
               className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center 
               hover:border-secondary hover:text-secondary transition-all duration-300 cursor-pointer"
               >
                <Facebook size={16} />
              </a>
               <a 
               href="#" 
               className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center 
               hover:border-secondary hover:text-secondary transition-all duration-300 cursor-pointer"
               >
                <Instagram size={16} />
              </a>
               <a 
               href="#" 
               className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center 
               hover:border-secondary hover:text-secondary transition-all duration-300 cursor-pointer"
               >
                <Twitter size={16} />
              </a>
               <a 
               href="#" 
               className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center 
               hover:border-secondary hover:text-secondary transition-all duration-300 cursor-pointer"
               >
                <Linkedin size={16} />
               </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-secondary transition">Home</a></li>
              <li><a href="#" className="hover:text-secondary transition">About</a></li>
              <li><a href="#" className="hover:text-secondary transition">Appointment</a></li>
              <li><a href="#" className="hover:text-secondary transition">Blog</a></li>
              <li><a href="#" className="hover:text-secondary transition">Contact</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-secondary transition">About</a></li>
              <li><a href="#" className="hover:text-secondary transition">Contact</a></li>
              <li><a href="#" className="hover:text-secondary transition">Careers</a></li>
              <li><a href="#" className="hover:text-secondary transition">Press</a></li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h4 className="text-white font-bold mb-6">Information</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-secondary transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-secondary transition">Terms & Condition</a></li>
              <li><a href="#" className="hover:text-secondary transition">FAQ</a></li>
            </ul>
          </div>
        </div>

        {/* Divider line */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium">
          <p>
            Copyright © 2026 <span className="text-secondary">B</span>izpro
          </p>
          <p>All Rights Reserved</p>
        </div>
      </div>
    </footer>
  )
}

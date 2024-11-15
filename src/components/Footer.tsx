import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Github, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-secondary pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2">
              <Leaf className="h-8 w-8 text-primary" />
              <span className="text-white text-xl font-bold">EcoGuardian</span>
            </div>
            <p className="mt-4 text-gray-400">
              Measuring and reducing software's carbon footprint, one line of code at a time.
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-primary">About</Link></li>
              <li><Link to="/calculator" className="text-gray-400 hover:text-primary">Calculator</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-primary">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="https://www.persefoni.com/blog/emissions-profile-technology-software" className="text-gray-400 hover:text-primary">Blog</a></li>
              <li><a href="https://greensoftware.foundation/articles/how-intesa-and-ntt-data-measure-energy-consumption-of-software" className="text-gray-400 hover:text-primary">Documentation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary">API</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="https://github.com/mishraharshittt" className="text-gray-400 hover:text-primary">
                <Github className="h-6 w-6" />
              </a>
              <a href="https://x.com/UNEP?t=eePCjDfJdTXmuL_xyOIXhw&s=09" className="text-gray-400 hover:text-primary">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="https://www.linkedin.com/in/harshit-mishra-b4508a26b/" className="text-gray-400 hover:text-primary">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} EcoGuardian. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
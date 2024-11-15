import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, TreePine, Cloud, Code } from 'lucide-react';

export default function Home() {
  return (
    <div className="relative">
      {/* Video Background */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          className="w-full h-full object-cover"
          style={{ filter: 'brightness(0.3)' }}
        >
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-forest-stream-in-the-sunlight-529-large.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      {/* Hero Content */}
      <div className="relative min-h-screen">
        <div className="pt-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-6xl font-bold mb-6">
              <span className="text-white">BE THE</span>
              <br />
              <span className="text-primary">CHANGE!</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Measure & Reduce Your Software's Carbon Footprint
            </p>

            <div className="flex justify-center space-x-4 mb-16">
              <Link
                to="/login"
                className="bg-primary text-secondary px-8 py-3 rounded-lg hover:bg-primary-dark flex items-center space-x-2"
              >
                <span>Try Calculator</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/about"
                className="border border-primary text-primary px-8 py-3 rounded-lg hover:bg-primary hover:text-secondary"
              >
                Learn More
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="bg-secondary-light p-8 rounded-lg">
                <div className="text-primary text-4xl font-bold mb-2">1M+</div>
                <div className="text-gray-400">Calculations Made</div>
              </div>
              <div className="bg-secondary-light p-8 rounded-lg">
                <div className="text-primary text-4xl font-bold mb-2">50K+</div>
                <div className="text-gray-400">Trees Saved</div>
              </div>
              <div className="bg-secondary-light p-8 rounded-lg">
                <div className="text-primary text-4xl font-bold mb-2">100K+</div>
                <div className="text-gray-400">Developers</div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="bg-secondary-light/50 backdrop-blur-md mt-32 py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="text-center">
                <TreePine className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Environmental Impact</h3>
                <p className="text-gray-400">
                  Track your software's carbon footprint and make informed decisions
                </p>
              </div>
              <div className="text-center">
                <Cloud className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">MUltiple Projects</h3>
                <p className="text-gray-400">
                  All projects linked to one page to enhance simplicity
                </p>
              </div>
              <div className="text-center">
                <Code className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Developer Tools</h3>
                <p className="text-gray-400">
                  Access comprehensive tools to optimize your code's efficiency
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
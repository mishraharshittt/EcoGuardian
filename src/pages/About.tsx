import React from 'react';
import { Shield, TreePine, Users, Globe } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: Shield,
      title: 'Environmental Protection',
      description: 'We help software teams measure and reduce their carbon footprint through innovative solutions.',
    },
    {
      icon: TreePine,
      title: 'Sustainable Development',
      description: 'Our tools promote sustainable software development practices and green coding principles.',
    },
    {
      icon: Users,
      title: 'Community Driven',
      description: 'We work with developers worldwide to create more environmentally conscious software.',
    },
    {
      icon: Globe,
      title: 'Global Impact',
      description: 'Making a positive environmental impact through better software development practices.',
    },
  ];

  return (
    <div className="min-h-screen pt-20 pb-12">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Making Software
              <span className="text-primary"> Sustainable</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              We're on a mission to reduce the environmental impact of software
              development and create a more sustainable digital future.
            </p>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-secondary-light p-6 rounded-xl hover:transform hover:scale-105 transition-all"
              >
                <Icon className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Mission Statement */}
      <div className="bg-secondary-light py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-gray-400 mb-4">
                At EcoGuardian, we believe that software development can be both powerful and
                environmentally responsible. Our mission is to provide developers and organizations
                with the tools and knowledge they need to create sustainable software solutions.
              </p>
              <p className="text-gray-400">
                Through our innovative carbon footprint calculator and comprehensive resources,
                we're helping teams worldwide measure, understand, and reduce their software's
                environmental impact.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-secondary p-6 rounded-xl">
                <div className="text-primary text-3xl font-bold mb-2">50K+</div>
                <div className="text-gray-400">Active Users</div>
              </div>
              <div className="bg-secondary p-6 rounded-xl">
                <div className="text-primary text-3xl font-bold mb-2">100K+</div>
                <div className="text-gray-400">Projects Analyzed</div>
              </div>
              <div className="bg-secondary p-6 rounded-xl">
                <div className="text-primary text-3xl font-bold mb-2">1M+</div>
                <div className="text-gray-400">Trees Saved</div>
              </div>
              <div className="bg-secondary p-6 rounded-xl">
                <div className="text-primary text-3xl font-bold mb-2">200+</div>
                <div className="text-gray-400">Enterprise Clients</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
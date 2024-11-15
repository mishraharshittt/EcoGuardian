import React from 'react';
import { useAuthStore } from '../store/authStore';
import { TreePine, Cloud, Code, ArrowUpRight, Activity, Leaf, Info } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Dashboard() {
  const { user } = useAuthStore();

  const stats = [
    { label: 'Trees Saved', value: user?.treesSaved || 0, icon: TreePine },
    { label: 'Carbon Reduced', value: '2.4t', icon: Leaf },
    { label: 'Projects', value: '12', icon: Code },
    { label: 'API Calls', value: '1.2M', icon: Activity },
  ];

  const recentProjects = [
    { name: 'E-commerce Platform', impact: '0.8t CO₂', status: 'High Impact' },
    { name: 'Mobile App Backend', impact: '0.3t CO₂', status: 'Optimized' },
    { name: 'Web Analytics Tool', impact: '0.5t CO₂', status: 'In Progress' },
  ];

  return (
    <div className="min-h-screen pt-20 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white">Welcome back, Developer</h1>
          <p className="text-gray-400 mt-2">Track and manage your software's environmental impact</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="bg-secondary-light rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <Icon className="h-8 w-8 text-primary" />
                  <span className="text-xs font-medium text-gray-400">Last 30 days</span>
                </div>
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Recent Projects */}
        <div className="bg-secondary-light rounded-xl p-6 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-white">Recent Projects</h2>
            <button className="text-primary hover:text-primary-dark flex items-center space-x-1">
              <span>View All</span>
              <ArrowUpRight className="h-4 w-4" />
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left text-gray-400 text-sm">
                  <th className="pb-4">Project Name</th>
                  <th className="pb-4">Carbon Impact</th>
                  <th className="pb-4">Status</th>
                  <th className="pb-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {recentProjects.map((project, index) => (
                  <tr key={index} className="border-t border-gray-700">
                    <td className="py-4 text-white">{project.name}</td>
                    <td className="py-4 text-primary">{project.impact}</td>
                    <td className="py-4">
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
                        {project.status}
                      </span>
                    </td>
                    <td className="py-4">
                      <button className="text-gray-400 hover:text-primary">
                        <ArrowUpRight className="h-5 w-5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-secondary-light rounded-xl p-6">
            <h2 className="text-xl font-bold text-white mb-4">Quick Actions</h2>
            <div className="space-y-4">
              <Link
                to="/calculator"
                className="w-full flex items-center justify-between p-4 rounded-lg bg-secondary hover:bg-secondary-light border border-gray-700"
              >
                <div className="flex items-center space-x-3">
                  <Cloud className="h-6 w-6 text-primary" />
                  <span className="text-white">New Calculation</span>
                </div>
                <ArrowUpRight className="h-5 w-5 text-gray-400" />
              </Link>
              <button className="w-full flex items-center justify-between p-4 rounded-lg bg-secondary hover:bg-secondary-light border border-gray-700">
                <div className="flex items-center space-x-3">
                  <Code className="h-6 w-6 text-primary" />
                  <span className="text-white">API Documentation</span>
                </div>
                <ArrowUpRight className="h-5 w-5 text-gray-400" />
              </button>
            </div>
          </div>

          <div className="bg-secondary-light rounded-xl p-6">
            <h2 className="text-xl font-bold text-white mb-4">Environmental Impact</h2>
            <div className="relative pt-1">
              <div className="flex mb-2 items-center justify-between">
                <div>
                  <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-primary bg-primary/10">
                    Carbon Reduction Goal
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-xs font-semibold inline-block text-primary">
                    70%
                  </span>
                </div>
              </div>
              <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-secondary">
                <div
                  style={{ width: '70%' }}
                  className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-primary"
                ></div>
              </div>
              <p className="text-sm text-gray-400">
                You're on track to meet your carbon reduction goals for this quarter!
              </p>
            </div>
          </div>
        </div>

        {/* Note Section */}
        <div className="mt-8 p-4 bg-primary/10 rounded-lg">
          <div className="flex items-start space-x-2">
            <Info className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
            <p className="text-sm text-gray-400">
              The calculations and metrics shown are based on industry statistics and research data.
              Actual environmental impact may vary based on specific implementation details,
              infrastructure efficiency, and usage patterns. Regular monitoring and optimization
              are recommended for more accurate results.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
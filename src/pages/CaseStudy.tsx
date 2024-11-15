import React from 'react';
import { Line } from 'react-chartjs-2';
import { FileCode, Info, TreePine, Server, Users } from 'lucide-react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  BarElement,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

export default function CaseStudy() {
  // Pre-filled values based on the case study
  const vsCodeData = {
    development: {
      hours: 5000,
      energy: 1
    },
    deployment: {
      runtime: 300,
      data: 1500
    },
    user: {
      daily: 5000000,
      time: 2
    }
  };

  const emissionsData = {
    development: 2.5,
    deployment: 1.8,
    user: 3.7
  };

  // Line chart data for emissions over time
  const lineChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Development Phase',
        data: [2.3, 2.4, 2.5, 2.5, 2.6, 2.5],
        borderColor: '#00ff9d',
        tension: 0.4
      },
      {
        label: 'Deployment Phase',
        data: [1.6, 1.7, 1.8, 1.8, 1.9, 1.8],
        borderColor: '#00ccff',
        tension: 0.4
      },
      {
        label: 'User Phase',
        data: [3.5, 3.6, 3.7, 3.7, 3.8, 3.7],
        borderColor: '#ff9d00',
        tension: 0.4
      }
    ]
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          color: '#ffffff'
        }
      },
      title: {
        display: true,
        text: 'Carbon Emissions Trend (Tons CO₂)',
        color: '#ffffff',
        font: {
          size: 16
        }
      }
    },
    scales: {
      y: {
        grid: {
          color: 'rgba(255, 255, 255, 0.1)'
        },
        ticks: {
          color: '#ffffff'
        }
      },
      x: {
        grid: {
          color: 'rgba(255, 255, 255, 0.1)'
        },
        ticks: {
          color: '#ffffff'
        }
      }
    }
  };

  const metrics = [
    {
      icon: TreePine,
      title: 'Development Impact',
      value: '2.5 tons CO₂',
      description: 'From development and testing activities'
    },
    {
      icon: Server,
      title: 'Deployment Impact',
      value: '1.8 tons CO₂',
      description: 'From server operations and updates'
    },
    {
      icon: Users,
      title: 'User Impact',
      value: '3.7 tons CO₂',
      description: 'From daily user activities'
    }
  ];

  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <FileCode className="h-10 w-10 text-primary" />
            <h1 className="text-4xl font-bold text-white">
              VS Code Carbon Footprint Analysis
            </h1>
          </div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A comprehensive study of Visual Studio Code's environmental impact across its development lifecycle
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <div key={index} className="bg-secondary-light rounded-xl p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Icon className="h-8 w-8 text-primary" />
                  <h3 className="text-xl font-semibold text-white">{metric.title}</h3>
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{metric.value}</div>
                <p className="text-gray-400">{metric.description}</p>
              </div>
            );
          })}
        </div>

        {/* Emissions Chart */}
        <div className="bg-secondary-light rounded-xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Carbon Emissions Timeline</h2>
          <div className="h-[400px]">
            <Line data={lineChartData} options={chartOptions} />
          </div>
        </div>

        {/* Detailed Analysis */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-secondary-light rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Analysis Parameters</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-primary mb-4">Development Phase</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-gray-400">Development Hours</p>
                    <p className="text-2xl font-bold text-white">{vsCodeData.development.hours}</p>
                  </div>
                  <div>
                    <p className="text-gray-400">Energy per Hour (kWh)</p>
                    <p className="text-2xl font-bold text-white">{vsCodeData.development.energy}</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-primary mb-4">Deployment Phase</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-gray-400">Server Runtime (h/month)</p>
                    <p className="text-2xl font-bold text-white">{vsCodeData.deployment.runtime}</p>
                  </div>
                  <div>
                    <p className="text-gray-400">Data Transfer (GB/month)</p>
                    <p className="text-2xl font-bold text-white">{vsCodeData.deployment.data}</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-primary mb-4">User Phase</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-gray-400">Daily Active Users</p>
                    <p className="text-2xl font-bold text-white">{vsCodeData.user.daily.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-gray-400">Average Usage (h/day)</p>
                    <p className="text-2xl font-bold text-white">{vsCodeData.user.time}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-secondary-light rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Key Findings</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-primary mb-2">User Impact Dominance</h3>
                <p className="text-gray-400">
                  The user phase contributes the highest carbon emissions at 3.7 tons CO₂,
                  primarily due to the massive user base of 5 million daily active users.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-primary mb-2">Development Footprint</h3>
                <p className="text-gray-400">
                  Development activities generate 2.5 tons CO₂, highlighting the importance
                  of energy-efficient development practices and tools.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-primary mb-2">Deployment Efficiency</h3>
                <p className="text-gray-400">
                  Server operations contribute 1.8 tons CO₂, suggesting opportunities for
                  optimization in cloud infrastructure and update delivery systems.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Recommendations */}
        <div className="bg-secondary-light rounded-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-white mb-6">Recommendations</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-secondary rounded-lg">
              <h3 className="text-lg font-semibold text-primary mb-4">Development Phase</h3>
              <ul className="space-y-2 text-gray-400">
                <li>• Implement energy-efficient coding practices</li>
                <li>• Optimize build and test processes</li>
                <li>• Use green energy for development infrastructure</li>
              </ul>
            </div>
            
            <div className="p-6 bg-secondary rounded-lg">
              <h3 className="text-lg font-semibold text-primary mb-4">Deployment Phase</h3>
              <ul className="space-y-2 text-gray-400">
                <li>• Choose eco-friendly cloud providers</li>
                <li>• Optimize update delivery mechanisms</li>
                <li>• Implement efficient caching strategies</li>
              </ul>
            </div>
            
            <div className="p-6 bg-secondary rounded-lg">
              <h3 className="text-lg font-semibold text-primary mb-4">User Phase</h3>
              <ul className="space-y-2 text-gray-400">
                <li>• Add power-saving features</li>
                <li>• Optimize background processes</li>
                <li>• Implement efficient resource management</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Note Section */}
        <div className="p-4 bg-primary/10 rounded-lg">
          <div className="flex items-start space-x-2">
            <Info className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
            <p className="text-sm text-gray-400">
              This case study uses data collected over a six-month period and represents
              average values. Actual emissions may vary based on specific usage patterns,
              infrastructure efficiency, and regional energy sources.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
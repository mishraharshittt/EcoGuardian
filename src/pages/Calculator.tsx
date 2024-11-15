import React, { useState } from 'react';
import { Activity, Info, Lightbulb } from 'lucide-react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function Calculator() {
  const [softwareName, setSoftwareName] = useState('');
  const [inputs, setInputs] = useState({
    development: { 
      hours: '', 
      energy: '' 
    },
    deployment: { 
      runtime: '', 
      data: '' 
    },
    user: { 
      daily: '', 
      time: '' 
    }
  });

  const [emissions, setEmissions] = useState({
    development: 0,
    deployment: 0,
    user: 0,
    total: 0,
    trees: 0
  });

  const [showResults, setShowResults] = useState(false);

  // Input labels mapping
  const inputLabels = {
    development: {
      hours: 'Development Hours',
      energy: 'Energy Consumption (kWh)'
    },
    deployment: {
      runtime: 'Server Runtime (hours/month)',
      data: 'Data Transfer (GB/month)'
    },
    user: {
      daily: 'Daily Active Users',
      time: 'Average Usage Time (hours)'
    }
  };

  // Chart configuration
  const chartData = {
    labels: ['Development', 'Deployment & Hosting', 'User Interaction'],
    datasets: [
      {
        label: 'Carbon Emissions (kg CO2)',
        data: [emissions.development, emissions.deployment, emissions.user],
        borderColor: '#00ff9d',
        backgroundColor: 'rgba(0, 255, 157, 0.2)',
        tension: 0.4
      }
    ]
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        labels: { color: '#ffffff' }
      }
    },
    scales: {
      y: {
        grid: { color: 'rgba(255, 255, 255, 0.1)' },
        ticks: { color: '#ffffff' }
      },
      x: {
        grid: { color: 'rgba(255, 255, 255, 0.1)' },
        ticks: { color: '#ffffff' }
      }
    }
  };

  const handleInputChange = (phase, field, value) => {
    setInputs(prev => ({
      ...prev,
      [phase]: {
        ...prev[phase],
        [field]: value
      }
    }));
  };

  const calculateEmissions = () => {
    const developmentEmissions = inputs.development.hours * inputs.development.energy * 0.5;
    const deploymentEmissions = inputs.deployment.runtime * 0.3 + inputs.deployment.data * 0.1;
    const userEmissions = inputs.user.daily * inputs.user.time * 30 * 0.05;
    const totalEmission = developmentEmissions + deploymentEmissions + userEmissions;
    const treesNeeded = (totalEmission * 10) / 21; // Trees needed for 10 years

    setEmissions({
      development: parseFloat(developmentEmissions.toFixed(2)),
      deployment: parseFloat(deploymentEmissions.toFixed(2)),
      user: parseFloat(userEmissions.toFixed(2)),
      total: parseFloat(totalEmission.toFixed(2)),
      trees: parseFloat(treesNeeded.toFixed(1))
    });

    setShowResults(true);
  };

  const tips = [
    {
      title: 'Optimize Development',
      tips: [
        'Use energy-efficient hardware and equipment',
        'Enable power-saving modes when possible',
        'Implement efficient coding practices and algorithms',
        'Regular code reviews for performance optimization'
      ]
    },
    {
      title: 'Reduce Deployment Impact',
      tips: [
        'Choose green hosting providers',
        'Implement efficient caching strategies',
        'Optimize server configurations',
        'Use CDNs to reduce data transfer'
      ]
    },
    {
      title: 'Enhance Runtime Efficiency',
      tips: [
        'Minimize unnecessary API calls',
        'Optimize database queries',
        'Implement lazy loading',
        'Use efficient data compression'
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-20 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            Software Carbon Footprint Calculator
          </h1>
          <p className="text-xl text-gray-400">
            Measure and reduce your software's environmental impact across its lifecycle
          </p>
        </div>

        {/* Input Form */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-3">
            <input
              type="text"
              value={softwareName}
              onChange={(e) => setSoftwareName(e.target.value)}
              placeholder="Enter your software name"
              className="w-full px-4 py-2 bg-secondary-light rounded-lg text-white"
            />
          </div>

          {/* Input Fields for Each Phase */}
          {['development', 'deployment', 'user'].map((phase, index) => (
            <div key={index} className="bg-secondary-light rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-4">
                {phase.charAt(0).toUpperCase() + phase.slice(1)} Phase
              </h3>
              {Object.keys(inputs[phase]).map((field, i) => (
                <div key={i} className="mb-4">
                  <label className="block text-sm text-gray-300 mb-1">
                    {inputLabels[phase][field]}
                  </label>
                  <input
                    type="number"
                    value={inputs[phase][field]}
                    onChange={(e) => handleInputChange(phase, field, e.target.value)}
                    placeholder="Enter value"
                    className="w-full px-4 py-2 bg-secondary rounded-lg text-white"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Calculate Button */}
        <button
          onClick={calculateEmissions}
          className="w-full py-3 bg-primary text-white font-bold rounded-lg mb-12"
        >
          Calculate
        </button>

        {/* Display Results */}
        {showResults && (
          <>
            {/* Emissions Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
              {Object.entries(emissions).map(([key, value]) => (
                key !== 'trees' && (
                  <div key={key} className="bg-secondary-light rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-gray-300 mb-2">
                      {key.charAt(0).toUpperCase() + key.slice(1)} Emissions
                    </h3>
                    <p className="text-2xl font-bold text-primary">
                      {value} kg CO₂
                    </p>
                  </div>
                )
              ))}
            </div>

            {/* Trees Needed Card */}
            <div className="bg-secondary-light rounded-xl p-6 mb-8">
              <h3 className="text-lg font-semibold text-gray-300 mb-2">
                Trees Needed (10-year offset)
              </h3>
              <p className="text-2xl font-bold text-primary">
                {emissions.trees} trees
              </p>
              <p className="text-sm text-gray-400 mt-2">
                This represents the number of trees needed to offset your software's carbon emissions over 10 years
              </p>
            </div>

            <div className="bg-secondary-light rounded-xl p-8 mb-12">
              <h2 className="text-xl font-bold text-white mb-6">Carbon Footprint Analysis</h2>
              <Line data={chartData} options={chartOptions} />
            </div>

            {/* Tips Section */}
            <div className="bg-secondary-light rounded-xl p-8 mb-8">
              <div className="flex items-center space-x-2 mb-6">
                <Lightbulb className="h-6 w-6 text-primary" />
                <h2 className="text-xl font-bold text-white">Tips & Best Practices</h2>
              </div>
              {tips.map((section, index) => (
                <div key={index} className="bg-secondary rounded-lg p-6 mb-6">
                  <h3 className="text-primary font-semibold mb-4">{section.title}</h3>
                  <ul className="space-y-2">
                    {section.tips.map((tip, tipIndex) => (
                      <li key={tipIndex} className="text-gray-400">
                        • {tip}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
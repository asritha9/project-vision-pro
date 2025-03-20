
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import ChartComponent from '@/components/ChartComponent';

// Mock data for cost savings trend
const costSavingsTrendData = [
  { month: 'Jan', savings: 35000 },
  { month: 'Feb', savings: 42000 },
  { month: 'Mar', savings: 38000 },
  { month: 'Apr', savings: 45000 },
  { month: 'May', savings: 52000 },
  { month: 'Jun', savings: 58000 },
];

// Mock data for execution time reduction
const executionTimeData = [
  { project: 'Azmara', before: 45, after: 32 },
  { project: 'Nexeo', before: 60, after: 38 },
  { project: 'Statefund', before: 55, after: 35 },
  { project: 'ASTM', before: 40, after: 30 },
];

// Mock data for business impact
const businessImpactData = [
  { risk: 'Critical', mitigated: 250000, potential: 450000 },
  { risk: 'High', mitigated: 180000, potential: 320000 },
  { risk: 'Medium', mitigated: 120000, potential: 180000 },
  { risk: 'Low', mitigated: 75000, potential: 100000 },
];

// Mock data for load testing cost ratio
const loadTestingData = [
  { name: 'Utilization', value: 68 },
  { name: 'Unused', value: 32 },
];

// Time period options
const timePeriods = ['Last Week', 'Last Month', 'Last Quarter', 'Custom Date Range'];

// Project options
const projects = ['All Projects', 'Azmara', 'Nexeo', 'Statefund', 'ASTM'];

const ROI = () => {
  const [timePeriod, setTimePeriod] = useState('Last Quarter');
  const [selectedProject, setSelectedProject] = useState('All Projects');
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8 animate-fade-in">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Return on Investment</h1>
          
          <div className="flex flex-wrap gap-4 mt-4 md:mt-0">
            <select
              value={timePeriod}
              onChange={(e) => setTimePeriod(e.target.value)}
              className="px-4 py-2 bg-white border border-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-skyblue text-sm"
            >
              {timePeriods.map((period) => (
                <option key={period} value={period}>{period}</option>
              ))}
            </select>
            
            <select
              value={selectedProject}
              onChange={(e) => setSelectedProject(e.target.value)}
              className="px-4 py-2 bg-white border border-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-skyblue text-sm"
            >
              {projects.map((project) => (
                <option key={project} value={project}>{project}</option>
              ))}
            </select>
            
            <button className="px-4 py-2 bg-brand-skyblue text-white rounded-lg shadow-sm hover:bg-brand-skyblue-dark text-sm font-medium">
              Export Report
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <Link 
            to="/roi/cost-savings"
            className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
          >
            <h3 className="text-lg font-medium text-gray-800 mb-1">Performance Cost Savings</h3>
            <p className="text-sm text-gray-500 mb-4">Savings from early performance issue detection</p>
            
            <div className="h-[250px]">
              <ChartComponent 
                type="line"
                data={costSavingsTrendData}
                keys={{
                  xAxis: 'month',
                  dataKeys: ['savings']
                }}
                colors={['#60B4EF']}
              />
            </div>
            
            <div className="mt-4 text-brand-skyblue text-sm font-medium">
              View detailed breakdown →
            </div>
          </Link>
          
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h3 className="text-lg font-medium text-gray-800 mb-1">Test Execution Time Reduction</h3>
            <p className="text-sm text-gray-500 mb-4">Faster execution time comparison</p>
            
            <div className="h-[250px]">
              <ChartComponent 
                type="bar"
                data={executionTimeData}
                keys={{
                  xAxis: 'project',
                  dataKeys: ['before', 'after']
                }}
                colors={['#FF8FB4', '#60B4EF']}
              />
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h3 className="text-lg font-medium text-gray-800 mb-1">Business Impact Reduction</h3>
            <p className="text-sm text-gray-500 mb-4">Revenue saved by mitigating performance risks</p>
            
            <div className="h-[250px]">
              <ChartComponent 
                type="bar"
                data={businessImpactData}
                keys={{
                  xAxis: 'risk',
                  dataKeys: ['mitigated', 'potential']
                }}
                colors={['#60B4EF', '#FF8FB4']}
              />
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h3 className="text-lg font-medium text-gray-800 mb-1">Load Testing Cost vs. Utilization</h3>
            <p className="text-sm text-gray-500 mb-4">Efficiency of performance testing tools and infrastructure</p>
            
            <div className="h-[250px]">
              <ChartComponent 
                type="pie"
                data={loadTestingData}
                keys={{
                  dataKeys: ['value']
                }}
                colors={['#60B4EF', '#E2E8F0']}
              />
            </div>
            
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600 mb-1">Total Cost</p>
                <p className="text-xl font-medium text-gray-800">$250,000</p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600 mb-1">Cost per Hour</p>
                <p className="text-xl font-medium text-gray-800">$125</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-10 bg-gradient-to-r from-brand-skyblue/10 to-brand-pink/10 p-6 rounded-xl border border-white">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Total ROI for {timePeriod}</h3>
              <p className="text-gray-600">Total investment of $750,000 has yielded $2,250,000 in savings</p>
            </div>
            
            <div className="mt-4 md:mt-0">
              <div className="bg-white px-6 py-4 rounded-xl shadow-sm">
                <p className="text-sm text-gray-500 mb-1">ROI Ratio</p>
                <p className="text-4xl font-bold text-brand-skyblue">3.0x</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ROI;

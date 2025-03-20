
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import ChartComponent from '@/components/ChartComponent';
import { ArrowLeft } from 'lucide-react';

// Mock data for cost comparison
const costComparisonData = [
  { month: 'Jan', withTesting: 15000, withoutTesting: 55000 },
  { month: 'Feb', withTesting: 18000, withoutTesting: 68000 },
  { month: 'Mar', withTesting: 16000, withoutTesting: 60000 },
  { month: 'Apr', withTesting: 17000, withoutTesting: 65000 },
  { month: 'May', withTesting: 19000, withoutTesting: 72000 },
  { month: 'Jun', withTesting: 20000, withoutTesting: 78000 },
];

// Mock data for defect leakage
const defectLeakageData = [
  { quarter: 'Q1 2023', production: 25, testing: 85 },
  { quarter: 'Q2 2023', production: 18, testing: 92 },
  { quarter: 'Q3 2023', production: 12, testing: 105 },
  { quarter: 'Q4 2023', production: 10, testing: 115 },
  { quarter: 'Q1 2024', production: 8, testing: 120 },
];

// Mock data for team members contribution
const teamMembers = [
  { id: 1, name: 'Alex Johnson', role: 'Senior Test Engineer', salary: 100000, hours: 150, contribution: 45000 },
  { id: 2, name: 'Maria Garcia', role: 'Test Lead', salary: 120000, hours: 180, contribution: 65000 },
  { id: 3, name: 'Thomas Lee', role: 'QA Engineer', salary: 85000, hours: 160, contribution: 38000 },
  { id: 4, name: 'Sarah Wilson', role: 'Performance Test Specialist', salary: 110000, hours: 140, contribution: 52000 },
  { id: 5, name: 'David Kim', role: 'Automation Engineer', salary: 95000, hours: 175, contribution: 48000 },
];

// Mock data for cost by project
const projectCostData = [
  { name: 'Azmara', value: 85000 },
  { name: 'Nexeo', value: 65000 },
  { name: 'Statefund', value: 95000 },
  { name: 'ASTM', value: 55000 },
];

const CostSavingsBreakdown = () => {
  const totalContribution = teamMembers.reduce((sum, member) => sum + member.contribution, 0);
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8 animate-fade-in">
        <div className="mb-6">
          <Link 
            to="/roi" 
            className="inline-flex items-center text-brand-skyblue hover:underline"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to ROI Overview
          </Link>
        </div>
        
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Performance Cost Savings Breakdown</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h3 className="text-lg font-medium text-gray-800 mb-4">How does performance testing reduce costs?</h3>
            
            <div className="space-y-6">
              <div>
                <p className="text-sm font-medium text-gray-700 mb-1">Early Issue Detection Savings</p>
                <p className="text-sm text-gray-600 mb-4">Estimated cost per issue avoided</p>
                
                <div className="flex items-center">
                  <div className="w-16 h-16 bg-brand-skyblue/10 rounded-xl flex items-center justify-center text-brand-skyblue font-medium">
                    $8K
                  </div>
                  <div className="ml-4 flex-1">
                    <p className="text-sm text-gray-600">Average cost to fix in production:</p>
                    <p className="text-lg font-medium text-gray-800">$12,500</p>
                    <p className="text-sm text-gray-600">Average cost to fix in testing:</p>
                    <p className="text-lg font-medium text-gray-800">$4,500</p>
                  </div>
                </div>
              </div>
              
              <div>
                <p className="text-sm font-medium text-gray-700 mb-1">Savings from Test Cycle Reduction</p>
                <p className="text-sm text-gray-600 mb-4">Faster testing = lower labor cost</p>
                
                <div className="flex items-center">
                  <div className="w-16 h-16 bg-brand-pink/10 rounded-xl flex items-center justify-center text-brand-pink font-medium">
                    25%
                  </div>
                  <div className="ml-4">
                    <p className="text-sm text-gray-600">Reduction in test cycle time</p>
                    <p className="text-sm text-gray-600 mt-2">Estimated annual savings:</p>
                    <p className="text-lg font-medium text-gray-800">$120,000</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h3 className="text-lg font-medium text-gray-800 mb-4">Financial Impact Calculator</h3>
            
            <div className="mb-4">
              <select className="w-full px-4 py-2 bg-white border border-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-skyblue text-sm">
                <option>Select a project to see estimated savings</option>
                <option>Azmara</option>
                <option>Nexeo</option>
                <option>Statefund</option>
                <option>ASTM</option>
              </select>
            </div>
            
            <div className="h-[220px]">
              <ChartComponent 
                type="pie"
                data={projectCostData}
                keys={{
                  dataKeys: ['value']
                }}
                colors={['#60B4EF', '#FF8FB4', '#90EE90', '#FFD580']}
              />
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 mb-8">
          <h3 className="text-lg font-medium text-gray-800 mb-4">Comparison Graph</h3>
          
          <div className="h-[300px]">
            <ChartComponent 
              type="bar"
              data={costComparisonData}
              keys={{
                xAxis: 'month',
                dataKeys: ['withTesting', 'withoutTesting']
              }}
              colors={['#60B4EF', '#FF8FB4']}
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h3 className="text-lg font-medium text-gray-800 mb-4">Salary-Based ROI Analysis</h3>
            <p className="text-sm text-gray-600 mb-6">How much does each team member contribute to ROI?</p>
            
            <div className="overflow-x-auto">
              <table className="w-full min-w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Team Member</th>
                    <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
                    <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Salary (LPA)</th>
                    <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Hours Spent</th>
                    <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cost Contribution</th>
                  </tr>
                </thead>
                <tbody>
                  {teamMembers.map((member) => (
                    <tr key={member.id} className="border-b border-gray-100">
                      <td className="py-4 px-4 text-sm text-gray-800 font-medium">{member.name}</td>
                      <td className="py-4 px-4 text-sm text-gray-600">{member.role}</td>
                      <td className="py-4 px-4 text-sm text-gray-800">${member.salary.toLocaleString()}</td>
                      <td className="py-4 px-4 text-sm text-gray-800">{member.hours}</td>
                      <td className="py-4 px-4 text-sm text-gray-800">${member.contribution.toLocaleString()}</td>
                    </tr>
                  ))}
                  <tr className="bg-gray-50">
                    <td colSpan={4} className="py-4 px-4 text-sm font-medium text-gray-700">Total Cost</td>
                    <td className="py-4 px-4 text-sm font-medium text-gray-800">${totalContribution.toLocaleString()}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h3 className="text-lg font-medium text-gray-800 mb-4">Defect Leakage & Business Risk Analysis</h3>
            <p className="text-sm text-gray-600 mb-4">How do performance issues impact revenue?</p>
            
            <div className="h-[250px] mb-6">
              <ChartComponent 
                type="bar"
                data={defectLeakageData}
                keys={{
                  xAxis: 'quarter',
                  dataKeys: ['production', 'testing']
                }}
                colors={['#FF8FB4', '#60B4EF']}
              />
            </div>
            
            <div className="border-t border-gray-100 pt-4 mt-4">
              <h4 className="text-sm font-medium text-gray-700 mb-3">Formula Example for ROI Calculation</h4>
              
              <div className="bg-gray-50 p-4 rounded-lg text-sm">
                <p className="mb-2"><span className="font-medium">Cost of Fixing Defect in Prod</span> = Avg. Fix Cost * Defects Leaked</p>
                <p><span className="font-medium">Cost Savings</span> = (Defect Cost in Prod) - (Cost of Testing)</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CostSavingsBreakdown;

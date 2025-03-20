
import React from 'react';
import Navbar from '@/components/Navbar';
import InitiativeCard from '@/components/InitiativeCard';
import ChartComponent from '@/components/ChartComponent';

// Mock data for initiatives
const initiatives = [
  {
    id: "1",
    name: "RIC - Reliability Improvement Center",
    description: "Centralized platform for monitoring and improving reliability metrics across all projects.",
    progress: 75,
    owner: "Michael Chen",
    startDate: "2023-10-05",
    endDate: "2024-06-30",
    status: "Execution" as const
  },
  {
    id: "2",
    name: "PI Dashboard",
    description: "Performance Intelligence dashboard providing real-time insights into application performance metrics.",
    progress: 90,
    owner: "Sarah Wilson",
    startDate: "2023-08-15",
    endDate: "2024-03-30",
    status: "Completed" as const
  },
  {
    id: "3",
    name: "PTCoE Agile Dashboard",
    description: "Agile performance testing center of excellence dashboard for tracking test metrics and team velocity.",
    progress: 45,
    owner: "Jessica Adams",
    startDate: "2024-01-10",
    endDate: "2024-08-25",
    status: "Execution" as const
  },
  {
    id: "4",
    name: "AI-Powered Test Optimization",
    description: "Implementation of AI algorithms to optimize test case selection and prioritization.",
    progress: 20,
    owner: "David Kim",
    startDate: "2024-02-20",
    endDate: "2024-11-15",
    status: "Planning" as const
  },
  {
    id: "5",
    name: "Cloud Test Infrastructure",
    description: "Migration of testing infrastructure to cloud-based platforms for improved scalability and cost efficiency.",
    progress: 65,
    owner: "Alex Johnson",
    startDate: "2023-11-05",
    endDate: "2024-07-20",
    status: "Execution" as const
  },
  {
    id: "6",
    name: "Security Testing Framework",
    description: "Development of a comprehensive security testing framework integrating OWASP standards and automated vulnerability scanning.",
    progress: 30,
    owner: "Maria Garcia",
    startDate: "2024-01-25",
    endDate: "2024-09-30",
    status: "Planning" as const
  }
];

// Mock data for initiatives status chart
const statusData = [
  { name: 'Completed', value: 1 },
  { name: 'Execution', value: 3 },
  { name: 'Planning', value: 2 },
];

// Mock data for adoption rate
const adoptionData = [
  { team: 'Team A', adoption: 85 },
  { team: 'Team B', adoption: 70 },
  { team: 'Team C', adoption: 95 },
  { team: 'Team D', adoption: 60 },
  { team: 'Team E', adoption: 75 },
];

// Mock data for innovation trend
const innovationData = [
  { quarter: 'Q1 2023', count: 2 },
  { quarter: 'Q2 2023', count: 3 },
  { quarter: 'Q3 2023', count: 4 },
  { quarter: 'Q4 2023', count: 5 },
  { quarter: 'Q1 2024', count: 7 },
  { quarter: 'Q2 2024', count: 6 },
];

const Initiatives = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8 animate-fade-in">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Initiatives</h1>
          
          <div className="flex gap-4 mt-4 md:mt-0">
            <button className="px-4 py-2 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-50 text-sm font-medium">
              Filter
            </button>
            <button className="px-4 py-2 bg-brand-skyblue text-white rounded-lg shadow-sm hover:bg-brand-skyblue-dark text-sm font-medium">
              New Initiative
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {initiatives.map((initiative, index) => (
            <InitiativeCard
              key={initiative.id}
              id={initiative.id}
              name={initiative.name}
              description={initiative.description}
              progress={initiative.progress}
              owner={initiative.owner}
              startDate={initiative.startDate}
              endDate={initiative.endDate}
              status={initiative.status}
              className="animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            />
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h3 className="text-lg font-medium text-gray-800 mb-4">Initiative Overview</h3>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Total Initiatives</span>
                <span className="font-medium">{initiatives.length}</span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Active Initiatives</span>
                <span className="font-medium">{initiatives.filter(i => i.status === 'Execution' || i.status === 'Planning').length}</span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Completed Initiatives</span>
                <span className="font-medium">{initiatives.filter(i => i.status === 'Completed').length}</span>
              </div>
            </div>
            
            <div className="mt-4 pt-4 border-t border-gray-100">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-600">Average Progress</span>
                <span className="font-medium">
                  {Math.round(initiatives.reduce((acc, curr) => acc + curr.progress, 0) / initiatives.length)}%
                </span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Process Maturity Level</span>
                <span className="font-medium">72%</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 md:col-span-2">
            <h3 className="text-lg font-medium text-gray-800 mb-4">Adoption Rate by Team</h3>
            <div className="h-[220px]">
              <ChartComponent 
                type="bar"
                data={adoptionData}
                keys={{
                  xAxis: 'team',
                  dataKeys: ['adoption']
                }}
                colors={['#60B4EF']}
              />
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ChartComponent 
            type="pie"
            title="Initiative Status"
            data={statusData}
            keys={{
              dataKeys: ['value']
            }}
            colors={['#60B4EF', '#FF8FB4', '#FFD580']}
            className="animate-slide-in-bottom"
            style={{ animationDelay: "0.3s" }}
          />
          
          <ChartComponent 
            type="line"
            title="Innovation Trend"
            data={innovationData}
            keys={{
              xAxis: 'quarter',
              dataKeys: ['count']
            }}
            colors={['#FF8FB4']}
            className="animate-slide-in-bottom"
            style={{ animationDelay: "0.4s" }}
          />
        </div>
      </main>
    </div>
  );
};

export default Initiatives;

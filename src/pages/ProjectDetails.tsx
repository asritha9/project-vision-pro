
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import ProgressBar from '@/components/ProgressBar';
import ChartComponent from '@/components/ChartComponent';
import { ArrowLeft } from 'lucide-react';

// Mock project data (in a real app, you would fetch this based on the ID from an API)
const projectData = {
  "1": {
    id: "1",
    name: "Azmara",
    description: "A comprehensive enterprise resource planning solution designed to streamline operations for medium to large businesses.",
    owner: "Jane Smith",
    teamMembers: ["Alex Johnson", "Maria Garcia", "Thomas Lee", "Sarah Wilson"],
    status: "Execution",
    defectsFound: 32,
    defectsResolved: 25,
    slaMet: 92,
    dependencies: ["Frontend Framework", "Backend API", "Database Migration"],
    testingType: "Performance, Integration, UAT",
    testEnvironment: "AWS Production Clone",
    performanceBottlenecks: ["Database Query Optimization", "Cache Implementation"],
    risks: ["Third-party API reliability", "Data migration integrity"],
    startDate: "2023-10-15",
    endDate: "2024-06-30",
    modifiedDate: "2024-03-12"
  },
  "2": {
    id: "2",
    name: "Nexeo",
    description: "A cloud-based customer relationship management platform focused on enhancing sales and marketing alignment.",
    owner: "Michael Chen",
    teamMembers: ["Robert Taylor", "Jessica Adams", "David Kim", "Emily Davis"],
    status: "Planning",
    defectsFound: 18,
    defectsResolved: 12,
    slaMet: 88,
    dependencies: ["Data Migration Tool", "Authentication Service", "Analytics Engine"],
    testingType: "Unit, Integration, Security",
    testEnvironment: "Azure Staging Environment",
    performanceBottlenecks: ["Authentication Flow", "Report Generation"],
    risks: ["User adoption rates", "Legacy system compatibility"],
    startDate: "2024-01-05",
    endDate: "2024-08-20",
    modifiedDate: "2024-03-08"
  },
  "3": {
    id: "3",
    name: "Statefund",
    description: "A governmental financial tracking and distribution system for state-level subsidy programs.",
    owner: "Emily Rodriguez",
    teamMembers: ["John Miller", "Sophia Clark", "Kevin Wong", "Amanda Lewis"],
    status: "Completed",
    defectsFound: 45,
    defectsResolved: 42,
    slaMet: 96,
    dependencies: ["Payment Processing Service", "Identity Verification", "Reporting Engine"],
    testingType: "System, Performance, Security, Compliance",
    testEnvironment: "Google Cloud Isolated Environment",
    performanceBottlenecks: ["High-volume Transactions", "Concurrent User Access"],
    risks: ["Regulatory compliance changes", "Security vulnerabilities"],
    startDate: "2023-05-10",
    endDate: "2024-02-28",
    modifiedDate: "2024-02-28"
  },
  "4": {
    id: "4",
    name: "ASTM",
    description: "An industrial quality control and standards compliance monitoring system for manufacturing processes.",
    owner: "James Wilson",
    teamMembers: ["Lisa Brown", "Daniel Martinez", "Rachel Thomson", "Eric Patel"],
    status: "Planning",
    defectsFound: 15,
    defectsResolved: 7,
    slaMet: 78,
    dependencies: ["IoT Data Collection", "Machine Learning Model", "Compliance Database"],
    testingType: "IoT Integration, Performance, Compliance",
    testEnvironment: "Hybrid On-premise and Cloud Environment",
    performanceBottlenecks: ["Real-time Data Processing", "Alert Distribution"],
    risks: ["Hardware sensor reliability", "Standards interpretation"],
    startDate: "2024-02-15",
    endDate: "2024-12-10",
    modifiedDate: "2024-03-05"
  }
};

// Mock defect trend data
const defectTrendData = [
  { month: 'Jan', Found: 12, Resolved: 8 },
  { month: 'Feb', Found: 15, Resolved: 12 },
  { month: 'Mar', Found: 8, Resolved: 10 },
  { month: 'Apr', Found: 5, Resolved: 7 },
  { month: 'May', Found: 10, Resolved: 9 },
  { month: 'Jun', Found: 7, Resolved: 6 }
];

// Mock SLA trend data
const slaTrendData = [
  { month: 'Jan', SLA: 85 },
  { month: 'Feb', SLA: 88 },
  { month: 'Mar', SLA: 92 },
  { month: 'Apr', SLA: 90 },
  { month: 'May', SLA: 94 },
  { month: 'Jun', SLA: 92 }
];

const ProjectDetails = () => {
  const { id } = useParams<{ id: string }>();
  const project = projectData[id as keyof typeof projectData] || null;
  
  if (!project) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl font-bold mb-4">Project Not Found</h1>
          <p className="mb-8">The project you're looking for doesn't exist or has been removed.</p>
          <Link 
            to="/projects" 
            className="inline-flex items-center text-brand-skyblue hover:underline"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8 animate-fade-in">
        <div className="mb-6">
          <Link 
            to="/projects" 
            className="inline-flex items-center text-brand-skyblue hover:underline"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Projects
          </Link>
        </div>
        
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 mb-8">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6">
            <div>
              <div className="mb-1">
                <span className="px-2.5 py-1 text-xs font-medium bg-brand-skyblue/10 text-brand-skyblue rounded-full">
                  Project #{project.id}
                </span>
              </div>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">{project.name}</h1>
              <p className="text-gray-600 max-w-2xl">{project.description}</p>
            </div>
            
            <div className="flex gap-3">
              <button className="px-4 py-2 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-50 text-sm font-medium">
                Share
              </button>
              
              <button className="px-4 py-2 bg-brand-skyblue text-white rounded-lg shadow-sm hover:bg-brand-skyblue-dark text-sm font-medium">
                Edit Project
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div>
              <h3 className="text-sm font-medium text-gray-500 mb-2">Project Owner</h3>
              <p className="text-gray-800 font-medium">{project.owner}</p>
            </div>
            
            <div>
              <h3 className="text-sm font-medium text-gray-500 mb-2">Status</h3>
              <span className={`px-3 py-1 text-sm font-medium rounded-full ${
                project.status === 'Planning' ? 'bg-yellow-100 text-yellow-800' :
                project.status === 'Execution' ? 'bg-blue-100 text-blue-800' :
                'bg-green-100 text-green-800'
              }`}>
                {project.status}
              </span>
            </div>
            
            <div>
              <h3 className="text-sm font-medium text-gray-500 mb-2">Timeline</h3>
              <p className="text-gray-800">{project.startDate} — {project.endDate}</p>
            </div>
          </div>
          
          <div className="border-t border-gray-100 pt-6 mt-6">
            <h3 className="text-lg font-medium text-gray-800 mb-4">Team Members</h3>
            <div className="flex flex-wrap gap-2">
              {project.teamMembers.map((member, index) => (
                <span key={index} className="px-3 py-1.5 bg-gray-100 text-gray-800 rounded-lg text-sm">
                  {member}
                </span>
              ))}
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h3 className="text-lg font-medium text-gray-800 mb-4">Project Metrics</h3>
            
            <div className="space-y-4">
              <div>
                <ProgressBar 
                  value={project.status === 'Completed' ? 100 : project.status === 'Execution' ? 65 : 25} 
                  label="Completion" 
                  color="skyblue"
                />
              </div>
              
              <div>
                <ProgressBar 
                  value={project.slaMet} 
                  label="SLA Met" 
                  color="success"
                />
              </div>
              
              <div>
                <ProgressBar 
                  value={(project.defectsResolved / project.defectsFound) * 100} 
                  label="Defect Resolution" 
                  color="pink"
                />
              </div>
            </div>
            
            <div className="mt-4 pt-4 border-t border-gray-100">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-600">Defects Found</span>
                <span className="font-medium">{project.defectsFound}</span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Defects Resolved</span>
                <span className="font-medium">{project.defectsResolved}</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h3 className="text-lg font-medium text-gray-800 mb-4">Testing Information</h3>
            
            <div className="space-y-4 text-sm">
              <div>
                <p className="text-gray-500 mb-1">Testing Type</p>
                <p className="text-gray-800">{project.testingType}</p>
              </div>
              
              <div>
                <p className="text-gray-500 mb-1">Test Environment</p>
                <p className="text-gray-800">{project.testEnvironment}</p>
              </div>
              
              <div>
                <p className="text-gray-500 mb-1">Performance Bottlenecks</p>
                <ul className="list-disc pl-5">
                  {project.performanceBottlenecks.map((item, index) => (
                    <li key={index} className="text-gray-800">{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h3 className="text-lg font-medium text-gray-800 mb-4">Dependencies & Risks</h3>
            
            <div>
              <p className="text-gray-500 mb-2 text-sm">Dependencies</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.dependencies.map((dep, index) => (
                  <span key={index} className="px-3 py-1 bg-brand-skyblue/10 text-brand-skyblue-dark rounded-lg text-sm">
                    {dep}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <p className="text-gray-500 mb-2 text-sm">Key Risks</p>
              <ul className="list-disc pl-5 text-sm">
                {project.risks.map((risk, index) => (
                  <li key={index} className="text-gray-800 mb-1">{risk}</li>
                ))}
              </ul>
            </div>
            
            <div className="mt-4 pt-4 border-t border-gray-100 text-xs text-gray-500">
              Last modified: {project.modifiedDate}
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ChartComponent 
            type="bar"
            title="Defect Trend Analysis"
            data={defectTrendData}
            keys={{
              xAxis: 'month',
              dataKeys: ['Found', 'Resolved']
            }}
            colors={['#FF8FB4', '#60B4EF']}
            className="animate-slide-in-bottom"
            style={{ animationDelay: "0.3s" }}
          />
          
          <ChartComponent 
            type="line"
            title="SLA Performance Trend"
            data={slaTrendData}
            keys={{
              xAxis: 'month',
              dataKeys: ['SLA']
            }}
            colors={['#60B4EF']}
            className="animate-slide-in-bottom"
            style={{ animationDelay: "0.4s" }}
          />
        </div>
      </main>
    </div>
  );
};

export default ProjectDetails;

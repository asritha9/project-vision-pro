
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import ProgressBar from '@/components/ProgressBar';
import ChartComponent from '@/components/ChartComponent';
import { ArrowLeft } from 'lucide-react';

// Mock initiative data
const initiativeData = {
  "1": {
    id: "1",
    name: "RIC - Reliability Improvement Center",
    description: "The Reliability Improvement Center (RIC) is a comprehensive platform designed to centralize monitoring, analysis, and improvement of reliability metrics across all projects. RIC provides dashboards, automated alerts, and actionable insights to help teams identify and resolve reliability issues before they impact users.",
    progress: 75,
    owner: "Michael Chen",
    startDate: "2023-10-05",
    endDate: "2024-06-30",
    status: "Execution" as const,
    objective: "Improve overall system reliability by 30% across all projects through centralized monitoring, automated analysis, and proactive issue resolution.",
    teamsInvolved: ["Performance Testing", "DevOps", "Development", "QA"],
    performanceMetrics: {
      adoptionRate: 68,
      processMaturity: 72,
      innovationIndex: 8
    },
    notes: [
      "Integration with existing monitoring tools requires additional configuration",
      "Team training sessions scheduled for next month",
      "Phase 2 planning to begin in May"
    ],
    roadblocks: [
      "Legacy system compatibility issues",
      "Resource allocation for custom integrations"
    ]
  },
  "2": {
    id: "2",
    name: "PI Dashboard",
    description: "The Performance Intelligence (PI) Dashboard provides real-time insights into application performance metrics, enabling teams to quickly identify bottlenecks, track improvements, and make data-driven decisions. The dashboard aggregates data from multiple sources to present a unified view of performance across environments.",
    progress: 90,
    owner: "Sarah Wilson",
    startDate: "2023-08-15",
    endDate: "2024-03-30",
    status: "Completed" as const,
    objective: "Create a unified performance monitoring solution that reduces time to identify performance issues by 50% and improves cross-team visibility into application performance.",
    teamsInvolved: ["Performance Engineering", "Frontend Development", "Data Analytics"],
    performanceMetrics: {
      adoptionRate: 95,
      processMaturity: 88,
      innovationIndex: 12
    },
    notes: [
      "Successfully deployed to all teams",
      "Positive feedback from leadership on dashboards",
      "Phase 2 planning underway for advanced analytics features"
    ],
    roadblocks: [
      "Initially faced challenges with data integration from multiple sources - resolved",
      "Some teams required additional training on interpreting metrics"
    ]
  },
  "3": {
    id: "3",
    name: "PTCoE Agile Dashboard",
    description: "The Performance Testing Center of Excellence (PTCoE) Agile Dashboard tracks test metrics, team velocity, and sprint performance to provide a comprehensive view of performance testing activities within an agile framework. The dashboard helps prioritize testing efforts and align with development sprints.",
    progress: 45,
    owner: "Jessica Adams",
    startDate: "2024-01-10",
    endDate: "2024-08-25",
    status: "Execution" as const,
    objective: "Improve alignment between performance testing and agile development cycles, reducing test cycle time by 25% and increasing test coverage by 30%.",
    teamsInvolved: ["Performance Testing", "Scrum Masters", "Product Owners", "QA"],
    performanceMetrics: {
      adoptionRate: 52,
      processMaturity: 65,
      innovationIndex: 7
    },
    notes: [
      "Sprint integration features completed",
      "Working on enhanced reporting for retrospectives",
      "Planning integration with JIRA for seamless workflow"
    ],
    roadblocks: [
      "Varying sprint schedules across teams complicates standardization",
      "Need additional buy-in from some product owners"
    ]
  },
  "4": {
    id: "4",
    name: "AI-Powered Test Optimization",
    description: "This initiative implements machine learning algorithms to optimize test case selection, prioritization, and execution based on code changes, historical data, and risk assessment. The AI system learns from past test results to continuously improve testing efficiency.",
    progress: 20,
    owner: "David Kim",
    startDate: "2024-02-20",
    endDate: "2024-11-15",
    status: "Planning" as const,
    objective: "Reduce testing time by 40% while maintaining or improving test coverage through intelligent test selection and prioritization powered by machine learning.",
    teamsInvolved: ["Data Science", "Test Automation", "DevOps", "QA"],
    performanceMetrics: {
      adoptionRate: 25,
      processMaturity: 40,
      innovationIndex: 15
    },
    notes: [
      "Initial algorithm design completed",
      "Gathering historical test data for model training",
      "Prototype planned for Q2"
    ],
    roadblocks: [
      "Need more historical data for certain projects",
      "Integrating with existing CI/CD pipelines will require coordination",
      "ML expertise availability is limited"
    ]
  }
};

// Mock adoption trend data
const adoptionTrendData = [
  { month: 'Jan', adoption: 20 },
  { month: 'Feb', adoption: 35 },
  { month: 'Mar', adoption: 45 },
  { month: 'Apr', adoption: 60 },
  { month: 'May', adoption: 68 },
  { month: 'Jun', adoption: 75 },
];

// Mock process maturity data
const maturityData = [
  { category: 'Documentation', actual: 85, target: 90 },
  { category: 'Automation', actual: 70, target: 80 },
  { category: 'Metrics', actual: 65, target: 75 },
  { category: 'Integration', actual: 60, target: 85 },
  { category: 'Reporting', actual: 80, target: 85 },
];

const InitiativeDetails = () => {
  const { id } = useParams<{ id: string }>();
  const initiative = initiativeData[id as keyof typeof initiativeData] || null;
  
  if (!initiative) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl font-bold mb-4">Initiative Not Found</h1>
          <p className="mb-8">The initiative you're looking for doesn't exist or has been removed.</p>
          <Link 
            to="/initiatives" 
            className="inline-flex items-center text-brand-skyblue hover:underline"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Initiatives
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
            to="/initiatives" 
            className="inline-flex items-center text-brand-skyblue hover:underline"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Initiatives
          </Link>
        </div>
        
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 mb-8">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6">
            <div>
              <div className="mb-1">
                <span className={`px-2.5 py-1 text-xs font-medium rounded-full ${
                  initiative.status === 'Planning' ? 'bg-yellow-100 text-yellow-800' :
                  initiative.status === 'Execution' ? 'bg-blue-100 text-blue-800' :
                  'bg-green-100 text-green-800'
                }`}>
                  {initiative.status}
                </span>
              </div>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">{initiative.name}</h1>
              <p className="text-gray-600 max-w-3xl">{initiative.description}</p>
            </div>
            
            <div className="flex gap-3">
              <button className="px-4 py-2 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-50 text-sm font-medium">
                Share
              </button>
              
              <button className="px-4 py-2 bg-brand-skyblue text-white rounded-lg shadow-sm hover:bg-brand-skyblue-dark text-sm font-medium">
                Edit Initiative
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div>
              <h3 className="text-sm font-medium text-gray-500 mb-2">Initiative Owner</h3>
              <p className="text-gray-800 font-medium">{initiative.owner}</p>
            </div>
            
            <div>
              <h3 className="text-sm font-medium text-gray-500 mb-2">Timeline</h3>
              <p className="text-gray-800">{initiative.startDate} — {initiative.endDate}</p>
            </div>
            
            <div>
              <h3 className="text-sm font-medium text-gray-500 mb-2">Progress</h3>
              <ProgressBar 
                value={initiative.progress} 
                showValue={true}
                size="lg"
                color={initiative.status === 'Completed' ? 'success' : 'skyblue'}
              />
            </div>
          </div>
          
          <div className="border-t border-gray-100 pt-6 mt-6">
            <h3 className="text-lg font-medium text-gray-800 mb-4">Objective</h3>
            <p className="text-gray-600 max-w-3xl">{initiative.objective}</p>
          </div>
          
          <div className="border-t border-gray-100 pt-6 mt-6">
            <h3 className="text-lg font-medium text-gray-800 mb-4">Teams Involved</h3>
            <div className="flex flex-wrap gap-2">
              {initiative.teamsInvolved.map((team, index) => (
                <span key={index} className="px-3 py-1.5 bg-brand-skyblue/10 text-brand-skyblue-dark rounded-lg text-sm">
                  {team}
                </span>
              ))}
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h3 className="text-lg font-medium text-gray-800 mb-4">Performance Metrics</h3>
            
            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm text-gray-600">Adoption Rate</span>
                  <span className="font-medium">{initiative.performanceMetrics.adoptionRate}%</span>
                </div>
                <p className="text-xs text-gray-500 mb-2">% of teams adopting vs. total teams</p>
                <ProgressBar 
                  value={initiative.performanceMetrics.adoptionRate} 
                  showValue={false}
                  color="skyblue"
                />
              </div>
              
              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm text-gray-600">Process Maturity</span>
                  <span className="font-medium">{initiative.performanceMetrics.processMaturity}%</span>
                </div>
                <p className="text-xs text-gray-500 mb-2">Best practices implemented vs. planned</p>
                <ProgressBar 
                  value={initiative.performanceMetrics.processMaturity} 
                  showValue={false}
                  color="success"
                />
              </div>
              
              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm text-gray-600">Innovation Index</span>
                  <span className="font-medium">{initiative.performanceMetrics.innovationIndex}</span>
                </div>
                <p className="text-xs text-gray-500 mb-2">New tools/processes introduced</p>
                <div className="flex">
                  {Array.from({ length: 10 }).map((_, i) => (
                    <div
                      key={i}
                      className={`h-2 w-full first:rounded-l-full last:rounded-r-full mr-0.5 last:mr-0 ${
                        i < initiative.performanceMetrics.innovationIndex / 2
                          ? 'bg-brand-pink'
                          : 'bg-gray-200'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h3 className="text-lg font-medium text-gray-800 mb-4">Notes</h3>
            
            <ul className="space-y-3">
              {initiative.notes.map((note, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="w-2 h-2 rounded-full bg-brand-skyblue mt-2"></span>
                  <span className="text-sm text-gray-700">{note}</span>
                </li>
              ))}
            </ul>
            
            <h4 className="text-md font-medium text-gray-800 mb-3 mt-6">Roadblocks</h4>
            <ul className="space-y-3">
              {initiative.roadblocks.map((roadblock, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="w-2 h-2 rounded-full bg-brand-pink mt-2"></span>
                  <span className="text-sm text-gray-700">{roadblock}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h3 className="text-lg font-medium text-gray-800 mb-4">Actions</h3>
            
            <div className="space-y-3">
              <button className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-lg text-left text-sm font-medium hover:bg-gray-50 transition-colors">
                Schedule Review Meeting
              </button>
              
              <button className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-lg text-left text-sm font-medium hover:bg-gray-50 transition-colors">
                Generate Status Report
              </button>
              
              <button className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-lg text-left text-sm font-medium hover:bg-gray-50 transition-colors">
                Create Milestone
              </button>
              
              <button className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-lg text-left text-sm font-medium hover:bg-gray-50 transition-colors">
                Add Team Member
              </button>
            </div>
            
            <div className="mt-6 pt-6 border-t border-gray-100">
              <h4 className="text-md font-medium text-gray-800 mb-3">Quick Links</h4>
              <div className="space-y-2">
                <a href="#" className="block text-sm text-brand-skyblue hover:underline">Initiative Documentation</a>
                <a href="#" className="block text-sm text-brand-skyblue hover:underline">Resource Allocation Plan</a>
                <a href="#" className="block text-sm text-brand-skyblue hover:underline">Stakeholder Map</a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ChartComponent 
            type="line"
            title="Adoption Trend"
            data={adoptionTrendData}
            keys={{
              xAxis: 'month',
              dataKeys: ['adoption']
            }}
            colors={['#60B4EF']}
            className="animate-slide-in-bottom"
            style={{ animationDelay: "0.3s" }}
          />
          
          <ChartComponent 
            type="bar"
            title="Process Maturity by Category"
            data={maturityData}
            keys={{
              xAxis: 'category',
              dataKeys: ['actual', 'target']
            }}
            colors={['#60B4EF', '#FF8FB4']}
            className="animate-slide-in-bottom"
            style={{ animationDelay: "0.4s" }}
          />
        </div>
      </main>
    </div>
  );
};

export default InitiativeDetails;

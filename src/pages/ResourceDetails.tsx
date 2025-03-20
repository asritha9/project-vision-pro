import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import ChartComponent from '@/components/ChartComponent';
import ProgressBar from '@/components/ProgressBar';
import { ArrowLeft } from 'lucide-react';

// Mock project data for cross-referencing
const projectData = {
  "1": {
    id: "1",
    name: "Azmara",
    description: "A comprehensive enterprise resource planning solution."
  },
  "2": {
    id: "2",
    name: "Nexeo",
    description: "A cloud-based customer relationship management platform."
  },
  "3": {
    id: "3",
    name: "Statefund",
    description: "A governmental financial tracking system."
  },
  "4": {
    id: "4",
    name: "ASTM",
    description: "An industrial quality control system."
  }
};

// Mock resource data
const resourceData = {
  "1": {
    id: "1",
    name: "Alex Johnson",
    designation: "Senior Test Engineer",
    joinDate: "2021-05-15",
    email: "alex.johnson@example.com",
    phone: "+1 (555) 123-4567",
    skills: ["Performance Testing", "Automation", "Java", "Selenium", "API Testing"],
    projects: {
      billable: ["Azmara", "Nexeo"],
      supporting: ["ASTM"]
    },
    workingHours: {
      total: 168,
      billable: 145,
      training: 15,
      leave: 8
    },
    certifications: ["ISTQB Advanced Level", "AWS Certified Developer"],
    trainingHours: 120,
    backupFor: ["Maria Garcia", "Thomas Lee"],
    environments: [
      { name: "Performance Lab", hours: 85, status: "Active" },
      { name: "Dev Integration", hours: 25, status: "Active" },
      { name: "UAT", hours: 35, status: "Idle" }
    ]
  },
  "2": {
    id: "2",
    name: "Maria Garcia",
    designation: "Test Lead",
    joinDate: "2020-03-10",
    email: "maria.garcia@example.com",
    phone: "+1 (555) 234-5678",
    skills: ["Test Management", "API Testing", "Python", "JMeter", "Test Planning"],
    projects: {
      billable: ["Statefund", "ASTM"],
      supporting: ["Nexeo"]
    },
    workingHours: {
      total: 176,
      billable: 152,
      training: 12,
      leave: 12
    },
    certifications: ["ISTQB Foundation", "Scrum Master"],
    trainingHours: 95,
    backupFor: ["Alex Johnson", "Sarah Wilson"],
    environments: [
      { name: "Test Management Suite", hours: 95, status: "Active" },
      { name: "Staging", hours: 45, status: "Active" },
      { name: "CI Pipeline", hours: 12, status: "Idle" }
    ]
  },
  "3": {
    id: "3",
    name: "Thomas Lee",
    designation: "QA Engineer",
    joinDate: "2022-01-20",
    email: "thomas.lee@example.com",
    phone: "+1 (555) 345-6789",
    skills: ["Manual Testing", "Mobile Testing", "JavaScript", "Appium", "Test Automation"],
    projects: {
      billable: ["Azmara"],
      supporting: ["Nexeo", "ASTM"]
    },
    workingHours: {
      total: 160,
      billable: 132,
      training: 20,
      leave: 8
    },
    certifications: ["ISTQB Mobile Tester", "JavaScript Certification"],
    trainingHours: 150,
    backupFor: ["Sarah Wilson"],
    environments: [
      { name: "Mobile Lab", hours: 110, status: "Active" },
      { name: "Device Farm", hours: 22, status: "Active" }
    ]
  },
  "4": {
    id: "4",
    name: "Sarah Wilson",
    designation: "Performance Test Specialist",
    joinDate: "2021-09-12",
    email: "sarah.wilson@example.com",
    phone: "+1 (555) 456-7890",
    skills: ["Load Testing", "Performance Analysis", "LoadRunner", "Grafana", "JMeter"],
    projects: {
      billable: ["Nexeo", "Statefund"],
      supporting: []
    },
    workingHours: {
      total: 172,
      billable: 155,
      training: 10,
      leave: 7
    },
    certifications: ["Performance Testing Specialist", "Grafana Certified"],
    trainingHours: 85,
    backupFor: ["Alex Johnson"],
    environments: [
      { name: "Performance Lab", hours: 125, status: "Active" },
      { name: "LoadRunner Suite", hours: 30, status: "Active" }
    ]
  },
  "5": {
    id: "5",
    name: "David Kim",
    designation: "Automation Engineer",
    joinDate: "2022-06-05",
    email: "david.kim@example.com",
    phone: "+1 (555) 567-8901",
    skills: ["Test Automation", "CI/CD", "Python", "Jenkins", "Docker"],
    projects: {
      billable: ["Azmara"],
      supporting: ["Statefund"]
    },
    workingHours: {
      total: 168,
      billable: 140,
      training: 22,
      leave: 6
    },
    certifications: ["Certified Jenkins Engineer", "Python Developer"],
    trainingHours: 180,
    backupFor: ["Jessica Adams"],
    environments: [
      { name: "Automation Farm", hours: 100, status: "Active" },
      { name: "Jenkins Pipeline", hours: 40, status: "Active" }
    ]
  }
};

// Mock monthly hours data
const monthlyHoursData = [
  { month: 'Jan', Billable: 145, Training: 15, Leave: 8 },
  { month: 'Feb', Billable: 152, Training: 12, Leave: 4 },
  { month: 'Mar', Billable: 140, Training: 18, Leave: 10 },
  { month: 'Apr', Billable: 155, Training: 10, Leave: 3 },
  { month: 'May', Billable: 148, Training: 14, Leave: 6 },
  { month: 'Jun', Billable: 150, Training: 10, Leave: 8 },
];

// Mock utilization data
const utilizationData = [
  { name: 'Billable', value: 82 },
  { name: 'Training', value: 12 },
  { name: 'Leave', value: 6 },
];

const ResourceDetails = () => {
  const { id } = useParams<{ id: string }>();
  const resource = resourceData[id as keyof typeof resourceData] || null;
  
  if (!resource) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl font-bold mb-4">Resource Not Found</h1>
          <p className="mb-8">The resource you're looking for doesn't exist or has been removed.</p>
          <Link 
            to="/resources" 
            className="inline-flex items-center text-brand-skyblue hover:underline"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Resources
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
            to="/resources" 
            className="inline-flex items-center text-brand-skyblue hover:underline"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Resources
          </Link>
        </div>
        
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 mb-8">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-1">{resource.name}</h1>
              <p className="text-gray-600">{resource.designation}</p>
            </div>
            
            <div className="flex gap-3">
              <button className="px-4 py-2 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-50 text-sm font-medium">
                Contact
              </button>
              
              <button className="px-4 py-2 bg-brand-skyblue text-white rounded-lg shadow-sm hover:bg-brand-skyblue-dark text-sm font-medium">
                Edit Details
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div>
              <h3 className="text-sm font-medium text-gray-500 mb-2">Email</h3>
              <p className="text-gray-800">{resource.email}</p>
            </div>
            
            <div>
              <h3 className="text-sm font-medium text-gray-500 mb-2">Phone</h3>
              <p className="text-gray-800">{resource.phone}</p>
            </div>
            
            <div>
              <h3 className="text-sm font-medium text-gray-500 mb-2">Date of Joining</h3>
              <p className="text-gray-800">{resource.joinDate}</p>
            </div>
          </div>
          
          <div className="border-t border-gray-100 pt-6 mt-6">
            <h3 className="text-lg font-medium text-gray-800 mb-4">Skills</h3>
            <div className="flex flex-wrap gap-2">
              {resource.skills.map((skill, index) => (
                <span key={index} className="px-3 py-1.5 bg-brand-skyblue/10 text-brand-skyblue-dark rounded-lg text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h3 className="text-lg font-medium text-gray-800 mb-4">Working Hours</h3>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Total Hours</span>
                <span className="font-medium">{resource.workingHours.total} hrs</span>
              </div>
              
              <div>
                <ProgressBar 
                  value={(resource.workingHours.billable / resource.workingHours.total) * 100} 
                  label="Billable Hours" 
                  showValue={false}
                  color="skyblue"
                />
                <div className="flex justify-between items-center mt-1">
                  <span className="text-xs text-gray-500">Billable</span>
                  <span className="text-xs font-medium">{resource.workingHours.billable} hrs</span>
                </div>
              </div>
              
              <div>
                <ProgressBar 
                  value={(resource.workingHours.training / resource.workingHours.total) * 100} 
                  label="Training Hours" 
                  showValue={false}
                  color="pink"
                />
                <div className="flex justify-between items-center mt-1">
                  <span className="text-xs text-gray-500">Training</span>
                  <span className="text-xs font-medium">{resource.workingHours.training} hrs</span>
                </div>
              </div>
              
              <div>
                <ProgressBar 
                  value={(resource.workingHours.leave / resource.workingHours.total) * 100} 
                  label="Leave Hours" 
                  showValue={false}
                  color="warning"
                />
                <div className="flex justify-between items-center mt-1">
                  <span className="text-xs text-gray-500">Leave</span>
                  <span className="text-xs font-medium">{resource.workingHours.leave} hrs</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h3 className="text-lg font-medium text-gray-800 mb-4">Projects</h3>
            
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-500 mb-2">Billable Projects</p>
                <div className="flex flex-wrap gap-2">
                  {resource.projects.billable.map((project, index) => (
                    <Link 
                      key={index} 
                      to={`/projects/${Object.keys(projectData).find(key => projectData[key as keyof typeof projectData].name === project)}`}
                      className="px-3 py-1.5 bg-brand-skyblue/10 text-brand-skyblue-dark rounded-lg text-sm hover:bg-brand-skyblue/20 transition-colors"
                    >
                      {project}
                    </Link>
                  ))}
                </div>
              </div>
              
              <div>
                <p className="text-sm text-gray-500 mb-2">Supporting Projects</p>
                <div className="flex flex-wrap gap-2">
                  {resource.projects.supporting.length > 0 ? (
                    resource.projects.supporting.map((project, index) => (
                      <Link 
                        key={index} 
                        to={`/projects/${Object.keys(projectData).find(key => projectData[key as keyof typeof projectData].name === project)}`}
                        className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-lg text-sm hover:bg-gray-200 transition-colors"
                      >
                        {project}
                      </Link>
                    ))
                  ) : (
                    <span className="text-sm text-gray-500">No supporting projects</span>
                  )}
                </div>
              </div>
              
              <div>
                <p className="text-sm text-gray-500 mb-2">Backup For</p>
                <div className="flex flex-wrap gap-2">
                  {resource.backupFor.map((person, index) => (
                    <span 
                      key={index} 
                      className="px-3 py-1.5 bg-brand-pink/10 text-brand-pink-dark rounded-lg text-sm"
                    >
                      {person}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h3 className="text-lg font-medium text-gray-800 mb-4">Training & Certifications</h3>
            
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-500 mb-2">Total Training Hours</p>
                <p className="text-xl font-medium text-gray-800">{resource.trainingHours} hrs</p>
              </div>
              
              <div>
                <p className="text-sm text-gray-500 mb-2">Certifications</p>
                <ul className="space-y-2">
                  {resource.certifications.map((cert, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-brand-skyblue"></span>
                      <span className="text-sm text-gray-800">{cert}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="mt-4 pt-4 border-t border-gray-100">
              <p className="text-sm text-gray-500 mb-2">Test Environment Usage</p>
              <div className="space-y-3">
                {resource.environments.map((env, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <div>
                      <span className="text-sm text-gray-800">{env.name}</span>
                      <span className={`ml-2 px-1.5 py-0.5 rounded text-xs ${env.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-600'}`}>
                        {env.status}
                      </span>
                    </div>
                    <span className="text-sm font-medium">{env.hours} hrs</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ChartComponent 
            type="area"
            title="Monthly Hours Distribution"
            data={monthlyHoursData}
            keys={{
              xAxis: 'month',
              dataKeys: ['Billable', 'Training', 'Leave']
            }}
            colors={['#60B4EF', '#FF8FB4', '#FFD580']}
            className="animate-slide-in-bottom"
            style={{ animationDelay: "0.3s" }}
          />
          
          <ChartComponent 
            type="pie"
            title="Resource Utilization"
            data={utilizationData}
            keys={{
              dataKeys: ['value']
            }}
            colors={['#60B4EF', '#FF8FB4', '#FFD580']}
            className="animate-slide-in-bottom"
            style={{ animationDelay: "0.4s" }}
          />
        </div>
      </main>
    </div>
  );
};

export default ResourceDetails;

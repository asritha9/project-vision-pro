
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import ResourceCard from '@/components/ResourceCard';
import ChartComponent from '@/components/ChartComponent';
import { Search } from 'lucide-react';

// Mock data for resources
const resources = [
  {
    id: "1",
    name: "Alex Johnson",
    designation: "Senior Test Engineer",
    joinDate: "2021-05-15",
    email: "alex.johnson@example.com",
    phone: "+1 (555) 123-4567",
    skills: ["Performance Testing", "Automation", "Java", "Selenium"]
  },
  {
    id: "2",
    name: "Maria Garcia",
    designation: "Test Lead",
    joinDate: "2020-03-10",
    email: "maria.garcia@example.com",
    phone: "+1 (555) 234-5678",
    skills: ["Test Management", "API Testing", "Python", "JMeter"]
  },
  {
    id: "3",
    name: "Thomas Lee",
    designation: "QA Engineer",
    joinDate: "2022-01-20",
    email: "thomas.lee@example.com",
    phone: "+1 (555) 345-6789",
    skills: ["Manual Testing", "Mobile Testing", "JavaScript", "Appium"]
  },
  {
    id: "4",
    name: "Sarah Wilson",
    designation: "Performance Test Specialist",
    joinDate: "2021-09-12",
    email: "sarah.wilson@example.com",
    phone: "+1 (555) 456-7890",
    skills: ["Load Testing", "Performance Analysis", "LoadRunner", "Grafana"]
  },
  {
    id: "5",
    name: "David Kim",
    designation: "Automation Engineer",
    joinDate: "2022-06-05",
    email: "david.kim@example.com",
    phone: "+1 (555) 567-8901",
    skills: ["Test Automation", "CI/CD", "Python", "Jenkins"]
  },
  {
    id: "6",
    name: "Emily Davis",
    designation: "Senior QA Analyst",
    joinDate: "2020-11-08",
    email: "emily.davis@example.com",
    phone: "+1 (555) 678-9012",
    skills: ["Test Planning", "Regression Testing", "SQL", "TestRail"]
  },
  {
    id: "7",
    name: "Michael Chen",
    designation: "Test Architect",
    joinDate: "2019-08-25",
    email: "michael.chen@example.com",
    phone: "+1 (555) 789-0123",
    skills: ["Test Strategy", "Framework Design", "Java", "Docker"]
  },
  {
    id: "8",
    name: "Jessica Adams",
    designation: "Test Automation Lead",
    joinDate: "2020-07-14",
    email: "jessica.adams@example.com",
    phone: "+1 (555) 890-1234",
    skills: ["Selenium", "Cucumber", "JavaScript", "CI/CD"]
  }
];

// Mock data for resource utilization chart
const utilizationData = [
  { month: 'Jan', Billable: 75, Training: 15, Support: 10 },
  { month: 'Feb', Billable: 80, Training: 10, Support: 10 },
  { month: 'Mar', Billable: 70, Training: 20, Support: 10 },
  { month: 'Apr', Billable: 85, Training: 10, Support: 5 },
  { month: 'May', Billable: 78, Training: 12, Support: 10 },
  { month: 'Jun', Billable: 82, Training: 8, Support: 10 },
];

// Mock data for skills distribution
const skillsData = [
  { name: 'Performance', value: 35 },
  { name: 'Automation', value: 40 },
  { name: 'Manual', value: 25 },
];

const ResourceUtilization = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredResources = resources.filter(resource =>
    resource.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    resource.designation.toLowerCase().includes(searchTerm.toLowerCase()) ||
    resource.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()))
  );
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8 animate-fade-in">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Resource Utilization</h1>
          
          <div className="flex gap-4 mt-4 md:mt-0">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Search resources..."
                className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-skyblue focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <button className="px-4 py-2 bg-brand-skyblue text-white rounded-lg shadow-sm hover:bg-brand-skyblue-dark text-sm font-medium">
              Add Resource
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-10">
          {filteredResources.map((resource, index) => (
            <ResourceCard
              key={resource.id}
              id={resource.id}
              name={resource.name}
              designation={resource.designation}
              joinDate={resource.joinDate}
              email={resource.email}
              phone={resource.phone}
              skills={resource.skills}
              className="animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            />
          ))}
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10">
          <ChartComponent 
            type="area"
            title="Team Utilization Trends"
            data={utilizationData}
            keys={{
              xAxis: 'month',
              dataKeys: ['Billable', 'Training', 'Support']
            }}
            colors={['#60B4EF', '#FF8FB4', '#90EE90']}
            className="animate-slide-in-bottom"
            style={{ animationDelay: "0.3s" }}
          />
          
          <ChartComponent 
            type="pie"
            title="Skills Distribution"
            data={skillsData}
            keys={{
              dataKeys: ['value']
            }}
            colors={['#60B4EF', '#FF8FB4', '#90EE90']}
            className="animate-slide-in-bottom"
            style={{ animationDelay: "0.4s" }}
          />
        </div>
      </main>
    </div>
  );
};

export default ResourceUtilization;


import React from 'react';
import Navbar from '@/components/Navbar';
import ProjectCard from '@/components/ProjectCard';
import ChartComponent from '@/components/ChartComponent';

// Mock data for projects
const projects = [
  {
    id: "1",
    name: "Azmara",
    completion: 85,
    slaStatus: 92,
    defectResolution: 78,
  },
  {
    id: "2",
    name: "Nexeo",
    completion: 62,
    slaStatus: 88,
    defectResolution: 65,
  },
  {
    id: "3",
    name: "Statefund",
    completion: 95,
    slaStatus: 96,
    defectResolution: 92,
  },
  {
    id: "4",
    name: "ASTM",
    completion: 32,
    slaStatus: 78,
    defectResolution: 45,
  },
];

// Mock data for SLA chart
const slaData = [
  { name: 'Jan', Azmara: 90, Nexeo: 85, Statefund: 95, ASTM: 74 },
  { name: 'Feb', Azmara: 92, Nexeo: 88, Statefund: 96, ASTM: 78 },
  { name: 'Mar', Azmara: 88, Nexeo: 82, Statefund: 94, ASTM: 72 },
  { name: 'Apr', Azmara: 95, Nexeo: 90, Statefund: 98, ASTM: 80 },
  { name: 'May', Azmara: 93, Nexeo: 85, Statefund: 97, ASTM: 75 },
  { name: 'Jun', Azmara: 91, Nexeo: 89, Statefund: 95, ASTM: 79 },
];

// Mock data for defect resolution chart
const defectData = [
  { name: 'Jan', Found: 45, Resolved: 35 },
  { name: 'Feb', Found: 38, Resolved: 32 },
  { name: 'Mar', Found: 52, Resolved: 48 },
  { name: 'Apr', Found: 45, Resolved: 42 },
  { name: 'May', Found: 30, Resolved: 28 },
  { name: 'Jun', Found: 25, Resolved: 24 },
];

const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8 animate-fade-in">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Projects</h1>
          
          <div className="flex gap-4 mt-4 md:mt-0">
            <button className="px-4 py-2 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-50 text-sm font-medium">
              Filter
            </button>
            <button className="px-4 py-2 bg-brand-skyblue text-white rounded-lg shadow-sm hover:bg-brand-skyblue-dark text-sm font-medium">
              Export
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              id={project.id}
              name={project.name}
              completion={project.completion}
              slaStatus={project.slaStatus}
              defectResolution={project.defectResolution}
              className="animate-scale-in"
              style={{ animationDelay: `${parseInt(project.id) * 0.1}s` }}
            />
          ))}
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10">
          <ChartComponent 
            type="line"
            title="SLA Met Status"
            data={slaData}
            keys={{
              xAxis: 'name',
              dataKeys: ['Azmara', 'Nexeo', 'Statefund', 'ASTM']
            }}
            className="animate-slide-in-bottom"
            style={{ animationDelay: "0.3s" }}
          />
          
          <ChartComponent 
            type="bar"
            title="Defect Resolution Rate"
            data={defectData}
            keys={{
              xAxis: 'name',
              dataKeys: ['Found', 'Resolved']
            }}
            colors={['#FF8FB4', '#60B4EF']}
            className="animate-slide-in-bottom"
            style={{ animationDelay: "0.4s" }}
          />
        </div>
      </main>
    </div>
  );
};

export default ProjectsPage;

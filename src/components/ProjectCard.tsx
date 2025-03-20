
import React from 'react';
import { Link } from 'react-router-dom';
import ProgressBar from './ProgressBar';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
  id: string;
  name: string;
  completion: number;
  slaStatus: number;
  defectResolution: number;
  className?: string;
  style?: React.CSSProperties;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  id,
  name,
  completion,
  slaStatus,
  defectResolution,
  className,
  style
}) => {
  return (
    <Link
      to={`/projects/${id}`}
      className={cn(
        "block p-6 rounded-xl transition-all duration-300",
        "hover-lift bg-white border border-gray-100",
        "group",
        className
      )}
      style={style}
    >
      <div className="flex flex-col h-full">
        <h3 className="text-xl font-medium text-gray-800 mb-4 group-hover:text-brand-skyblue transition-colors">
          {name}
        </h3>
        
        <div className="space-y-4 mt-2 flex-grow">
          <div>
            <ProgressBar 
              value={completion} 
              label="Completion" 
              color="skyblue"
            />
          </div>
          
          <div>
            <ProgressBar 
              value={slaStatus} 
              label="SLA Met" 
              color="success"
            />
          </div>
          
          <div>
            <ProgressBar 
              value={defectResolution} 
              label="Defect Resolution" 
              color="pink"
            />
          </div>
        </div>
        
        <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity text-sm text-brand-skyblue font-medium">
          View details →
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;

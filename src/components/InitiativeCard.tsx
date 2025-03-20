
import React from 'react';
import { Link } from 'react-router-dom';
import ProgressBar from './ProgressBar';
import { cn } from '@/lib/utils';

interface InitiativeCardProps {
  id: string;
  name: string;
  description: string;
  progress: number;
  owner: string;
  startDate: string;
  endDate: string;
  status: 'Planning' | 'Execution' | 'Completed';
  className?: string;
}

const InitiativeCard: React.FC<InitiativeCardProps> = ({
  id,
  name,
  description,
  progress,
  owner,
  startDate,
  endDate,
  status,
  className
}) => {
  const statusColor = {
    Planning: 'bg-yellow-100 text-yellow-800',
    Execution: 'bg-blue-100 text-blue-800',
    Completed: 'bg-green-100 text-green-800'
  };

  return (
    <Link
      to={`/initiatives/${id}`}
      className={cn(
        "block p-6 rounded-xl transition-all duration-300",
        "hover-lift bg-white border border-gray-100",
        "group",
        className
      )}
    >
      <div className="flex flex-col h-full">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-medium text-gray-800 group-hover:text-brand-skyblue transition-colors">
            {name}
          </h3>
          
          <span className={cn("px-2 py-1 text-xs rounded-full", statusColor[status])}>
            {status}
          </span>
        </div>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{description}</p>
        
        <div className="my-4">
          <ProgressBar 
            value={progress} 
            label="Progress" 
            color={status === 'Completed' ? 'success' : 'skyblue'}
          />
        </div>
        
        <div className="space-y-1 mt-2 flex-grow text-sm">
          <div className="flex items-start">
            <span className="text-gray-500 min-w-24">Owner:</span>
            <span className="text-gray-800">{owner}</span>
          </div>
          
          <div className="flex items-start">
            <span className="text-gray-500 min-w-24">Timeline:</span>
            <span className="text-gray-800">{startDate} - {endDate}</span>
          </div>
        </div>
        
        <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity text-sm text-brand-skyblue font-medium">
          View details →
        </div>
      </div>
    </Link>
  );
};

export default InitiativeCard;

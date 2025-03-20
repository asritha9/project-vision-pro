
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface ResourceCardProps {
  id: string;
  name: string;
  designation: string;
  joinDate: string;
  email: string;
  phone: string;
  skills: string[];
  className?: string;
  style?: React.CSSProperties;
}

const ResourceCard: React.FC<ResourceCardProps> = ({
  id,
  name,
  designation,
  joinDate,
  email,
  phone,
  skills,
  className,
  style
}) => {
  return (
    <Link
      to={`/resources/${id}`}
      className={cn(
        "block p-6 rounded-xl transition-all duration-300",
        "hover-lift bg-white border border-gray-100",
        "group",
        className
      )}
      style={style}
    >
      <div className="flex flex-col h-full">
        <h3 className="text-xl font-medium text-gray-800 mb-2 group-hover:text-brand-skyblue transition-colors">
          {name}
        </h3>
        
        <p className="text-gray-600 text-sm mb-4">{designation}</p>
        
        <div className="space-y-2 mt-2 flex-grow text-sm">
          <div className="flex items-start">
            <span className="text-gray-500 min-w-24">Join Date:</span>
            <span className="text-gray-800">{joinDate}</span>
          </div>
          
          <div className="flex items-start">
            <span className="text-gray-500 min-w-24">Email:</span>
            <span className="text-gray-800 truncate">{email}</span>
          </div>
          
          <div className="flex items-start">
            <span className="text-gray-500 min-w-24">Phone:</span>
            <span className="text-gray-800">{phone}</span>
          </div>
        </div>
        
        <div className="mt-4">
          <p className="text-xs text-gray-500 mb-2">Skills</p>
          <div className="flex flex-wrap gap-2">
            {skills.slice(0, 3).map((skill, index) => (
              <span
                key={index}
                className="px-2 py-1 text-xs bg-brand-skyblue/10 text-brand-skyblue-dark rounded-full"
              >
                {skill}
              </span>
            ))}
            {skills.length > 3 && (
              <span className="px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded-full">
                +{skills.length - 3} more
              </span>
            )}
          </div>
        </div>
        
        <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity text-sm text-brand-skyblue font-medium">
          View details →
        </div>
      </div>
    </Link>
  );
};

export default ResourceCard;

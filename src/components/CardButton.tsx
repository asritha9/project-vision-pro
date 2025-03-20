
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface CardButtonProps {
  to: string;
  title: string;
  icon?: React.ReactNode;
  className?: string;
}

const CardButton: React.FC<CardButtonProps> = ({ to, title, icon, className }) => {
  return (
    <Link
      to={to}
      className={cn(
        "glass-card p-8 rounded-2xl flex flex-col items-center justify-center gap-4 hover-scale transition-all duration-300 group",
        "border border-white/40 bg-gradient-to-br from-white/80 to-white/60 shadow-lg",
        "hover:shadow-xl hover:from-white/90 hover:to-white/70",
        "w-64 h-64 text-center",
        className
      )}
    >
      <div className="text-4xl mb-2 transition-transform duration-300 group-hover:scale-110 text-brand-skyblue">
        {icon}
      </div>
      <h3 className="text-xl font-medium text-gray-800">{title}</h3>
    </Link>
  );
};

export default CardButton;


import React from 'react';
import { Link } from 'react-router-dom';
import { BarChart4, Users, LightbulbIcon, TrendingUp, Settings } from 'lucide-react';
import CardButton from '@/components/CardButton';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-brand-skyblue/5 to-brand-pink/5">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-20 animate-fade-in">
          <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-brand-skyblue to-brand-pink-dark">
            Project Management Dashboard
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Manage projects, resources, initiatives, and track return on investment all in one place.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8 mb-20 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <CardButton 
            to="/projects" 
            title="Projects" 
            icon={<BarChart4 className="w-12 h-12" />}
            className="from-brand-skyblue/10 to-brand-skyblue/5 hover:from-brand-skyblue/15 hover:to-brand-skyblue/10"
          />
          
          <CardButton 
            to="/resources" 
            title="Resource Utilization" 
            icon={<Users className="w-12 h-12" />}
            className="from-brand-pink/10 to-brand-pink/5 hover:from-brand-pink/15 hover:to-brand-pink/10"
          />
          
          <CardButton 
            to="/initiatives" 
            title="Initiatives" 
            icon={<LightbulbIcon className="w-12 h-12" />}
            className="from-brand-skyblue/10 to-brand-skyblue/5 hover:from-brand-skyblue/15 hover:to-brand-skyblue/10"
          />
          
          <CardButton 
            to="/roi" 
            title="Return on Investment" 
            icon={<TrendingUp className="w-12 h-12" />}
            className="from-brand-pink/10 to-brand-pink/5 hover:from-brand-pink/15 hover:to-brand-pink/10"
          />
        </div>
        
        <div className="fixed bottom-8 right-8 z-10 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <Link 
            to="/admin" 
            className="flex items-center justify-center w-16 h-16 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100"
          >
            <Settings className="w-6 h-6 text-gray-800" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Index;

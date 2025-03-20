
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const location = useLocation();
  
  return (
    <header className="w-full px-8 py-4 animate-fade-in">
      <div className="container mx-auto flex items-center justify-between">
        <Link 
          to="/" 
          className="flex items-center space-x-2"
        >
          <div className="flex items-center">
            <div className="w-8 h-8 bg-gradient-to-r from-brand-skyblue to-brand-pink rounded-lg" />
            <h1 className="text-2xl font-display ml-3 tracking-tight">Dashboard</h1>
          </div>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-1">
          {location.pathname !== '/' && (
            <Link
              to="/"
              className={cn(
                "px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                "hover:bg-accent hover:text-accent-foreground"
              )}
            >
              Home
            </Link>
          )}
          
          <Link
            to="/projects"
            className={cn(
              "px-4 py-2 rounded-lg text-sm font-medium transition-colors",
              location.pathname.startsWith('/projects')
                ? "bg-primary text-primary-foreground"
                : "hover:bg-accent hover:text-accent-foreground"
            )}
          >
            Projects
          </Link>
          
          <Link
            to="/resources"
            className={cn(
              "px-4 py-2 rounded-lg text-sm font-medium transition-colors",
              location.pathname.startsWith('/resources')
                ? "bg-primary text-primary-foreground"
                : "hover:bg-accent hover:text-accent-foreground"
            )}
          >
            Resources
          </Link>
          
          <Link
            to="/initiatives"
            className={cn(
              "px-4 py-2 rounded-lg text-sm font-medium transition-colors",
              location.pathname.startsWith('/initiatives')
                ? "bg-primary text-primary-foreground"
                : "hover:bg-accent hover:text-accent-foreground"
            )}
          >
            Initiatives
          </Link>
          
          <Link
            to="/roi"
            className={cn(
              "px-4 py-2 rounded-lg text-sm font-medium transition-colors",
              location.pathname.startsWith('/roi')
                ? "bg-primary text-primary-foreground"
                : "hover:bg-accent hover:text-accent-foreground"
            )}
          >
            ROI
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

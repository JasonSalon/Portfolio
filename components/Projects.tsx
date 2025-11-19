import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Projects</h2>
            <div className="w-20 h-1 bg-primary-500 rounded-full"></div>
          </div>
          <a href="#" className="hidden md:inline-flex items-center text-primary-400 hover:text-primary-300 transition-colors mt-4 md:mt-0">
            View all projects <ExternalLink className="ml-2 h-4 w-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <div key={project.id} className="group bg-slate-900 border border-slate-800 rounded-xl overflow-hidden hover:border-primary-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary-500/10 hover:-translate-y-1">
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-transparent transition-colors z-10"></div>
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-primary-400 transition-colors">{project.title}</h3>
                  <div className="flex space-x-3">
                    {project.github && (
                      <a href={project.github} className="text-slate-400 hover:text-white transition-colors">
                        <Github className="h-5 w-5" />
                      </a>
                    )}
                    <a href={project.link} className="text-slate-400 hover:text-white transition-colors">
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  </div>
                </div>
                
                <p className="text-slate-400 mb-6 line-clamp-3">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 text-xs font-medium text-primary-300 bg-primary-900/30 rounded-md border border-primary-500/20">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center md:hidden">
           <a href="#" className="inline-flex items-center text-primary-400 hover:text-primary-300 transition-colors">
            View all projects <ExternalLink className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
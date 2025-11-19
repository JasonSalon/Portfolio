import React from 'react';
import { Briefcase } from 'lucide-react';
import { EXPERIENCE } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Work Experience</h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative border-l border-slate-800 ml-3 md:ml-0 space-y-12">
            {EXPERIENCE.map((exp, index) => (
              <div key={exp.id} className="relative pl-8 md:pl-12 group">
                {/* Timeline Dot */}
                <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-slate-900 bg-slate-700 group-hover:bg-primary-500 group-hover:scale-125 transition-all duration-300"></div>
                
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                  <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                  <span className="text-sm font-medium text-primary-400 bg-primary-900/20 px-3 py-1 rounded-full w-fit mt-2 sm:mt-0 border border-primary-500/20">
                    {exp.period}
                  </span>
                </div>
                
                <div className="text-lg text-slate-300 font-medium mb-3 flex items-center">
                  <Briefcase className="h-4 w-4 mr-2 text-slate-500" />
                  {exp.company}
                </div>
                
                <p className="text-slate-400 leading-relaxed">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
import React from 'react';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  const categories = Array.from(new Set(SKILLS.map(s => s.category)));

  return (
    <section id="skills" className="py-20 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Technical Expertise</h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {categories.map((category) => (
            <div key={category} className="bg-slate-950 border border-slate-800 rounded-2xl p-6 md:p-8 hover:border-primary-500/30 transition-colors">
              <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
                <span className="bg-primary-500/10 text-primary-400 p-2 rounded-lg mr-3">
                  {category === 'Frontend' && '💻'}
                  {category === 'Backend' && '⚙️'}
                  {category === 'Design' && '🎨'}
                  {category === 'Tools' && '🛠️'}
                </span>
                {category} Development
              </h3>
              
              <div className="space-y-6">
                {SKILLS.filter(s => s.category === category).map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-slate-300 font-medium">{skill.name}</span>
                      <span className="text-slate-500 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-800 rounded-full h-2.5 overflow-hidden">
                      <div 
                        className="bg-gradient-to-r from-primary-600 to-purple-500 h-2.5 rounded-full transition-all duration-1000 ease-out" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
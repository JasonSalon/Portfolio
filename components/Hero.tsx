import React from 'react';
import { ArrowRight, Github, Linkedin, Twitter } from 'lucide-react';
import { PORTFOLIO_OWNER, OWNER_TITLE, OWNER_BIO } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="about" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full z-0 pointer-events-none">
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-primary-500/20 rounded-full blur-3xl mix-blend-screen animate-pulse-slow"></div>
        <div className="absolute top-40 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl mix-blend-screen"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-slate-700 bg-slate-900/50 backdrop-blur-sm mb-6 animate-fade-in">
            <span className="flex h-2 w-2 rounded-full bg-green-400 mr-2"></span>
            <span className="text-xs font-medium text-slate-300">Available for new projects</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 animate-slide-up">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-purple-400">{PORTFOLIO_OWNER}</span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-medium text-slate-400 mb-8 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            {OWNER_TITLE}
          </h2>
          
          <p className="text-lg text-slate-400 mb-10 leading-relaxed animate-slide-up" style={{ animationDelay: '0.2s' }}>
            {OWNER_BIO}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <a href="#projects" className="w-full sm:w-auto px-8 py-3 bg-primary-600 hover:bg-primary-500 text-white rounded-lg font-semibold transition-all shadow-lg shadow-primary-500/25 flex items-center justify-center group">
              View Projects
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#contact" className="w-full sm:w-auto px-8 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-lg font-semibold transition-all border border-slate-700">
              Contact Me
            </a>
          </div>

          <div className="mt-12 flex justify-center space-x-6 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <a href="#" className="text-slate-400 hover:text-white transition-colors">
              <span className="sr-only">GitHub</span>
              <Github className="h-6 w-6" />
            </a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors">
              <span className="sr-only">LinkedIn</span>
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors">
              <span className="sr-only">Twitter</span>
              <Twitter className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
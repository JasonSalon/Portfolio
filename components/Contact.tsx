import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Let's work together</h2>
            <p className="text-slate-400 text-lg mb-8">
              I'm currently available for freelance work and open to full-time opportunities. 
              If you have a project that needs some creative touch, drop me a line.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-slate-800 p-3 rounded-lg">
                  <Mail className="h-6 w-6 text-primary-500" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-white">Email</h3>
                  <p className="text-slate-400">jason@example.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-slate-800 p-3 rounded-lg">
                  <MapPin className="h-6 w-6 text-primary-500" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-white">Location</h3>
                  <p className="text-slate-400">San Francisco, CA</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 bg-slate-800 p-3 rounded-lg">
                  <Phone className="h-6 w-6 text-primary-500" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-white">Phone</h3>
                  <p className="text-slate-400">+1 (555) 123-4567</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                  placeholder="john@company.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">Message</label>
                <textarea 
                  id="message" 
                  rows={4} 
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="w-full bg-primary-600 hover:bg-primary-500 text-white font-bold py-3 px-4 rounded-lg transition-colors shadow-lg shadow-primary-500/20"
              >
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
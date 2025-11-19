import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 py-8 border-t border-slate-900 text-center">
      <p className="text-slate-500 text-sm">
        © {new Date().getFullYear()} Jason Dev. All rights reserved.
      </p>
      <p className="text-slate-600 text-xs mt-2">
        Built with React, Tailwind & Gemini API
      </p>
    </footer>
  );
};

export default Footer;
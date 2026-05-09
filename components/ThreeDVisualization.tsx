'use client';

import { useState, useEffect } from 'react';

export default function ThreeDVisualization() {
  const [activeElement, setActiveElement] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveElement((prev) => (prev + 1) % 3);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-full flex items-center justify-center perspective">
      {/* Container for 3D effect */}
      <style>{`
        @keyframes rotateX {
          0% { transform: rotateX(0deg) rotateY(0deg); }
          100% { transform: rotateX(360deg) rotateY(360deg); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        .perspective {
          perspective: 1000px;
        }
        
        .element-container {
          width: 200px;
          height: 200px;
          position: relative;
          animation: rotateX 6s infinite linear;
        }
        
        .element-inner {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: float 3s ease-in-out infinite;
        }
      `}</style>

      <div className="space-y-4">
        {/* 3D Element 1 - Cloud Computing */}
        {activeElement === 0 && (
          <div className="element-container" key="cloud">
            <div className="element-inner">
              <div className="w-48 h-48 bg-gradient-to-br from-blue-400 to-blue-600 rounded-3xl shadow-2xl flex flex-col items-center justify-center transform hover:scale-110 transition-transform" style={{ animation: 'rotateX 6s infinite linear' }}>
                <svg className="w-24 h-24 text-white mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4c-1.48 0-2.85.43-4.01 1.17l1.46 1.46C10.21 5.23 11.08 5 12 5c3.04 0 5.5 2.46 5.5 5.5v.5H19c2.21 0 4 1.79 4 4 0 2.05-1.53 3.76-3.56 3.97l1.07-1.07c.63-.63.63-1.65 0-2.28l-1.41-1.41c-.38-.38-.88-.58-1.41-.58-.53 0-1.03.2-1.41.58l-.71.71.71.71c.63.63.63 1.65 0 2.28l-1.41 1.41c-.63.63-1.65.63-2.28 0l-.71-.71-.71.71c-.63.63-.63 1.65 0 2.28l1.41 1.41c.63.63 1.65.63 2.28 0l.71-.71-.71-.71c-.38-.38-.58-.88-.58-1.41 0-.53.2-1.03.58-1.41l1.41-1.41c.63-.63 1.65-.63 2.28 0l.71.71" />
                </svg>
                <h3 className="text-white font-bold text-lg text-center">Cloud Computing</h3>
              </div>
            </div>
          </div>
        )}

        {/* 3D Element 2 - Data Processing */}
        {activeElement === 1 && (
          <div className="element-container" key="data">
            <div className="element-inner">
              <div className="w-48 h-48 bg-gradient-to-br from-green-400 to-green-600 rounded-3xl shadow-2xl flex flex-col items-center justify-center transform hover:scale-110 transition-transform" style={{ animation: 'rotateX 6s infinite linear' }}>
                <svg className="w-24 h-24 text-white mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
                </svg>
                <h3 className="text-white font-bold text-lg text-center">Data Processing</h3>
              </div>
            </div>
          </div>
        )}

        {/* 3D Element 3 - AI & Automation */}
        {activeElement === 2 && (
          <div className="element-container" key="ai">
            <div className="element-inner">
              <div className="w-48 h-48 bg-gradient-to-br from-purple-400 to-purple-600 rounded-3xl shadow-2xl flex flex-col items-center justify-center transform hover:scale-110 transition-transform" style={{ animation: 'rotateX 6s infinite linear' }}>
                <svg className="w-24 h-24 text-white mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
                <h3 className="text-white font-bold text-lg text-center">AI & Automation</h3>
              </div>
            </div>
          </div>
        )}

        {/* Indicator dots */}
        <div className="flex justify-center gap-2 mt-6">
          {[0, 1, 2].map((index) => (
            <button
              key={index}
              onClick={() => setActiveElement(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                activeElement === index ? 'bg-primary w-8' : 'bg-gray-300'
              }`}
              aria-label={`Show element ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

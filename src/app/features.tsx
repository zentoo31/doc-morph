import React from 'react';
import { Shield, Clock, Zap, Lock, Download, RefreshCw } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Zap size={24} className="text-blue-600" />,
      title: 'Fast Conversion',
      description:
        'Our cloud-based conversion engine processes your files at lightning speed.',
    },
    {
      icon: <Lock size={24} className="text-blue-600" />,
      title: 'Secure & Private',
      description:
        'All files are encrypted during transfer and automatically deleted after processing.',
    },
    {
      icon: <RefreshCw size={24} className="text-blue-600" />,
      title: 'Batch Processing',
      description:
        'Convert multiple files simultaneously and download them individually or as a bundle.',
    },
    {
      icon: <Shield size={24} className="text-blue-600" />,
      title: 'High Quality',
      description:
        'Advanced algorithms ensure the highest possible quality for your converted files.',
    },
    {
      icon: <Clock size={24} className="text-blue-600" />,
      title: 'Conversion History',
      description:
        'Access your recent conversions for up to 7 days with a free account.',
    },
    {
      icon: <Download size={24} className="text-blue-600" />,
      title: 'Easy Downloads',
      description:
        'Download your converted files immediately or receive them via email.',
    },
  ];

  return (
    <section
      id="features"
      className={`py-16  bg-gray-50`}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2
            className={`text-3xl md:text-4xl font-bold mb-4 ${
              'text-slate-800'
            }`}
          >
            Why Choose Converto?
          </h2>
          <p
            className={`max-w-2xl mx-auto ${
              'text-slate-600'
            }`}
          >
            Our platform offers powerful conversion tools with a focus on speed,
            security, and simplicity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`p-6 rounded-xl transition-transform duration-300 hover:scale-105 ${
                   'bg-white hover:shadow-lg'
              }`}
            >
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${
                  'bg-blue-100'
                }`}
              >
                {feature.icon}
              </div>
              <h3
                className={`text-xl font-semibold mb-2 ${
                 'text-slate-800'
                }`}
              >
                {feature.title}
              </h3>
              <p
                className={`${
                 'text-slate-600'
                }`}
              >
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
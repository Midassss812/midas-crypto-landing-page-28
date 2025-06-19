
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeaturePanelProps {
  features: {
    icon: LucideIcon;
    title: string;
    description: string;
  }[];
  className?: string;
}

const FeaturePanel: React.FC<FeaturePanelProps> = ({ features, className = "" }) => {
  return (
    <div className={`hidden lg:flex flex-col space-y-6 ${className}`}>
      {features.map((feature, index) => (
        <div key={index} className="text-center p-4 border border-[#caa75d]/20 rounded-lg bg-[#caa75d]/5">
          <feature.icon className="w-8 h-8 text-[#caa75d] mx-auto mb-2" />
          <h3 className="text-sm font-semibold text-[#caa75d]">{feature.title}</h3>
          <p className="text-xs text-gray-400 mt-1">{feature.description}</p>
        </div>
      ))}
    </div>
  );
};

export default FeaturePanel;

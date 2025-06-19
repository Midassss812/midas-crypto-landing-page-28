
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const GeographyServices = () => {
  const geographyData = [
    { country: "RF", percentage: "80%" },
    { country: "KZ", percentage: "35%" },
    { country: "TJ", percentage: "20%" },
    { country: "UZ", percentage: "20%" }
  ];

  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold text-center mb-8 text-[#caa75d]">География оказания услуг</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
        {geographyData.map((item, index) => (
          <Card key={index} className="bg-[#1a1a1a] border-[#333] hover:border-[#caa75d] transition-colors text-center">
            <CardContent className="p-6">
              <div className="text-[#caa75d] font-bold text-2xl mb-2">{item.country}</div>
              <div className="text-white text-xl font-semibold">{item.percentage}</div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default GeographyServices;

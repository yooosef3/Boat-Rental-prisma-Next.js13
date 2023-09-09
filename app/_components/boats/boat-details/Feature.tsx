"use client"

import React from "react";

interface FeatureProps {
  label: string;
  Icon: React.ReactNode;
}

const Feature: React.FC<FeatureProps> = ({ label, Icon }) => {
  return (
    <div className="flex items-center gap-2">
      <span className="text-[#BFA888]">{Icon}</span>
      <span className="medium text-slate-700">{label}</span>
    </div>
  );
};

export default Feature;

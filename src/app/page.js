import React from 'react';

// Import Hero directly because it is a Default Export
import Hero from '@/components/sections/Hero';

// Import other components from the index (assuming they are named exports or properly re-exported)
import { 
  Stats, 
  SlideFlow, 
  FoundersCorner,
  Consultancy,
  InvestorMockroom,
  SED
} from '@/components/sections';

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. Hero (includes Fundraising Reality) */}
      <Hero />
      
      {/* 2. Stats (Why Founders Choose ZTH) */}
      <Stats />
      
      {/* 3. SlideFlow (Enhanced with "Why Go To Solution" data) */}
      <SlideFlow /> 
      
      {/* 4. Consultancy */}
      <Consultancy />
      
      {/* 5. Investor Mockroom */}
      <InvestorMockroom />
      
      {/* 6. SED (Coming Soon) */}
      <SED />
      
      {/* 7. Founders Corner */}
      <FoundersCorner />
    </div>
  );
}
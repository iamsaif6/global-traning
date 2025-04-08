import React from 'react';

const SectionTitle = ({ badge, title, subtitle }) => {
  return (
    <div className="w-full max-w-[660px] mx-auto">
      {badge && <p className="mb-3 bg-primary">{badge}</p>}
      <h1 className="text-[#18181B] font-medium text-[56px] leading-[120%] -tracking-[1.6px]">{title}</h1>
      {subtitle && <p className="text-[#6E7381] text-lg font-normal leading-[140%]">{subtitle}</p>}
    </div>
  );
};

export default SectionTitle;

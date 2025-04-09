import React from 'react';

const SectionTitle = ({ badge, title, subtitle, center = false, light = false, large = false }) => {
  return (
    <div className={`w-full ${large ? 'max-w-[900px]' : 'max-w-[660px]'}   ${center ? 'text-center mx-auto' : ''}`}>
      {badge && <p className={`mb-3  font-medium ${light ? 'text-white' : 'text-primary'}`}>{badge}</p>}
      <h1
        className={` w-[90%] ${center ? 'mx-auto' : ''}  font-medium text-[56px] leading-[120%] -tracking-[1.6px] ${
          light ? 'text-white' : 'text-[#18181B]'
        }`}
      >
        {title}
      </h1>
      {subtitle && <p className={` mt-6 text-lg font-normal leading-[140%] ${light ? 'text-white' : 'text-[#6E7381]'}`}>{subtitle}</p>}
    </div>
  );
};

export default SectionTitle;

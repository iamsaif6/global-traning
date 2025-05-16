import React from 'react';

const SectionTitle = ({ badge, title, subtitle, center = false, light = false, large = false, full = false }) => {
  return (
    <div
      className={`w-full  ${large ? 'max-w-[1000px]' : 'max-w-[660px]'} ${full ? 'max-w-full' : ''}   ${
        center ? 'text-center mx-auto' : ' text-center md:text-left'
      }`}
    >
      {badge && <p className={`mb-3 text-sm  font-medium ${light ? 'text-white' : 'text-primary'}`}>{badge}</p>}
      <h2
        className={`w-full lg:w-[90%] ${
          center ? 'mx-auto' : ''
        }  font-medium text-[36px] lg:text-[56px] capitalize leading-[120%] -tracking-[1.6px] ${light ? 'text-white' : 'text-[#18181B]'}`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={` mt-6 text-base lg:text-lg font-normal leading-[140%] ${light ? 'text-white' : 'text-black'}`}>{subtitle}</p>
      )}
    </div>
  );
};

export default SectionTitle;

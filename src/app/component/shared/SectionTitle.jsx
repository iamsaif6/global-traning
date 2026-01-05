import React from 'react';

const SectionTitle = ({ badge, title, subtitle, center = false, light = false, large = false, full = false, capitalize }) => {
  function normalizeTitleCase(text) {
    if (!capitalize) return text;
    if (!text) return '';
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
  }

  const secTionTitle = normalizeTitleCase(title);
  const secTionSubtitle = normalizeTitleCase(subtitle);

  return (
    <div
      className={`w-full  ${large ? 'max-w-[1200px]' : 'max-w-[660px]'} ${full ? 'max-w-full' : ''}   ${
        center ? 'text-center mx-auto' : ' text-center md:text-left'
      }`}
    >
      {badge && <p className={`mb-3 text-base uppercase  font-medium ${light ? 'text-white' : 'text-primary'}`}>{badge}</p>}
      <h2
        className={`w-full lg:w-[90%] ${
          center ? 'mx-auto' : ''
        }  font-medium text-[36px] lg:text-[56px]  leading-[120%] -tracking-[1.6px] ${light ? 'text-white' : 'text-[#18181B]'}`}
      >
        {secTionTitle}
      </h2>
      {secTionSubtitle && (
        <p
          className={` mt-6 text-base text-left lg:text-center lg:text-lg font-normal leading-[140%] ${
            light ? 'text-white' : 'text-black'
          }`}
        >
          {secTionSubtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;

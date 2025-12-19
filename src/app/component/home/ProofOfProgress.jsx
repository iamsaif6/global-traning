import React from 'react';

const stats = [
  { value: '74%', label: 'Less stress' },
  { value: '106%', label: 'More energy at work' },
  { value: '50%', label: 'Higher productivity' },
  { value: '13%', label: 'Fewer sick days' },
  { value: '76%', label: 'More engagement' },
  { value: '29%', label: 'More satisfaction with their lives' },
  { value: '40%', label: 'Less burnout' },
];

const ProofOfProgress = () => {
  return (
    <section className="pb-[60px] max-w-[1600px] mx-auto pt-[60px] lg:pt-[100px] lg:pb-[120px] px-4 lg:px-[120px]">
      <div className="text-center mb-10 lg:mb-[60px]">
        <h2 className="text-[#18181B] font-medium text-[40px] lg:text-[56px] leading-[120%] -tracking-[1.6px] mb-4">
          The proof is in the progress
        </h2>
        <p className="text-base lg:text-lg text-[#18181B] font-normal">
          People at high-trust companies report:
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-6 lg:gap-x-12 lg:gap-y-[60px]">
        {stats.map((stat, index) => (
          <div key={index} className="flex-1 min-w-[140px] max-w-[200px] text-center flex flex-col items-center">
            <span className="text-4xl lg:text-[64px] font-medium text-primary mb-2 lg:mb-4 leading-none">
              {stat.value}
            </span>
            <span className="text-base lg:text-lg font-normal text-[#18181B] leading-[140%]">
              {stat.label}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-10 lg:mt-[60px] text-center">
        <p className="text-sm lg:text-base text-gray-500 font-normal">
          (Harvard Business Review)
        </p>
      </div>
    </section>
  );
};

export default ProofOfProgress;

import React from 'react';
import SectionTitle from '../shared/SectionTitle';

const HowItWorks = () => {
  return (
    <section className="pb-[80px] lg:pb-[120px] px-5 lg:px-[40px]">
      <SectionTitle title={'How  It Works'} center />

      <div className="grid grid-cols-1 lg:grid-cols-3  gap-6 mt-10">
        <div className="rounded-3xl border border-[#D1D1D6] p-[20px] lg:p-8">
          <div className="flex mb-6 flex-col pb-6 border-b border-[#D1D1D6] items-start lg:gap-6 gap-4">
            <span className="w-10  rounded-[8px] h-10 bg-secondary flex items-center justify-center text-[#FCFCFD] font-medium text-2xl">
              1
            </span>
            <h4 className="text-secondary text-2xl font-medium">Interactive Role-Plays</h4>
          </div>

          <p className="text-[#6E7381] font-normal text-base lg:text-lg">Practice real-world scenarios in a safe environment.</p>
        </div>

        <div className="rounded-3xl border border-[#D1D1D6] p-[20px]  lg:p-8">
          <div className="flex mb-6 flex-col pb-6 border-b border-[#D1D1D6] items-start lg:gap-6 gap-4">
            <span className="w-10  rounded-[8px] h-10 bg-secondary flex items-center justify-center text-[#FCFCFD] font-medium text-2xl">
              2
            </span>
            <h4 className="text-secondary  text-2xl font-medium">Customized Tools</h4>
          </div>

          <p className="text-[#6E7381] font-normal text-base lg:text-lg">
            Tailored strategies to align with organizational culture and challenges.
          </p>
        </div>

        <div className="rounded-3xl border border-[#D1D1D6] p-[20px]  lg:p-8">
          <div className="flex mb-6 flex-col pb-6 border-b border-[#D1D1D6] items-start lg:gap-6 gap-4">
            <span className="w-10  rounded-[8px] h-10 bg-secondary flex items-center justify-center text-[#FCFCFD] font-medium text-2xl">
              3
            </span>
            <h4 className="text-secondary text-2xl font-medium">Actionable Outcomes</h4>
          </div>

          <p className="text-[#6E7381] font-normal text-base lg:text-lg">
            Leave with clear frameworks for managing tough conversations effectively.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

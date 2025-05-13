import React from 'react';
import SectionTitle from '../shared/SectionTitle';

const Approch = () => {
  return (
    <section className="py-[80px] lg:py-[120px] px-5 lg:px-[40px]">
      <SectionTitle badge={'OUR APPROACH'} title={'Transforming Workplaces Through Experiential Learning'} />

      <div className="grid grid-cols-1 lg:grid-cols-3  gap-6 mt-10">
        <div className="rounded-3xl lg:p-8">
          <div className="flex mb-6 pb-6 border-b border-[#D1D1D6] items-center lg:gap-6 gap-4">
            <span className="w-10  rounded-[8px] h-10 bg-secondary flex items-center justify-center text-[#FCFCFD] font-medium text-2xl">
              1
            </span>
            <h4 className="text-secondary text-2xl font-medium">Immersive Learning</h4>
          </div>

          <p className="text-[#6E7381] font-normal text-base lg:text-lg">Training is hands-on, ensuring participants learn by doing.</p>
        </div>

        <div className="rounded-3xl lg:p-8">
          <div className="flex mb-6 pb-6 border-b border-[#D1D1D6] items-center lg:gap-6 gap-4">
            <span className="w-10  rounded-[8px] h-10 bg-secondary flex items-center justify-center text-[#FCFCFD] font-medium text-2xl">
              2
            </span>
            <h4 className="text-secondary  text-2xl font-medium">Real-World Application</h4>
          </div>

          <p className="text-[#6E7381] font-normal text-base lg:text-lg">
            Sessions are tailored to address practical challenges faced by leaders and teams.
          </p>
        </div>

        <div className="rounded-3xl lg:p-8">
          <div className="flex mb-6 pb-6 border-b border-[#D1D1D6] items-center lg:gap-6 gap-4">
            <span className="w-10  rounded-[8px] h-10 bg-secondary flex items-center justify-center text-[#FCFCFD] font-medium text-2xl">
              3
            </span>
            <h4 className="text-secondary text-2xl font-medium">Inspiring Environments</h4>
          </div>

          <p className="text-[#6E7381] font-normal text-base lg:text-lg">
            Whether in-person or virtual, our training spaces encourage creativity and focus.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Approch;

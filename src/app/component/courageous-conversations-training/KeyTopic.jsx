import React from 'react';
import cover from '/public/keyTopic.png';
import Image from 'next/image';
import Button from '../shared/Button';

const KeyTopic = () => {
  return (
    <section className="py-[80px] lg:py-[120px]   items-center px-5 lg:px-[40px] grid grid-cols-1 lg:grid-cols-2 gap-12">
      <div className="max-h-[680px] my-10 hidden lg:block h-full rounded-3xl overflow-hidden">
        <Image alt="Cover Photo" className="w-full h-full object-cover" src={cover} height={200} width={400} />
      </div>
      <div>
        <div className={`w-full  max-w-max lg:max-w-[660px]`}>
          <div className="text-center lg:text-left">
            <p className="mb-3 text-white text-sm lg:text-base font-medium">OUR PHILOSOPHY</p>
            <h1 className="  font-medium mb-[60px] text-[40px] lg:text-[56px] leading-[120%] -tracking-[1.6px]">Key Topics Covered</h1>

            <div className="block my-10 lg:hidden max-h-[450px]  h-full rounded-3xl overflow-hidden">
              <Image alt="Cover Photo" className="w-full object-center h-full object-cover" src={cover} height={200} width={400} />
            </div>
          </div>
          <div className="space-y-4 text-secondary ">
            <div className="bg-white border border-[#D1D1D6] duration-200  items-start    flex flex-col lg:flex-row gap-6 p-3 lg:p-6 rounded-[16px] lg:rounded-3xl">
              <div className="flex gap-6   items-center ">
                <div className=" duration-200 bg-secondary text-white  lg:w-[40px] lg:h-[40px] w-[36px] h-[36px] flex-shrink-0 rounded-[8px]  flex items-center justify-center font-medium text-[28px]">
                  1
                </div>
                <h4 className="text-[16px] lg:text-[24px] font-medium   ">Understanding and navigating high-stakes conversations.</h4>
              </div>
            </div>

            <div className="bg-white border border-[#D1D1D6] duration-200 items-start   flex flex-col lg:flex-row gap-6 p-3 lg:p-6 rounded-[16px] lg:rounded-3xl">
              <div className="flex gap-6 items-center lg:items-start">
                <div className=" duration-200 bg-secondary text-white  lg:w-[40px] lg:h-[40px] w-[36px] h-[36px] flex-shrink-0 rounded-[8px] flex items-center justify-center font-medium text-[28px]">
                  2
                </div>
                <h4 className="text-[16px] lg:text-[24px] font-medium  ">Conflict resolution techniques.</h4>
              </div>
            </div>

            <div className="bg-white border border-[#D1D1D6] duration-200 items-start   flex flex-col lg:flex-row gap-6 p-3 lg:p-6 rounded-[16px] lg:rounded-3xl">
              <div className="flex gap-6 items-center lg:items-start">
                <div className=" duration-200 bg-secondary text-white  lg:w-[40px] lg:h-[40px] w-[36px] h-[36px] flex-shrink-0 rounded-[8px] flex items-center justify-center font-medium text-[28px]">
                  3
                </div>
                <h4 className="text-[16px] lg:text-[24px] font-medium ">
                  The BRAVE Feedback Model for delivering structured and effective feedback.
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyTopic;

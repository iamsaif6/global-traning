import React from 'react';
import cover from '/public/PHILOSOPHY.png';
import Image from 'next/image';
import Button from '../shared/Button';

const Philosophy = () => {
  return (
    <section className="py-[80px] lg:py-[120px] bg-primary  items-center px-5 lg:px-[40px] grid grid-cols-1 lg:grid-cols-2 gap-12">
      <div className="max-h-[680px] hidden lg:block h-full rounded-3xl overflow-hidden">
        <Image alt="Cover Photo" className="w-full h-full object-cover" src={cover} height={200} width={400} />
      </div>
      <div>
        <div className={`w-full text-white max-w-max lg:max-w-[660px]`}>
          <div className="text-center lg:text-left">
            <p className="mb-3 text-white text-sm lg:text-base font-medium">OUR PHILOSOPHY</p>
            <h1 className="  font-medium text-[40px] lg:text-[56px] leading-[120%] -tracking-[1.6px]">
              Fostering Connection and Purpose to Drive Success
            </h1>

            <div className="block my-10 lg:hidden max-h-[450px]  h-full rounded-3xl overflow-hidden">
              <Image alt="Cover Photo" className="w-full object-center h-full object-cover" src={cover} height={200} width={400} />
            </div>

            <p className=" mt-6 mb-[56px]  text-lg font-normal leading-[140%]">
              When people feel valued and connected, they are more effective, goal-oriented, and productive. That’s why our training is
              designed to:
            </p>
          </div>
          <div className="space-y-4 ">
            <div className="bg-white shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.10),_0px_10px_10px_-5px_rgba(0,0,0,0.04)] duration-200  items-start    flex flex-col lg:flex-row gap-6 p-3 lg:p-6 rounded-[16px] lg:rounded-3xl">
              <div className="flex gap-6   items-center ">
                <div className=" duration-200 bg-secondary text-white  lg:w-[40px] lg:h-[40px] w-[36px] h-[36px] flex-shrink-0 rounded-[8px]  flex items-center justify-center font-medium text-[28px]">
                  1
                </div>
                <h4 className="text-[16px] lg:text-[24px] font-medium   text-[#18181B]">Re-ignite passion and purpose.</h4>
              </div>
            </div>

            <div className="bg-white shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.10),_0px_10px_10px_-5px_rgba(0,0,0,0.04)] duration-200 items-start   flex flex-col lg:flex-row gap-6 p-3 lg:p-6 rounded-[16px] lg:rounded-3xl">
              <div className="flex gap-6 items-center lg:items-start">
                <div className=" duration-200 bg-secondary text-white  lg:w-[40px] lg:h-[40px] w-[36px] h-[36px] flex-shrink-0 rounded-[8px] flex items-center justify-center font-medium text-[28px]">
                  2
                </div>
                <h4 className="text-[16px] lg:text-[24px] font-medium  text-[#18181B]">Re-connect teams with shared values and goals.</h4>
              </div>
            </div>

            <div className="bg-white shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.10),_0px_10px_10px_-5px_rgba(0,0,0,0.04)] duration-200 items-start   flex flex-col lg:flex-row gap-6 p-3 lg:p-6 rounded-[16px] lg:rounded-3xl">
              <div className="flex gap-6 items-center lg:items-start">
                <div className=" duration-200 bg-secondary text-white  lg:w-[40px] lg:h-[40px] w-[36px] h-[36px] flex-shrink-0 rounded-[8px] flex items-center justify-center font-medium text-[28px]">
                  3
                </div>
                <h4 className="text-[16px] lg:text-[24px] font-medium  text-[#18181B]">
                  Re-imagine strategies to achieve better outcomes.
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;

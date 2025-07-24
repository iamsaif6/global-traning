import React from 'react';
import SectionTitle from '../shared/SectionTitle';
import { Brain, Drama, Handshake, RadioTower, TrendingUp } from 'lucide-react';

const WhyUs = () => {
  return (
    <section className="py-[60px] mb-[300px] lg:py-[120px] px-4 lg:px-[40px] bg-primary">
      <div className={`w-full  max-w-[1000px] text-white  text-center md:text-left`}>
        <p className={`mb-3 text-sm  font-medium `}>WHY US?</p>
        <h2 className={`w-full lg:w-[90%]  font-medium text-[36px] lg:text-[56px]  leading-[120%] -tracking-[1.6px] `}>
          Real training, real results
        </h2>

        <p className={` mt-6 text-base lg:text-lg font-normal leading-[140%] `}>
          Bespoke, experiential learning that feels real, relevant and lasting.
        </p>
      </div>

      <div className="grid gap-6 text-[#18181B] mt-[80px] grid-cols-5">
        <div className="col-span-5 lg:col-span-1 p-4 lg:p-6 flex  gap-6 lg:gap-[30px] flex-col  rounded-[16px] lg:rounded-3xl bg-white">
          <div className="">
            <Drama strokeWidth={1.4} className="w-10 lg:w-14 h-10 lg:h-14" color="#511A75" />
          </div>
          <div>
            <h4 className="text-[16px]  lg:text-[18px] text-[#18181B] font-medium mb-2 md:mb-3">Theatre-based methods</h4>
            <p className="text-black  font-normal text-base md:text-base">
              Including actor role-play and real-time facilitation, to bring learning to life
            </p>
          </div>
        </div>

        <div className="col-span-5 lg:col-span-1 p-4 lg:p-6 flex gap-6 lg:gap-[30px] flex-col rounded-[16px] lg:rounded-3xl bg-white">
          <div className="">
            <RadioTower strokeWidth={1.4} className="w-10 lg:w-14 h-10 lg:h-14" color="#511A75" />
          </div>
          <div>
            <h4 className="text-[16px]  lg:text-[18px] text-[#18181B] font-medium  mb-2 md:mb-3">Live coaching and scenario work</h4>
            <p className=" font-normal   text-base md:text-base">To help people stretch, reflect and shift habits</p>
          </div>
        </div>

        <div className="col-span-5 lg:col-span-1 p-4 lg:p-6  gap-6 lg:gap-[30px] flex flex-col rounded-[16px] lg:rounded-3xl bg-white">
          <div className="">
            <Brain strokeWidth={1.4} className="w-10 lg:w-14 h-10 lg:h-14" color="#511A75" />
          </div>
          <div>
            <h4 className="text-[16px]  lg:text-[18px] text-[#18181B] font-medium  mb-2 md:mb-3">Emotionally intelligent facilitation</h4>
            <p className=" font-normal   text-base md:text-base">To create safe spaces for honesty, risk-taking and connection</p>
          </div>
        </div>

        <div className="col-span-5 lg:col-span-1 p-4 lg:p-6 flex  gap-6 lg:gap-[30px] flex-col  rounded-[16px] lg:rounded-3xl bg-white">
          <div className="">
            <Handshake strokeWidth={1.4} className="w-10 lg:w-14 h-10 lg:h-14" color="#511A75" />
          </div>
          <div>
            <h4 className="text-[16px]  lg:text-[18px] text-[#18181B] font-medium mb-2 md:mb-3">Business and leadership frameworks</h4>
            <p className=" font-normal   text-base md:text-base">Tailored to the realities of teams and organisations today</p>
          </div>
        </div>

        <div className="col-span-5 lg:col-span-1 p-4 lg:p-6 flex  gap-6 lg:gap-[30px] flex-col rounded-[16px] lg:rounded-3xl bg-white">
          <div className="">
            <TrendingUp strokeWidth={1.4} className="w-10 lg:w-14 h-10 lg:h-14" color="#511A75" />
          </div>
          <div>
            <h4 className="text-[16px]  lg:text-[18px] text-[#18181B] font-medium mb-2 md:mb-3">Measurable Impact</h4>
            <p className=" font-normal   text-base md:text-base">Skills that stay with you long after the session ends.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;

import React from 'react';
import SectionTitle from '../shared/SectionTitle';
import cover from '/public/Image-2.png';
import Image from 'next/image';
import Button from '../shared/Button';

const HowItWork = () => {
  return (
    <section className="pt-[120px] pb-[160px] rounded-t-[40px] px-[100px] bg-primary">
      <SectionTitle
        badge={'HOW IT WORKS'}
        title={'Simple Steps to Get Started'}
        subtitle={'Follow these simple steps to get started and achieve your goals with ease.'}
        large
        light
        center
      />

      <div className="grid mt-[60px] grid-cols-2 gap-5">
        <div className="rounded-4xl relative overflow-hidden">
          <div class=" absolute top-0 left-0 w-full h-full bg-[linear-gradient(108deg,_rgba(62,0,101,0.4)_12.47%,_rgba(62,0,101,0)_87.57%)]"></div>
          <Image alt="Cover" src={cover} height={300} width={300} className="w-full h-full object-cover" />
        </div>
        <div className="space-y-6">
          <div className="bg-white shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.10),_0px_10px_10px_-5px_rgba(0,0,0,0.04)] duration-200 hover:bg-secondary group flex gap-6 p-6 rounded-3xl">
            <div className="group-hover:bg-white duration-200 bg-secondary text-white group-hover:text-secondary w-[40px] h-[40px] flex-shrink-0 rounded-[8px] flex items-center justify-center font-medium text-[28px]">
              1
            </div>
            <div className="">
              <h4 className="text-[28px] font-medium mb-3 group-hover:text-white text-[#18181B]">Assess Your Needs</h4>
              <p className="text-lg leading-[140%] group-hover:text-white text-[#6E7381]">
                Schedule a discovery call or complete our questionnaire to identify your team’s strengths and challenges, guiding us to the
                best training solution.
              </p>
            </div>
          </div>

          <div className="bg-white shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.10),_0px_10px_10px_-5px_rgba(0,0,0,0.04)] duration-200 hover:bg-secondary group flex gap-6 p-6 rounded-3xl">
            <div className="group-hover:bg-white duration-200 bg-secondary text-white group-hover:text-secondary w-[40px] h-[40px] flex-shrink-0 rounded-[8px] flex items-center justify-center font-medium text-[28px]">
              2
            </div>
            <div className="">
              <h4 className="text-[28px] font-medium mb-3 group-hover:text-white text-[#18181B]">Customise & Book</h4>
              <p className="text-lg leading-[140%] group-hover:text-white text-[#6E7381]">
                Select from our programs—Leadership, Team Building, or Custom Courses—then choose a date and book your session.
              </p>
            </div>
          </div>

          <div className="bg-white shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.10),_0px_10px_10px_-5px_rgba(0,0,0,0.04)] duration-200 hover:bg-secondary group flex gap-6 p-6 rounded-3xl">
            <div className="group-hover:bg-white duration-200 bg-secondary text-white group-hover:text-secondary w-[40px] h-[40px] flex-shrink-0 rounded-[8px] flex items-center justify-center font-medium text-[28px]">
              3
            </div>
            <div className="">
              <h4 className="text-[28px] font-medium mb-3 group-hover:text-white text-[#18181B]">Transform & Grow</h4>
              <p className="text-lg leading-[140%] group-hover:text-white text-[#6E7381]">
                Participate in hands-on training to enhance communication, leadership, and teamwork, with ongoing support for lasting
                impact.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex mt-[56px] items-center justify-center">
        <Button secondary title={'Book a Free Consultation'} href="#" />
      </div>
    </section>
  );
};

export default HowItWork;

import React from 'react';
import SectionTitle from '../shared/SectionTitle';
import cover from '/public/Image-2.png';
import Image from 'next/image';
import Button from '../shared/Button';

const HowItWork = () => {
  return (
    <section className="py-[60px] lg:py-[120px] px-4 lg:px-[100px] bg-primary">
      <SectionTitle
        badge={'HOW IT WORKS'}
        title={'Start Your Learning Journey'}
        // subtitle={'Follow these simple steps to get started and achieve your goals with ease.'}
        large
        light
        center
      />

      <div className="grid mt-[60px] grid-cols-2 gap-5">
        <div className="col-span-2 w-full max-w-[500px] lg:mx-0 mx-auto lg:col-span-1 rounded-4xl relative overflow-hidden">
          <div class=" absolute top-0 left-0 w-full h-full bg-[linear-gradient(108deg,_rgba(62,0,101,0.4)_12.47%,_rgba(62,0,101,0)_87.57%)]"></div>
          <Image alt="Cover" src={cover} height={300} width={300} className="w-full  h-full object-cover" />
        </div>
        <div className="space-y-6 col-span-2 lg:col-span-1">
          <div className="bg-white shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.10),_0px_10px_10px_-5px_rgba(0,0,0,0.04)] duration-200 hover:bg-[linear-gradient(to_bottom,_rgba(62,0,101,0.50)_15.68%,_rgba(62,0,101,0.01)_69.4%)]  flex flex-col lg:flex-row gap-6 p-6 rounded-[16px] lg:rounded-3xl">
            <div className="flex gap-4 items-center lg:items-start">
              <div className=" duration-200 bg-secondary text-white  w-[40px] h-[40px] flex-shrink-0 rounded-[8px] flex items-center justify-center font-medium text-[28px]">
                1
              </div>
              <h4 className="text-[24px] block lg:hidden lg:text-[28px] font-medium  text-[#18181B]">Book a Discovery Call</h4>
            </div>
            <div className="hidden lg:block">
              <h4 className="text-[24px] lg:text-[28px] font-medium mb-3  text-[#18181B]">Book a Discovery Call</h4>
              <p className="text-lg  leading-[140%]  text-[#6E7381]">
                Schedule a discovery call or complete our questionnaire to identify your team’s strengths and challenges, guiding us to the
                best training solution.
              </p>
            </div>
            <p className="text-base block lg:hidden leading-[140%]  text-[#6E7381]">
              Schedule a discovery call or complete our questionnaire to identify your team’s strengths and challenges, guiding us to the
              best training solution.
            </p>
          </div>

          <div className="bg-white shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.10),_0px_10px_10px_-5px_rgba(0,0,0,0.04)] duration-200 hover:bg-[linear-gradient(to_bottom,_rgba(62,0,101,0.50)_15.68%,_rgba(62,0,101,0.01)_69.4%)]  flex flex-col lg:flex-row gap-6 p-6 rounded-[16px] lg:rounded-3xl">
            <div className="flex gap-4 items-center lg:items-start">
              <div className=" duration-200 bg-secondary text-white  w-[40px] h-[40px] flex-shrink-0 rounded-[8px] flex items-center justify-center font-medium text-[28px]">
                2
              </div>
              <h4 className="text-[24px] block lg:hidden lg:text-[28px] font-medium  text-[#18181B]">Tailor Your Training Experience</h4>
            </div>
            <div className="hidden lg:block">
              <h4 className="text-[24px] lg:text-[28px] font-medium mb-3  text-[#18181B]">Tailor Your Training Experience</h4>
              <p className="text-lg  leading-[140%]  text-[#6E7381]">
                Select from our programs—Leadership, Team Building, or Custom Courses—then choose a date and book your session.
              </p>
            </div>
            <p className="text-base block lg:hidden leading-[140%]  text-[#6E7381]">
              Select from our programs—Leadership, Team Building, or Custom Courses—then choose a date and book your session.
            </p>
          </div>

          <div className="bg-white shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.10),_0px_10px_10px_-5px_rgba(0,0,0,0.04)] duration-200 hover:bg-[linear-gradient(to_bottom,_rgba(62,0,101,0.50)_15.68%,_rgba(62,0,101,0.01)_69.4%)]  flex flex-col lg:flex-row gap-6 p-6 rounded-[16px] lg:rounded-3xl">
            <div className="flex gap-4 items-center lg:items-start">
              <div className=" duration-200 bg-secondary text-white  w-[40px] h-[40px] flex-shrink-0 rounded-[8px] flex items-center justify-center font-medium text-[28px]">
                2
              </div>
              <h4 className="text-[24px] block lg:hidden lg:text-[28px] font-medium  text-[#18181B]">Empower Your People to Grow</h4>
            </div>
            <div className="hidden lg:block">
              <h4 className="text-[24px] lg:text-[28px] font-medium mb-3  text-[#18181B]">Empower Your People to Grow</h4>
              <p className="text-lg  leading-[140%]  text-[#6E7381]">
                Participate in hands-on training to enhance communication, leadership, and teamwork, with ongoing support for lasting
                impact.
              </p>
            </div>
            <p className="text-base block lg:hidden leading-[140%]  text-[#6E7381]">
              Participate in hands-on training to enhance communication, leadership, and teamwork, with ongoing support for lasting impact.
            </p>
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

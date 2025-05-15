import React from 'react';
import SectionTitle from '../shared/SectionTitle';
import cover from '/public/Video.jpg';
import Image from 'next/image';
import Button from '../shared/Button';

const HowItWork = () => {
  return (
    <section className="py-[60px] lg:py-[120px] px-4 lg:px-[100px] bg-primary">
      <SectionTitle badge={'HOW IT WORKS'} title={'Start Your Learning Journey'} large light center />

      <div className="grid mt-[60px] grid-cols-2 items-center gap-5">
        <div className="col-span-2 w-full h-[270px] lg:h-[470px]  lg:mx-0 mx-auto lg:col-span-1 rounded-4xl relative overflow-hidden">
          <Image alt="Cover" src={cover} height={300} width={300} className="w-full object-center  h-full object-cover" />
        </div>
        <div className="space-y-6 col-span-2 lg:col-span-1">
          <div className="bg-white shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.10),_0px_10px_10px_-5px_rgba(0,0,0,0.04)] duration-200  items-center    flex flex-col lg:flex-row gap-6 p-6 rounded-[16px] lg:rounded-3xl">
            <div className="flex gap-6  items-center ">
              <div className=" duration-200 bg-secondary text-white  w-[40px] h-[40px] flex-shrink-0 rounded-[8px]  flex items-center justify-center font-medium text-[28px]">
                1
              </div>
              <h4 className="text-[24px] lg:text-[28px] font-medium   text-[#18181B]">Book a Discovery Call</h4>
            </div>
          </div>

          <div className="bg-white shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.10),_0px_10px_10px_-5px_rgba(0,0,0,0.04)] duration-200    flex flex-col lg:flex-row gap-6 p-6 rounded-[16px] lg:rounded-3xl">
            <div className="flex gap-6 items-center lg:items-start">
              <div className=" duration-200 bg-secondary text-white  w-[40px] h-[40px] flex-shrink-0 rounded-[8px] flex items-center justify-center font-medium text-[28px]">
                2
              </div>
              <h4 className="text-[24px] lg:text-[28px] font-medium  text-[#18181B]">Tailor Your Training Experience</h4>
            </div>
          </div>

          <div className="bg-white shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.10),_0px_10px_10px_-5px_rgba(0,0,0,0.04)] duration-200    flex flex-col lg:flex-row gap-6 p-6 rounded-[16px] lg:rounded-3xl">
            <div className="flex gap-6 items-center lg:items-start">
              <div className=" duration-200 bg-secondary text-white  w-[40px] h-[40px] flex-shrink-0 rounded-[8px] flex items-center justify-center font-medium text-[28px]">
                3
              </div>
              <h4 className="text-[24px] lg:text-[28px] font-medium  text-[#18181B]">Empower Your People to Grow</h4>
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

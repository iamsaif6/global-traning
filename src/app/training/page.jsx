import React from 'react';
import img2 from '/public/image 64@2x.png';
import img3 from '/public/image 68.png';
import img4 from '/public/image 63.png';
import img5 from '/public/image 67.png';
import img6 from '/public/image 62.png';
import Marquee from 'react-fast-marquee';
import Image from 'next/image';
import Service from '../component/traning/service';
import Video from './Video';

const page = () => {
  return (
    <div>
      <header
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(62, 0, 101, 0.90) 5.68%, rgba(62, 0, 101, 0.31) 79.4%, rgba(255, 255, 255, 1) 100%)`,
          backgroundBlendMode: 'overlay',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        className="pt-[147px] h-[80vh] flex items-center justify-center  relative md:pt-[138px] pb-[6px] md:pb-[3px]"
      >
        {/* <Marquee speed={15} autoFill>
          <div className=" rounded-3xl overflow-hidden w-[230px]  mx-[10px] lg:h-[286px]  ">
            <Image className="w-full h-full object-cover object-center" src={img2} alt="Living Wadge Company" />
          </div>
          <div className="mt-[100px] rounded-3xl overflow-hidden w-[230px]  mx-[10px] lg:h-[286px]  ">
            <Image className="w-full h-full object-cover object-center" src={img3} alt="Living Wadge Company" />
          </div>
          <div className="rounded-3xl overflow-hidden w-[230px]  mx-[10px] lg:h-[286px]  ">
            <Image className="w-full h-full object-cover object-center" src={img4} alt="Living Wadge Company" />
          </div>
          <div className="mt-[100px] rounded-3xl overflow-hidden w-[230px]  mx-[10px] lg:h-[286px]  ">
            <Image className="w-full h-full object-cover object-center" src={img5} alt="Living Wadge Company" />
          </div>
          <div className=" rounded-3xl overflow-hidden w-[230px]  mx-[10px] lg:h-[286px]  ">
            <Image className="w-full h-full object-cover object-center" src={img6} alt="Living Wadge Company" />
          </div>
          <div className=" mt-[100px] rounded-3xl overflow-hidden w-[230px]  mx-[10px] lg:h-[286px]  ">
            <Image className="w-full h-full object-cover object-center" src={img5} alt="Living Wadge Company" />
          </div>
        </Marquee> */}
        <div className="w-full relative z-10  mx-auto text-center">
          <h1 className="font-medium  tracking-[-4%] leading-[120%] text-5xl  lg:text-[68px] text-[#FCFCFD]">How can we help you?</h1>
          <p className="text-[#FCFCFD] text-center lg:text-center mx-auto  mt-[18px] md:mt-6 mb-[26px] md:mb-8 w-full lg:w-[90%] font-normal text-base md:text-lg">
            Explore our range of creative offerings for leaders, teams and individuals.
          </p>
        </div>
      </header>
      <Video />
      <Service />
    </div>
  );
};

export default page;

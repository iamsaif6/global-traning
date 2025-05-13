import React from 'react';
import img2 from '/public/image 64@2x.png';
import img3 from '/public/image 68.png';
import img4 from '/public/image 63.png';
import img5 from '/public/image 67.png';
import img6 from '/public/image 62.png';
import Marquee from 'react-fast-marquee';
import Image from 'next/image';
import Service from '../component/traning/service';

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
        className="pt-[147px]  relative md:pt-[138px] pb-[6px] md:pb-[3px]"
      >
        <Marquee speed={15} autoFill>
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
        </Marquee>
      </header>
      <Service />
    </div>
  );
};

export default page;

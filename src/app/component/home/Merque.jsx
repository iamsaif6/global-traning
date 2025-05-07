import React from 'react';
import Marquee from 'react-fast-marquee';
import img1 from '/public/British Red Cross 1.png';
import img2 from '/public/GM logo 1.png';
import img3 from '/public/Logo.svg.png';
import img4 from '/public/nhs-1 2.png';
import img5 from '/public/tripadvisor_logo.png';
import img6 from '/public/unilever_logo.png';
import Image from 'next/image';

const Marque = () => {
  return (
    <div className="py-[40px] lg:py-[60px] bg-white relative z-10">
      <Marquee autoFill>
        <div className=" h-12 mx-[30px] lg:mx-[70px]  ">
          <Image className="w-full h-full object-contain" src={img1} alt="Living Wadge Company" />
        </div>
        <div className="  h-12  mx-[30px] lg:mx-[70px]  ">
          <Image className="w-full h-full object-contain" src={img2} alt="ISO" />
        </div>
        <div className=" h-12  mx-[30px] lg:mx-[70px]  ">
          <Image className="w-full h-full object-contain" src={img3} alt="College of mediator" />
        </div>
        <div className="  h-12  mx-[30px] lg:mx-[70px]  ">
          <Image className="w-full h-full object-contain" src={img6} alt="CMC" />
        </div>
        <div className="  h-12  mx-[30px] lg:mx-[70px]  ">
          <Image className="w-full h-full object-contain" src={img2} alt="ISO" />
        </div>
        <div className="  h-12  mx-[30px] lg:mx-[70px]  ">
          <Image className="w-full h-full object-contain" src={img4} alt="Cyber" />
        </div>
        <div className="  h-12  mx-[30px] lg:mx-[70px]  ">
          <Image className="w-full h-full object-contain" src={img5} alt="Trip Advisier" />
        </div>
      </Marquee>
    </div>
  );
};

export default Marque;

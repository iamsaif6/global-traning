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
    <div className="pt-[60px] lg:pb-[120px] bg-transparent lg:pt-[10px] lg:px-[80px]">
      <p className="text-base  text-center mb-13">Trusted by teams and leaders of all sizes</p>
      <div className="grid grid-cols-6 gap-3">
        <div className="  max-h-[150px] h-full mx-[30px] lg:mx-[70px]  ">
          <Image className="w-full h-full object-contain" src={img1} alt="Living Wadge Company" />
        </div>
        <div className="   max-h-[150px] h-full  mx-[30px] lg:mx-[70px]  ">
          <Image className="w-full h-full object-contain" src={img2} alt="ISO" />
        </div>
        <div className="  max-h-[150px] h-full  mx-[30px] lg:mx-[70px]  ">
          <Image className="w-full h-full object-contain" src={img3} alt="College of mediator" />
        </div>
        <div className="   max-h-[150px] h-full  mx-[30px] lg:mx-[70px]  ">
          <Image className="w-full h-full object-contain" src={img6} alt="CMC" />
        </div>
        <div className="   max-h-[150px] h-full  mx-[30px] lg:mx-[70px]  ">
          <Image className="w-full h-full object-contain" src={img2} alt="ISO" />
        </div>
        <div className="   max-h-[150px] h-full  mx-[30px] lg:mx-[70px]  ">
          <Image className="w-full h-full object-contain" src={img4} alt="Cyber" />
        </div>
        {/* <div className="   max-h-[150px] h-full  mx-[30px] lg:mx-[70px]  ">
          <Image className="w-full h-full object-contain" src={img5} alt="Trip Advisier" />
        </div> */}
      </div>
    </div>
  );
};

export default Marque;

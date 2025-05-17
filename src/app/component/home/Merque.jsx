import React from 'react';
import Marquee from 'react-fast-marquee';
import img1 from '/public/UEL-Single-colour-Logo-Punch-RGB-Black2000.png';
import img2 from '/public/unilever_logo.png';
import img3 from '/public/Logo.svg.png';
import img4 from '/public/British Red Cross 1.png';
import img5 from '/public/TripAdvisor_Logo.png';
import img6 from '/public/GM logo 1.png';
import img7 from '/public/nhs-1 2.png';
import img8 from '/public/ymca.png';
import img9 from '/public/davies.png';
import img10 from '/public/army.png';
import img11 from '/public/university-of-bristol-logo-png-transparent.png';
import img12 from '/public/simplyhealth-bk.png';
import Image from 'next/image';

const Marque = () => {
  return (
    <div className="pt-[60px] lg:py-[120px] bg-transparent  lg:px-[60px]">
      <p className="text-base  text-center mb-13">Trusted by teams and leaders of all sizes</p>
      <div className="grid grid-cols-3 lg:grid-cols-6 mb-10 lg:mb-[60px]">
        <div className="hidden lg:block  max-h-[150px] h-full mx-[30px] lg:mx-[30px]  ">
          <Image className="w-full h-full object-contain" src={img1} alt="Living Wadge Company" />
        </div>
        <div className="hidden lg:block   max-h-[150px] h-full  mx-[30px] lg:mx-[80px]  ">
          <Image className="w-full h-full object-contain" src={img2} alt="ISO" />
        </div>
        <div className="hidden lg:block  max-h-[150px] h-full  mx-[30px] lg:mx-[70px]  ">
          <Image className="w-full h-full object-contain" src={img3} alt="College of mediator" />
        </div>
        <div className="   max-h-[150px] h-full  mx-[30px] lg:mx-[20px]  ">
          <Image className="w-full h-full object-contain" src={img4} alt="CMC" />
        </div>
        <div className="   max-h-[150px] h-full  mx-[30px] lg:mx-[30px]  ">
          <Image className="w-full h-full object-contain" src={img5} alt="ISO" />
        </div>
        <div className="   max-h-[150px] h-full  mx-[30px] lg:mx-[60px]  ">
          <Image className="w-full h-full object-contain" src={img6} alt="Cyber" />
        </div>
      </div>
      <div className="grid grid-cols-3 lg:grid-cols-6">
        <div className="hidden lg:block   max-h-[150px] h-full  mx-[30px] lg:mx-[60px]  ">
          <Image className="w-full h-full object-contain" src={img7} alt="Trip Advisier" />
        </div>
        <div className="hidden lg:block   max-h-[150px] h-full  mx-[30px] lg:mx-[70px]  ">
          <Image className="w-full h-full object-contain" src={img8} alt="Trip Advisier" />
        </div>
        <div className="hidden lg:block   max-h-[150px] h-full  mx-[30px] lg:mx-[20px]  ">
          <Image className="w-full h-full object-contain" src={img9} alt="Trip Advisier" />
        </div>
        <div className="   max-h-[150px] h-full  mx-[30px] lg:mx-[70px]  ">
          <Image className="w-full h-full object-contain" src={img10} alt="Trip Advisier" />
        </div>
        <div className="   max-h-[150px] h-full  mx-[30px] lg:mx-[40px]  ">
          <Image className="w-full h-full object-contain" src={img11} alt="Trip Advisier" />
        </div>
        <div className="   max-h-[150px] h-full  mx-[30px] lg:mx-[30px]  ">
          <Image className="w-full h-full object-contain" src={img12} alt="Trip Advisier" />
        </div>
      </div>
    </div>
  );
};

export default Marque;

import React from 'react';
import img1 from '/public/British Red Cross 1.png';
import img2 from '/public/GM logo 1.png';
import img3 from '/public/Logo.svg.png';
import img4 from '/public/nhs-1 2.png';
import img5 from '/public/tripadvisor_logo.png';
import img6 from '/public/unilever_logo.png';
import Image from 'next/image';

const TrustedBy = () => {
  return (
    <div className="px-4  pt-[80px] lg:pt-[120px]  lg:px-[80px]">
      <div className={`w-full  max-w-[720px] text-center mx-auto`}>
        <h2 className={`w-full lg:w-[90%] mx-auto  font-medium text-[40px] lg:text-[56px] leading-[120%] -tracking-[1.6px] text-[#18181B]`}>
          Trusted By
        </h2>

        <p className={` mt-6 text-base lg:text-lg  leading-[140%] `}>
          We’re proud to have supported. Organisations across education, healthcare, arts, corporate, public and community sectors,
          including:
        </p>
      </div>
      <div className="grid my-[40px] lg:my-[80px] grid-cols-6 gap-3">
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
          <Image className="w-full h-full object-contain" src={img5} alt="ISO" />
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

export default TrustedBy;

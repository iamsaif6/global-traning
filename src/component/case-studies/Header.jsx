import Image from 'next/image';
import React from 'react';
import nhs from '/public/nhs-1 2.png';

const Header = () => {
  return (
    <header>
      <header
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(62, 0, 101, 0.90) 5.68%, rgba(62, 0, 101, 0.31) 79.4%, rgba(255, 255, 255, 1) 100%)`,
          backgroundBlendMode: 'overlay',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        className="pt-[137px] borer grid gap-[50px] grid-cols-1 lg:grid-cols-2 relative md:pt-[180px] gap-y-12 lg:gap-y-0  md:pb-[0px] px-5 md:px-[60px] items-center"
      >
        <div className="order-2  ">
          <div className="min-h-[200px] lg:min-h-[400px] flex items-center justify-center lg:max-w-[1130px] bg-white mx-auto border border-[#D1D1D6] rounded-3xl p-6 w-full ">
            <Image alt="NHS" className="max-w-[150px]" src={nhs} />
          </div>
        </div>
        <div className="text-center order-1 lg:text-left   relative z-10 ">
          <h1 className="font-medium mb-4 tracking-[-4%] leading-[120%] text-[40px] md:[65px] lg:text-[60px] text-white">
            Transforminng Leadership at NHS
          </h1>
          <p className="flex  justify-center lg:justify-start  items-center text-xs lg:text-sm text-white">
            Emma Gersch
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF634A] block mx-[7px]"></span>
            December 24, 2024
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF634A] block mx-[7px]"></span>3 min reading time
          </p>
        </div>
      </header>
    </header>
  );
};

export default Header;

import React from 'react';
import Button from '../shared/Button';

const Header = () => {
  return (
    <header
      style={{
        // backgroundImage: `linear-gradient(to bottom, rgba(62, 0, 101, 0.90) 15.68%, rgba(62, 0, 101, 0.31) 69.4%, rgba(255, 255, 255, 1) 100%)`,
        // backgroundBlendMode: 'overlay',
        // backgroundSize: 'cover',
        // backgroundPosition: 'center',
        backgroundImage: `linear-gradient(to right, #3E0065CC, #3E006500),url('/global_2025-245.jpeg')`,

        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      className="pt-[240px]  max-h-[1050px]  h-screen custom-gradient-bg bg-[center] sm:bg-[center_top] lg:bg-bottom max-sm:bg-[65%_center] relative md:pt-[238px] flex items-center pb-[176px] md:pb-[203px] px-5 md:px-[60px]"
    >
      <div className="w-full relative z-10   mx-auto text-center">
        <h1 className="font-medium  tracking-[-4%] leading-[120%] text-4xl  lg:text-[68px] ">
          Empowering people through <br className="hidden md:block" /> authentic connection
        </h1>
      </div>
    </header>
  );
};

export default Header;

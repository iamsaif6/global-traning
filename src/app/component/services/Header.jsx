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
      className="pt-[187px] max-h-[1050px]  h-screen custom-gradient-bg bg-[center] sm:bg-[center_top] lg:bg-bottom max-sm:bg-[65%_center] relative md:pt-[238px] flex items-center pb-[176px] md:pb-[203px] px-5 md:px-[60px]"
    >
      <div className="w-full relative z-10   mx-auto text-left">
        <h1 className="font-medium tracking-[-4%] leading-[120%] text-5xl  lg:text-[68px] text-[#FCFCFD]">
          Empowering people through <br /> authentic connection
        </h1>
        <p className="text-[#FCFCFD] text-left  mr-auto  mt-[18px] md:mt-6 mb-[26px] md:mb-8 w-full lg:w-[90%] font-normal text-base md:text-lg">
          Whether you’re navigating change, shaping your team’s culture or building leadership confidence, our work is designed to make a
          difference that lasts.
          <br />
          Our training courses reflect your people, your purpose and your reality: thoughtful, collaborative and delivered with heart and
          soul.
          <br />
          We listen first, then co-design the type of support that truly fits for you — shaped by experience, delivered with care and
          grounded in emotional intelligence.
        </p>
        <div className="flex gap-4">
          <Button title={'Explore your options'} href="/training" />
        </div>
      </div>
    </header>
  );
};

export default Header;

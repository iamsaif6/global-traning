import React from 'react';
import Button from '../shared/Button';

const Header = () => {
  return (
    <header
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(62, 0, 101, 0.90) 15.68%, rgba(62, 0, 101, 0.31) 69.4%, rgba(255, 255, 255, 1) 100%)`,
        backgroundBlendMode: 'overlay',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      className="pt-[187px] relative md:pt-[238px] pb-[0px] lg:pb-[203px] px-5 md:px-[60px]"
    >
      <div className="w-full relative z-10  mx-auto text-center">
        <h1 className="font-medium tracking-[-4%] leading-[120%] text-5xl  lg:text-[68px] text-[#FCFCFD]">
          Empowering people to grow,
          <br />
          connect and lead with confidence
        </h1>
        <p className="text-[#FCFCFD] text-center mx-auto  mt-[18px] md:mt-6 mb-[26px] md:mb-8 w-full lg:w-[70%] font-normal text-sm md:text-lg">
          Real learning starts with real people. At Global Training, we believe that when people feel grounded, challenged and heard, they
          open up — to ideas, to change, and to each other.
        </p>
        <div className="flex gap-4 justify-center">
          <Button title={'Start a Conversation'} href="#" />
        </div>
      </div>
    </header>
  );
};

export default Header;

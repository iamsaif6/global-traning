'use client';
import React, { useState } from 'react';
import Button from '../shared/Button';
import Popup from './Popup';

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <header
      style={{
        backgroundImage: `linear-gradient(to right, #3E0065CC, #3E006500),url('/HomePageHeader.jpg')`,

        backgroundSize: 'cover',
        backgroundPosition: 'top',
      }}
      className="py-[187px] relative  md:pt-[238px]  lg:py-[203px] px-5 md:px-[60px]"
    >
      <div className="w-full relative z-10  mx-auto text-center">
        <h1 className="font-medium tracking-[-4%] leading-[120%] text-5xl  lg:text-[68px] text-[#FCFCFD]">
          Empowering people to grow,
          <br />
          connect and lead with confidence
        </h1>
        <p className="text-[#FCFCFD] text-center mx-auto  mt-[18px] md:mt-6 mb-[26px] md:mb-8 w-full lg:w-[70%] font-normal text-sm md:text-lg">
          Real learning starts with real people. <br /> At Global Training, we believe that when people feel grounded, challenged and heard,
          they open up — to ideas, to change, and to each other.
        </p>
        <div onClick={() => setOpen(true)} className="flex max-w-max mx-auto gap-4 justify-center">
          <Button title={'Start a Conversation'} />
        </div>
      </div>
      {/* <Popup setOpen={setOpen} isOpen={open} /> */}
    </header>
  );
};

export default Header;

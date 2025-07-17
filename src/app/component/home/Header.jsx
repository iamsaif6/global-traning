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
        backgroundPosition: 'bottom',
      }}
      className="py-[150px] h-auto md:h-screen relative  md:pt-[208px] px-5 md:px-[60px]"
    >
      <div className="w-full relative z-10  mx-auto text-center">
        <h1 className="font-medium capitalize tracking-[-4%] leading-[120%] text-5xl  lg:text-[68px] text-[#FCFCFD]">
          Every Voice Matters.
          <br />
          Every Story Counts.
        </h1>
        <p className="text-[#FCFCFD] text-center mx-auto  mt-[18px] md:mt-6 mb-[26px] md:mb-8 w-full lg:w-[70%] font-normal text-base md:text-lg">
          We design and deliver practical, immersive and human-centered training experiences that strengthen how people relate, reflect and
          collaborate. Empowering people to grow, connect and lead with emotional intelligence.
          <br />
          At Global Training, we believe that when people feel seen, heard safe and supported, they open up — to ideas, to change, and to
          each other. That is when true learning begins. And, true growth happens when they’re met with empathy, supported to think
          differently, and surrounded by compassion.
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

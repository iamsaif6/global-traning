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
      className="pt-[187px] max-h-[1050px]  h-screen custom-gradient-bg bg-[center] sm:bg-[center_top] lg:bg-bottom max-sm:bg-[65%_center] relative md:pt-[238px] flex items-center pb-[176px] md:pb-[203px] px-5 md:px-[60px]"
    >
      <div className="w-full  flex items-center  text-left lg:pl-5 relative z-10 lg:max-w-[90vw] mx-auto">
        <div className="w-full relative z-10  mx-auto text-center">
          <h1 className="font-semibold text-center mx-auto tracking-[-4%] max-w-[900px] 2xl:max-w-[90%] leading-[120%] text-5xl md:text-[65px] xl:text-[4vw] !text-white ">
            Every voice matters.
            <br />
            Every story counts.
          </h1>
          <p className="text-white md:text-center text-left mt-[25px] mx-auto md:mt-4 mb-[25px] mr-auto max-w-[900px] md:mb-10 w-[100%] font-normal text-base md:text-lg xl:text-xl">
            We design and deliver creative, immersive and impactful training experiences — helping people grow together.
          </p>
          <div onClick={() => setOpen(true)} className="flex max-w-max mx-auto gap-4 justify-center">
            <Button href="/contact-us" title={'Start a conversation'} />
          </div>
        </div>
      </div>
      {/* <Popup setOpen={setOpen} isOpen={open} /> */}
    </header>
  );
};

export default Header;

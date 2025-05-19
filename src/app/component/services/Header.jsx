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
      className="pt-[187px] relative md:pt-[238px] pb-[0px] lg:pb-[103px] px-5 md:px-[60px]"
    >
      <div className="w-full relative z-10   mx-auto text-center">
        <h1 className="font-medium capitalize tracking-[-4%] leading-[120%] text-5xl  lg:text-[68px] text-[#FCFCFD]">
          Every voice matters. <br /> Every story counts
        </h1>
        <p className="text-[#FCFCFD] text-center mx-auto  mt-[18px] md:mt-6 mb-[26px] md:mb-8 w-full lg:w-[90%] font-normal text-sm md:text-lg">
          At Global Training, we design learning experiences that reflect your people, your purpose and your reality — thoughtful,
          collaborative and designed with heart and soul.
          <br />
          Our training helps people build meaningful connections and grow with confidence. We listen first, then we co-design the kind of
          support that actually fits — shaped by experience, delivered with care and grounded in emotional intelligence.
        </p>
        <div className="flex gap-4 justify-center">
          <Button title={'Start a Conversation'} href="/contact-us" />
        </div>
      </div>
    </header>
  );
};

export default Header;

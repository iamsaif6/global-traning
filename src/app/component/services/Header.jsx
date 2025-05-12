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
      <div className="w-full relative z-10   mx-auto text-center">
        <h1 className="font-medium tracking-[-4%] leading-[120%] text-5xl  lg:text-[68px] text-[#FCFCFD]">
          Training Designed Around People, <br /> Not Packages
        </h1>
        <p className="text-[#FCFCFD] text-center mx-auto  mt-[18px] md:mt-6 mb-[26px] md:mb-8 w-full lg:w-[90%] font-normal text-sm md:text-lg">
          We don’t believe in off-the-shelf solutions, because no two people, teams or organisations are the same. At Global Training, we
          listen first. Then we co-design the kind of support that actually fits. Our services aren’t one-size-fits-all, they’re shaped by
          experience, delivered with care and grounded in emotional intelligence.
        </p>
        <div className="flex gap-4 justify-center">
          <Button title={'Start a Conversation'} href="#" />
        </div>
      </div>
    </header>
  );
};

export default Header;

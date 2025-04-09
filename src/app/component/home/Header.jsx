import React from 'react';
import Button from '../shared/Button';
import headerBanner from '/public/AdobeStock_604839762.jpg';

const Header = () => {
  return (
    <header
      style={{
        backgroundImage: `url('/AdobeStock_604839762.jpg'), linear-gradient(to right, rgba(62, 0, 101, 0.90) 15.68%, rgba(62, 0, 101, 0.45) 69.4%)`,
        backgroundBlendMode: 'overlay',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      className="pt-[187px] relative md:pt-[238px] pb-[176px] md:pb-[203px] px-5 md:px-[60px]"
    >
      <div className="w-full relative z-10 lg:max-w-[80%]">
        <h1 className="font-semibold tracking-[-4%] leading-[120%] text-5xl md:[65px] lg:text-[84px] text-white">
          Empowering people to grow, connect and lead with confidence
        </h1>
        <p className="text-white mt-[18px] md:mt-6 mb-[26px] md:mb-8 w-[70%] font-normal text-sm md:text-lg">
          Real learning starts with real people. At Global Training, we believe that when people feel grounded, challenged and heard, they
          open up — to ideas, to change, and to each other.
        </p>
        <div className="flex gap-4">
          <Button title={'Start a Conversation'} href="#" />
        </div>
      </div>
    </header>
  );
};

export default Header;

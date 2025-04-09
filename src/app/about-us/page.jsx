import React from 'react';

const AboutUS = () => {
  return (
    <div>
      <header
        style={{
          backgroundImage: `url('/AdobeStock_604839762.jpg'), linear-gradient(to right, #350b50 0%, rgba(62, 0, 101, 0.20) 100%)`,
          backgroundBlendMode: 'overlay',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        className="pt-[187px] relative md:pt-[238px] pb-[176px] md:pb-[203px] px-5 md:px-[60px]"
      >
        <div className="w-full relative z-10 lg:max-w-[80%]">
          <h1 className="font-semibold tracking-[-4%] leading-[120%] text-5xl md:[65px] lg:text-[68px] text-white">
            About Global Training
          </h1>
          <p className="text-white mt-[18px] md:mt-6 mb-[26px] md:mb-8 w-[70%] font-normal text-sm md:text-lg">
            Real learning starts with real people
          </p>
        </div>
      </header>
    </div>
  );
};

export default AboutUS;

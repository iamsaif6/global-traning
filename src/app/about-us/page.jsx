import React from 'react';
import WhoWeAre from '../component/about-us/WhoWeAre';
import Philosophy from '../component/about-us/Philosophy';
import Approch from '../component/about-us/approch';
import Impact from '../component/about-us/Impact';
import OurTeam from '../component/about-us/OurTeam';

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
      <WhoWeAre />
      {/* Logo Item */}
      <section className="pb-[80px] flex justify-between items-center px-[100px]">
        <p className="text-[56px] font-medium text-secondary">Immersive</p>
        <span className="block w-[44px] h-1 bg-primary"></span>
        <p className="text-[56px] font-medium text-secondary">Impactful</p>
        <span className="block w-[44px] h-1 bg-primary"></span>
        <p className="text-[56px] font-medium text-secondary">Experiental</p>
      </section>

      <Philosophy />
      <Approch />
      <Impact />
      <OurTeam />
    </div>
  );
};

export default AboutUS;

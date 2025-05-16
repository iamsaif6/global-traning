import React from 'react';
import WhoWeAre from '../component/about-us/WhoWeAre';
import Philosophy from '../component/about-us/Philosophy';
import Approch from '../component/about-us/approch';
import Impact from '../component/about-us/Impact';
import OurTeam from '../component/about-us/OurTeam';
import cover from '/public/aboutBg.png';

const AboutUS = () => {
  return (
    <div>
      <header
        style={{
          backgroundImage: `url('/aboutBg.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'top center',
          // backgroundBlendMode: 'overlay',
        }}
        className="pt-[187px] h-screen relative md:pt-[268px] pb-[0px] lg:pb-[203px] px-5 md:px-[60px]"
      >
        <div className="w-full relative z-10  mx-auto text-center">
          <h1 className="font-medium capitalize tracking-[-4%] leading-[120%] text-5xl  lg:text-[68px] text-[#FCFCFD]">
            Real learning starts with <br /> real people
          </h1>
        </div>
      </header>
      <WhoWeAre />
      {/* Logo Item */}
      <section className="pb-[80px] flex flex-col lg:flex-row justify-between items-center px-[100px] gap-4">
        <p className="text-[44px] lg:text-[56px] font-medium text-secondary">Immersive</p>
        <span className="block w-6 lg:w-[44px] h-0.5 lg:h-1 bg-primary"></span>
        <p className="text-[44px] lg:text-[56px] font-medium text-secondary">Impactful</p>
        <span className="block w-6 lg:w-[44px] h-0.5 lg:h-1 bg-primary"></span>
        <p className="text-[44px] lg:text-[56px] font-medium text-secondary">Experiental</p>
      </section>

      <Philosophy />
      <Approch />
      <Impact />
      <OurTeam
        badge={'MEET OUR TEAM'}
        title={'The People Behind the Practice'}
        subtitle={
          'Our facilitators, coaches and actor-roleplayers bring decades of experience across sectors — but more importantly, they bring compassion, creativity and a deep belief in human potential.'
        }
      />
    </div>
  );
};

export default AboutUS;

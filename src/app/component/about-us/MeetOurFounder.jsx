'use client';
import React from 'react';
import SectionTitle from '../shared/SectionTitle';
import Image from 'next/image';
import img1 from '/public/Image-1.png';

const MeetOurFounder = () => {
  return (
    <section className="py-[120px] px-5 lg:px-[80px]">
      <SectionTitle
        badge={'MEET OUR TEAM'}
        title={'The People Behind the Practice'}
        subtitle={
          'Our facilitators, coaches and actor-roleplayers bring decades of experience across sectors — but more importantly, they bring compassion, creativity and a deep belief in human potential.'
        }
        center
        large
      />
      <div className="grid mt-[60px] grid-cols-1 px-5 lg:grid-cols-2 items-center  gap-[90px] lg:max-w-[1318px] mx-auto">
        <div className="max-h-[600px] rounded-2xl overflow-hidden">
          <Image src={img1} className="w-full h-full object-cover object-center" />
        </div>
        <div className="">
          <p className="text-xl lg::text-2xl">
            {/* Adam is a practising criminal barrister and CEDR-accredited mediator who founded Global Mediation in 1999. He oversees the
            organisation’s strategic direction and brings decades of legal and mediation experience from the UK and US. */}
          </p>
          <p className="font-normal text-xl mt-10">Emma Gersch</p>
          <p className="font-bold text-xl mt-2">Founder and Director</p>
        </div>
      </div>
    </section>
  );
};

export default MeetOurFounder;

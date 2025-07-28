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
        title={'The people behind the practice'}
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
          <p className="font-semibold text-2xl leading-0">Emma Gersch</p>
          <p className=" text-lg my-5">Founder and Director</p>
          <p className="text-base lg:text-lg">
            Emma’s background is as a theatre director, trainer, mediator and coach. Over the past twenty years she has designed and
            delivered training for the NHS, British Red Cross, Barristers, Psychologists, Lawyers, Managers and Educators. Emma’s areas of
            expertise are in positive communication, leadership and team management, and courageous conversations.A qualified teacher, and
            member of the Higher Education Faculty at Shakespeare’s Globe, Emma was Senior Teaching Fellow at Bath Spa University and Acting
            Tutor at Royal Central School of Speech of Drama.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MeetOurFounder;

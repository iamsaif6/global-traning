'use client';
import React from 'react';
import SectionTitle from '../shared/SectionTitle';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Link from 'next/link';
import Empathy from '/public/svg/Empathy.svg';
import Person from '/public/svg/Person shield.svg';
import Conversation from '/public/svg/Conversation.svg';
import Globe from '/public/svg/Globe.svg';

const OurServices = () => {
  return (
    <section className="pb-[60px] px-4 lg:pb-[120px] lg:px-[40px]">
      <SectionTitle
        badge={'Transformative Support'}
        title={'Experiential training and workshops'}
        subtitle={
          'We bring people together to grow, reflect and lead with emotional intelligence. Global Training delivers immersive, human-centred learning that inspires clarity, confidence and lasting change. Our workshops and courses help individuals and organisations:'
        }
        center={true}
        capitalize={false}
      />

      <div className="max-w-[1130px] mt-10 md:mt-[80px] mb-10 md:mb-[60px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className=" flex lg:block gap-4 items-center rounded-3xl bg-[#511A7514] p-6">
          <span className="lg:mb-[50px] text-secondary block">
            <Empathy />
          </span>
          <p className="text-[#18181B] font-normal text-base md:text-lg">Build emotionally intelligent leadership</p>
        </div>

        <div className="flex lg:block gap-4 items-center rounded-3xl bg-[#511A7514] p-6">
          <span className="lg:mb-[50px] text-secondary block">
            <Person />
          </span>
          <p className="text-[#18181B] font-normal text-base md:text-lg">Develop resilient, connected teams</p>
        </div>

        <div className="flex lg:block gap-4 items-center rounded-3xl bg-[#511A7514] p-6">
          <span className="lg:mb-[50px] text-secondary block">
            <Conversation />
          </span>
          <p className="text-[#18181B] font-normal text-base md:text-lg">Navigate difficult conversations with confidence and care</p>
        </div>

        <div className="flex lg:block gap-4 items-center rounded-3xl bg-[#511A7514] p-6">
          <span className="lg:mb-[50px] text-secondary block">
            <Globe />
          </span>
          <p className="text-[#18181B] font-normal text-base md:text-lg">
            Foster inclusive cultures where people feel seen, heard and supported
          </p>
        </div>
      </div>

      <div className="max-w-[700px] mx-auto w-full text-center mb-8 md:mb-[56px]">
        <p className="text-base md:text-lg text-left lg:text-center">
          Every session is shaped by real-world experience, grounded in behavioural insight and delivered with compassion.
        </p>
      </div>

      <div className="flex gap-4 flex-col md:flex-row items-center justify-center ">
        <Link
          href={'/services'}
          className="py-3 px-[20px] md:py-[15px] md:px-6 border bg-primary border-primary rounded-[40px]  text-lg font-semibold text-white cursor-pointer"
        >
          Explore our training
        </Link>
      </div>
    </section>
  );
};

export default OurServices;

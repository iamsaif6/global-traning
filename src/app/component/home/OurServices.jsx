'use client';
import React from 'react';
import SectionTitle from '../shared/SectionTitle';
import Image from 'next/image';
import Button from '../shared/Button';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const OurServices = () => {
  return (
    <section className="py-[60px] px-4 lg:py-[120px] lg:px-[40px]">
      <SectionTitle
        badge={'OUR SERVICES'}
        title={'Experiential Training and Workshops'}
        subtitle={
          'We offer immersive training programmes that strengthen how people relate, communicate and collaborate — especially when it matters most.'
        }
        center
      />

      <div className="max-w-[1130px] mx-auto grid grid-cols-4 gap-6">
        <div className=" rounded-3xl bg-[#511A7514] p-6"></div>
      </div>

      <div className="flex gap-4 flex-col md:flex-row items-center justify-center ">
        <button className="py-[18px] px-6 border bg-primary border-primary rounded-[40px] text-lg font-medium text-white cursor-pointer">
          Explore All Services
        </button>
        <button className="py-[18px] px-6 border border-primary rounded-[40px] text-lg font-medium text-primary cursor-pointer">
          Mediation Training
        </button>
      </div>
    </section>
  );
};

export default OurServices;

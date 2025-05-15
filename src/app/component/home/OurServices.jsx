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

      <div className="max-w-[1130px] mt-[80px] mb-[60px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className=" rounded-3xl bg-[#511A7514] p-6">
          <span className="mb-[50px] block">Logo</span>
          <p className="text-[#18181B] font-normal text-lg">Build emotionally intelligent leadership</p>
        </div>

        <div className=" rounded-3xl bg-[#511A7514] p-6">
          <span className="mb-[50px] block">Logo</span>
          <p className="text-[#18181B] font-normal text-lg">Develop resilient, connected teams</p>
        </div>

        <div className=" rounded-3xl bg-[#511A7514] p-6">
          <span className="mb-[50px] block">Logo</span>
          <p className="text-[#18181B] font-normal text-lg">Navigate difficult conversations with confidence and care</p>
        </div>

        <div className=" rounded-3xl bg-[#511A7514] p-6">
          <span className="mb-[50px] block">Logo</span>
          <p className="text-[#18181B] font-normal text-lg">Foster inclusive cultures where people feel seen, heard and supported</p>
        </div>
      </div>

      <div className="max-w-[700px] mx-auto w-full text-center mb-[56px]">
        <p className="text-lg">
          Every session is shaped by real-world experience, grounded in behavioural insight and delivered with compassion.
        </p>
      </div>

      <div className="flex gap-4 flex-col md:flex-row items-center justify-center ">
        <button className="py-[12px] px-6 border bg-primary border-primary rounded-[40px] text-lg font-medium text-white cursor-pointer">
          Explore Our Training
        </button>
      </div>
    </section>
  );
};

export default OurServices;

import Blog from '@/component/case-studies/Blog';
import Header from '@/component/case-studies/Header';
import Post from '@/component/case-studies/Post';
import React from 'react';
import Image from 'next/image';
import zsl from '/public/Logo.svg.png';
import image1 from '/public/case-study/zsl/unnamed-3.jpg';
import image2 from '/public/case-study/zsl/unnamed-4.jpg';
import image3 from '/public/case-study/zsl/unnamed-5.jpg';
import image4 from '/public/case-study/zsl/unnamed-6.jpg';
import image5 from '/public/case-study/zsl/unnamed-7.jpg';

const page = () => {
  return (
    <div>
      <header>
        <header
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(62, 0, 101, 0.90) 5.68%, rgba(62, 0, 101, 0.31) 79.4%, rgba(255, 255, 255, 1) 100%)`,
            backgroundBlendMode: 'overlay',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          className="pt-[137px] borer grid gap-[50px] grid-cols-1 lg:grid-cols-2 relative md:pt-[180px] gap-y-12 lg:gap-y-0  md:pb-[0px] px-5 md:px-[60px] items-center"
        >
          <div className="order-2 lg:order-1  ">
            <div className="min-h-[200px] lg:min-h-[400px] flex items-center justify-center lg:max-w-[1130px] bg-white mx-auto border border-[#D1D1D6] rounded-3xl p-6 w-full ">
              <Image alt="ZSL" className="max-w-[150px]" src={zsl} />
            </div>
          </div>
          <div className="text-center order-1 lg:order-2 lg:text-left   relative z-10 ">
            <h1 className="font-medium mb-4 tracking-[-4%] leading-[120%] text-[40px] md:[65px] lg:text-[60px] text-white">
              Courageous Conversations / Leadership Development Programme
            </h1>
            <p className="flex flex-col md:flex-row  justify-center lg:justify-start  items-center text-sm lg:text-sm text-black">
              <span> Zoological Society of London (ZSL)</span>
              <span className="w-1.5 h-1.5 hidden md:block rounded-full bg-[#FF634A]  mx-[7px]"></span>
              <span> December 24, 2024</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF634A] hidden md:block mx-[7px]"></span>
              <span>3 min reading time</span>
            </p>
          </div>
        </header>
      </header>
      <section className="max-w-[900px]  px-4 mx-auto py-[80px]">
        <p className="text-base lg:text-lg mb-[60px]">
          Global Training regularly collaborates with ZSL: the Zoological Society of London, inspiring Courageous Conversations in the
          workplace. Initially, we worked with the managers, focusing on how to navigate challenging conversations when leading a team, yet
          this training is now being extended across the wider organisation.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          <div className=" ">
            <Image className="w-full h-full object-contain" src={image1}></Image>
          </div>
          <div className=" ">
            <Image className="w-full h-full object-contain" src={image2}></Image>
          </div>
        </div>

        <div>
          <p className="text-base lg:text-lg mb-5">
            Global designs and delivers bespoke training that aligns with the ethos and values of ZSL. With our role-play actors portraying
            authentic, dynamic scenarios, we give delegates the opportunity to observe, practise and deliver their feedback skills in a safe
            and constructive environment.
          </p>
          <p className="text-base lg:text-lg mb-5">
            In the ZSL staff’s ‘natural habitat’ (ZSL London Zoo, Regent’s Park), we focus on meaningful engagement and constructive
            feedback. The goal of our Leadership Development Programme is to ensure that every participant leaves the training with a
            renewed and tangible set of skills in effective leadership and people management. We look forward to continuing our journey with
            the ZSL team - into the wild, and beyond!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            <div className=" ">
              <Image className="w-full h-full object-contain" src={image3}></Image>
            </div>
            <div className=" ">
              <Image className="w-full h-full object-contain" src={image4}></Image>
            </div>
            <div className=" ">
              <Image className="w-full h-full object-contain" src={image5}></Image>
            </div>
          </div>

          <div className="bg-primary text-center my-[30px] text-white rounded-3xl py-10 px-6">
            <p className="text-base lg:text-lg">
              “A great opportunity for self-reflection, with some really valuable tips and terminology for difficult conversations.”
            </p>
          </div>

          <div className="bg-primary text-center my-[30px] text-white rounded-3xl py-10 px-6">
            <p className="text-base lg:text-lg">”The role-play was very real to life and relevant to our organisation. Thank you!”</p>
          </div>

          <div className="bg-primary text-center my-[30px] text-white rounded-3xl py-10 px-6">
            <p className="text-base lg:text-lg">
              “I learned from the day that many people are dealing with exactly the same issues in their teams. It is heartening to know
              that issues I am dealing with are not unique and I’m not alone.”
            </p>
            <p className="text-sm"> - ZSL Manager</p>
          </div>
        </div>
      </section>
      <Blog />
    </div>
  );
};

export default page;

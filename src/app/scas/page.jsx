import Blog from '@/component/case-studies/Blog';
import Header from '@/component/case-studies/Header';
import Post from '@/component/case-studies/Post';
import React from 'react';
import Image from 'next/image';
import image1 from '/public/case-study/scas/unnamed-3.jpg';
import image2 from '/public/case-study/scas/unnamed-4.jpg';
import image3 from '/public/case-study/scas/unnamed-5.jpg';

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
              {/* <Image alt="ZSL" className="max-w-[150px]" src={nhs} /> */}
            </div>
          </div>
          <div className="text-center order-1 lg:order-2 lg:text-left   relative z-10 ">
            <h1 className="font-medium mb-4 tracking-[-4%] leading-[120%] text-[40px] md:[65px] lg:text-[60px] text-white">
              South Central Ambulance Service: Bespoke Training Film
            </h1>
            <p className="flex flex-col md:flex-row  justify-center lg:justify-start  items-center text-sm lg:text-sm text-black">
              {/* <span> Zoological Society of London (ZSL)</span> */}
              {/* <span className="w-1.5 h-1.5 hidden md:block rounded-full bg-[#FF634A]  mx-[7px]"></span> */}
              <span> December 24, 2024</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF634A] hidden md:block mx-[7px]"></span>
              <span>3 min reading time</span>
            </p>
          </div>
        </header>
      </header>
      <section className="max-w-[900px]  px-4 mx-auto py-[80px]">
        <p className="text-base lg:text-lg mb-[60px]">
          South Central Ambulance Service (SCAS) came to us looking to improve certain aspects of their team culture. One of our bespoke
          offerings is the creation of a high impact training film, which we believed would be the perfect fit for SCAS. Our Founder and
          Director Emma Gersch visited the team in action, and spent time immersing herself in their culture – listening, learning and
          collating real-life stories from employees. This allowed Global to devise a truth-driven piece designed to make a real difference.
        </p>
        <p className="text-base lg:text-lg mb-[60px]">
          Whilst all team members remained anonymous, we integrated their stories into an original script, which was brought to life by a
          cast of talented actors, directed by Emma. The final product was a completely bespoke training film, tailor-made for the SCAS team
          and the real issues they face.
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
          <div className="bg-primary text-center my-[30px] text-white rounded-3xl py-10 px-6">
            <p className="text-base lg:text-lg">
              “Every actor chosen was perfect for their assigned roles. Their ability to really embrace those characters was exceptional.
              I’ve watched the actors dozens of times and still find myself invested and entranced by their performances.” <br /> <br />
              “We really enjoyed meeting the wider creative team... the care and attention they put into the preparation for the project was
              outstanding.” <br /> <br />
              “It’s a great learning tool that helps hear everyone’s voice and tailor support depending on the needs and fears revealed. A
              pivotal piece of the journey for change.”
            </p>
            <p className="text-sm mt-5"> — SCAS team</p>
          </div>
        </div>
        <div className=" ">
          <Image className="w-full h-full object-contain" src={image3}></Image>
        </div>
      </section>
      <Blog />
    </div>
  );
};

export default page;

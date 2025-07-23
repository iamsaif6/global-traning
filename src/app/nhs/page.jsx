import Blog from '@/component/case-studies/Blog';
import Header from '@/component/case-studies/Header';
import Post from '@/component/case-studies/Post';
import React from 'react';
import Image from 'next/image';
import nhs from '/public/nhs-1 2.png';

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
              <Image alt="ZSL" className="max-w-[150px]" src={nhs} />
            </div>
          </div>
          <div className="text-center order-1 lg:order-2 lg:text-left   relative z-10 ">
            <h1 className="font-medium mb-4 tracking-[-4%] leading-[120%] text-[40px] md:[65px] lg:text-[60px] text-white">
              NHS: Leadership Development Programme
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
          We deliver an ongoing programme of immersive and engaging leadership training to senior leaders within the NHS. In these regular
          workshops, Emma and the team provide a host of new techniques and skills to empower delegates to speak up unitedly and lead with
          courage and kindness.
        </p>
        <p className="text-base lg:text-lg mb-[60px]">
          It is particularly meaningful for Global to provide support in such an important sector, where team dynamics are pivotal to their
          daily success. We’ve achieved a 100% satisfaction rate from our workshops with the NHS team - and look forward to our continued
          collaboration.
        </p>
        <div className="bg-primary text-center my-[30px] text-white rounded-3xl py-10 px-6">
          <p className="text-base lg:text-lg">
            “Emma and her team are excellent - I cannot recommend her highly enough. The research, preparation and professional expertise
            contributed hugely to the success of three key leadership programmes. The resulting forum theatre scenes were acted so well we
            were frequently asked if the actors had worked in the organisation before. The research into the correct terminology, the
            understanding of culture and policies of the organisation was second to none. <br /> <br />
            The facilitation style set everyone completely at ease, humorous, professional, knowledgeable, relaxed. The most nervous of
            attendees left with real learning, with very practical phrases and approaches, models and most importantly confidence to work
            with the most challenging of staff and achieve real results.”
          </p>
          <p className="text-sm mt-5"> - Diane Allen – Diane Allen Ltd, Developing People, NHS </p>
        </div>

        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          <div className=" ">
            <Image className="w-full h-full object-contain" src={image1}></Image>
          </div>
          <div className=" ">
            <Image className="w-full h-full object-contain" src={image2}></Image>
          </div>
        </div> */}

        <div>
          <div className="bg-primary text-center my-[30px] text-white rounded-3xl py-10 px-6">
            <p className="text-base lg:text-lg">
              “(It was) fantastic to have a communication model to manage challenging conversations, learning how to listen compassionately
              and be clear, kind and brave.”
            </p>
            <p className="text-sm mt-5"> — Senior Leader, NHS</p>
          </div>
        </div>

        <div>
          <div className="bg-primary text-center my-[30px] text-white rounded-3xl py-10 px-6">
            <p className="text-base lg:text-lg">
              “A good reminder of the need to provide clear feedback and understand the needs of the others in conversations.”
            </p>
            <p className="text-sm mt-5"> — Clinical Director, Salisbury NHS Trust</p>
          </div>
        </div>

        <div>
          <div className="bg-primary text-center my-[30px] text-white rounded-3xl py-10 px-6">
            <p className="text-base lg:text-lg">
              “I thought it was perfect. I will use these skills in my everyday practice. The content was spot on.”
            </p>
            <p className="text-sm mt-5"> — Senior Nurse, Bath Royal Infirmary</p>
          </div>
        </div>
      </section>
      <Blog />
    </div>
  );
};

export default page;

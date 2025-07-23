import Blog from '@/component/case-studies/Blog';
import Header from '@/component/case-studies/Header';
import Post from '@/component/case-studies/Post';
import React from 'react';
import Image from 'next/image';
import zsl from '/public/Logo.svg.png';
import image1 from '/public/case-study/Anderson Rose/unnamed-7.jpg';
import image2 from '/public/case-study/Anderson Rose/unnamed-3.jpg';
import image3 from '/public/case-study/Anderson Rose/unnamed-4.jpg';
import image4 from '/public/case-study/Anderson Rose/unnamed-5.jpg';

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
              {/* <Image alt="ZSL" className="max-w-[150px]" src={redCross} /> */}
            </div>
          </div>
          <div className="text-center order-1 lg:order-2 lg:text-left   relative z-10 ">
            <h1 className="font-medium mb-4 tracking-[-4%] leading-[120%] text-[40px] md:[65px] lg:text-[60px] text-white">
              Anderson Rose: Team Building
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
          London-based residential property estate agents Anderson Rose were craving better team connection. At Global Training, we defy the
          generic, and encourage teams to work together in innovative, creative ways.
        </p>
        <p className="text-base lg:text-lg mb-[60px]">
          We took the Anderson Rose team for a ‘day away’ from the office: a refreshed environment is known to lead to a rejuvenated mind!
          Here, our founder and director Emma Gersch led a host of collaborative activities and challenges which allowed team members to
          work together, share personal insights and celebrate their inner child. This helped them to learn about themselves and each other
          – whilst having fun along the way!
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
              “The team loved strengthening their already strong relationships with one another which cements the foundations we are built
              on. Taking the day away from their desks and inboxes to work on self-reflection, gaining more insight and understanding into
              each other, and, most importantly, having fun!”
            </p>
            <p className="text-sm mt-5"> - Anderson Rose Team </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            <div className=" ">
              <Image className="w-full h-full object-contain" src={image3}></Image>
            </div>
            <div className=" ">
              <Image className="w-full h-full object-contain" src={image4}></Image>
            </div>
          </div>
        </div>
      </section>
      <Blog />
    </div>
  );
};

export default page;

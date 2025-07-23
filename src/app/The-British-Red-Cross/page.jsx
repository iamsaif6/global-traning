import Blog from '@/component/case-studies/Blog';
import Header from '@/component/case-studies/Header';
import Post from '@/component/case-studies/Post';
import React from 'react';
import Image from 'next/image';
import zsl from '/public/Logo.svg.png';
import image1 from '/public/case-study/The British Red Cross/unnamed-8.jpg';
import image2 from '/public/case-study/The British Red Cross/unnamed-3.jpg';
import image3 from '/public/case-study/The British Red Cross/unnamed-4.jpg';
import image4 from '/public/case-study/The British Red Cross/unnamed-5.jpg';
import image5 from '/public/case-study/The British Red Cross/unnamed-6.jpg';
import redCross from '/public/case-study/A4_Supporting_logo_text_only_CMYK_print.jpg';

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
              <Image alt="ZSL" className="max-w-[150px]" src={redCross} />
            </div>
          </div>
          <div className="text-center order-1 lg:order-2 lg:text-left   relative z-10 ">
            <h1 className="font-medium mb-4 tracking-[-4%] leading-[120%] text-[40px] md:[65px] lg:text-[60px] text-white">
              The British Red Cross: Role Play Training
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
          Our Founder and Director Emma Gersch has been collaborating with the real-life heroes at the British Red Cross for over a decade.
          Global Training delivers an annual experiential training day for the courageous volunteers from the Psycho-Social Care Team. This
          gives them the invaluable opportunity to practise and develop their skills in an immersive scenario. The aim? To vitally prepare
          them for the complex challenges they will face in deployment.
        </p>

        <div className="bg-primary text-center my-[30px] text-white rounded-3xl py-10 px-6">
          <p className="text-base lg:text-lg">
            “We have successfully run this training day since 2015, and we are always told that this rare opportunity to role play with
            professional actors and an authenticated scenario is vital to the team’s skill development and insight into the human
            condition.”
          </p>
          <p className="text-sm mt-5">- Emma Gersch, Founder & Director at Global Training</p>
        </div>

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
            With a team of up to 30 professional role-play actors, we routinely devise and deliver a full day, large-scale simulation. These
            recreate a topical crisis scenario that the British Red Cross volunteers could be deployed to at any time, anywhere, such as
            terrorist attacks and natural disasters. With intensive research under their belts, our actors fully immerse themselves in their
            roles, and seamlessly improvise nuanced and authentic character journeys. They react realistically to the support of the
            volunteer staff, in scenarios that require anything from conflict resolution to the gentle deconstruction of emotional barriers.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            <div className=" ">
              <Image className="w-full h-full object-contain" src={image3}></Image>
            </div>
            <div className=" ">
              <Image className="w-full h-full object-contain" src={image4}></Image>
            </div>
          </div>

          <p className="text-base lg:text-lg my-5">
            Each simulation is followed by a short debrief, where the actors have the opportunity to give feedback to the volunteers,
            constructively relaying how their approach made their character feel.
          </p>

          <div className="bg-primary text-center my-[30px] text-white rounded-3xl py-10 px-6">
            <p className="text-base lg:text-lg">
              “Thank you for making Saturday such a brilliant learning experience for all the PST. As ever, it was fantastic working with
              you and your team. They brought realism, drama, opportunities for learning aplenty and a real sense of what deploying
              internationally can bring. THANK YOU!”
            </p>
            <p className="text-sm mt-5"> - Dr. Sarah Davidson, Head of Psycho-social and Mental Health at British Red Cross</p>
          </div>
          <div className="bg-primary text-center my-[30px] text-white rounded-3xl py-10 px-6">
            <p className="text-base lg:text-lg">
              “It was honestly the most fun and fulfilling acting experience I’ve ever had. I loved the challenge of having to stay
              completely “live” to whatever each group would bring. This, partnered with the fact that I could use my skills to help people
              in such a big way filled me with SO MUCH JOY.”
            </p>
            <p className="text-sm mt-5"> - Tamsin Lynes, Actor </p>
          </div>

          <div className=" ">
            <Image className="w-full h-full object-contain" src={image5}></Image>
          </div>
        </div>
      </section>
      <Blog />
    </div>
  );
};

export default page;

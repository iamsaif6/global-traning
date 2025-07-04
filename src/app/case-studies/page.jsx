import Link from 'next/link';
import React from 'react';
import trip from '/public/Trip.png';
import uniliver from '/public/unilever_logo.png';
import global from '/public/GM logo 1.png';
import Ed from '/public/case-study/EdPsuchs-logo.png';
import bristol from '/public/university-of-bristol-logo-png-transparent.png';
import zsl from '/public/Logo.svg.png';
import redCross from '/public/case-study/A4_Supporting_logo_text_only_CMYK_print.jpg';
import Image from 'next/image';
import nhs from '/public/nhs-1 2.png';

const data = [
  {
    title: 'Courageous Conversations For ZSL',
    image: zsl,
    link: '/case-studies-zsl',
  },
  {
    title: 'Communication Training For TripAdvisor',
    image: trip,
  },
  {
    title: 'Well-Being Workshop For Unilever',
    image: uniliver,
  },
  {
    title: 'Mediation Training For Global Mediation',
    image: global,
  },
  {
    title: 'Narrative Psychology Training For EdPsychs',
    image: Ed,
  },
  {
    title: 'University Equality, Diversity and Inclusion For University Of Bristol',
    image: bristol,
  },

  {
    title: 'Experiential Crisis For BritishRedCross',
    image: redCross,
  },
  {
    title: 'Transforming Leadership at NHS',
    image: nhs,
  },
];

const CaseStudies = () => {
  return (
    <div>
      {/* <header
        style={{
          backgroundImage: `url('/AdobeStock_604839762.jpg'), linear-gradient(to bottom, rgba(62, 0, 101, 0.90) 5.68%, rgba(62, 0, 101, 0.31) 79.4%, rgba(255, 255, 255, 1) 100%)`,
          backgroundBlendMode: 'overlay',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        className="pt-[187px] relative md:pt-[238px] pb-[176px] md:pb-[203px] px-5 md:px-[60px]"
      >
        <div className="w-full text-center mx-auto relative z-10 lg:max-w-[80%]">
          <h1 className="font-semibold tracking-[-4%] leading-[120%] text-5xl md:[65px] lg:text-[68px] text-white">Case Studies</h1>
          <p className="text-white mt-[18px] md:mt-6 mb-[26px] md:mb-8 mx-auto w-[70%] font-normal text-base md:text-lg">
            Real-world examples of transformation.
          </p>
        </div>
      </header> */}

      <section className="pb-[120px] pt-[150px] px-5 lg:px-[40px]">
        <div>
          {data.map((item, index) => {
            return (
              <div
                key={index}
                className={`${
                  index != 1 ? 'border-b border-[#D1D1D6]' : ''
                } grid pb-[60px] border-b  border-[#D1D1D6] mb-[60px] grid-cols-12 gap-0 lg:gap-[60px]`}
              >
                <div className="col-span-12  mb-6 lg:mb-0  h-[240px] lg:h-auto lg:col-span-4 bg-[#F4F5F6] rounded-2xl lg:rounded-3xl flex items-center justify-center">
                  <Image alt={item.title} className="max-w-[160px]" src={item.image} />
                </div>
                <div className="col-span-12 py-8 lg:col-span-8">
                  <p className="text-[#794D94] font-medium text-xs lg:text-base">December 4, 2024</p>
                  <h3 className="text-[#18181B] font-medium text-2xl lg:text-[40px] mt-2 mb-4">{item.title}</h3>
                  <p className="text-black font-normal text-base lg:text-lg">
                    Through a customized leadership program, we helped NHS leaders build emotional intelligence, enhance decision-making
                    under pressure, and foster stronger team collaboration.
                  </p>
                  <p className="my-[44px]">
                    <span className="text-base block w-full lg:w-[50%] text-black ">
                      “Proin venenatis, nunc nec facilisis vehicula, mauris velit dictum ex, sit amet fermentum orci risus ac nisi.”
                    </span>
                    <span className="text-sm mt-4 text-[#18181B] font-medium block">Richard Carter</span>
                    <span className="text-black font-sm">HR Manager at NHS</span>
                  </p>
                  <div className="flex justify-center md:block">
                    <Link
                      href={item.link ? item.link : '/case-studies-1'}
                      className="border rounded-[40px] py-3 px-6 cursor-pointer hover:bg-secondary hover:text-white duration-200"
                    >
                      Read now
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;

import React from 'react';
import HowitWork1 from '/public/HowitWork-1.jpg';
import HowitWork3 from '/public/HowitWork-2.jpg';
import HowitWork2 from '/public/HowitWork-3.jpg';
import HowitWork4 from '/public/HowitWork-4.jpg';
import Image from 'next/image';
import Button from '../shared/Button';

const HowItWork = () => {
  return (
    <section className="px-4 bg-primary py-[80px] lg:py-[120px]  lg:px-[80px]">
      <div className={`w-full text-white  max-w-[1000px] text-center mx-auto`}>
        <h2 className={`w-full lg:w-[90%]  mx-auto  font-medium text-[40px] lg:text-[56px] leading-[120%] -tracking-[1.6px] `}>
          How it works
        </h2>
        <p className={` mt-6 text-left lg:text-center text-base lg:text-lg font-normal leading-[140%] `}>
          Whether we are designing a workshop, leading a team retreat or facilitating a bespoke workshop, we create learning that meets
          people where they are and supports real, lasting and tangible change. Our approach is always personal, whether you're an
          individual, a team or a whole organisation, we begin by truly listening, then we design something bespoke that fits.
        </p>
      </div>
      {/* Grid */}
      <div className="max-w-[1130px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 lg:mt-[80px]">
        <div className=" rounded-3xl bg-white p-6 min-h-[200px] lg:min-h-[300px]">
          <div className="mb-5 flex items-center gap-3">
            <div className="w-12 flex-shrink-0 text-secondary text-3xl font-semibold flex items-center justify-center lg:w-[60px] h-12 lg:h-[60px] bg-[#511A7533] rounded-lg">
              1
            </div>
            <p className="text-[#511A75] font-medium text-[18px] lg:text-[22px] leading-[120%]">Book a discovery call</p>
          </div>

          <p className=" text-base lg:text-lg font-normal leading-[140%]">
            We’ll talk through what’s going on, the challenges, dynamics or shifts you’re hoping for.
          </p>
        </div>
        <div className="hidden relative md:block overflow-hidden rounded-3xl bg-gray-300  p-8 min-h-[200px] lg:min-h-[300px]">
          <Image src={HowitWork1} alt="HowitWork 1 BG" className="w-full h-full absolute top-0 left-0 object-cover " />
        </div>

        <div className=" rounded-3xl bg-white p-6 min-h-[200px] lg:min-h-[300px]">
          <div className="mb-5 flex items-center gap-3">
            <div className="w-12 flex-shrink-0 text-secondary text-3xl font-semibold flex items-center justify-center lg:w-[60px]  h-12 lg:h-[60px] bg-[#511A7533] rounded-lg">
              {/* <Call /> */}2
            </div>
            <p className="text-[#511A75] font-medium text-[18px] lg:text-[22px] leading-[120%]">We listen, explore and ask questions</p>
          </div>

          <p className=" text-base lg:text-lg font-normal leading-[140%]">
            So we can fully understand the context, what’s at stake, and what kind of change would feel real and lasting.
          </p>
        </div>

        <div className="hidden relative overflow-hidden md:block rounded-3xl bg-gray-300  p-8 min-h-[200px] lg:min-h-[300px]">
          <Image src={HowitWork2} alt="HowitWork 2 BG" className="w-full h-full absolute top-0 left-0 object-cover " />
        </div>

        <div className=" rounded-3xl bg-white p-6 min-h-[200px] lg:min-h-[300px]">
          <div className="mb-5 flex items-center gap-3">
            <div className="w-12 flex-shrink-0 text-secondary text-3xl font-semibold flex items-center justify-center lg:w-[60px]  h-12 lg:h-[60px] bg-[#511A7533] rounded-lg">
              {/* <Light /> */}3
            </div>
            <p className="text-[#511A75] font-medium text-[18px] lg:text-[22px] leading-[120%] ">We propose a clear, thoughtful solution</p>
          </div>

          <p className=" text-base lg:text-lg font-normal leading-[140%]">
            This could be a one-off session, a team away day, coaching, a workshop series, or something entirely new.
          </p>
        </div>

        <div className="hidden relative overflow-hidden md:block rounded-3xl bg-gray-300  p-8 min-h-[200px] lg:min-h-[300px]">
          <Image src={HowitWork3} alt="HowitWork 2 BG" className="w-full h-full absolute top-0 left-0 object-cover " />
        </div>

        <div className=" rounded-3xl bg-white p-6 min-h-[200px] lg:min-h-[300px]">
          <div className="mb-5 flex items-center gap-3">
            <div className="w-12 flex-shrink-0 text-secondary text-3xl font-semibold flex items-center justify-center lg:w-[60px]  h-12 lg:h-[60px] bg-[#511A7533] rounded-lg">
              {/* <Setting /> */}4
            </div>
            <p className="text-[#511A75] font-medium text-[18px] lg:text-[22px] leading-[120%]">Together, we refine it</p>
          </div>

          <p className=" text-base lg:text-lg font-normal leading-[140%]">Until it fits your people, your timing and your goals.</p>
        </div>
        {/* <div className="hidden min-h-[350px] md:block rounded-3xl bg-gray-300 relative overflow-hidden  p-8">
          <Image src={HowitWork4} alt="HowitWork 2 BG" className="w-full h-full absolute top-0 left-0 object-cover " />
        </div> */}

        <div className=" rounded-3xl bg-white p-6 min-h-[200px] lg:min-h-[300px]">
          <div className="mb-5 flex items-center gap-3">
            <div className="w-12 flex-shrink-0 text-secondary text-3xl font-semibold flex items-center justify-center lg:w-[60px]  h-12 lg:h-[60px] bg-[#511A7533] rounded-lg">
              {/* <Gift /> */}5
            </div>
            <p className="text-[#511A75] font-medium text-[18px] lg:text-[22px] leading-[120%]">We deliver</p>
          </div>

          <p className=" text-base lg:text-lg font-normal leading-[140%]">
            With care, creativity and skill, creating safe spaces for honesty, risk-taking and connection.
          </p>
        </div>
        <div className=" rounded-3xl bg-white p-6 min-h-[200px] lg:min-h-[300px]">
          <div className="mb-5 flex items-center gap-3">
            <div className="w-12 flex-shrink-0 text-secondary text-3xl font-semibold flex items-center justify-center lg:w-[60px]  h-12 lg:h-[60px] bg-[#511A7533] rounded-lg">
              {/* <Gift /> */}6
            </div>
            <p className="text-[#511A75] font-medium text-[18px] lg:text-[22px] leading-[120%] ">We reflect and follow up</p>
          </div>

          <p className=" text-base lg:text-lg font-normal leading-[140%]">
            Checking the impact, the shifts in habits and explore what might come next.
          </p>
        </div>
      </div>

      <div>
        <p className={` text-white text-left lg:text-center  mt-6 text-base lg:text-lg font-normal leading-[140%] `}>
          Our training is never ‘off-the-shelf training’. Instead, it’s anchored in what’s real, resulting in team training that’s
          practical, human and built to strengthen connection, communication and leadership.
        </p>
      </div>
      <div className="flex justify-center pt-16">
        <Button title={'Book a Discovery Call '} href="/contact-us" secondary />
      </div>
    </section>
  );
};

export default HowItWork;

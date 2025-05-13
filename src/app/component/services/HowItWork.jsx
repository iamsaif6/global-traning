import React from 'react';
import HowitWork1 from '/public/HowitWork-1.png';
import HowitWork2 from '/public/HowitWork-2.png';
import HowitWork3 from '/public/HowitWork-3.png';
import HowitWork4 from '/public/HowitWork-4.png';
import Image from 'next/image';

const HowItWork = () => {
  return (
    <section className="px-4 bg-primary py-[80px] lg:py-[120px]  lg:px-[80px]">
      <div className={`w-full text-white  max-w-[1000px] text-center mx-auto`}>
        <h2 className={`w-full lg:w-[90%] mx-auto  font-medium text-[40px] lg:text-[56px] leading-[120%] -tracking-[1.6px] `}>
          How it Works
        </h2>

        <p className={` mt-6 text-base lg:text-lg font-normal leading-[140%] `}>
          We design around people, not problems. Our approach is always personal. Whether you're an individual, a team or a whole
          organisation, we begin by listening deeply, then we design something that fits. Here’s what the journey often looks like:
        </p>
      </div>
      {/* Grid */}
      <div className="max-w-[1130px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 lg:mt-[80px]">
        <div className=" rounded-3xl bg-white p-8">
          <p className="mb-8">Icon</p>
          <p className="text-[#511A75] font-medium text-[28px] lg:text-[32px] leading-[120%] mb-3">Book a discovery call</p>
          <p className="text-[#6E7381] text-base lg:text-lg font-normal leading-[140%]">
            We’ll talk through what’s going on, the challenges, dynamics or shifts you’re hoping for.
          </p>
        </div>
        <div className="hidden relative md:block overflow-hidden rounded-3xl bg-gray-300  p-8">
          <Image src={HowitWork1} alt="HowitWork 1 BG" className="w-full h-full absolute top-0 left-0 object-cover " />
        </div>

        <div className=" rounded-3xl bg-white p-8">
          <p className="mb-8">Icon</p>
          <p className="text-[#511A75] font-medium text-[28px] lg:text-[32px] leading-[120%] mb-3">We listen, explore and ask questions</p>
          <p className="text-[#6E7381] text-base lg:text-lg font-normal leading-[140%]">
            So we can fully understand the context, what’s at stake, and what kind of change would feel real and lasting.
          </p>
        </div>

        <div className="hidden relative overflow-hidden md:block rounded-3xl bg-gray-300  p-8">
          <Image src={HowitWork2} alt="HowitWork 2 BG" className="w-full h-full absolute top-0 left-0 object-cover " />
        </div>

        <div className=" rounded-3xl bg-white p-8">
          <p className="mb-8">Icon</p>
          <p className="text-[#511A75] font-medium text-[28px] lg:text-[32px] leading-[120%] mb-3">
            We propose a clear, thoughtful solution
          </p>
          <p className="text-[#6E7381] text-base lg:text-lg font-normal leading-[140%]">
            This could be a one-off session, a team away day, coaching, a workshop series, or something entirely new.
          </p>
        </div>

        <div className="hidden relative overflow-hidden md:block rounded-3xl bg-gray-300  p-8">
          <Image src={HowitWork3} alt="HowitWork 2 BG" className="w-full h-full absolute top-0 left-0 object-cover " />
        </div>

        <div className=" rounded-3xl bg-white p-8">
          <p className="mb-8">Icon</p>
          <p className="text-[#511A75] font-medium text-[28px] lg:text-[32px] leading-[120%] mb-3">Together, we refine it</p>
          <p className="text-[#6E7381] text-base lg:text-lg font-normal leading-[140%]">
            Until it fits your people, your timing and your goals.
          </p>
        </div>
        <div className="hidden min-h-[350px] md:block rounded-3xl bg-gray-300 relative overflow-hidden  p-8">
          <Image src={HowitWork4} alt="HowitWork 2 BG" className="w-full h-full absolute top-0 left-0 object-cover " />
        </div>

        <div className=" rounded-3xl bg-white p-8">
          <p className="mb-8">Icon</p>
          <p className="text-[#511A75] font-medium text-[28px] lg:text-[32px] leading-[120%] mb-3">We deliver</p>
          <p className="text-[#6E7381] text-base lg:text-lg font-normal leading-[140%]">
            With care, curiosity and creativity, in a way that brings everyone along with it.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWork;

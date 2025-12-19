import React from 'react';
import cover from '/public/Our-approch_cover.jpg';
import Image from 'next/image';
import Icon from '/public/svg/Repeat.svg';
import Eye from '/public/svg/Eye.svg';

const WhatWeDo = () => {
  return (
    <section className="py-[60px] lg:py-[120px] bg-primary  px-4 lg:px-[40px] ">
      <div className="grid max-w-[1600px] mx-auto grid-cols-2 gap-10 lg:gap-[150px] items-center">
        <div className="col-span-2  lg:col-span-1">
          <div className={`w-full text-center lg:text-left text-white mx-auto max-w-[660px]`}>
            <p className="mb-3 text-white font-medium">OUR APPROACH</p>
            {/* <h3 className="  font-medium text-[40px] lg:text-[56px] leading-[120%] -tracking-[1.6px]">Experience, Engage, Evolve!</h3> */}

            <div className="h-[420px] mt-10 block lg:hidden mx-auto lg:mx-0 rounded-3xl overflow-hidden col-span-2 lg:col-span-1">
              <Image alt="What we do cover" className="w-full h-full object-cover" src={cover} height={200} width={400} />
            </div>

            <p className=" mt-10 text-left text-base lg:text-lg font-normal leading-[140%]">
              At Global Training, we create learning experiences that are immersive, relational and real.
              <br /> <br />
              We draw on theatre-based methods, coaching practice, live facilitation and leadership frameworks — blending insight with
              imagination, structure with compassion and theory with action.
              <br /> <br />
              We meet people where they are, and support them to think differently, build new skills and grow with confidence.
              <br /> <br />
              Because connection creates change — and when people grow together, they go further together.
            </p>
          </div>
        </div>
        <div className=" hidden lg:block h-full mx-auto lg:mx-0 rounded-3xl overflow-hidden col-span-2 lg:col-span-1">
          <Image alt="What we do cover" className="w-full max-h-[600px] h-full object-cover" src={cover} height={200} width={400} />
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;

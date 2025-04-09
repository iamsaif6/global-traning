import React from 'react';
import SectionTitle from '../shared/SectionTitle';
import Button from '../shared/Button';
import cover from '/public/Image.png';
import Image from 'next/image';

const WhatWeDo = () => {
  return (
    <section className="py-[120px] items-center px-[40px] grid grid-cols-2 gap-5">
      <div>
        <div className={`w-full max-w-[660px]`}>
          <p className="mb-3 text-primary font-medium">WHAT WE DO</p>
          <h1 className="text-[#18181B]  font-medium text-[56px] leading-[120%] -tracking-[1.6px]">Experience, Engage, Evolve</h1>
          <p className="text-[#6E7381] mt-10 text-lg font-normal leading-[140%]">
            At Global Training, we harness the power of experiential learning to drive real transformation. Our unique approach begins by
            understanding your specific challenges and tailoring immersive, hands-on training experiences. By focusing on Purpose, People,
            and Place, we empower your teams to communicate more effectively, lead with confidence, and achieve lasting results.
          </p>
        </div>
        <div className="mt-[56px]">
          <Button href="#" title={'Our Approach'} />
        </div>
      </div>
      <div className="max-h-[580px] rounded-3xl overflow-hidden">
        <Image className="w-full h-full object-cover" src={cover} height={200} width={400} />
      </div>
    </section>
  );
};

export default WhatWeDo;

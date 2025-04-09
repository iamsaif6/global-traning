import Image from 'next/image';
import React from 'react';
import cover from '/public/image 51.png';
import Button from '../shared/Button';

const WhoWeAre = () => {
  return (
    <section className="py-[120px]  items-center px-[40px] grid grid-cols-2 gap-12">
      <div>
        <div className={`w-full  max-w-[660px]`}>
          <p className="mb-3 text-primary font-medium">WHO WE ARE</p>
          <h1 className="  font-medium text-[56px] leading-[120%] -tracking-[1.6px]">Experience, Engage, Evolve</h1>

          <p className=" mt-10 mb-[56px] text-[#6E7381] text-lg font-normal leading-[140%]">
            We are a collective of facilitators, coaches, consultants and actor-roleplayers, united by a belief in the power of experiential
            learning.
            <br /> <br />
            Our work is rooted in emotional intelligence, creativity and connection.
            <br /> <br />
            We help individuals and teams show up more fully, communicate with confidence and lead with impact.
            <br /> <br />
            Whether in reflective spaces or high-energy workshops, everything we deliver is grounded in real-world experience and designed
            to spark meaningful, lasting change.
            <br /> <br />
            At Global Training, we believe connection creates change — and growth that feels real leads to growth that lasts.
          </p>
          <Button href="#" title={'See Our Programs'} />
        </div>
      </div>
      <div className="max-h-[680px] h-full rounded-3xl overflow-hidden">
        <Image className="w-full h-full object-cover" src={cover} height={200} width={400} />
      </div>
    </section>
  );
};

export default WhoWeAre;

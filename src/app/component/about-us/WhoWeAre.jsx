import Image from 'next/image';
import React from 'react';
import cover from '/public/About-Who-Image.jpg';
import Button from '../shared/Button';

const WhoWeAre = () => {
  return (
    <section className="py-[60px] lg:py-[120px]  items-center px-4 lg:px-[40px] grid grid-cols-2 gap-12">
      <div className="col-span-2 lg:col-span-1">
        <div className={`w-full mx-auto text-center lg:text-left  max-w-[660px]`}>
          <p className="mb-3 text-sm text-primary font-medium">WHO WE ARE</p>
          <h1 className="  font-medium text-[40px] lg:text-[56px] leading-[120%] -tracking-[1.6px]">
            About Global <br /> Training
          </h1>

          <div className="max-h-[400px] w-full block my-10 lg:hidden mx-auto  col-span-2 lg:col-span-1 h-full rounded-3xl overflow-hidden">
            <Image alt="Who we are cover" className="w-full h-full object-cover" src={cover} height={500} width={700} />
          </div>

          <p className=" mt-10 mb-[56px]  text-base lg:text-lg font-normal leading-[140%]">
            We are a collective of facilitators, coaches, consultants and actor-roleplayers, united by a belief in the power of experiential
            learning.
            <br /> <br />
            Our work is rooted in emotional intelligence, creativity and connection and we value practice over perfection, connection over
            compliance and real-world relevance over abstract theory.
            <br /> <br />
            We do not believe in one-size-fits-all learning, instead we help individuals and teams show up more fully, communicate with
            confidence and lead with impact.
            <br /> <br />
            Whether in reflective spaces or high-energy workshops, everything we deliver is grounded in real-world experience and designed
            to spark meaningful, lasting change.
          </p>
          <Button href="/services" title={'What We Do'} />
        </div>
      </div>
      <div className="max-h-[680px] hidden lg:block mx-auto lg:mx-0 col-span-2 lg:col-span-1 h-full rounded-3xl overflow-hidden">
        <Image alt="Cover Photo" className="w-full h-full object-cover" src={cover} height={200} width={400} />
      </div>
    </section>
  );
};

export default WhoWeAre;

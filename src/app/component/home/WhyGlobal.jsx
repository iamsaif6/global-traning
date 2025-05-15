import Image from 'next/image';
import React from 'react';
import cover from '/public/Why Global.png';
import Button from '../shared/Button';

const WhyGlobal = () => {
  return (
    <section className="pb-[60px] pt-[80px] lg:pt-0 lg:pb-[120px] items-center px-4 lg:px-[120px] ">
      <div className="grid grid-cols-2 gap-[80px]">
        <div className="max-w-[580px] hidden lg:block mx-auto lg:mx-0 col-span-2 lg:col-span-1 rounded-3xl overflow-hidden">
          <Image alt="Why Global Cover" className="w-full  h-full object-cover" src={cover} height={200} width={400} />
        </div>
        <div className="col-span-2 lg:col-span-1">
          <div className={`w-full text-center lg:text-left mx-auto max-w-[660px]`}>
            <p className="mb-3 text-primary text-sm font-medium">WHY GLOBAL TRAINING</p>
            <h2 className="text-[#18181B]  font-medium text-[40px] lg:text-[56px] leading-[120%] -tracking-[1.6px]">
              We believe that learning should be felt, not forced.
            </h2>
            <div className="max-w-[580px] mt-10 block lg:hidden mx-auto lg:mx-0 col-span-2 lg:col-span-1 rounded-3xl overflow-hidden">
              <Image alt="Why Global Cover" className="w-full  h-full object-cover" src={cover} height={200} width={400} />
            </div>
            <p className=" mt-10 text-lg font-normal leading-[140%]">
              Through hands-on, human-centred training experiences, we create spaces where people can show up fully, strengthen their skills
              and step into their potential.
              <br /> <br />
              At Global Training, growth does not happen through lectures or handbooks, it happens through connection.
              <br /> <br />
              Because when we connect to ourselves, to each other, and to our purpose, real change becomes possible.
              <br /> <br />
              Our work is rooted in emotional intelligence, creativity and lived experience.
              <br />
              Everything we design is practical, compassionate and crafted to meet people where they are.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-[56px] flex justify-center">
        <Button href="/about-us" title={'Find Out More About Us'} />
      </div>
    </section>
  );
};

export default WhyGlobal;

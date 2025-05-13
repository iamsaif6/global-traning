import Image from 'next/image';
import React from 'react';
import cover from '/public/About-Who-Image.png';
import Button from '../shared/Button';

const WhoWeAre = () => {
  return (
    <section className="py-[60px] lg:py-[120px]  items-center px-4 lg:px-[40px] grid grid-cols-2 gap-12">
      <div className="col-span-2 lg:col-span-1">
        <div className={`w-full mx-auto text-center lg:text-left  max-w-[660px]`}>
          <p className="mb-3 text-sm text-primary font-medium">WHO WE ARE</p>
          <h1 className="  font-medium text-[40px] lg:text-[56px] leading-[120%] -tracking-[1.6px]">About Global Training</h1>

          <div className="max-h-[400px] w-full block my-10 lg:hidden mx-auto  col-span-2 lg:col-span-1 h-full rounded-3xl overflow-hidden">
            <Image alt="Who we are cover" className="w-full h-full object-cover" src={cover} height={200} width={400} />
          </div>

          <p className=" mt-10 mb-[56px]  text-base lg:text-lg font-normal leading-[140%]">
            At GTG, we specialize in creating immersive, practice-based training that transforms workplace dynamics. Our programs are
            grounded in current research and a deep understanding of what drives people to succeed—individually and as a team.
            <br /> <br />
            Our dynamic, practice-based experiential training is designed to re-ignite passion, re-connect teams, and re-imagine goals and
            purpose. Delivered in inspiring locations and grounded in the latest research, our programs bring tangible results to
            organizations, managers, and employees alike.
            <br /> <br />
            When people feel valued and happy, they thrive—becoming more effective, goal-oriented, and productive. With a proven track
            record and innovative methods, we’re here to transform your workplace dynamics and help you achieve success.
          </p>
          <Button href="#" title={'See Our Programs'} />
        </div>
      </div>
      <div className="max-h-[680px] hidden lg:block mx-auto lg:mx-0 col-span-2 lg:col-span-1 h-full rounded-3xl overflow-hidden">
        <Image alt="Cover Photo" className="w-full h-full object-cover" src={cover} height={200} width={400} />
      </div>
    </section>
  );
};

export default WhoWeAre;

import React from 'react';
import Button from '../shared/Button';
import cover from '/public/Image-1.png';
import Image from 'next/image';

const Instructor = () => {
  return (
    <section className="py-[60px] lg:py-[120px] items-center px-4 lg:px-[120px] ">
      <div className="grid grid-cols-2 gap-[80px]">
        <div className="col-span-2 lg:col-span-1">
          <div className={`w-full max-w-[660px] mx-auto text-center lg:text-left`}>
            <p className="mb-3 text-primary font-medium">OUR LEAD INSTRUCTOR</p>
            <h1 className="text-[#18181B]  font-medium text-[40px] lg:text-[56px] leading-[120%] -tracking-[1.6px]">
              Emma Gersch - Visionary Leader in Experiential Training
            </h1>
            <p className="text-[#6E7381] mt-10 text-base md:text-lg font-normal leading-[140%]">
              Emma Gersch, Director at Global Training, is a seasoned theatre director, trainer, and coach with over 20 years of experience.
              She brings a unique blend of theatrical expertise and interpersonal training to corporate and public sectors, specializing in
              positive communication, culture and change management, and relationship building. <br /> <br />
              Emma has collaborated with renowned organizations like the NHS, British Red Cross, Unilever, and Tripadvisor, delivering
              dynamic, role-play-based training tailored to transform workplace dynamics and interpersonal behavior.
            </p>
          </div>
        </div>

        <div className="max-h-[580px] mx-auto lg:mx-0 col-span-2 lg:col-span-1 rounded-3xl overflow-hidden">
          <Image className="w-full h-full object-cover" src={cover} height={200} width={400} />
        </div>
      </div>
      <div className="mt-[56px] flex justify-center">
        <Button href="#" title={'Meet Our Team'} />
      </div>
      ;
    </section>
  );
};

export default Instructor;

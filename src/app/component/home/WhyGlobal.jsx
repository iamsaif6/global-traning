import Image from 'next/image';
import React from 'react';
import cover from '/public/Why Global.jpg';
import Button from '../shared/Button';

const WhyGlobal = () => {
  return (
    <section className="pb-[60px] max-w-[1600px] mx-auto pt-[80px] lg:pt-0 lg:pb-[120px] items-center px-4 lg:px-[120px] ">
      <div className="grid grid-cols-2 gap-[80px]">
        <div className="max-w-[580px] mx-auto  hidden lg:block  lg:mx-0 col-span-2 lg:col-span-1 rounded-3xl overflow-hidden">
          <Image alt="Why Global Cover" className="w-full  h-full object-cover" src={cover} height={200} width={400} />
        </div>
        <div className="col-span-2 lg:col-span-1">
          <div className={`w-full text-center lg:text-left mx-auto max-w-[660px]`}>
            <p className="mb-3 text-primary text-sm font-medium">WHY GLOBAL TRAINING</p>
            <h2 className="text-[#18181B]   font-medium text-[40px] lg:text-[56px] leading-[120%] -tracking-[1.6px]">
              We design learning to fit you - not the other way around.
            </h2>
            <div className="max-w-[580px]  mt-10 block lg:hidden mx-auto lg:mx-0 col-span-2 lg:col-span-1 rounded-3xl overflow-hidden">
              <Image alt="Why Global Cover" className="w-full  h-full object-cover" src={cover} height={200} width={400} />
            </div>
            <p className="mt-9 mb-4  text-left text-base lg:text-lg font-normal leading-[140%]">
              Not everyone learns in the same way. While lectures and handbooks offer more traditional learning methods, at Global Training,
              we believe that human connection is the key to genuine growth. <br /> <br />
              Through our bespoke offerings, we empower people to communicate clearly, build strong relationships and show up when it
              counts. Our approach is practical and responsive, grounded in lived experience, and delivered with compassion.
            </p>
            <ul className="pt-6">
              <p className="mb-3 text-base lg:text-lg font-normal leading-[140%]">Our training helps individuals and organisations:</p>
              {[
                'Build emotionally intelligent leadership',
                'Develop resilient, connected teams',
                'Improve communication and feedback skills',
                'Reconnect with their individual purpose',
                'Foster inclusive cultures where people feel seen, heard and supported',
              ].map(li => (
                <div
                  key={li}
                  className={` border-b-[0.5px] group flex gap-3 text-gray-500 items-center justify-between border-[#DAD3FF]  text-lg font-normal p-2 md:p-4`}
                >
                  <div className="flex items-center gap-[26px]">
                    <span className="w-[10px] flex-shrink-0 h-[10px] bg-primary rounded-full inline-block"></span>
                    <p className="text-left">{li}</p>
                  </div>
                </div>
              ))}
              <p className="mt-6 text-left  mb-5 text-base lg:text-lg font-normal leading-[140%]">
                Whether we are designing a tailored workshop, leading a team retreat or facilitating a training course, we create learning
                that meets people where they are and supports real, lasting and tangible change.
              </p>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-3 md:mt-[56px] flex justify-center">
        <Button Customclass={'py-3 px-[20px] md:py-[15px] md:px-6'} href="/training" title={'Explore our training'} />
      </div>
    </section>
  );
};

export default WhyGlobal;

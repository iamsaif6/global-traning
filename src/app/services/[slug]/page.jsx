import React from 'react';
import cover from '/public/image 49.png';
import Image from 'next/image';
import Button from '@/app/component/shared/Button';
import SectionTitle from '@/app/component/shared/SectionTitle';

const page = () => {
  return (
    <div>
      <header className="text-center pt-[200px] bg-[linear-gradient(180deg,_#3E0065_0%,_rgba(255,255,255,0)_100%)]">
        <h1 className="font-medium text-[68px]">
          Courageous Conversations <br /> Training
        </h1>
      </header>
      <div className="pt-[80px] pb-[100px]">
        <div className="w-full rounded-3xl overflow-hidden mx-auto max-w-[980px] h-[600px]">
          <Image src={cover} className="w-full h-full object-cover" />
        </div>
      </div>
      <div className="text-center w-full max-w-[850px] mx-auto pb-10">
        <h2 className="font-medium leading-[120%] text-[56px] mb-1">What It Is</h2>
        <p className=" leading-[140%] text-lg text-[#6E7381] mt-[40px] mb-[56px]">
          A comprehensive program designed to help leaders and teams handle sensitive workplace discussions with confidence, clarity, and
          empathy.
        </p>
        <div className="flex items-center justify-center">
          <Button href="/contact-us" title={'Enroll Today'} />
        </div>
      </div>
      <div className="bg-primary py-[120px] px-[40px] grid grid-cols-12">
        <div className="col-span-4">
          <h4 className="text-[#FCFCFD] font-medium text-[56px]">
            Key Topics <br /> Covered
          </h4>
        </div>
        <div className="col-span-8 text-white font-medium text-2xl">
          <p className="py-6 border-b border-[#fcfcfd66]">Understanding and navigating high-stakes conversations.</p>
          <p className="py-6 border-b border-[#fcfcfd66]">Conflict resolution techniques</p>
          <p className="py-6 ">The BRAVE Feedback Model for delivering structured and effective feedback.</p>
        </div>
      </div>
      {/* How it works */}
      <section className="py-[120px] px-[40px]">
        <SectionTitle title={'How  It Works'} center />
        <div className="grid grid-cols-3 gap-6 mt-10">
          <div className="border rounded-3xl p-8">
            <span className="w-10 mb-6 rounded-[8px] h-10 bg-secondary flex items-center justify-center text-[#FCFCFD] font-medium text-2xl">
              1
            </span>
            <h4 className="text-secondary text-2xl font-medium pb-6 mb-6 border-b border-[#D1D1D6]">Interactive Role-Plays</h4>
            <p className="text-[#6E7381] font-normal text-lg">Practice real-world scenarios in a safe environment.</p>
          </div>

          <div className="border rounded-3xl p-8">
            <span className="w-10 mb-6 rounded-[8px] h-10 bg-secondary flex items-center justify-center text-[#FCFCFD] font-medium text-2xl">
              2
            </span>
            <h4 className="text-secondary text-2xl font-medium pb-6 mb-6 border-b border-[#D1D1D6]">Customized Tools</h4>
            <p className="text-[#6E7381] font-normal text-lg">Tailored strategies to align with organizational culture and challenges.</p>
          </div>

          <div className="border rounded-3xl p-8">
            <span className="w-10 mb-6 rounded-[8px] h-10 bg-secondary flex items-center justify-center text-[#FCFCFD] font-medium text-2xl">
              3
            </span>
            <h4 className="text-secondary text-2xl font-medium pb-6 mb-6 border-b border-[#D1D1D6]">Actionable Outcomes</h4>
            <p className="text-[#6E7381] font-normal text-lg">Leave with clear frameworks for managing tough conversations effectively.</p>
          </div>
        </div>
      </section>

      <div className="bg-primary py-[120px] px-[40px] grid grid-cols-12">
        <div className="col-span-4">
          <h4 className="text-[#FCFCFD] font-medium text-[56px]">Who It’s For</h4>
        </div>
        <div className="col-span-8 text-white font-medium text-2xl">
          <p className="py-6 border-b border-[#fcfcfd66]">Leaders and managers responsible for addressing workplace challenges.</p>

          <p className="py-6 ">Teams in high-pressure environments requiring improved communication skills.</p>
        </div>
      </div>

      <div className=" py-[120px] px-[40px] grid grid-cols-12">
        <div className="col-span-4">
          <h4 className=" font-medium text-[56px]">Impact</h4>
        </div>
        <div className="col-span-8 text-secondary font-medium text-2xl">
          <p className="py-6 border-b border-[#D1D1D6]">Increased confidence in managing workplace conflicts.</p>
          <p className="py-6 border-b border-[#D1D1D6]">Stronger trust and rapport within teams.</p>

          <p className="py-6 ">Measurable improvement in overall workplace communication.</p>
        </div>
      </div>
    </div>
  );
};

export default page;

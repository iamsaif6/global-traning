import Image from 'next/image';
import React from 'react';
import cover from '/public/ImpactCover.png';

const Impact = () => {
  return (
    <section className="py-[80px] lg:py-[120px] bg-primary  items-center px-5 lg:px-[40px] grid grid-cols-1 lg:grid-cols-2 gap-12">
      <div>
        <div className={`w-full text-white  max-w-[660px]`}>
          <div className="text-center lg:text-left">
            <p className="mb-3 text-base lg:text-lg text-white font-medium">THE GLOBAL TRAINING IMPACT</p>
            <h1 className="  font-medium text-[40px] lg:text-[46px] leading-[120%] -tracking-[1.6px]">
              Empowering People, Enhancing Productivity, Delivering Success
            </h1>
          </div>
          <div className="block lg:hidden mt-10 max-h-[680px] h-full rounded-3xl overflow-hidden">
            <Image alt="Cover Photo" className="w-full h-full object-cover" src={cover} height={200} width={400} />
          </div>
          <div className="space-y-4 mt-[60px]">
            <div className="bg-white p-6 rounded-3xl flex gap-6">
              <span className="w-10 h-10 flex-shrink-0 text-white font-medium text-2xl flex items-center justify-center bg-secondary rounded-[8px]">
                1
              </span>
              <div>
                <h3 className="text-2xl lg:text-[28px] text-[#18181B] font-medium mb-2">Organisations</h3>
                <p className="text-[#6E7381] text-base">Organisations see stronger collaboration and culture</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-3xl flex gap-6">
              <span className="w-10 h-10 flex-shrink-0 text-white font-medium text-2xl flex items-center justify-center bg-secondary rounded-[8px]">
                2
              </span>
              <div>
                <h3 className="text-2xl lg:text-[28px] text-[#18181B] font-medium mb-2">Manager</h3>
                <p className="text-[#6E7381] text-base">Managers lead with greater clarity and care</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-3xl flex gap-6">
              <span className="w-10 h-10 flex-shrink-0 text-white font-medium text-2xl flex items-center justify-center bg-secondary rounded-[8px]">
                3
              </span>
              <div>
                <h3 className="text-2xl lg:text-[28px] text-[#18181B] font-medium mb-2">Employee</h3>
                <p className="text-[#6E7381] text-base">Employees feel more connected, capable and confident</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden lg:block max-h-[680px] h-full rounded-3xl overflow-hidden">
        <Image alt="Cover Photo" className="w-full h-full object-cover" src={cover} height={200} width={400} />
      </div>
    </section>
  );
};

export default Impact;

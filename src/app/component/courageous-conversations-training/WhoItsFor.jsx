import React from 'react';
import Cover from '/public/WhoItsFor.png';
import Image from 'next/image';
const WhoItsFor = () => {
  return (
    <section className="py-[80px] text-white lg:py-[120px] items-center px-5 lg:px-[40px] grid grid-cols-1 lg:grid-cols-12 gap-12 bg-primary">
      <div className="lg:block hidden col-span-5 rounded-2xl overflow-hidden">
        <Image src={Cover} alt="Cover" className="w-full h-full object-cover" />
      </div>
      <div className="col-span-7">
        <h2 className="text-[56px] text-center lg:text-left font-medium mb-[60px]">Who It’s For</h2>
        <div className="block max-w-[500px] mx-auto lg:hidden rounded-2xl overflow-hidden">
          <Image src={Cover} alt="Cover" className="w-full h-full object-cover" />
        </div>
        <div className="grid grid-cols-1 mt-10 lg:mt-0 lg:grid-cols-2 gap-6">
          <div className="p-6 bg-white rounded-2xl">
            <p className="mb-6 text-[#18181B]">Icon</p>
            <p className="text-2xl font-medium text-[#18181B]">Leaders and managers responsible for addressing workplace challenges.</p>
          </div>
          <div className="p-6 bg-white rounded-2xl">
            <p className="mb-6 text-[#18181B]">Icon</p>
            <p className="text-2xl font-medium text-[#18181B]">
              Teams in high-pressure environments requiring improved communication skills.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoItsFor;

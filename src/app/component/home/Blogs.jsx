import React from 'react';
import img1 from '/public/image 12.png';
import img2 from '/public/image 50.png';
import img3 from '/public/image 20.png';
import Image from 'next/image';
import Button from '../shared/Button';

const Blogs = () => {
  return (
    <section className="py-[120px] bg-white -mt-[40px] px-[40px] rounded-t-[40px]">
      <div>
        <p className="mb-3 text-primary font-medium">BLOGS & TIPS</p>
        <h1 className="text-[#18181B]  font-medium text-[56px] leading-[120%] -tracking-[1.6px]">
          Insights, reflections and tools to help you grow leadership and connection across your organisation.
        </h1>
      </div>
      <div className="mt-[56px] grid grid-cols-3 gap-4">
        <div className=" rounded-3xl pb-8 bg-[#F4F5F6] overflow-hidden">
          <Image src={img1} className="h-[300px] rounded-b-3xl w-full" />
          <div className="mt-8 px-6">
            <h3 className="text-[#18181B] font-medium text-2xl mb-3">What Are Courageous Conversations in the Workplace?</h3>
            <p className="text-[#6E7381] font-normal text-base">December 4, 2024</p>
          </div>
        </div>

        <div className=" rounded-3xl pb-8 bg-[#F4F5F6] overflow-hidden">
          <Image src={img2} className="h-[300px] rounded-b-3xl w-full" />
          <div className="mt-8 px-6">
            <h3 className="text-[#18181B] font-medium text-2xl mb-3">What Are Courageous Conversations in the Workplace?</h3>
            <p className="text-[#6E7381] font-normal text-base">December 4, 2024</p>
          </div>
        </div>

        <div className=" rounded-3xl pb-8 bg-[#F4F5F6] overflow-hidden">
          <Image src={img3} className="h-[300px] rounded-b-3xl w-full" />
          <div className="mt-8 px-6">
            <h3 className="text-[#18181B] font-medium text-2xl mb-3">What Are Courageous Conversations in the Workplace?</h3>
            <p className="text-[#6E7381] font-normal text-base">December 4, 2024</p>
          </div>
        </div>
      </div>
      <div className="mt-[56px] flex items-center justify-center">
        <Button href="#" title={'Explore More Blogs'} />
      </div>
    </section>
  );
};

export default Blogs;

import React from 'react';
import img1 from '/public/image 12.png';
import img2 from '/public/image 50.png';
import img3 from '/public/image 20.png';
import Image from 'next/image';
import Button from '../shared/Button';

const Blogs = () => {
  return (
    <section className="py-[120px] bg-white -mt-[40px] px-[40px]">
      <div>
        <p className="mb-3 text-primary font-medium">BLOGS & TIPS</p>
        <h1 className="text-[#18181B]  font-medium text-[56px] leading-[120%] -tracking-[1.6px]">
          Your Guide to Better Leadership and Communication
        </h1>
      </div>
      <div className="mt-[56px] grid grid-cols-3 gap-4">
        <div className=" rounded-3xl pb-8   overflow-hidden">
          <Image src={img1} className="h-[300px] rounded-b-3xl w-full" />
          <div className="mt-8 px-6">
            <p className="text-secondary font-normal text-sm">December 4, 2024</p>
            <h3 className="text-[#18181B] font-medium text-2xl mt-3">What Are Courageous Conversations in the Workplace?</h3>
            <button className="px-6 mt-6 py-3 rounded-[40px] text-lg font-medium  hover:bg-primary hover:text-white duration-200 border border-[#D1D1D6] hover:border-primary cursor-pointer">
              Read now
            </button>
          </div>
        </div>

        <div className=" rounded-3xl pb-8   overflow-hidden">
          <Image src={img2} className="h-[300px] rounded-b-3xl w-full" />
          <div className="mt-8 px-6">
            <p className="text-secondary font-normal text-sm">December 4, 2024</p>
            <h3 className="text-[#18181B] font-medium text-2xl mt-3">What Are Courageous Conversations in the Workplace?</h3>
            <button className="px-6 mt-6 py-3 rounded-[40px] text-lg font-medium  hover:bg-primary hover:text-white duration-200 border border-[#D1D1D6] hover:border-primary cursor-pointer">
              Read now
            </button>
          </div>
        </div>

        <div className=" rounded-3xl pb-8   overflow-hidden">
          <Image src={img3} className="h-[300px] rounded-b-3xl w-full" />
          <div className="mt-8 px-6">
            <p className="text-secondary font-normal text-sm">December 4, 2024</p>
            <h3 className="text-[#18181B] font-medium text-2xl mt-3">What Are Courageous Conversations in the Workplace?</h3>
            <button className="px-6 mt-6 py-3 rounded-[40px] text-lg font-medium  hover:bg-primary hover:text-white duration-200 border border-[#D1D1D6] hover:border-primary cursor-pointer">
              Read now
            </button>
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

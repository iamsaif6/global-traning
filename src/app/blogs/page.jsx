import React from 'react';
import img1 from '/public/image 12.png';
import Image from 'next/image';
import Button from '../component/shared/Button';

const page = () => {
  return (
    <div>
      <header
        style={{
          backgroundImage: `url('/AdobeStock_604839762.jpg'), linear-gradient(to right, #350b50 0%, rgba(62, 0, 101, 0.20) 100%)`,
          backgroundBlendMode: 'overlay',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        className="pt-[187px] relative md:pt-[238px] pb-[176px] md:pb-[203px] px-5 md:px-[60px]"
      >
        <div className="w-full relative z-10 lg:max-w-[80%]">
          <h1 className="font-semibold tracking-[-4%] leading-[120%] text-5xl md:[65px] lg:text-[68px] text-white">
            Empowering Workplace Growth Through Knowledge
          </h1>
          <p className="text-white mt-[18px] md:mt-6 mb-[26px] md:mb-8 w-[70%] font-normal text-sm md:text-lg">
            Explore actionable strategies, expert insights, and practical guides to transform your workplace dynamics.
          </p>
        </div>
      </header>

      {/* Blogs */}
      <section className=" py-[120px] px-[40px]">
        <div className="grid  grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(item => {
            return (
              <div className=" rounded-3xl pb-8 mb-[35px]   overflow-hidden">
                <Image src={img1} className="h-[300px] rounded-b-3xl w-full" />
                <div className="mt-8 px-6">
                  <p className="text-secondary font-normal text-sm">December 4, 2024</p>
                  <h3 className="text-[#18181B] font-medium text-2xl mt-3">What Are Courageous Conversations in the Workplace?</h3>
                  <button className="px-6 mt-6 py-3 rounded-[40px] text-lg font-medium  hover:bg-primary hover:text-white duration-200 border border-[#D1D1D6] hover:border-primary cursor-pointer">
                    Read now
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex justify-center">
          <Button href="#" title={'Load More'} />
        </div>
      </section>
    </div>
  );
};

export default page;

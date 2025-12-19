import React from 'react';
import img1 from '/public/image 12.png';
import Image from 'next/image';
import Button from '../component/shared/Button';
import { fetchArticles } from '@/utils/api';
import Link from 'next/link';

const page = async () => {
  const articles = await fetchArticles();

  return (
    <div>
      <header
        style={{
          // backgroundImage: `linear-gradient(to bottom, rgba(62, 0, 101, 0.90) 5.68%, rgba(62, 0, 101, 0.31) 79.4%, rgba(255, 255, 255, 1) 100%)`,
          backgroundImage: `linear-gradient(to right, #3E0065CC, #3E006500),url('/HowitWork-3.jpg')`,
          // backgroundBlendMode: 'overlay',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        className="pt-[187px] max-h-[1050px]  h-screen custom-gradient-bg bg-[center] sm:bg-[center_top] lg:bg-bottom max-sm:bg-[65%_center] relative md:pt-[238px] flex items-center pb-[176px] md:pb-[203px] px-5 md:px-[60px] mb-[120px]"
      >
        <div className="w-full relative z-10  mx-auto text-center">
          <h1 className="font-medium tracking-[-4%] leading-[120%] text-5xl  lg:text-[68px] text-[#FCFCFD]">From page to practice</h1>
          <p className="text-[#FCFCFD] text-left lg:text-center mx-auto  mt-[18px] md:mt-6 mb-[26px] md:mb-8 w-full lg:w-[70%] font-normal text-base md:text-lg">
            Dive into our very own fountain of wisdom — packed with expert insights, practical guides and exclusive training updates.
          </p>
        </div>
      </header>

      {/* Blogs */}
      <section className="pb-[80px] lg:pb-[120px] px-5 lg:px-[40px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => {
            return (
              <div key={index} className=" rounded-3xl pb-8 mb-[35px]   overflow-hidden">
                <Image alt={'Covers'} src={img1} className="h-[300px] object-cover object-top rounded-b-3xl w-full" />
                <div className="mt-8 px-6">
                  <p className="text-secondary font-medium  text-sm">December 4, 2024</p>
                  <h3 className="text-[#18181B] font-medium text-2xl mt-3">What Are Courageous Conversations in the Workplace?</h3>
                  <Link
                    href={`#`}
                    className="px-6 mt-6 py-3 rounded-[40px] inline-block text-lg font-medium  hover:bg-primary hover:text-white duration-200 border border-[#D1D1D6] hover:border-primary cursor-pointer"
                  >
                    Read now
                  </Link>
                </div>
              </div>
            );
          })} */}
          {/* /blogs/incorporating-art-into-your-interior-displaying-artwork-with-style */}
          {articles?.data?.map((item, idx) => {
            return (
              <div key={idx} className=" rounded-3xl pb-8 mb-[35px]   overflow-hidden">
                <Image
                  alt={item.name || 'Cover'}
                  width={800}
                  height={800}
                  src={item?.cover?.url || img1}
                  className="h-[300px] object-cover rounded-b-3xl w-full"
                />
                <div className="mt-8 px-6">
                  <p className="text-secondary font-normal text-sm">
                    {new Date(item.publishedAt).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </p>
                  <h3 title={item.title} className="text-[#18181B] font-medium text-2xl mt-3">
                    {item.title}
                  </h3>
                  <Link
                    href={`/blogs/${item?.slug}`}
                    className="px-6 mt-6 py-3 rounded-[40px] inline-block text-lg font-medium  hover:bg-primary hover:text-white duration-200 border border-[#D1D1D6] hover:border-primary cursor-pointer"
                  >
                    Read now
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex mb-[80px] lg:mb-10 justify-center">
          <Button href="#" title={'Load More'} />
        </div>
      </section>
    </div>
  );
};

export default page;

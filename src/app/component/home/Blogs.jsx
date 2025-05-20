'use client';
import React from 'react';
import img1 from '/public/image 12.png';
import img2 from '/public/image 50.png';
import img3 from '/public/image 20.png';
import Image from 'next/image';
import Button from '../shared/Button';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Blogs = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    centerMode: false,
    centerPadding: '20px',
  };

  return (
    <section className="py-[60px] lg:py-[120px] bg-white px-4 lg:px-[40px]">
      <div className="text-center lg:text-left">
        <p className="mb-3 text-primary font-medium">BLOG / LEARNING CENTRE TEASER</p>
        <h2 className="text-[#18181B] capitalize  font-medium text-[30px] lg:text-[46px] leading-[120%] -tracking-[1.6px]">
          Insights, reflections and tools to help you grow leadership and connection across your organisation.
        </h2>
      </div>
      <div className="mt-[56px] hidden md:grid grid-cols-3 gap-4">
        <div className=" rounded-3xl pb-8   overflow-hidden">
          <Image alt="What Are Courageous Conversations in the Workplace?" src={img1} className="h-[300px] rounded-b-3xl w-full" />
          <div className="mt-8 px-6">
            <p className="text-secondary font-normal text-sm">December 4, 2024</p>
            <h3 className="text-[#18181B] font-medium text-2xl mt-3">What Are Courageous Conversations in the Workplace?</h3>
            <button className="px-6 mt-6 py-3 rounded-[40px] text-lg font-medium  hover:bg-primary hover:text-white duration-200 border border-[#D1D1D6] hover:border-primary cursor-pointer">
              Read now
            </button>
          </div>
        </div>

        <div className=" rounded-3xl pb-8   overflow-hidden">
          <Image alt="What Are Courageous Conversations in the Workplace?" src={img2} className="h-[300px] rounded-b-3xl w-full" />
          <div className="mt-8 px-6">
            <p className="text-secondary font-normal text-sm">December 4, 2024</p>
            <h3 className="text-[#18181B] font-medium text-2xl mt-3">What Are Courageous Conversations in the Workplace?</h3>
            <button className="px-6 mt-6 py-3 rounded-[40px] text-lg font-medium  hover:bg-primary hover:text-white duration-200 border border-[#D1D1D6] hover:border-primary cursor-pointer">
              Read now
            </button>
          </div>
        </div>

        <div className=" rounded-3xl pb-8   overflow-hidden">
          <Image alt="What Are Courageous Conversations in the Workplace?" src={img3} className="h-[300px] rounded-b-3xl w-full" />
          <div className="mt-8 px-6">
            <p className="text-secondary font-normal text-sm">December 4, 2024</p>
            <h3 className="text-[#18181B] font-medium text-2xl mt-3">What Are Courageous Conversations in the Workplace?</h3>
            <button className="px-6 mt-6 py-3 rounded-[40px] text-lg font-medium  hover:bg-primary hover:text-white duration-200 border border-[#D1D1D6] hover:border-primary cursor-pointer">
              Read now
            </button>
          </div>
        </div>
      </div>

      <div className="slider-container block md:hidden mt-[56px]">
        <Slider {...settings}>
          <div className=" rounded-3xl px-3 pb-8   overflow-hidden">
            <Image alt="What Are Courageous Conversations in the Workplace?" src={img1} className="h-[300px]  rounded-3xl w-full" />
            <div className="mt-8 px-0">
              <p className="text-secondary font-normal text-sm">December 4, 2024</p>
              <h3 className="text-[#18181B] font-medium text-2xl mt-3">What Are Courageous Conversations in the Workplace?</h3>
              <button className="px-6 mt-6 py-3 rounded-[40px] text-lg font-medium  hover:bg-primary hover:text-white duration-200 border border-[#D1D1D6] hover:border-primary cursor-pointer">
                Read now
              </button>
            </div>
          </div>

          <div className=" rounded-3xl px-3 pb-8   overflow-hidden">
            <Image alt="What Are Courageous Conversations in the Workplace?" src={img2} className="h-[300px]  rounded-3xl w-full" />
            <div className="mt-8 px-0">
              <p className="text-secondary font-normal text-sm">December 4, 2024</p>
              <h3 className="text-[#18181B] font-medium text-2xl mt-3">What Are Courageous Conversations in the Workplace?</h3>
              <button className="px-6 mt-6 py-3 rounded-[40px] text-lg font-medium  hover:bg-primary hover:text-white duration-200 border border-[#D1D1D6] hover:border-primary cursor-pointer">
                Read now
              </button>
            </div>
          </div>

          <div className=" rounded-3xl px-3 pb-8   overflow-hidden">
            <Image alt="What Are Courageous Conversations in the Workplace?" src={img3} className="h-[300px]  rounded-3xl w-full" />
            <div className="mt-8 px-0">
              <p className="text-secondary font-normal text-sm">December 4, 2024</p>
              <h3 className="text-[#18181B] font-medium text-2xl mt-3">What Are Courageous Conversations in the Workplace?</h3>
              <button className="px-6 mt-6 py-3 rounded-[40px] text-lg font-medium  hover:bg-primary hover:text-white duration-200 border border-[#D1D1D6] hover:border-primary cursor-pointer">
                Read now
              </button>
            </div>
          </div>
        </Slider>
      </div>

      <div className="pb-14 md:pb-0 mt-8 md:mt-[56px] flex items-center justify-center">
        <Button href="/blogs" title={'Explore Learning Resources'} />
      </div>
    </section>
  );
};

export default Blogs;

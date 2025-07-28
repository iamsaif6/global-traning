'use client';
import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Link from 'next/link';
import zsl from '/public/Logo.svg.png';
import scas from '/public/case-study/unnamed-4.png';
import nhs from '/public/nhs-1 2.png';

const Blog = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    centerMode: false,
    centerPadding: '20px',
    responsive: [
      {
        breakpoint: 1024, // for tablets and small desktops
        settings: {
          slidesToShow: 2,
          centerPadding: '15px',
        },
      },
      {
        breakpoint: 768, // for landscape phones and small tablets
        settings: {
          slidesToShow: 1,
          centerPadding: '10px',
        },
      },
      {
        breakpoint: 480,
        centerMode: true, // for phones
        settings: {
          slidesToShow: 1,
          centerPadding: '0px',
        },
      },
    ],
  };

  return (
    <div className="pb-[100px] px-5 lg:px-10 border-t border-[#D1D1D6] pt-[50px] lg:pt-[100px]">
      <h2 className="text-[40px] lg:text-[56px] font-medium">Related Case Studies</h2>
      <div className="slider-container mt-[56px]">
        <Slider {...settings}>
          <div className=" rounded-3xl px-3 pb-8   overflow-hidden">
            <div className="h-[300px]">
              <Image
                alt="What Are Courageous Conversations in the Workplace?"
                src={zsl}
                className="h-full max-w-[200px] mx-auto object-contain rounded-3xl w-full"
              />
            </div>
            <div className="mt-8 px-6">
              <p className="text-secondary font-normal text-sm">December 4, 2024</p>
              <h3 className="text-[#18181B] font-medium text-2xl mt-3">ZSL: Courageous Conversations</h3>
              <Link href={'/case-studies-zsl'}>
                <button className="px-6 mt-6 py-3 rounded-[40px] text-lg font-medium  hover:bg-primary hover:text-white duration-200 border border-[#D1D1D6] hover:border-primary cursor-pointer">
                  Read now
                </button>
              </Link>
            </div>
          </div>

          <div className=" rounded-3xl px-3 pb-8   overflow-hidden">
            <div className="h-[300px]">
              <Image
                alt="What Are Courageous Conversations in the Workplace?"
                src={scas}
                className="h-full max-w-[200px] mx-auto object-contain rounded-3xl w-full"
              />
            </div>
            <div className="mt-8 px-6">
              <p className="text-secondary font-normal text-sm">December 4, 2024</p>
              <h3 className="text-[#18181B] font-medium text-2xl mt-3">SCAS: Story-Driven Training for Culture Change</h3>
              <Link href={'/scas'}>
                <button className="px-6 mt-6 py-3 rounded-[40px] text-lg font-medium  hover:bg-primary hover:text-white duration-200 border border-[#D1D1D6] hover:border-primary cursor-pointer">
                  Read now
                </button>
              </Link>
            </div>
          </div>

          <div className=" rounded-3xl px-3 pb-8   overflow-hidden">
            <div className="h-[300px]">
              <Image
                alt="What Are Courageous Conversations in the Workplace?"
                src={nhs}
                className="h-full max-w-[200px] mx-auto object-contain rounded-3xl w-full"
              />
            </div>
            <div className="mt-8 px-6">
              <p className="text-secondary font-normal text-sm">December 4, 2024</p>
              <h3 className="text-[#18181B] font-medium text-2xl mt-3">NHS: Leading with Courage and Compassion</h3>
              <Link href={'/nhs'}>
                <button className="px-6 mt-6 py-3 rounded-[40px] text-lg font-medium  hover:bg-primary hover:text-white duration-200 border border-[#D1D1D6] hover:border-primary cursor-pointer">
                  Read now
                </button>
              </Link>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Blog;

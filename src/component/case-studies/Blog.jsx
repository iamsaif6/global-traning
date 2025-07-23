'use client';
import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Link from 'next/link';
import trip from '/public/Trip.png';
import uniliver from '/public/unilever_logo.png';
import global from '/public/GM logo 1.png';

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
                src={trip}
                className="h-full max-w-[200px] mx-auto object-contain rounded-3xl w-full"
              />
            </div>
            <div className="mt-8 px-6">
              <p className="text-secondary font-normal text-sm">December 4, 2024</p>
              <h3 className="text-[#18181B] font-medium text-2xl mt-3">Communication Training For TripAdvisor</h3>
              <Link href={'/case-studies-1'}>
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
                src={uniliver}
                className="h-full max-w-[200px] mx-auto object-contain rounded-3xl w-full"
              />
            </div>
            <div className="mt-8 px-6">
              <p className="text-secondary font-normal text-sm">December 4, 2024</p>
              <h3 className="text-[#18181B] font-medium text-2xl mt-3">Well-Being Workshop For Unilever</h3>
              <Link href={'/case-studies-1'}>
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
                src={global}
                className="h-full max-w-[200px] mx-auto object-contain rounded-3xl w-full"
              />
            </div>
            <div className="mt-8 px-6">
              <p className="text-secondary font-normal text-sm">December 4, 2024</p>
              <h3 className="text-[#18181B] font-medium text-2xl mt-3">Mediation Training For Global Mediation</h3>
              <Link href={'/case-studies-1'}>
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

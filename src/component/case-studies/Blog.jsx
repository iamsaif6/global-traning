'use client';
import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img1 from '/public/image 12.png';
import img2 from '/public/image 50.png';
import img3 from '/public/image 20.png';

const Blog = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    centerMode: true,
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
    <div className="pb-[100px] px-5 lg:px-10 border-t border-[#D1D1D6] pt-[100px]">
      <h3 className="text-[56px] font-medium">Related Case Studies</h3>
      <div className="slider-container mt-[56px]">
        <Slider {...settings}>
          <div className=" rounded-3xl px-3 pb-8   overflow-hidden">
            <Image alt="What Are Courageous Conversations in the Workplace?" src={img1} className="h-[300px]  rounded-3xl w-full" />
            <div className="mt-8 px-6">
              <p className="text-secondary font-normal text-sm">December 4, 2024</p>
              <h3 className="text-[#18181B] font-medium text-2xl mt-3">Transforming Leadership at NHS</h3>
              <button className="px-6 mt-6 py-3 rounded-[40px] text-lg font-medium  hover:bg-primary hover:text-white duration-200 border border-[#D1D1D6] hover:border-primary cursor-pointer">
                Read now
              </button>
            </div>
          </div>

          <div className=" rounded-3xl px-3 pb-8   overflow-hidden">
            <Image alt="What Are Courageous Conversations in the Workplace?" src={img2} className="h-[300px]  rounded-3xl w-full" />
            <div className="mt-8 px-6">
              <p className="text-secondary font-normal text-sm">December 4, 2024</p>
              <h3 className="text-[#18181B] font-medium text-2xl mt-3">Transforming Leadership at NHS</h3>
              <button className="px-6 mt-6 py-3 rounded-[40px] text-lg font-medium  hover:bg-primary hover:text-white duration-200 border border-[#D1D1D6] hover:border-primary cursor-pointer">
                Read now
              </button>
            </div>
          </div>

          <div className=" rounded-3xl px-3 pb-8   overflow-hidden">
            <Image alt="What Are Courageous Conversations in the Workplace?" src={img3} className="h-[300px]  rounded-3xl w-full" />
            <div className="mt-8 px-6">
              <p className="text-secondary font-normal text-sm">December 4, 2024</p>
              <h3 className="text-[#18181B] font-medium text-2xl mt-3">Transforming Leadership at NHS</h3>
              <button className="px-6 mt-6 py-3 rounded-[40px] text-lg font-medium  hover:bg-primary hover:text-white duration-200 border border-[#D1D1D6] hover:border-primary cursor-pointer">
                Read now
              </button>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Blog;

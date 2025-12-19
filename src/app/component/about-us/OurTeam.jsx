'use client';
import React from 'react';
import SectionTitle from '../shared/SectionTitle';
import Image from 'next/image';
import img1 from '/public/Image-1.png';
import img2 from '/public/team2.png';
import img3 from '/public/team3.png';
import img4 from '/public/team4.png';
import img5 from '/public/team5.png';
import img6 from '/public/team6.png';
import img7 from '/public/team7.png';
import img8 from '/public/team8.png';
import Button from '../shared/Button';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const TeamData = [
  {
    name: 'Emma Gersch',
    title: 'Global Training Founder and Director ',
    img: img1,
  },
  {
    name: 'Georgina Farwell',
    title: 'Training Coordinator ',
    img: img2,
  },
  {
    name: 'Suneta Bagri',
    title: 'Mediation Courses Leader',
    img: null,
  },
  {
    name: 'Lizzie Lister',
    title: 'Social Media Manager ',
    img: img5,
  },
  {
    name: 'Anni Williams',
    title: 'Business Services Manager',
    img: null,
  },

  {
    name: 'Alison Bennett',
    title: 'Associate Trainer',
    img: null,
  },

  {
    name: 'Polly Walker',
    title: 'Associate Trainer',
    img: img6,
  },
  {
    name: 'Richard Beecham',
    title: 'Associate Trainer',
    img: img3,
  },

  // {
  //   name: 'Anup Ravi',
  //   title: 'Associate Trainer',
  //   img: null,
  // },
  // {
  //   name: 'Faye Austin Billing',
  //   title: 'Associate Trainer',
  //   img: img4,
  // },
];

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  centerMode: true,
  centerPadding: '20px',
};

const OurTeam = ({ button = false, badge, title, subtitle, limit }) => {
  const trimmedData = limit ? TeamData.slice(0, limit) : TeamData;
  return (
    <section className="py-[120px] px-5 lg:px-[80px]">
      <SectionTitle badge={badge} title={title} subtitle={subtitle} center large />
      <div className="mt-[60px] hidden  md:grid md:grid-cols-3 lg:grid-cols-4 gap-6">
        {trimmedData.map(item => {
          return (
            <div>
              <div className="h-[420px] mb-4 rounded-3xl overflow-hidden">
                {item.img ? (
                  <Image alt={item.title} className="w-full h-full object-cover" src={item.img} />
                ) : (
                  <div className="h-full w-full bg-gray-400"></div>
                )}
              </div>
              <div>
                <h3 className="font-medium text-2xl">{item.name}</h3>
                <p className="text-[#6E7381] text-base">{item.title}</p>
              </div>
            </div>
          );
        })}

        {/* <div>
          <div className="h-[420px] mb-4 rounded-3xl overflow-hidden">
            <Image alt="Zonelle" className="w-full h-full object-cover" src={img7} />
          </div>
          <div>
            <h3 className="font-medium text-2xl">Zonelle</h3>
            <p className="text-[#6E7381] text-base">Instructor</p>
          </div>
        </div> */}
        {/* 
        <div>
          <div className="h-[420px] mb-4 rounded-3xl overflow-hidden">
            <Image alt="Adam" className="w-full h-full object-cover" src={img8} />
          </div>
          <div>
            <h3 className="font-medium text-2xl">Adam</h3>
            <p className="text-[#6E7381] text-base">Instructor</p>
          </div>
        </div> */}
      </div>

      <div className="slider-container block md:hidden mt-[56px]">
        <Slider {...settings}>
          {trimmedData.map(item => {
            return (
              <div className="px-3 pb-8">
                <div className="h-[420px] mb-4 rounded-3xl overflow-hidden">
                  {item.img ? (
                    <Image alt={item.title} className="w-full h-full object-cover" src={item.img} />
                  ) : (
                    <div className="h-full w-full bg-gray-400"></div>
                  )}
                </div>
                <div>
                  <h3 className="font-medium text-2xl">{item.name}</h3>
                  <p className="text-[#6E7381] text-base">{item.title}</p>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>

      {button && (
        <>
          <div className="hidden md:flex mt-[66px] items-center justify-center">
            <Button href="#" title={'Meet the People Behind Global Training'} />
          </div>
        </>
      )}
    </section>
  );
};

export default OurTeam;

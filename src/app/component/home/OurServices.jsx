'use client';
import React from 'react';
import SectionTitle from '../shared/SectionTitle';
import img1 from '/public/Thumbnail.png';
import img2 from '/public/Thumbnail-1.png';
import img3 from '/public/Thumbnail-2.png';
import img4 from '/public/Thumbnail-3.png';
import img5 from '/public/Thumbnail-4.png';
import img6 from '/public/Thumbnail-5.png';
import Image from 'next/image';
import Button from '../shared/Button';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const services = [
  {
    title: 'Courageous Conversations Training',
    subtitle: 'Equip your team to navigate difficult conversations with confidence and clarity',
    img: img1,
  },
  {
    title: 'Leadership Development',
    subtitle: 'Cultivate impactful leaders through targeted coaching and practical exercises.',
    img: img2,
  },
  {
    title: 'Emotional Intelligence Workshops',
    subtitle: 'Focused sessions to help participants develop self-awareness, empathy, and better communication skills.',
    img: img3,
  },
  {
    title: 'Team Building Programs',
    subtitle: 'Reignite passion and improve collaboration with engaging, interactive activities.',
    img: img4,
  },
  {
    title: 'Conflict Resolution Training',
    subtitle: 'Training tailored to resolving workplace disputes constructively and professionally.',
    img: img5,
  },
  {
    title: 'Bespoke Workshops and Custom Training',
    subtitle: 'Fully tailored training programs addressing specific organizational needs.',
    img: img6,
  },
];

const OurServices = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className="py-[60px] px-4 lg:py-[120px] lg:px-[40px]">
      <SectionTitle
        badge={'OUR SERVICES'}
        title={'Experiential Training and Workshops'}
        subtitle={
          'We offer immersive training programmes that strengthen how people relate, communicate and collaborate — especially when it matters most.'
        }
        center
      />
      <div className="hidden md:grid grid-cols-3 gap-6 my-[60px]">
        {services.map(item => {
          return (
            <a
              href="#"
              className="p-5 cursor-pointer pb-[28px] duration-200 hover:bg-[linear-gradient(to_bottom,_rgba(62,0,101,0.90)_15.68%,_rgba(62,0,101,0.01)_69.4%)] rounded-3xl group hover:shadow-[0px_20px_100px_-20px_rgba(0,0,0,0.10)] "
            >
              <div className="h-[300px] mb-6 rounded-2xl overflow-hidden">
                <Image width={200} h={200} className="w-full h-full object-cover" src={item.img} />
              </div>
              <h3 className="text-2xl  text-[#18181B] leading-[120%] mb-3">{item.title}</h3>
              <p className="text-base  text-[#6E7381] leading-[140%]">{item.subtitle}</p>
            </a>
          );
        })}
      </div>

      <div className="slider-container block md:hidden mt-[56px]">
        <Slider {...settings}>
          {services.map(item => {
            return (
              <a
                href="#"
                className="p-5 cursor-pointer pb-[28px] duration-200 hover:bg-[linear-gradient(to_bottom,_rgba(62,0,101,0.90)_15.68%,_rgba(62,0,101,0.01)_69.4%)] rounded-3xl group hover:shadow-[0px_20px_100px_-20px_rgba(0,0,0,0.10)] "
              >
                <div className="h-[300px] mb-6 rounded-2xl overflow-hidden">
                  <Image width={200} h={200} className="w-full h-full object-cover" src={item.img} />
                </div>
                <h3 className="text-2xl  text-[#18181B] leading-[120%] mb-3">{item.title}</h3>
                <p className="text-base  text-[#6E7381] leading-[140%]">{item.subtitle}</p>
              </a>
            );
          })}
        </Slider>
      </div>

      <div className="flex gap-4 flex-col md:flex-row items-center justify-center ">
        <button className="py-[18px] px-6 border bg-primary border-primary rounded-[40px] text-lg font-medium text-white cursor-pointer">
          Explore All Services
        </button>
        <button className="py-[18px] px-6 border border-primary rounded-[40px] text-lg font-medium text-primary cursor-pointer">
          Mediation Training
        </button>
      </div>
    </section>
  );
};

export default OurServices;

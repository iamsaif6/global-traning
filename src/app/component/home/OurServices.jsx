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
  return (
    <section className=" py-[120px] px-[40px]">
      <SectionTitle
        badge={'OUR SERVICES'}
        title={'Experiential Training and Workshops'}
        subtitle={'We offer a range of courses and workshops - tailored to your specific needs.'}
        center
      />
      <div className="grid grid-cols-3 gap-6 my-[60px]">
        {services.map(item => {
          return (
            <a href="#" className="p-5 cursor-pointer pb-[28px] duration-200 hover:bg-secondary rounded-3xl group ">
              <div className="h-[300px] mb-6 rounded-2xl overflow-hidden">
                <Image width={200} h={200} className="w-full h-full object-cover" src={item.img} />
              </div>
              <h3 className="text-2xl group-hover:text-white text-[#18181B] leading-[120%] mb-3">{item.title}</h3>
              <p className="text-base group-hover:text-white text-[#6E7381] leading-[140%]">{item.subtitle}</p>
            </a>
          );
        })}
      </div>
      <div className="flex items-center justify-center ">
        <Button title={'Explore All Services'} href="#" />
      </div>
    </section>
  );
};

export default OurServices;

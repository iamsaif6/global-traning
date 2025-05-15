import React from 'react';
import SectionTitle from '../shared/SectionTitle';
import img1 from '/public/Thumbnail.png';
import img2 from '/public/Thumbnail-1.png';
import img3 from '/public/Thumbnail-2.png';
import Image from 'next/image';
import Link from 'next/link';

const services = [
  {
    title: 'Workplace and Employment Mediation',
    subtitle: 'Equip your team to navigate difficult conversations with confidence and clarity',
    img: img1,
  },
  {
    title: 'Business and Commercial Mediation',
    subtitle: 'Cultivate impactful leaders through targeted coaching and practical exercises.',
    img: img2,
  },
  {
    title: 'SEND (Special Educational Needs and Disability) Mediation',
    subtitle: 'Focused sessions to help participants develop self-awareness, empathy, and better communication skills.',
    img: img3,
  },
];

const Service = () => {
  return (
    <section className="py-[80px] lg:py-[120px] px-5 lg:px-[40px]">
      <SectionTitle
        title={'Mediation Training Services'}
        subtitle={'Professional mediation services to resolve disputes with empathy, expertise, and efficiency.'}
        full
        center
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-[60px]">
        {services.map(item => {
          return (
            <div
              key={item.title}
              className="p-5 flex flex-col cursor-pointer pb-[28px] duration-200 hover:shadow-lg hover:bg-[linear-gradient(to_bottom,_#3E0065_40%,_white_90%)]   rounded-3xl group "
            >
              <div className="h-[300px] mb-6 rounded-2xl overflow-hidden">
                <Image alt={item.title} width={200} h={200} className="w-full h-full object-cover" src={item.img} />
              </div>
              <div className="h-full flex-1 flex justify-between flex-col">
                <h3 className="text-2xl  text-[#18181B] leading-[120%] mb-3">{item.title}</h3>
                <button className="bg-primary w-max px-5 py-2.5 rounded-[40px] text-white">Book Now</button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Service;

// hover:bg-[linear-gradient(to_bottom,_#3E0065_40%,_white_90%)]
// hover:shadow-[0px_20px_100px_-20px_rgba(0,0,0,0.1)]

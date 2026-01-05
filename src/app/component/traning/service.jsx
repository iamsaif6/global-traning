import React from 'react';
import SectionTitle from '../shared/SectionTitle';
import img1 from '/public/training/global_2025-38.jpg';
import img2 from '/public/training/global_2025-122 Large.jpeg';
import img3 from '/public/training/global_2025-159 Large.jpeg';
import img4 from '/public/training/Foundation.jpg';
import img5 from '/public/training/Sendmediation.jpg';
import img6 from '/public/training/global_2025-108 Large.jpeg';
import img7 from '/public/training/global_2025-140 Large.jpeg';
import Image from 'next/image';
import Link from 'next/link';

const services = [
  {
    title: 'Courageous Conversations',
    subtitle: 'Equip your team to navigate difficult conversations with confidence and clarity',
    img: img1,
    link: '/training/courageous-conversations',
  },
  {
    title: 'Compassionate Leadership Development Programme',
    subtitle: 'Cultivate impactful leaders through targeted coaching and practical exercises.',
    img: img2,
    link: '/training/compassionate-leadership-development-programme',
  },
  {
    title: 'Team Away Days',
    subtitle: 'Focused sessions to help participants develop self-awareness, empathy, and better communication skills.',
    img: img7,
    link: '/training/team-away-days',
  },

  {
    title: 'Foundation Mediation Course',
    subtitle: 'Focused sessions to help participants develop self-awareness, empathy, and better communication skills.',
    img: img4,
    link: '/training/foundation-mediation-course',
  },
  {
    title: 'SEND Mediation Course',
    subtitle: 'Focused sessions to help participants develop self-awareness, empathy, and better communication skills.',
    img: img5,
    link: '/training/send-mediation-course',
  },
  {
    title: 'Professional Practice Day',
    subtitle: 'Focused sessions to help participants develop self-awareness, empathy, and better communication skills.',
    img: img6,
    link: '/training/professional-practice-day',
  },

  {
    title: 'Creative Conflict Resolution',
    subtitle: 'Focused sessions to help participants develop self-awareness, empathy, and better communication skills.',
    img: img3,
    link: '/training/creative-conflict-resolution',
  },
];

const Service = () => {
  return (
    <section className=" pt-10 px-5 pb-10 lg:px-[40px]">
      {/* <SectionTitle
        title={'Global Training services'}
        subtitle={'Professional training services to resolve disputes with empathy, expertise, and efficiency.'}
        full
        center
      /> */}

      <div className="grid max-w-[1300px] mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-2 lg:gap-6 ">
        {services.slice(0, 6).map(item => {
          return (
            <div
              key={item.title}
              className="p-5 col-span-1 md:col-span-1 flex flex-col cursor-pointer pb-[28px] duration-200 hover:shadow-lg hover:bg-[linear-gradient(to_bottom,_#3E0065_40%,_white_90%)]   rounded-3xl group "
            >
              <div className="h-[400px] mb-6 rounded-2xl overflow-hidden">
                <Image alt={item.title} width={800} height={600} className="w-full h-full object-cover" src={item.img} />
              </div>
              <div className="h-full flex-1 flex justify-between flex-col">
                <h3 className="text-2xl  text-[#18181B] leading-[120%] mb-3">{item.title}</h3>
                <Link href={item.link} className="bg-primary cursor-pointer w-max px-5 py-2.5 rounded-[40px] text-white">
                  Learn More
                </Link>
              </div>
            </div>
          );
        })}
        {services.slice(6, 7).map(item => {
          return (
            <div
              key={item.title}
              className="p-5 md:col-span-2 flex flex-col cursor-pointer pb-[28px] duration-200 hover:shadow-lg hover:bg-[linear-gradient(to_bottom,_#3E0065_40%,_white_90%)]   rounded-3xl group "
            >
              <div className="h-[400px] mb-6 rounded-2xl overflow-hidden">
                <Image alt={item.title} width={1200} height={800} className="w-full h-full object-cover object-top" src={item.img} />
              </div>
              <div className="h-full flex-1 items-center flex justify-between flex-col">
                <h3 className="text-2xl  text-[#18181B] leading-[120%] mb-3">{item.title}</h3>
                <Link href={item.link} className="bg-primary cursor-pointer w-max px-5 py-2.5 rounded-[40px] text-white">
                  Learn More
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Service;

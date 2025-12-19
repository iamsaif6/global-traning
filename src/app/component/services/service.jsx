import React from 'react';
import SectionTitle from '../shared/SectionTitle';
import img1 from '/public/Thumbnail.png';
import img2 from '/public/Thumbnail-1.png';
import img3 from '/public/Thumbnail-2.png';
import img4 from '/public/Thumbnail-3.png';
import img5 from '/public/Thumbnail-4.png';
import img6 from '/public/Thumbnail-5.png';
import Image from 'next/image';

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
  {
    title: 'Accredited Mediation Training',
    subtitle: 'Professional mediation training with a focus on Special Educational Needs and Disabilities (SEND) and workplace mediation.',
    img: img1,
  },
  {
    title: 'Active Listening and Communication Skills',
    subtitle: 'Workshops to enhance listening, feedback, and overall communication within teams.',
    img: img3,
  },
  {
    title: 'Creativity and Innovation in the Workplace',
    subtitle: 'Training to encourage out-of-the-box thinking and foster innovation within teams.',
    img: img4,
  },
];

const Service = () => {
  return (
    <section className="pt-[120px] px-[40px]">
      <SectionTitle badge={'OUR SERVICES'} title={'Empowering People and Organisations with Tailored Training Solutions'} full center />

      <div className="grid grid-cols-3 gap-6 my-[60px]">
        {services.map(item => {
          return (
            <a
              key={item.title}
              href="/services/1"
              className="p-5 cursor-pointer pb-[28px] duration-200 hover:bg-secondary rounded-3xl group "
            >
              <div className="h-[300px] mb-6 rounded-2xl overflow-hidden">
                <Image alt={item.title} width={200} h={200} className="w-full h-full object-cover" src={item.img} />
              </div>
              <h3 className="text-2xl group-hover:text-white text-[#18181B] leading-[120%] mb-3">{item.title}</h3>
              <p className="text-base group-hover:text-white text-[#6E7381] leading-[140%]">{item.subtitle}</p>
            </a>
          );
        })}
      </div>
    </section>
  );
};

export default Service;

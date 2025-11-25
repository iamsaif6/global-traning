import Image from 'next/image';
import React from 'react';
import team1 from '/public/Team1.jpg';
import team2 from '/public/Team2.jpg';
import team3 from '/public/Team3.jpg';
import team4 from '/public/Team4.jpg';
import Courageous1 from '/public/Courageous1.png';
import Courageous2 from '/public/Courageous2.jpg';
import Courageous3 from '/public/Courageous3.jpg';
import Courageous4 from '/public/Courageous4.jpg';
import Button from '../component/shared/Button';

const page = () => {
  return (
    <div>
      <header
        style={{
          backgroundImage: `url('/aboutBg.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'top center',
        }}
        className="pt-[187px] h-screen relative md:pt-[268px] pb-[0px] lg:pb-[203px] px-5 md:px-[60px]"
      >
        <div className="w-full relative z-10  mx-auto text-center">
          <h1 className="font-medium  tracking-[-4%] leading-[120%] text-5xl  lg:text-[68px] text-[#FCFCFD]">
            Learning, laughing, living — in the here and now
          </h1>
        </div>
      </header>

      <section className="py-[60px] lg:py-[120px]  items-center px-4 lg:px-[40px]   grid grid-cols-2 gap-10">
        <div className="col-span-2 lg:col-span-1">
          <div className={`w-full mx-auto text-center lg:text-left  max-w-[660px]`}>
            <p className="mb-3 text-sm text-primary font-medium">Team Away Day</p>
            <h2 className="  font-medium text-[40px] lg:text-[56px] leading-[120%] -tracking-[1.6px]">Tapestry Research</h2>

            <p className=" mt-10 mb-[56px] text-left  text-base lg:text-lg font-normal leading-[140%]">
              Our most recent away day was co-led by our founder Emma Gersch and Jemma Barton. We didn’t stray too far from the office, as
              Tapestry Research had requested a more local away day in Marylebone, London - but it was still certainly an adventure! <br />{' '}
              <br />
              For the team at Tapestry Research, their annual away day is a calendar highlight. Our dynamic duo guided them through a
              much-needed day of exploring in the city, prioritising mindfulness, connection and memory-making. The perfect tonic to a
              classic 9-5 in the office! <br /> <br />
              The day also sparked conversations about the current research landscape, new ideas and opportunities, and key areas of focus
              for the year ahead. The Tapestry team left the day “feeling energised and ready to put their ideas into action”, which is
              precisely what we like to hear. <br /> <br />
              Are you looking for an away day to rejuvenate your team? Whether you’d prefer to be city-bound or venture out to the
              countryside, we will tailor the day to you and your company.
            </p>
            <Button href="/contact-us" title={'We’d love to hear from you'} />
          </div>
        </div>
        {/* 2x2 image grid */}
        <div className="col-span-2  lg:col-span-1 grid grid-cols-2 gap-4 my-8">
          {[team1, team2, team3, team4].map((img, idx) => (
            <div key={idx} className="rounded-3xl overflow-hidden h-[180px] lg:h-[320px]">
              <Image alt={`Team ${idx + 1}`} className="w-full h-full object-cover" src={img} width={6000} height={4000} />
            </div>
          ))}
        </div>
      </section>

      <section className="pb-[60px] lg:pb-[120px]  items-center px-4 lg:px-[40px]   grid grid-cols-2 gap-10">
        {/* 2x2 image grid */}
        <div className="order-2 lg:order-1 col-span-2  lg:col-span-1 grid grid-cols-2 gap-4 my-8">
          {[Courageous1, Courageous2, Courageous3, Courageous4].map((img, idx) => (
            <div key={idx} className="rounded-3xl overflow-hidden h-[180px] lg:h-[320px]">
              <Image alt={`Team ${idx + 1}`} className="w-full h-full object-cover" src={img} width={6000} height={4000} />
            </div>
          ))}
        </div>
        <div className="col-span-2 order-1 lg:order-2 lg:col-span-1">
          <div className={`w-full mx-auto text-center lg:text-left  max-w-[660px]`}>
            <p className="mb-3 text-sm text-primary font-medium">Courageous Conversations</p>
            <h2 className="  font-medium text-[40px] lg:text-[56px] leading-[120%] -tracking-[1.6px]">ZSL</h2>

            <p className=" mt-10 mb-[56px] text-left  text-base lg:text-lg font-normal leading-[140%]">
              We regularly collaborate with ZSL: the Zoological Society of London, inspiring Courageous Conversations in the workplace.
              Initially, we worked with the managers, focusing on how to navigate challenging conversations when leading a team, yet this
              training is now being extended across the wider organisation.
              <br /> <br />
              Led by our founder and lead facilitator Emma Gersch, we design and deliver bespoke training that aligns with the ethos and
              values of ZSL. With our role-play actors portraying authentic scenarios, we give delegates the opportunity to observe,
              practise and deliver their feedback skills in a safe and constructive environment.
              <br /> <br />
              In the ZSL staff’s ‘natural habitat’ (ZSL London Zoo, Regent’s Park), we ensure that every participant leaves the training
              with a renewed and tangible set of skills in effective leadership and people management. We look forward to continuing our
              journey with the ZSL team - into the wild, and beyond! <br /> <br />
              If your team could benefit from courageous conversations, get in touch!
            </p>
            <Button href="/contact-us" title={'Let’s start the conversation'} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;

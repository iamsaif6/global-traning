import Blog from '@/component/case-studies/Blog';
import Header from '@/component/case-studies/Header';
import Post from '@/component/case-studies/Post';
import React from 'react';
import Image from 'next/image';
import zsl from '/public/Logo.svg.png';

const page = () => {
  return (
    <div>
      <header>
        <header
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(62, 0, 101, 0.90) 5.68%, rgba(62, 0, 101, 0.31) 79.4%, rgba(255, 255, 255, 1) 100%)`,
            backgroundBlendMode: 'overlay',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          className="pt-[137px] borer grid gap-[50px] grid-cols-1 lg:grid-cols-2 relative md:pt-[180px] gap-y-12 lg:gap-y-0  md:pb-[0px] px-5 md:px-[60px] items-center"
        >
          <div className="order-2 lg:order-1  ">
            <div className="min-h-[200px] lg:min-h-[400px] flex items-center justify-center lg:max-w-[1130px] bg-white mx-auto border border-[#D1D1D6] rounded-3xl p-6 w-full ">
              <Image alt="ZSL" className="max-w-[150px]" src={zsl} />
            </div>
          </div>
          <div className="text-center order-1 lg:order-2 lg:text-left   relative z-10 ">
            <h1 className="font-medium mb-4 tracking-[-4%] leading-[120%] text-[40px] md:[65px] lg:text-[60px] text-white">
              Embedding Courageous Conversations Across Teams at ZSL
            </h1>
            <p className="flex  justify-center lg:justify-start  items-center text-xs lg:text-sm text-white">
              Zoological Society of London (ZSL)
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF634A] block mx-[7px]"></span>
              December 24, 2024
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF634A] block mx-[7px]"></span>3 min reading time
            </p>
          </div>
        </header>
      </header>
      <section className="max-w-[900px]  px-4 mx-auto py-[80px]">
        <p className="text-base lg:text-lg mb-[60px]">
          ZSL came to Global Training with a clear ambition: to build confidence across their People & Culture teams in navigating difficult
          conversations. They recognised that for communication to be effective — especially in a fast-paced, purpose-driven environment —
          it needed to be clear, kind and honest.
          <br /> <br />
          We delivered a bespoke Courageous Conversations workshop for a mixed cohort of leaders and managers across the organisation. Our
          goal was to create space for reflection, shared understanding and practical tools that would strengthen the way people
          communicate, give feedback and lead.
        </p>
        <div>
          <h3 className="text-[32px] mb-6"></h3>
          <p className="text-base lg:text-lg">
            The session brought together managers with varied levels of experience. For newer managers, it created an entry point to
            difficult conversations in a supportive space. For others, it offered space to reflect and sharpen skills.
          </p>
          <div className="bg-primary text-center my-[60px] text-white rounded-3xl py-10 px-6">
            <p className="text-base lg:text-lg">
              “I’m new to a management role and found it very useful to hear about the challenges people face and how to deal with certain
              scenarios.”
            </p>
            {/* <p className="text-sm">Thomas Weber</p> */}
          </div>
          <p className="text-base lg:text-lg">
            Participants worked through real-life scenarios using roleplay, reflection and peer discussion — all grounded in a structured,
            emotionally intelligent communication model.
          </p>
          <div className="bg-primary text-center my-[60px] text-white rounded-3xl py-6 px-6">
            <p className="text-base lg:text-lg">“It was a good mix of theory, discussion and applying it to our own situations.”</p>
            {/* <p className="text-sm">Thomas Weber</p> */}
          </div>
          <div className=" rounded-3xl my-[60px] overflow-hidden">
            <Image alt="Blog Cover" width={200} height={200} className="object-cover h-full w-full" src={'/image 49.png'} />
          </div>

          <p className="text-base lg:text-lg">
            The framework helped participants understand what courageous conversations look like in action:
          </p>
          <ul className=" list-disc space-y-2.5 mt-5 pl-10">
            <li>How to lead feedback without blame</li>
            <li>How to remain calm when conversations feel emotionally charged</li>
            <li>How to listen with empathy and speak with clarity</li>
          </ul>
          <p className="text-base lg:text-lg mt-10">
            Trainers modelled the approach throughout, balancing expertise with facilitation that was warm and responsive.
          </p>
          <div className="bg-primary text-center my-[30px] text-white rounded-3xl py-6 px-6">
            <p className="text-base lg:text-lg ">
              “Very knowledgeable trainers. Noticeably experienced in their field… gave confidence to learners.”
            </p>
          </div>
          <p className="text-base lg:text-lg">
            There was also space to normalise challenge. One of the strongest outcomes of the session was the shared realisation that many
            of the same difficulties — from avoidance to miscommunication — are experienced across departments.
          </p>

          <div className="bg-primary text-center my-[30px] text-white rounded-3xl py-6 px-6">
            <p className="text-base lg:text-lg mb-6 ">
              “This workshop is useful for all levels of experience and management. I’m new to a management role and found it very useful to
              hear about the challenges that people face and how to deal with certain scenarios.”
            </p>
            <p>— Department Manager, ZSL</p>
          </div>
        </div>
      </section>
      <Blog />
    </div>
  );
};

export default page;

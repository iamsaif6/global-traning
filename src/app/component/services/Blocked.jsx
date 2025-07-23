import React from 'react';
import Button from '../shared/Button';
import unblock from '/public/Unblock.jpg';
import Image from 'next/image';
import william from '/public/William.png';
import clark from '/public/Clark.png';
import kim from '/public/kim.png';
import cooper from '/public/cooper.png';
import baker from '/public/baker.png';

const Blocked = () => {
  return (
    <section className="pb-[60px] lg:pb-[120px] bg-transparent overflow-hidden px-5 lg:px-[80px]">
      <div className={`w-full  max-w-[1000px] text-center mx-auto`}>
        <h2 className={`w-full lg:w-[90%] mx-auto  font-medium text-[40px] lg:text-[56px] leading-[120%] -tracking-[1.6px] text-[#18181B]`}>
          Challenges we address
        </h2>

        <p className={` mt-6 text-base lg:text-lg font-normal leading-[140%] `}>
          If something’s tricky, tense or not quite working, that’s where we come in. We help people untangle challenges, reconnect teams
          and develop the confidence to move forward. Here are just some of the situations we’ve helped shift and the change we’ve supported
          in people and teams.
        </p>
      </div>

      {/* Content */}
      <div className="h-[350px]  lg:h-[576px] mt-[60px] relative w-full max-w-[300px]  lg:max-w-[586px] mx-auto bg-gray-300 rounded-2xl">
        <Image src={unblock} alt="Unblock Cover" className="rounded-2xl absolute top-0 left-0 w-full h-full object-cover object-top" />

        {/* Left top */}
        <div
          style={{ boxShadow: '0px 17.34px 86.71px -17.34px rgba(0, 0, 0, 0.09)' }}
          className="group absolute -translate-x-1/2 lg:-translate-x-full top-[10%] left-10 lg:left-6 border w-full max-w-[137px] lg:max-w-[360px] text-[10px] lg:text-base border-[#E9E9EC] text-[#18181B] rounded-[9px] lg:rounded-3xl p-[9px] lg:p-6 bg-white/80 backdrop-blur-none hover:backdrop-blur-md transition-all duration-500 ease-in-out transform hover:scale-105"
        >
          <div className="flex items-center gap-4">
            <p title="Name" className="font-medium">
              NHS
            </p>
          </div>

          <p
            title="Description"
            className="mt-[6px] lg:mt-4 overflow-hidden transition-all duration-500 ease-in-out max-h-[48px] group-hover:max-h-[500px]"
          >
            “(It was) fantastic to have a communication model to manage challenging conversations, learning how to listen compassionately
            and be clear, kind and brave.” — Senior Leader, NHS
          </p>
        </div>

        {/* Left bottom */}
        <div
          style={{ boxShadow: '0px 17.34px 86.71px -17.34px rgba(0, 0, 0, 0.09)' }}
          className="group absolute -translate-x-1/2 lg:-translate-x-full -bottom-[5%] left-8 border w-full max-w-[140px] lg:max-w-[270px] text-[10px] lg:text-sm border-[#E9E9EC] text-[#18181B] rounded-[11px] lg:rounded-[20px] p-[11px] lg:p-5 bg-white/80 backdrop-blur-none hover:backdrop-blur-md transition-all duration-500 ease-in-out transform hover:scale-105"
        >
          <div className="flex items-center gap-4">
            {/* <div className="w-[22px] lg:w-[42px] h-[22px] lg:h-[42px] rounded-full overflow-hidden bg-gray-200">
              <Image alt="Audrey Clark" src={clark} className="h-full w-full object-cover" />
            </div> */}
            <p title="Name" className="font-medium">
              British Red Cross
            </p>
          </div>

          <p
            title="Description"
            className="leading-[140%] mt-[7px] lg:mt-3 overflow-hidden transition-all duration-500 ease-in-out max-h-[36px] group-hover:max-h-[500px]"
          >
            “As always, it was fantastic working with you and your team. They brought realism, drama, opportunities for learning aplenty and
            a real sense of what deploying internationally can bring. THANK YOU!”
          </p>
        </div>

        {/* Right top */}
        <div
          style={{ boxShadow: '0px 17.34px 86.71px -17.34px rgba(0, 0, 0, 0.09)' }}
          className="group absolute -translate-y-1/2 lg:-translate-y-0 translate-x-full top-2 lg:top-7 right-14 border w-full max-w-[130px] lg:max-w-[350px] z-10 text-[10px] lg:text-sm border-[#E9E9EC] text-[#18181B] rounded-[7px] lg:rounded-[20px] p-[6px] lg:p-5 bg-white/80 backdrop-blur-none hover:backdrop-blur-md transform transition-all duration-500 ease-in-out hover:scale-105"
        >
          <div className="flex items-center gap-4">
            {/* <div className="w-3 lg:w-[42px] h-3 lg:h-[42px] overflow-hidden rounded-full bg-gray-200">
      <Image alt="Kimberly Kim" src={kim} className="h-full w-full object-cover" />
    </div> */}
            <p title="Name" className="font-medium">
              Alperton School, Wembley
            </p>
          </div>

          <p
            title="Description"
            className="leading-[140%] mt-[5px] lg:mt-3 overflow-hidden transition-all duration-500 ease-in-out max-h-[40px] group-hover:max-h-[500px]"
          >
            “Emma and Anup were not only charismatic and had a great dynamic, but they also created a space that felt safe and secure. A big
            takeaway was their response to what some members of staff described as ‘cynical’ with such ease — (they provided) insightful
            answers without getting defensive.”
          </p>
        </div>

        {/* Right Bottom */}
        <div
          style={{ boxShadow: '0px 17.34px 86.71px -17.34px rgba(0, 0, 0, 0.09)' }}
          className="group absolute translate-x-1/3 lg:translate-x-2/3 bottom-7 right-5 border w-full max-w-[150px] lg:max-w-[390px] text-[10px] lg:text-[17px] z-2 border-[#E9E9EC] text-[#18181B] rounded-[10px] lg:rounded-3xl p-2.5 lg:p-[26px] bg-white/80 backdrop-blur-none hover:backdrop-blur-md transform transition-all duration-500 ease-in-out hover:scale-105"
        >
          <div className="flex items-center gap-4">
            {/* <div className="w-[20px] lg:w-[53px] h-[20px] lg:h-[53px] rounded-full overflow-hidden bg-gray-200">
      <Image alt=" Edward Cooper" src={cooper} className="h-full w-full object-cover" />
    </div> */}
            <p title="Name" className="font-medium">
              Unilever
            </p>
          </div>

          <p
            title="Description"
            className="leading-[140%] mt-[7px] lg:mt-3 overflow-hidden transition-all duration-500 ease-in-out max-h-[50px] group-hover:max-h-[500px]"
          >
            “We had so much good feedback from the event. People had got to know team members they had worked with for years, but never
            spoken to on a personal level, others met people across the world for the first time ever and realised they had so much in
            common. At a time when the world has undergone so much stress and challenge, it was lovely to see so many smiles, and for
            colleagues to realise that no matter where they were they all shared similar values and dreams.” - Laura Pushkin, Unilever UK
          </p>
        </div>

        {/* Right Center */}
        <div
          style={{ boxShadow: '0px 17.34px 86.71px -17.34px rgba(0, 0, 0, 0.09)' }}
          className="group absolute top-1/2 -translate-y-1/2 translate-x-1/2 lg:translate-x-[100%] right-5 border w-full max-w-[145px] lg:max-w-[256px] text-[9px] lg:text-[12px] border-[#E9E9EC] text-[#18181B] rounded-[7px] lg:rounded-[13px] p-[7px] lg:p-3 bg-white/80 backdrop-blur-none hover:z-[12] z-[1] hover:backdrop-blur-md transition-all duration-500 ease-in-out transform hover:scale-105"
        >
          <div className="flex items-center gap-4">
            {/* <div className="w-[13px] lg:w-[26px] h-[13px] lg:h-[26px] overflow-hidden rounded-full bg-gray-200">
      <Image alt="Jonathan Baker" src={baker} className="h-full w-full object-cover" />
    </div> */}
            <p title="Jonathan Baker" className="font-medium">
              SEND Mediation Course
            </p>
          </div>

          <p
            title="Description"
            className="leading-[140%] mt-[5px] lg:mt-2 overflow-hidden transition-all duration-500 ease-in-out max-h-[48px] group-hover:max-h-[600px]"
          >
            “I thoroughly enjoyed it. I don’t know if I’ve ever done training where I’ve been so absorbed for 2 full days. There was such a
            nice blend of learning and doing activities and hearing stories. There’s clearly so much experience that has been built up over
            time by this organisation - they are able to answer any question that was put towards them! I feel so much more confident than I
            anticipated I would do - after just 2 days of doing this course - about going out there and actually taking part in SEND
            mediation. It’s really exciting to get to this point, and I don’t feel like I’ve been burnt out by all the knowledge, I just
            feel really invigorated about getting started.”
          </p>
        </div>
      </div>

      <div className="max-w-[1130px] mt-[80px] mb-[60px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {['Communication and confidence', 'Team dynamics and culture', 'Leadership and change', 'Workplace wellbeing'].map(item => {
          return (
            <div key={item} className="font-semibold h-[120px] flex items-center justify-center rounded-3xl bg-[#511A7514] text-center p-6">
              <p className="text-[#18181B] text-lg">{item}</p>
            </div>
          );
        })}
      </div>

      <div className="text-center max-w-[720px] mx-auto mt-[70px]">
        <div className="mt-[56px] flex items-center justify-center">
          <Button Customclass={'py-3 px-5 md:py-[15px] md:px-6'} title={'Talk to us'} href="/contact-us" />
        </div>
      </div>
    </section>
  );
};

export default Blocked;

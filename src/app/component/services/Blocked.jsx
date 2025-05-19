import React from 'react';
import Button from '../shared/Button';
import unblock from '/public/Unblock.png';
import Image from 'next/image';
import william from '/public/William.png';
import clark from '/public/Clark.png';
import kim from '/public/kim.png';
import cooper from '/public/cooper.png';
import baker from '/public/baker.png';

const Blocked = () => {
  return (
    <section className="py-[60px] lg:py-[120px] bg-transparent overflow-hidden px-5 lg:px-[80px]">
      <div className={`w-full  max-w-[1000px] text-center mx-auto`}>
        <h2 className={`w-full lg:w-[90%] mx-auto  font-medium text-[40px] lg:text-[56px] leading-[120%] -tracking-[1.6px] text-[#18181B]`}>
          What We Help <br /> Unblock
        </h2>

        <p className={` mt-6 text-base lg:text-lg font-normal leading-[140%] `}>
          If something’s tricky, tense or not quite working, that’s where we come in. We help people untangle challenges, reconnect teams
          and develop the confidence to move forward. Here are just some of the situations we’ve helped shift and the change we’ve supported
          in people and teams.
        </p>
      </div>

      {/* Content */}
      <div className="h-[350px]  lg:h-[576px] mt-[60px] relative w-full max-w-[300px]  lg:max-w-[486px] mx-auto bg-gray-300 rounded-2xl">
        <Image src={unblock} alt="Unblock Cover" className="rounded-2xl absolute top-0 left-0 w-full h-full object-cover" />

        {/* Left top */}
        <div
          style={{ boxShadow: '0px 17.34px 86.71px -17.34px rgba(0, 0, 0, 0.09)' }}
          className=" absolute -translate-x-1/2 lg:-translate-x-full top-[10%] left-2 lg:-left-12 border w-full max-w-[137px] lg:max-w-[360px]  text-[7px] lg:text-base border-[#E9E9EC] text-[#18181B] rounded-[9px] lg:rounded-3xl p-[9px] lg:p-6 bg-white"
        >
          <div className="flex items-center gap-4">
            <div className="w-[18px] overflow-hidden lg:w-12 h-[18px] lg:h-12 rounded-full bg-gray-200">
              <Image alt="William Johnson" src={william} className="h-full w-full object-cover" />
            </div>
            <p title="Name" className="font-medium">
              William Johnson
            </p>
          </div>
          <p className="leading-[140%] mt-[6px] lg:mt-4" title="Description">
            “My team can’t give feedback without it getting personal”
          </p>
        </div>

        {/* Left bottom */}
        <div
          style={{ boxShadow: '0px 17.34px 86.71px -17.34px rgba(0, 0, 0, 0.09)' }}
          className=" absolute -translate-x-1/2 lg:-translate-x-full -bottom-[5%] left-8 border w-full max-w-[140px] lg:max-w-[270px] lg:text-sm text-[7px] border-[#E9E9EC] text-[#18181B] rounded-[11px] lg:rounded-[20px] p-[11px] lg:p-5 bg-white"
        >
          <div className="flex items-center gap-4">
            <div className="w-[22px] overflow-hidden lg:w-[42px] h-[22px] lg:h-[42px] rounded-full bg-gray-200">
              <Image alt="Audrey Clark" src={clark} className="h-full w-full object-cover" />
            </div>
            <p title="Name" className="font-medium">
              Audrey Clark
            </p>
          </div>
          <p className="leading-[140%] mt-[7px] lg:mt-3" title="Description">
            “There’s tension between departments or personalities”
          </p>
        </div>

        {/* Right top */}
        <div
          style={{ boxShadow: '0px 17.34px 86.71px -17.34px rgba(0, 0, 0, 0.09)' }}
          className=" absolute -translate-y-1/2 lg:-translate-y-0 translate-x-full top-2 lg:top-7 right-14 border w-full max-w-[80px] lg:max-w-[250px] text-[5px] lg:text-sm border-[#E9E9EC] text-[#18181B] rounded-[7px] lg:rounded-[20px] p-[6px] lg:p-5 bg-white"
        >
          <div className="flex items-center gap-4">
            <div className="w-3 lg:w-[42px] h-3 lg:h-[42px] overflow-hidden rounded-full bg-gray-200">
              <Image alt="Kimberly Kim" src={kim} className="h-full w-full object-cover" />
            </div>
            <p title="Name" className="font-medium">
              Kimberly Kim
            </p>
          </div>
          <p className="leading-[140%] mt-[5px] lg:mt-3" title="Description">
            “I need help leading through a restructure or challenging moment”
          </p>
        </div>

        {/* Right Bottom */}
        <div
          style={{ boxShadow: '0px 17.34px 86.71px -17.34px rgba(0, 0, 0, 0.09)' }}
          className=" absolute translate-x-1/3 lg:translate-x-2/3 bottom-7 right-0 border w-full max-w-[150px] lg:max-w-[390px] text-[7px] lg:text-[17px] border-[#E9E9EC] text-[#18181B] rounded-[10px] lg:rounded-3xl p-2.5 lg:p-[26px] bg-white"
        >
          <div className="flex items-center gap-4">
            <div className="w-[20px] lg:w-[53px] h-[20px] lg:h-[53px] rounded-full overflow-hidden bg-gray-200">
              <Image alt=" Edward Cooper" src={cooper} className="h-full w-full object-cover" />
            </div>
            <p title="Name" className="font-medium">
              Edward Cooper
            </p>
          </div>
          <p className="leading-[140%] mt-[7px] lg:mt-3" title="Description">
            “We’ve been through a lot, and need space to reflect and regroup”
          </p>
        </div>

        {/* Right Center */}
        <div
          style={{ boxShadow: '0px 17.34px 86.71px -17.34px rgba(0, 0, 0, 0.09)' }}
          className=" absolute top-1/2 -translate-y-1/2 translate-x-1/2 lg:translate-x-[200%] right-0 border w-full max-w-[85px] lg:max-w-[166px] text-[5px] lg:text-[8px] border-[#E9E9EC] text-[#18181B] rounded-[7px] lg:rounded-[13px] p-[7px] lg:p-3 bg-white"
        >
          <div className="flex items-center gap-4">
            <div className="w-[13px] lg:w-[26px] h-[13px] lg:h-[26px] overflow-hidden rounded-full bg-gray-200">
              <Image alt="Jonathan Baker" src={baker} className="h-full w-full object-cover" />
            </div>
            <p title="Jonathan Baker" className="font-medium">
              Jonathan Baker
            </p>
          </div>
          <p className="leading-[140%] mt-[5px] lg:mt-2" title="Description">
            “There’s misalignment between values and actions”
          </p>
        </div>
      </div>

      <div className="text-center max-w-[720px] mx-auto mt-[70px]">
        <p className="text-lg font-normal text-[#6E7381]">
          If you don’t see your situation here, that’s okay. Most of our work begins with a simple conversation.
        </p>
        <div className="mt-[56px] flex items-center justify-center">
          <Button title={'Talk to Us'} href="/contact-us" />
        </div>
      </div>
    </section>
  );
};

export default Blocked;

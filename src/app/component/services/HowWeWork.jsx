import React from 'react';
import Mic from '/public/svg/mic.svg';
import Mask from '/public/svg/mask.svg';
import Talk from '/public/svg/Talk.svg';
import Hand from '/public/svg/hand.svg';
import Calander from '/public/svg/calander.svg';
import Virtual from '/public/svg/virtual.svg';
import Light from '/public/svg/light.svg';

const HowWeWork = () => {
  return (
    <section className="px-5  pt-[80px] lg:pt-[120px]  lg:px-[80px]">
      <div className={`w-full  max-w-[720px] text-center mx-auto`}>
        <h2 className={`w-full lg:w-[90%] mx-auto  font-medium text-[40px] lg:text-[56px] leading-[120%] -tracking-[1.6px] text-[#18181B]`}>
          How We Work
        </h2>

        <p className={` mt-6 text-base lg:text-lg  leading-[140%] `}>
          Tools, techniques and trusted approaches. Every experience we design is different, but we often draw on:
        </p>
      </div>
      <div className="mt-[60px] font-medium max-w-[1130px] mx-auto">
        <div className="grid grid-cols-1  lg:grid-cols-4">
          <div className=" lg:border-t-0  relative lg:py-[28px] lg:px-[28px] px-0 py-7 border-b border-dotted lg:border-r border-[#6E7381]">
            <div className="w-12 text-secondary flex items-center justify-center lg:w-[60px] mb-5 lg:mb-10 h-12 lg:h-[60px] bg-[#511A7533] rounded-lg">
              <Mic />
            </div>
            <p className="leading-[140%] text-[#18181B]  text-base lg:text-lg">Experiential workshops with live facilitation</p>
            {/* Dot */}
            <span className="hidden lg:block w-2 h-2 rounded-full bg-primary absolute bottom-0 right-0 translate-1/2"></span>
          </div>

          <div className=" relative  lg:py-[28px] lg:px-[28px] px-0 py-7 border-b border-dotted lg:border-r border-[#6E7381]">
            <div className="w-12 text-secondary flex items-center justify-center lg:w-[60px] mb-5 lg:mb-10 h-12 lg:h-[60px] bg-[#511A7533] rounded-lg">
              <Mask />
            </div>
            <p className="leading-[140%] text-[#18181B]  text-base lg:text-lg">Actor-led roleplay and real-time reflection</p>
            {/* Dot */}
            <span className="hidden lg:block w-2 h-2 rounded-full bg-primary absolute bottom-0 right-0 translate-1/2"></span>
          </div>

          <div className=" relative  lg:py-[28px] lg:px-[28px] px-0 py-7 border-b border-dotted lg:border-r border-[#6E7381]">
            <div className="w-12 text-secondary flex items-center justify-center lg:w-[60px] mb-5 lg:mb-10 h-12 lg:h-[60px] bg-[#511A7533] rounded-lg">
              <Talk />
            </div>
            <p className="leading-[140%] text-[#18181B]  text-base lg:text-lg">One-to-one or team coaching</p>
            {/* Dot */}
            <span className="hidden lg:block w-2 h-2 rounded-full bg-primary absolute bottom-0 right-0 translate-1/2"></span>
          </div>

          <div className="  lg:py-[28px] lg:px-[28px] px-0 py-7 border-b border-dotted border-[#6E7381]">
            <div className="w-12 text-secondary flex items-center justify-center lg:w-[60px] mb-5 lg:mb-10 h-12 lg:h-[60px] bg-[#511A7533] rounded-lg">
              <Hand />
            </div>
            <p className="leading-[140%] text-[#18181B]  text-base lg:text-lg">Accredited mediation training</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3">
          <div className="  relative lg:py-[28px] lg:px-[28px] px-0 py-7  border-dotted lg:border-r border-[#6E7381]">
            <div className="w-12 text-secondary flex items-center justify-center lg:w-[60px] mb-5 lg:mb-10 h-12 lg:h-[60px] bg-[#511A7533] rounded-lg">
              <Calander />
            </div>
            <p className="leading-[140%] text-[#18181B]  text-base lg:text-lg">Bespoke sessions for inset days or team retreats</p>
            {/* Dot */}
            <span className="hidden lg:block w-2 h-2 rounded-full bg-primary absolute top-0 right-0 -translate-y-1/2 translate-x-1/2"></span>
          </div>

          <div className=" relative border-t lg:border-t-0  lg:py-[28px] lg:px-[28px] px-0 py-7  border-dotted lg:border-r border-[#6E7381]">
            <div className="w-12 text-secondary flex items-center justify-center lg:w-[60px] mb-5 lg:mb-10 h-12 lg:h-[60px] bg-[#511A7533] rounded-lg">
              <Virtual />
            </div>
            <p className="leading-[140%] text-[#18181B]  text-base lg:text-lg">Virtual and in-person delivery</p>
            {/* Dot */}
            <span className="hidden lg:block w-2 h-2 rounded-full bg-primary absolute top-0 right-0 -translate-y-1/2 translate-x-1/2"></span>
          </div>

          <div className=" relative border-t lg:border-t-0  lg:py-[28px] lg:px-[28px] px-0 py-7  border-dotted  border-[#6E7381]">
            <div className="w-12 text-secondary flex items-center justify-center lg:w-[60px] mb-5 lg:mb-10 h-12 lg:h-[60px] bg-[#511A7533] rounded-lg">
              <Light />
            </div>
            <p className="leading-[140%] text-[#18181B]  text-base lg:text-lg">
              Creative techniques for culture building and communication
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;

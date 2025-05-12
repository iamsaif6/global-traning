import React from 'react';
import SectionTitle from '../shared/SectionTitle';
import Button from '../shared/Button';

const Blocked = () => {
  return (
    <section className="py-[60px] lg:py-[120px] bg-transparent px-5 lg:px-[80px]">
      <div className={`w-full  max-w-[1000px] text-center mx-auto`}>
        <h2 className={`w-full lg:w-[90%] mx-auto  font-medium text-[40px] lg:text-[56px] leading-[120%] -tracking-[1.6px] text-[#18181B]`}>
          What We Help <br /> Unblock
        </h2>

        <p className={` mt-6 text-base lg:text-lg font-normal leading-[140%] `}>
          If it’s tricky, tangled or tense — we’re here to help. You might be facing something specific, or just know that something needs
          to shift. Here are some of the things people have brought to us:
        </p>
      </div>

      {/* Content */}
      <div className="h-[576px] mt-[60px] relative w-[486px] mx-auto bg-gray-300 rounded-2xl">
        {/* Left top */}
        <div
          style={{ boxShadow: '0px 17.34px 86.71px -17.34px rgba(0, 0, 0, 0.09)' }}
          className=" absolute -translate-x-full top-[10%] -left-12 border w-full max-w-[360px] text-base border-[#E9E9EC] text-[#18181B] rounded-3xl p-6 bg-white"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-gray-200"></div>
            <p title="Name" className="font-medium">
              William Johnson
            </p>
          </div>
          <p className="leading-[140%] mt-4" title="Description">
            “My team can’t give feedback without it getting personal”
          </p>
        </div>

        {/* Left bottom */}
        <div
          style={{ boxShadow: '0px 17.34px 86.71px -17.34px rgba(0, 0, 0, 0.09)' }}
          className=" absolute -translate-x-full -bottom-[5%] left-8 border w-full max-w-[270px] text-sm border-[#E9E9EC] text-[#18181B] rounded-[20px] p-5 bg-white"
        >
          <div className="flex items-center gap-4">
            <div className="w-[42px] h-[42px] rounded-full bg-gray-200"></div>
            <p title="Name" className="font-medium">
              Audrey Clark
            </p>
          </div>
          <p className="leading-[140%] mt-3" title="Description">
            “There’s tension between departments or personalities”
          </p>
        </div>

        {/* Right top */}
        <div
          style={{ boxShadow: '0px 17.34px 86.71px -17.34px rgba(0, 0, 0, 0.09)' }}
          className=" absolute translate-x-full top-7 right-14 border w-full max-w-[250px] text-sm border-[#E9E9EC] text-[#18181B] rounded-[20px] p-5 bg-white"
        >
          <div className="flex items-center gap-4">
            <div className="w-[42px] h-[42px] rounded-full bg-gray-200"></div>
            <p title="Name" className="font-medium">
              Kimberly Kim
            </p>
          </div>
          <p className="leading-[140%] mt-3" title="Description">
            “I need help leading through a restructure or challenging moment”
          </p>
        </div>

        {/* Right Bottom */}
        <div
          style={{ boxShadow: '0px 17.34px 86.71px -17.34px rgba(0, 0, 0, 0.09)' }}
          className=" absolute translate-x-2/3 bottom-7 right-0 border w-full max-w-[390px] text-[17px] border-[#E9E9EC] text-[#18181B] rounded-3xl p-[26px] bg-white"
        >
          <div className="flex items-center gap-4">
            <div className="w-[53px] h-[53px] rounded-full bg-gray-200"></div>
            <p title="Name" className="font-medium">
              Kimberly Kim
            </p>
          </div>
          <p className="leading-[140%] mt-3" title="Description">
            “I need help leading through a restructure or challenging moment”
          </p>
        </div>

        {/* Right Center */}
        <div
          style={{ boxShadow: '0px 17.34px 86.71px -17.34px rgba(0, 0, 0, 0.09)' }}
          className=" absolute top-1/2 -translate-y-1/2 translate-x-[200%] right-0 border w-full max-w-[166px] text-[8px] border-[#E9E9EC] text-[#18181B] rounded-[13px] p-3 bg-white"
        >
          <div className="flex items-center gap-4">
            <div className="w-[26px] h-[26px] rounded-full bg-gray-200"></div>
            <p title="Name" className="font-medium">
              Kimberly Kim
            </p>
          </div>
          <p className="leading-[140%] mt-2" title="Description">
            “I need help leading through a restructure or challenging moment”
          </p>
        </div>
      </div>

      <div className="text-center max-w-[720px] mx-auto mt-[70px]">
        <p className="text-lg font-normal text-[#6E7381]">
          If you don’t see your situation here, that’s okay. Most of our work begins with a simple conversation.
        </p>
        <div className="mt-[56px] flex items-center justify-center">
          <Button title={'Talk to Us'} href="#" />
        </div>
      </div>
    </section>
  );
};

export default Blocked;

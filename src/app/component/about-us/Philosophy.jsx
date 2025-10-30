import React from 'react';
import cover from '/public/GTG_2022-43.jpg';
import Image from 'next/image';

const Philosophy = () => {
  return (
    <section className="py-[80px] lg:py-[120px] bg-primary  items-center px-5 lg:px-[40px] grid grid-cols-1 lg:grid-cols-2 gap-12">
      <div className="relative max-h-[700px] min-h-[350px] hidden lg:block rounded-3xl overflow-hidden">
        <Image alt="Cover Photo" src={cover} fill className="object-cover" />
      </div>

      <div>
        <div className={`w-full text-white max-w-max lg:max-w-[660px]`}>
          <div className="text-center lg:text-left">
            <p className="mb-3 text-white text-sm lg:text-base font-medium">OUR PHILOSOPHY</p>
            <h2 className="   font-medium text-[40px] lg:text-[56px] leading-[120%] -tracking-[1.6px]">
              Training designed with compassion
            </h2>

            <div className="block my-10 lg:hidden h-[350px]  rounded-3xl overflow-hidden">
              <Image alt="Cover Photo" className="w-full object-center h-full object-cover" src={cover} height={400} width={400} />
            </div>

            <p className=" mt-6 mb-[56px] text-left text-base lg:text-lg font-normal leading-[140%]">
              <strong>Compassion is at the heart of all we do.</strong> Our courses, workshops and training programmes create a safe space
              to step outside your comfort zone: to explore boldly, to be playful and to reflect deeply. We hear and share stories drawn
              from lived experiences — which we know to be the most effective way to learn. Collaborative learning can shift mindsets,
              strengthen bonds and spark meaningful change.
              <br /> <br />
              Global Training brings people together, putting emotional intelligence into action.
            </p>
          </div>
          {/* <div className="space-y-4 ">
            <div className="bg-white shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.10),_0px_10px_10px_-5px_rgba(0,0,0,0.04)] duration-200 items-start lg:items-center    flex flex-col lg:flex-row gap-6 p-3 lg:p-6 rounded-[16px] lg:rounded-3xl">
              <div className="flex gap-6   items-center ">
                <div className=" duration-200 bg-secondary text-white  lg:w-[40px] lg:h-[40px] w-[36px] h-[36px] flex-shrink-0 rounded-[8px]  flex items-center justify-center font-medium text-[28px]">
                  1
                </div>
                <h4 className="text-[16px] lg:text-[20px] font-medium   text-[#18181B]">Re-ignite passion and purpose.</h4>
              </div>
            </div>

            <div className="bg-white shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.10),_0px_10px_10px_-5px_rgba(0,0,0,0.04)] duration-200 items-start lg:items-center   flex flex-col lg:flex-row gap-6 p-3 lg:p-6 rounded-[16px] lg:rounded-3xl">
              <div className="flex gap-6 items-center lg:items-center">
                <div className=" duration-200 bg-secondary text-white  lg:w-[40px] lg:h-[40px] w-[36px] h-[36px] flex-shrink-0 rounded-[8px] flex items-center justify-center font-medium text-[28px]">
                  2
                </div>
                <h4 className="text-[16px] lg:text-[20px] font-medium  text-[#18181B]">Re-connect teams with shared values and goals.</h4>
              </div>
            </div>

            <div className="bg-white shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.10),_0px_10px_10px_-5px_rgba(0,0,0,0.04)] duration-200 items-start lg:items-center   flex flex-col lg:flex-row gap-6 p-3 lg:p-6 rounded-[16px] lg:rounded-3xl">
              <div className="flex gap-6 items-center lg:items-center">
                <div className=" duration-200 bg-secondary text-white  lg:w-[40px] lg:h-[40px] w-[36px] h-[36px] flex-shrink-0 rounded-[8px] flex items-center justify-center font-medium text-[28px]">
                  3
                </div>
                <h4 className="text-[16px] lg:text-[20px] font-medium  text-[#18181B]">
                  Re-imagine strategies to achieve better outcomes.
                </h4>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Philosophy;

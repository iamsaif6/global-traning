import React from 'react';
import SectionTitle from '../shared/SectionTitle';
import Image from 'next/image';

const Approch = () => {
  return (
    // <section className="py-[80px] lg:py-[120px] px-5 lg:px-[40px]">
    //   <SectionTitle badge={'OUR APPROACH'} title={'Creating Space for Transformation.'} />

    //   <div className="grid grid-cols-1 lg:grid-cols-3  gap-6 mt-10">
    //     <div className="rounded-3xl lg:p-8">
    //       <div className="flex mb-6 pb-6 border-b border-[#D1D1D6] items-center lg:gap-6 gap-4">
    //         <span className="w-10  rounded-[8px] h-10 bg-secondary flex items-center justify-center text-[#FCFCFD] font-medium text-2xl">
    //           1
    //         </span>
    //         <h4 className="text-secondary text-2xl font-medium">Immersive Learning</h4>
    //       </div>

    //       <p className=" font-normal text-base lg:text-lg">Training is hands-on, ensuring participants learn by doing.</p>
    //     </div>

    //     <div className="rounded-3xl lg:p-8">
    //       <div className="flex mb-6 pb-6 border-b border-[#D1D1D6] items-center lg:gap-6 gap-4">
    //         <span className="w-10  rounded-[8px] h-10 bg-secondary flex items-center justify-center text-[#FCFCFD] font-medium text-2xl">
    //           2
    //         </span>
    //         <h4 className="text-secondary  text-2xl font-medium">Real-World Application</h4>
    //       </div>

    //       <p className=" font-normal text-base lg:text-lg">
    //         Sessions are tailored to address practical challenges faced by leaders and teams.
    //       </p>
    //     </div>

    //     <div className="rounded-3xl lg:p-8">
    //       <div className="flex mb-6 pb-6 border-b border-[#D1D1D6] items-center lg:gap-6 gap-4">
    //         <span className="w-10  rounded-[8px] h-10 bg-secondary flex items-center justify-center text-[#FCFCFD] font-medium text-2xl">
    //           3
    //         </span>
    //         <h4 className="text-secondary text-2xl font-medium">Inspiring Environments</h4>
    //       </div>

    //       <p className=" font-normal text-base lg:text-lg">
    //         Whether in-person or virtual, our training spaces encourage creativity and focus.
    //       </p>
    //     </div>
    //   </div>
    // </section>
    <section className="py-[80px] lg:py-[120px]   items-center px-5 lg:px-[40px] grid grid-cols-1 lg:grid-cols-2 gap-12">
      <div>
        <div className={`w-full  max-w-max lg:max-w-[660px]`}>
          <div className="text-center lg:text-left">
            <p className="mb-3 text-primary text-sm lg:text-base font-medium">OUR APPROACH</p>
            <h2 className=" capitalize  font-medium text-[40px] lg:text-[56px] leading-[120%] -tracking-[1.6px]">
              Creating space for transformation.
            </h2>

            <div className="block my-10 lg:hidden max-h-[450px]  h-full rounded-3xl overflow-hidden">
              {/* <Image alt="Cover Photo" className="w-full object-center h-full object-cover" src={cover} height={200} width={400} /> */}
            </div>

            <p className=" mt-6 mb-[56px] text-base lg:text-lg font-normal leading-[140%]">
              Our training blends theatre-based techniques, live coaching, real-time facilitation and tailored leadership frameworks —
              always balancing structure with creativity, compassion with challenge, theory with real-world action.
              <br /> <br />
              We design every experience to be human, grounded and transformational, anchored in a belief that learning should be felt, not
              forced. Because when people grow together, they go further together.
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
      <div className=" max-h-[700px] hidden lg:block rounded-3xl overflow-hidden">
        {/* <Image alt="Cover Photo" className="w-full h-full object-cover" src={cover} height={200} width={400} /> */}
      </div>
    </section>
  );
};

export default Approch;

import Video from '@/app/component/courageous-conversations-training/Video';
import Button from '@/app/component/shared/Button';
import SectionTitle from '@/app/component/shared/SectionTitle';
import Image from 'next/image';
import React from 'react';
import cover from '/public/keyTopic.png';
import Cover from '/public/WhoItsFor.png';
import HighFive from '/public/svg/highfive.svg';
import Croud from '/public/svg/croud.svg';

const page = () => {
  return (
    <div>
      {/* Header */}
      <header
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(62, 0, 101, 0.90) 15.68%, rgba(62, 0, 101, 0.31) 69.4%, rgba(255, 255, 255, 1) 100%)`,
          backgroundBlendMode: 'overlay',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        className="pt-[187px] relative md:pt-[238px] pb-[0px] lg:pb-[203px] px-5 md:px-[60px]"
      >
        <div className="w-full relative z-10   mx-auto text-center">
          <h1 className="font-medium text-wrap tracking-[-4%] leading-[120%] text-5xl  lg:text-[68px] text-[#FCFCFD]">
            SEND (Special Educational Needs and Disability) Mediation
          </h1>
        </div>
      </header>
      <Video />
      <section className="pt-[80px] lg:pt-0 lg:pb-[120px]  px-5 lg:px-[80px]">
        <SectionTitle
          title={'What It Is'}
          subtitle={
            'An advanced course for qualified mediators, wishing to carry out mediations in the field of special educational needs and disability, formally approved by the Civil Mediation Council and the College of Mediators'
          }
          center
          large
        />
        <div className="flex mt-[56px] items-center justify-center">
          <Button title={'Enroll Today'} href="#" />
        </div>
      </section>
      {/* key topic */}
      <section className="py-[80px] lg:py-[120px]   items-center px-5 lg:px-[40px] grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="max-h-[680px] my-10 hidden lg:block h-full rounded-3xl overflow-hidden">
          <Image alt="Cover Photo" className="w-full h-full object-cover" src={cover} height={200} width={400} />
        </div>
        <div>
          <div className={`w-full  max-w-max lg:max-w-[660px]`}>
            <div className="text-center lg:text-left">
              <p className="mb-3 text-white text-sm lg:text-base font-medium">OUR PHILOSOPHY</p>
              <h1 className="  font-medium mb-[60px] text-[40px] lg:text-[56px] leading-[120%] -tracking-[1.6px]">Key Topics Covered</h1>

              <div className="block my-10 lg:hidden max-h-[450px]  h-full rounded-3xl overflow-hidden">
                <Image alt="Cover Photo" className="w-full object-center h-full object-cover" src={cover} height={200} width={400} />
              </div>
            </div>
            <div className="space-y-4 text-secondary ">
              <div className="bg-white border border-[#D1D1D6] duration-200  items-start    flex flex-col lg:flex-row gap-6 p-3 lg:p-6 rounded-[16px] lg:rounded-3xl">
                <div className="flex gap-6   items-center ">
                  <div className=" duration-200 bg-secondary text-white  lg:w-[40px] lg:h-[40px] w-[36px] h-[36px] flex-shrink-0 rounded-[8px]  flex items-center justify-center font-medium text-[28px]">
                    1
                  </div>
                  <h4 className="text-[16px] lg:text-[24px] font-medium   ">Legislative Framework + Contextual Knowledge</h4>
                </div>
              </div>

              <div className="bg-white border border-[#D1D1D6] duration-200 items-start   flex flex-col lg:flex-row gap-6 p-3 lg:p-6 rounded-[16px] lg:rounded-3xl">
                <div className="flex gap-6 items-center lg:items-start">
                  <div className=" duration-200 bg-secondary text-white  lg:w-[40px] lg:h-[40px] w-[36px] h-[36px] flex-shrink-0 rounded-[8px] flex items-center justify-center font-medium text-[28px]">
                    2
                  </div>
                  <h4 className="text-[16px] lg:text-[24px] font-medium  ">Practice and Conduct</h4>
                </div>
              </div>

              <div className="bg-white border border-[#D1D1D6] duration-200 items-start   flex flex-col lg:flex-row gap-6 p-3 lg:p-6 rounded-[16px] lg:rounded-3xl">
                <div className="flex gap-6 items-center lg:items-start">
                  <div className=" duration-200 bg-secondary text-white  lg:w-[40px] lg:h-[40px] w-[36px] h-[36px] flex-shrink-0 rounded-[8px] flex items-center justify-center font-medium text-[28px]">
                    3
                  </div>
                  <h4 className="text-[16px] lg:text-[24px] font-medium ">Local Process and Procedure</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* How it work */}
      <section className="pb-[80px] lg:pb-[120px] px-5 lg:px-[40px]">
        <SectionTitle title={'How  It Works'} center />

        <div className="grid grid-cols-1 lg:grid-cols-3  gap-6 mt-10">
          <div className="rounded-3xl border border-[#D1D1D6] p-[20px] lg:p-8">
            <div className="flex mb-6 flex-col pb-6 border-b border-[#D1D1D6] items-start lg:gap-6 gap-4">
              <span className="w-10  rounded-[8px] h-10 bg-secondary flex items-center justify-center text-[#FCFCFD] font-medium text-2xl">
                1
              </span>
              <h4 className="text-secondary text-2xl font-medium">Interactive Role-Plays</h4>
            </div>

            <p className="text-[#6E7381] font-normal text-base lg:text-lg">
              Pre Course Mediation Observation - Taught training of 4 models in person attendance required.
            </p>
          </div>

          <div className="rounded-3xl border border-[#D1D1D6] p-[20px]  lg:p-8">
            <div className="flex mb-6 flex-col pb-6 border-b border-[#D1D1D6] items-start lg:gap-6 gap-4">
              <span className="w-10  rounded-[8px] h-10 bg-secondary flex items-center justify-center text-[#FCFCFD] font-medium text-2xl">
                2
              </span>
              <h4 className="text-secondary  text-2xl font-medium">Customized Tools</h4>
            </div>

            <p className="text-[#6E7381] font-normal text-base lg:text-lg">Induction Event -</p>
          </div>

          <div className="rounded-3xl border border-[#D1D1D6] p-[20px]  lg:p-8">
            <div className="flex mb-6 flex-col pb-6 border-b border-[#D1D1D6] items-start lg:gap-6 gap-4">
              <span className="w-10  rounded-[8px] h-10 bg-secondary flex items-center justify-center text-[#FCFCFD] font-medium text-2xl">
                3
              </span>
              <h4 className="text-secondary text-2xl font-medium">Actionable Outcomes</h4>
            </div>

            <p className="text-[#6E7381] font-normal text-base lg:text-lg">
              Professional Practice and Casework - Three assessed mediation cases are required
            </p>
          </div>
        </div>
      </section>
      {/* Who is this for */}
      <section className="py-[80px] text-white lg:py-[120px] items-center px-5 lg:px-[40px] grid grid-cols-1 lg:grid-cols-12 gap-12 bg-primary">
        <div className="lg:block hidden col-span-5 rounded-2xl overflow-hidden">
          <Image src={Cover} alt="Cover" className="w-full h-full object-cover" />
        </div>
        <div className="col-span-7">
          <h2 className="text-[56px] text-center lg:text-left font-medium mb-[60px]">Who It’s For</h2>
          <div className="block max-w-[500px] mx-auto lg:hidden rounded-2xl overflow-hidden">
            <Image src={Cover} alt="Cover" className="w-full h-full object-cover" />
          </div>
          <div className="grid grid-cols-1 mt-10 lg:mt-0 lg:grid-cols-2 gap-6">
            <div className="p-6 bg-white rounded-2xl">
              <p className="mb-6 text-secondary">
                <Croud />
              </p>
              <p className="text-2xl font-medium text-[#18181B]">
                The SEND Mediation Training Course is for qualified, experienced mediators
              </p>
            </div>
            <div className="p-6 bg-white rounded-2xl">
              <p className="mb-6 text-secondary">
                <HighFive />
              </p>
              <p className="text-2xl font-medium text-[#18181B]">
                Applicants are required to have successfully lead a minimum of three mediation cases
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-[80px]  lg:py-[120px] px-5 lg:px-[40px] grid grid-cols-12  gap-10 lg:gap-12 ">
        <div className="col-span-12 lg:col-span-5">
          <h3 className="font-medium text-center lg:text-left text-[40px] lg:text-[56px]">Impact</h3>
        </div>
        <div className="col-span-12 lg:col-span-7">
          <ul className="text-secondary flex flex-col font-medium text-2xl">
            <li className="py-6 border-b border-[#D1D1D6]">
              Equip mediators to be competent to work in the specialist area of SEND mediation
            </li>
            <li className="py-6 border-b border-[#D1D1D6]">
              Apply to the College of Mediators and the Civil Mediation Council for registration as a specialist mediator in SEND.
            </li>
            <li className="py-6">Certificate to practise as a specialist SEND mediator</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default page;

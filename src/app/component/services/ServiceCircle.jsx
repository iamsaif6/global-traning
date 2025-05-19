import React from 'react';
// import circle from '/public/service_circle.png';
import Image from 'next/image';
import Illustration from '/public/Illustration.svg';

const ServiceCircle = () => {
  return (
    <section className="pt-[80px] bg-transparent overflow-hidden px-5 lg:px-[80px]">
      <div className="max-w-[1200px] text-center text-[#18181B] text-[16px] lg:text-[18px] leading-[120%] mx-auto py-[40px] lg:pb-[60px] lg:pt-[30px]">
        <p>
          Our training helps people build meaningful connections and grow with confidence. We listen first, then we co-design the kind of
          support that actually fits — shaped by experience, delivered with care and grounded in emotional intelligence.
        </p>
      </div>

      {/* <Image alt="Cover" className="max-w-[780px] w-full mx-auto" src={circle} /> */}
      <div className="max-w-[780px] mx-auto">
        <Illustration />
      </div>
    </section>
  );
};

export default ServiceCircle;

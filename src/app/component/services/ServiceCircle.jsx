import React from 'react';
// import circle from '/public/service_circle.png';
import Image from 'next/image';
import Illustration from '/public/Illustration.svg';

const ServiceCircle = () => {
  return (
    <section className="pt-[80px] bg-transparent overflow-hidden px-5 lg:px-[80px]">
      {/* <Image alt="Cover" className="max-w-[780px] w-full mx-auto" src={circle} /> */}
      <div className="max-w-[780px] mx-auto">
        <Illustration />
      </div>
    </section>
  );
};

export default ServiceCircle;

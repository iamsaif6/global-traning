import React from 'react';
import circle from '/public/service_circle.png';
import Image from 'next/image';

const ServiceCircle = () => {
  return (
    <section className="pt-[80px] bg-transparent overflow-hidden px-5 lg:px-[80px]">
      <Image alt="Cover" className="max-w-[780px] w-full mx-auto" src={circle} />
    </section>
  );
};

export default ServiceCircle;

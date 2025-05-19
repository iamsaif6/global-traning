import React from 'react';
import circle from '/public/service_circle.png';
import Image from 'next/image';

const ServiceCircle = () => {
  return (
    <section className="py-[60px] lg:py-[120px] bg-transparent overflow-hidden px-5 lg:px-[80px]">
      <Image className="max-w-[780px] w-full mx-auto" src={circle} />
    </section>
  );
};

export default ServiceCircle;

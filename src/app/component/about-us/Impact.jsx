import Image from 'next/image';
import React from 'react';
import cover from '/public/image 47.png';

const Impact = () => {
  return (
    <section className="py-[120px] bg-primary  items-center px-[40px] grid grid-cols-2 gap-12">
      <div>
        <div className={`w-full text-white  max-w-[660px]`}>
          <p className="mb-3 text-white font-medium">OUR PHILOSOPHY</p>
          <h1 className="  font-medium text-[56px] leading-[120%] -tracking-[1.6px]">Compassion at the Heart of Learning</h1>

          <p className=" mt-10 mb-[56px]  text-lg font-normal leading-[140%]">
            When people feel seen, safe and supported, they open up — to ideas, to challenge, to each other.
            <br /> <br />
            That is when true learning begins.
            <br /> <br />
            Our role is to create the space for that transformation.
            <br /> <br />
            By combining emotional intelligence with experiential practice, we help individuals and teams strengthen connection, build
            confidence and unlock potential.
            <br /> <br />
            Because when people grow together, they go further together.
          </p>
        </div>
      </div>
      <div className="max-h-[680px] h-full rounded-3xl overflow-hidden">
        <Image className="w-full h-full object-cover" src={cover} height={200} width={400} />
      </div>
    </section>
  );
};

export default Impact;

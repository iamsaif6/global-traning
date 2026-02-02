import React from 'react';
import Button from '../shared/Button';

const TextBox = () => {
  return (
    <div className="px-4 py-[80px] lg:py-[100px]  lg:px-[80px]">
      <p className=" text-center  mt-[18px] md:mt-6 mb-[26px] md:mb-8 w-full  font-normal text-base md:text-lg">
        Whether you’re navigating change, shaping your team’s culture or building leadership confidence, our work is designed to make a
        difference that lasts.
        <br /> <br />
        Our training courses reflect your people, your purpose and your reality: thoughtful, collaborative and delivered with heart and
        soul.
        <br /> <br />
        We listen first, then co-design the type of support that truly fits for you — shaped by experience, delivered with care and grounded
        in emotional intelligence.
      </p>
      <div className="flex justify-center gap-4">
        <Button title={'Explore your options'} href="/training" secondary />
      </div>
    </div>
  );
};

export default TextBox;

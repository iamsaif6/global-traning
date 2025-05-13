import React from 'react';
import SectionTitle from '../shared/SectionTitle';
import Button from '../shared/Button';

const WhatIsIT = () => {
  return (
    <section className="pt-[80px] lg:pt-0 lg:pb-[120px]  px-5 lg:px-[80px]">
      <SectionTitle
        title={'What It Is'}
        subtitle={
          'A comprehensive program designed to help leaders and teams handle sensitive workplace discussions with confidence, clarity, and empathy.'
        }
        center
        large
      />
      <div className="flex mt-[56px] items-center justify-center">
        <Button title={'Enroll Today'} href="#" />
      </div>
    </section>
  );
};

export default WhatIsIT;

import React from 'react';
import Form from '../component/contact-us/form';
import Map from '../component/contact-us/Map';
import Header from '../component/contact-us/Header';

const page = () => {
  return (
    <div>
      <Header />
      <section className="pb-[120px] px-5 lg:px-[40px]">
        <Map />
      </section>
    </div>
  );
};

export default page;

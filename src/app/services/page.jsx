import React from 'react';
import Header from '../component/services/Header';
// import Video from '../component/services/Video';
import Blocked from '../component/services/Blocked';
import HowItWork from '../component/services/HowItWork';
import HowWeWork from '../component/services/HowWeWork';
import TrustedBy from '../component/services/TrustedBy';
import Form from '../component/services/Form';
import PhotoGrid from '../component/services/PhotoGrid';
import ServiceCircle from '../component/services/ServiceCircle';
import Testimonial from '../component/services/Testimonial';
import Video from '../training/Video';
import TextBox from '../component/services/TextBox';

const Services = () => {
  return (
    <div>
      <Header />
      {/* <Video /> */}
      {/* <ServiceCircle /> */}
      {/* <Blocked /> */}
      {/* <Testimonial /> */}
      {/* <TrustedBy /> */}
      {/* <HowWeWork /> */}
      <Video />
      <TextBox />
      <HowItWork />
      <PhotoGrid />
      <Form />
    </div>
  );
};

export default Services;

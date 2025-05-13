import React from 'react';
import Header from '../component/services/Header';
import Video from '../component/services/Video';
import Blocked from '../component/services/Blocked';
import HowItWork from '../component/services/HowItWork';
import HowWeWork from '../component/services/HowWeWork';
import TrustedBy from '../component/services/TrustedBy';
import Form from '../component/services/Form';
import PhotoGrid from '../component/services/PhotoGrid';

const Services = () => {
  return (
    <div>
      <Header />
      <Video />
      <Blocked />
      <HowWeWork />
      <HowItWork />
      <PhotoGrid />
      <TrustedBy />
      <Form />
    </div>
  );
};

export default Services;

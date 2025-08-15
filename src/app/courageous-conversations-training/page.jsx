import React from 'react';
import Header from '../component/courageous-conversations-training/Header';
import Video from '../component/courageous-conversations-training/Video';
import WhatIsIT from '../component/courageous-conversations-training/WhatIsIT';
import KeyTopic from '../component/courageous-conversations-training/KeyTopic';
import HowItWorks from '../component/courageous-conversations-training/HowItWorks';
import WhoItsFor from '../component/courageous-conversations-training/WhoItsFor';
import Impact from '../component/courageous-conversations-training/Impact';

const page = () => {
  return (
    <div>
      <Header />
      <Video />
      <WhatIsIT />
      <KeyTopic />
      <HowItWorks />
      <WhoItsFor />
      <Impact />
    </div>
  );
};

export default page;

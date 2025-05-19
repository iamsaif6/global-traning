import Header from '@/app/component/courageous-conversations-training/Header';
import HowItWorks from '@/app/component/courageous-conversations-training/HowItWorks';
import Impact from '@/app/component/courageous-conversations-training/Impact';
import KeyTopic from '@/app/component/courageous-conversations-training/KeyTopic';
import Video from '@/app/component/courageous-conversations-training/Video';
import WhatIsIT from '@/app/component/courageous-conversations-training/WhatIsIT';
import WhoItsFor from '@/app/component/courageous-conversations-training/WhoItsFor';
import React from 'react';

const page = async ({ params }) => {
  return (
    <div>
      <Header title={params.slug} />
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

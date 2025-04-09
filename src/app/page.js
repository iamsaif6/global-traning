import Image from 'next/image';
import Header from './component/home/Header';
import Marque from './component/home/Merque';
import Video from './component/home/Video';
import OurServices from './component/home/OurServices';
import WhatWeDo from './component/home/WhatWeDo';
import WhyUs from './component/home/WhyUs';
import Impact from './component/home/Impact';
import Instructor from './component/home/Instructor';
import HowItWork from './component/home/HowItWork';
import Blogs from './component/home/Blogs';

export default function Home() {
  return (
    <div>
      <Header />
      <Marque />
      <Video />
      <OurServices />
      <WhatWeDo />
      <WhyUs />
      <Impact />
      <Instructor />
      <HowItWork />
      <Blogs />
    </div>
  );
}

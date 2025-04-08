import Image from 'next/image';
import Header from './component/home/Header';
import Marque from './component/home/Merque';
import Video from './component/home/Video';

export default function Home() {
  return (
    <div>
      <Header />
      <Marque />
      <Video />
    </div>
  );
}

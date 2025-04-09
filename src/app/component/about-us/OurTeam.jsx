import React from 'react';
import SectionTitle from '../shared/SectionTitle';
import Image from 'next/image';
import img1 from '/public/Image-1.png';
import img2 from '/public/team2.png';
import img3 from '/public/team3.png';
import img4 from '/public/team4.png';
import img5 from '/public/team5.png';
import img6 from '/public/team6.png';
import img7 from '/public/team7.png';
import img8 from '/public/team8.png';

const OurTeam = () => {
  return (
    <section className="py-[120px] px-[80px]">
      <SectionTitle
        badge={'MEET OUR TEAM'}
        title={'The People Behind the Practice'}
        subtitle={
          'Our facilitators, coaches and actor-roleplayers bring decades of experience across sectors — but more importantly, they bring compassion, creativity and a deep belief in human potential.'
        }
        center
        large
      />
      <div className="mt-[60px] grid grid-cols-4 gap-6">
        <div>
          <div className="h-[420px] mb-4 rounded-3xl overflow-hidden">
            <Image className="w-full h-full object-cover" src={img1} />
          </div>
          <div>
            <h3 className="font-medium text-2xl">Emma Gersch</h3>
            <p className="text-[#6E7381] text-base">Instructor</p>
          </div>
        </div>

        <div>
          <div className="h-[420px] mb-4 rounded-3xl overflow-hidden">
            <Image className="w-full h-full object-cover" src={img2} />
          </div>
          <div>
            <h3 className="font-medium text-2xl">Georgie</h3>
            <p className="text-[#6E7381] text-base">Instructor</p>
          </div>
        </div>

        <div>
          <div className="h-[420px] mb-4 rounded-3xl overflow-hidden">
            <Image className="w-full h-full object-cover" src={img3} />
          </div>
          <div>
            <h3 className="font-medium text-2xl">Richard</h3>
            <p className="text-[#6E7381] text-base">Instructor</p>
          </div>
        </div>

        <div>
          <div className="h-[420px] mb-4 rounded-3xl overflow-hidden">
            <Image className="w-full h-full object-cover" src={img4} />
          </div>
          <div>
            <h3 className="font-medium text-2xl">Faye</h3>
            <p className="text-[#6E7381] text-base">Instructor</p>
          </div>
        </div>

        <div>
          <div className="h-[420px] mb-4 rounded-3xl overflow-hidden">
            <Image className="w-full h-full object-cover" src={img5} />
          </div>
          <div>
            <h3 className="font-medium text-2xl">Lizzie</h3>
            <p className="text-[#6E7381] text-base">Instructor</p>
          </div>
        </div>

        <div>
          <div className="h-[420px] mb-4 rounded-3xl overflow-hidden">
            <Image className="w-full h-full object-cover" src={img6} />
          </div>
          <div>
            <h3 className="font-medium text-2xl">Polly</h3>
            <p className="text-[#6E7381] text-base">Instructor</p>
          </div>
        </div>

        <div>
          <div className="h-[420px] mb-4 rounded-3xl overflow-hidden">
            <Image className="w-full h-full object-cover" src={img7} />
          </div>
          <div>
            <h3 className="font-medium text-2xl">Zonelle</h3>
            <p className="text-[#6E7381] text-base">Instructor</p>
          </div>
        </div>

        <div>
          <div className="h-[420px] mb-4 rounded-3xl overflow-hidden">
            <Image className="w-full h-full object-cover" src={img8} />
          </div>
          <div>
            <h3 className="font-medium text-2xl">Adam</h3>
            <p className="text-[#6E7381] text-base">Instructor</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;

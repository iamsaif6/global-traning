import React from 'react';
import grid1 from '/public/Grid-1.png';
import grid2 from '/public/Grid-2.png';
import grid3 from '/public/Grid-3.png';
import Image from 'next/image';

const PhotoGrid = () => {
  return (
    <section className="px-5  pb-[80px] lg:pb-[120px]  lg:px-[80px]">
      <div className="max-w-[900px] text-center text-[#18181B] font-medium text-[28px] lg:text-[40px] leading-[120%] mx-auto py-[80px] lg:py-[120px]">
        <p>This isn’t training for training’s sake. It’s practical, intuitive and designed to create clarity, confidence and connection.</p>
      </div>
      {/* Photo grid for desktop */}
      <div className="hidden lg:grid grid-cols-2 gap-6">
        <div className="col-span-2 h-[480px] relative overflow-hidden bg-gray-300 rounded-3xl">
          <Image alt="Grid 1" src={grid1} className=" absolute left-0 top-0 w-full h-full object-cover" />
        </div>
        <div className="col-span-1 h-[480px] relative overflow-hidden bg-gray-300 rounded-3xl">
          <Image alt="Grid 2" src={grid2} className=" absolute left-0 top-0 w-full h-full object-cover" />
        </div>
        <div className="col-span-1 h-[480px] relative overflow-hidden bg-gray-300 rounded-3xl">
          <Image alt="Grid 3" src={grid3} className=" absolute left-0 top-0 w-full h-full object-cover" />
        </div>
      </div>
    </section>
  );
};

export default PhotoGrid;

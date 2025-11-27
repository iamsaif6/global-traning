import React from 'react';
import grid1 from '/public/Grid-1.jpg';
import grid2 from '/public/training/global_2025-26.jpg';
import grid3 from '/public/training/global_2025-313 (1) Large.jpeg';
import Image from 'next/image';

const PhotoGrid = () => {
  return (
    <section className="px-5  py-[80px] lg:py-[120px]  lg:px-[80px]">
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

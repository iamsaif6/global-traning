import React from 'react';
import img1 from '/public/global_2025-163 Large.jpeg';
import img2 from '/public/global_2025-274 (1) Large.jpeg';
import img3 from '/public/global_2025-478 (1) Large.jpeg';
import Image from 'next/image';

const PhotoGrid = () => {
  return (
    <div className="bg-white ">
      <div className=" max-w-[1600px]  pb-[80px] mx-auto  items-center px-4 lg:px-[40px]">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Image className="rounded-2xl max-w-[500px] mx-auto w-full" src={img1} />
          <Image className="rounded-2xl max-w-[500px] mx-auto w-full" src={img2} />
          <Image className="rounded-2xl max-w-[500px] mx-auto w-full" src={img3} />
        </div>
      </div>
    </div>
  );
};

export default PhotoGrid;

import React from 'react';
import img1 from '/public/training/global_2025-70 Large.jpeg';
import img2 from '/public/global_2025-274 (1) Large.jpeg';
import img3 from '/public/global_2025-478 (1) Large.jpeg';
import Image from 'next/image';

const PhotoGrid = () => {
  return (
    // <div className="bg-white ">
    //   <div className=" max-w-[1600px]  pb-[80px] mx-auto  items-center px-4 lg:px-[40px]">
    //     <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
    //       <Image alt="Grid 1" className="rounded-2xl max-w-[500px] mx-auto w-full" src={img1} />
    //       <Image alt="Grid 2" className="rounded-2x/Users/saifhasan/Downloads/iloveimg-compressed 2/global_2025-163 Large.jpegl max-w-[500px] mx-auto w-full" src={img3} />
    //     </div>
    //   </div>
    // </div>
    <section className="px-5  py-[80px] lg:py-[120px]  lg:px-[80px]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="col-span-1 lg:col-span-2 h-[480px] relative overflow-hidden bg-gray-300 rounded-3xl">
          <Image alt="Grid 1" src={img1} className=" absolute left-0 top-0 w-full h-full object-top object-cover" />
        </div>
        <div className="col-span-1 h-[480px] relative overflow-hidden bg-gray-300 rounded-3xl">
          <Image alt="Grid 2" src={img2} className=" absolute left-0 top-0 w-full h-full object-top object-cover" />
        </div>
        <div className="col-span-1 h-[480px] relative overflow-hidden bg-gray-300 rounded-3xl">
          <Image alt="Grid 3" src={img3} className=" absolute left-0 top-0 w-full h-full object-cover" />
        </div>
      </div>
    </section>
  );
};

export default PhotoGrid;

import React from 'react';

const Impact = () => {
  return (
    <section className="py-[80px]  lg:py-[120px] px-5 lg:px-[40px] grid grid-cols-12  gap-10 lg:gap-12 ">
      <div className="col-span-12 lg:col-span-5">
        <h3 className="font-medium text-center lg:text-left text-[40px] lg:text-[56px]">Impact</h3>
      </div>
      <div className="col-span-12 lg:col-span-7">
        <ul className="text-secondary flex flex-col font-medium text-2xl">
          <li className="py-6 border-b border-[#D1D1D6]">Increased confidence in managing workplace conflicts.</li>
          <li className="py-6 border-b border-[#D1D1D6]">Stronger trust and rapport within teams.</li>
          <li className="py-6">Measurable improvement in overall workplace communication.</li>
        </ul>
      </div>
    </section>
  );
};

export default Impact;

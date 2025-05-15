'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import Cover from '/public/image 20.png';
import { X } from 'lucide-react';

const Popup = ({ isOpen = false, setOpen }) => {
  return (
    <div className="fixed h-[450px] top-1/2 -translate-1/2 left-1/2 max-w-[830px] w-[80%]  bg-white rounded-3xl overflow-hidden z-50 grid grid-cols-12 ">
      {/* Close Button */}
      <button>
        <X />
      </button>
      <div className="col-span-5 h-full">
        <Image className="object-cover h-full w-full" src={Cover} />
      </div>
      <div className="col-span-7 py-6 px-10">
        <form className="space-y-6 text-base" action="#">
          <div>
            <label className="text-lg block mb-2 font-medium " htmlFor="name">
              Name
            </label>
            <input
              className="bg-[#F4F5F6] w-full placeholder:text-[#6E7381] placeholder:text-base rounded-[28px] border border-[#D1D1D6] p-4"
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label className="text-lg block mb-2 font-medium " htmlFor="Service">
              Service of Interest
            </label>
            <select
              defaultValue={'Select service'}
              className="bg-[#F4F5F6] w-full text-[#6E7381] placeholder:text-[#6E7381] placeholder:text-base rounded-[28px] border border-[#D1D1D6] p-4"
              name="Service"
              id="Service"
            >
              <option defaultValue={'Select service'} disabled>
                Select service
              </option>
            </select>
          </div>

          <div>
            <label className="text-lg block mb-2 font-medium " htmlFor="Email">
              Email
            </label>
            <input
              className="bg-[#F4F5F6] w-full placeholder:text-[#6E7381] placeholder:text-base rounded-[28px] border border-[#D1D1D6] p-4"
              type="email"
              id="Email"
              name="Email"
              placeholder="Enter your email"
            />
          </div>
          <button className="font-medium cursor-pointer text-lg bg-primary w-full rounded-[40px] py-[14px] px-6 text-white" type="submit">
            Book Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Popup;

'use client';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';

const Form = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [selectedCountry, setSelectedCountry] = useState({ code: '+1', name: 'United States' });
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const countryCodes = [
    { code: '+1', name: 'United States' },
    { code: '+44', name: 'United Kingdom' },
    { code: '+91', name: 'India' },
    { code: '+61', name: 'Australia' },
    { code: '+86', name: 'China' },
    { code: '+49', name: 'Germany' },
    { code: '+33', name: 'France' },
    { code: '+81', name: 'Japan' },
    { code: '+7', name: 'Russia' },
    { code: '+55', name: 'Brazil' },
    { code: '+52', name: 'Mexico' },
    { code: '+27', name: 'South Africa' },
  ];

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleToggleDropdown = e => {
    e.stopPropagation();
    setIsDropdownOpen(!isDropdownOpen);
  };

  const selectCountry = (country, e) => {
    e.stopPropagation();
    setSelectedCountry(country);
    setIsDropdownOpen(false);
  };

  return (
    <section className="px-4 py-[80px] relative z-10   bg-primary lg:py-[120px]">
      <div className={`w-full  text-white max-w-[900px] text-center mx-auto`}>
        <h2 className={`w-full lg:w-[90%] mx-auto  font-medium text-[40px] lg:text-[56px] leading-[120%] -tracking-[1.6px] `}>
          Not sure what you need? that’s where we come in
        </h2>

        <p className={` mt-6 text-left lg:text-center text-base lg:text-lg  leading-[140%] `}>
          Use the form below to tell us what’s going on, even if it’s only a starting point. We’ll read it, reflect on it and come back with
          a way forward.
        </p>
      </div>

      <div className="w-full mt-10 lg:mt-[80px] max-w-[900px] bg-white mx-auto border border-[#D1D1D6] rounded-3xl p-6">
        <form className="" action="#">
          <div className="grid grid-cols-1 gap-6">
            <div className="col-span-1">
              <label className="text-lg block mb-2 font-medium " htmlFor="name">
                Full name
              </label>
              <input
                className="bg-[#F4F5F6] w-full placeholder:text-[#6E7381] placeholder:text-base rounded-[28px] border border-[#D1D1D6] p-4"
                type="text"
                id="name"
                name="name"
                placeholder="Enter your full name"
              />
            </div>
          </div>

          <div className="grid mt-6 grid-cols-1 gap-6">
            <div>
              <div className="mb-6">
                <label className="text-lg block mb-2 font-medium " htmlFor="Email">
                  Email
                </label>
                <input
                  className="bg-[#F4F5F6] w-full placeholder:text-[#6E7381] placeholder:text-base rounded-[28px] border border-[#D1D1D6] p-4"
                  type="email"
                  id="Email"
                  name="Email"
                  placeholder="Enter your email address"
                />
              </div>

              <div className="">
                <p className="text-lg block mb-2 font-medium">Phone number</p>

                <div className="flex w-full p-1 rounded-full border border-gray-300 bg-[#F4F5F6] overflow-visible relative">
                  <div
                    className="flex items-center justify-center px-4 border-r border-gray-300 cursor-pointer h-12"
                    onClick={handleToggleDropdown}
                    ref={dropdownRef}
                  >
                    <span className="text-gray-600 font-medium">{selectedCountry.code}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <path
                        d="M14.625 6.75L9 12.375L3.375 6.75"
                        stroke="#6E7381"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>

                    {isDropdownOpen && (
                      <div className="absolute top-12 left-0 mt-1 w-64 max-h-60 overflow-y-auto bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                        {countryCodes.map(country => (
                          <div
                            key={country.code}
                            className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center"
                            onClick={e => selectCountry(country, e)}
                          >
                            <span className="font-medium w-12">{country.code}</span>
                            <span className="text-gray-700">{country.name}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <input
                    type="tel"
                    placeholder="Enter your phone number"
                    value={phoneNumber}
                    onChange={e => setPhoneNumber(e.target.value)}
                    className=" w-full px-2 focus:outline-0  placeholder:text-[#6E7381] placeholder:text-base rounded-[28px] "
                  />
                </div>
              </div>
            </div>
            <div>
              <div className="h-full ">
                <label className="text-lg block mb-2 font-medium " htmlFor="Email">
                  Your message/situation
                </label>
                <textarea
                  className="bg-[#F4F5F6]  w-full placeholder:text-[#6E7381] placeholder:text-base rounded-[28px] border border-[#D1D1D6] p-4"
                  type="text"
                  id="Message"
                  name="Message"
                  placeholder="Type your thoughts here..."
                  rows={6}
                />
                <button className="font-medium  mt-6 text-lg bg-primary w-full rounded-[40px] py-[15px] px-6 text-white" type="submit">
                  Start the conversation
                </button>
                <div className="flex items-center mb-3 mt-10 justify-center">
                  <Link className="text-[#FF634A] font-medium text-lg" href="/case-studies">
                    See our case studies
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Form;

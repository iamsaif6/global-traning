'use client';
import React, { useEffect, useRef, useState } from 'react';

const Header = () => {
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
    <header
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(62, 0, 101, 0.90) 5.68%, rgba(62, 0, 101, 0.31) 79.4%, rgba(255, 255, 255, 1) 100%)`,
        backgroundBlendMode: 'overlay',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      className="pt-[137px] gap-6 grid grid-cols-12 relative md:pt-[180px] gap-y-12 lg:gap-y-0  md:pb-[0px] px-5 md:px-[40px]"
    >
      <div className="text-center lg:text-center self-start pt-10 col-span-12 lg:col-span-5 relative z-10 ">
        <p className="text-white font-medium text-base">GET IN TOUCH</p>
        <h1 className="font-medium tracking-[-4%] leading-[120%] text-5xl md:[65px] lg:text-[68px] text-white">
          Let’s Start the <br /> Conversation
        </h1>
        <p className="text-white mt-[18px] md:mt-6 mb-[26px] md:mb-8  font-normal text-base md:text-lg">
          Have any question? We’re here to help you. Send us a message, and we’ll respond within 24 hours.
        </p>
      </div>
      <div className="col-span-12 lg:col-span-7">
        <div className="w-full max-w-[1130px] bg-white mx-auto border border-[#D1D1D6] rounded-3xl p-6">
          <form className="" action="#">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="col-span-1">
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

              <div className="col-span-1">
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
            </div>

            <div className="grid mt-6 grid-cols-1 lg:grid-cols-2 gap-6">
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
                    placeholder="Enter your email"
                  />
                </div>

                <div className="">
                  <p className="text-lg block mb-2 font-medium">Phone Number</p>

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

                {/* <div className="">
              <label className="text-lg block mb-2 font-medium " htmlFor="Email">
                Phone Number
              </label>
              <input
                className="bg-[#F4F5F6] w-full placeholder:text-[#6E7381] placeholder:text-base rounded-[28px] border border-[#D1D1D6] p-4"
                type="email"
                id="Email"
                name="Email"
                placeholder="Enter your email"
              />
            </div> */}
              </div>
              <div>
                <div className="h-full ">
                  <label className="text-lg block mb-2 font-medium " htmlFor="Email">
                    Message
                  </label>
                  <textarea
                    className="bg-[#F4F5F6]  w-full placeholder:text-[#6E7381] placeholder:text-base rounded-[28px] border border-[#D1D1D6] p-4"
                    type="text"
                    id="Message"
                    name="Message"
                    placeholder="Type your message"
                    rows={6}
                  />
                </div>
              </div>
            </div>
            <button
              className="font-semibold cursor-pointer  mt-6 text-lg bg-primary w-full rounded-[40px] py-[14px] px-6 text-white"
              type="submit"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </header>
  );
};

export default Header;

'use client';
import { Check, Loader2 } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import emailjs from '@emailjs/browser';

const Header = () => {
  const router = useRouter();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [selectedCountry, setSelectedCountry] = useState({ code: '+1', name: 'United States' });
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');

  const sendEmail = e => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(formRef.current);
    const templateParams = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: `${selectedCountry.code} ${phoneNumber}`,
      message: formData.get('message'),
    };

    emailjs.send('service_vq2ycta', 'template_va8udrg', templateParams, 'toRHu9L37wuWjLqkC').then(
      result => {
        console.log(result.text);
        e.target.reset();
        setPhoneNumber('');
        setLoading(false);
        router.push('/message-sent?from=contact');
      },
      error => {
        console.log(error.text);
        setSuccess('Failed to send email.');
        setLoading(false);
      },
    );
  };

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
      className="pt-[117px]  relative md:pt-[140px]   md:pb-[0px] px-5 md:px-[40px]"
    >
      <div className="gap-6 grid grid-cols-12 gap-y-12 lg:gap-y-0">
        <div className="text-center lg:text-center self-center col-span-12 lg:col-span-5 relative z-10 ">
          <p className="text-white font-medium text-base">GET IN TOUCH</p>
          <h1 className="font-medium tracking-[-4%] leading-[120%] text-5xl md:[65px] lg:text-[68px] text-white">
            Let’s start the <br /> conversation
          </h1>
          <p className="text-white text-left lg:text-center mt-[18px] md:mt-6 mb-[26px] md:mb-8  font-normal text-base md:text-lg">
            Have any questions? We’re here to help you. Send us a message, and we’ll respond within 24 hours.
          </p>
        </div>
        <div className="col-span-12 lg:col-span-7">
          <div className="w-full max-w-[1130px] bg-white mx-auto border border-[#D1D1D6] rounded-3xl p-6">
            <form ref={formRef} onSubmit={sendEmail}>
              <div className="grid grid-cols-1  lg:grid-cols-2 gap-6">
                <div className="col-span-1">
                  <div className="mb-6">
                    <label className="text-lg block mb-2 font-medium " htmlFor="name">
                      Name
                    </label>
                    <input
                      className="bg-[#F4F5F6] w-full placeholder:text-[#6E7381] placeholder:text-base rounded-[28px] border border-[#D1D1D6] p-4"
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Enter your name"
                      required
                    />
                  </div>

                  <div className="mb-6">
                    <label className="text-lg block mb-2 font-medium " htmlFor="email">
                      Email
                    </label>
                    <input
                      className="bg-[#F4F5F6] w-full placeholder:text-[#6E7381] placeholder:text-base rounded-[28px] border border-[#D1D1D6] p-4"
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  <div>
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
                          name="phone"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="">
                  <div className="h-full ">
                    <label className="text-lg block mb-2 font-medium " htmlFor="message">
                      Message
                    </label>
                    <textarea
                      className="bg-[#F4F5F6]  w-full placeholder:text-[#6E7381] placeholder:text-base rounded-[28px] border border-[#D1D1D6] p-4"
                      type="text"
                      id="message"
                      name="message"
                      placeholder="Type your message"
                      rows={11}
                      required
                    />
                  </div>
                </div>

                {/* <div className="col-span-1">
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
                </div> */}
              </div>

              <button
                className="font-semibold flex items-center justify-center cursor-pointer  mt-6 text-lg bg-primary w-full rounded-[40px] py-[14px] px-6 text-white"
                type="submit"
              >
                {loading ? (
                  <>
                    <Loader2 className="mr-2 animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  'Send message'
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="grid text-black mt-10 mb-10  grid-cols-3 gap-6  px-5 md:px-16 md:pb-[20px] ">
        <div className="col-span-3 lg:col-span-1 flex gap-5 items-center">
          <Check className="text-secondary flex-shrink-0" />
          <p className=" font-normal text-[15px]">
            <strong>Free initial consultation - </strong> No obligation discovery call to identify how our training can support your team’s
            growth and performance.
          </p>
        </div>

        <div className="col-span-3 lg:col-span-1 flex gap-5 items-center">
          <Check className="text-secondary flex-shrink-0" />
          <p className=" font-normal text-[15px]">
            <strong> Tailored learning, real impact - </strong> every programme is designed around your organisation’s needs — with clear
            outcomes and practical application from day one.
          </p>
        </div>

        <div className="col-span-3 lg:col-span-1 flex gap-5 items-center">
          <Check className="text-secondary flex-shrink-0" />
          <p className=" font-normal text-[15px]">
            <strong> Trusted by organisations nationwide - </strong> over 1,000 professionals trained from public sector teams to national
            brands, to deliver measurable change and lasting results.
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;

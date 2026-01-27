'use client';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const TrainingForm = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [selectedCountry, setSelectedCountry] = useState({ code: '+1', name: 'United States' });
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const formRef = useRef();
  const [loading, setLoading] = useState(false);

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

  const sendEmail = e => {
    e.preventDefault();
    setLoading(true);
    emailjs.sendForm('service_vq2ycta', 'template_va8udrg', formRef.current, 'toRHu9L37wuWjLqkC').then(
      result => {
        e.target.reset();
        setLoading(false);
      },
      error => {
        console.log(error.text);
        setLoading(false);
      },
    );
  };

  return (
    <section className="px-4 py-[80px] relative z-10   bg-primary lg:py-[120px]">
      <div className={`w-full  text-white max-w-[900px] text-center mx-auto`}>
        <h2 className={`w-full lg:w-[90%] mx-auto  font-medium text-[40px] lg:text-[56px] leading-[120%] -tracking-[1.6px] `}>
          Not sure what you need? That’s where we come in.
        </h2>

        <p className={` mt-6 text-left lg:text-center text-base lg:text-lg  leading-[140%] `}>
          Use the form below to tell us what’s going on, even if it’s only a starting point. We’ll read it, reflect on it and come back with
          a way forward.
        </p>
      </div>

      <div className="w-full mt-10 lg:mt-[80px] max-w-[900px] bg-white mx-auto border border-[#D1D1D6] rounded-3xl p-6">
        <form ref={formRef} onSubmit={sendEmail} className="">
          <div className="grid grid-cols-1 gap-6">
            <div className="col-span-1">
              <label className="text-lg block mb-2 font-medium" htmlFor="name">
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

            <div className="col-span-1">
              <label className="text-lg block mb-2 font-medium" htmlFor="organisation">
                Name of Organisation
              </label>
              <input
                className="bg-[#F4F5F6] w-full placeholder:text-[#6E7381] placeholder:text-base rounded-[28px] border border-[#D1D1D6] p-4"
                type="text"
                id="organisation"
                name="organisation"
                placeholder="Enter your organisation name"
                required
              />
            </div>

            <div className="col-span-1">
              <label className="text-lg block mb-2 font-medium" htmlFor="role">
                Your role within your organisation
              </label>
              <input
                className="bg-[#F4F5F6] w-full placeholder:text-[#6E7381] placeholder:text-base rounded-[28px] border border-[#D1D1D6] p-4"
                type="text"
                id="role"
                name="role"
                placeholder="Enter your role"
                required
              />
            </div>

            <div className="col-span-1">
              <label className="text-lg block mb-2 font-medium" htmlFor="contact_number">
                Contact Number
              </label>
              <input
                className="bg-[#F4F5F6] w-full placeholder:text-[#6E7381] placeholder:text-base rounded-[28px] border border-[#D1D1D6] p-4"
                type="tel"
                id="contact_number"
                name="contact_number"
                placeholder="Enter contact number"
                required
              />
            </div>

            <div className="col-span-1">
              <label className="text-lg block mb-2 font-medium" htmlFor="contact_email">
                Contact Email Address
              </label>
              <input
                className="bg-[#F4F5F6] w-full placeholder:text-[#6E7381] placeholder:text-base rounded-[28px] border border-[#D1D1D6] p-4"
                type="email"
                id="contact_email"
                name="contact_email"
                placeholder="Enter email address"
                required
              />
            </div>
          </div>

          <div className="grid mt-6 grid-cols-1 gap-6">
            <div>
              <label className="text-lg block mb-2 font-medium">
                Please outline the learning objectives that you would like to be met through this training. This can include any challenges
                you/ your team are currently facing that you would like this training to address or a particular topic that you would like
                the workshop to explore.
              </label>
              <textarea
                className="bg-[#F4F5F6] w-full placeholder:text-[#6E7381] placeholder:text-base rounded-[28px] border border-[#D1D1D6] p-4"
                name="learning_objectives"
                placeholder="Type here..."
                rows={6}
                required
              />
            </div>

            <div>
              <label className="text-lg block mb-2 font-medium">Who is this training for? Include approx. number of attendees.</label>
              <textarea
                className="bg-[#F4F5F6] w-full placeholder:text-[#6E7381] placeholder:text-base rounded-[28px] border border-[#D1D1D6] p-4"
                name="training_for"
                placeholder="Type here..."
                rows={4}
                required
              />
            </div>

            <div>
              <label className="text-lg block mb-2 font-medium">
                Do you have a date or range of dates in mind that you would like this training to take place? Please give details below
              </label>
              <textarea
                className="bg-[#F4F5F6] w-full placeholder:text-[#6E7381] placeholder:text-base rounded-[28px] border border-[#D1D1D6] p-4"
                name="dates"
                placeholder="Type here..."
                rows={3}
                required
              />
            </div>

            {/* Preferred timing */}
            <div>
              <label className="text-lg block mb-2 font-medium">What is your preferred timing for the workshop?</label>

              <div className="flex flex-col gap-3 pl-2">
                {['Morning Session', 'Afternoon Session', 'Whole Day', 'Series of Workshops'].map(option => (
                  <label key={option} className="flex items-center gap-3">
                    <input type="radio" name="timing" value={option} required />
                    {option}
                  </label>
                ))}
              </div>
            </div>

            {/* Delivery method */}
            <div>
              <label className="text-lg block mb-2 font-medium">Please specify how you would like the training to be delivered</label>

              <div className="flex flex-col gap-3 pl-2">
                {['In Person', 'Virtually', 'No preference'].map(option => (
                  <label key={option} className="flex items-center gap-3">
                    <input type="radio" name="delivery" value={option} required />
                    {option}
                  </label>
                ))}
              </div>
            </div>

            {/* Location */}
            <div>
              <label className="text-lg block mb-2 font-medium">Where would you like this training to take place?</label>

              <div className="flex flex-col gap-3 pl-2">
                {['Your Venue', 'Our Training Space in Finchley, North London', 'External Venue'].map(option => (
                  <label key={option} className="flex items-center gap-3">
                    <input type="radio" name="location" value={option} required />
                    {option}
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="text-lg block mb-2 font-medium">What would be a great outcome at the end of this training?</label>
              <textarea
                className="bg-[#F4F5F6] w-full placeholder:text-[#6E7381] placeholder:text-base rounded-[28px] border border-[#D1D1D6] p-4"
                name="great_outcome"
                placeholder="Type here..."
                rows={4}
                required
              />
            </div>

            <div>
              <label className="text-lg block mb-2 font-medium">How did you hear about Global Training?</label>
              <input
                className="bg-[#F4F5F6] w-full placeholder:text-[#6E7381] placeholder:text-base rounded-[28px] border border-[#D1D1D6] p-4"
                type="text"
                name="referral"
                placeholder="Type here..."
                required
              />
            </div>

            <button
              className="font-medium mt-6 text-lg bg-primary w-full rounded-[40px] py-[15px] px-6 text-white"
              type="submit"
              disabled={loading}
            >
              {loading ? 'Sending...' : 'Start the conversation'}
            </button>

            <div className="flex items-center mb-3 mt-10 justify-center">
              <Link className="text-[#FF634A] font-medium text-lg" href="/case-studies">
                See our case studies
              </Link>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default TrainingForm;

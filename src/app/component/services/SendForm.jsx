'use client';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const SendForm = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = e => {
    e.preventDefault();
    setLoading(true);

    console.log(formRef.current);

    emailjs.sendForm('service_vq2ycta', 'template_va8udrg', formRef.current, 'toRHu9L37wuWjLqkC').then(
      result => {
        console.log(result.text);
        e.target.reset();
        setLoading(false);
      },
      error => {
        console.log(error.text);
        setLoading(false);
      }
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
        <form ref={formRef} onSubmit={sendEmail}>
          <div className="grid grid-cols-1 gap-6">
            <div>
              <label className="text-lg block mb-2 font-medium" htmlFor="name">
                Full Name
              </label>
              <input
                className="bg-[#F4F5F6] w-full rounded-[28px] border border-[#D1D1D6] p-4 placeholder:text-[#6E7381]"
                type="text"
                id="name"
                name="name"
                placeholder="Enter your full name"
                required
              />
            </div>

            <div>
              <label className="text-lg block mb-2 font-medium" htmlFor="address">
                Address
              </label>
              <input
                className="bg-[#F4F5F6] w-full rounded-[28px] border border-[#D1D1D6] p-4 placeholder:text-[#6E7381]"
                type="text"
                id="address"
                name="address"
                placeholder="Enter your address"
                required
              />
            </div>

            <div>
              <label className="text-lg block mb-2 font-medium" htmlFor="postcode">
                Postcode
              </label>
              <input
                className="bg-[#F4F5F6] w-full rounded-[28px] border border-[#D1D1D6] p-4 placeholder:text-[#6E7381]"
                type="text"
                id="postcode"
                name="postcode"
                placeholder="Enter your postcode"
                required
              />
            </div>

            <div>
              <label className="text-lg block mb-2 font-medium" htmlFor="email">
                Email
              </label>
              <input
                className="bg-[#F4F5F6] w-full rounded-[28px] border border-[#D1D1D6] p-4 placeholder:text-[#6E7381]"
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email address"
                required
              />
            </div>

            <div>
              <label className="text-lg block mb-2 font-medium" htmlFor="mobile">
                Mobile Number
              </label>
              <input
                className="bg-[#F4F5F6] w-full rounded-[28px] border border-[#D1D1D6] p-4 placeholder:text-[#6E7381]"
                type="tel"
                id="mobile"
                name="mobile"
                placeholder="Enter your mobile number"
                required
              />
            </div>

            <div>
              <label className="text-lg block mb-2 font-medium">Date of Certificate</label>
              <input
                className="bg-[#F4F5F6] w-full rounded-[28px] border border-[#D1D1D6] p-4"
                type="date"
                name="certificate_date"
                required
              />
            </div>

            <div>
              <label className="text-lg block mb-2 font-medium">Awarding Bodies</label>
              <input
                className="bg-[#F4F5F6] w-full rounded-[28px] border border-[#D1D1D6] p-4"
                type="text"
                name="awarding_bodies"
                placeholder="Enter awarding bodies"
                required
              />
            </div>

            <div>
              <label className="text-lg block mb-2 font-medium">Accredited Mediator Status</label>
              <div className="flex gap-6">
                <label className="flex items-center gap-2">
                  <input type="radio" name="accredited" value="Yes" required />
                  Yes
                </label>
                <label className="flex items-center gap-2">
                  <input type="radio" name="accredited" value="No" required />
                  No
                </label>
              </div>
            </div>

            <div>
              <label className="text-lg block mb-2 font-medium">Experience of Mediation Practice</label>
              <textarea
                className="bg-[#F4F5F6] w-full rounded-[28px] border border-[#D1D1D6] p-4 placeholder:text-[#6E7381]"
                name="mediation_experience"
                rows={5}
                placeholder="Type here..."
                required
              />
            </div>

            <div>
              <label className="text-lg block mb-2 font-medium">Experience in SEND</label>
              <textarea
                className="bg-[#F4F5F6] w-full rounded-[28px] border border-[#D1D1D6] p-4 placeholder:text-[#6E7381]"
                name="send_experience"
                rows={5}
                placeholder="Type here..."
                required
              />
            </div>

            <div>
              <label className="text-lg block mb-2 font-medium">Equal Opportunities, Inclusion and Diversity in Mediations</label>
              <textarea
                className="bg-[#F4F5F6] w-full rounded-[28px] border border-[#D1D1D6] p-4 placeholder:text-[#6E7381]"
                name="edi_commitment"
                rows={5}
                placeholder="Type here..."
                required
              />
            </div>

            <div>
              <label className="text-lg block mb-2 font-medium">Reasons for Applying</label>
              <textarea
                className="bg-[#F4F5F6] w-full rounded-[28px] border border-[#D1D1D6] p-4 placeholder:text-[#6E7381]"
                name="reasons"
                rows={5}
                placeholder="Type here..."
                required
              />
            </div>

            <div>
              <label className="text-lg block mb-2 font-medium">Additional Relevant Information (optional)</label>
              <textarea
                className="bg-[#F4F5F6] w-full rounded-[28px] border border-[#D1D1D6] p-4 placeholder:text-[#6E7381]"
                name="additional_info"
                rows={5}
                placeholder="Type here..."
              />
            </div>

            <button
              className="font-medium mt-6 text-lg bg-primary w-full rounded-[40px] py-[15px] px-6 text-white"
              type="submit"
              disabled={loading}
            >
              {loading ? 'Sending...' : 'Submit Application'}
            </button>

            <div className="flex items-center mb-3 mt-5 justify-center">
              <Link className="text-[#FF634A] font-medium text-lg" href="/case-studies">
                See our case studies
              </Link>
            </div>
          </div>{' '}
        </form>
      </div>
    </section>
  );
};

export default SendForm;

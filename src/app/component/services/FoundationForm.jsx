'use client';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const FoundationForm = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = e => {
    e.preventDefault();
    setLoading(true);

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
          {' '}
          <div className="grid grid-cols-1 gap-6">
            <div>
              <label className="text-lg block mb-2 font-medium">Title</label>
              <input
                className="bg-[#F4F5F6] w-full rounded-[28px] border border-[#D1D1D6] p-4"
                type="text"
                name="title"
                placeholder="Mr / Ms / Dr / etc."
                required
              />
            </div>

            <div>
              <label className="text-lg block mb-2 font-medium">First Name</label>
              <input
                className="bg-[#F4F5F6] w-full rounded-[28px] border border-[#D1D1D6] p-4"
                type="text"
                name="first_name"
                placeholder="Enter your first name"
                required
              />
            </div>

            <div>
              <label className="text-lg block mb-2 font-medium">Surname</label>
              <input
                className="bg-[#F4F5F6] w-full rounded-[28px] border border-[#D1D1D6] p-4"
                type="text"
                name="surname"
                placeholder="Enter your surname"
                required
              />
            </div>

            <div>
              <label className="text-lg block mb-2 font-medium">Date of Birth</label>
              <input className="bg-[#F4F5F6] w-full rounded-[28px] border border-[#D1D1D6] p-4" type="date" name="dob" required />
            </div>

            <div>
              <label className="text-lg block mb-2 font-medium">Home Address</label>
              <textarea
                className="bg-[#F4F5F6] w-full rounded-[28px] border border-[#D1D1D6] p-4"
                name="address"
                rows={3}
                placeholder="Enter your full address"
                required
              />
            </div>

            <div>
              <label className="text-lg block mb-2 font-medium">Postcode</label>
              <input
                className="bg-[#F4F5F6] w-full rounded-[28px] border border-[#D1D1D6] p-4"
                type="text"
                name="postcode"
                placeholder="Enter your postcode"
                required
              />
            </div>

            <div>
              <label className="text-lg block mb-2 font-medium">Tel (day)</label>
              <input
                className="bg-[#F4F5F6] w-full rounded-[28px] border border-[#D1D1D6] p-4"
                type="tel"
                name="tel_day"
                placeholder="Enter daytime number"
                required
              />
            </div>

            <div>
              <label className="text-lg block mb-2 font-medium">Tel (evening)</label>
              <input
                className="bg-[#F4F5F6] w-full rounded-[28px] border border-[#D1D1D6] p-4"
                type="tel"
                name="tel_evening"
                placeholder="Enter evening number"
                required
              />
            </div>

            <div>
              <label className="text-lg block mb-2 font-medium">Mobile</label>
              <input
                className="bg-[#F4F5F6] w-full rounded-[28px] border border-[#D1D1D6] p-4"
                type="tel"
                name="mobile"
                placeholder="Enter your mobile number"
                required
              />
            </div>

            <div>
              <label className="text-lg block mb-2 font-medium">Email Address</label>
              <input
                className="bg-[#F4F5F6] w-full rounded-[28px] border border-[#D1D1D6] p-4"
                type="email"
                name="email"
                placeholder="Enter your email address"
                required
              />
            </div>

            <div>
              <label className="text-lg block mb-2 font-medium">Special needs or individual requirements?</label>
              <div className="flex gap-6">
                <label className="flex items-center gap-2">
                  <input type="radio" name="special_needs" value="Yes" required />
                  Yes
                </label>
                <label className="flex items-center gap-2">
                  <input type="radio" name="special_needs" value="No" required />
                  No
                </label>
              </div>
            </div>

            <div>
              <label className="text-lg block mb-2 font-medium">If YES, please give full details:</label>
              <textarea
                className="bg-[#F4F5F6] w-full rounded-[28px] border border-[#D1D1D6] p-4"
                name="special_needs_details"
                rows={4}
                placeholder="Type here..."
              />
            </div>

            <div>
              <label className="text-lg block mb-2 font-medium">
                About you — Why are you interested in training as a mediator and how will you use the training?
              </label>
              <textarea
                className="bg-[#F4F5F6] w-full rounded-[28px] border border-[#D1D1D6] p-4"
                name="about_you"
                rows={5}
                placeholder="Type here..."
                required
              />
            </div>

            <div className="flex items-start gap-2 mt-4 mb-4">
              {/* Consent / Terms block */}
              <div className="mt-4">
                <label className="text-lg block mb-3 font-medium">
                  Please confirm that you have read and agree to the following information:
                </label>

                <div className="bg-[#F4F5F6] border border-[#D1D1D6] rounded-2xl p-4 max-h-52 overflow-y-auto text-sm leading-6 text-[#1F2937]">
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      Full details of course fees are found in the course prospectus at:&nbsp;
                      <a
                        href="https://www.globalmediation.co.uk/mediationfoundationcourse"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#0E7490] underline"
                      >
                        www.globalmediation.co.uk/mediationfoundationcourse
                      </a>
                    </li>
                    <li>Payment of the deposit is required to confirm place.</li>
                    <li>Full payment is required 14 days prior to commencement of the course.</li>
                    <li>Fees are refundable in full if cancelled 28 days prior to commencement of the course.</li>
                    <li>50% of the fees are refundable if cancelled 7 days prior to commencement of the course.</li>
                    <li>In exceptional circumstances deferment of date may be agreed at the discretion of Global Mediation.</li>
                    <li>Travel and accommodation expenses are not included.</li>
                    <li>Please note that this information is for guidance only, and is subject to change.</li>
                  </ul>
                </div>

                <div className="flex items-start gap-3 mt-4">
                  <input
                    id="confirm_terms"
                    name="confirm_terms"
                    type="checkbox"
                    required
                    className="mt-1 h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                  />
                  <label htmlFor="confirm_terms" className="text-base">
                    I confirm that I have read and agree to the information above.
                  </label>
                </div>

                {/* optional helper text */}
                <p className="mt-3 text-xs text-[#6B7280]">
                  By ticking this box you confirm you understand the booking and cancellation terms. Please retain a copy of this
                  information for your records.
                </p>
              </div>
            </div>

            <div>
              <label className="text-lg block mb-2 font-medium">Signed (type your name)</label>
              <input
                className="bg-[#F4F5F6] w-full rounded-[28px] border border-[#D1D1D6] p-4"
                type="text"
                name="signature"
                placeholder="Enter your full name"
                required
              />
            </div>

            <div>
              <label className="text-lg block mb-2 font-medium">Date</label>
              <input
                className="bg-[#F4F5F6] w-full rounded-[28px] border border-[#D1D1D6] p-4"
                type="date"
                name="signature_date"
                required
              />
            </div>

            <button
              className="font-medium mt-6 text-lg bg-primary w-full rounded-[40px] py-[15px] px-6 text-white"
              type="submit"
              disabled={loading}
            >
              {loading ? 'Sending...' : 'Submit Application'}
            </button>
          </div>{' '}
        </form>
      </div>
    </section>
  );
};

export default FoundationForm;

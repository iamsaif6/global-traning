'use client';
import { Mail, Phone } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import logo from '/public/trainning_logo.png';
import React from 'react';

const Footer = () => {
  const pathname = usePathname();
  return (
    <>
      {/* CTA */}

      {pathname !== '/services' && !pathname.includes('training') && (
        <div className=" rounded-3xl mt-16  text-center bg-secondary text-[#FCFCFD] py-[60px] lg:py-[80px] px-6 lg:px-[60px] w-[90%] max-w-[1100px] mx-auto">
          {pathname == '/courageous-conversations-training' ? (
            <div>
              <h4 className="text-[32px] lg:text-[40px] font-medium mb-4">Book a discovery call</h4>
              <p className="text-base lg:text-lg">Join the global training newsletter</p>
              <div className="mt-10 flex items-center justify-center">
                <button className="py-4 lg:py-[18px] cursor-pointer text-sm px-5 lg:px-10 bg-primary text-white rounded-[40px]">
                  Book now
                </button>
              </div>
            </div>
          ) : pathname !== '/contact-us' ? (
            <div>
              <h4 className="text-[32px] lg:text-[40px] font-medium mb-4">
                Let’s start the conversation with a free Initial consultation.
              </h4>
              {/* <p className="text-base lg:text-lg">Join our community</p> */}
              <div className="mt-10 flex items-center justify-center">
                <form className="flex flex-col lg:flex-row items-center gap-4 lg:gap-3">
                  <input
                    required
                    type="email"
                    placeholder="Enter your email"
                    className="py-3 lg:py-4 bg-white max-w-[90%] outline-0 text-black px-5 lg:px-6 rounded-[40px] placeholder:text-[#6E7381]"
                  />
                  <button
                    type="submit"
                    className="py-3 lg:py-[14px] font-semibold cursor-pointer text-lg px-5 lg:px-10 bg-primary text-white rounded-[40px]"
                  >
                    Join our community
                  </button>
                </form>
              </div>
            </div>
          ) : (
            <div className="z-10 relative">
              <div className="max-w-[950px] mx-auto">
                <h1 className="text-[32px] lg:text-[40px] font-medium mb-4">Let’s find a way forward, together</h1>
                <p className="text-base lg:text-lg w-full lg:w-[80%] mx-auto ">
                  For more information about our services, team, training programs, or career opportunities, get in touch with us .
                </p>
              </div>
              <div className={`mt-8 md:max-w-[750px] grid grid-cols-1 md:grid-cols-2  gap-4  mx-auto`}>
                <button className="bg-primary font-semibold text-[#FCFCFD] px-10 py-3 rounded-[40px] text-base md:text-lg">
                  <Link className="flex items-center justify-center gap-2 w-full text-center" href="mailto:enquiries@globaltraining.uk">
                    <Mail size={20} />
                    enquiries@globaltraining.uk
                  </Link>
                </button>
                <button className="font-semibold border border-white text-base md:text-lg text-white px-6 py-3 rounded-[40px]">
                  <Link className=" w-full text-center flex items-center gap-2 justify-center" href="tel:020 8441 1355">
                    <Phone size={20} />
                    020 8441 1355
                  </Link>
                </button>
              </div>
            </div>
          )}
        </div>
      )}
      <footer
        className={`bg-[#F8F9FA] relative text-black ${
          pathname == '/services' || pathname.includes('training') ? ' mt-0' : 'mt-[100px]'
        } pb-[24px] px-5 md:px-16 lg:pt-[120px] md:pt-[120px] pt-[80px]   `}
      >
        <div className="flex flex-col md:flex-row gap-12 relative z-10 justify-between pb-[70px] border-[#3F3F46] border-b">
          <div>
            <Link href="/" className="flex items-center">
              <Image className="max-w-[150px] w-full md:max-w-[250px]" alt="Mediation Logo" width={250} height={250} src={logo} />
            </Link>
            <div className="mt-8 space-y-6">
              <p>
                <span className="font-arial text-sm ">Address:</span>
                <span className="block mt-1 leading-[140%] text-sm md:text-lg">
                  Molteno House, 302 regents park road, <br /> Finchley, N3 2JX
                </span>
              </p>
              <p>
                <span className="font-arial text-sm ">Contact:</span>
                <a href="tel:020 8441 1355" className="block mt-1 leading-[140%] text-sm md:text-lg">
                  020 8441 1355
                </a>
                <a href="mailto:enquiries@globaltraining.uk">enquiries@globaltraining.uk</a>
              </p>
            </div>
          </div>
          <div className="w-[240px] space-y-[6px] flex flex-col text-sm md:text-lg font-medium">
            <Link href="/">Home</Link>
            <Link className="py-[6px] block" href="/about-us">
              About us
            </Link>
            {/* <Link className="py-[6px] block" href="/training">
            Mediation training
          </Link> */}
            <Link className="py-[6px] block" href="/case-studies">
              Case studies
            </Link>
            <Link className="py-[6px] block" href="/blogs">
              Services
            </Link>
            <Link className="py-[6px] block" href="/about-us">
              Contact
            </Link>
          </div>
        </div>
        {/* Footer Bottom */}
        <div className="mt-8 font-normal relative z-10 gap-8  text-sm grid grid-cols-12">
          <p className="col-span-7">© 2024 Global Training Group Ltd. All rights reserved.</p>
          <div className="flex col-span-5 flex-col md:flex-row justify-baseline lg:justify-end gap-2 md:gap-6">
            <Link className="" href={'/privacy-policy'}>
              Privacy policy
            </Link>
            <Link className="" href={'/Compliment-Policy'}>
              Terms of service
            </Link>
          </div>
        </div>
        {/* Before after blob */}
        <svg
          className=" absolute -translate-y-[113%] w-[200px] h-[200px] md:w-[250px] md:h-[258px]  bottom-30 md:bottom-0 right-[19%]"
          xmlns="http://www.w3.org/2000/svg"
          width="280"
          height="288"
          viewBox="0 0 280 288"
          fill="none"
        >
          <path
            d="M138.031 287.77H279.953V147.626C279.989 146.242 279.999 145.012 279.999 143.873C280.078 124.622 276.353 105.545 269.038 87.7378C261.743 70.0946 251.681 54.713 239.184 42.032C226.686 29.3509 211.585 19.1867 194.351 11.7894C177.097 4.38829 158.511 0.59571 139.736 0.645006C114.354 0.645006 90.6766 6.98042 69.3271 19.4624C47.9776 31.9443 30.8807 49.3935 18.5621 71.3198C6.24352 93.2462 0 117.628 0 143.873C0 170.119 6.24863 194.592 18.5621 216.59C30.8756 238.588 47.9521 256.139 69.3169 268.723C90.2018 281.016 113.313 287.388 138.031 287.673V287.77Z"
            fill="#43006a37"
          />
        </svg>
        <svg
          className=" absolute  w-[200px] h-[200px] md:w-[250px] md:h-[258px] bottom-30 md:bottom-0 right-[5%]"
          xmlns="http://www.w3.org/2000/svg"
          width="280"
          height="288"
          viewBox="0 0 280 288"
          fill="none"
        >
          <path
            d="M210.704 19.6995C189.826 7.39956 166.712 1.03256 141.984 0.756845V0.644531H0.0418054V140.79C0.0418054 142.173 0.000957796 143.399 0.000957796 144.537C-0.0687821 163.801 3.6706 182.888 11.004 200.701C18.3003 218.352 28.3639 233.736 40.8477 246.419C53.3314 259.102 68.46 269.268 85.6922 276.666C102.926 284.065 121.488 287.867 140.243 287.838C165.619 287.838 189.31 281.501 210.663 269.018C232.015 256.534 249.115 239.082 261.43 217.163C273.745 195.243 280 170.837 280 144.583C280 118.329 273.766 93.8159 261.445 71.8608C249.125 49.9056 232.056 32.2854 210.704 19.6995Z"
            fill="#43006a37"
          />
        </svg>
      </footer>
    </>
  );
};

export default Footer;

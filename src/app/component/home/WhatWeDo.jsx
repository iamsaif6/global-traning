import React from 'react';
import cover from '/public/Our-approch_cover.jpg';
import Image from 'next/image';
import Icon from '/public/svg/Repeat.svg';
import Eye from '/public/svg/Eye.svg';

const WhatWeDo = () => {
  return (
    <section className="py-[60px] lg:py-[120px] bg-primary items-center px-4 lg:px-[40px] grid grid-cols-2 gap-10 lg:gap-[150px]">
      <div className="col-span-2 lg:col-span-1">
        <div className={`w-full text-center lg:text-left text-white mx-auto max-w-[660px]`}>
          <p className="mb-3 text-white font-medium">OUR APPROACH</p>
          {/* <h3 className="  font-medium text-[40px] lg:text-[56px] leading-[120%] -tracking-[1.6px]">Experience, Engage, Evolve!</h3> */}

          <div className="h-[420px] mt-10 block lg:hidden mx-auto lg:mx-0 rounded-3xl overflow-hidden col-span-2 lg:col-span-1">
            <Image alt="What we do cover" className="w-full h-full object-cover" src={cover} height={200} width={400} />
          </div>

          <p className=" mt-10 text-left text-base lg:text-lg font-normal leading-[140%]">
            At Global Training, we create learning experiences that are immersive, relational and real.
            <br /> <br />
            We draw on theatre-based methods, coaching practice, live facilitation and leadership frameworks — blending insight with
            imagination, structure with compassion and theory with action.
            <br /> <br />
            We meet people where they are, and support them to think differently, build new skills and grow with confidence.
            <br /> <br />
            Because connection creates change — and when people grow together, they go further together.
          </p>

          {/* <div className="text-[#FCFCFD] space-y-[30px] mt-10">
            <div className="flex gap-6">
              <div className="mt-2">
                <Icon />
              </div>
              <div>
                <h4 className="text-[28px] font-medium mb-3">Immersive</h4>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="mt-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="22" viewBox="0 0 30 22" fill="none">
                  <path
                    d="M29.6667 20.3335C29.6667 20.6871 29.5262 21.0263 29.2761 21.2763C29.0261 21.5264 28.687 21.6668 28.3333 21.6668H12.3333C11.9797 21.6668 11.6406 21.5264 11.3905 21.2763C11.1405 21.0263 11 20.6871 11 20.3335C11 18.2118 11.8429 16.1769 13.3431 14.6766C14.8434 13.1764 16.8783 12.3335 19 12.3335H21.6667C23.7884 12.3335 25.8232 13.1764 27.3235 14.6766C28.8238 16.1769 29.6667 18.2118 29.6667 20.3335ZM20.3333 0.333496C19.2785 0.333496 18.2474 0.64629 17.3703 1.23232C16.4932 1.81836 15.8096 2.65131 15.406 3.62585C15.0023 4.60039 14.8967 5.67275 15.1025 6.70731C15.3083 7.74188 15.8162 8.69219 16.5621 9.43807C17.308 10.1839 18.2583 10.6919 19.2929 10.8977C20.3274 11.1035 21.3998 10.9979 22.3743 10.5942C23.3488 10.1905 24.1818 9.50693 24.7678 8.62987C25.3539 7.75281 25.6667 6.72166 25.6667 5.66683C25.6667 4.25234 25.1048 2.89579 24.1046 1.89559C23.1044 0.895399 21.7478 0.333496 20.3333 0.333496ZM8.33333 0.333496C7.2785 0.333496 6.24735 0.64629 5.37029 1.23232C4.49323 1.81836 3.80964 2.65131 3.40597 3.62585C3.00231 4.60039 2.89669 5.67275 3.10248 6.70731C3.30827 7.74188 3.81622 8.69219 4.5621 9.43807C5.30798 10.1839 6.25829 10.6919 7.29285 10.8977C8.32742 11.1035 9.39977 10.9979 10.3743 10.5942C11.3489 10.1905 12.1818 9.50693 12.7678 8.62987C13.3539 7.75281 13.6667 6.72166 13.6667 5.66683C13.6667 4.25234 13.1048 2.89579 12.1046 1.89559C11.1044 0.895399 9.74782 0.333496 8.33333 0.333496ZM8.33333 20.3335C8.33135 18.933 8.60727 17.546 9.14512 16.2529C9.68297 14.9597 10.4721 13.7862 11.4667 12.8002C10.6527 12.4929 9.79003 12.3348 8.92 12.3335H7.74667C5.78161 12.337 3.89805 13.1192 2.50854 14.5087C1.11903 15.8982 0.336857 17.7818 0.333332 19.7468V20.3335C0.333332 20.6871 0.473808 21.0263 0.723856 21.2763C0.973905 21.5264 1.31304 21.6668 1.66667 21.6668H8.57333C8.4181 21.2393 8.33694 20.7884 8.33333 20.3335Z"
                    fill="#FCFCFD"
                  />
                </svg>
              </div>
              <div>
                <h4 className="text-[28px] font-medium mb-3">Relational</h4>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="mt-2">
                <Eye />
              </div>
              <div>
                <h4 className="text-[28px] font-medium mb-3">Real</h4>
              </div>
            </div>
          </div> */}
        </div>
      </div>
      <div className=" hidden lg:block h-full mx-auto lg:mx-0 rounded-3xl overflow-hidden col-span-2 lg:col-span-1">
        <Image alt="What we do cover" className="w-full max-h-[600px] h-full object-cover" src={cover} height={200} width={400} />
      </div>
    </section>
  );
};

export default WhatWeDo;

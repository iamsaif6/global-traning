import React from 'react';

const CaseStudies = () => {
  return (
    <div>
      <header
        style={{
          backgroundImage: `url('/AdobeStock_604839762.jpg'), linear-gradient(to right, #350b50 0%, rgba(62, 0, 101, 0.20) 100%)`,
          backgroundBlendMode: 'overlay',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        className="pt-[187px] relative md:pt-[238px] pb-[176px] md:pb-[203px] px-5 md:px-[60px]"
      >
        <div className="w-full relative z-10 lg:max-w-[80%]">
          <h1 className="font-semibold tracking-[-4%] leading-[120%] text-5xl md:[65px] lg:text-[84px] text-white">Case Studies</h1>
          <p className="text-white mt-[18px] md:mt-6 mb-[26px] md:mb-8 w-[70%] font-normal text-sm md:text-lg">
            Real-world examples of transformation.
          </p>
        </div>
      </header>

      <section className="py-[120px] px-[40px]">
        <div className="">
          {[1, 2, 3, 4].map((item, index) => {
            return (
              <div
                className={`${
                  index != 1 ? 'border-b border-[#D1D1D6]' : ''
                } grid pb-[60px] border-b border-[#D1D1D6] mb-[60px] grid-cols-12 gap-[60px]`}
              >
                <div className="col-span-4 bg-[#F4F5F6] rounded-3xl flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="154" height="60" viewBox="0 0 154 60" fill="none">
                    <g clip-path="url(#clip0_1_3733)">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M153.982 59.9547V0.0461426H0.0214844V59.9547H153.982ZM15.0769 5.82528H31.8125L42.091 39.2654H42.2338L49.2744 5.82528H61.9234L51.2945 54.0475H34.6158L24.1289 20.6799H23.987L17.012 54.0475H4.36307L15.0769 5.82528ZM144.979 16.7426C142.392 15.572 138.87 14.5378 133.915 14.5378C128.601 14.5378 124.288 15.2915 124.288 19.1656C124.288 25.9983 143.761 23.4482 143.761 38.0956C143.761 51.4258 130.894 54.8822 119.256 54.8822C114.084 54.8822 108.117 53.7031 103.739 52.3867L106.9 42.5786C109.552 44.2402 114.876 45.3452 119.256 45.3452C123.429 45.3452 129.96 44.5838 129.96 39.6107C129.96 31.8701 110.487 34.7731 110.487 21.1709C110.487 8.73 121.843 4.99993 132.84 4.99993C139.022 4.99993 144.837 5.62568 148.217 7.14078L144.979 16.7426ZM66.8782 5.82528H80.3103L76.3656 24.2735H92.241L96.1971 5.82528H109.628L99.208 54.0475H85.7767L90.2305 33.3945H74.3446L69.89 54.0475H56.457L66.8782 5.82528Z"
                        fill="#007AC2"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_3733">
                        <rect width="154" height="60" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div className="col-span-8">
                  <p className="text-[#794D94] font-medium text-base">December 4, 2024</p>
                  <h3 className="text-[#18181B] font-medium text-[40px] mt-2 mb-4">Transforming Leadership at NHS</h3>
                  <p className="text-[#6E7381] font-normal text-lg">
                    Through a customized leadership program, we helped NHS leaders build emotional intelligence, enhance decision-making
                    under pressure, and foster stronger team collaboration.
                  </p>
                  <p className="my-[44px]">
                    <span className="text-base text-[#6E7381]">
                      “Proin venenatis, nunc nec facilisis vehicula, mauris velit dictum ex, sit amet fermentum orci risus ac nisi.”
                    </span>
                    <span className="text-sm mt-4 text-[#18181B] font-medium block">Richard Carter</span>
                    <span className="text-[#6E7381] font-sm">HR Manager at NHS</span>
                  </p>
                  <button className="border rounded-[40px] py-3 px-6 cursor-pointer hover:bg-secondary hover:text-white duration-200">
                    Read now
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;

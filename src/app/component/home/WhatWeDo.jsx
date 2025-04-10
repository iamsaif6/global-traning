import React from 'react';
import SectionTitle from '../shared/SectionTitle';
import Button from '../shared/Button';
import cover from '/public/Image.png';
import Image from 'next/image';

const WhatWeDo = () => {
  return (
    <section className="py-[60px] lg:py-[120px] bg-primary items-center px-4 lg:px-[40px] grid grid-cols-2 gap-10 lg:gap-5">
      <div className="col-span-2 lg:col-span-1">
        <div className={`w-full text-center lg:text-left text-white max-w-[660px]`}>
          <p className="mb-3 text-white font-medium">WHAT WE DO</p>
          <h1 className="  font-medium text-[40px] lg:text-[56px] leading-[120%] -tracking-[1.6px]">Experience, Engage, Evolve</h1>
          {/* <p className=" mt-10 text-lg font-normal leading-[140%]">
            We believe in <strong>practice-based, experiential learning</strong> that goes beyond theory. By focusing on real-world
            scenarios, interactive role-plays, and collaborative exercises, we help teams develop <strong>practical skills</strong> that
            drive <strong>measurable results.</strong>
            <br /> <br />
            Our approach centers on three core elements:
          </p> */}

          <p className=" mt-10 text-base lg:text-lg font-normal leading-[140%]">
            At Global Training, we create learning experiences that are immersive, relational and real.
            <br /> <br />
            We draw on theatre-based methods, coaching practice, live facilitation and leadership frameworks — blending insight with
            imagination, structure with compassion and theory with action.
            <br /> <br />
            We meet people where they are, and support them to think differently, build new skills and grow with confidence.
            <br /> <br />
            Because connection creates change — and when people grow together, they go further together.
          </p>

          {/* <div className="text-[#FCFCFD] space-y-[36px] mt-10">
            <div className="flex gap-6">
              <div className="mt-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                  <path
                    d="M15 0C6.72 0 0 6.72 0 15C0 23.28 6.72 30 15 30C23.28 30 30 23.28 30 15C30 6.72 23.28 0 15 0ZM22.8 8.18L19.03 17.32C18.7199 18.1 18.0999 18.72 17.32 19.03L8.18 22.8C7.56 23.05 6.95 22.44 7.2 21.82L10.97 12.68C11.2801 11.9 11.9001 11.28 12.68 10.97L21.82 7.2C22.44 6.95 23.05 7.56 22.8 8.18Z"
                    fill="#FCFCFD"
                  />
                  <path
                    d="M15 17C16.1046 17 17 16.1046 17 15C17 13.8954 16.1046 13 15 13C13.8954 13 13 13.8954 13 15C13 16.1046 13.8954 17 15 17Z"
                    fill="#FCFCFD"
                  />
                </svg>
              </div>
              <div>
                <h4 className="text-[28px] font-medium mb-3">Purpose</h4>
                <p className="text-lg font-normal leading-[140%]">The ‘why’ behind every action and decision.</p>
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
                <h4 className="text-[28px] font-medium mb-3">People</h4>
                <p className="text-lg font-normal leading-[140%]">The heart of every organization, empowered to lead and innovate.</p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="mt-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                  <path
                    d="M27.1647 20.8998C26.7486 20.6713 26.2261 20.8233 25.9977 21.2392C25.7692 21.6552 25.9211 22.1777 26.3371 22.4062C27.3608 22.9686 27.9479 23.592 27.9479 24.1167C27.9479 24.7584 27.0387 25.753 24.4868 26.62C21.9656 27.4766 18.5965 27.9483 15 27.9483C11.4035 27.9483 8.03436 27.4766 5.51324 26.62C2.9613 25.7531 2.05208 24.7584 2.05208 24.1167C2.05208 23.592 2.63921 22.9686 3.66289 22.4062C4.07889 22.1777 4.23083 21.6552 4.00229 21.2392C3.77375 20.8233 3.25143 20.6713 2.83532 20.8998C1.69395 21.5269 0.333332 22.594 0.333332 24.1167C0.333332 25.284 1.1361 26.9482 4.96032 28.2475C7.65486 29.1629 11.2204 29.6671 15 29.6671C18.7796 29.6671 22.3451 29.1629 25.0397 28.2475C28.8639 26.9482 29.6667 25.284 29.6667 24.1167C29.6667 22.594 28.306 21.5269 27.1647 20.8998Z"
                    fill="#FCFCFD"
                  />
                  <path
                    d="M8.5115 25.3775C10.256 25.8703 12.5602 26.1417 14.9997 26.1417C17.4391 26.1417 19.7433 25.8703 21.4878 25.3775C23.6221 24.7746 24.7043 23.9018 24.7043 22.7836C24.7043 21.6653 23.6221 20.7926 21.4878 20.1897C21.014 20.0559 20.4988 19.9385 19.9509 19.8384C19.6534 20.3524 19.3417 20.8815 19.0158 21.4258C19.6221 21.5168 20.1914 21.6283 20.7084 21.7601C22.2791 22.1601 22.853 22.6105 22.9709 22.7836C22.8529 22.9568 22.2792 23.4072 20.7085 23.8072C19.2218 24.1858 17.3091 24.4018 15.2945 24.4211C15.197 24.4284 15.0987 24.4324 14.9997 24.4324C14.9006 24.4324 14.8024 24.4284 14.7047 24.4211C12.6902 24.4018 10.7774 24.1859 9.29078 23.8072C7.72007 23.4072 7.1463 22.9568 7.02833 22.7836C7.1463 22.6105 7.72013 22.1601 9.29084 21.7601C9.80784 21.6284 10.3771 21.5168 10.9836 21.4258C10.6576 20.8815 10.3459 20.3523 10.0484 19.8384C9.50058 19.9386 8.98525 20.0559 8.5115 20.1897C6.37721 20.7926 5.29503 21.6654 5.29503 22.7836C5.29503 23.9018 6.37721 24.7745 8.5115 25.3775Z"
                    fill="#FCFCFD"
                  />
                  <path
                    d="M15.0001 22.7136C15.7652 22.7136 16.4601 22.3238 16.8591 21.6708C19.6556 17.0957 22.9889 11.0659 22.9889 8.32219C22.9889 3.9172 19.4052 0.333496 15.0001 0.333496C10.5951 0.333496 7.01139 3.9172 7.01139 8.32219C7.01139 11.0659 10.3448 17.0957 13.1411 21.6708C13.5402 22.3238 14.2352 22.7136 15.0001 22.7136ZM11.7891 7.77368C11.7891 6.00319 13.2296 4.56277 15.0001 4.56277C16.7707 4.56277 18.2112 6.00319 18.2112 7.77368C18.2112 9.54422 16.7707 10.9846 15.0001 10.9846C13.2296 10.9846 11.7891 9.54428 11.7891 7.77368Z"
                    fill="#FCFCFD"
                  />
                </svg>
              </div>
              <div>
                <h4 className="text-[28px] font-medium mb-3">Place</h4>
                <p className="text-lg font-normal leading-[140%]">A sense of belonging that fosters unity and success.</p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
      <div className="max-h-[580px] rounded-3xl overflow-hidden col-span-2 lg:col-span-1">
        <Image className="w-full h-full object-cover" src={cover} height={200} width={400} />
      </div>
    </section>
  );
};

export default WhatWeDo;

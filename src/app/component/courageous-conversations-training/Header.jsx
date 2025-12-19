import React from 'react';

const Header = ({ title = ' Courageous Conversations Training', cover }) => {
  const slug = title;
  const decodedTitle = decodeURIComponent(slug);
  return (
    // <header
    //   style={{
    //     backgroundImage: `linear-gradient(to bottom, rgba(62, 0, 101, 0.90) 15.68%, rgba(62, 0, 101, 0.31) 69.4%, rgba(255, 255, 255, 1) 100%)`,
    //     backgroundBlendMode: 'overlay',
    //     backgroundSize: 'cover',
    //     backgroundPosition: 'center',
    //   }}
    //   className="pt-[187px] relative md:pt-[238px] pb-[0px] lg:pb-[203px] px-5 md:px-[60px]"
    // >
    //   <div className="w-full relative z-10   mx-auto text-center">
    //     <h1 className="font-medium text-wrap tracking-[-4%] leading-[120%] text-5xl  lg:text-[68px] text-[#FCFCFD]">{decodedTitle}</h1>
    //   </div>
    // </header>

    <header
      style={{
        backgroundImage: `linear-gradient(to right, #3E0065CC, #3E006500),url('${cover.src}')`,

        backgroundSize: 'cover',
        backgroundPosition: 'top',
      }}
      className="pt-[187px] max-h-[1050px]  h-screen custom-gradient-bg bg-[center] sm:bg-[center_top] lg:bg-bottom max-sm:bg-[65%_center] relative md:pt-[238px] flex items-center pb-[176px] md:pb-[203px] px-5 md:px-[60px]"
    >
      <div className="w-full  flex items-center  text-left lg:pl-5 relative z-10 lg:max-w-[90vw] mx-auto">
        <div className="w-full relative z-10  mx-auto text-center">
          <h1 className="font-medium text-center mx-auto tracking-[-4%] max-w-[900px] 2xl:max-w-[90%] leading-[120%] text-5xl md:text-[65px] xl:text-[4vw]  ">
            {decodedTitle}
          </h1>
        </div>
      </div>
      {/* <Popup setOpen={setOpen} isOpen={open} /> */}
    </header>
  );
};

export default Header;

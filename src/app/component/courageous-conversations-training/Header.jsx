import React from 'react';

const Header = ({ title = ' Courageous Conversations Training' }) => {
  const slug = title;
  const decodedTitle = decodeURIComponent(slug);
  return (
    <header
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(62, 0, 101, 0.90) 15.68%, rgba(62, 0, 101, 0.31) 69.4%, rgba(255, 255, 255, 1) 100%)`,
        backgroundBlendMode: 'overlay',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      className="pt-[187px] relative md:pt-[238px] pb-[0px] lg:pb-[203px] px-5 md:px-[60px]"
    >
      <div className="w-full relative z-10   mx-auto text-center">
        <h1 className="font-medium text-wrap tracking-[-4%] leading-[120%] text-5xl  lg:text-[68px] text-[#FCFCFD]">{decodedTitle}</h1>
      </div>
    </header>
  );
};

export default Header;

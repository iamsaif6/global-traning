'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Button from '../shared/Button';
import logo from '/public/trainning_logo.png';
import Image from 'next/image';

//TODO : Remove MegaMenu if there is none at end of project

const navLinks = [
  {
    href: '/services',
    title: 'What we do',
  },
  {
    href: '/training',
    title: 'Training & Courses',
  },
  {
    href: '/about-us',
    title: 'About us',
  },

  {
    href: '/case-studies',
    title: 'Case studies',
  },

  {
    href: '/blogs',
    title: 'Insights',
  },

  {
    href: '/now-playing',
    title: 'Now Playing',
  },

  // {
  //   href: '/our-thinking',
  //   title: 'Our Thinking',
  // },
];

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState('Service');
  const [menuHeight, setMenuHeight] = useState(0);
  const menuRef = React.useRef(null);
  const mobileMenuRef = React.useRef(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > window.innerHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate the height of the menu when it's opened
  React.useEffect(() => {
    if (menuRef.current && activeMenu) {
      setMenuHeight(menuRef.current.scrollHeight);
    } else {
      setMenuHeight(0);
    }
  }, [activeMenu, activeSubmenu]);

  // Calculate the height of the menu when it's opened
  React.useEffect(() => {
    if (mobileMenuRef.current && mobileMenuOpen) {
      setMenuHeight(menuRef.current.scrollHeight);
    } else {
      setMenuHeight(0);
    }
  }, [mobileMenuOpen]);

  const toggleMobileMenu = e => {
    e.stopPropagation();
    setMobileMenuOpen(prev => !prev);
    setMobileSubmenuOpen(false);
  };

  const toggleMobileSubmenu = linkTitle => {
    if (mobileSubmenuOpen === linkTitle) {
      setMobileSubmenuOpen(false);
    } else {
      setMobileSubmenuOpen(linkTitle);
    }
  };

  return (
    <>
      <div className={` ${scrolled ? 'bg-white top-0' : 'bg-transparent top-5'} fixed z-[50] duration-200  left-0 top-0 w-full`}>
        <nav
          className={`${
            scrolled ? 'border-transparent' : 'bg-transparent'
          } lg:max-w-[1318px] sticky top-0 rounded-[20px]  duration-200  w-full bg-white max-w-[90%] mx-auto lg:rounded-4xl overflow-hidden`}
        >
          <div className="flex items-center justify-between  lg:pl-[20px] px-[18px] lg:px-3">
            <div className="flex items-center gap-10 relative">
              <Link href="/" className="flex items-center">
                <Image className="max-w-[150px] w-full md:max-w-[220px]" alt="Mediation Logo" width={250} height={250} src={logo} />
              </Link>
              <ul className="lg:flex relative hidden gap-6 text-secondary font-normal text-base items-center">
                {navLinks.map(link => {
                  return (
                    <li key={link.href}>
                      <Link
                        href={link?.href}
                        className={`px-2 py-[20px] lg:py-6 flex items-center ${link?.hasMegaMenu ? 'gap-1' : ''}`}
                        onMouseEnter={() => link?.hasMegaMenu && setActiveMenu(true)}
                        onMouseLeave={() => link?.hasMegaMenu && setActiveMenu(false)}
                      >
                        {link?.title}
                        {link?.hasMegaMenu && (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className={`h-4 ml-1.5 w-4 transition-transform duration-300 ${activeMenu ? 'rotate-180' : ''}`}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        )}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="flex items-center">
              <div className="hidden lg:block">
                <Button href="/contact-us" title="Contact Us" />
              </div>
              <button
                className="lg:hidden  cursor-pointer flex items-center justify-center w-12 h-12 focus:outline-none"
                onClick={toggleMobileMenu}
                aria-label="Toggle mobile menu"
              >
                {mobileMenuOpen ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 25 24" fill="none">
                    <path
                      d="M16.692 6.34424L12.449 10.5862L8.20697 6.34424L6.79297 7.75824L11.035 12.0002L6.79297 16.2422L8.20697 17.6562L12.449 13.4142L16.692 17.6562L18.106 16.2422L13.864 12.0002L18.106 7.75824L16.692 6.34424Z"
                      fill="black"
                    />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          <div
            ref={menuRef}
            onMouseEnter={() => setActiveMenu(true)}
            onMouseLeave={() => setActiveMenu(false)}
            className={`bg-white z-[99] relative left-0 w-full bg-lavender-50 border-t-[0.5px] border-[#E2DEDE] overflow-hidden transition-all duration-300 ease-in-out`}
            style={{
              maxHeight: activeMenu ? `${menuHeight + 100}px` : '0',
              opacity: activeMenu ? 1 : 0,
              visibility: activeMenu ? 'visible' : 'hidden',
            }}
          >
            <div className="grid grid-cols-12">
              <div className="col-span-5 p-8 space-y-4">
                <button
                  onClick={() => setActiveSubmenu('Service')}
                  className={` ${
                    activeSubmenu == 'Service' ? 'bg-[#DAD3FF]' : ''
                  } flex cursor-pointer items-start flex-col w-full p-6 rounded-xl text-secondary transition-colors duration-200`}
                >
                  <span className="text-lg block font-semibold">Service</span>
                  <span className="text-sm">A Comprehensive Guide to Alternative Dispute Resolution</span>
                </button>
                <button
                  onClick={() => setActiveSubmenu('Training')}
                  className={` ${
                    activeSubmenu == 'Training' ? 'bg-[#DAD3FF]' : ''
                  } flex cursor-pointer items-start flex-col w-full p-6 rounded-xl text-secondary transition-colors duration-200`}
                >
                  <span className="text-lg block font-semibold">Training</span>
                  <span className="text-sm">A Comprehensive Guide to Alternative Dispute Resolution</span>
                </button>
              </div>
              <div className="col-span-7 leading-[150%] p-8 bg-[#F3F1FF]">
                <h3 className="text-[20px] font-semibold mb-4">
                  {activeSubmenu == 'Service' ? 'Mediation Services' : 'Mediation Training'}
                </h3>
                {activeSubmenu == 'Service' ? (
                  <ul className="space-y-3 text-sm text-[#98A2B3]">
                    <li className="hover:text-secondary duration-200">
                      <Link title="Workplace and Employment Mediation" href={'/Workplace-and-Employment-Mediation'}>
                        Workplace and Employment Mediation
                      </Link>
                    </li>
                    <li className="hover:text-secondary duration-200">
                      <Link title="Workplace and Employment Mediation" href={'/Business-and-Commercial-Mediation'}>
                        Business and Commercial Mediation
                      </Link>
                    </li>
                    <li className="hover:text-secondary duration-200">
                      <Link title="Workplace and Employment Mediation" href={'/send-mediation'}>
                        SEND (Special Educational Needs and Disability) Mediation
                      </Link>
                    </li>
                    <li className="hover:text-secondary duration-200">
                      <Link title="Workplace and Employment Mediation" href={'/Community-Mediation'}>
                        Community Mediation
                      </Link>
                    </li>
                    <li className="hover:text-secondary duration-200">
                      <Link title="Workplace and Employment Mediation" href={'/Family-Mediation'}>
                        Family Mediation
                      </Link>
                    </li>
                    <li className="hover:text-secondary duration-200">
                      <Link title="Workplace and Employment Mediation" href={'/Civil-and-Legal-Dispute-Mediation'}>
                        Civil and Legal Dispute Mediation
                      </Link>
                    </li>
                  </ul>
                ) : (
                  <ul className="space-y-3 text-sm text-[#98A2B3]">
                    <li className="hover:text-secondary duration-200">
                      <Link title="Workplace and Employment Mediation" href={'/Foundation-Course-in-Mediation'}>
                        Foundation Course in Mediation
                      </Link>
                    </li>
                    <li className="hover:text-secondary duration-200">
                      <Link title="Workplace and Employment Mediation" href={'/SEND-Mediation-Training-Course'}>
                        SEND Mediation Training Course
                      </Link>
                    </li>
                    <li className="hover:text-secondary duration-200">
                      <Link title="Workplace and Employment Mediation" href={'/SEND-Mediation-Professional-Practice'}>
                        SEND Mediation Professional Practice
                      </Link>
                    </li>
                  </ul>
                )}
              </div>
            </div>
          </div>

          <div
            ref={mobileMenuRef}
            style={{
              maxHeight: mobileMenuOpen ? `${menuHeight + 100}px` : '0',
              opacity: mobileMenuOpen ? 1 : 0,
              visibility: mobileMenuOpen ? 'visible' : 'hidden',
            }}
            className={` inset-0 bg-white z-50 overflow-y-auto lg:hidden flex flex-col transition-all duration-300 ease-in-out ${
              mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
            }`}
          >
            <div className="flex-1 flex flex-col p-5 space-y-2">
              <Link
                onClick={() => setMobileMenuOpen(false)}
                href="/"
                className="p-3 text-lg rounded-lg bg-lavender-50 hover:bg-lavender-100 transition-colors duration-200"
              >
                Home
              </Link>

              {navLinks
                .filter(link => link.title !== 'Home')
                .map(link => (
                  <div key={link.href} className="flex flex-col">
                    {link.hasMegaMenu ? (
                      <>
                        <button
                          onClick={() => toggleMobileSubmenu(link.title)}
                          className="p-3 text-lg font-normal flex justify-between items-center bg-lavender-50 hover:bg-lavender-100 rounded-lg transition-colors duration-200"
                        >
                          {link.title}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className={`h-4 w-4 transition-transform duration-300 ${mobileSubmenuOpen === link.title ? 'rotate-180' : ''}`}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>

                        <div
                          className={`mt-2 pl-4 overflow-hidden transition-all duration-300 ease-in-out ${
                            mobileSubmenuOpen === link.title ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                          }`}
                        >
                          {link.megaMenuItems.map((item, index) => (
                            <Link
                              key={index}
                              href={item.href}
                              className="block py-3 px-4 text-gray-600 hover:text-primary border-b border-gray-100 transition-colors duration-200"
                            >
                              {item.title}
                            </Link>
                          ))}
                        </div>
                      </>
                    ) : (
                      <Link
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="py-4 px-4 text-lg font-normal bg-lavender-50 hover:bg-lavender-100 rounded-lg transition-colors duration-200"
                      >
                        {link.title}
                      </Link>
                    )}
                  </div>
                ))}
            </div>

            <div className="p-5 pt-1">
              <button className={`bg-primary w-full border border-primary font-normal text-lg text-[#FCFCFD] px-6 py-3 rounded-[40px]`}>
                <Link onClick={() => setMobileMenuOpen(false)} className="w-full" href="/contact-us">
                  Contact US
                </Link>
              </button>
            </div>
          </div>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
    </>
  );
};

export default Navbar;

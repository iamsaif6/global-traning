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
    href: '/about-us',
    title: 'About us',
  },

  {
    href: '/case-studies',
    title: 'Case studies',
  },
  {
    href: '/blogs',
    title: 'Blog',
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
      <nav className="fixed z-[99] lg:max-w-[1280px] rounded-xl left-1/2 -translate-x-1/2 w-full mx-auto bg-white max-w-[90%] top-5 lg:rounded-2xl overflow-hidden">
        <div className="flex items-center justify-between  lg:pl-[20px] px-[18px] lg:px-3">
          <div className="flex items-center gap-10 relative">
            <Link href="/" className="flex items-center">
              {/* <svg
                className="w-[86px] h-[56px] md:w-[80px] md:h-auto lg:w-[132px] lg:h-[59px]"
                xmlns="http://www.w3.org/2000/svg"
                width="110"
                height="56"
                viewBox="0 0 110 56"
                fill="none"
              >
                <g clipPath="url(#clip0_1_972)">
                  <path
                    d="M106.405 43.6668C106.785 43.6608 107.159 43.7596 107.486 43.9526C107.809 44.1467 108.071 44.4284 108.242 44.7655C108.426 45.1183 108.518 45.523 108.519 45.9796C108.519 46.4452 108.426 46.8518 108.242 47.1992C108.069 47.5339 107.808 47.8131 107.486 48.0054C107.159 48.1988 106.785 48.2979 106.405 48.2919C105.768 48.2919 105.258 48.0866 104.877 47.6759C104.495 47.2651 104.304 46.6997 104.304 45.9796C104.304 45.2592 104.495 44.6935 104.877 44.2825C105.259 43.8715 105.768 43.6663 106.405 43.6668ZM105.965 42.3957C105.361 42.3957 104.822 42.5397 104.348 42.8277C103.875 43.1157 103.504 43.5315 103.235 44.075C102.967 44.6178 102.832 45.2532 102.832 45.9815C102.832 46.718 102.966 47.3574 103.235 47.8996C103.503 48.4419 103.874 48.8576 104.348 49.1469C104.822 49.4341 105.361 49.5779 105.965 49.5781C106.594 49.5781 107.13 49.4215 107.574 49.1083C108.011 48.805 108.341 48.3689 108.517 47.8633V49.5642C108.517 50.2417 108.332 50.7583 107.963 51.1138C107.594 51.4693 107.124 51.6472 106.555 51.6475C106.034 51.6475 105.607 51.5312 105.272 51.2986C104.937 51.0671 104.696 50.7221 104.592 50.3261H103.169C103.321 51.1229 103.697 51.7541 104.296 52.2197C104.896 52.6854 105.682 52.9184 106.654 52.9189C107.333 52.9189 107.92 52.7748 108.415 52.4866C108.899 52.2092 109.295 51.7968 109.554 51.2986C109.818 50.7947 109.95 50.2165 109.95 49.5642V42.4849H108.516V44.1102C108.34 43.6047 108.009 43.1687 107.572 42.8652C107.128 42.5517 106.592 42.3948 105.963 42.3946M95.9497 42.3696C95.3792 42.3696 94.8758 42.5137 94.4398 42.8017C94.0037 43.0897 93.6936 43.4962 93.5095 44.0213V42.4842H92.0747V49.4855H93.5095V45.7626C93.5095 45.0505 93.6812 44.5106 94.0247 44.1427C94.3683 43.7748 94.8254 43.5903 95.3963 43.5893C95.9498 43.5893 96.3864 43.7609 96.706 44.1041C97.0256 44.4473 97.1851 44.9325 97.1846 45.5596V49.4863H98.6186V45.4073C98.6186 44.4334 98.3754 43.6838 97.8889 43.1585C97.4024 42.6331 96.756 42.3702 95.9497 42.3696ZM86.0105 49.4855H87.4453V42.4849H86.0105V49.4855ZM85.8096 40.4522C85.8096 40.6979 85.893 40.8967 86.0618 41.049C86.2306 41.2014 86.4513 41.2758 86.7279 41.2758C87.0044 41.2758 87.2286 41.2002 87.4015 41.049C87.4857 40.9752 87.5525 40.8833 87.5971 40.7801C87.6416 40.6768 87.6628 40.5648 87.6589 40.4522C87.6619 40.3377 87.6404 40.2239 87.596 40.1186C87.5516 40.0132 87.4853 39.9187 87.4015 39.8415C87.2286 39.6812 87.0052 39.6011 86.7279 39.6011C86.4506 39.6011 86.2287 39.6812 86.0618 39.8415C85.9793 39.9194 85.9141 40.0141 85.8706 40.1195C85.8271 40.2248 85.8063 40.3382 85.8096 40.4522ZM78.778 42.3696C78.2075 42.3696 77.7044 42.5137 77.2688 42.8017C76.8332 43.0897 76.5229 43.4962 76.3377 44.0213V42.4842H74.903V49.4855H76.3377V45.7626C76.3377 45.0505 76.5095 44.5106 76.853 44.1427C77.1966 43.7748 77.6537 43.5903 78.2246 43.5893C78.7779 43.5893 79.2145 43.7609 79.5343 44.1041C79.8541 44.4473 80.0132 44.9322 80.0114 45.5589V49.4855H81.4462V45.4073C81.4462 44.4334 81.2029 43.6838 80.7165 43.1585C80.23 42.6331 79.5838 42.3702 78.778 42.3696ZM68.8396 49.4855H70.2743V42.4849H68.8396V49.4855ZM68.6379 40.4522C68.6379 40.6979 68.7219 40.8969 68.8901 41.049C69.0582 41.2012 69.2805 41.2768 69.5569 41.2758C69.8334 41.2758 70.0579 41.2002 70.2305 41.049C70.3147 40.9752 70.3816 40.8833 70.4261 40.7801C70.4707 40.6768 70.4918 40.5648 70.488 40.4522C70.4909 40.3377 70.4695 40.2239 70.4251 40.1186C70.3806 40.0132 70.3143 39.9187 70.2305 39.8415C70.0586 39.6812 69.8341 39.6011 69.5569 39.6011C69.2798 39.6011 69.0575 39.6812 68.8901 39.8415C68.8077 39.9195 68.7426 40.0143 68.6992 40.1195C68.6557 40.2248 68.6348 40.3382 68.6379 40.4522ZM60.6749 43.6649C61.0546 43.6588 61.4287 43.7576 61.7568 43.9507C62.0787 44.1449 62.3401 44.4266 62.5112 44.7637C62.696 45.1164 62.7885 45.5211 62.7885 45.9777C62.7885 46.4433 62.696 46.8499 62.5112 47.1974C62.3391 47.5319 62.0778 47.8112 61.7568 48.0036C61.4288 48.197 61.0546 48.2961 60.6749 48.29C60.0375 48.29 59.5279 48.0847 59.1462 47.674C58.7645 47.2632 58.5738 46.6978 58.574 45.9777C58.574 45.2573 58.7648 44.6916 59.1462 44.2806C59.5277 43.8697 60.0372 43.6644 60.6749 43.6649ZM60.2344 42.3938C59.6309 42.3938 59.0921 42.5378 58.6178 42.8258C58.1436 43.1139 57.7726 43.5296 57.5049 44.0731C57.2357 44.6159 57.1014 45.2514 57.1019 45.9796C57.1019 46.7161 57.2362 47.3555 57.5049 47.8977C57.7736 48.44 58.1446 48.8557 58.6178 49.145C59.0918 49.4322 59.6307 49.576 60.2344 49.5763C60.8636 49.5763 61.4 49.4196 61.8436 49.1064C62.2805 48.8027 62.6108 48.3668 62.787 47.8614V49.4867H64.2206V42.4849H62.787V44.1102C62.6106 43.605 62.2803 43.1691 61.8436 42.8652C61.3985 42.5517 60.8621 42.3948 60.2344 42.3946M50.9756 43.8558V42.4838H49.5408V49.4852H50.9756V45.9399C50.9756 45.2285 51.1663 44.7183 51.5477 44.4091C51.9292 44.1 52.4346 43.9452 53.0641 43.945H53.4914V42.3696C52.9214 42.3696 52.4183 42.5031 51.9822 42.7699C51.5527 43.0299 51.204 43.4062 50.9756 43.8562M44.6097 48.2281C44.2411 48.2281 43.9826 48.1525 43.8359 48.0013C43.6892 47.8501 43.6162 47.5734 43.6162 47.1754V43.7193H45.2889V42.4864H43.6162V40.7478H42.1695V42.4864H41.1748V43.7193H42.1695V47.1501C42.1695 47.9884 42.3602 48.5876 42.7417 48.9477C43.1231 49.3078 43.6829 49.4878 44.4211 49.4878H45.302V48.2281H44.6097Z"
                    fill="#FF644A"
                  />
                  <path d="M110.001 0H108.73V30.2411H110.001V0Z" fill="#3F0064" />
                  <path d="M28.2728 0.323242H27.002V30.2408H28.2728V0.323242Z" fill="#3F0064" />
                  <path
                    d="M48.0602 10.3874C46.4885 9.45534 44.7484 8.98364 42.8874 8.98364C41.0265 8.98364 39.2908 9.45534 37.7232 10.3874C36.1556 11.3194 34.9043 12.6174 34.002 14.2475C33.0998 15.8777 32.6406 17.687 32.6406 19.6323C32.6406 21.5777 33.0979 23.3855 34.002 25.007C34.9061 26.6284 36.1571 27.9229 37.7232 28.8474C39.2893 29.7719 41.0265 30.2414 42.8874 30.2414C44.2639 30.2443 45.6265 29.9632 46.8916 29.4151C48.1557 28.8679 49.2615 28.1146 50.1794 27.1761C51.0974 26.2376 51.8323 25.0973 52.3675 23.7907C52.9048 22.472 53.179 21.0591 53.1743 19.6331C53.1743 17.6892 52.7129 15.8777 51.8032 14.2483C50.8934 12.6189 49.6327 11.3198 48.061 10.3881M51.9046 19.6323C51.9046 22.2365 51.0192 24.4763 49.2727 26.2901C47.5262 28.104 45.3808 29.0221 42.8886 29.0221C40.3843 29.0221 38.243 28.1063 36.5269 26.3007C34.8107 24.4952 33.9354 22.2505 33.9354 19.6323C33.9354 17.0006 34.807 14.7472 36.5269 12.9341C38.2468 11.121 40.3862 10.2022 42.8886 10.2022C45.3801 10.2022 47.5289 11.1218 49.2727 12.9349C51.0166 14.7479 51.9046 17.0021 51.9046 19.6323Z"
                    fill="#3F0064"
                  />
                  <path
                    d="M101.43 15.4316C100.896 14.125 100.16 12.9869 99.2429 12.0481C98.3257 11.1092 97.2199 10.3559 95.9562 9.80903C94.6912 9.26097 93.3285 8.97993 91.9521 8.98318C90.0929 8.98318 88.3558 9.45223 86.7909 10.3764C85.2259 11.3005 83.9738 12.5935 83.0708 14.2157C82.1678 15.8379 81.709 17.6449 81.709 19.5884C81.709 21.5319 82.1678 23.3431 83.07 24.9706C83.9723 26.5981 85.2251 27.8987 86.7909 28.8304C88.321 29.7409 90.0159 30.2129 91.8274 30.2333V30.2417H102.231V19.8658C102.233 19.7627 102.234 19.6727 102.234 19.5884C102.239 18.1624 101.965 16.7495 101.427 15.4308M100.964 24.7979V29.0171H91.7668V29.0144L91.6224 29.0095C89.2648 28.9339 87.2336 28.0166 85.5926 26.2844C83.8735 24.4721 83.0019 22.2194 83.0019 19.5884C83.0019 16.9714 83.8735 14.729 85.5926 12.9223C87.3118 11.1156 89.4504 10.201 91.9543 10.201C94.4458 10.201 96.5946 11.1202 98.3362 12.9318C100.054 14.7157 100.938 16.9121 100.966 19.458V24.7979H100.964Z"
                    fill="#3F0064"
                  />
                  <path
                    d="M10.1181 30.2411H20.5213V19.8653C20.5239 19.7629 20.5247 19.6722 20.5247 19.5875C20.53 18.1616 20.2562 16.7487 19.719 15.43C19.1842 14.1237 18.4467 12.9849 17.5306 12.0461C16.6145 11.1072 15.5079 10.3562 14.2446 9.80852C12.9804 9.26082 11.6187 8.98004 10.2431 8.98343C8.38284 8.98343 6.64684 9.45248 5.08187 10.3766C3.51689 11.3007 2.26364 12.5926 1.36065 14.2159C0.457668 15.8393 0 17.6444 0 19.5875C0 21.5306 0.458042 23.3426 1.36065 24.9708C2.26327 26.5991 3.51502 27.8989 5.08112 28.8306C6.61204 29.7407 8.30612 30.2124 10.1181 30.2336V30.2411ZM19.2542 24.7883V29.0173H10.0552V29.0139L9.91151 29.009C7.55133 28.9334 5.5227 28.0161 3.88063 26.2846C2.16148 24.4723 1.2903 22.2197 1.2903 19.5875C1.2903 16.9713 2.16148 14.7285 3.88063 12.9225C5.59979 11.1166 7.73881 10.2012 10.2423 10.2012C12.7331 10.2012 14.88 11.1197 16.6242 12.932C18.3408 14.716 19.2258 16.9112 19.2535 19.4579V24.7872L19.2542 24.7883Z"
                    fill="#3F0064"
                  />
                  <path
                    d="M24.5864 36.153C23.0563 35.2425 21.3622 34.7712 19.5499 34.7507V34.7424H9.14662V45.1182C9.14662 45.2207 9.14362 45.3114 9.14362 45.3957C9.13851 46.8217 9.41258 48.2346 9.95006 49.5533C10.4848 50.8599 11.2224 51.9987 12.1374 52.9375C13.0523 53.8764 14.1611 54.6289 15.4241 55.1766C16.6892 55.7245 18.0518 56.0052 19.4282 56.0017C21.2881 56.0017 23.0245 55.5326 24.5894 54.6085C26.1544 53.6844 27.4077 52.3925 28.3103 50.7699C29.2129 49.1473 29.6713 47.3407 29.6713 45.3972C29.6713 43.4537 29.2133 41.6425 28.3103 40.0142C27.4073 38.386 26.1514 37.0847 24.5864 36.153ZM10.4133 40.0838V35.9663H19.6094V35.9697L19.7538 35.9746C22.1114 36.0502 24.1426 36.9675 25.7839 38.6989C27.5027 40.5113 28.375 42.7639 28.375 45.3957C28.375 48.0131 27.5027 50.2551 25.7847 52.0618C24.0667 53.8685 21.9258 54.7831 19.423 54.7831C16.9322 54.7831 14.7846 53.8647 13.0411 52.0523C11.3246 50.2684 10.4395 48.0728 10.4111 45.5272V45.2668V40.0842L10.4133 40.0838Z"
                    fill="#3F0064"
                  />
                  <path
                    d="M76.2279 14.2159C75.3253 12.5926 74.0728 11.3018 72.5071 10.3773C70.9414 9.45283 69.2058 8.9834 67.3459 8.9834C65.9695 8.98019 64.6069 9.26096 63.3418 9.8085C62.0788 10.3562 60.9726 11.1094 60.055 12.0475C59.3691 12.7558 58.789 13.5611 58.3329 14.4382V0H57.0605V21.59H57.0643V30.2411H67.4675V30.2336C69.2799 30.2124 70.9739 29.7422 72.5041 28.8306C74.071 27.8989 75.3223 26.6006 76.225 24.9716C77.1276 23.3426 77.586 21.5321 77.586 19.5886C77.586 17.6452 77.1306 15.8366 76.2279 14.2159ZM58.3336 19.4609C58.3621 16.9134 59.2471 14.7171 60.9636 12.9339C62.7071 11.1215 64.8555 10.2031 67.3455 10.2031C69.849 10.2031 71.9896 11.1185 73.7072 12.9225C75.4249 14.7265 76.2975 16.9713 76.2975 19.5886C76.2975 22.2196 75.4252 24.4723 73.7065 26.2846C72.0652 28.0168 70.0354 28.9338 67.6763 29.0097L67.5319 29.0146V29.0173H58.3336V24.8321V19.4609Z"
                    fill="#3F0064"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_972">
                    <rect width="110" height="56" fill="white" />
                  </clipPath>
                </defs>
              </svg> */}

              <Image className="max-w-[150px] w-full md:max-w-[250px]" alt="Mediation Logo" width={250} height={250} src={logo} />
            </Link>
            <ul className="lg:flex relative hidden gap-6 text-secondary font-normal text-base items-center">
              {navLinks.map(link => {
                return (
                  <li key={link.href}>
                    <Link
                      href={link?.href}
                      className={`px-2 py-[20px] lg:py-7 flex items-center ${link?.hasMegaMenu ? 'gap-1' : ''}`}
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
              <h3 className="text-[20px] font-semibold mb-4">{activeSubmenu == 'Service' ? 'Mediation Services' : 'Mediation Training'}</h3>
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

      {/* Mobile Menu Overlay */}
    </>
  );
};

export default Navbar;

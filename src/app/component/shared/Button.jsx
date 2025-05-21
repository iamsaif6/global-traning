import Link from 'next/link';
import React from 'react';

const Button = ({ title, href = '#', padding = 'default', secondary = false, Customclass }) => {
  const paddingClasses = {
    small: 'px-4',
    default: 'px-6',
    large: 'px-8',
    xlarge: 'px-12',
    xxlarge: 'px-[80px]',
  };

  const paddingClass = paddingClasses[padding] || paddingClasses.default;

  return (
    <Link
      href={href}
      className={`${
        secondary ? 'bg-secondary border-secondary' : 'bg-primary border-primary'
      }  border  font-semibold text-lg text-[#FCFCFD] ${paddingClass} ${Customclass} py-3 rounded-[40px]`}
    >
      {title}
    </Link>
  );
};

export default Button;

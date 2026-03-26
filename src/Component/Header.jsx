import Link from "next/link";
import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Header = () => {
  return (
    <div className="flex justify-between items-center text-[10px] md:text-[14px] text-base-100 py-3 w-11/12 md:w-10/12 mx-auto">
      <div className="flex items-center">
        <Link className="mr-1.5 md:mr-3.75 hover:text-secondary duration-100" href="#">Have any Trouble?</Link>
        <Link className="mr-1.5 md:mr-3.75 hover:text-secondary duration-100 flex items-center" href="#"> <span className="mr-1 md:mr-2"><FaPhoneAlt /></span>(+880) 1234 567 890</Link>
        <Link className="mr-1.5 md:mr-3.75 hover:text-secondary duration-100 flex items-center" href="#"> <span className="mr-1 md:mr-2"><MdEmail /></span> gyan@gmail.com</Link>
      </div>
      <div>
        <Link className="mr-1 hover:text-secondary duration-100" href="#">Register</Link>
        <span>/</span>
        <Link className="ml-1 hover:text-secondary duration-100" href="#">Login</Link>
      </div>
    </div>
  );
};

export default Header;

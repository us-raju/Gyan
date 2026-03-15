import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const links = (
    <>
      <li className="mx-2.5 hover:text-[#FBA933]">
        <Link href="#">Home</Link>
      </li>
      <li className="mx-2.5 hover:text-[#FBA933]">
        <Link href="#">About us </Link>
      </li>
      <li className="mx-2.5 hover:text-[#FBA933]">
        <Link href="#">Our courses </Link>
      </li>
      <li className="mx-2.5 hover:text-[#FBA933]">
        <Link href="#">Testimonial</Link>
      </li>
      <li className="mx-2.5 hover:text-[#FBA933]">
        <Link href="#">FAQ</Link>
      </li>                                 
    </>
  );
  return (
    <div className=" bg-base-100 shadow-sm py-2">
      <div className="navbar items-center w-11/12 md:w-10/12 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-[#2D3E50]"
            >
              {
                links
              }
            </ul>
          </div>
          <Image src="/logo.png" alt="Gyan Logo" width={70} height={44}></Image>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className=" menu-horizontal px-1 text-[#2D3E50]">
            {
                links
            }
          </ul>
        </div>
        <div className="navbar-end ">
          <Link href="#" className="py-2.5 px-2.5 bg-[#FBA933] rounded-[5px] text-white">Get Started Now</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

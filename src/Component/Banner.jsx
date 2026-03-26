import React from "react";
import bannerimg from "../../public/Banner.jpg";
const Banner = () => {
  return (
    <div
      className="w-full min-h-80 md:min-h-162.5 bg-no-repeat bg-cover bg-left md:bg-center relative "
      style={{ backgroundImage: `url(${bannerimg.src})` }}
    >
      <div className="absolute inset-0 bg-black/40">
        <div className="w-10/12 md:11/12 mx-auto ">
          <div className="max-w-80 xl:max-w-142.5 pt-17">
            <div className="">
              <h3 className="text-[20px] md:text-[40px] text-base-100 leading-0.5">
                Let’s Learn
              </h3>
              <h1 className="text-[26px] md:text-[52px] font-bold text-base-100">
                For Bright Future
              </h1>
              <p className="text-[10px] md:text-[14px] text-base-100">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incidunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse ultrices gravida. Risus comodo viverra
                maecenas accumsan lacus vel facilisis.
              </p>
            </div>
            <div className="mt-7.5">
              <button
                type="button"
                className="bg-primary p-2 md:p-2.5 mr-2.5 rounded-[5px] text-[16px] md:text-[20px] text-base-100 cursor-pointer hover:bg-secondary delay-100 "
              >
                Start a Course
              </button>
              <button
                type="button"
                className="bg-primary p-2 md:p-2.5 ml-2.5 rounded-[5px] text-[16px] md:text-[20px] text-base-100 cursor-pointer hover:bg-secondary delay-100 "
              >
                Take a Tour
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

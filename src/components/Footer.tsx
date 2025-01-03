import React from "react";

const Footer = () => {
  return (
    <>
      <div className="w-full max-w-[1800px] bg-[#212529] py-16 md:mt-[60px] mt-[30px] p-9">
        <div className="m-auto w-full max-w-[1162px] flex flex-wrap justify-between sm:flex-col md:flex-row text-white">
          <div className="mb-6 sm:mb-4">
            <ul>
              <li className="lora font-bold text-[18px] leading-[25px]">
                Contact the Publisher
              </li>
              <li className="lora font-normal text-[16px] leading-[78px] text-[#E5E5E5] cursor-pointer hover:text-[teal]">
                mahamarain2005@@gmail.com
              </li>
              <li className="lora font-normal text-[16px] leading-[2px] text-[#E5E5E5] cursor-pointer hover:text-[teal]">
                +234 452 404 505
              </li>
            </ul>
          </div>
          <div className="mb-6 sm:mb-4">
            <ul className="lora font-normal text-[16px] flex flex-col text-[#E5E5E5]">
              <li className="lora font-bold text-[18px] leading-[25px] text-white mb-5">
                Explorate
              </li>
              <li className="text-[#E5E5E5] cursor-pointer hover:text-[teal]">
                About
              </li>
              <li className="text-[#E5E5E5] cursor-pointer hover:text-[teal]">
                Explorate
              </li>
              <li className="text-[#E5E5E5] cursor-pointer hover:text-[teal]">
                Job Opportunities
              </li>
              <li className="text-[#E5E5E5] cursor-pointer hover:text-[teal]">
                Advertise
              </li>
              <li className="text-[#E5E5E5] cursor-pointer hover:text-[teal]">
                Members
              </li>
            </ul>
          </div>
          <div className="mb-6 sm:mb-4">
            <ul className="lora font-normal text-[16px] flex flex-col text-[#E5E5E5]">
              <li className="lora font-bold text-[18px] leading-[25px] text-white mb-5">
                HeaderQuarter
              </li>
              <li className="text-[#E5E5E5] cursor-pointer hover:text-[teal]">
                191 Middleville Road,
                <br />
                NY 1001, Sydney
                <br />
                Australia
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

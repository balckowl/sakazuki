import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-[#1d4592] md:h-[90px] py-[20px]">
      <div className="container flex md:flex-row flex-col justify-between items-center h-full">
        <div className="mb-3 md:mb-0">
          <Image
            src="/images/logo/logo.png"
            width={150}
            height={100}
            alt="sakazuki"
            className="mb-2"
          />
          <p className="text-white md:text-[13px] text-[10px]">&copy;PitPa, Inc.</p>
        </div>
        <ul className="flex gap-2">
          <li className="text-white">運営会社</li>
          <li className="text-white ">利用規約</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
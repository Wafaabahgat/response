import React from "react";
import Image from "next/image";
import { FaInstagram } from "react-icons/fa";

const InstagramImg = ({ socialImag }) => {
  return (
    <div >
      <Image
        src={socialImag}
        alt="/"
        className="w-full h-full"
        layout="responsive"
      />
      {/* overLay */}
      <div />
      <p>
        <FaInstagram size={30} className="z-10" />
      </p>
    </div>
  );
};

export default InstagramImg;

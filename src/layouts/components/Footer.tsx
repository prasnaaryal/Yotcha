import Image from "next/image";
import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdMarkEmailRead } from "react-icons/md";

const Footer = () => {
  return (
    <div className="relative h-full w-full">
      {/* Background image container */}
      <div className="absolute inset-0">
        <Image
          src="/assets/background.png"
          layout="fill"
          objectFit="cover"
          alt="Background"
        />
      </div>

      {/* Logo image container */}
      <div className="relative">
        {/* Absolute ko satta relative cuz content are changeable and background image absolute bhaye pachi content sadhai relative huncha  */}
        <div className="container inset-0 flex py-20">
          <div className="grid grid-cols-12 justify-content">
            <div className="col-span-3 flex flex-col">
              <Image
                src="/assets/Logo.png"
                width={312}
                height={203}
                alt="logo"
              />
            </div>

            <div className="col-span-3 flex flex-col text-base leading-6 text-white">
              <h1 className="text-2xl font-medium mb-8">Offers</h1>
              <p className="text-base mb-2">Properties</p>
              <p className="text-base mb-2">Agents</p>
              <p className="text-base mb-2">Locations</p>
              <p className="text-base mb-2">Clients Support</p>
            </div>

            <div className="col-span-3 flex flex-col text-base leading-6 text-white">
              <h1 className="text-2xl font-medium mb-8">Company</h1>
              <p className="text-base mb-2">Home</p>
              <p className="text-base mb-2">About</p>
              <p className="text-base mb-2">Blog</p>
              <p className="text-base mb-2">Contact Us</p>
            </div>

            <div className="col-span-3 flex flex-col text-base leading-6 text-white">
              <h1 className="text-2xl font-medium mb-8">Have a Questions?</h1>
              <p className="text-base mb-2 flex items-center">
                <FaLocationDot className="mr-2 text-green-500 mb-4" />
                203 Fake St. Mountain View, San Francisco, California, USA
              </p>
              <p className="text-base mb-2 flex items-center">
                <FaPhoneAlt className="mr-2 text-green-500" />
                +2 392 3929 210
              </p>
              <p className="text-base mb-2 flex items-center">
                <MdMarkEmailRead className="mr-2 text-green-500"/>
                info@yotcha.com
              </p>
            </div>
          </div>
        </div>

        <div className="w-full flex items-center justify-center">
          <p>Copyright ©2023 All rights reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

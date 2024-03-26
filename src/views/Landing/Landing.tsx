import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";
import { FaArrowsAlt } from "react-icons/fa";
import { FaBath, FaLocationDot } from "react-icons/fa6";
import { IoBed } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const Landing = () => {
  return (
    <div>
      {/* Background image container */}
      <div>
        <img
          src="/assets/Rectangle.png"
          className="w-[100vw] h-[100vh] object-cover"
          alt="image1"
        />
      </div>

     

      <div className="absolute inset-0 flex items-center justify-center flex-col">
        <h1 className="text-white text-6xl font-bold">Find Your Dream Home</h1>
        <p className="text-2xl text-white mt-4">
          We Have Over a Million Properties For You.
        </p>

        <div className="flex gap-2.5 mt-10">
          <Button variant="default" size="lg">
            Buy
          </Button>
          <Button variant="outline" size="lg">
            Rent
          </Button>
          <Button variant="outline" size="lg">
            Sell
          </Button>
        </div>

        {/* Box behind the search bar */}
        <div className="bg-white bg-opacity-20 p-2 rounded-md w-xl mt-6 xl:w-[790px]">
          <div className="bg-white p-4 rounded-md w-full">
            <div className="flex items-center space-x-2">
              <Input type="email" placeholder="Search for a Property" />
              <Button type="submit">Search</Button>
            </div>
          </div>
        </div>
      </div>

      {/* Grey-colored div */}
      <div className="bg-gray-200 w-full h-[132px] flex justify-between pt-[40px] pr-[150px] pl-[150px]">
        <img className="w-[253px] h-[51px]" src="/assets/image1.png" alt="" />
        <img className="w-[82px] h-[52px]" src="/assets/image2.png" alt="" />
        <img className="w-[77px] h-[52px]" src="/assets/image3.png" alt="" />
        <img className="w-[138px] h-[52px]" src="/assets/image4.png" alt="" />
        <img className="w-[140px] h-[52px]" src="/assets/image5.png" alt="" />
        <img className="w-[258px] h-[52px]" src="/assets/image6.png" alt="" />
      </div>

      {/* property listing */}
      <div className="flex justify-center items-center mt-20 flex-col">
        <h1 className="font-bold m-12">LATEST PROPERTY LISTINGS</h1>

        <div className="max-w-sm rounded overflow-hidden shadow-lg pb-6 ml-10 ">
          <img
            className="w-full"
            src="/assets/list1.png"
            alt="Sunset in the mountains"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Resort Valley Ocs</div>
            <p className="text-teal-400">$7000</p>
            <p className="text-indigo-300 text-base flex">
              <FaLocationDot className="text-indigo-200 mt-1" />
              778 Panama City, FL
            </p>
          </div>

          <div className="flex ml-5 gap-5 pb-2">
            <div className="flex items-center justify-center w-6 h-6 bg-gray-200 rounded-full">
              <IoBed />
            </div>
            <p className="text-[#616E96] font-semibold text-sm	">4 Beds</p>

            <div className="flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full">
              <FaBath />
            </div>
            <p className="text-[#616E96] font-semibold text-sm">3 Baths</p>

            <div className="flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full">
              <FaArrowsAlt />
            </div>
            <p className="text-[#616E96] font-semibold text-sm	">1200 sqft</p>
          </div>

          {/* border */}
          <div className="border-b border-gray-300"></div>

          <div className="flex ml-5 gap-5 pt-2 text-indigo-300">
            <p>Lisa Jhonson</p>
            <SlCalender className="mt-1.5 ml-4" />
            <p>1 months ago</p>
          </div>
        </div>
      </div>

      {/* button */}
      <div className="flex justify-center mb-8">
        <Button
          className="mt-10 rounded-full w-[218px] h-[60px] border-[2px]"
          variant={"default"}
          size={"lg"}
        >
          Read More
        </Button>
      </div>

      {/* location */}

      <div className="bg-gray-200">
      <div className="flex justify-center items-center m-20 flex-col">
        <h1 className="font-bold m-20">Find By Locations</h1>

        
          <Card className="w-[350px] h-[350px]">
            <CardContent className="relative">
              <img
                src="/assets/image7.png"
                alt="Sunset in the mountains"
                className="w-full h-full"
            
              />
            </CardContent>
          </Card>
        
        </div>

        <div>
          <img className="w-full" src="/assets/Frame.png" alt="" />
        </div>


        {/* why choose us */}

        <div className="flex justify-center items-center mt-20 flex-col">
        <h1 className="font-bold mb-6">Why Choose Us</h1>
          



          <div className="m-16 flex gap-12">
            <Card className="w-[262px] h-[340px]">
              <CardContent className="flex  flex-col gap-12 p-12 items-center justify-center">
                <img
                  src="/assets/image8.png"
                  alt="Sunset in the mountains"
                  className=" w-[112px] h-[112px]"
                />

                <div className="text-center">
                  <h1 className="font-semibold text-base">
                    Trusted By Thousands
                  </h1>
                  <p className="font-light text-base	">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Pellentesque{" "}
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="w-[262px] h-[340px] gap-10">
              <CardContent className="flex  flex-col gap-12 p-12 items-center justify-center">
                <img
                  src="/assets/image8.png"
                  alt="Sunset in the mountains"
                  className=" w-[112px] h-[112px]"
                />

                <div className="text-center">
                  <h1 className="font-semibold text-base">
                    Trusted By Thousands
                  </h1>
                  <p className="font-light text-base	">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Pellentesque{" "}
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="w-[262px] h-[340px] gap-10">
              <CardContent className="flex  flex-col gap-12 p-12 items-center justify-center">
                <img
                  src="/assets/image8.png"
                  alt="Sunset in the mountains"
                  className=" w-[112px] h-[112px]"
                />

                <div className="text-center">
                  <h1 className="font-semibold text-base">
                    Trusted By Thousands
                  </h1>
                  <p className="font-light text-base	">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Pellentesque{" "}
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="w-[262px] h-[340px] gap-10">
              <CardContent className="flex  flex-col gap-12 p-12 items-center justify-center">
                <img
                  src="/assets/image8.png"
                  alt="Sunset in the mountains"
                  className=" w-[112px] h-[112px]"
                />

                <div className="text-center">
                  <h1 className="font-semibold text-base">
                    Trusted By Thousands
                  </h1>
                  <p className="font-light text-base	">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Pellentesque{" "}
                  </p>
                </div>
              </CardContent>
            </Card>




          </div>
        </div>

        <div>
          <div className="relative">
            <img src="/assets/image9.jpg" alt="smt" className="w-full h-[621px]" />

            <div className="absolute inset-x-0 top-0 flex items-center justify-center flex-col text-center mt-12">
              <h1 className="text-3xl font-semibold	text-black">
                Find Your Dream Home Today
              </h1>
              <Button
                className="mt-6 rounded w-[133px] h-[44px]"
                variant={"default"}
                size={"lg"}
              >
                Book Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;

import React from "react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { FaArrowsAlt, FaBath } from "react-icons/fa";
import { IoBed } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { TiTick } from "react-icons/ti";
import Amenities from "./components/Amenities";
import PropertyDetails from "./components/PropertyDetails";
import Description from "./components/Description";
import FloorPlan from "./components/FloorPlan";
import Nearby from "./components/Nearby";
import PropertyVideo from "./components/PropertyVideo";

const PropertyDetail = () => {
  return (
    <div>
      <div className="">
        <img src="/assets/Gallery.png" className="w-full h-[460px]" alt="" />
      </div>

      <div className="bg-slate-200 py-10 ">
        <div className="container grid grid-cols-12 gap-6">
          <div className="col-span-8 gap-10 ">
            <div className="bg-white">
              <Button variant="default" size="lg">
                sale
              </Button>

              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Resort Valley Ocs</div>
                <p className="text-teal-400">$7000</p>
                <p className="text-indigo-300 text-base flex">
                  <FaLocationDot className="text-indigo-200 mt-1" />
                </p>
              </div>

              <div className="flex ml-5 gap-5 pb-2">
                <div className="flex items-center justify-center w-6 h-6 bg-gray-200 rounded-full">
                  <IoBed />
                </div>
                <p className="text-[#616E96] font-semibold text-sm	">Beds</p>

                <div className="flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full">
                  <FaBath />
                </div>
                <p className="text-[#616E96] font-semibold text-sm">Baths</p>

                <div className="flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full">
                  <FaArrowsAlt />
                </div>
                <p className="text-[#616E96] font-semibold text-sm	">sqft</p>
              </div>
            </div>

            {/*  description */}

            <Description />
            {/* property details */}

            <PropertyDetails />

            {/* Amenities */}

            <Amenities />

            {/* floor plans */}
            <FloorPlan />

            {/* nearby */}
            <Nearby />

            {/* Property Video */}
            <PropertyVideo />
          </div>

          <div className="col-span-4">hi</div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;

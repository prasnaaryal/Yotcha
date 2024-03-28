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
import Location from "./components/Location";
import TopDetail from "./components/TopDetail";
import PriceInsight from "./components/PriceInsight";
import Review from "./components/Review";

const PropertyDetail = () => {
  return (
    <div>
      <div className="">
        <img src="/assets/Gallery.png" className="w-full h-[460px]" alt="" />
      </div>

      <div className="bg-gray-200 py-10 ">
        <div className="container grid grid-cols-12 gap-6">
          <div className="col-span-8 gap-10 ">
            <TopDetail/>
           

          
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

            {/* location */}
            <Location />

            {/* Price Insight */}
            <PriceInsight/>

            <Review/>
          </div>

          <div className="col-span-4">hi</div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;

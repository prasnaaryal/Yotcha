import { Button } from "@/components/ui/button";
import React from "react";
import { FaArrowsAlt, FaBath } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoBed } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";

const PropertyListing = () => {
  const properties = [
    {
      image: "/assets/list1.png",
      name: "Resort Valley Ocs",
      price: 7000,
      location: "778 Panama City,FL",
      owner: "Lisa Jhonson",
      createdAt: "1 months ago",
      beds: 4,
      baths: 3,
      area: 1200,
    },

    {
      image: "/assets/list2.png",
      name: "Brand New Appartments",
      price: 7000,
      location: "778 Panama City,FL",
      owner: "Lisa Jhonson",
      createdAt: "1 months ago",
      beds: 4,
      baths: 3,
      area: 1200,
    },
    {
      image: "/assets/list3.png",
      name: "Luxurious Villa",
      price: 7000,
      location: "778 Panama City,FL",
      owner: "Lisa Jhonson",
      createdAt: "1 months ago",
      beds: 4,
      baths: 3,
      area: 1200,
    },
    {
      image: "/assets/list4.png",
      name: "Diamond Manco Apartment",
      price: 7000,
      location: "778 Panama City,FL",

      owner: "Lisa Jhonson",
      createdAt: "1 months ago",
      beds: 4,
      baths: 3,
      area: 1200,
    },
    {
      image: "/assets/list5.png",
      name: "Resort Valley Ocs",
      price: 7000,
      location: "778 Panama City,FL",
      owner: "Lisa Jhonson",
      createdAt: "1 months ago",
      beds: 4,
      baths: 3,
      area: 1200,
    },
    {
      image: "/assets/list6.png",
      name: "Spaceious 2 Story Bunglow",
      price: 7000,
      location: "778 Panama City,FL",
      owner: "Lisa Jhonson",
      createdAt: "1 months ago",
      beds: 4,
      baths: 3,
      area: 1200,
    },
  ];
  return (
    <div>
      {/* property listing */}
      <div className="flex justify-center items-center mt-20 flex-col">
        <h1 className="font-bold m-12">LATEST PROPERTY LISTINGS</h1>

        <div className="grid grid-cols-12 gap-2">
          {properties &&
            properties.map((property, index) => (
              <div
                className="col-span-4 rounded overflow-hidden shadow-lg pb-6 ml-10 "
                key="index"
              >
                <img
                  className="w-full"
                  src={property.image}
                  alt={property.name}
                />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{property.name}</div>
                  <p className="text-teal-400">${property.price}</p>
                  <p className="text-indigo-300 text-base flex">
                    <FaLocationDot className="text-indigo-200 mt-1" />
                    {property.location}
                  </p>
                </div>

                <div className="flex ml-5 gap-5 pb-2">
                  <div className="flex items-center justify-center w-6 h-6 bg-gray-200 rounded-full">
                    <IoBed />
                  </div>
                  <p className="text-[#616E96] font-semibold text-sm	">
                    {property.beds} Beds
                  </p>

                  <div className="flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full">
                    <FaBath />
                  </div>
                  <p className="text-[#616E96] font-semibold text-sm">
                    {property.baths} Baths
                  </p>

                  <div className="flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full">
                    <FaArrowsAlt />
                  </div>
                  <p className="text-[#616E96] font-semibold text-sm	">
                    {property.area} sqft
                  </p>
                </div>

                {/* border */}
                <div className="border-b border-gray-300"></div>

                <div className="flex ml-5 gap-5 pt-2 text-indigo-300">
                  <p>{property.owner}</p>
                  <SlCalender className="mt-1.5 ml-4" />
                  <p>{property.createdAt}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
      {/* button */}
      <div className="flex justify-center mb-8">
        <Button
          className="mt-10 rounded-full w-[218px] h-[60px] border-[2px]"
          variant={"default"}
          size={"lg"}
        >
          Load More
        </Button>
      </div>
    </div>
  );
};

export default PropertyListing;

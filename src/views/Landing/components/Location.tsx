import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import React from "react";

const Location = () => {
  const locations = [
    {
      image: "/assets/loc1.png",
      location: "San Francisco,California",
      noOfProperty: "1",
    },
    {
      image: "/assets/loc2.png",
      location: "San Francisco,California",
      noOfProperty: "1",
    },
    {
      image: "/assets/loc3.png",
      location: "San Francisco,California",
      noOfProperty: "1",
    },
    {
      image: "/assets/loc2.png",
      location: "San Francisco,California",
      noOfProperty: "1",
    },
    {
      image: "/assets/loc3.png",
      location: "San Francisco,California",
      noOfProperty: "1",
    },
    {
      image: "/assets/loc1.png",
      location: "San Francisco,California",
      noOfProperty: "1",
    },
  ];
  return (
    <div>
      <div className="bg-gray-200">
        <div className="flex justify-center items-center m-20 flex-col">
          <h1 className="font-bold m-20">Find By Locations</h1>

<div className="grid grid-cols-12 gap-2">
          {locations &&
            locations.map((location, index) => (
              <div className="col-span-4" key="index"> 
              <Card className="w-[350px] h-[350px]">
                <CardContent className="relative">
                  <img
                    src={location.image}
                    alt={location.location}
                    className="w-full h-full"
                  />
                  <h1>{location.location}</h1>
                  <p>{location.noOfProperty}</p>
                </CardContent>
              </Card>
              </div>
            ))}
        </div>
        
         </div>
      </div>
    </div>
  );
};

export default Location;

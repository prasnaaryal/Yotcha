import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";

const Filter = () => {
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
    </div>
  );
};

export default Filter;

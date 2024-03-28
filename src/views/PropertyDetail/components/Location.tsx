import React from "react";

const Location = () => {
  return (
    <div>
      <div className="bg-white mt-10 rounded-xl ">
        <div className="mt-6 px-10 flex flex-col">
          <div className="flex flex-col">
            <h1 className="font-bold pt-8 mr-4">Location</h1>
            <div className="border-b-4 border-teal-500 w-12"></div>
          </div>

          <div className="py-6">
            <img
              src="/assets/basemap.png"
              className="w-[800px]"
              alt="basemap"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;

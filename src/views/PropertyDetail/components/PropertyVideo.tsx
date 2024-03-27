import React from "react";

const PropertyVideo = () => {
  return (
    <div>
      <div className="bg-white mt-10 ">
        <div className="mt-6 px-10 flex flex-col">
          <div className="flex flex-col">
            <h1 className="font-bold pt-8 mr-4">Property's Video</h1>
            <div className="border-b-4 border-teal-500 w-12"></div>
          </div>

          <div className="py-6">
            <img src="/assets/floorvid.png" className="w-[800px]" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyVideo;

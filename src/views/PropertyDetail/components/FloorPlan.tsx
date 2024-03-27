import React from "react";

const FloorPlan = () => {
  return (
    <div className="bg-white mt-10 ">
      <div className="mt-6 px-10 flex flex-col">
        <div className="flex flex-col">
          <h1 className="font-bold pt-8 mr-4">Floor Plans</h1>
          <div className="border-b-4 border-teal-500 w-12"></div>
        </div>

        <div className="m-10">
          <img src="/assets/floorplan.png" alt="floorplan" />
        </div>
      </div>
    </div>
  );
};

export default FloorPlan;

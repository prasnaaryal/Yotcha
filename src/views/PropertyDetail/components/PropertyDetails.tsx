import React from "react";

const PropertyDetails = () => {
  return (
    <div>
      <div className="bg-white mt-10 ">
        <div className="mt-6 px-10 flex flex-col">
          <div className="flex flex-col">
            <h1 className="font-bold pt-8 mr-4">Property Details</h1>
            <div className="border-b-4 border-teal-500 w-12"></div>
          </div>

          <div className="flex flex-row mt-4">
            {/* First column */}
            <div className="flex flex-col mr-10">
              <p>Property ID:</p>
              <p>Property Price:</p>
              <p>Bath:</p>
              <p>Property type :</p>
            </div>

            {/* Second column */}
            <div className="flex flex-col mr-10">
              <p>Property Status:</p>
              <p>Room:</p>
              <p>Garages:</p>
            </div>

            {/* Third column */}
            <div className="flex flex-col">
              <p>Bedroom:</p>
              <p>Year Built:</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;

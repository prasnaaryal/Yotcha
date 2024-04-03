import React from "react";
import { Progress } from "@radix-ui/react-progress";

const Rating = () => {
  return (
    <div className="bg-white mt-10 rounded-xl">
      <div className="mt-6 px-10 flex flex-col">
        <div className="flex flex-col">
          <h1 className="font-bold pt-8 mr-4">Rating</h1>
          <div className="border-b-4 border-teal-500 my-2 w-12"></div>
        </div>

        <div className="flex flex-row gap-10 items-center">
          {/* Image */}
          <div>
            <img src="/assets/rate.png" alt="" />
          </div>

          {/* Progress bar */}
          <div>
            <div className="flex items-center">
              <h1 className="mr-2">Property</h1>
              <div className="w-20 h-2 bg-gray-200 rounded-full overflow-hidden">
                <Progress
                  value={10}
                  className="h-full bg-teal-400 rounded-full"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="border-b-2"></div>
      </div>
    </div>
  );
};

export default Rating;

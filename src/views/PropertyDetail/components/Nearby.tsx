import React from "react";
import { FaGraduationCap } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";

const Nearby = () => {
  return (
    <div className="bg-white mt-10 ">
      <div className="mt-6 px-10 flex flex-col">
        <div className="flex flex-col">
          <h1 className="font-bold pt-8 mr-4">What's Nearby</h1>
          <div className="border-b-4 border-teal-500 w-12"></div>
        </div>

        <div className="flex flex-col justify-start py-4">
          <div className="py-4">
            <div className="flex gap-2">
              <FaGraduationCap className=" text-cyan-500 mt-1" />

              <h1 className="font-bold text-cyan-500">Education</h1>
            </div>
            <div className="flex flex-row gap-4">
              <div>
                <p>Education Mandarin</p>
                <p>Education Mandarin</p>
                <p>Education Mandarin</p>
              </div>

              <div className="text-gray-400">
                <p>(15.61 miles)</p>
                <p>(15.61 miles)</p>
                <p>(15.61 miles)</p>
              </div>
            </div>
          </div>

          <div className="py-4">
            <div className="flex gap-2">
              <FaUserDoctor className=" text-teal-500 mt-1" />

              <h1 className="font-bold text-teal-500">Health & Medical</h1>
            </div>
            <div className="flex flex-row gap-4">
              <div>
                <p>Education Mandarin</p>
                <p>Education Mandarin</p>
                <p>Education Mandarin</p>
              </div>

              <div className="text-gray-400">
                <p>(15.61 miles)</p>
                <p>(15.61 miles)</p>
                <p>(15.61 miles)</p>
              </div>
            </div>
          </div>

          <div className="py-4">
            <div className="flex gap-2">
              <FaGraduationCap className=" text-rose-500 mt-1" />

              <h1 className="font-bold text-rose-500">Transportation</h1>
            </div>
            <div className="flex flex-row gap-4">
              <div>
                <p>Education Mandarin</p>
                <p>Education Mandarin</p>
                <p>Education Mandarin</p>
              </div>

              <div className="text-gray-400">
                <p>(15.61 miles)</p>
                <p>(15.61 miles)</p>
                <p>(15.61 miles)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nearby;

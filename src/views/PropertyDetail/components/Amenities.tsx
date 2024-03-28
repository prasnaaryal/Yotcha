import React from "react";
import { TiTick } from "react-icons/ti";

const Amenities = () => {
  return (
    <div>
      <div className="bg-white mt-10 rounded-xl ">
        <div className="mt-6 px-10 flex flex-col">
          <div className="flex flex-col">
            <h1 className="font-bold pt-8 mr-4">Amenities</h1>
            <div className="border-b-4 border-teal-500 w-12"></div>
          </div>

          <div>
            <div className="flex flex-col">
              <div>
                <h1 className="font-bold pt-8 mr-4">Lift</h1>
                <div className="border-b-2 ">
                  <p>Shared lift level</p>
                </div>
              </div>

              <div>
                <h1 className="font-bold p-4 mr-4">Kitchen</h1>
                <div className="flex gap-8">
                  <p className="flex gap-2">
                    <div className="rounded-full bg-slate-300 w-6 h-6 flex items-center justify-center mr-2">
                      <TiTick className="text-white" />
                    </div>
                    Stove
                  </p>

                  <p className="flex">
                    <div className="rounded-full bg-slate-300 w-6 h-6 flex items-center justify-center mr-2">
                      <TiTick className="text-white" />
                    </div>
                    Stove
                  </p>

                  <p className="flex">
                    <div className="rounded-full bg-slate-300 w-6 h-6 flex items-center justify-center mr-2">
                      <TiTick className="text-white" />
                    </div>
                    Stove
                  </p>

                  <p className="flex">
                    <div className="rounded-full bg-slate-300 w-6 h-6 flex items-center justify-center mr-2">
                      <TiTick className="text-white" />
                    </div>
                    Stove
                  </p>
                </div>
                <div className="border-b-2 m-4 flex gap-10 "></div>
              </div>

              <div>
                <h1 className="font-bold p-4 mr-4">Laundry</h1>
                <div className="flex gap-8">
                  <p className="flex gap-2">
                    <div className="rounded-full bg-slate-300 w-6 h-6 flex items-center justify-center mr-2">
                      <TiTick className="text-white" />
                    </div>
                    Washing Machine
                  </p>

                  <p className="flex">
                    <div className="rounded-full bg-slate-300 w-6 h-6 flex items-center justify-center mr-2">
                      <TiTick className="text-white" />
                    </div>
                    Dryer
                  </p>

                  <p className="flex">
                    <div className="rounded-full bg-slate-300 w-6 h-6 flex items-center justify-center mr-2">
                      <TiTick className="text-white" />
                    </div>
                    Stove
                  </p>

                  <p className="flex">
                    <div className="rounded-full bg-slate-300 w-6 h-6 flex items-center justify-center mr-2">
                      <TiTick className="text-white" />
                    </div>
                    Open Laundry Area
                  </p>
                </div>
                <div className="border-b-2 m-4 flex gap-10 "></div>
              </div>

              <div>
                <h1 className="font-bold p-4 mr-4">Bath</h1>
                <div className="flex gap-8">
                  <p className="flex">
                    <div className="rounded-full bg-slate-300 w-6 h-6 flex items-center justify-center mr-2">
                      <TiTick className="text-white" />
                    </div>
                    Stove
                  </p>

                  <p className="flex">
                    <div className="rounded-full bg-slate-300 w-6 h-6 flex items-center justify-center mr-2">
                      <TiTick className="text-white" />
                    </div>
                    Stove
                  </p>

                  <p className="flex">
                    <div className="rounded-full bg-slate-300 w-6 h-6 flex items-center justify-center mr-2">
                      <TiTick className="text-white" />
                    </div>
                    Stove
                  </p>

                  <p className="flex">
                    <div className="rounded-full bg-slate-300 w-6 h-6 flex items-center justify-center mr-2">
                      <TiTick className="text-white" />
                    </div>
                    Stove
                  </p>
                </div>
                <div className="border-b-2 m-4 flex gap-10 "></div>
              </div>

              <div>
                <h1 className="font-bold p-4 mr-4">Security</h1>
                <div className="flex gap-8">
                  <p className="flex">
                    <div className="rounded-full bg-slate-300 w-6 h-6 flex items-center justify-center mr-2">
                      <TiTick className="text-white" />
                    </div>
                    Intercom
                  </p>

                  <p className="flex">
                    <div className="rounded-full bg-slate-300 w-6 h-6 flex items-center justify-center mr-2">
                      <TiTick className="text-white" />
                    </div>
                    Card Access
                  </p>
                </div>
                <div className="border-b-2 m-2 flex gap-10 "></div>
              </div>

              <div>
                <h1 className="font-bold p-4 mr-4">Condo Facilities</h1>
                <div className="flex gap-8">
                  <p className="flex">
                    <div className="rounded-full bg-slate-300 w-6 h-6 flex items-center justify-center mr-2">
                      <TiTick className="text-white" />
                    </div>
                    Tennis Court
                  </p>
                </div>
                <div className="border-b-2 m-4 flex gap-10 "></div>
              </div>

              <div>
                <h1 className="font-bold p-4 mr-4">Estate Amenities</h1>
                <div className="flex gap-8">
                  <p className="flex">
                    <div className="rounded-full bg-slate-300 w-6 h-6 flex items-center justify-center mr-2">
                      <TiTick className="text-white" />
                    </div>
                    Children's playground
                  </p>

                  <p className="flex">
                    <div className="rounded-full bg-slate-300 w-6 h-6 flex items-center justify-center mr-2">
                      <TiTick className="text-white" />
                    </div>
                    Mini Mart
                  </p>
                </div>
                <div className="border-b-2 m-4 flex gap-10 "></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Amenities;

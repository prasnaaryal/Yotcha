import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { IoArrowRedo } from "react-icons/io5";
import {
  MdFavoriteBorder,
  MdOutlineEmail,
  MdOutlineMailOutline,
} from "react-icons/md";
import { TbArrowsShuffle } from "react-icons/tb";
import { SlCalender } from "react-icons/sl";

import TimePicker from "react-time-picker";

import { format } from "date-fns";
import { cn } from "@/lib/utils";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Rightbar = () => {
  const [date, setDate] = useState<Date>();
  const [counter, setCounter] = useState(0);
  const [initialCount, setInitialCount] = useState(0);
  const [time, setTime] = useState("12:00");

  const handleInitialCountChange = (e) => {
    setInitialCount(Number(e.target.value));
  };

  const handleReset = () => {
    setCounter(initialCount);
  };

  const handleClick1 = () => {
    setCounter(counter + 1);
  };

  const handleClick2 = () => {
    setCounter(counter - 1);
  };

  return (
    <div>
      <div className="bg-white mt-10 rounded-xl h-44 w-[350px] ">
        <div className="flex p-6 gap-10">
          <Button
            variant="outline"
            size="lg"
            className="rounded-lg w-36 h-12 bg-green-200 bg-opacity-20 border-teal-500 border-2"
          >
            <IoArrowRedo className="text-teal-500 m-2" />
            Share
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="rounded-lg w-36 h-12 bg-orange-200 bg-opacity-30 border-orange-400 border-2"
          >
            <MdFavoriteBorder className="text-orange-500 m-2" />
            Save
          </Button>
        </div>

        <div className="ml-8">
          <Button
            variant="outline"
            size="lg"
            className="rounded-lg w-72 h-12 bg-green-200 bg-opacity-20 border-teal-500 border-2"
          >
            <TbArrowsShuffle className="text-teal-500 m-2" />
            Add to Compare
          </Button>
        </div>
      </div>

      <div className="bg-white mt-10 rounded-xl h-80 w-[350px]">
        <h1>Schedule a Tour</h1>
        <div className="border-b-2"></div>

        <div className="p-8 flex flex-col gap-4">
          <div className="flex">
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-[240px] justify-start text-left font-normal",
                    !date && "text-muted-foreground"
                  )}
                >
                  <SlCalender className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>

            <TimePicker
              onChange={(value) => setTime(value || "00:00")}
              value={time}
              disableClock={true}
              className="border border-gray-300 rounded-md p-2 w-40" // Adjust the width as needed
            />
          </div>

          <div>
            <h1>Adult</h1>
            <div></div>
            <Button onClick={handleClick1}>+</Button>
            <h2></h2>
            <Button onClick={handleClick2}>-</Button>
          </div>
        </div>
      </div>

      <div className="bg-white mt-10 rounded-xl h-[799px] w-[350px] ">
        <h1 className="p-6 font-semibold text-lg">Agent Information</h1>
        <div className="border-b-2"></div>

        <div className="flex m-6">
          <img
            src="/assets/profile.png"
            className="w-auto h-24"
            alt="profile img"
          />
          <div>
            <h1 className="text-lg font-semibold mt-4">Lisa Clark</h1>
            <p className="text-slate-500 font-sm">Agent of Property</p>
          </div>
        </div>
        <div className="mx-6 ">
          <p className="flex gap-8 mb-6">
            <FaLocationDot className="text-teal-400 mt-1" />
            302 Av Park, New York
          </p>
          <p className="flex gap-8 mb-6">
            <FaPhone className="text-teal-400 mt-1" />
            (234) 0200 17813
          </p>
          <p className="flex gap-8 mb-10">
            <MdOutlineEmail className="text-teal-400 mt-1 text-bold " />
            lisa@gmail.com
          </p>
        </div>

        <div className="border-b-2"></div>

        <div>
          <h1 className="m-4 font-semibold text-base">Request Inquiry</h1>
          <Input placeholder="Full Name" className="h-11 w-[303px] m-4" />
          <Input placeholder="Phone Number" className="h-11 w-[303px] m-4" />
          <Input placeholder="Email Address" className="h-11 w-[303px] m-4 " />
          <Textarea placeholder="Message" className="h-24 w-[303px] m-4" />
        </div>

        <Button className="h-11 w-[303px] m-4">Submit Request</Button>
      </div>

      <div className="bg-white mt-10 rounded-xl h-[913px] w-[350px] ">
        <h1 className="p-6 font-semibold text-lg">Featured Property</h1>
        <div className="border-b-2"></div>

        <div className="flex m-6">
          <img
            src="/assets/profile.png"
            className="w-auto h-24"
            alt="profile img"
          />
          <div>
            <h1 className="text-lg font-semibold mt-4">Westchester Village</h1>
            <p className="text-slate-500 font-sm">July 24, 2022</p>
            <p className="flex gap-2 mb-6">
              <FaLocationDot className="text-teal-400 mt-1" />
              3599 Huntz Lane{" "}
            </p>
            <Button className="rounded-full w-14 h-7 bg-teal-200 bg-opacity-30 text-teal-500">
              Buy
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rightbar;

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { IoArrowRedo } from "react-icons/io5";
import { MdFavoriteBorder } from "react-icons/md";
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

const Rightbar = () => {
  const [date, setDate] = useState<Date>();
  const[counter,setCounter]=useState(0);
  const[initialCount,setInitialCount]=useState(0);
  const [time, setTime] = useState("12:00");

//   const handleInitialCountChange = (event) => { 
//     setInitialCount(Number(event.target.value)); 
// }; 

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
      <div className="bg-white mt-10 rounded-xl h-44 w-90 ">
        <div className="flex p-8 gap-10">
          <Button
            variant="outline"
            size="lg"
            className="rounded-lg w-36 h-12 bg-green-200 bg-opacity-20 border-teal-500 border-2"
          >
            <IoArrowRedo />
            Share
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="rounded-lg w-36 h-12 bg-orange-200 bg-opacity-30 border-orange-400 border-2"
          >
            <MdFavoriteBorder />
            Save
          </Button>
        </div>

        <div className="ml-8">
          <Button
            variant="outline"
            size="lg"
            className="rounded-lg w-80 h-12 bg-green-200 bg-opacity-20 border-teal-500 border-2"
          >
            <TbArrowsShuffle />
            Add to Compare
          </Button>
        </div>
      </div>

      <div className="bg-white mt-10 rounded-xl h-80 w-84 ">
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
            <div>
            </div>
              <Button onClick={handleClick1}>+</Button>
              <h2></h2>
              <Button onClick={handleClick2}>-</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rightbar;

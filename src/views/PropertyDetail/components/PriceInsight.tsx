import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const PriceInsight = () => {
  return (
    <div className="bg-white mt-10 rounded-xl">
      <div className="mt-6 px-10 flex flex-col ">
        <div className="flex flex-col">
          <h1 className="font-bold pt-8 mr-4">Price Insights</h1>
          <div className="border-b-4 border-teal-500 my-2 w-12"></div>
        </div>

        <div className="flex flex-row gap-10">
          <h1 className="font-bold pt-8 mr-4">Buying</h1>
          <h1 className="font-bold pt-8 mr-4 text-slate-500">Renting</h1>
        </div>
        <div className="border-b-2"></div>

        {/* buttons */}

        <div className="flex flex-row py-6">
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Theme" />
            </SelectTrigger>
          </Select>
          <div className="flex-grow"></div>{" "}
          {/* Make this div take up all available space */}
          <Tabs defaultValue="account" className="w-[400px] flex justify-end">
            <TabsList>
              <TabsTrigger value="account">1 Year</TabsTrigger>
              <TabsTrigger value="password">3 Years</TabsTrigger>
              <TabsTrigger value="password">5 Years</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        <div>
          <p>Last Transaction</p>
          <h1>S$ 1.13M</h1>
          <p>21 Transactions</p>
        </div>

        <div className="py-6">hlo</div>
      </div>
    </div>
  );
};

export default PriceInsight;

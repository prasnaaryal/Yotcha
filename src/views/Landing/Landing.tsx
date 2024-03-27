import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";
import { FaArrowsAlt } from "react-icons/fa";
import { FaBath, FaLocationDot } from "react-icons/fa6";
import { IoBed } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Filter from "./components/Filter";
import PropertyListing from "./components/PropertyListing";
import Location from "./components/Location";
import Clients from "./components/Clients";
import Misc from "./components/Misc";

const Landing = () => {
  return (
    <div>
      <Filter />
      <Clients />
      <PropertyListing />
      <Location />
      <Misc />
    </div>
  );
};

export default Landing;

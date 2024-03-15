import Image from "next/image";
import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Topbar = () => {
  const pages = [
    {
      title: "Buy",
      url: "/buy",
    },

    {
      title: "Sale",
      url: "/sale",
    },

    {
      title: "Rent",
      url: "/rent",
    },

    {
      title: "New Projects",
      url: "/new-projects",
    },

    {
      title: "Mortgages",
      url: "/mortgage",
    },
  ];

  return (
    <header className="container flex w-full justify-between py-5">
      <div className="flex-1  flex items-center w-full gap-14">
        <Image src="/assets/logo1.svg" width={95} height={33} alt="logo" />

        <NavigationMenu>
          <NavigationMenuList className="flex gap-7">
            {pages &&
              pages.map((page, index) => (
                <NavigationMenuItem key={index}>
                  <Link href={page?.url} legacyBehavior passHref>
                    <NavigationMenuLink>{page?.title}</NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      <div className="flex-1 flex w-full justify-end gap-4">
        <Button variant={"default"} size={"lg"}>
          Add listing
        </Button>

        <Button variant={"outline"} size={"lg"}>
          Login
        </Button>
      </div>
    </header>
  );
};

export default Topbar;

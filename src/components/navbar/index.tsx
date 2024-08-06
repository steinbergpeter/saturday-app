"use client";

import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "../ui/navigation-menu";

const NavBar = () => {
  return (
    <section className="flex justify-between w-full items-center">
      <Link href={"/"} className="font-extrabold text-xl">
        LOGO
      </Link>
      <NavigationMenu className="space-x-9">
        <NavigationMenuItem className="list-none">
          <NavigationMenuLink href="/" className={navigationMenuTriggerStyle()}>
            Home
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem className="list-none">
          <NavigationMenuLink
            href="/users"
            className={navigationMenuTriggerStyle()}
          >
            Users
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem className="list-none">
          <NavigationMenuLink
            href="/posts"
            className={navigationMenuTriggerStyle()}
          >
            Posts
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenu>
    </section>
  );
};

export default NavBar;

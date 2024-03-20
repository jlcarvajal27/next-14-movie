import { Navbar, NavbarBrand, NavbarContent, Input } from "@nextui-org/react";
import Switcher from "./Switcher";
import Search from "./Search";
import Link from "next/link";

const Header = () => {
  return (
    <Navbar isBordered maxWidth="2xl">
      <NavbarContent justify="start">
        <NavbarBrand className="mr-4">
          <p className="hidden sm:block font-bold text-inherit">
            <Link href="/">Jorge Carvajal Dev</Link>
          </p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent as="div" className="items-center" justify="center">
        <Search />
      </NavbarContent>
      <NavbarContent justify="end">
        <Switcher />
      </NavbarContent>
    </Navbar>
  );
};

export default Header;

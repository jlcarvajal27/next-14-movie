"use client";

import { Switch } from "@nextui-org/react";
import { SunIcon } from "./icons/SunIcons";
import { MoonIcon } from "./icons/MoonsIcons";
import { ReactNode, useEffect, useState } from "react";
import { useTheme } from "next-themes";

const Switcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleOfSwitch = (
    isSelected: boolean,
    className: string
  ): ReactNode => {
    if (isSelected) {
      setTheme("light");
      return <SunIcon className={className} />;
    } else {
      setTheme("dark");
      return <MoonIcon className={className} />;
    }
  };

  if (!mounted) return null;
  return (
    <Switch
      defaultSelected={theme === "light" ? true : false}
      size="lg"
      color="primary"
      thumbIcon={({ isSelected, className }) =>
        handleOfSwitch(isSelected, className)
      }
    />
  );
};

export default Switcher;

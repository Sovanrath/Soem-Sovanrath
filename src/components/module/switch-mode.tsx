"use client";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { MoonIcon, SunMediumIcon } from "lucide-react";
import { Switch } from "../UI/switch";

export function SwitchMode() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const toggleTheme = () => {
    setTheme(resolvedTheme === "light" ? "dark" : "light");
  };
  useEffect(() => {
    setIsDarkMode(true);
  }, []);

  return (
    <>
      <Switch
        icon={
          isDarkMode ? (
            <MoonIcon className="size-4 text-slate-50" />
          ) : (
            <SunMediumIcon className="size-4 " />
          )
        }
        checked={isDarkMode}
        onCheckedChange={setIsDarkMode}
        onClick={toggleTheme}
        className="h-7 w-12 bg-slate-300 data-[state=checked]:bg-slate-600"
        thumbClassName="h-6 w-6 data-[state=checked]:translate-x-5 bg-white data-[state=checked]:bg-slate-800 text-black"
      />
    </>
  );
}

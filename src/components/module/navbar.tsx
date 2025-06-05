"use client";
import { Menu, X } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "../UI/dropdown";
import Link from "next/link";
import { SwitchMode } from "./switch-mode";
import { useState } from "react";

export default function Mobile() {
  const [Open, setOpen] = useState(false);
  return (
    <DropdownMenu open={Open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        {Open ? <X /> : <Menu />}
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mt-2 mr-5 border-none bg-white dark:bg-stone-900 dark:bg-radial-[at_50%_50%] from-sky-950/20 from-10% to-90%">
        <nav className="flex items-center flex-col p-5 px-20 gap-5">
          {["home", "about", "projects", "contact"].map((item) => (
            <Link key={item} href={`#${item}`}>
              <p className="text-foreground text-base font-semibold relative hover:text-primary transition-colors duration-300 after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-primary after:bottom-[-5px] after:left-0 after:transition-all after:duration-300 hover:after:w-full">
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </p>
            </Link>
          ))}
          <SwitchMode />
        </nav>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

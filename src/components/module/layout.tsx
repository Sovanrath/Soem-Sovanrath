"use client";

import Link from "next/link";
import { SwitchMode } from "./switch-mode";
import { Motion } from "../UI/motion";
import { slideInYVariantsTop } from "@/lib/slide-motion";
import Mobile from "./navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground font-mono dark:bg-radial-[at_50%_50%] from-sky-950/60 from-10% to-90% to-stone-90">
      <header className="fixed top-0 w-full  backdrop-blur-md z-50 transition-all duration-300">
        <Motion
          variants={slideInYVariantsTop}
          className="max-w-7xl mx-auto flex justify-between items-center p-4"
        >
          <Link
            href="/"
            className="text-2xl font-bold text-shadow-sm/20 dark:text-shadow-white "
          >
            My Portfolio
          </Link>

          <nav className="flex items-center gap-5 max-sm:hidden">
            {["home", "about", "skill", "project"].map((item) => (
              <Link key={item} href={`#${item}`}>
                <p className="text-foreground text-base font-semibold relative hover:text-primary transition-colors duration-300 after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-primary after:bottom-[-5px] after:left-0 after:transition-all after:duration-300 hover:after:w-full">
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </p>
              </Link>
            ))}
          </nav>
          <div className="max-sm:hidden">
            <SwitchMode />
          </div>
          <div className="sm:hidden">
            <Mobile />
          </div>
        </Motion>
      </header>
      <main className="">{children}</main>
      <footer className="text-center py-8 bg-background text-muted-foreground text-sm">
        <p>© 2025 My Portfolio. Designed with vision.</p>
      </footer>
    </div>
  );
}

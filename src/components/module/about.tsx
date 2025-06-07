import {
  slideInXVariantsLeft,
  slideInYVariantsBottom,
} from "@/lib/slide-motion";
import { Motion } from "../UI/motion";
import Image from "next/image";

export function About() {
  return (
    <section
      id="about"
      className=" max-h-full max-sm:max-h-1/3 py-20 sm:py-36  max-w-7xl mx-auto flex justify-between items-center px-4"
    >
      <Motion
        delay={0.25}
        variants={slideInXVariantsLeft}
        className="w-full md:mr-24 "
      >
        <Image
          src="/about.png"
          alt=""
          width={450}
          height={450}
          quality={100}
          className="md:w-full h-full "
        />
      </Motion>
      <div className="md:w-1/2 h-auto flex flex-col justify-center">
        <Motion
          delay={0.25}
          variants={slideInYVariantsBottom}
          className="text-2xl md:text-4xl lg:text-7xl font-extrabold text-start"
        >
          About Me
        </Motion>
        <Motion
          delay={0.5}
          variants={slideInYVariantsBottom}
          className="font-medium  max-sm:text-sm text-base md:text-2xl max-w-2xl md:mt-5"
        >
          I&apos;m a front-end developer specializing in building responsive,
          user-friendly websites and web applications.
        </Motion>
      </div>
    </section>
  );
}

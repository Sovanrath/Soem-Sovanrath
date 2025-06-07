import {
  slideInXVariantsRight,
  slideInYVariantsBottom,
} from "@/lib/slide-motion";
import { Motion } from "../UI/motion";
import Image from "next/image";
import { Contact } from "@/constant/contact";
import Link from "next/link";

export function Hero() {
  return (
    <section>
      <div
        id="home"
        className=" max-h-full max-sm:max-h-1/3 pt-36 max-w-7xl mx-auto flex justify-between items-center px-4 text-center"
      >
        <div className="md:w-1/2">
          <Motion
            variants={slideInYVariantsBottom}
            className="text-2xl md:text-4xl lg:text-7xl font-extrabold"
          >
            Nice to meet you! I&apos;m Sovanrath
          </Motion>
          <Motion
            variants={slideInYVariantsBottom}
            delay={0.25}
            className="text-lg md:text-xl max-w-2xl mx-auto mt-4 dark:text-gray-300 text-gray-500"
          >
            front-end developer
          </Motion>
          <div className="flex items-center w-full justify-center gap-5 p-5 max-xs:hidden">
            {Contact.map((item, index) => (
              <Motion
                variants={slideInYVariantsBottom}
                key={index}
                delay={0.15 + index * 0.15}
              >
                <Link target="_blank" href={item.link}>
                  {item.icon && (
                    <item.icon className="hover:-translate-y-3 duration-300 max-sm:size-14 max-sm:p-2.5 size-20 p-5 rounded-2xl stroke-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.3)] dark:hover:shadow-[0_10px_30px_rgba(0,183,235,0.3)]" />
                  )}
                </Link>
              </Motion>
            ))}
          </div>
        </div>

        <Motion variants={slideInXVariantsRight} className="w-full md:mr-24  ">
          <Image
            src="/me.png"
            alt=""
            width={450}
            height={450}
            quality={100}
            className="w-full h-full"
          />
        </Motion>
      </div>
      <div className="flex items-center w-full justify-center gap-5 p-5 xs:hidden">
        {Contact.map((item, index) => (
          <Motion
            variants={slideInYVariantsBottom}
            key={index}
            delay={0.15 + index * 0.15}
          >
            <Link target="_blank" href={item.link}>
              {item.icon && (
                <item.icon className="hover:-translate-y-3 duration-300 size-14 p-2.5 rounded-2xl stroke-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.3)] dark:hover:shadow-[0_10px_30px_rgba(0,183,235,0.3)]" />
              )}
            </Link>
          </Motion>
        ))}
      </div>
    </section>
  );
}

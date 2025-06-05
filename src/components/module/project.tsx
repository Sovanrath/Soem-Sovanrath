import { slideInYVariantsBottom } from "@/lib/slide-motion";
import { Motion } from "../UI/motion";
import Image from "next/image";
import { ProjectData } from "@/constant/project";
import Link from "next/link";
import { Button } from "../UI/button";

export function Project() {
  return (
    <section
      id="skill"
      className=" max-h-full max-sm:max-h-1/3 py-20  max-w-7xl mx-auto flex flex-col items-center px-4 gap-10"
    >
      <Motion
        delay={0.25}
        variants={slideInYVariantsBottom}
        className="text-2xl md:text-4xl lg:text-7xl font-extrabold text-start"
      >
        Project
      </Motion>
      <div className="w-full grid xs:grid-cols-2 gap-5 max-sm:gap-2.5">
        {ProjectData.map((item, index) => (
          <div
            key={index}
            className="rounded-2xl hover:shadow-[0_10px_30px_rgba(0,0,0,0.3)] dark:hover:shadow-[0_10px_30px_rgba(0,183,235,0.3)] hover:-translate-y-3 duration-300 py-2.5 group overflow-hidden"
          >
            <Motion
              variants={slideInYVariantsBottom}
              delay={index * 0.15}
              className="flex  gap-2.5 sm:gap-2 flex-col "
            >
              <div className="flex items-center justify-center ">
                <Image
                  src={item.image}
                  alt=""
                  width={400}
                  height={220}
                  className="rounded-xl w-11/12 h-full  group-hover:scale-105 group-hover:-rotate-2 overflow-hidden duration-500"
                />
              </div>
              <h3 className="text-lg font-medium text-center max-sm:text-sm max-md:text-base">
                {item.name}
              </h3>

              <div className="flex gap-5 px-5">
                <Button
                  asChild
                  className="dark:hover:inset-shadow-[0_10px_30px_rgba(0,183,235,0.3)] dark:inset-shadow-[0_5px_20px_rgba(0,183,235,0.1)] inset-shadow-2xs hover:inset-shadow-[0_10px_30px_rgba(0,0,0,0.1)]"
                >
                  <Link target="_blank" href={item.url}>
                    View Project
                  </Link>
                </Button>
              </div>
            </Motion>
          </div>
        ))}
      </div>
    </section>
  );
}

import { slideInYVariantsBottom } from "@/lib/slide-motion";
import { Motion } from "../UI/motion";
import Image from "next/image";
import { SkillData } from "@/constant/skill";
import { cn } from "@/lib/utils";

export function Skill() {
  return (
    <section
      id="skill"
      className=" max-h-full max-sm:max-h-1/3 sm:py-20  max-w-7xl mx-auto flex flex-col items-center px-4 gap-10"
    >
      <Motion
        delay={0.25}
        variants={slideInYVariantsBottom}
        className="text-2xl md:text-4xl lg:text-7xl font-extrabold text-start"
      >
        My Skill
      </Motion>
      <div className="w-full grid grid-cols-8 max-2xs:grid-cols-2 max-xs:grid-cols-2 max-sm:grid-cols-5 max-md:grid-cols-6 max-lg:grid-cols-7 gap-5 max-sm:gap-2.5">
        {SkillData.map((item, index) => (
          <div
            key={index}
            className={cn(
              "rounded-2xl group hover:shadow-[0_10px_30px_rgba(0,0,0,0.3)] dark:hover:shadow-[0_10px_30px_rgba(0,183,235,0.3)] hover:-translate-y-3 duration-300 py-2.5",
              index === 6 && "hidden dark:block",
              index === 7 && "dark:hidden ",
            )}
          >
            <Motion
              variants={slideInYVariantsBottom}
              delay={index * 0.05}
              className="flex  gap-2.5 sm:gap-2 xs:flex-col "
            >
              <div className="flex items-center justify-center ">
                <Image
                  src={item.image}
                  alt=""
                  width={400}
                  height={220}
                  className="w-1/2 max-sm:w-10 lg:w-14 group-hover:rotate-6 duration-300"
                />
              </div>
              <h3 className="text-lg font-medium text-center max-sm:text-sm max-md:text-base">
                {item.name}
              </h3>
            </Motion>
          </div>
        ))}
      </div>
    </section>
  );
}

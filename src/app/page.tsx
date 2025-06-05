import { About } from "@/components/module/about";
import { Hero } from "@/components/module/hero";
import Layout from "@/components/module/layout";
import { Project } from "@/components/module/project";
import { Skill } from "@/components/module/skill";

export default function Home() {
  return (
    <div>
      <Layout>
        <Hero />
        <About />
        <Skill />
        <Project />
      </Layout>
    </div>
  );
}

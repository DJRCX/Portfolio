import dynamic from "next/dynamic";
import Hero from "@/components/Hero";
import StaggeredReveal from "@/components/StaggeredReveal";

const Nav = dynamic(() => import("@/components/Nav"), { ssr: true });
const JsonLd = dynamic(() => import("@/components/JsonLd"), { ssr: true });
const BioTabs = dynamic(() => import("@/components/BioTabs"), { ssr: true });
const Projects = dynamic(() => import("@/components/Projects"), { ssr: true });
const Skills = dynamic(() => import("@/components/Skills"), { ssr: true });
const Contact = dynamic(() => import("@/components/Contact"), { ssr: true });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: true });

export default function Home() {
  const components = [
    { Component: Hero, key: "hero" },
    { Component: Skills, key: "skills" },
    { Component: BioTabs, key: "bio" },
    { Component: Projects, key: "projects" },
    { Component: Contact, key: "contact" },
    { Component: Footer, key: "footer" },
  ];

  return (
    <>
      <JsonLd />
      <Nav />
      {components.map(({ Component, key }, index) => (
        <StaggeredReveal key={key} index={index}>
          <Component />
        </StaggeredReveal>
      ))}
    </>
  );
}

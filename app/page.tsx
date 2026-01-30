import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import BioTabs from "@/components/BioTabs";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import StaggeredReveal from "@/components/StaggeredReveal";

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

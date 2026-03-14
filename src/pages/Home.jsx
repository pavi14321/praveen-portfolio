import Hero from "../components/sections/Hero";
import Skills from "../components/sections/Skills";
import Projects from "../components/sections/Projects";
import Experience from "../components/sections/Experience";
import Contact from "../components/sections/Contact";

const Divider = () => (
  <div className="max-w-6xl mx-auto px-6">
    <div style={{ height: "1px", background: "linear-gradient(90deg, transparent, #1e1e2e, transparent)" }} />
  </div>
);

export default function Home() {
  return (
    <>
      <Hero />
      <Divider />
      <Skills />
      <Divider />
      <Projects />
      <Divider />
      <Experience />
      <Divider />
      <Contact />
    </>
  );
}
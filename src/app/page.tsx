import ProjectShowcase from "@/app/components/ProjectShowcase/ProjectShowcase";
import Hero from "./components/Hero/Hero";
import About from "@/app/components/About/About";
import ContactCTA from "@/app/components/ContactCTA/ContactCTA";
import Navbar from "@/app/components/Navbar/Navbar";


export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ProjectShowcase />
      <About />
      <ContactCTA />
    </main>
  );
}

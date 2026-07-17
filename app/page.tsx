import { BackendStatusProvider } from "../components/BackendStatusContext";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Marquee from "../components/Marquee";
import Work from "../components/Work";
import CaseStudies from "../components/CaseStudies";
import Capabilities from "../components/Capabilities";
import Process from "../components/Process";
import About from "../components/About";
import Credentials from "../components/Credentials";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <BackendStatusProvider>
      <main>
        <Header />
        <Hero />
        <Marquee />
        <Work />
        <CaseStudies />
        <Capabilities />
        <Process />
        <About />
        <Credentials />
        <Contact />
      </main>
    </BackendStatusProvider>
  );
}

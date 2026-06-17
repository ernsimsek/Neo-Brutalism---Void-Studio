import Nav from '../components/layout/Nav';
import Hero from '../components/sections/Hero';
import Ticker from '../components/sections/Ticker';
import Work from '../components/sections/Work';
import Process from '../components/sections/Process';
import Stats from '../components/sections/Stats';
import Services from '../components/sections/Services';
import Clients from '../components/sections/Clients';
import About from '../components/sections/About';
import Contact from '../components/sections/Contact';

export default function Home() {
  return (
    <main id="main-content">
      <Nav />

      {/* SECTION 1 — HERO */}
      <Hero />

      {/* SECTION 2 — MANIFESTO TICKER */}
      <Ticker />

      {/* SECTION 3 — SELECTED WORK */}
      <Work />

      {/* SECTION 4 — PROCESS */}
      <Process />

      {/* SECTION 5 — STUDIO NUMBERS */}
      <Stats />

      {/* SECTION 6 — SERVICES */}
      <Services />

      {/* SECTION 7 — CLIENTS */}
      <Clients />

      {/* SECTION 8 — ABOUT / TEAM */}
      <About />

      {/* SECTION 9 — CONTACT / FOOTER */}
      <Contact />
    </main>
  );
}

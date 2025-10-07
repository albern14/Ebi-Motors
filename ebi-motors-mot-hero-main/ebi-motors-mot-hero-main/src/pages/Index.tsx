import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <Services />
      <About />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
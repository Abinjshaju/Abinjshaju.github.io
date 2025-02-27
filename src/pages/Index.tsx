
import { Navigation } from "@/components/layout/Navigation";
import { Hero } from "@/components/sections/Hero";
import { Work } from "@/components/sections/Work";
import { Skills } from "@/components/sections/Skills";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/layout/Footer";

const Index = () => {
  return (
    <div className="bg-[rgba(243,243,243,1)] flex flex-col overflow-hidden items-center pt-28 pb-[52px] px-20 max-md:pt-[100px] max-md:px-5">
      <main className="w-full max-w-[1120px] max-md:max-w-full">
        <Navigation />
        <Hero />
        <Work />
        <Skills />
        <Contact />
        <Footer />
      </main>
    </div>
  );
};

export default Index;

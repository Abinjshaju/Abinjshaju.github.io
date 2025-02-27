
import { Link } from "react-router-dom";

export const Navigation = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="flex w-full gap-5 text-[21px] text-black font-medium whitespace-nowrap tracking-[-0.63px] leading-[1.2] flex-wrap justify-between max-md:max-w-full">
      <img
        loading="lazy"
        src="src/images/logo.svg"
        className="aspect-[2.92] object-contain w-[67px] fill-[#181717] shrink-0"
        alt="Logo"
      />
      <div className="flex gap-[31px]">
        <button onClick={() => scrollToSection('work')} className="hover:underline">
          Work
        </button>
        <button onClick={() => scrollToSection('contact')} className="hover:underline">
          Contact
        </button>
      </div>
    </nav>
  );
};

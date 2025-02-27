export const Footer = () => {
  return (
    <footer className="flex w-full items-stretch gap-5 text-[21px] font-medium tracking-[-0.63px] flex-wrap justify-between mt-[175px] py-[3px] max-md:max-w-full max-md:mr-1 max-md:mt-10">
      <div className="text-[#000001] leading-[25px]">
        Abin Jose Shaju ⏤ 2024
      </div>
      <div className="flex mt-[-5px] items-stretch gap-[37px] text-black whitespace-nowrap leading-[1.2]">
        <a href="https://github.com/Abinjshaju" className="leading-[25px] hover:underline">
          Github
        </a>
        <a href="https://www.linkedin.com/in/abinshaju/" className="hover:underline">
          Linkedin
        </a>
        <a href="https://x.com/unfuckebin" className="hover:underline">
          Twitter
        </a>
      </div>
    </footer>
  );
};

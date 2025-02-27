
export const Contact = () => {
  return (
    <section id="contact">
      <div className="bg-[rgba(24,23,23,1)] flex shrink-0 h-0.5 mt-[134px] max-md:max-w-full max-md:mt-10" />
      <div className="flex w-full max-w-[1041px] gap-5 text-black font-normal flex-wrap justify-between mt-[71px] max-md:max-w-full max-md:mt-10">
        <h2 className="text-[32px] leading-[37px] tracking-[-0.96px]">
          Contact
        </h2>
        <div className="flex flex-col items-stretch mt-[7px]">
          <a
            href="mailto:abinjshaju@gmail.com"
            className="text-[32px] leading-none tracking-[-0.96px] hover:underline"
          >
            abinjshaju@gmail.com
          </a>
          <a
            href="#"
            className="text-lg leading-none tracking-[-0.54px] mt-[27px] hover:underline"
          >
            View Resume
          </a>
        </div>
      </div>
    </section>
  );
};

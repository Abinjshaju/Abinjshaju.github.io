export const Hero = () => {
  return (
    <div className="mt-[220px] max-md:max-w-full max-md:mt-10">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
        <div className="w-[57%] max-md:w-full max-md:ml-0">
          <div className="flex grow flex-col items-stretch text-black max-md:max-w-full max-md:mt-10">
            <h1 className="text-6xl font-medium leading-[58px] tracking-[-1.8px] max-md:max-w-full max-md:text-[40px] max-md:leading-[43px]">
              Hi, I’m Abin, an AI/ML Engineer based in Kerala, In.
            </h1>
            <p className="text-[32px] font-normal leading-[37px] tracking-[-0.96px] mt-[59px] max-md:max-w-full max-md:mt-10">
              I specialize in artificial intelligence, machine learning,
              software development, and deployment. I’m passionate about
              building innovative solutions and constantly exploring
              cutting-edge technologies to stay ahead in the field.
              <br />
              <br />
              Currently, I’m working as an AI/ML Engineer at{" "}
              <a href="https://www.vizru.com" className="hover:underline">
                Vizru
              </a>
              . where I contribute to developing intelligent systems and
              scalable solutions.
            </p>
          </div>
        </div>
        <div className="w-[43%] ml-5 max-md:w-full max-md:ml-0">
          <img
            loading="lazy"
            srcSet="
            /src/images/output-100w.jpg 100w,
            /src/images/output-200w.jpg 200w,
            /src/images/output-400w.jpg 400w,
            /src/images/output-800w.jpg 800w,
            /src/images/output-1200w.jpg 1200w,
            /src/images/output-1600w.jpg 1600w,
            /src/images/output-2000w.jpg 2000w
          "
            src="/src/images/output-800w.jpg" // Fallback image if srcSet isn't supported
            className="aspect-[0.71] object-contain w-full max-md:max-w-full max-md:mt-10"
            alt="Portrait"
          />
        </div>
      </div>
    </div>
  );
};

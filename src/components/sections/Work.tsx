type Project = {
  number: string;
  title: string;
  description: string;
  technicalDetails?: string;
  link: {
    text: string;
    url: string;
  };
  imageUrl: string;
};

const projects: Project[] = [
  {
    number: "01",
    title: "Intelligent Chatbot for Domain-Specific Q&A",
    description:
      "Chatbot capable of answering domain-specific questions using transformer models like GPT and BERT.",
    technicalDetails:
      "FastAPI, Hugging Face Transformers, LangChain, Milvus, OpenAI/GPT, React.",
    link: {
      text: "More from this project",
      url: "https://github.com/Abinjshaju",
    },
    imageUrl: "src/images/logo.svg",
  },
  {
    number: "02",
    title: "Time Series Forecasting for Sales Prediction",
    description:
      "Predictive model for sales forecasting using ARIMA, LSTMs, and Facebook Prophet.",
    technicalDetails:
      "Python, Pandas, Scikit-Learn, TensorFlow (LSTM), Facebook Prophet, Matplotlib",
    link: {
      text: "More from this project",
      url: "https://github.com/Abinjshaju",
    },
    imageUrl: "src/images/logo.svg",
  },
  {
    number: "03",
    title: "Movie Recommendation System",
    description:
      "Machine learning-based system designed to suggest movies to users based on their preferences, interactions, and other data sources.",
    link: {
      text: "More from this project",
      url: "https://github.com/Abinjshaju/MovieRec",
    },
    imageUrl: "src/images/logo.svg",
  },
];

export const Work = () => {
  return (
    <section id="work" className="mt-[132px] max-md:mt-10">
      {projects.map((project, index) => (
        <div key={project.number} className="mb-[100px] last:mb-0">
          <div className="flex flex-col gap-5">
            <div className="flex gap-5 items-start">
              <div className="w-[57%] max-md:w-full">
                <div className="flex flex-col gap-5">
                  <div className="flex items-center gap-2 text-lg text-black tracking-[-0.54px]">
                    <span className="font-medium">{project.number}</span>
                    <span className="font-medium">/</span>
                    <span className="font-medium">{project.title}</span>
                  </div>
                  <p className="text-lg text-black font-normal tracking-[-0.54px] leading-[22px]">
                    {project.description}
                  </p>
                  {project.technicalDetails && (
                    <p className="text-sm text-[#666666] font-normal tracking-[-0.36px] leading-[17px] mt-2">
                      {project.technicalDetails}
                    </p>
                  )}
                  <a
                    href={project.link.url}
                    className="text-lg text-black font-normal tracking-[-0.54px] leading-[22px] underline mt-4 inline-block hover:text-gray-700"
                  >
                    {project.link.text} →
                  </a>
                </div>
              </div>
              <div className="w-[43%] aspect-video bg-[#D9D9D9]">
                <img
                  src={project.imageUrl}
                  alt={`Project ${project.number}`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            {index !== projects.length - 1 && (
              <div className="w-full h-px bg-[#181717] my-[50px]" />
            )}
          </div>
        </div>
      ))}
    </section>
  );
};

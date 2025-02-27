export const Skills = () => {
  return (
    <section id="about">
      <div className="w-[607px] max-w-full mt-[132px] max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          <div className="w-[22%] max-md:w-full max-md:ml-0">
            <h2 className="text-black text-lg font-medium leading-none tracking-[-0.54px] underline decoration-solid decoration-auto underline-offset-auto max-md:mt-10">
              Main Software & Tools
            </h2>
          </div>
          <div className="w-[78%] ml-5 max-md:w-full max-md:ml-0">
            <div className="flex grow flex-col items-stretch text-lg text-black font-normal tracking-[-0.54px] max-md:mt-10">
              <p className="leading-[22px]">
                Python, FastAPI, LangChain, Poetry, Docker, Kubernetes
                <br />
                <br />
                TensorFlow, PyTorch, Scikit-learn, Hugging Face Transformers
                <br />
                <br />
                Weaviate, Milvus, MongoDB, PostgreSQL, Pandas, NumPy
                <br />
                <br />
                MLflow, Apache Kafka, AWS/GCP/Azure, CI/CD (GitHub Actions,
                Jenkins)
                <br />
                <br />
                Streamlit, Plotly, Matplotlib, React, D3.js
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex w-[588px] max-w-full items-stretch gap-[40px_99px] text-lg text-black tracking-[-0.54px] flex-wrap mt-[72px] max-md:mt-10">
        <h2 className="font-medium leading-none underline decoration-solid decoration-auto underline-offset-auto">
          Main Skills
        </h2>
        <p className="font-normal leading-[22px] grow shrink w-96">
          Natural Language Processing (NLP) & Large Language Models (LLMs)
          <br />
          <br />
          Time Series Forecasting & Predictive Analytics
          <br />
          <br />
          Vector Search & Semantic Retrieval (RAG, Weaviate, FAISS)
          <br />
          <br />
          Model Training, Fine-Tuning & Deployment
          <br />
          <br />
          API Development & Scalable Microservices
          <br />
          <br />
          Data Engineering & Preprocessing
          <br />
          <br />
          Machine Learning & Deep Learning Model Optimization
          <br />
          <br />
          Generative AI & Computer Vision
        </p>
      </div>
    </section>
  );
};

export default function ChurnPredictor() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-20 text-white">
      <h1 className="text-4xl font-bold mb-4">AI Customer Churn Predictor</h1>

      <p className="text-gray-400 mb-8">
        ML system that predicts customer churn to help businesses take preventive action.
      </p>

      <img src="/projects/churn-predictor.png" className="rounded-xl shadow-lg mb-12" />

      <h2 className="section-title">What I Built</h2>
      <ul className="list-disc list-inside text-gray-400 mb-6">
        <li>Data preprocessing & feature engineering</li>
        <li>ML classification model</li>
        <li>FastAPI backend for inference</li>
        <li>Streamlit frontend</li>
      </ul>

      <h2 className="section-title">Tech Stack</h2>
      <p className="text-gray-400">Python, Pandas, Scikit-learn, FastAPI</p>

      <a
        href="https://github.com/dhriti16sharma/AI-Customer-Churn-Predictor"
        target="_blank"
        className="btn mt-8"
      >
        GitHub
      </a>
    </section>
  );
}

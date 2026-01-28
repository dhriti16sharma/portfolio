export default function ChurnPredictor() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-20 text-white">
      <h1 className="text-4xl font-bold mb-4">AI Customer Churn Predictor</h1>
      <p className="text-gray-400 mb-8">
        End-to-end machine learning system to predict customer churn using historical customer data.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Problem</h2>
      <p className="text-gray-400 mb-6">
        Businesses lose revenue when customers silently churn. This project predicts
        whether a customer is likely to leave so preventive action can be taken.
      </p>

      <h2 className="text-2xl font-semibold mb-2">What I Built</h2>
      <ul className="list-disc list-inside text-gray-400 mb-6">
        <li>Data preprocessing & feature engineering</li>
        <li>Supervised ML classification model</li>
        <li>FastAPI backend for real-time predictions</li>
        <li>Streamlit frontend for user interaction</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2">Tech Stack</h2>
      <p className="text-gray-400 mb-6">
        Python, Scikit-learn, Pandas, FastAPI, Streamlit
      </p>

      <a
        href="https://github.com/dhriti16sharma/AI-Customer-Churn-Predictor"
        target="_blank"
        className="underline"
      >
        View Source Code →
      </a>
    </section>
  );
}

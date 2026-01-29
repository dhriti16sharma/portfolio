"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Github } from "lucide-react";

export default function ChurnPredictor() {
  return (
    <main className="min-h-screen bg-[#181a1b] text-white px-6 md:px-12 py-10">

      <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8">
        <ArrowLeft size={18} /> Back
      </Link>

      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">

        <Card title="AI Customer Churn Predictor">
          End-to-end machine learning system that predicts customer churn
          using historical customer data to enable proactive decision-making.
        </Card>

        <Card title="What I Built">
          <ul className="list-disc list-inside space-y-2">
            <li>Data preprocessing & feature engineering</li>
            <li>ML classification model</li>
            <li>FastAPI backend for inference</li>
            <li>Streamlit-based frontend</li>
          </ul>
        </Card>

        <Card title="Tech Stack">
          Python, Pandas, Scikit-learn, FastAPI, Streamlit
        </Card>

        <Card>
          <a
            href="https://github.com/dhriti16sharma/AI-Customer-Churn-Predictor"
            target="_blank"
            className="inline-flex items-center gap-2 bg-white text-black px-5 py-2 rounded-full"
          >
            <Github size={18} /> GitHub
          </a>
        </Card>

      </section>
    </main>
  );
}

function Card({ title, children }: { title?: string; children: React.ReactNode }) {
  return (
    <div className="bg-[#242628] rounded-3xl p-8">
      {title && <h2 className="text-2xl font-semibold mb-4">{title}</h2>}
      <div className="text-gray-400 leading-relaxed">{children}</div>
    </div>
  );
}

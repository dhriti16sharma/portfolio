"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ExternalLink, FileText } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white px-6 md:px-12">

      {/* HERO */}
      <section className="max-w-6xl mx-auto min-h-screen flex items-center">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="flex flex-col md:flex-row items-center gap-10">
          <img
            src="/profile.png"
            alt="Dhriti Sharma"
            className="w-48 h-48 md:w-56 md:h-56 rounded-full object-cover border-4 border-gray-700 shadow-lg"
          />

          <div>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">Dhriti Sharma</h1>
            <p className="mt-3 text-lg text-gray-300">
              AI Engineer • Frontend Developer • Computer Vision Enthusiast
            </p>
            <p className="mt-6 max-w-2xl text-lg text-gray-300 leading-relaxed">
              Computer Science undergraduate with hands-on experience in AI/ML,
              computer vision, and production-grade frontend development.
            </p>

            <div className="flex flex-wrap gap-4 mt-6">
              <a href="https://github.com/dhriti16sharma" target="_blank" className="px-5 py-2 rounded-xl bg-white text-black flex items-center gap-2">
                <Github size={18} /> GitHub
              </a>
              <a href="https://www.linkedin.com/in/dhriti-sharma1601" target="_blank" className="px-5 py-2 rounded-xl border border-gray-600 flex items-center gap-2">
                <Linkedin size={18} /> LinkedIn
              </a>
              <a href="/resume.pdf" target="_blank" className="px-5 py-2 rounded-xl border border-gray-600 flex items-center gap-2">
                <FileText size={18} /> Resume
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* SKILLS */}
      <section className="max-w-6xl mx-auto py-20">
        <h2 className="text-3xl font-semibold mb-8">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {["Python", "Machine Learning", "Computer Vision", "MediaPipe", "OpenCV", "FastAPI", "Next.js", "React", "Tailwind CSS", "TypeScript", "Git", "GitHub"].map(skill => (
            <div
              key={skill}
              className="bg-gray-900 rounded-xl px-4 py-3 text-center text-gray-300 transition-transform duration-300 hover:scale-110 hover:bg-gray-800 cursor-default"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      
      <section className="max-w-6xl mx-auto py-20">
        <h2 className="text-3xl font-semibold mb-10">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">

          <Project
            title="Sahore Life – Healthcare Platform"
            desc="Frontend development for a production healthcare platform during internship."
            slug="sahore-life"
          />

          <Project
            title="AI Customer Churn Predictor"
            desc="End-to-end ML pipeline with FastAPI backend and Streamlit frontend."
            slug="churn-predictor"
          />

          <Project
            title="HandSketch – Computer Vision"
            desc="Real-time hand gesture recognition and drawing using MediaPipe & OpenCV."
            slug="handsketch"
          />

          <Project
            title="Student Management System"
            desc="CRUD-based system for managing student records with authentication."
            slug="student-management"
          />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center text-gray-500 pb-10">
        © {new Date().getFullYear()} Dhriti Sharma
      </footer>
    </main>
  );
}
type ProjectProps = {
  title: string;
  desc: string;
  slug: string;
};

function Project({ title, desc, slug }: ProjectProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="bg-gray-900 rounded-2xl p-6"
    >
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400 mb-4">{desc}</p>
      <Link
        href={`/projects/${slug}`}
        className="inline-flex items-center gap-2 text-sm hover:text-white"
      >
        View Project <ExternalLink size={14} />
      </Link>
    </motion.div>
  );
}

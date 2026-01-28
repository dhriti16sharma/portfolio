"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Github, Linkedin, FileText } from "lucide-react";

type ProjectProps = {
  title: string;
  desc: string;
  slug: string;
  image: string;
};

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white px-6 md:px-12">

      {/* HERO */}
      <section className="max-w-6xl mx-auto min-h-screen flex items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row items-center gap-10"
        >
          <img
            src="/profile.png"
            alt="Dhriti Sharma"
            className="w-48 h-48 md:w-56 md:h-56 rounded-full object-cover border-4 border-gray-700 shadow-lg"
          />

          <div>
            <h1 className="text-5xl md:text-7xl font-bold">
              Dhriti Sharma
            </h1>

            <p className="mt-3 text-lg text-gray-300">
              AI Engineer • Frontend Developer • Computer Vision
            </p>

            <p className="mt-6 max-w-2xl text-gray-400 text-lg">
              Computer Science undergraduate building intelligent systems,
              real-world AI projects, and clean, scalable web applications.
            </p>

            <div className="flex flex-wrap gap-4 mt-6">
              <a href="https://github.com/dhriti16sharma" target="_blank" className="btn">
                <Github size={18} /> GitHub
              </a>
              <a href="https://www.linkedin.com/in/dhriti-sharma1601" target="_blank" className="btn-outline">
                <Linkedin size={18} /> LinkedIn
              </a>
              <a href="/resume.pdf" target="_blank" className="btn-outline">
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
          {[
            "Python", "Machine Learning", "Computer Vision", "MediaPipe",
            "OpenCV", "FastAPI", "Next.js", "React",
            "Tailwind CSS", "TypeScript", "Git", "GitHub",
          ].map(skill => (
            <div
              key={skill}
              className="bg-gray-900 rounded-xl px-4 py-3 text-center text-gray-300
                         transition-transform duration-300 hover:scale-110 hover:bg-gray-800"
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
            desc="Production healthcare website built during my frontend internship."
            slug="sahore-life"
            image="/projects/sahore-life.png"
          />
          <Project
            title="AI Customer Churn Predictor"
            desc="End-to-end ML system for predicting customer churn."
            slug="churn-predictor"
            image="/projects/churn-predictor.png"
          />
          <Project
            title="HandSketch – Computer Vision"
            desc="Real-time hand gesture recognition and drawing system."
            slug="handsketch"
            image="/projects/handsketch.png"
          />
          <Project
            title="Student Management System"
            desc="CRUD-based platform for managing student records."
            slug="student-management"
            image="/projects/student-management.png"
          />
        </div>
      </section>

      <footer className="text-center text-gray-500 pb-10">
        © {new Date().getFullYear()} Dhriti Sharma
      </footer>
    </main>
  );
}

function Project({ title, desc, slug, image }: ProjectProps) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="bg-gray-900 rounded-2xl overflow-hidden shadow-lg"
    >
      <img
        src={image}
        alt={title}
        className="h-48 w-full object-cover transition-transform duration-300 hover:scale-105"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-400 mb-4">{desc}</p>
        <Link href={`/projects/${slug}`} className="text-blue-400 hover:text-blue-300">
          View Details →
        </Link>
      </div>
    </motion.div>
  );
}

/* buttons */
const btn = "inline-flex items-center gap-2 px-5 py-2 bg-white text-black rounded-xl";
const btnOutline = "inline-flex items-center gap-2 px-5 py-2 border border-gray-600 rounded-xl";

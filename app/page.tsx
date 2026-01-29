"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Github, Linkedin, FileText, ArrowRight } from "lucide-react";

// ---------------- TYPES ----------------
type CardProps = {
  title: string;
  subtitle?: string;
  href: string;
  image?: string;
  highlight?: boolean;
};

// ---------------- PAGE ----------------
export default function Home() {
  const [showImage, setShowImage] = React.useState(false);
  return (
    <main className="min-h-screen bg-[#181a1b] text-white px-6 md:px-12 py-10">

      {/* NAVBAR */}
     <header className="max-w-7xl mx-auto flex items-center justify-between mb-14">
  <h1 className="text-xl font-semibold">Dhriti</h1>

  <nav className="hidden md:flex gap-8 text-gray-300">
    <a
      href="https://github.com/dhriti16sharma"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-white"
    >
      Work
    </a>
    <a
      href="/RESUME.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-white"
    >
      Resume
    </a>
  </nav>
       <a
  href="https://www.linkedin.com/in/dhriti-sharma1601"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-white text-black px-5 py-2 rounded-full text-sm font-medium"
>
  GET IN TOUCH
</a>
      </header>

      {/* GRID */}
      <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 auto-rows-[220px] gap-6">

        {/* HERO CARD */}
       <motion.div
  whileHover={{ scale: 1.02 }}
  className="md:col-span-2 relative bg-[#242628] rounded-3xl overflow-hidden"
>
  {/* DARK BASE */}
  <div className="absolute inset-0 bg-[#181a1b]" />

  {/* DARK OVERLAY – SAME AS PROJECTS */}
  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

  {/* CONTENT */}
  <div className="relative z-10 h-full p-8 flex flex-col justify-between">
    <div className="flex items-center gap-4">
      {/* PROFILE IMAGE (CLICKABLE) */}
      <motion.img
        src="/profile.png"
        alt="Dhriti Sharma"
        whileHover={{ scale: 1.05 }}
        onClick={() => setShowImage(true)}
        className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover cursor-pointer border border-white/10"
      />

      <div>
        <h2 className="text-3xl font-semibold text-white">
          Hey, I’m Dhriti 👋
        </h2>
        <p className="text-gray-300 text-sm">
          AI Engineer • Frontend Developer
        </p>
      </div>
    </div>

    <Link
      href="#about"
      className="flex items-center gap-2 text-gray-300 hover:text-white"
    >
      About me <ArrowRight size={18} />
    </Link>
  </div>
</motion.div>


        {/* RESUME CARD */}
        <Link href="/resume.pdf" target="_blank" className="md:col-span-1">
  <motion.div
    whileHover={{ scale: 1.02 }}
    className="relative bg-[#242628] rounded-3xl overflow-hidden cursor-pointer h-full"
  >
    {/* DARK BASE */}
    <div className="absolute inset-0 bg-[#181a1b]" />

    {/* DARK OVERLAY – SAME AS PROJECTS */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

    {/* CONTENT */}
    <div className="relative z-10 h-full p-6 flex flex-col justify-end">
      <p className="text-gray-300 text-sm mb-1">
        Resume
      </p>

      <h3 className="text-xl font-semibold text-white">
        View my Resume
      </h3>

      <span className="mt-2 text-sm text-gray-300 flex items-center gap-2">
        Open <span>→</span>
      </span>
    </div>
  </motion.div>
</Link>


        {/* FEATURED PROJECT */}
       <Link href="/projects/sahore-life" className="md:col-span-1">
  <motion.div
    whileHover={{ scale: 1.02 }}
    className="relative bg-[#242628] rounded-3xl overflow-hidden cursor-pointer h-full"
  >

    {/* DARK OVERLAY */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

    {/* TEXT (MATCHES OTHER CARDS) */}
    <div className="relative z-10 h-full p-6 flex flex-col justify-end">
      <p className="text-gray-300 text-sm mb-1">Healthcare Platform</p>
      <h3 className="text-xl font-semibold">Sahore Life</h3>

      <span className="mt-2 text-sm text-gray-300 flex items-center gap-2">
        View <span>→</span>
      </span>
    </div>
  </motion.div>
</Link>



        {/* PROJECT CARDS */}
       <Link href="/projects/churn-predictor" className="md:col-span-1">
  <motion.div
    whileHover={{ scale: 1.02 }}
    className="relative bg-[#242628] rounded-3xl overflow-hidden cursor-pointer h-full"
  >
  

    {/* DARK OVERLAY (SAME AS OTHERS) */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

    {/* CONTENT */}
    <div className="relative z-10 h-full p-6 flex flex-col justify-end">
      <p className="text-gray-300 text-sm mb-1">Machine Learning</p>
      <h3 className="text-xl font-semibold text-white">
        AI Customer Churn Predictor
      </h3>
      <span className="mt-2 text-sm text-gray-300 flex items-center gap-2">
        View <span>→</span>
      </span>
    </div>
  </motion.div>
</Link>



        <Link href="/projects/handsketch" className="md:col-span-1">
  <motion.div
    whileHover={{ scale: 1.02 }}
    className="relative bg-[#242628] rounded-3xl overflow-hidden cursor-pointer h-full"
  >
    

    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

    <div className="relative z-10 h-full p-6 flex flex-col justify-end">
      <p className="text-gray-300 text-sm mb-1">Computer Vision</p>
      <h3 className="text-xl font-semibold">HandSketch</h3>
      <span className="mt-2 text-sm text-gray-300 flex items-center gap-2">
        View <span>→</span>
      </span>
    </div>
  </motion.div>
</Link>


        <Link href="/projects/student-management" className="md:col-span-1">
  <motion.div
    whileHover={{ scale: 1.02 }}
    className="relative bg-[#242628] rounded-3xl overflow-hidden cursor-pointer h-full"
  >
   

    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

    <div className="relative z-10 h-full p-6 flex flex-col justify-end">
      <p className="text-gray-300 text-sm mb-1">Full Stack Application</p>
      <h3 className="text-xl font-semibold">Student Management System</h3>
      <span className="mt-2 text-sm text-gray-300 flex items-center gap-2">
        View <span>→</span>
      </span>
    </div>
  </motion.div>
</Link>


        {/* CONTACT CARD */}
        <motion.div
  whileHover={{ scale: 1.02 }}
  className="md:col-span-2 relative bg-[#242628] rounded-3xl overflow-hidden"
>
  {/* DARK BASE */}
  <div className="absolute inset-0 bg-[#181a1b]" />

  {/* DARK OVERLAY – SAME AS PROJECTS */}
  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

  {/* CONTENT */}
  <div className="relative z-10 h-full p-8 flex flex-col justify-between">
    <p className="text-gray-300 text-sm">
      Collaborate together!
    </p>

    <h3 className="text-3xl font-semibold text-white">
      Get in touch now
    </h3>

   <a
  href="https://www.linkedin.com/in/dhriti-sharma1601"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-2 text-gray-300 hover:text-white"
>
  Contact <ArrowRight size={18} />
</a>

  </div>
</motion.div>


        {/* SKILLS CARD */}
       <motion.div
  whileHover={{ scale: 1.02 }}
  className="relative bg-[#242628] rounded-3xl overflow-hidden"
>
  {/* DARK BASE */}
  <div className="absolute inset-0 bg-[#181a1b]" />

  {/* DARK OVERLAY – SAME AS PROJECTS */}
  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

  {/* CONTENT */}
  <div className="relative z-10 h-full p-6">
    <p className="text-gray-300 text-sm mb-4">
      WHAT I DO
    </p>

    {/* TECH STACK */}
    <div className="flex flex-wrap gap-2 text-xs text-gray-300">
       <span className="px-2 py-1 border border-white/10 rounded-full">AI/ML</span>
      <span className="px-2 py-1 border border-white/10 rounded-full">Python</span>
      <span className="px-2 py-1 border border-white/10 rounded-full">Scikit-Learn</span>
      <span className="px-2 py-1 border border-white/10 rounded-full">Computer Vision</span>
      <span className="px-2 py-1 border border-white/10 rounded-full">OpenCV</span>
      <span className="px-2 py-1 border border-white/10 rounded-full">MediaPipe</span>
      <span className="px-2 py-1 border border-white/10 rounded-full">React</span>
      <span className="px-2 py-1 border border-white/10 rounded-full">Next.js</span>
      <span className="px-2 py-1 border border-white/10 rounded-full">Tailwind</span>
      <span className="px-2 py-1 border border-white/10 rounded-full">Git</span>
    </div>
  </div>
</motion.div>



      </section>

      {/* FOOTER */}
      <footer className="max-w-7xl mx-auto mt-20 text-gray-500 text-sm flex gap-6">
        <a href="https://github.com/dhriti16sharma" target="_blank">GitHub</a>
        <a href="https://www.linkedin.com/in/dhriti-sharma1601" target="_blank">LinkedIn</a>
      </footer>
    {/* IMAGE MODAL */}
      {showImage && (
        <div
          onClick={() => setShowImage(false)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md"
        >
          <img
            src="/profile.png"
            className="w-72 h-72 md:w-96 md:h-96 rounded-full object-cover shadow-2xl"
          />
        </div>
      )}
    </main>
  );
}

// ---------------- CARD COMPONENT ----------------
function Card({ title, subtitle, href }: CardProps) {
  return (
    <motion.a
      whileHover={{ scale: 1.02 }}
      href={href}
      className="bg-[#242628] rounded-3xl p-6 flex flex-col justify-between"
    >
      <div>
        {subtitle && <p className="text-gray-400 text-sm mb-1">{subtitle}</p>}
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <span className="flex items-center gap-2 text-gray-300">
        View <ArrowRight size={18} />
      </span>
    </motion.a>
  );
}

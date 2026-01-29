"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";

export default function SahoreLife() {
  return (
    <main className="min-h-screen bg-[#181a1b] text-white px-6 md:px-12 py-10">

      <Link
        href="/"
        className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8"
      >
        <ArrowLeft size={18} /> Back
      </Link>

      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">

        <Card title="Sahore Life – Healthcare Platform">
          Production healthcare website built during my frontend internship,
          focusing on clean UI, accessibility, and real-world usability.
        </Card>

        <Card title="My Role">
          <ul className="list-disc list-inside text-gray-400 space-y-2">
            <li>Developed responsive UI with Next.js & Tailwind</li>
            <li>Worked on production-ready components</li>
            <li>Improved UX consistency & performance</li>
          </ul>
        </Card>

        <Card title="Tech Stack">
          Next.js, TypeScript, Tailwind CSS
        </Card>

        <Card>
          <a
            href="https://sahorelife.com"
            target="_blank"
            className="inline-flex items-center gap-2 bg-white text-black px-5 py-2 rounded-full"
          >
            <ExternalLink size={18} /> Live Website
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

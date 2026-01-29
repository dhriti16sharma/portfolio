"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Github } from "lucide-react";

export default function StudentManagement() {
  return (
    <main className="min-h-screen bg-[#181a1b] text-white px-6 md:px-12 py-10">

      <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8">
        <ArrowLeft size={18} /> Back
      </Link>
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">

        <Card title="Student Management System">
          Full-stack CRUD application designed to manage student records
          efficiently with authentication and database integration.
        </Card>

        <Card title="Features">
          <ul className="list-disc list-inside space-y-2">
            <li>Create, update, delete student records</li>
            <li>User authentication</li>
            <li>Structured database schema</li>
          </ul>
        </Card>

        <Card title="Tech Stack">
          React, Node.js, Database (SQL/NoSQL)
        </Card>

        <Card>
          <a
            href="https://github.com/dhriti16sharma/Student-Management-System"
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

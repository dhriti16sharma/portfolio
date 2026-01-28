export default function SahoreLife() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-20 text-white">
      <h1 className="text-4xl font-bold mb-4">Sahore Life – Healthcare Platform</h1>
      <p className="text-gray-400 mb-8">
        Production healthcare platform built during my internship as a Frontend Developer.
      </p>

      <img src="/projects/sahore-life.png" className="rounded-xl shadow-lg mb-12" />

      <h2 className="section-title">My Role</h2>
      <ul className="list-disc list-inside text-gray-400 mb-6">
        <li>Built responsive UI using Next.js & Tailwind</li>
        <li>Implemented role-based dashboards</li>
        <li>Improved UX consistency & performance</li>
      </ul>

      <h2 className="section-title">Tech Stack</h2>
      <p className="text-gray-400">Next.js, TypeScript, Tailwind CSS</p>

      <a href="https://sahorelife.com" target="_blank" className="btn mt-8">Live Website</a>
    </section>
  );
}

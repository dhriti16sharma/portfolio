export default function HandSketch() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-20 text-white">
      <h1 className="text-4xl font-bold mb-4">HandSketch – Computer Vision</h1>

      <p className="text-gray-400 mb-8">
        Real-time hand gesture recognition system that allows drawing using hand movements.
      </p>

      <img src="/projects/handsketch.png" className="rounded-xl shadow-lg mb-12" />

      <h2 className="section-title">AI Concepts Used</h2>
      <ul className="list-disc list-inside text-gray-400 mb-6">
        <li>MediaPipe hand landmark detection</li>
        <li>Feature extraction from 21 landmarks</li>
        <li>Gesture classification</li>
      </ul>

      <a
        href="https://github.com/dhriti16sharma/HandSketch"
        target="_blank"
        className="btn mt-8"
      >
        GitHub
      </a>
    </section>
  );
}

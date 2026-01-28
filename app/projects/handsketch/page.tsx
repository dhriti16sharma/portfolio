export default function HandSketch() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-20 text-white">
      <h1 className="text-4xl font-bold mb-4">HandSketch – Computer Vision</h1>
      <p className="text-gray-400 mb-8">
        Real-time hand gesture recognition system that allows users to draw using hand movements.
      </p>

      <h2 className="text-2xl font-semibold mb-2">What It Does</h2>
      <p className="text-gray-400 mb-6">
        Uses webcam input to detect hand landmarks and convert gestures into drawing actions
        on a virtual canvas.
      </p>

      <h2 className="text-2xl font-semibold mb-2">AI / ML Concepts Used</h2>
      <ul className="list-disc list-inside text-gray-400 mb-6">
        <li>MediaPipe Hands (CNN-based landmark detection)</li>
        <li>Feature extraction from 21 hand landmarks</li>
        <li>Gesture classification using geometric rules</li>
        <li>Real-time video processing with OpenCV</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2">Tech Stack</h2>
      <p className="text-gray-400 mb-6">
        Python, OpenCV, MediaPipe, NumPy
      </p>

      <a
        href="https://github.com/dhriti16sharma/HandSketch"
        target="_blank"
        className="underline"
      >
        View Source Code →
      </a>
    </section>
  );
}

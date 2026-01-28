export default function StudentManagement() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-20 text-white">
      <h1 className="text-4xl font-bold mb-4">Student Management System</h1>
      <p className="text-gray-400 mb-8">
        A CRUD-based system to manage student records with authentication and database integration.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Features</h2>
      <ul className="list-disc list-inside text-gray-400 mb-6">
        <li>Add, update, delete student records</li>
        <li>User authentication</li>
        <li>Structured database storage</li>
        <li>Clean and simple UI</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2">Tech Stack</h2>
      <p className="text-gray-400 mb-6">
        Java / Web Technologies, Database, GitHub
      </p>

      <a
        href="https://github.com/dhriti16sharma/Student-Management-System"
        target="_blank"
        className="underline"
      >
        View Source Code →
      </a>
    </section>
  );
}

export default function StudentManagement() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-20 text-white">
      <h1 className="text-4xl font-bold mb-4">Student Management System</h1>

      <p className="text-gray-400 mb-8">
        CRUD-based system for managing student data with authentication.
      </p>

      <img src="/projects/student-management.png" className="rounded-xl shadow-lg mb-12" />

      <h2 className="section-title">Features</h2>
      <ul className="list-disc list-inside text-gray-400 mb-6">
        <li>Create, update, delete student records</li>
        <li>User authentication</li>
        <li>Database integration</li>
      </ul>

      <a
        href="https://github.com/dhriti16sharma/Student-Management-System"
        target="_blank"
        className="btn mt-8"
      >
        GitHub
      </a>
    </section>
  );
}

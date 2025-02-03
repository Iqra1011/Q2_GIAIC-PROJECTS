export default function Contact() {
  return (
    <div className="bg-red-100 p-10 rounded-lg shadow-md text-center">
      <h1 className="text-3xl font-bold text-red-600">Contact Me</h1>
      <p className="text-lg mt-2">
        📧 Email:{" "}
        <a href="mailto:amairah@example.com" className="text-blue-500 hover:underline">
          amairah@example.com
        </a>
      </p>
      <p className="text-lg mt-2">📍 Location: Karachi, Pakistan</p>
      <p className="text-lg mt-2">
        🔗 LinkedIn:{" "}
        <a href="https://linkedin.com/in/amairah" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
          Amairah&apos;s LinkedIn
        </a>
      </p>
      <p className="text-lg mt-2 font-semibold">💼 Available for Freelance &amp; Collaborations!</p>
    </div>
  );
}

import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-blue-100 p-10 rounded-lg shadow-md text-center">
      <h1 className="text-3xl font-bold text-blue-600">Hi, I am Amairah 👋</h1>
      <Image
        src="/profile.jpg"
        width={150}
        height={150}
        alt="Amairah"
        className="rounded-full mx-auto my-4"
      />
      <p className="text-lg">
        I am a passionate <span className="font-semibold">web developer</span> skilled in{" "}
        <span className="font-semibold">Next.js, TypeScript, and Python</span>. I love building
        interactive web applications.
      </p>
      <p className="mt-2 text-gray-700">
        🚀 Currently exploring <span className="font-semibold">Generative AI</span> and working on
        innovative projects.
      </p>
    </div>
  );
}

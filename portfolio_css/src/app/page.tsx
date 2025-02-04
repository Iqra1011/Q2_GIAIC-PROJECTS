import Image from 'next/image';

export default function Home() {
  return (
    <div className="container home-container">
      <h1>Hi, {"I'm Amairah"} 👋</h1>
      <Image src="/profile.jpg" width={150} height={150} alt="Amairah" className="profile-img" />
      <p>
        {"I'm a passionate **web developer** skilled in **Next.js, TypeScript, and Python**. I love building interactive web applications."}
      </p>
      <p>
        🚀 Currently exploring **Generative AI** and working on innovative projects.
      </p>
    </div>
  );
}

import Image from "next/image";

export function Header() {
  return (
    <header>
      <div className="mb-4 relative overflow-hidden">
        <Image
          src="/profile-pic.png"
          height={150}
          width={150}
          className="rounded-full"
          alt="Ali Mohseni"
          objectFit="cover"
        />
      </div>
      <h1 className="text-4xl font-bold mb-2">Ali Mohseni</h1>
      <h2 className="text-xl text-gray-400 mb-4">Full Stack Developer</h2>
      <h3 className="text-lg text-gray-400 mb-4">📍 Stockholm, Sweden</h3>
      <p className="text-gray-300 text-sm"></p>
    </header>
  );
}

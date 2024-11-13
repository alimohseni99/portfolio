export function AboutMe() {
  return (
    <section className="mb-8">
      <h2 className="text-3xl font-bold mb-6 text-gray-100">About Me</h2>
      <p
        className="prose text-gray-300 mb-4 border-b"
        style={{
          borderBottomColor:
            "var(--borderColor-muted, var(--color-border-muted))",
        }}
      >
        Hello! I’m Ali, a passionate Fullstack Developer currently honing my
        skills at SALT, where I’m diving deep into JavaScript, TypeScript,
        Node.js, and modern web technologies.
        <br /> <br />
        With a background in Computer Engineering, I thrive in problem-solving
        and building scalable, maintainable web applications. My focus is on
        Fullstack JavaScript development, and I enjoy working with both frontend
        and backend technologies.
        <br /> <br />
        I am always eager to learn new things and continuously improve. Feel
        free to connect with me or explore my projects!
        <br /> <br />
        Available for new opportunities after my Fullstack Bootcamp at SALT
        ends, where I will be working as a consultant.
        <br />
        <br />
      </p>
    </section>
  );
}

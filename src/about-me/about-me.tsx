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
        Hi, I’m Ali. I build web applications using JavaScript, TypeScript, and
        Node.js.
        <br /> <br />
        With a background in Computer Engineering, I enjoy designing clear,
        effective solutions that work seamlessly across the frontend and
        backend. I value simplicity, performance, and maintainability in
        everything I create.
        <br /> <br />
        I’m currently finishing my training at SALT, where I’ve been working on
        real-world projects and refining my skills. I’ll soon be available for
        new opportunities as a consultant. Let’s connect and collaborate!
        <br /> <br />
      </p>
    </section>
  );
}

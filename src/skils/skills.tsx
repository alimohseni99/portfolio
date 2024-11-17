export default function skills() {
  const skills = {
    Languages: ["Java", "Kotlin", "Javascript", "Typescript"],
    Backend: ["NodeJs", "ExpressJS", "PostgreSQL", "SQL"],
    FrameWork: ["ReactJS", "NextJS", "TailwindCss", "SpringBoot"],
  };
  const skillsCategory = [
    {
      name: "Languages",
      color: "blue",
      items: skills.Languages,
    },
    {
      name: "Backend",
      color: "orange",
      items: skills.Backend,
    },
    {
      name: "FrameWork",
      color: "green",
      items: skills.FrameWork,
    },
  ];
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6 text-gray-100">Skills</h2>
      {skillsCategory.map(({ name, color, items }) => (
        <div key={name} className="flex flex-wrap mb-1">
          {items.map((item, index) => (
            <div
              key={index}
              className={`bg-${color}-400 bg-opacity-30 px-3 py-1.5 text-xs font-medium text-${color}-200 mr-2 mb-2 rounded`}
            >
              {item}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

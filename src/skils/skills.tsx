export default function skills() {
  const skills = {
    Languages: ["Java", "Kotlin", "Javascript", "Typescript"],
    Backend: ["NodeJs", "ExpressJS", "PostgreSQL", "SQL"],
    FrameWork: ["ReactJS", "NextJS", "TailwindCss", "SpringBoot"],
  };
  const skillsCategory = [
    {
      name: "Languages",
      bgColor: "bg-blue-400",
      textColor: "text-blue-300",
      items: skills.Languages,
    },
    {
      name: "Backend",
      bgColor: "bg-orange-400",
      textColor: "text-orange-300",
      items: skills.Backend,
    },
    {
      name: "FrameWork",
      bgColor: "bg-green-400",
      textColor: "text-green-300",
      items: skills.FrameWork,
    },
  ];
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6 text-gray-100">Skills</h2>
      {skillsCategory.map(({ name, bgColor, items, textColor }) => (
        <div key={name} className="flex flex-wrap mb-1">
          {items.map((item, index) => (
            <div
              key={index}
              className={`${bgColor} bg-opacity-30 px-3 py-1.5 text-xs font-medium ${textColor} mr-2 mb-2 rounded`}
            >
              {item}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

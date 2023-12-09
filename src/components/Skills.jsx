const skills = [
  {
    id: 1,
    name: "Frontend developer",
    description:
      "Proficiency in HTML, CSS, and JavaScript and I write reusable, testable, and efficient code in HTML, CSS, and JavaScript",
    image: "src/assets/skills-1.png",
  },
  {
    id: 2,
    name: "Frontend Framework",
    description:
      "Experience with modern front-end frameworks such as React JS. Building reusable code for future use.",
    image: "src/assets/skills-2.png",
  },
  {
    id: 3,
    name: "Stay up-dated",
    description:
      "Stay up-to-date with emerging trends and technologies in front-end development.  ",
    image: "src/assets/skills-3.png",
  },
  {
    id: 4,
    name: "Communication Skills",
    description:
      "Excellent communication, collaboration, and problem-solving skills",
    image: "/src/assets/skills-4.png",
  },
];

const Skills = () => {
  return (
    <div className="lg:mx-12 mx-4 py-32" id="skills">
      <div className="mb-20">
        <p className="text-xl text-headingcolor font-semibold mb-5">
          My Skills
        </p>
        <h2 className="md:text-5xl text-4xl text-headingcolor font-bold">
          My Expertise
        </h2>
      </div>

      {/* skillis card */}
      <div className=" grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
        {skills.map((skill) => (
          <div
            key={skill.id}
            className="bg-bgShade p-8 rounded-lg cursor-pointer hover:-translate-y-5 transition-all duration-300"
          >
            <img
              src={skill.image}
              alt=""
              className="w-14 h-14 p-3 bg-white bg-white rounded-lg shadow-md mb-7"
            />
            <h3 className="text-2xl font-bold mb-4">{skill.name}</h3>
            <p>{skill.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;

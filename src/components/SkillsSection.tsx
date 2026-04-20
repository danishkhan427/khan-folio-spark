import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const categories = [
  {
    title: "Languages",
    skills: ["C#", "SQL"],
  },
  {
    title: "Frameworks & technologies",
    skills: ["ASP.NET Core", "ASP.NET MVC", "Blazor", "Razor Pages", "Web APIs", "AJAX"],
  },
  {
    title: "Data access & ORM",
    skills: ["EF Core", "ADO.NET", "Repository Pattern", "Unit of Work"],
  },
  {
    title: "Frontend",
    skills: ["HTML5", "CSS3", "jQuery", "AJAX", "Bootstrap"],
  },
  {
    title: "Databases",
    skills: ["Microsoft SQL Server", "PostgreSQL"],
  },
  {
    title: "Architecture",
    skills: ["MVC", "Clean Architecture", "Microservices"],
  },
  {
    title: "Tools & platforms",
    skills: ["Visual Studio", "SSMS", "Git", "GitHub", "Docker"],
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 bg-card/30">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-16"
        >
          <p className="text-primary font-mono text-sm tracking-wider uppercase">Skills</p>
          <h2 className="text-3xl sm:text-4xl font-bold">
            Technical <span className="text-gradient">Expertise</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass rounded-xl p-6 space-y-4 hover:border-primary/30 transition-colors"
            >
              <h3 className="font-semibold text-foreground text-lg">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs font-mono bg-primary/10 text-primary px-3 py-1.5 rounded-md"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

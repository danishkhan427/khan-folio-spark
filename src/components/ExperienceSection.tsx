import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase } from "lucide-react";


const jobs = [
  {
    company: "2B Vision Technologies",
    location: "Lahore, Pakistan",
    role: "Full Stack .NET Developer",
    period: "April 2025 – April 2026",
    current: false,
    bullets: [
      "Collaborated on enterprise-level applications using ASP.NET Core, Blazor, and EF Core",
      "Designed and implemented RESTful APIs and integrated frontends with a microservices-based backend",
      "Improved performance and maintainability using Clean Architecture, Repository Pattern, and Unit of Work",
      "Worked in Agile cycles with code reviews, sprint planning, and debugging for quality delivery",
    ],
  },
  {
    company: "Netrix Solutions",
    location: "Dera Ismail Khan, Pakistan",
    role: ".NET Developer",
    period: "April 2024 – March 2025",
    current: false,
    bullets: [
      "Developed and maintained scalable web apps with ASP.NET Core, MVC, and Blazor across project phases",
      "Built and integrated RESTful Web APIs for core workflows, connecting Blazor UI to backend services",
    ],
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-16"
        >
          <p className="text-primary font-mono text-sm tracking-wider uppercase">Experience</p>
          <h2 className="text-3xl sm:text-4xl font-bold">
            Work <span className="text-gradient">History</span>
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-8">
          {jobs.map((job, i) => (
            <motion.div
              key={job.company}
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className="glass rounded-xl p-6 relative hover:border-primary/30 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                  <Briefcase className="text-primary" size={20} />
                </div>
                <div className="space-y-3 flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                    <div>
                      <h3 className="font-semibold text-foreground text-lg">{job.company}</h3>
                      <p className="text-primary text-sm font-medium">{job.role}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">{job.location}</p>
                    </div>
                    <span className="text-xs font-mono text-muted-foreground flex items-center gap-2">
                      {job.current && (
                        <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                      )}
                      {job.period}
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {job.bullets.map((b, j) => (
                      <li key={j} className="text-sm text-muted-foreground flex gap-2">
                        <span className="text-primary mt-1.5 shrink-0">▸</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;

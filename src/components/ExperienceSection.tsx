import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase } from "lucide-react";

const jobs = [
  {
    company: "Micro Data Tech Solution",
    role: "Full Stack .NET Developer",
    period: "June 2025 – Present",
    current: true,
    bullets: [
      "Developing enterprise-grade web applications using ASP.NET Core and Blazor",
      "Designing and implementing RESTful APIs with clean architecture principles",
      "Collaborating with cross-functional teams to deliver scalable solutions",
    ],
  },
  {
    company: "Netrix Solutions",
    role: ".NET Developer",
    period: "Jan 2024 – May 2025",
    current: false,
    bullets: [
      "Built and maintained web applications using ASP.NET MVC and Web APIs",
      "Implemented database solutions with SQL Server and Entity Framework Core",
      "Participated in code reviews and adopted best practices for clean code",
      "Developed microservices-based HR Management System",
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

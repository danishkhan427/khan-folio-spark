import { motion, useInView } from "framer-motion";
import { useRef } from "react";
const GithubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
  </svg>
);

const projects = [
  {
    title: "HR Management System",
    description:
      "A comprehensive HR platform with employee management, attendance tracking, and payroll processing built on microservices architecture.",
    tech: ["Blazor", "ASP.NET Core", "Microservices", "EF Core", "SQL Server"],
    features: ["Employee CRUD", "Attendance Tracking", "Role-based Access", "Reporting Dashboard"],
  },
  {
    title: "Social Media Platform",
    description:
      "A full-featured social media web application with post creation, commenting, real-time notifications, and user profiles.",
    tech: ["ASP.NET MVC", "jQuery", "SQL Server", "SignalR", "Bootstrap"],
    features: ["User Profiles", "Post & Comments", "Real-time Notifications", "Search & Filter"],
  },
  {
    title: "Online FIR System",
    description:
      "A digital First Information Report system allowing citizens to file complaints online with status tracking and admin management.",
    tech: ["ASP.NET MVC", "AJAX", "SQL Server", "jQuery", "Bootstrap"],
    features: ["Online FIR Filing", "Status Tracking", "Admin Panel", "PDF Report Generation"],
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 bg-card/30">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-16"
        >
          <p className="text-primary font-mono text-sm tracking-wider uppercase">Projects</p>
          <h2 className="text-3xl sm:text-4xl font-bold">
            Featured <span className="text-gradient">Work</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="glass rounded-xl p-6 space-y-4 hover:border-primary/30 transition-all hover:-translate-y-1 group"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-foreground text-lg">{p.title}</h3>
                <Github className="text-muted-foreground group-hover:text-primary transition-colors" size={18} />
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.description}</p>
              <div className="flex flex-wrap gap-1.5">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="text-[11px] font-mono bg-primary/10 text-primary px-2 py-1 rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="border-t border-border pt-4 space-y-1.5">
                {p.features.map((f) => (
                  <p key={f} className="text-xs text-muted-foreground flex gap-2">
                    <span className="text-primary">✦</span> {f}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

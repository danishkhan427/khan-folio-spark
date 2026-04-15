import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";

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

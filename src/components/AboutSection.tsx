import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Layers, Zap } from "lucide-react";

const highlights = [
  { icon: Code2, label: "1.5+ Year Experience", desc: "Professional .NET development" },
  { icon: Layers, label: "Clean Architecture", desc: "Scalable, maintainable code" },
  { icon: Zap, label: "Full Stack", desc: "Backend to frontend delivery" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center space-y-6"
        >
          <p className="text-primary font-mono text-sm tracking-wider uppercase">About Me</p>
          <h2 className="text-3xl sm:text-4xl font-bold">
            Passionate about building{" "}
            <span className="text-gradient">robust solutions</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            I'm a Full Stack .NET Core Developer based in Lahore, Pakistan, with 1.5+ year of experience
            crafting scalable web applications. I specialize in ASP.NET Core, Blazor, Web APIs, and
            SQL Server, with a strong focus on clean architecture and microservices. I love turning
            complex business requirements into elegant, efficient software.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-4xl mx-auto"
        >
          {highlights.map((h, i) => (
            <div
              key={i}
              className="glass rounded-xl p-6 text-center space-y-3 hover:border-primary/30 transition-colors"
            >
              <div className="w-12 h-12 mx-auto rounded-lg bg-primary/10 flex items-center justify-center">
                <h.icon className="text-primary" size={24} />
              </div>
              <h3 className="font-semibold text-foreground">{h.label}</h3>
              <p className="text-sm text-muted-foreground">{h.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;

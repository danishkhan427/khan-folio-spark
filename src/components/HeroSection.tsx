import { motion } from "framer-motion";
import { ArrowDown, Download, Mail } from "lucide-react";
import profileImg from "@/assets/profile-avatar.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(hsl(220_14%_16%/0.5)_1px,transparent_1px),linear-gradient(90deg,hsl(220_14%_16%/0.5)_1px,transparent_1px)] bg-[size:60px_60px]" />
      <div className="absolute inset-0" style={{ background: "radial-gradient(800px circle at 50% 40%, hsl(175 80% 50% / 0.08), transparent 50%)" }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center gap-8">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="w-36 h-36 rounded-full bg-gradient-primary p-[2px]">
              <img
                src={profileImg}
                alt="Muhammad Danish Khan"
                className="w-full h-full rounded-full object-cover bg-background"
              />
            </div>
            <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <span className="text-primary-foreground text-xs font-bold">✓</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="space-y-4 max-w-2xl"
          >
            <p className="text-primary font-mono text-sm tracking-wider uppercase">
              Full Stack .NET Core Developer
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
              Muhammad Danish{" "}
              <span className="text-gradient">Khan</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Building scalable web applications with .NET Core, clean architecture, and modern frontend technologies.
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-gradient-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity glow-shadow"
            >
              <Mail size={18} /> Hire Me
            </a>
            <a
              href="/Muhammad_Danish_Khan_Resume.pdf"
              download
              className="inline-flex items-center gap-2 border border-border bg-secondary text-secondary-foreground px-6 py-3 rounded-lg font-medium hover:bg-muted transition-colors"
            >
              <Download size={18} /> Download Resume
            </a>
          </motion.div>

          <motion.a
            href="#about"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="absolute bottom-8 text-muted-foreground animate-bounce"
          >
            <ArrowDown size={24} />
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

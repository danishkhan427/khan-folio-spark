import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Trophy } from "lucide-react";

const CertificationsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="certifications" className="py-24">
      <div className="container mx-auto px-4" ref={ref}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="space-y-2">
              <p className="text-primary font-mono text-sm tracking-wider uppercase">Certifications</p>
              <h2 className="text-2xl sm:text-3xl font-bold">
                Professional <span className="text-gradient">Credentials</span>
              </h2>
            </div>
            <div className="space-y-4">
              {["Career Essentials in Software Development — Microsoft & LinkedIn (2024)"].map((cert, i) => (
                <div
                  key={i}
                  className="glass rounded-xl p-4 flex items-center gap-3 hover:border-primary/30 transition-colors"
                >
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Award className="text-primary" size={18} />
                  </div>
                  <span className="text-sm text-foreground font-medium">{cert}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Achievements */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="space-y-2">
              <p className="text-primary font-mono text-sm tracking-wider uppercase">Achievements</p>
              <h2 className="text-2xl sm:text-3xl font-bold">
                Notable <span className="text-gradient">Wins</span>
              </h2>
            </div>
            <div className="glass rounded-xl p-6 space-y-4 hover:border-primary/30 transition-colors">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                <Trophy className="text-primary" size={28} />
              </div>
              <h3 className="font-semibold text-foreground text-lg">
                2nd place — JMC college-level project competition
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Ranked 2nd (December 2024) for innovation and technical excellence.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;

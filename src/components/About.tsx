import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-secondary/30" ref={ref}>
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              About Us
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              We're <span className="gradient-text">Happy Sketch</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              A premium digital agency at the intersection of creativity and
              technology. We partner with forward-thinking businesses to create
              exceptional digital experiences that drive growth and inspire
              audiences.
            </p>
            <p className="text-muted-foreground mb-8">
              With expertise in AI automation, innovative design, and strategic
              digital solutions, we transform complex challenges into elegant,
              user-centric products. Our team combines technical excellence with
              creative vision to deliver results that exceed expectations.
            </p>
            <div className="grid grid-cols-3 gap-8">
              {[
                { number: "150+", label: "Projects Delivered" },
                { number: "98%", label: "Client Satisfaction" },
                { number: "8+", label: "Years Experience" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                >
                  <div className="text-3xl md:text-4xl font-bold gradient-text">
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="glass-card p-8 md:p-12">
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-tr from-accent/20 to-primary/20 rounded-full blur-2xl" />
              <div className="relative z-10">
                <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
                <p className="text-muted-foreground mb-6">
                  To empower businesses with intelligent digital solutions that
                  create lasting impact and drive meaningful connections with
                  their audiences.
                </p>
                <div className="space-y-4">
                  {[
                    "Human-centered design approach",
                    "Cutting-edge AI integration",
                    "Scalable & future-proof solutions",
                    "Transparent collaboration process",
                  ].map((item, index) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: 20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-accent" />
                      <span className="text-sm">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Search, Lightbulb, Wrench, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Discovery",
    description:
      "We dive deep into your business, understand your goals, and identify opportunities for growth and innovation.",
  },
  {
    number: "02",
    icon: Lightbulb,
    title: "Strategy",
    description:
      "Crafting a tailored roadmap that aligns with your vision, combining data insights with creative thinking.",
  },
  {
    number: "03",
    icon: Wrench,
    title: "Execution",
    description:
      "Our expert team brings the strategy to life with precision, creativity, and attention to every detail.",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Launch & Scale",
    description:
      "We deploy, optimize, and continuously improve to ensure lasting success and sustainable growth.",
  },
];

export const Process = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="process" className="section-padding bg-secondary/30" ref={ref}>
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            How We Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Our <span className="gradient-text">Process</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            A refined approach that ensures every project is delivered with
            excellence, on time, and beyond expectations.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative"
            >
              <div className="glass-card p-8 h-full text-center hover-lift">
                <div className="text-6xl font-bold text-primary/10 absolute top-4 right-4">
                  {step.number}
                </div>
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-6 shadow-button">
                  <step.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-px bg-gradient-to-r from-primary/30 to-transparent" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

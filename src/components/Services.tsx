import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Bot, Palette, Globe, Zap, Code, TrendingUp } from "lucide-react";

const services = [
  {
    icon: Bot,
    title: "AI Automation",
    description:
      "Leverage intelligent automation to streamline operations, enhance productivity, and unlock new possibilities for your business.",
  },
  {
    icon: Palette,
    title: "Creative Design",
    description:
      "Stunning visual experiences that captivate your audience and communicate your brand story with elegance and impact.",
  },
  {
    icon: Globe,
    title: "Digital Solutions",
    description:
      "End-to-end digital products built with modern technologies, designed to scale and evolve with your business needs.",
  },
  {
    icon: Zap,
    title: "Performance Marketing",
    description:
      "Data-driven strategies that maximize ROI and connect your brand with the right audience at the right time.",
  },
  {
    icon: Code,
    title: "Web Development",
    description:
      "Beautiful, responsive, and blazing-fast websites and applications built with cutting-edge technologies.",
  },
  {
    icon: TrendingUp,
    title: "Growth Strategy",
    description:
      "Strategic consulting to identify opportunities, optimize processes, and accelerate your digital transformation journey.",
  },
];

export const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="section-padding" ref={ref}>
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            What We Do
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Services That <span className="gradient-text">Elevate</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            From concept to execution, we deliver comprehensive digital services
            that transform your vision into impactful results.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="glass-card p-8 h-full hover-lift cursor-pointer">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

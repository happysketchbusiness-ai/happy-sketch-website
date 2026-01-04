import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Users, Award, Clock, HeartHandshake, Sparkles } from "lucide-react";

const reasons = [
  {
    icon: Shield,
    title: "Young Minds",
    description: "Fresh perspectives from college students bringing innovative ideas to life.",
  },
  {
    icon: Users,
    title: "Fresh Perspectives",
    description: "Young minds bring innovative ideas and modern approaches to every project.",
  },
  {
    icon: Award,
    title: "Eager to Innovate",
    description: "Driven by curiosity and enthusiasm to create something amazing.",
  },
  {
    icon: Clock,
    title: "Flexible & Dedicated",
    description: "We adapt quickly and work hard to meet your needs and deadlines.",
  },
  {
    icon: HeartHandshake,
    title: "Personal Touch",
    description: "Small team means direct communication and genuine care for your project.",
  },
  {
    icon: Sparkles,
    title: "Cost-Effective",
    description: "Affordable solutions without compromising on quality or creativity.",
  },
];

export const WhyUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="why-us" className="section-padding" ref={ref}>
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              Why Choose Us
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              Young Minds, <span className="gradient-text">Big Ideas.</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              We're college students passionate about technology and design. Though we don't have years of experience, we bring fresh energy, quick learning, and innovative thinking to every project.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="grid sm:grid-cols-2 gap-6">
              {reasons.map((reason, index) => (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center flex-shrink-0">
                    <reason.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{reason.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {reason.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

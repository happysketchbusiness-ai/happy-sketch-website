import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Users, Award, Clock, HeartHandshake, Sparkles } from "lucide-react";

const reasons = [
  {
    icon: Shield,
    title: "Trusted Expertise",
    description: "8+ years of delivering excellence for global brands and startups alike.",
  },
  {
    icon: Users,
    title: "Dedicated Team",
    description: "Expert professionals committed to your success at every stage.",
  },
  {
    icon: Award,
    title: "Award-Winning Work",
    description: "Recognized for innovation, creativity, and outstanding results.",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description: "We respect deadlines and deliver quality without compromise.",
  },
  {
    icon: HeartHandshake,
    title: "True Partnership",
    description: "We're invested in your success as if it were our own.",
  },
  {
    icon: Sparkles,
    title: "Future-Ready",
    description: "Solutions built with tomorrow's technologies today.",
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
              Built Different. <span className="gradient-text">Built Better.</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              We combine strategic thinking with creative excellence to deliver
              digital experiences that drive real business results. Here's what
              sets us apart.
            </p>

            <div className="glass-card p-6 inline-block">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <span className="text-xl font-bold text-primary-foreground">98%</span>
                </div>
                <div>
                  <div className="font-semibold">Client Retention Rate</div>
                  <div className="text-sm text-muted-foreground">
                    Clients come back for more
                  </div>
                </div>
              </div>
            </div>
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

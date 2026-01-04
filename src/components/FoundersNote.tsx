import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Quote } from "lucide-react";

export const FoundersNote = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="founders-note" className="section-padding bg-secondary/30" ref={ref}>
            <div className="container-wide">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="glass-card p-12 md:p-16 text-center relative overflow-hidden">
                        {/* Background Decor */}
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />

                        <Quote className="w-12 h-12 text-primary/30 mx-auto mb-8" />

                        <h2 className="text-3xl md:text-4xl font-bold mb-8 leading-tight">
                            "Happy Sketch was built with the belief that every great brand starts as a simple idea.
                            Our goal is to take that raw idea and shape it into something meaningful, functional, and visually powerful.
                            We don’t just design — we think, refine, and create with purpose."
                        </h2>

                        <div className="flex flex-col items-center">
                            <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent rounded-full mb-4" />
                            <div className="font-semibold text-xl text-foreground">Founders</div>
                            <div className="text-primary">Happy Sketch</div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

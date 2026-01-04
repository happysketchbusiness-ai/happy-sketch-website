import { motion } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Process", href: "#process" },
  { name: "Why Us", href: "#why-us" },
];

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="
        fixed top-0 left-0 right-0 z-50     /* ✅ EXACT 1 CM GAP */
      "
    >
      <div className="max-w-7xl mx-auto px-6">
        <nav className="flex items-center justify-between">

          {/* Logo */}
          <a href="#" className="flex items-center">
            <img
              src="/logobg.png"
              alt="Happy Sketch Logo"
              className="h-30 w-32"   /* 🔥 Bigger & balanced */
            />
          </a>

          {/* Center Capsule (ONLY background here) */}
          <div className="hidden md:flex">
            <div
              className="
                flex items-center gap-8
                px-8 py-2
                rounded-full
                bg-white/10
                backdrop-blur-xl
                border border-white/20
              "
            >
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="
                    text-lg font-semibold
                    text-white/90
                    transition-all duration-200
                    hover:text-white
                    hover:scale-105
                  "
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Get Started Button */}
          <div className="hidden md:flex">
            <Button variant="glass-3d" size="default" asChild className="rounded-full h-auto py-2 px-6">
              <a href="#contact">Get Started</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md hover:bg-white/10"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </div>
    </motion.header>
  );
};

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle, Menu, X } from "lucide-react";

export default function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

 const handleJoinCommunity = () => {
  window.open(
    "https://chat.whatsapp.com/FGOFJ7WXTVXIIBp2pm6VF1?mode=ems_wa_c",
    "_blank"
  );
};

  // Navbar hide/show on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // scrolling down
        setShowNav(false);
      } else {
        // scrolling up
        setShowNav(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <section className="relative min-h-screen flex flex-col scroll-pt-20">
      {/* ===== Floating Header Navigation ===== */}
      <motion.header
        initial={{ y: 0 }}
        animate={{ y: showNav ? 0 : -100 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-md border-b border-white/10"
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          {/* Logo */}
          <h1 className="text-2xl font-bold text-white tracking-wide">
            EARNIKO
          </h1>

          {/* Nav links (Desktop) */}
          <nav className="hidden md:flex gap-8 text-white/80 font-medium">
            <a href="#about" className="hover:text-white transition">
              About Us
            </a>
            <a href="#features" className="hover:text-white transition">
              Features
            </a>
            <a
             href="https://wa.me/9037985116?text=Hi%2C%20I%20want%20to%20contact%20EARNIKO"
             target="_blank"
             rel="noopener noreferrer"
             className="hover:text-white transition"
             >
              Contact Us
            </a>
          </nav>

          {/* CTA Button (Desktop) */}
          <div className="hidden md:block">
            <Button
              onClick={handleJoinCommunity}
              className="bg-black text-white hover:bg-green-600 rounded-full px-5 py-2 font-semibold"
            >
              Join Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-black/90 backdrop-blur-md border-t border-white/10 px-6 py-4 flex flex-col gap-4 text-white/90 font-medium"
          >
            <a href="#about" onClick={() => setMenuOpen(false)}>
              About Us
            </a>
            <a href="#features" onClick={() => setMenuOpen(false)}>
              Features
            </a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>
              Contact Us
            </a>
            <Button
              onClick={handleJoinCommunity}
              className="bg-white text-black hover:bg-gray-100 rounded-full px-5 py-2 font-semibold w-fit"
            >
              Join Now
            </Button>
          </motion.nav>
        )}
      </motion.header>

      {/* ===== Hero Section ===== */}
      <div className="flex-1 relative flex items-center justify-center overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0D4526] to-black animate-gradient" />

        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/5 rounded-full blur-xl animate-float" />
        <div
          className="absolute bottom-20 right-10 w-48 h-48 bg-[#0D4526]/20 rounded-full blur-2xl animate-float"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-1/2 left-1/4 w-24 h-24 bg-white/10 rounded-full blur-lg animate-float"
          style={{ animationDelay: "4s" }}
        />

        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.25, 0, 1] }}
          >
            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-8 leading-tight"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.2,
                delay: 0.2,
                ease: [0.25, 0.25, 0, 1],
              }}
            >
              <span className="block">Learn Skills. Build Income.</span>
              <span className="block">Shape Your Future with</span>
              <span className="block bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                EARNIKO
              </span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                delay: 0.6,
                ease: [0.25, 0.25, 0, 1],
              }}
            >
              Join 1000+ dreamers, doers, and believers learning multiple
              in-demand skills — and building multiple sources of income.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                delay: 1,
                ease: [0.25, 0.25, 0, 1],
              }}
            >
              <Button
                onClick={handleJoinCommunity}
                size="lg"
                className="bg-black text-white hover:bg-green-600 text-lg px-8 py-6 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl group"
              >
                <MessageCircle className="mr-3 h-5 w-5" />
                Join the Community
                <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <motion.div
              className="w-1 h-3 bg-white rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

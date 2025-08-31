import { Rocket, Briefcase, Globe, BookOpen } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";

export default function FeaturesSection() {
  const features = [
    {
      icon: Rocket,
      title: "Learn Multiple In-Demand Skills",
      desc: "From dropshipping to design, editing, and communication – master skills that fuel income growth.",
    },
    {
      icon: Briefcase,
      title: "Build Multiple Sources of Income",
      desc: "Don't depend on one stream. Learn how to diversify and create sustainable earning opportunities.",
    },
    {
      icon: Globe,
      title: "Network with 1000+ Learners & Professionals",
      desc: "Be part of a growing tribe of dreamers, doers & achievers pushing each other forward.",
    },
    {
      icon: BookOpen,
      title: "Structured Roadmaps & Syllabus",
      desc: "Follow guided paths designed to help you acquire skills step by step, with clarity & confidence.",
    },
  ];

  return (
    <AnimatedSection className="py-20 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Why Join <span className="text-[#0D4526]">EARNIKO?</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="h-full"
              >
                <AnimatedSection
                  delay={index * 0.2}
                  className="flex flex-col h-full bg-white text-black p-6 rounded-2xl shadow-lg group hover:bg-[#0D4526] transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <IconComponent className="w-14 h-14 text-[#0D4526] group-hover:text-white transition-colors duration-300" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2 group-hover:text-white transition-colors duration-300">
                        {feature.title}
                      </h3>
                      <p className="text-gray-700 group-hover:text-gray-200 transition-colors duration-300">
                        {feature.desc}
                      </p>
                    </div>
                  </div>
                  <div className="flex-1" />
                </AnimatedSection>
              </motion.div>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
}
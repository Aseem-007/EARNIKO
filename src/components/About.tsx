import { motion } from 'framer-motion';
import { TrendingUp, Users, Zap } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const values = [
  {
    icon: TrendingUp,
    title: 'Growth',
    description: 'We believe real growth comes from continuous learning and personal evolution.'
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'Together we create opportunities, open doors, and push each other forward.'
  },
  {
    icon: Zap,
    title: 'Execution',
    description: 'Ideas mean nothing without action. We turn vision into results through focus and drive.'
  }
];

export default function About() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Title + Description */}
        <AnimatedSection className="text-center mb-20">
          <motion.h2 
            className="text-5xl md:text-6xl font-extrabold text-black mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            About <span className="text-[#0D4526]">EARNIKO</span>
          </motion.h2>
          
          <motion.p 
            className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            At EARNIKO, we believe growth comes from <span className="font-semibold text-black">learning, collaboration, and action</span>.
            We’re building a community where dreamers turn into doers, where skills become opportunities, and where every connection opens a new door.
            Our mission is simple: to help people explore multiple paths, create value, and build financial freedom through knowledge and execution.
            <br />
            <span className="font-semibold text-black">EARNIKO is not just about earning — it’s about evolving, together. 🚀</span>
          </motion.p>
        </AnimatedSection>
        
        {/* Values Grid */}
        <div className="grid md:grid-cols-3 gap-12">
          {values.map((value, index) => (
            <AnimatedSection key={value.title} delay={index * 0.2}>
              <motion.div 
                className="text-center group cursor-pointer bg-white shadow-lg rounded-3xl p-8 hover:shadow-2xl transition-all duration-300"
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <div className="mb-6 flex justify-center">
                  <div className="w-20 h-20 bg-[#0D4526] rounded-2xl flex items-center justify-center group-hover:bg-black transition-colors duration-300 shadow-md">
                    <value.icon className="w-10 h-10 text-white" />
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-black mb-3">
                  {value.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
       <AnimatedSection delay={0.8} className="text-center mt-24">
  <a
    href="https://chat.whatsapp.com/FGOFJ7WXTVXIIBp2pm6VF1?mode=ems_wa_c"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block"
  >
    <motion.div
      className="relative inline-block px-10 py-6 rounded-3xl shadow-xl cursor-pointer overflow-hidden"
      whileHover={{ scale: 1.08 }}
      transition={{ type: "spring", stiffness: 200 }}
    >
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-600 via-gray-700 to-green-600 animate-gradient-move" />

      {/* Glow Overlay */}
      <div className="absolute inset-0 bg-white/20 blur-2xl" />

      {/* Text on Top */}
      <p className="relative text-green-200 font-semibold tracking-wide text-lg drop-shadow-md">
        Ready to grow, earn, and evolve with us?
      </p>
    </motion.div>
  </a>
</AnimatedSection>
      </div>

      {/* Subtle Background Decoration */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#0D4526]/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-black/5 rounded-full blur-3xl -z-10" />
    </section>
  );
}

import { motion } from "framer-motion";
import { Airplane, Heart, Globe } from "phosphor-react";

const MissionSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-surface/30 to-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 rounded-full bg-primary/20 blur-xl" />
        <div className="absolute bottom-20 right-20 w-48 h-48 rounded-full bg-secondary/20 blur-xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-accent/10 blur-2xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="text-primary">Mission</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We believe travel has the power to transform lives, build connections, 
              and create memories that last forever.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass-card p-8 md:p-12 rounded-3xl mb-12"
          >
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-4">
                  <Airplane size={32} className="text-primary" weight="duotone" />
                </div>
                <h3 className="text-xl font-bold mb-3">Simplify Planning</h3>
                <p className="text-muted-foreground">
                  Make travel planning effortless with intelligent tools and personalized recommendations
                </p>
              </div>

              <div>
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-secondary/10 mb-4">
                  <Heart size={32} className="text-secondary" weight="duotone" />
                </div>
                <h3 className="text-xl font-bold mb-3">Create Memories</h3>
                <p className="text-muted-foreground">
                  Help travelers discover authentic experiences and create meaningful connections
                </p>
              </div>

              <div>
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-accent/10 mb-4">
                  <Globe size={32} className="text-accent" weight="duotone" />
                </div>
                <h3 className="text-xl font-bold mb-3">Connect Cultures</h3>
                <p className="text-muted-foreground">
                  Bridge cultures and promote sustainable, responsible travel worldwide
                </p>
              </div>
            </div>
          </motion.div>

          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-2xl md:text-3xl font-medium text-foreground italic mb-8"
          >
            "Travel is the only thing you buy that makes you richer"
          </motion.blockquote>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto"
          >
            {[
              { value: "50M+", label: "Miles Traveled" },
              { value: "150+", label: "Countries Covered" },
              { value: "10K+", label: "Happy Travelers" },
              { value: "98%", label: "Satisfaction Rate" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
import { motion } from "framer-motion";

const FeaturedSection = () => {
  const publications = [
    { name: "TechCrunch", logo: "TC" },
    { name: "Forbes", logo: "Forbes" },
    { name: "CNN Travel", logo: "CNN" },
    { name: "Condé Nast", logo: "CN" },
    { name: "Travel + Leisure", logo: "T+L" },
    { name: "National Geographic", logo: "NG" },
  ];

  return (
    <section className="py-20 bg-surface/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-muted-foreground text-lg mb-8">
            Featured in leading travel publications
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center"
        >
          {publications.map((pub, index) => (
            <motion.div
              key={pub.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center justify-center"
            >
              <div className="glass-card px-6 py-4 rounded-lg text-center">
                <div className="text-lg font-bold text-muted-foreground mb-1">
                  {pub.logo}
                </div>
                <div className="text-xs text-muted-foreground/70">
                  {pub.name}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedSection;
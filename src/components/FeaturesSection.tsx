import { motion } from "framer-motion";
import { 
  Robot, 
  Users, 
  CreditCard, 
  Shield,
  MapTrifold,
  Calendar,
  ChatCircle,
  Heart
} from "phosphor-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Robot,
      title: "AI-Powered Planning",
      description: "Smart recommendations based on your preferences, budget, and travel style",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: MapTrifold,
      title: "Interactive Maps",
      description: "Visualize your journey with detailed maps and real-time location data",
      color: "text-secondary",
      bgColor: "bg-secondary/10",
    },
    {
      icon: Users,
      title: "Group Planning", 
      description: "Collaborate with friends and family to plan the perfect group adventure",
      color: "text-accent",
      bgColor: "bg-accent/10",
    },
    {
      icon: CreditCard,
      title: "Smart Budgeting",
      description: "Track expenses and get budget recommendations for every destination",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: Calendar,
      title: "Flexible Scheduling",
      description: "Drag-and-drop itinerary builder with smart time management",
      color: "text-secondary",
      bgColor: "bg-secondary/10",
    },
    {
      icon: ChatCircle,
      title: "24/7 Support",
      description: "Get help anytime with our dedicated travel support team",
      color: "text-accent",
      bgColor: "bg-accent/10",
    },
    {
      icon: Shield,
      title: "Travel Insurance",
      description: "Comprehensive coverage and protection for all your adventures",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: Heart,
      title: "Wishlist & Favorites",
      description: "Save destinations and experiences for future trips",
      color: "text-secondary",
      bgColor: "bg-secondary/10",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Powerful <span className="text-primary">Features</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to plan, book, and enjoy incredible travel experiences
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="glass-card p-6 rounded-2xl h-full hover:scale-105 transition-all duration-300 hover:shadow-2xl">
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl ${feature.bgColor} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon size={28} className={feature.color} weight="duotone" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
import { motion } from "framer-motion";
import { MagnifyingGlass, MapPin, Calendar } from "phosphor-react";

const HowItWorksSection = () => {
  const steps = [
    {
      icon: MagnifyingGlass,
      title: "Discover Cities",
      description: "Search and explore amazing destinations worldwide with our AI-powered recommendations",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: MapPin,
      title: "Add Your Stops",
      description: "Create your perfect itinerary by adding activities, restaurants, and attractions",
      color: "text-secondary",
      bgColor: "bg-secondary/10",
    },
    {
      icon: Calendar,
      title: "Build Itinerary",
      description: "Organize your schedule with smart suggestions and seamless booking integration",
      color: "text-accent",
      bgColor: "bg-accent/10",
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
            How It <span className="text-primary">Works</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Three simple steps to plan your perfect adventure
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative"
            >
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-border to-transparent -translate-x-8 z-0" />
              )}

              {/* Card */}
              <div className="glass-card p-8 rounded-2xl text-center relative z-10 hover:scale-105 transition-transform duration-300">
                {/* Step Number */}
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-sm font-bold text-white">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${step.bgColor} mb-6`}>
                  <step.icon size={32} className={step.color} weight="duotone" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
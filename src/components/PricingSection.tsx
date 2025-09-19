import { motion } from "framer-motion";
import { Check, Lightning, Crown, Star } from "phosphor-react";
import { Button } from "./ui/button";

const PricingSection = () => {
  const plans = [
    {
      name: "Explorer",
      price: "Free",
      period: "Forever",
      description: "Perfect for occasional travelers",
      features: [
        "Basic trip planning",
        "Up to 3 trips per month",
        "Community access",
        "Mobile app",
        "Email support"
      ],
      popular: false,
      cta: "Get Started",
      icon: Star
    },
    {
      name: "Adventurer",
      price: "$19",
      period: "per month",
      description: "For frequent travelers who want more",
      features: [
        "Unlimited trip planning",
        "AI-powered recommendations", 
        "Group collaboration",
        "Priority support",
        "Offline access",
        "Advanced analytics",
        "Custom itineraries"
      ],
      popular: true,
      cta: "Start Free Trial",
      icon: Lightning
    },
    {
      name: "Globetrotter",
      price: "$49",
      period: "per month", 
      description: "For travel professionals and agencies",
      features: [
        "Everything in Adventurer",
        "White-label solution",
        "API access",
        "Dedicated account manager",
        "Custom integrations",
        "Advanced reporting",
        "Multi-team management",
        "24/7 phone support"
      ],
      popular: false,
      cta: "Contact Sales",
      icon: Crown
    }
  ];

  return (
    <section className="py-20 bg-surface/20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Choose Your <span className="text-primary">Adventure</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Flexible pricing plans designed for every type of traveler
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative ${
                plan.popular ? "scale-105 z-10" : ""
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                  <div className="gradient-hero px-6 py-2 rounded-full text-sm font-medium text-white">
                    Most Popular
                  </div>
                </div>
              )}

              {/* Card */}
              <div className={`glass-card p-8 rounded-3xl h-full ${
                plan.popular 
                  ? "border-primary/50 shadow-2xl shadow-primary/10" 
                  : "border-border/30"
              }`}>
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl mb-6 ${
                  plan.popular 
                    ? "bg-primary/20" 
                    : "bg-surface/50"
                }`}>
                  <plan.icon 
                    size={28} 
                    className={plan.popular ? "text-primary" : "text-muted-foreground"} 
                    weight="duotone" 
                  />
                </div>

                {/* Header */}
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground mb-6">{plan.description}</p>

                {/* Price */}
                <div className="mb-8">
                  <div className="flex items-end gap-2">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground mb-1">{plan.period}</span>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check 
                        size={20} 
                        className="text-primary mt-0.5 flex-shrink-0" 
                        weight="bold" 
                      />
                      <span className="text-sm text-muted-foreground">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button 
                  className={`w-full ${
                    plan.popular 
                      ? "gradient-hero btn-neumorph" 
                      : "variant-outline"
                  }`}
                  size="lg"
                >
                  {plan.cta}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Money Back Guarantee */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <div className="glass px-6 py-3 rounded-full inline-flex items-center gap-2">
            <Star size={20} className="text-accent" weight="fill" />
            <span className="text-sm">30-day money-back guarantee on all paid plans</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
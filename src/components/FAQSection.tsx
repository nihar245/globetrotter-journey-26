import { motion } from "framer-motion";
import { useState } from "react";
import { Plus, Minus } from "phosphor-react";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How does GlobeTrotter's AI planning work?",
      answer: "Our AI analyzes your preferences, budget, travel dates, and interests to create personalized recommendations. It learns from millions of traveler experiences to suggest the perfect activities, accommodations, and routes for your unique trip."
    },
    {
      question: "Can I collaborate with friends on trip planning?",
      answer: "Absolutely! You can invite friends and family to collaborate on any trip. Everyone can add suggestions, vote on activities, and contribute to the itinerary in real-time. Changes are synced instantly across all devices."
    },
    {
      question: "Is my travel data secure and private?",
      answer: "Yes, we take privacy seriously. All your data is encrypted and stored securely. We never share your personal information with third parties without your consent. You can delete your data at any time."
    },
    {
      question: "What happens if I need to cancel or change my trip?",
      answer: "We provide flexible booking options and work with our partners to offer free cancellation or changes when possible. Our support team is available 24/7 to help you modify your plans as needed."
    },
    {
      question: "Do you offer travel insurance?",
      answer: "Yes, we partner with leading travel insurance providers to offer comprehensive coverage for medical emergencies, trip cancellations, lost luggage, and more. You can add insurance during the booking process."
    },
    {
      question: "How does the free trial work?",
      answer: "Start with a 14-day free trial of our Adventurer plan. No credit card required. You'll have full access to all premium features. Cancel anytime before the trial ends with no charges."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about GlobeTrotter
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="mb-4"
            >
              <div className="glass-card rounded-2xl overflow-hidden">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-surface/30 transition-colors"
                >
                  <h3 className="text-lg font-semibold pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openIndex === index ? (
                      <Minus size={24} className="text-primary" weight="bold" />
                    ) : (
                      <Plus size={24} className="text-muted-foreground" weight="bold" />
                    )}
                  </div>
                </button>
                
                <motion.div
                  initial={false}
                  animate={{ 
                    height: openIndex === index ? "auto" : 0,
                    opacity: openIndex === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6">
                    <p className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact Support */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <div className="glass-card p-8 rounded-2xl max-w-md mx-auto">
            <h3 className="text-xl font-bold mb-4">Still have questions?</h3>
            <p className="text-muted-foreground mb-6">
              Our support team is here to help you 24/7
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <button className="flex-1 px-4 py-2 bg-surface/50 rounded-lg text-sm font-medium hover:bg-surface/70 transition-colors">
                Live Chat
              </button>
              <button className="flex-1 px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary-dark transition-colors">
                Contact Support
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
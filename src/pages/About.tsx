import { motion } from "framer-motion";
import { Globe, Users, Trophy, Target, Heart, Shield } from "phosphor-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Navigation from "@/components/Navigation";

const About = () => {
  const stats = [
    { icon: Globe, value: "500K+", label: "Trips Planned" },
    { icon: Users, value: "100K+", label: "Happy Travelers" },
    { icon: Trophy, value: "150+", label: "Countries Covered" },
    { icon: Target, value: "4.9/5", label: "Average Rating" }
  ];

  const team = [
    {
      name: "Alex Chen",
      role: "CEO & Co-Founder",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
      bio: "Passionate traveler who's been to 80+ countries"
    },
    {
      name: "Sarah Johnson",
      role: "CTO & Co-Founder",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop&crop=face",
      bio: "Former Google engineer with a love for adventure"
    },
    {
      name: "Marcus Rodriguez",
      role: "Head of Product",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face",
      bio: "Travel blogger turned product designer"
    },
    {
      name: "Emma Thompson",
      role: "VP of Operations",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face",
      bio: "Operations expert with hospitality background"
    }
  ];

  const values = [
    {
      icon: Heart,
      title: "Passion for Travel",
      description: "We believe travel transforms lives and opens minds to new possibilities."
    },
    {
      icon: Users,
      title: "Community First",
      description: "Building connections between travelers and creating lasting friendships."
    },
    {
      icon: Shield,
      title: "Trust & Safety",
      description: "Your safety and security are our top priorities in every destination."
    },
    {
      icon: Target,
      title: "Personalized Experience",
      description: "Every trip is tailored to your unique preferences and travel style."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <Navigation />
      
      <main className="container mx-auto px-6 pt-24 pb-12">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-6xl font-bold mb-6 gradient-hero bg-clip-text text-transparent">
            About GlobeTrotter
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We're on a mission to make travel planning effortless and inspiring. 
            Since 2020, we've helped millions of travelers discover amazing destinations 
            and create unforgettable memories around the world.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 * index }}
            >
              <Card className="glass-card text-center hover:scale-105 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-3">
                    <stat.icon size={32} className="text-primary" weight="duotone" />
                  </div>
                  <div className="text-2xl font-bold mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Story Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <Card className="glass-card p-8 md:p-12">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-center">Our Story</h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  GlobeTrotter was born from a simple frustration: planning travel should be exciting, 
                  not overwhelming. Our founders, Alex and Sarah, met while backpacking through Southeast Asia 
                  and realized that despite having access to endless information online, creating the perfect 
                  itinerary was still incredibly time-consuming and stressful.
                </p>
                <p>
                  After countless hours spent researching destinations, comparing prices, and coordinating 
                  schedules, they knew there had to be a better way. They envisioned a platform that would 
                  combine the wisdom of experienced travelers with smart technology to make trip planning 
                  intuitive and enjoyable.
                </p>
                <p>
                  Today, GlobeTrotter is trusted by over 100,000 travelers worldwide. We've built more than 
                  just a planning tool – we've created a community where wanderers share their experiences, 
                  locals offer insider tips, and every journey becomes an opportunity for discovery and connection.
                </p>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                <Card className="glass-card h-full hover:scale-105 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <value.icon size={24} className="text-primary" weight="duotone" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">{value.title}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                <Card className="glass-card text-center hover:scale-105 transition-all duration-300">
                  <CardContent className="p-6">
                    <Avatar className="w-20 h-20 mx-auto mb-4">
                      <AvatarImage src={member.image} alt={member.name} />
                      <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <h3 className="font-semibold mb-1">{member.name}</h3>
                    <p className="text-sm text-primary mb-2">{member.role}</p>
                    <p className="text-xs text-muted-foreground">{member.bio}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default About;
import { useState } from "react";
import { motion } from "framer-motion";
import { Plus, Calendar, MapPin, Clock } from "phosphor-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";

const Trips = () => {
  const [activeTab, setActiveTab] = useState("upcoming");

  const trips = [
    {
      id: 1,
      title: "Tokyo Adventure",
      location: "Tokyo, Japan",
      date: "Mar 15-22, 2024",
      status: "upcoming",
      image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=400&h=250&fit=crop",
      activities: 8,
      days: 7
    },
    {
      id: 2,
      title: "European Grand Tour",
      location: "Paris, Rome, Barcelona",
      date: "Apr 10-25, 2024",
      status: "planning",
      image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=400&h=250&fit=crop",
      activities: 15,
      days: 14
    },
    {
      id: 3,
      title: "Bali Retreat",
      location: "Ubud, Bali",
      date: "Feb 5-12, 2024",
      status: "completed",
      image: "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=400&h=250&fit=crop",
      activities: 6,
      days: 7
    }
  ];

  const filteredTrips = trips.filter(trip => {
    if (activeTab === "upcoming") return trip.status === "upcoming";
    if (activeTab === "planning") return trip.status === "planning";
    if (activeTab === "completed") return trip.status === "completed";
    return true;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <Navigation />
      
      <main className="container mx-auto px-6 pt-24 pb-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold mb-4 gradient-hero bg-clip-text text-transparent">
            My Trips
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Manage and explore your travel adventures
          </p>
          
          <Button size="lg" className="gradient-hero btn-neumorph">
            <Plus size={20} className="mr-2" />
            Plan New Trip
          </Button>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex justify-center mb-8"
        >
          <div className="glass-card p-2 rounded-xl">
            {["upcoming", "planning", "completed"].map((tab) => (
              <Button
                key={tab}
                variant={activeTab === tab ? "default" : "ghost"}
                size="sm"
                onClick={() => setActiveTab(tab)}
                className={activeTab === tab ? "gradient-hero" : ""}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </Button>
            ))}
          </div>
        </motion.div>

        {/* Trips Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredTrips.map((trip, index) => (
            <motion.div
              key={trip.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
            >
              <Card className="glass-card hover:scale-105 transition-all duration-300 overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={trip.image}
                    alt={trip.title}
                    className="w-full h-full object-cover"
                  />
                  <Badge
                    className="absolute top-3 right-3"
                    variant={trip.status === "completed" ? "secondary" : "default"}
                  >
                    {trip.status}
                  </Badge>
                </div>
                
                <CardHeader className="pb-3">
                  <CardTitle className="text-xl">{trip.title}</CardTitle>
                  <div className="flex items-center text-muted-foreground">
                    <MapPin size={16} className="mr-1" />
                    {trip.location}
                  </div>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center">
                      <Calendar size={16} className="mr-1" />
                      {trip.date}
                    </div>
                    <div className="flex items-center">
                      <Clock size={16} className="mr-1" />
                      {trip.days} days
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">
                      {trip.activities} activities
                    </span>
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {filteredTrips.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="text-6xl mb-4">✈️</div>
            <h3 className="text-xl font-semibold mb-2">No trips found</h3>
            <p className="text-muted-foreground mb-6">
              Start planning your next adventure!
            </p>
            <Button className="gradient-hero">
              <Plus size={20} className="mr-2" />
              Plan Your First Trip
            </Button>
          </motion.div>
        )}
      </main>
    </div>
  );
};

export default Trips;
import { useState } from "react";
import { motion } from "framer-motion";
import { MagnifyingGlass, MapPin, Calendar, Users, Funnel } from "phosphor-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const destinations = [
    {
      id: 1,
      name: "Tokyo",
      country: "Japan",
      image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=400&h=300&fit=crop",
      price: "$1,299",
      rating: 4.8,
      activities: 156,
      description: "Discover ancient temples and modern marvels"
    },
    {
      id: 2,
      name: "Paris",
      country: "France",
      image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=400&h=300&fit=crop",
      price: "$899",
      rating: 4.9,
      activities: 203,
      description: "The city of love and lights"
    },
    {
      id: 3,
      name: "Bali",
      country: "Indonesia",
      image: "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=400&h=300&fit=crop",
      price: "$699",
      rating: 4.7,
      activities: 89,
      description: "Tropical paradise with rich culture"
    },
    {
      id: 4,
      name: "New York",
      country: "USA",
      image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=400&h=300&fit=crop",
      price: "$1,199",
      rating: 4.6,
      activities: 287,
      description: "The city that never sleeps"
    },
    {
      id: 5,
      name: "Santorini",
      country: "Greece",
      image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=400&h=300&fit=crop",
      price: "$1,599",
      rating: 4.9,
      activities: 67,
      description: "Stunning sunsets and white-washed buildings"
    },
    {
      id: 6,
      name: "Dubai",
      country: "UAE",
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=400&h=300&fit=crop",
      price: "$1,399",
      rating: 4.5,
      activities: 134,
      description: "Luxury and adventure in the desert"
    }
  ];

  const filters = ["Beach", "Culture", "Adventure", "City", "Nature", "Luxury"];

  const toggleFilter = (filter: string) => {
    setSelectedFilters(prev =>
      prev.includes(filter)
        ? prev.filter(f => f !== filter)
        : [...prev, filter]
    );
  };

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
            Discover Destinations
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Find your perfect travel destination from around the world
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="max-w-2xl mx-auto mb-8"
        >
          <div className="relative glass-card p-6 rounded-xl">
            <div className="relative">
              <MagnifyingGlass size={20} className="absolute left-3 top-3 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search destinations, activities, or experiences..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 py-6 text-lg"
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-muted-foreground" />
                <Input placeholder="Where to?" />
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={16} className="text-muted-foreground" />
                <Input placeholder="When?" />
              </div>
              <div className="flex items-center gap-2">
                <Users size={16} className="text-muted-foreground" />
                <Input placeholder="Travelers" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <div className="flex items-center gap-4 mb-4">
            <Funnel size={20} className="text-muted-foreground" />
            <span className="font-medium">Filters:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <Button
                key={filter}
                variant={selectedFilters.includes(filter) ? "default" : "outline"}
                size="sm"
                onClick={() => toggleFilter(filter)}
                className={selectedFilters.includes(filter) ? "gradient-hero" : ""}
              >
                {filter}
              </Button>
            ))}
          </div>
        </motion.div>

        {/* Destinations Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {destinations.map((destination, index) => (
            <motion.div
              key={destination.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
            >
              <Card className="glass-card hover:scale-105 transition-all duration-300 overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-3 left-3 text-white">
                    <h3 className="text-xl font-bold">{destination.name}</h3>
                    <p className="text-sm opacity-90">{destination.country}</p>
                  </div>
                  <Badge className="absolute top-3 right-3 bg-primary">
                    ⭐ {destination.rating}
                  </Badge>
                </div>
                
                <CardHeader className="pb-3">
                  <CardTitle className="flex justify-between items-center">
                    <span className="text-lg">{destination.description}</span>
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm text-muted-foreground">
                      {destination.activities} activities
                    </span>
                    <span className="text-lg font-bold text-primary">
                      {destination.price}
                    </span>
                  </div>
                  
                  <Button className="w-full gradient-hero">
                    Explore Destination
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </main>
    </div>
  );
};

export default Search;
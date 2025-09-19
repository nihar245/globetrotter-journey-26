import { useState } from "react";
import { motion } from "framer-motion";
import { Heart, ChatCircle, Share, BookmarkSimple, MapPin, Calendar } from "phosphor-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";

const Community = () => {
  const [likedPosts, setLikedPosts] = useState<number[]>([]);
  const [savedPosts, setSavedPosts] = useState<number[]>([]);

  const posts = [
    {
      id: 1,
      author: "Sarah Chen",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      username: "@sarahc_travels",
      time: "2 hours ago",
      location: "Kyoto, Japan",
      content: "Just spent the most magical morning at Fushimi Inari shrine! The thousand torii gates are absolutely breathtaking at sunrise. Pro tip: get there early to avoid crowds and capture that perfect golden hour shot! 🌅⛩️",
      image: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=600&h=400&fit=crop",
      likes: 247,
      comments: 18,
      trip: "Japan Adventure - 14 days",
      tags: ["Culture", "Photography", "Early Bird"]
    },
    {
      id: 2,
      author: "Marcus Rodriguez",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      username: "@marcus_wanderlust",
      time: "5 hours ago",
      location: "Santorini, Greece",
      content: "Sunset dinner in Oia was the perfect end to our honeymoon trip! The blue domed churches and whitewashed buildings create the most romantic atmosphere. Already planning our return! 💙🤍",
      image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=600&h=400&fit=crop",
      likes: 189,
      comments: 25,
      trip: "Greek Islands Honeymoon",
      tags: ["Romance", "Sunset", "Honeymoon"]
    },
    {
      id: 3,
      author: "Emma Thompson",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      username: "@emmatravels",
      time: "1 day ago",
      location: "Banff, Canada",
      content: "Hiking the Plain of Six Glaciers trail was challenging but so worth it! Lake Louise's turquoise waters are even more stunning from above. Remember to bring layers - weather changes quickly in the mountains! 🏔️❄️",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop",
      likes: 312,
      comments: 42,
      trip: "Canadian Rockies Adventure",
      tags: ["Hiking", "Nature", "Adventure"]
    },
    {
      id: 4,
      author: "David Kim",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      username: "@david_explores",
      time: "2 days ago",
      location: "Marrakech, Morocco",
      content: "The souks of Marrakech are a feast for all your senses! From the vibrant spices to the handcrafted textiles, every corner tells a story. Don't forget to haggle - it's part of the experience! 🏺✨",
      image: "https://images.unsplash.com/photo-1539650116574-75c0c6d73fb6?w=600&h=400&fit=crop",
      likes: 156,
      comments: 31,
      trip: "Morocco Cultural Journey",
      tags: ["Culture", "Shopping", "Local Experience"]
    }
  ];

  const toggleLike = (postId: number) => {
    setLikedPosts(prev =>
      prev.includes(postId)
        ? prev.filter(id => id !== postId)
        : [...prev, postId]
    );
  };

  const toggleSave = (postId: number) => {
    setSavedPosts(prev =>
      prev.includes(postId)
        ? prev.filter(id => id !== postId)
        : [...prev, postId]
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
            Travel Community
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Share your adventures and get inspired by fellow travelers
          </p>
          
          <Button size="lg" className="gradient-hero btn-neumorph">
            Share Your Trip
          </Button>
        </motion.div>

        {/* Community Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          <Card className="glass-card text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-primary mb-2">24.5K</div>
              <div className="text-muted-foreground">Active Travelers</div>
            </CardContent>
          </Card>
          <Card className="glass-card text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-primary mb-2">185K</div>
              <div className="text-muted-foreground">Shared Experiences</div>
            </CardContent>
          </Card>
          <Card className="glass-card text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-primary mb-2">95+</div>
              <div className="text-muted-foreground">Countries Explored</div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Posts Feed */}
        <div className="max-w-2xl mx-auto space-y-6">
          {posts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
            >
              <Card className="glass-card">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarImage src={post.avatar} alt={post.author} />
                        <AvatarFallback>{post.author.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-semibold">{post.author}</div>
                        <div className="text-sm text-muted-foreground">{post.username}</div>
                      </div>
                    </div>
                    <div className="text-sm text-muted-foreground">{post.time}</div>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mt-2">
                    <MapPin size={14} />
                    {post.location}
                  </div>
                </CardHeader>

                <CardContent className="pt-0">
                  <p className="mb-4 leading-relaxed">{post.content}</p>
                  
                  {post.image && (
                    <div className="mb-4 rounded-lg overflow-hidden">
                      <img
                        src={post.image}
                        alt="Travel photo"
                        className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}
                  
                  <div className="flex items-center gap-2 mb-4">
                    <Calendar size={14} className="text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">{post.trip}</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="flex items-center gap-4">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => toggleLike(post.id)}
                        className={`gap-2 ${likedPosts.includes(post.id) ? 'text-red-500' : ''}`}
                      >
                        <Heart size={18} weight={likedPosts.includes(post.id) ? "fill" : "regular"} />
                        {post.likes + (likedPosts.includes(post.id) ? 1 : 0)}
                      </Button>
                      
                      <Button variant="ghost" size="sm" className="gap-2">
                        <ChatCircle size={18} />
                        {post.comments}
                      </Button>
                      
                      <Button variant="ghost" size="sm" className="gap-2">
                        <Share size={18} />
                      </Button>
                    </div>
                    
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => toggleSave(post.id)}
                      className={savedPosts.includes(post.id) ? 'text-primary' : ''}
                    >
                      <BookmarkSimple size={18} weight={savedPosts.includes(post.id) ? "fill" : "regular"} />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Community;
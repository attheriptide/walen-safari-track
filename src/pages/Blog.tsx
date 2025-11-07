import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowRight } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "10 Essential GPS Tracking Tips for Ugandan Vehicle Owners",
    excerpt: "Discover the best practices for using GPS tracking to protect your vehicle in Kampala and across Uganda.",
    category: "GPS Tips",
    author: "Walen Team",
    date: "November 1, 2025",
    readTime: "5 min read",
    image: "/placeholder.svg"
  },
  {
    id: 2,
    title: "How GPS Tracking Reduced Theft by 98% in Uganda",
    excerpt: "Real success stories from Ugandan drivers who recovered their stolen vehicles using our GPS tracking technology.",
    category: "Success Stories",
    author: "Walen Team",
    date: "October 28, 2025",
    readTime: "7 min read",
    image: "/placeholder.svg"
  },
  {
    id: 3,
    title: "Vehicle Safety Tips for Boda Boda Riders in Kampala",
    excerpt: "Essential safety advice for motorcycle riders including GPS tracking benefits and security best practices.",
    category: "Safety Advice",
    author: "Walen Team",
    date: "October 25, 2025",
    readTime: "4 min read",
    image: "/placeholder.svg"
  },
  {
    id: 4,
    title: "Fleet Management Solutions for Ugandan Businesses",
    excerpt: "How businesses are optimizing their fleet operations with real-time GPS tracking and management tools.",
    category: "Fleet Management",
    author: "Walen Team",
    date: "October 20, 2025",
    readTime: "6 min read",
    image: "/placeholder.svg"
  },
  {
    id: 5,
    title: "Understanding Remote Engine Cut-Off Technology",
    excerpt: "Learn how remote immobilization works and why it's a game-changer for vehicle security in Uganda.",
    category: "Technology",
    author: "Walen Team",
    date: "October 15, 2025",
    readTime: "5 min read",
    image: "/placeholder.svg"
  },
  {
    id: 6,
    title: "Walen Tracking Expands Coverage Across Uganda",
    excerpt: "Exciting news about our expanded coverage in Eastern and Northern Uganda, bringing GPS security to more regions.",
    category: "Company Updates",
    author: "Walen Team",
    date: "October 10, 2025",
    readTime: "3 min read",
    image: "/placeholder.svg"
  }
];

const categories = ["All", "GPS Tips", "Safety Advice", "Fleet Management", "Technology", "Company Updates", "Success Stories"];

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts = selectedCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <WhatsAppButton />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              GPS Tracking Insights & Updates
            </h1>
            <p className="text-lg text-muted-foreground">
              Expert tips, safety advice, and the latest news about GPS vehicle tracking in Uganda
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className="animate-scale-in"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <Card 
                key={post.id} 
                className="group overflow-hidden hover:shadow-lg transition-all duration-300 animate-fade-in border-border"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded">
                      {post.category}
                    </span>
                    <span className="text-xs text-muted-foreground">{post.readTime}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <User className="w-3 h-3" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        <span>{post.date}</span>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" className="text-primary group-hover:gap-2 transition-all">
                      Read <ArrowRight className="w-4 h-4 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-gradient-to-b from-background to-primary/5">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto p-8 text-center border-primary/20">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Stay Updated with GPS Tracking News
            </h2>
            <p className="text-muted-foreground mb-6">
              Get the latest tips, safety advice, and product updates delivered to your phone
            </p>
            <Button 
              size="lg"
              onClick={() => window.open('https://wa.me/256778478671?text=Hi!%20I%20want%20to%20subscribe%20to%20your%20newsletter', '_blank')}
            >
              Subscribe via WhatsApp
            </Button>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;

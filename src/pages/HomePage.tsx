import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, Car, Bike, Zap, ArrowRight, Star, MapPin, Users, Award, TrendingUp } from "lucide-react";
import Header from "@/components/Header";
import VehicleCard from "@/components/VehicleCard";
import heroImage from "@/assets/hero-vehicles.jpg";

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // Sample data - in real app this would come from API
  const featuredVehicles = [
    {
      id: "1",
      name: "Royal Enfield Classic 350",
      brand: "Royal Enfield",
      price: 195000,
      originalPrice: 210000,
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=300&fit=crop",
      fuelType: "Petrol" as const,
      mileage: "40 kmpl",
      year: 2024,
      location: "Mumbai, Maharashtra",
      discount: 7
    },
    {
      id: "2", 
      name: "Honda Activa 6G",
      brand: "Honda",
      price: 75000,
      image: "https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=500&h=300&fit=crop",
      fuelType: "Petrol" as const,
      mileage: "60 kmpl",
      year: 2024,
      location: "Delhi, NCR"
    },
    {
      id: "3",
      name: "Ather 450X",
      brand: "Ather",
      price: 145000,
      image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=500&h=300&fit=crop",
      fuelType: "Electric" as const,
      mileage: "85 km range",
      year: 2024,
      location: "Bangalore, Karnataka"
    },
    {
      id: "4",
      name: "TVS Apache RTR 200 4V",
      brand: "TVS",
      price: 140000,
      image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=500&h=300&fit=crop",
      fuelType: "Petrol" as const,
      mileage: "38 kmpl",
      year: 2024,
      location: "Chennai, Tamil Nadu"
    }
  ];

  const categories = [
    { name: "Motorcycles", icon: Bike, count: "2,500+", color: "bg-blue-500" },
    { name: "Scooters", icon: Car, count: "1,800+", color: "bg-green-500" },
    { name: "Electric", icon: Zap, count: "450+", color: "bg-purple-500" }
  ];

  const stats = [
    { label: "Vehicles Listed", value: "50,000+", icon: Car },
    { label: "Happy Customers", value: "25,000+", icon: Users },
    { label: "Partner Dealers", value: "2,000+", icon: Award },
    { label: "Cities Covered", value: "150+", icon: MapPin }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero min-h-[600px] flex items-center">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        ></div>
        <div className="container mx-auto px-4 py-20 sm:px-6 lg:px-8 relative z-20">
          <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Find Your Perfect
              <span className="block text-accent"> Two Wheeler</span>
            </h1>
            <p className="text-xl sm:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
              Buy, Sell, Compare bikes, scooters & EVs. Get the best deals from trusted dealers nationwide.
            </p>
            
            {/* Hero Search */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 max-w-2xl mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/70 h-5 w-5" />
                  <Input
                    type="text"
                    placeholder="Search by brand, model, or type..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-12 bg-white/20 border-white/30 text-white placeholder:text-white/70 h-12"
                  />
                </div>
                <Link to={`/browse${searchQuery ? `?search=${encodeURIComponent(searchQuery)}` : ''}`}>
                  <Button size="lg" className="h-12 px-8 bg-accent hover:bg-accent/90 text-white font-semibold">
                    Search <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Browse by Category</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Discover thousands of verified vehicles across different categories
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {categories.map((category) => (
              <Link key={category.name} to={`/browse?category=${category.name.toLowerCase()}`}>
                <Card className="hover:shadow-card-hover transition-all duration-300 cursor-pointer group">
                  <CardContent className="p-8 text-center">
                    <div className={`${category.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                      <category.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
                    <p className="text-muted-foreground text-sm mb-2">{category.count} vehicles</p>
                    <ArrowRight className="h-4 w-4 mx-auto text-primary group-hover:translate-x-1 transition-transform" />
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Vehicles */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-2">Featured Vehicles</h2>
              <p className="text-muted-foreground">Handpicked deals you can't miss</p>
            </div>
            <Link to="/browse">
              <Button variant="outline" className="hidden sm:flex">
                View All <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredVehicles.map((vehicle) => (
              <VehicleCard key={vehicle.id} vehicle={vehicle} compact />
            ))}
          </div>
          
          <div className="text-center mt-8 sm:hidden">
            <Link to="/browse">
              <Button>View All Vehicles <ArrowRight className="ml-2 h-4 w-4" /></Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Vahan Bazar?</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              India's most trusted two-wheeler marketplace with verified dealers and genuine vehicles
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <Card key={stat.label} className="text-center p-6">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Find Your Dream Bike?</h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Join thousands of satisfied customers who found their perfect vehicle through Vahan Bazar
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/browse">
              <Button size="lg" variant="secondary" className="min-w-[200px]">
                Start Browsing
              </Button>
            </Link>
            <Link to="/sell">
              <Button size="lg" variant="outline" className="min-w-[200px] border-white text-white hover:bg-white hover:text-primary">
                Sell Your Vehicle
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
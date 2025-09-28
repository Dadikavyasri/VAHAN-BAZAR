import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Car, 
  Heart, 
  ShoppingBag, 
  Eye, 
  Calendar, 
  MapPin, 
  Phone, 
  Mail, 
  Edit,
  Plus,
  Star,
  MessageCircle,
  Bell,
  Settings,
  LogOut,
  Search
} from "lucide-react";
import Header from "@/components/Header";

const DashboardPage = () => {
  const [activeTab, setActiveTab] = useState("overview");

  // Sample user data
  const user = {
    name: "Rajesh Kumar",
    email: "rajesh.kumar@example.com",
    phone: "+91 9876543210",
    location: "Mumbai, Maharashtra",
    memberSince: "January 2024",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    verified: true
  };

  const stats = [
    { label: "Listings", value: "3", icon: Car, color: "text-blue-600" },
    { label: "Favorites", value: "12", icon: Heart, color: "text-red-600" },
    { label: "Purchases", value: "1", icon: ShoppingBag, color: "text-green-600" },
    { label: "Profile Views", value: "47", icon: Eye, color: "text-purple-600" }
  ];

  const recentListings = [
    {
      id: "1",
      name: "Royal Enfield Classic 350",
      price: 195000,
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=200&h=150&fit=crop",
      status: "Active",
      views: 23,
      inquiries: 5
    },
    {
      id: "2",
      name: "Honda Activa 6G",
      price: 75000,
      image: "https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=200&h=150&fit=crop",
      status: "Sold",
      views: 45,
      inquiries: 12
    }
  ];

  const favorites = [
    {
      id: "3",
      name: "Ather 450X",
      price: 145000,
      image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=200&h=150&fit=crop",
      location: "Bangalore"
    },
    {
      id: "4", 
      name: "TVS Apache RTR 200",
      price: 140000,
      image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=200&h=150&fit=crop",
      location: "Chennai"
    }
  ];

  const formatPrice = (price: number) => {
    if (price >= 100000) {
      return `₹${(price / 100000).toFixed(1)} Lakh`;
    }
    return `₹${price.toLocaleString()}`;
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-80">
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="relative">
                    <Avatar className="w-20 h-20">
                      <AvatarImage src={user.avatar} alt={user.name} />
                      <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    {user.verified && (
                      <div className="absolute -bottom-1 -right-1 bg-green-500 rounded-full p-1">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                    )}
                  </div>
                  <h2 className="text-xl font-semibold mt-3">{user.name}</h2>
                  <p className="text-muted-foreground text-sm">{user.email}</p>
                  {user.verified && (
                    <Badge className="mt-2 bg-green-100 text-green-800">Verified User</Badge>
                  )}
                </div>

                <div className="mt-6 space-y-3">
                  <div className="flex items-center space-x-2 text-sm">
                    <Phone className="h-4 w-4 text-muted-foreground" />
                    <span>{user.phone}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span>{user.location}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span>Member since {user.memberSince}</span>
                  </div>
                </div>

                <div className="mt-6 space-y-2">
                  <Button className="w-full" variant="outline">
                    <Edit className="h-4 w-4 mr-2" />
                    Edit Profile
                  </Button>
                  <Button className="w-full" variant="outline">
                    <Settings className="h-4 w-4 mr-2" />
                    Settings
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Stats Overview */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {stats.map((stat) => (
                <Card key={stat.label}>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-2xl font-bold">{stat.value}</p>
                        <p className="text-sm text-muted-foreground">{stat.label}</p>
                      </div>
                      <stat.icon className={`h-8 w-8 ${stat.color}`} />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Tabs */}
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="listings">My Listings</TabsTrigger>
                <TabsTrigger value="favorites">Favorites</TabsTrigger>
                <TabsTrigger value="messages">Messages</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="mt-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Recent Activity */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Recent Activity</CardTitle>
                      <CardDescription>Your latest actions on Vahan Bazar</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                          <Car className="h-4 w-4 text-green-600" />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium">Listed Royal Enfield Classic 350</p>
                          <p className="text-xs text-muted-foreground">2 hours ago</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                          <Heart className="h-4 w-4 text-blue-600" />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium">Added Ather 450X to favorites</p>
                          <p className="text-xs text-muted-foreground">1 day ago</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                          <MessageCircle className="h-4 w-4 text-purple-600" />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium">Received inquiry for Honda Activa</p>
                          <p className="text-xs text-muted-foreground">2 days ago</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Quick Actions */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Quick Actions</CardTitle>
                      <CardDescription>Manage your account and listings</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <Link to="/sell" className="w-full">
                        <Button className="w-full justify-start">
                          <Plus className="h-4 w-4 mr-2" />
                          List a Vehicle
                        </Button>
                      </Link>
                      <Button variant="outline" className="w-full justify-start">
                        <Search className="h-4 w-4 mr-2" />
                        Search Vehicles
                      </Button>
                      <Button variant="outline" className="w-full justify-start">
                        <Bell className="h-4 w-4 mr-2" />
                        Manage Alerts
                      </Button>
                      <Button variant="outline" className="w-full justify-start">
                        <Star className="h-4 w-4 mr-2" />
                        Rate Experience
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="listings" className="mt-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold">My Listings ({recentListings.length})</h3>
                  <Link to="/sell">
                    <Button>
                      <Plus className="h-4 w-4 mr-2" />
                      Add Listing
                    </Button>
                  </Link>
                </div>
                <div className="space-y-4">
                  {recentListings.map((listing) => (
                    <Card key={listing.id}>
                      <CardContent className="p-4">
                        <div className="flex items-center space-x-4">
                          <img
                            src={listing.image}
                            alt={listing.name}
                            className="w-20 h-15 object-cover rounded-lg"
                          />
                          <div className="flex-1">
                            <h4 className="font-semibold">{listing.name}</h4>
                            <p className="text-lg font-bold text-primary">{formatPrice(listing.price)}</p>
                            <div className="flex items-center space-x-4 mt-2 text-sm text-muted-foreground">
                              <span>{listing.views} views</span>
                              <span>{listing.inquiries} inquiries</span>
                            </div>
                          </div>
                          <div className="text-right">
                            <Badge variant={listing.status === "Active" ? "default" : "secondary"}>
                              {listing.status}
                            </Badge>
                            <div className="mt-2 space-y-1">
                              <Button variant="ghost" size="sm">Edit</Button>
                              <Button variant="ghost" size="sm" className="text-red-600">Delete</Button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="favorites" className="mt-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold">Favorites ({favorites.length})</h3>
                  <Button variant="outline">Clear All</Button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {favorites.map((favorite) => (
                    <Card key={favorite.id}>
                      <CardContent className="p-4">
                        <div className="flex items-center space-x-3">
                          <img
                            src={favorite.image}
                            alt={favorite.name}
                            className="w-16 h-12 object-cover rounded-lg"
                          />
                          <div className="flex-1">
                            <h4 className="font-medium">{favorite.name}</h4>
                            <p className="text-primary font-semibold">{formatPrice(favorite.price)}</p>
                            <p className="text-xs text-muted-foreground">{favorite.location}</p>
                          </div>
                          <Button variant="ghost" size="icon">
                            <Heart className="h-4 w-4 fill-current text-red-500" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="messages" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Messages</CardTitle>
                    <CardDescription>Conversations with buyers and sellers</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center py-8">
                      <MessageCircle className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                      <h3 className="text-lg font-semibold mb-2">No messages yet</h3>
                      <p className="text-muted-foreground mb-4">
                        Start browsing vehicles to connect with sellers or list your own vehicle to receive inquiries.
                      </p>
                      <Link to="/browse">
                        <Button>Browse Vehicles</Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
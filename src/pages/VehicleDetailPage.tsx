import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Heart, 
  Share2, 
  Flag, 
  Phone, 
  MessageCircle, 
  MapPin, 
  Calendar,
  Fuel,
  Gauge,
  Settings,
  Star,
  ChevronLeft,
  ChevronRight,
  Shield,
  Award,
  CheckCircle
} from "lucide-react";
import Header from "@/components/Header";
import { useToast } from "@/hooks/use-toast";

const VehicleDetailPage = () => {
  const { id } = useParams();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFavorited, setIsFavorited] = useState(false);
  const { toast } = useToast();

  // Sample vehicle data - in real app would fetch based on ID
  const vehicle = {
    id: "1",
    name: "Royal Enfield Classic 350",
    brand: "Royal Enfield",
    model: "Classic 350",
    price: 195000,
    originalPrice: 210000,
    year: 2024,
    mileage: "40 kmpl",
    fuelType: "Petrol",
    transmission: "Manual",
    engineCC: "349cc",
    location: "Mumbai, Maharashtra",
    kmsDriven: 5000,
    owners: 1,
    insurance: "Third Party",
    registrationState: "MH",
    discount: 7,
    isUsed: false,
    description: "This Royal Enfield Classic 350 is in excellent condition with regular maintenance. Perfect for both city rides and long touring. All papers are clear and up to date.",
    features: [
      "ABS (Anti-lock Braking System)",
      "Electric Start",
      "LED Headlight",
      "Dual Channel ABS",
      "Digital Instrument Cluster",
      "USB Charging Port"
    ],
    images: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=800&h=600&fit=crop"
    ]
  };

  const seller = {
    name: "Amit Sharma",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    rating: 4.8,
    reviewCount: 24,
    memberSince: "2022",
    location: "Mumbai, Maharashtra",
    verified: true,
    responseTime: "Usually responds within 2 hours"
  };

  const specifications = [
    { label: "Engine", value: "349cc, Single Cylinder" },
    { label: "Power", value: "20.2 bhp @ 6100 rpm" },
    { label: "Torque", value: "27 Nm @ 4000 rpm" },
    { label: "Fuel Tank", value: "13 Liters" },
    { label: "Kerb Weight", value: "195 kg" },
    { label: "Top Speed", value: "104 kmph" },
    { label: "Brakes", value: "Disc (Front), Drum (Rear)" },
    { label: "Tyres", value: "90/90-19 (Front), 110/90-18 (Rear)" }
  ];

  const formatPrice = (price: number) => {
    if (price >= 100000) {
      return `₹${(price / 100000).toFixed(1)} Lakh`;
    }
    return `₹${price.toLocaleString()}`;
  };

  const handleContactSeller = () => {
    toast({
      title: "Contact Request Sent",
      description: "The seller will be notified of your interest.",
    });
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === vehicle.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? vehicle.images.length - 1 : prev - 1
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="mb-6">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary">Home</Link>
            <span>/</span>
            <Link to="/browse" className="hover:text-primary">Browse</Link>
            <span>/</span>
            <span>{vehicle.name}</span>
          </div>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Image Gallery */}
            <Card>
              <CardContent className="p-0">
                <div className="relative">
                  <img
                    src={vehicle.images[currentImageIndex]}
                    alt={`${vehicle.name} - Image ${currentImageIndex + 1}`}
                    className="w-full h-96 object-cover rounded-t-lg"
                  />
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm hover:bg-white"
                    onClick={prevImage}
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm hover:bg-white"
                    onClick={nextImage}
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                  
                  {/* Image Indicators */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {vehicle.images.map((_, index) => (
                      <button
                        key={index}
                        className={`w-2 h-2 rounded-full ${
                          index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                        }`}
                        onClick={() => setCurrentImageIndex(index)}
                      />
                    ))}
                  </div>
                </div>
                
                {/* Thumbnail Strip */}
                <div className="p-4 flex space-x-2 overflow-x-auto">
                  {vehicle.images.map((image, index) => (
                    <button
                      key={index}
                      className={`flex-shrink-0 w-20 h-16 rounded-lg overflow-hidden border-2 ${
                        index === currentImageIndex ? 'border-primary' : 'border-transparent'
                      }`}
                      onClick={() => setCurrentImageIndex(index)}
                    >
                      <img
                        src={image}
                        alt={`Thumbnail ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Vehicle Info */}
            <Card>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-2xl">{vehicle.name}</CardTitle>
                    <p className="text-muted-foreground mt-1">{vehicle.brand} • {vehicle.year}</p>
                  </div>
                  <div className="flex space-x-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setIsFavorited(!isFavorited)}
                    >
                      <Heart className={`h-5 w-5 ${isFavorited ? 'fill-current text-red-500' : ''}`} />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Share2 className="h-5 w-5" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Flag className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Price */}
                <div className="flex items-center space-x-4">
                  <div className="text-3xl font-bold text-primary">
                    {formatPrice(vehicle.price)}
                  </div>
                  {vehicle.originalPrice && (
                    <div className="text-lg text-muted-foreground line-through">
                      {formatPrice(vehicle.originalPrice)}
                    </div>
                  )}
                  {vehicle.discount && (
                    <Badge className="bg-green-100 text-green-800">
                      {vehicle.discount}% OFF
                    </Badge>
                  )}
                </div>

                {/* Key Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-3 bg-muted/30 rounded-lg">
                    <Calendar className="h-5 w-5 mx-auto mb-1 text-muted-foreground" />
                    <div className="font-semibold">{vehicle.year}</div>
                    <div className="text-xs text-muted-foreground">Year</div>
                  </div>
                  <div className="text-center p-3 bg-muted/30 rounded-lg">
                    <Gauge className="h-5 w-5 mx-auto mb-1 text-muted-foreground" />
                    <div className="font-semibold">{vehicle.kmsDriven.toLocaleString()}</div>
                    <div className="text-xs text-muted-foreground">KMs Driven</div>
                  </div>
                  <div className="text-center p-3 bg-muted/30 rounded-lg">
                    <Fuel className="h-5 w-5 mx-auto mb-1 text-muted-foreground" />
                    <div className="font-semibold">{vehicle.mileage}</div>
                    <div className="text-xs text-muted-foreground">Mileage</div>
                  </div>
                  <div className="text-center p-3 bg-muted/30 rounded-lg">
                    <Settings className="h-5 w-5 mx-auto mb-1 text-muted-foreground" />
                    <div className="font-semibold">{vehicle.owners}</div>
                    <div className="text-xs text-muted-foreground">Owner</div>
                  </div>
                </div>

                {/* Description */}
                <div>
                  <h3 className="font-semibold mb-2">Description</h3>
                  <p className="text-muted-foreground">{vehicle.description}</p>
                </div>

                {/* Features */}
                <div>
                  <h3 className="font-semibold mb-3">Key Features</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {vehicle.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Specifications */}
            <Card>
              <CardHeader>
                <CardTitle>Specifications</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {specifications.map((spec, index) => (
                    <div key={index} className="flex justify-between py-2 border-b border-muted">
                      <span className="text-muted-foreground">{spec.label}</span>
                      <span className="font-medium">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Seller Info */}
            <Card>
              <CardHeader>
                <CardTitle>Seller Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Avatar>
                    <AvatarImage src={seller.avatar} alt={seller.name} />
                    <AvatarFallback>{seller.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2">
                      <h4 className="font-semibold">{seller.name}</h4>
                      {seller.verified && (
                        <Shield className="h-4 w-4 text-green-600" />
                      )}
                    </div>
                    <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                      <Star className="h-3 w-3 fill-current text-yellow-500" />
                      <span>{seller.rating}</span>
                      <span>({seller.reviewCount} reviews)</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4" />
                    <span>{seller.location}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Award className="h-4 w-4" />
                    <span>Member since {seller.memberSince}</span>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground">{seller.responseTime}</p>

                <div className="space-y-2">
                  <Button className="w-full" onClick={handleContactSeller}>
                    <Phone className="h-4 w-4 mr-2" />
                    Call Seller
                  </Button>
                  <Button variant="outline" className="w-full">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Finance Calculator */}
            <Card>
              <CardHeader>
                <CardTitle>Loan Calculator</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium">Loan Amount</label>
                  <div className="text-lg font-bold">{formatPrice(vehicle.price * 0.8)}</div>
                  <p className="text-xs text-muted-foreground">80% of vehicle price</p>
                </div>
                
                <div>
                  <label className="text-sm font-medium">EMI (36 months @ 9.5%)</label>
                  <div className="text-lg font-bold text-primary">₹5,240/month</div>
                </div>

                <Button variant="outline" className="w-full">
                  Get Detailed Quote
                </Button>
              </CardContent>
            </Card>

            {/* Safety Tips */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Shield className="h-5 w-5 text-primary" />
                  <span>Safety Tips</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p>• Inspect the vehicle thoroughly before purchase</p>
                <p>• Verify all documents and registration</p>
                <p>• Take a test ride in safe conditions</p>
                <p>• Use secure payment methods</p>
                <p>• Meet in public places for safety</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleDetailPage;
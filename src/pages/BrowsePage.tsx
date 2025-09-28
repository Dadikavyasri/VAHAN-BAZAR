import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Separator } from "@/components/ui/separator";
import { Search, Filter, Grid3X3, List, SlidersHorizontal, MapPin, Fuel, Calendar, ArrowUpDown } from "lucide-react";
import Header from "@/components/Header";
import VehicleCard from "@/components/VehicleCard";


const BrowsePage = () => {
  const [searchParams] = useSearchParams();
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [showFilters, setShowFilters] = useState(false);
  const [priceRange, setPriceRange] = useState([50000, 1000000]);
  const [filters, setFilters] = useState({
    category: "",
    brand: "",
    fuelType: "",
    year: "",
    location: "",
    sortBy: "relevance"
  });

  // Sample vehicles data
  const vehicles = [
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
    },
    {
      id: "5",
      name: "Hero Splendor Plus",
      brand: "Hero",
      price: 68000,
      image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=500&h=300&fit=crop",
      fuelType: "Petrol" as const,
      mileage: "80 kmpl",
      year: 2024,
      location: "Pune, Maharashtra"
    },
    {
      id: "6",
      name: "Bajaj Pulsar NS200",
      brand: "Bajaj",
      price: 130000,
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=300&fit=crop",
      fuelType: "Petrol" as const,
      mileage: "35 kmpl",
      year: 2024,
      location: "Hyderabad, Telangana"
    }
  ];

  const brands = ["All Brands", "Royal Enfield", "Honda", "Ather", "TVS", "Hero", "Bajaj", "Yamaha", "Suzuki"];
  const locations = ["All Locations", "Mumbai", "Delhi", "Bangalore", "Chennai", "Pune", "Hyderabad"];
  const categories = ["All Categories", "Motorcycles", "Scooters", "Electric"];

  useEffect(() => {
    const searchQuery = searchParams.get("search");
    const categoryParam = searchParams.get("category");
    
    if (categoryParam) {
      setFilters(prev => ({ ...prev, category: categoryParam }));
    }
  }, [searchParams]);

  const formatPrice = (price: number) => {
    if (price >= 100000) {
      return `₹${(price / 100000).toFixed(1)} Lakh`;
    }
    return `₹${price.toLocaleString()}`;
  };

  return (
  <div className="min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
    <Header />

    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Page Header */}
      <div className="text-center mb-12">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg">
          Browse Vehicles
        </h1>
        <p className="mt-4 text-lg md:text-xl text-white/80">
          {searchParams.get("search") 
            ? `Search results for "${searchParams.get("search")}"`
            : `Discover ${vehicles.length} vehicles from trusted sellers`}
        </p>
      </div>
<div className="flex flex-col lg:flex-row gap-8">
  {/* Filters Sidebar */}
  <div className={`lg:w-80 ${showFilters ? 'block' : 'hidden lg:block'}`}>
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>Filters</span>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setShowFilters(false)}
            className="lg:hidden"
          >
            ×
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Category Filter */}
        <div>
          <label className="text-sm font-medium mb-2 block">Category</label>
          <Select
            value={filters.category}
            onValueChange={(value) => setFilters(prev => ({ ...prev, category: value }))}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem
                  key={category}
                  value={category.toLowerCase().replace(' ', '-')}
                >
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Brand Filter */}
        <div>
          <label className="text-sm font-medium mb-2 block">Brand</label>
          <Select
            value={filters.brand}
            onValueChange={(value) => setFilters(prev => ({ ...prev, brand: value }))}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select brand" />
            </SelectTrigger>
            <SelectContent>
              {brands.map((brand) => (
                <SelectItem
                  key={brand}
                  value={brand.toLowerCase().replace(' ', '-')}
                >
                  {brand}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Price Range */}
        <div>
          <label className="text-sm font-medium mb-4 block">
            Price Range: {formatPrice(priceRange[0])} - {formatPrice(priceRange[1])}
          </label>
          <Slider
            value={priceRange}
            onValueChange={setPriceRange}
            max={1000000}
            min={50000}
            step={10000}
            className="w-full"
          />
        </div>

        {/* Fuel Type */}
        <div>
          <label className="text-sm font-medium mb-2 block">Fuel Type</label>
          <Select
            value={filters.fuelType}
            onValueChange={(value) => setFilters(prev => ({ ...prev, fuelType: value }))}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select fuel type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="petrol">Petrol</SelectItem>
              <SelectItem value="electric">Electric</SelectItem>
              <SelectItem value="hybrid">Hybrid</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Location */}
        <div>
          <label className="text-sm font-medium mb-2 block">Location</label>
          <Select
            value={filters.location}
            onValueChange={(value) => setFilters(prev => ({ ...prev, location: value }))}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select location" />
            </SelectTrigger>
            <SelectContent>
              {locations.map((location) => (
                <SelectItem key={location} value={location.toLowerCase()}>
                  {location}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <Button className="w-full">Apply Filters</Button>
      </CardContent>
    </Card>
  </div>

  {/* Main Content */}
  <div className="flex-1">
    {/* Search and Sort Bar */}
    <div className="bg-card rounded-lg p-4 mb-6 shadow-card-custom">
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
        <div className="flex flex-col sm:flex-row gap-4 items-center flex-1">
          {/* Mobile Filter Toggle */}
          <Button
            variant="outline"
            onClick={() => setShowFilters(!showFilters)}
            className="lg:hidden"
          >
            <Filter className="h-4 w-4 mr-2" />
            Filters
          </Button>

          {/* Search */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              type="text"
              placeholder="Search vehicles..."
              className="pl-10"
            />
          </div>

          {/* Sort */}
          <Select
            value={filters.sortBy}
            onValueChange={(value) => setFilters(prev => ({ ...prev, sortBy: value }))}
          >
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="relevance">Relevance</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
              <SelectItem value="year-new">Newest First</SelectItem>
              <SelectItem value="year-old">Oldest First</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* View Mode Toggle */}
        <div className="flex items-center space-x-2">
          <Button
            variant={viewMode === "grid" ? "default" : "ghost"}
            size="sm"
            onClick={() => setViewMode("grid")}
          >
            <Grid3X3 className="h-4 w-4" />
          </Button>
          <Button
            variant={viewMode === "list" ? "default" : "ghost"}
            size="sm"
            onClick={() => setViewMode("list")}
          >
            <List className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>

    {/* Results Count */}
    <div className="flex items-center justify-between mb-6">
      <p className="text-muted-foreground">
        Showing {vehicles.length} results
      </p>
      <div className="flex items-center space-x-2">
        <Badge variant="secondary">{vehicles.length} vehicles</Badge>
      </div>
    </div>

    {/* Vehicle Grid */}
    <div className={`grid gap-6 ${viewMode === "grid" ? "grid-cols-1 md:grid-cols-2 xl:grid-cols-3" : "grid-cols-1"}`}>
      {vehicles.map((vehicle) => (
        <VehicleCard key={vehicle.id} vehicle={vehicle} compact={viewMode === "grid"} />
      ))}
    </div>
  </div>
</div>

      

          {/* Pagination */}
          <div className="flex items-center justify-center mt-12">
            <div className="flex items-center space-x-2">
              <Button variant="outline" disabled>Previous</Button>
              <Button variant="default">1</Button>
              <Button variant="outline">2</Button>
              <Button variant="outline">3</Button>
              <Button variant="outline">Next</Button>
            </div>
          </div>
        </div>
      </div>
);
};

export default BrowsePage;
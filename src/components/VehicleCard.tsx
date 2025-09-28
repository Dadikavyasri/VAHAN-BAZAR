import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, MapPin, Fuel, Gauge, Calendar } from "lucide-react";
import { useState } from "react";

interface Vehicle {
  id: string;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  image: string;
  fuelType: "Petrol" | "Electric" | "Hybrid";
  mileage: string;
  year: number;
  location: string;
  isUsed?: boolean;
  discount?: number;
}

interface VehicleCardProps {
  vehicle: Vehicle;
  compact?: boolean;
}

const VehicleCard = ({ vehicle, compact = false }: VehicleCardProps) => {
  const [isFavorited, setIsFavorited] = useState(false);

  const formatPrice = (price: number) => {
    if (price >= 100000) {
      return `₹${(price / 100000).toFixed(1)} Lakh`;
    }
    return `₹${price.toLocaleString()}`;
  };

  const getFuelTypeColor = (fuelType: string) => {
    switch (fuelType) {
      case "Electric":
        return "bg-green-100 text-green-800 border-green-200";
      case "Petrol":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "Hybrid":
        return "bg-purple-100 text-purple-800 border-purple-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <Card className={`group hover:shadow-card-hover transition-all duration-300 ${compact ? 'max-w-sm' : ''}`}>
      <div className="relative">
        <img
          src={vehicle.image}
          alt={vehicle.name}
          className="w-full h-48 object-cover rounded-t-lg"
        />
        <Button
          variant="ghost"
          size="icon"
          className={`absolute top-2 right-2 bg-white/80 backdrop-blur-sm hover:bg-white ${
            isFavorited ? 'text-red-500' : 'text-gray-600'
          }`}
          onClick={() => setIsFavorited(!isFavorited)}
        >
          <Heart className={`h-4 w-4 ${isFavorited ? 'fill-current' : ''}`} />
        </Button>
        {vehicle.discount && (
          <Badge className="absolute top-2 left-2 bg-accent text-accent-foreground">
            {vehicle.discount}% OFF
          </Badge>
        )}
        {vehicle.isUsed && (
          <Badge variant="secondary" className="absolute bottom-2 left-2">
            Used
          </Badge>
        )}
      </div>

      <CardContent className="p-4">
        <div className="space-y-2">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="font-semibold text-lg line-clamp-1">{vehicle.name}</h3>
              <p className="text-muted-foreground text-sm">{vehicle.brand}</p>
            </div>
            <Badge className={getFuelTypeColor(vehicle.fuelType)}>
              {vehicle.fuelType}
            </Badge>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-1">
              <div className="text-xl font-bold text-primary">
                {formatPrice(vehicle.price)}
              </div>
              {vehicle.originalPrice && (
                <div className="text-sm text-muted-foreground line-through">
                  {formatPrice(vehicle.originalPrice)}
                </div>
              )}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
            <div className="flex items-center space-x-1">
              <Fuel className="h-3 w-3" />
              <span>{vehicle.mileage}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Calendar className="h-3 w-3" />
              <span>{vehicle.year}</span>
            </div>
          </div>

          <div className="flex items-center space-x-1 text-sm text-muted-foreground">
            <MapPin className="h-3 w-3" />
            <span>{vehicle.location}</span>
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0 space-y-2">
        <div className="flex space-x-2 w-full">
          <Link to={`/vehicle/${vehicle.id}`} className="flex-1">
            <Button className="w-full">View Details</Button>
          </Link>
          <Button variant="outline" className="px-3">
            <Gauge className="h-4 w-4" />
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default VehicleCard;
import { Heart, Star, Calendar, Fuel } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface VehicleCardProps {
  id: string;
  name: string;
  image: string;
  pricePerDay: number;
  rating: number;
  category: string;
  fuelType: string;
  transmission: string;
  available: boolean;
  onRentNow: (id: string) => void;
  onViewDetails: (id: string) => void;
  onToggleFavorite: (id: string) => void;
  isFavorite?: boolean;
}

export function VehicleCard({
  id,
  name,
  image,
  pricePerDay,
  rating,
  category,
  fuelType,
  transmission,
  available,
  onRentNow,
  onViewDetails,
  onToggleFavorite,
  isFavorite = false,
}: VehicleCardProps) {
  return (
    <div className="vehicle-card group">
      {/* Image Container */}
      <div className="relative overflow-hidden rounded-lg mb-4">
        <img
          src={image}
          alt={name}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        
        {/* Favorite Button */}
        <button
          onClick={() => onToggleFavorite(id)}
          className="absolute top-3 right-3 p-2 rounded-full bg-white/80 backdrop-blur-sm transition-all duration-300 hover:bg-white"
        >
          <Heart
            className={`w-4 h-4 transition-colors ${
              isFavorite ? "fill-red-500 text-red-500" : "text-muted-foreground"
            }`}
          />
        </button>

        {/* Category Badge */}
        <Badge
          variant={category === "electric" ? "default" : "secondary"}
          className={`absolute top-3 left-3 ${
            category === "electric" ? "bg-gradient-electric" : ""
          }`}
        >
          {category === "electric" ? "⚡ Electric" : category}
        </Badge>

        {/* Availability Status */}
        {!available && (
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center">
            <Badge variant="destructive">Not Available</Badge>
          </div>
        )}
      </div>

      {/* Vehicle Info */}
      <div className="space-y-3">
        <div className="flex items-start justify-between">
          <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
            {name}
          </h3>
          <div className="flex items-center space-x-1">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium">{rating}</span>
          </div>
        </div>

        {/* Vehicle Details */}
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Fuel className="w-4 h-4" />
              <span>{fuelType}</span>
            </div>
            <span>{transmission}</span>
          </div>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between pt-2">
          <div>
            <span className="text-2xl font-bold text-primary">${pricePerDay}</span>
            <span className="text-sm text-muted-foreground">/day</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-2 pt-3">
          <Button
            variant="outline"
            size="sm"
            onClick={() => onViewDetails(id)}
            className="flex-1"
          >
            View Details
          </Button>
          <Button
            variant={category === "electric" ? "electric" : "premium"}
            size="sm"
            onClick={() => onRentNow(id)}
            disabled={!available}
            className="flex-1"
          >
            <Calendar className="w-4 h-4 mr-1" />
            Rent Now
          </Button>
        </div>
      </div>
    </div>
  );
}
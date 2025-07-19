import { useState } from "react";
import { Link } from "react-router-dom";
import { VehicleCard } from "@/components/VehicleCard";
import { Button } from "@/components/ui/button";
import teslaImage from "@/assets/tesla-model3.jpg";
import bmwImage from "@/assets/bmw-sedan.jpg";
import bikeImage from "@/assets/sport-bike.jpg";

const trendingVehicles = [
  {
    id: "1",
    name: "Tesla Model 3",
    image: teslaImage,
    pricePerDay: 89,
    rating: 4.9,
    category: "electric",
    fuelType: "Electric",
    transmission: "Auto",
    available: true,
  },
  {
    id: "2",
    name: "BMW 5 Series",
    image: bmwImage,
    pricePerDay: 75,
    rating: 4.8,
    category: "luxury",
    fuelType: "Petrol",
    transmission: "Auto",
    available: true,
  },
  {
    id: "3",
    name: "Sport Motorcycle",
    image: bikeImage,
    pricePerDay: 45,
    rating: 4.7,
    category: "bike",
    fuelType: "Petrol",
    transmission: "Manual",
    available: true,
  },
];

export function TrendingVehicles() {
  const [favorites, setFavorites] = useState<string[]>([]);

  const handleRentNow = (id: string) => {
    console.log("Rent vehicle:", id);
    // TODO: Navigate to booking page
  };

  const handleViewDetails = (id: string) => {
    console.log("View details:", id);
    // TODO: Navigate to vehicle details page
  };

  const handleToggleFavorite = (id: string) => {
    setFavorites(prev => 
      prev.includes(id) 
        ? prev.filter(fav => fav !== id)
        : [...prev, id]
    );
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Trending
            <span className="text-primary"> Vehicles</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our most popular vehicles chosen by thousands of satisfied customers.
          </p>
        </div>

        {/* Vehicles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trendingVehicles.map((vehicle) => (
            <VehicleCard
              key={vehicle.id}
              {...vehicle}
              isFavorite={favorites.includes(vehicle.id)}
              onRentNow={handleRentNow}
              onViewDetails={handleViewDetails}
              onToggleFavorite={handleToggleFavorite}
            />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link to="/vehicles">
            <Button variant="premium" size="lg" className="px-8 py-4 text-lg rounded-xl">
              View All Vehicles
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
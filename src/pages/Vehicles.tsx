import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { VehicleCard } from "@/components/VehicleCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Search, Filter } from "lucide-react";

// Mock data for all vehicles
const allVehicles = [
  {
    id: "1",
    name: "Tesla Model 3",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJcdk4fJGId8OzC5CPn44ukPkoiWJTMFnOEg&s",
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
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsckcl39aJ8g1hBl6c1XSHtRqa_lF3kph9Rg&s",
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
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFQ23Xt8COZqD4zjEOQURn8P2Y6BCw-V-feQ&s",
    pricePerDay: 45,
    rating: 4.7,
    category: "bike",
    fuelType: "Petrol",
    transmission: "Manual",
    available: true,
  },
  {
    id: "4",
    name: "Mercedes C-Class",
    image: "https://stimg.cardekho.com/images/carexteriorimages/930x620/Mercedes-Benz/C-Class/10858/Mercedes-Benz-C-Class-C-200/1720160050225/front-left-side-47.jpg",
    pricePerDay: 85,
    rating: 4.8,
    category: "luxury",
    fuelType: "Petrol",
    transmission: "Auto",
    available: true,
  },
  {
    id: "5",
    name: "Audi Q7 SUV",
    image: "https://hips.hearstapps.com/hmg-prod/images/2025-audi-q7-102-66edd2912544c.jpg?crop=0.616xw:0.461xh;0.206xw,0.404xh&resize=1200:*",
    pricePerDay: 95,
    rating: 4.9,
    category: "suv",
    fuelType: "Petrol",
    transmission: "Auto",
    available: true,
  },
  {
    id: "6",
    name: "Tesla Model Y",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8sSqnKuUnzXVoPMIR0rueNJmml7wI31HSQw&s",
    pricePerDay: 99,
    rating: 4.9,
    category: "electric",
    fuelType: "Electric",
    transmission: "Auto",
    available: true,
  },
  {
    id: "7",
    name: "Harley Davidson",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ3W8hjbAdyt7Rkiz15yh69UQwYr3oz9FYUw&s",
    pricePerDay: 65,
    rating: 4.6,
    category: "bike",
    fuelType: "Petrol",
    transmission: "Manual",
    available: false,
  },
  {
    id: "8",
    name: "Range Rover Sport",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfLYw9pP4IM-4wUMEfhhIOygZVtOnjlX6cOg&s",
    pricePerDay: 120,
    rating: 4.8,
    category: "suv",
    fuelType: "Petrol",
    transmission: "Auto",
    available: true,
  },
  {
    id: "9",
    name: "Porsche 911",
    image: "https://www.topgear.com/sites/default/files/cars-car/image/2024/02/pcgb20_0589_fine.jpg",
    pricePerDay: 150,
    rating: 4.9,
    category: "sports",
    fuelType: "Petrol",
    transmission: "Manual",
    available: true,
  },
];

const Vehicles = () => {
  const [favorites, setFavorites] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [priceRange, setPriceRange] = useState([0, 200]);
  const [availableOnly, setAvailableOnly] = useState(false);

  // Filter vehicles based on search and filters
  const filteredVehicles = allVehicles.filter(vehicle => {
    const matchesSearch = vehicle.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || vehicle.category === selectedCategory;
    const matchesPrice = vehicle.pricePerDay >= priceRange[0] && vehicle.pricePerDay <= priceRange[1];
    const matchesAvailability = !availableOnly || vehicle.available;
    
    return matchesSearch && matchesCategory && matchesPrice && matchesAvailability;
  });

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
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-20 pb-12">
        <div className="container mx-auto px-4">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our <span className="text-primary">Vehicle Fleet</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Browse our extensive collection of premium vehicles. From luxury cars to electric vehicles and motorcycles.
            </p>
          </div>

          {/* Search and Filters */}
          <div className="bg-white rounded-2xl shadow-card p-6 mb-8">
            <div className="grid md:grid-cols-4 gap-6">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                <Input
                  placeholder="Search vehicles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>

              {/* Category Filter */}
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger>
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="luxury">Luxury Cars</SelectItem>
                  <SelectItem value="electric">Electric</SelectItem>
                  <SelectItem value="bike">Motorcycles</SelectItem>
                  <SelectItem value="suv">SUVs</SelectItem>
                  <SelectItem value="sports">Sports Cars</SelectItem>
                </SelectContent>
              </Select>

              {/* Price Range */}
              <div className="space-y-2">
                <label className="text-sm font-medium">Price Range: ${priceRange[0]} - ${priceRange[1]}</label>
                <Slider
                  value={priceRange}
                  onValueChange={setPriceRange}
                  max={200}
                  min={0}
                  step={10}
                  className="w-full"
                />
              </div>

              {/* Available Only Toggle */}
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="available"
                  checked={availableOnly}
                  onChange={(e) => setAvailableOnly(e.target.checked)}
                  className="rounded"
                />
                <label htmlFor="available" className="text-sm font-medium">
                  Available only
                </label>
              </div>
            </div>
          </div>

          {/* Results Count */}
          <div className="flex items-center justify-between mb-6">
            <p className="text-muted-foreground">
              {filteredVehicles.length} vehicles found
            </p>
            <Button variant="outline" size="sm">
              <Filter className="w-4 h-4 mr-2" />
              More Filters
            </Button>
          </div>

          {/* Vehicles Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredVehicles.map((vehicle) => (
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

          {/* No Results */}
          {filteredVehicles.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-2xl font-semibold text-foreground mb-4">No vehicles found</h3>
              <p className="text-muted-foreground mb-6">
                Try adjusting your search criteria or browse all available vehicles.
              </p>
              <Button
                variant="premium"
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("all");
                  setPriceRange([0, 200]);
                  setAvailableOnly(false);
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Vehicles;
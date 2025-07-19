import { Car, Bike, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const categories = [
  {
    id: "cars",
    title: "Luxury Cars",
    description: "Premium sedans, SUVs, and sports cars for every occasion",
    icon: Car,
    count: "200+",
    color: "primary",
  },
  {
    id: "bikes",
    title: "Motorcycles",
    description: "Sport bikes, cruisers, and touring motorcycles",
    icon: Bike,
    count: "150+",
    color: "secondary",
  },
  {
    id: "electric",
    title: "Electric Vehicles",
    description: "Eco-friendly electric cars and e-bikes for sustainable travel",
    icon: Zap,
    count: "100+",
    color: "electric",
  },
];

export function CategoriesSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Choose Your
            <span className="text-primary"> Category</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From luxury sedans to electric vehicles, find the perfect ride for every journey and occasion.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <div key={category.id} className="category-card group cursor-pointer">
                {/* Icon */}
                <div className={`mx-auto mb-6 w-20 h-20 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${
                  category.color === "electric" 
                    ? "bg-gradient-electric" 
                    : category.color === "primary" 
                    ? "bg-gradient-primary" 
                    : "bg-secondary"
                }`}>
                  <Icon className={`w-10 h-10 ${
                    category.color === "electric" || category.color === "primary" 
                      ? "text-white" 
                      : "text-primary"
                  }`} />
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {category.description}
                    </p>
                  </div>

                  {/* Count Badge */}
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary font-semibold">
                    {category.count} Available
                  </div>

                  {/* CTA Button */}
                  <Button
                    variant={category.color === "electric" ? "electric" : "premium"}
                    className="w-full mt-6 group-hover:shadow-premium transition-all duration-300"
                  >
                    Explore {category.title}
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
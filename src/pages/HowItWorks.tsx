import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Car, Search, Calendar, Key } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Search,
      title: "Browse & Select",
      description: "Search through our premium fleet of vehicles. Filter by category, price, and availability to find your perfect ride.",
    },
    {
      icon: Calendar,
      title: "Choose Dates",
      description: "Select your pickup and return dates. Our flexible booking system allows for hourly, daily, or weekly rentals.",
    },
    {
      icon: Key,
      title: "Book & Drive",
      description: "Complete your booking with our secure payment system. Pick up your vehicle and enjoy the ride!",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-20 pb-12">
        <div className="container mx-auto px-4">
          {/* Page Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              How <span className="text-primary">It Works</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Renting your perfect vehicle is simple and straightforward. Follow these easy steps to get on the road.
            </p>
          </div>

          {/* Steps */}
          <div className="grid md:grid-cols-3 gap-12 mb-16">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="text-center space-y-6">
                  <div className="mx-auto w-20 h-20 bg-gradient-primary rounded-2xl flex items-center justify-center">
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-foreground">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-hero rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied customers who have chosen AutoVista for their vehicle rental needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary">
                <Car className="w-5 h-5 mr-2" />
                Browse Vehicles
              </Button>
              <Button variant="premium" size="lg" className="bg-white text-primary hover:bg-white/90">
                Start Booking
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HowItWorks;
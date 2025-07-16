import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Crown, Sparkles, Star, Zap } from "lucide-react";

interface Package {
  name: string;
  price: string;
  features: string[];
  color: string; // must match Tailwind color class suffix
}

const samplePackages: Package[] = [
  {
    name: "Starter",
    price: "$29/mo",
    features: ["Up to 5 projects", "Basic support", "10GB storage", "Email notifications"],
    color: "pregablue",
  },
  {
    name: "Professional",
    price: "$59/mo",
    features: ["Unlimited projects", "Priority support", "100GB storage", "Advanced analytics", "Team collaboration"],
    color: "pregapurple",
  },
  {
    name: "Enterprise",
    price: "$129/mo",
    features: ["Everything in Pro", "24/7 phone support", "1TB storage", "Custom integrations", "Dedicated manager", "SLA guarantee"],
    color: "pregagold",
  },
  {
    name: "Ultimate",
    price: "$199/mo",
    features: ["White-label solution", "API access", "Custom development", "Unlimited everything", "Priority queue", "Personal training"],
    color: "pregapink",
  },
];

const getPackageIcon = (index: number) => {
  const icons = [Zap, Star, Crown, Sparkles];
  return icons[index % icons.length];
};

export default function HomePackages({
  packages = samplePackages,
}: {
  packages?: Package[];
}) {
  return (
    <section className="relative py-20 px-4 sm:px-8 bg-gradient-to-br from-slate-50 via-purple-50/30 to-blue-50/20">
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <div className="absolute left-1/4 top-0 w-1/2 h-1/3 bg-pregapurple/10 rounded-full blur-3xl" />
        <div className="absolute right-0 bottom-0 w-1/3 h-1/3 bg-pregapink/10 rounded-full blur-2xl" />
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full border border-purple-200 mb-6">
            <Sparkles className="w-4 h-4 text-pregapurple" />
            <span className="text-sm font-medium text-pregapurple">
              Choose Your Plan
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pregapurple via-pregablue to-pregapink bg-clip-text text-transparent mb-4 font-sans">
            Our Packages
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Select the perfect plan that scales with your business needs.
          </p>
        </div>

        {/* Package Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {packages.map((pkg, index) => {
            const Icon = getPackageIcon(index);
            const isPopular = index === 1;

            return (
              <Card
                key={pkg.name}
                className={`relative flex flex-col rounded-3xl shadow-xl hover:shadow-2xl transition-all border-2 ${
                  isPopular
                    ? "border-pregapurple ring-2 ring-pregapurple/20"
                    : "border-gray-200"
                }`}
              >
                {/* Popular Tag */}
                {isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                    <div className="bg-white text-black px-4 py-1 rounded-full text-xs font-semibold shadow-md border border-white/30">
                      Most Popular
                    </div>
                  </div>
                )}

                <CardHeader className="p-8 pb-4 flex items-center gap-4">
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center shadow-md bg-${pkg.color}/10`}
                  >
                    <Icon className={`w-6 h-6 text-${pkg.color}`} />
                  </div>
                  <CardTitle
                    className={`text-2xl font-bold text-${pkg.color}`}
                  >
                    {pkg.name}
                  </CardTitle>
                </CardHeader>

                <CardContent className="px-8 pb-8 flex flex-col h-full">
                  <div className="mb-6">
                    <div className="flex items-baseline gap-1 mb-2">
                      <span className={`text-5xl font-black text-${pkg.color}`}>
                        {pkg.price.split("/")[0]}
                      </span>
                      {pkg.price.includes("/") && (
                        <span className="text-gray-500 text-lg font-medium">
                          /{pkg.price.split("/")[1]}
                        </span>
                      )}
                    </div>
                    <div className="text-sm text-gray-500">
                      Billed monthly, cancel anytime
                    </div>
                  </div>

                  <ul className="text-sm text-gray-700 mb-8 space-y-3 flex-grow">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-start">
                        <div
                          className={`w-5 h-5 flex items-center justify-center rounded-full bg-${pkg.color}/10 mr-3 mt-0.5`}
                        >
                          <span className={`text-xs font-bold text-${pkg.color}`}>✓</span>
                        </div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button
                    asChild
                    className={`w-full font-bold px-8 py-6 rounded-2xl text-black bg-${pkg.color} hover:scale-105 active:scale-95 transition`}
                  >
                    <a href="#contact">Get Started</a>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-4">
            Need a custom solution? We've got you covered.
          </p>
          <Button
            variant="outline"
            className="bg-white/70 backdrop-blur-sm border-2 border-pregapurple text-pregapurple hover:bg-pregapurple/10 hover:border-pregapurple px-8 py-6 rounded-2xl font-semibold"
          >
            Contact Sales
          </Button>
        </div>
      </div>
    </section>
  );
}

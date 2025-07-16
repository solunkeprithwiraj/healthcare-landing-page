import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

interface Service {
  title: string;
  desc: string;
  icon: React.ReactNode;
}

export default function HomeServices({ services }: { services: Service[] }) {
  return (
    <section className="py-16 px-4 sm:px-8 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-pregapurple mb-10">
        Our Services
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {services.map((service) => (
          <Card
            key={service.title}
            className="card-glass items-center text-center hover:scale-105 transition-transform"
          >
            <CardTitle className="text-pregapurple flex justify-center item-center flex-col gap-4">
              <span className="flex justify-center">{service.icon}</span>
              <span className="text-xl text-bold"> {service.title}</span>
            </CardTitle>

            <CardContent>
              <p className="text-zinc-800 font-medium">{service.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

import { Button } from "@/components/ui/button";

export default function HomeHero() {
  return (
    <section className="relative flex flex-col items-center justify-center text-center py-16 px-4 sm:px-8 bg-gradient-to-b from-pregapink/40 to-white">
      <div className="absolute top-0 left-0 w-full h-32 bg-pregapurple rounded-b-full blur-2xl opacity-20 -z-10" />
      <h1 className="text-4xl sm:text-5xl font-bold text-pregapurple mb-4">
        Step Into Motherhood with Confidence and Care!
      </h1>
      <p className="text-lg sm:text-xl text-pregapurple/80 mb-6 max-w-2xl mx-auto">
        PregaCoach supports and guides you through pregnancy, postpartum, and
        parenthood. Book online consultations, access resources, and thrive with
        expert care.
      </p>
      <Button
        asChild
        size="lg"
        className="rounded-full px-8 py-3 font-semibold shadow-lg"
      >
        <a href="#contact">Book a Consultation</a>
      </Button>
    </section>
  );
}

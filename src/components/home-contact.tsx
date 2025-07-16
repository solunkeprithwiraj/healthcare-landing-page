import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function HomeContact() {
  return (
    <section id="contact" className="py-16 px-4 sm:px-8 bg-pregapurple/10">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-pregapurple mb-4">
          Ready to Get Started?
        </h2>
        <p className="text-pregapurple/80 mb-6">
          Have questions or need expert advice? Book an appointment for
          personalized guidance and support. Your journey to parenthood starts
          here!
        </p>
        <form className="flex flex-col gap-4">
          <Input type="text" placeholder="Your Name" required />
          <Input type="email" placeholder="Your Email" required />
          <Textarea placeholder="How can we help you?" rows={4} required />
          <Button
            type="submit"
            className="rounded-full px-8 py-3 font-semibold shadow-lg"
          >
            Book Now
          </Button>
        </form>
      </div>
    </section>
  );
} 
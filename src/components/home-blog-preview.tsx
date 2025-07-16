import { Button } from "@/components/ui/button";

export default function HomeBlogPreview() {
  return (
    <section className="py-16 px-4 sm:px-8 max-w-5xl mx-auto text-center">
      <h2 className="text-3xl font-bold text-pregapurple mb-8">
        Informative Blogs for New Mothers
      </h2>
      <p className="text-pregapurple/80 mb-6">
        Guidance on newborn care, postpartum recovery, and emotional
        well-being. Evidence-based advice and community support for every new
        mom.
      </p>
      <Button
        asChild
        className="rounded-full px-8 py-3 font-semibold shadow-lg"
      >
        <a href="#">Read More Blogs</a>
      </Button>
    </section>
  );
} 
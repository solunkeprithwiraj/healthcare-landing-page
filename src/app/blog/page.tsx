import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Image from "next/image";

const posts = [
  {
    title: "5 Tips for a Healthy Pregnancy",
    excerpt: "Discover essential tips to ensure a healthy and happy pregnancy journey.",
    date: "2024-06-01",
  },
  {
    title: "Postpartum Recovery: What to Expect",
    excerpt: "Learn about the postpartum period and how to take care of yourself after childbirth.",
    date: "2024-05-20",
  },
  {
    title: "Nutrition for New Moms",
    excerpt: "Explore the best nutrition practices for new mothers and their babies.",
    date: "2024-05-10",
  },
];

export default function BlogPage() {
  return (
    <div className="bg-pregapink/10 min-h-screen w-full">
      <section className="relative flex flex-col items-center justify-center text-center py-16 px-4 sm:px-8 bg-gradient-to-b from-pregapink/40 to-white">
        <h1 className="text-4xl sm:text-5xl font-bold text-pregapurple mb-4">Our Blog</h1>
        <p className="text-lg sm:text-xl text-pregapurple/80 mb-6 max-w-2xl mx-auto">Insights, tips, and stories to guide you through every stage of motherhood.</p>
      </section>
      <section className="py-16 px-4 sm:px-8 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Card key={post.title} className="card-glass hover:scale-105 transition-transform">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-pregapurple">{post.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-zinc-800 mb-2 font-medium">{post.excerpt}</p>
                <p className="text-zinc-600 text-xs">{new Date(post.date).toLocaleDateString()}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
} 
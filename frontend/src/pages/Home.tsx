import { Button } from "@/components/ui/button";
import { PostList } from "../features/PostList";
import { ArrowRight } from "lucide-react";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <section className="py-20 px-4 text-center bg-gradient-to-b from-muted/50 to-background">
        <div className="max-w-4xl mx-auto">
          <h1 className="inter-bold text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Welcome to My Blog
          </h1>
          <p className="inter-regular text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Thoughts on web development, design, and the intersection of
            technology and creativity.
          </p>
          <Button asChild size="lg" className="inter-semibold">
            <a href="#featured">
              Explore Posts <ArrowRight />
            </a>
          </Button>
        </div>
      </section>

      <section id="featured" className="py-16 px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Featured Posts</h2>
          <PostList />
        </div>
      </section>
    </div>
  );
};

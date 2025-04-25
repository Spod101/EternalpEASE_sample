import { Button } from "@/components/ui/button";

export const WelcomeSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Welcome to</h2>
        <h3 className="text-4xl font-bold text-primary mb-6">
          INFINITY MEMORIAL CHAPELS AND FUNERAL SERVICES
        </h3>
        <p className="max-w-2xl mx-auto text-gray-600">
          Honoring Memories, Supporting Families Since 1996, we&apos;ve provided compassionate and graceful services, ensuring every farewell is meaningful and dignified.
        </p>
        <Button className="mt-8">Learn More</Button>
      </div>
    </section>
  );
};
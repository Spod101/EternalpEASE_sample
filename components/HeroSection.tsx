import { Button } from "@/components/ui/button";

export const HeroSection = () => {
return (
<section className="pt-20 min-h-screen flex items-center bg-gradient-to-b from-blue-50 to-white">
    <div className="container mx-auto px-4">
    <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-secondary-foreground">
        Compassionate Funeral Services for Your Loved Ones
        </h1>
        <p className="text-lg mb-8 text-gray-800">
        Honoring Lives, Cherishing Memories
        </p>
        <div className="flex gap-4 justify-center">
        <Button size="lg">Learn More</Button>
        <Button size="lg" variant="outline">Book Now</Button>
        </div>
    </div>
    </div>
</section>
);
};

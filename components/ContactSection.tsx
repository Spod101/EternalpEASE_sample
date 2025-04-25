import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export const ContactSection = () => {
    return (
        <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto bg-white rounded-lg p-8">
            <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
            <form className="space-y-6">
                <div>
                <Input placeholder="Your Name" />
                </div>
                <div>
                <Input type="email" placeholder="Your Email" />
                </div>
                <div>
                <Textarea placeholder="Your Message" className="min-h-[120px]" />
                </div>
                <Button className="w-full">Send Message</Button>
            </form>
            </div>
        </div>
        </section>
    );
};

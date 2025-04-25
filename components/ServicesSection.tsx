import { Bot, Bell, PaintBucket } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    title: "AI-Powered Inquiry",
    description: "Get instant answers to your questions, anytime.",
    icon: Bot
  },
  {
    title: "AI Theme Recommender",
    description: "Personalized ceremony themes based on your preferences.",
    icon: PaintBucket
  },
  {
    title: "Automated Reminder",
    description: "Stay informed with timely updates and reminders.",
    icon: Bell
  }
];

export const ServicesSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Innovative Services for a Seamless Farewell
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.title}>
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
import { Check } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const packages = {
    A: [
        "Casket",
        "Embalming",
        "Ordinary Flowers",
        "Tombstone",
        "Interment"
    ],
    B: [
        "Casket",
        "Embalming",
        "Ordinary Flowers",
        "Tombstone",
        "Interment",
        "Tarpaulin"
    ],
    C: [
        "Casket",
        "Embalming",
        "Ordinary Flowers",
        "Tombstone",
        "Interment"
    ],
    D: [
        "Casket",
        "Embalming",
        "3 Sets of Flowers",
        "Tombstone",
        "Interment",
        "Tarpaulin",
        "Picture Frame 8x10"
    ],
    E: [
        "Casket",
        "Embalming",
        "4 Sets of Flowers",
        "Tombstone",
        "Interment",
        "Tarpaulin",
        "Picture Frame 16x20"
    ]
};


export const PackagesSection = () => {
    return (
    <section className="py-20">
        <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">PACKAGES</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(packages).map(([key, services]) => (
            <Card key={key} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                <CardTitle className="text-2xl text-primary">Package {key}</CardTitle>
                </CardHeader>
                <CardContent>
                <ul className="space-y-3">
                    {services.map((service) => (
                    <li key={service} className="flex items-center gap-2">
                        <Check className="w-5 h-5 text-green-500" />
                        <span>{service}</span>
                    </li>
                    ))}
                </ul>
                </CardContent>
            </Card>
            ))}
        </div>
        </div>
    </section>
    );
};

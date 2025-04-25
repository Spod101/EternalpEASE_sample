'use client';

import React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious,} from "@/components/ui/carousel";
import { motion } from "framer-motion";
import Image from "next/image";

const packages = [
    {
        name: "Package A",
        price: "₱19,000",
        description: "A dignified farewell with essential services.",
        image: "/images/package-a.jpg",
    },
    {
        name: "Package B",
        price: "₱29,000",
        description: "Enhanced personalization for cherished memories.",
        image: "/images/package-b.jpg",
    },
    {
        name: "Package C",
        price: "₱39,000",
        description: "Our most recommended grand farewell package.",
        image: "/images/package-c.jpg",
        recommended: true,
    },
    {
        name: "Package D",
        price: "₱49,000",
        description: "Premium amenities and personalized features.",
        image: "/images/package-d.jpg",
    },
    {
        name: "Package E",
        price: "₱59,000",
        description: "Comprehensive services with elegant setup.",
        image: "/images/package-e.jpg",
    },
    {
        name: "Package F",
        price: "₱69,000",
        description: "Luxurious farewell with top-tier arrangements.",
        image: "/images/package-f.jpg",
    },
];

const testimonials = [
    {
        name: "Maria D.",
        feedback:
        "EternalpEASE made everything so comforting and smooth. Truly a professional and kind service.",
    },
    {
        name: "Carlos T.",
        feedback:
        "They made a difficult time more bearable. The team was compassionate and efficient.",
    },
    {
        name: "Anna R.",
        feedback:
        "Beautifully organized. Highly recommended to anyone who wants a heartfelt service.",
    },
];

export default function PackagesPage() {
    return (
        <div>
        <Header />
        <main className="bg-white text-gray-800">
            {/* Packages Section */}
            <section className="py-20">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center text-primary mb-12">
                Our Funeral Packages
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {packages.map((pkg, idx) => (
                    <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className={`rounded-2xl shadow-md hover:shadow-lg transition-shadow p-6 relative border ${
                        pkg.recommended ? "border-blue-500" : "border-gray-200"
                    }`}
                    >
                    {pkg.recommended && (
                        <Badge className="absolute top-4 right-4">Most Recommended</Badge>
                    )}
                    <Image
                        src={pkg.image}
                        alt={pkg.name}
                        width={400}
                        height={250}
                        className="rounded-lg w-full h-48 object-cover mb-4"
                    />
                    <h3 className="text-xl font-semibold text-primary mb-2">
                        {pkg.name}
                    </h3>
                    <p className="text-lg font-medium text-gray-600 mb-2">
                        {pkg.price}
                    </p>
                    <p className="text-sm text-gray-500 mb-4">{pkg.description}</p>
                    <Button className="w-full">Select Package</Button>
                    </motion.div>
                ))}
                </div>
            </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-20 bg-blue-50">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-4xl font-bold text-primary mb-8">
                What Our Clients Say
                </h2>
                <Carousel className="w-full max-w-screen-md mx-auto">
                <CarouselContent>
                    {testimonials.map((testimonial, index) => (
                    <CarouselItem key={index}>
                        <div className="p-4">
                        <Card className="shadow-lg">
                            <CardContent className="p-6">
                            <p className="text-lg text-gray-600 mb-4">
                                {testimonial.feedback}
                            </p>
                            <h3 className="text-xl font-bold text-primary">
                                - {testimonial.name}
                            </h3>
                            </CardContent>
                        </Card>
                        </div>
                    </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
                </Carousel>
            </div>
            </section>
        </main>
        <Footer />
        </div>
    );
}

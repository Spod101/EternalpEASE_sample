'use client'

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export default function About(){
    return (
        <div className="min-h-screen">
            <Header />
            <main className="bg-gradient-to-b from-blue-50 to-white">
            <section className="py-20">
                <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center px-4">
                <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
                    <Image src="/images/about-building.jpg" alt="EternalpEASE Building" width={600} height={400} className="rounded-2xl shadow-lg object-cover" />
                </motion.div>
                <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
                    <h2 className="text-4xl font-bold mb-6 text-primary">About Us</h2>
                    <p className="text-gray-600 text-lg mb-8">
                    EternalpEASE was founded with a vision to provide compassionate and dignified funeral services.
                    Over the years, we&apos;ve assisted families in honoring their loved ones with meaningful memorials and respectful arrangements.
                    </p>
                    <Button>Contact Us</Button>
                </motion.div>
                </div>
            </section>
            <section className="py-20 bg-blue-50">
                <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center px-4">
                <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="order-2 md:order-1">
                    <h2 className="text-4xl font-bold mb-6 text-primary">Mission & Vision</h2>
                    <p className="text-gray-600 text-lg mb-8">
                    Our mission is to offer the best chapel and funeral facilities while upholding the highest
                    business standards, ethics, and fairness. We aim to serve our clients, employees, shareholders,
                    and the community with integrity and care.
                    </p>
                    <Button variant="outline">Learn More</Button>
                </motion.div>
                <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="order-1 md:order-2">
                    <Image src="/images/chapel-interior.jpg" alt="Chapel Interior" width={600} height={400} className="rounded-2xl shadow-lg object-cover" />
                </motion.div>
                </div>
            </section>
            </main>
            <Footer />
        </div>
    )
}
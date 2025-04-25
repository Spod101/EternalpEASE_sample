'use client';

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FAQSection } from "@/components/FAQSection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export default function ContactPage() {
    return (
        <>
        <Header />

        <section className="py-16 bg-gradient-to-b from-blue-100 to-white text-center">
            <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="container mx-auto px-4"
            >
            <h1 className="text-5xl font-bold text-primary mb-4">Contact Us</h1>
            <p className="text-lg text-gray-600">
                Reach out to us for any inquiries, assistance, or support.
            </p>
            </motion.div>
        </section>

        <section className="py-20 bg-blue-50">
            <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-start"
            >
            {/* Contact Information */}
            <motion.div
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white p-8 rounded-lg shadow-lg"
            >
                <h2 className="text-3xl font-bold text-primary mb-6">
                Contact Information
                </h2>
                <p className="text-lg font-semibold mb-4">
                Phone: <span className="text-blue-600">+1012 3456 789</span>
                </p>
                <p className="text-lg font-semibold mb-4">
                Email:{" "}
                <a
                    href="mailto:demo@gmail.com"
                    className="text-blue-600 underline hover:text-blue-800"
                >
                    demo@gmail.com
                </a>
                </p>
                <p className="text-lg font-semibold">
                Address: Luna Street, Ugac Highway, Tuguegarao City, Cagayan
                </p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white p-8 rounded-lg shadow-lg"
            >
                <h2 className="text-3xl font-bold text-primary mb-6">Get in Touch</h2>
                <form action="#" method="POST" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input
                    type="text"
                    name="first-name"
                    placeholder="First Name"
                    required
                    className="p-4 border rounded-lg"
                    />
                    <Input
                    type="text"
                    name="last-name"
                    placeholder="Last Name"
                    required
                    className="p-4 border rounded-lg"
                    />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                    className="p-4 border rounded-lg"
                    />
                    <Input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    required
                    className="p-4 border rounded-lg"
                    />
                </div>
                <Textarea
                    name="message"
                    placeholder="Your Message"
                    required
                    className="p-4 border rounded-lg w-full"
                    rows={4}
                />
                <Button
                    type="submit"
                    className="w-full py-3 bg-blue-600 text-white hover:bg-blue-700"
                >
                    Send Message
                </Button>
                </form>
            </motion.div>
            </motion.div>
        </section>

        <section className="py-20">
            <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="container mx-auto px-4"
            >
            <FAQSection />
            </motion.div>
        </section>

        <section className="w-full h-96 rounded-xl overflow-hidden shadow-lg max-w-5xl mx-auto my-16">
            <iframe
            src="https://www.google.com/maps?q=Luna+Street,+Ugac+Highway,+Tuguegarao+City,+Cagayan&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            ></iframe>
        </section>

        <Footer />
        </>
    );
}

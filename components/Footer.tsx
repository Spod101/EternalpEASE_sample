import { Facebook, Twitter, Instagram } from 'lucide-react';
import Link from 'next/link';

export const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8">
            <div>
                <h3 className="text-xl font-bold mb-4">EternalpEASE</h3>
                <p className="text-gray-400">Compassionate funeral services for your loved ones.</p>
            </div>
            <div>
                <h4 className="font-bold mb-4">Quick Links</h4>
                <ul className="space-y-2">
                <li><Link href="/" className="text-gray-400 hover:text-white">About</Link></li>
                <li><Link href="/" className="text-gray-400 hover:text-white">Packages</Link></li>
                <li><Link href="/" className="text-gray-400 hover:text-white">Contact</Link></li>
                </ul>
            </div>
            <div>
                <h4 className="font-bold mb-4">Contact</h4>
                <ul className="space-y-2 text-gray-400">
                <li>123 Memorial Lane</li>
                <li>Tuguegarao City</li>
                <li>Phone: 09970731563</li>
                <li>Email: info@eternalpeace.com</li>
                </ul>
            </div>
            <div>
                <h4 className="font-bold mb-4">Follow Us</h4>
                <div className="flex gap-4">
                <Facebook className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer" />
                <Twitter className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer" />
                <Instagram className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer" />
                </div>
            </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 EternalpEASE. All rights reserved.</p>
            </div>
        </div>
        </footer>
    );
};
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const Header = () => {
    return (
        <header className="fixed w-full bg-white/80 backdrop-blur-sm z-50">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                <Link href="/" className="text-2xl font-bold text-primary">
                    EternalpEASE
                </Link>
                <nav className="hidden md:flex gap-6 items-center">
                    <Link href="/about" className="hover:text-primary transition-colors">About</Link>
                    <Link href="/package" className="hover:text-primary transition-colors">Packages</Link>
                    <Link href="/contact" className="hover:text-primary transition-colors">Contact</Link>
                    <Link href="/login">
                        <Button variant="outline" className="mr-2">Login</Button>
                    </Link>
                    <Button>Sign Up</Button>
                </nav>
            </div>
        </header>
    );
};

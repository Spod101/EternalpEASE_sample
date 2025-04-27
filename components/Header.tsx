import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { JSX, SVGProps } from "react";

export const Header = () => {
    return (
        <header className="fixed w-full bg-white/80 backdrop-blur-sm z-50">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                <Link href="/" className="text-2xl font-bold text-primary">
                    EternalpEASE
                </Link>
                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant="outline" size="icon" className="md:hidden">
                            <MenuIcon className="h-6 w-6" />
                            <span className="sr-only">Toggle navigation menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="left" className="w-64">
                        <nav className="grid gap-4 p-4">
                            <Link href="/about" className="hover:text-primary transition-colors text-lg font-medium">
                                About
                            </Link>
                            <Link href="/package" className="hover:text-primary transition-colors text-lg font-medium">
                                Packages
                            </Link>
                            <Link href="/contact" className="hover:text-primary transition-colors text-lg font-medium">
                                Contact
                            </Link>
                            <Link href="/login" className="hover:text-primary transition-colors text-lg font-medium">
                                Login
                            </Link>
                            <Button>Sign Up</Button>
                        </nav>
                    </SheetContent>
                </Sheet>
                <nav className="hidden md:flex gap-6 items-center">
                    <Link href="/about" className="hover:text-primary transition-colors">
                        About
                    </Link>
                    <Link href="/package" className="hover:text-primary transition-colors">
                        Packages
                    </Link>
                    <Link href="/contact" className="hover:text-primary transition-colors">
                        Contact
                    </Link>
                    <Link href="/login">
                        <Button variant="outline" className="mr-2">Login</Button>
                    </Link>
                    <Link href="/chatbot">
                        <Button variant="outline">AI Chatbot</Button>
                    </Link>
                </nav>
            </div>
        </header>
    );
};

function MenuIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <line x1="4" y1="6" x2="20" y2="6" />
            <line x1="4" y1="12" x2="20" y2="12" />
            <line x1="4" y1="18" x2="20" y2="18" />
        </svg>
    );
}


import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { HelpCircle, CheckCircle, CreditCard, CalendarClock } from "lucide-react"

export function FAQSection() {
    return (
        <section className="bg-blue-50 py-16">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-10 text-primary">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto space-y-2">
            <AccordionItem value="item-1">
                <AccordionTrigger>
                <HelpCircle className="mr-2 h-5 w-5 text-blue-600" />
                What services does EternalpEASE offer?
                </AccordionTrigger>
                <AccordionContent>
                EternalpEASE offers complete funeral planning services including chapel arrangements, theme personalization, viewing setups, and more.
                </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
                <AccordionTrigger>
                <CalendarClock className="mr-2 h-5 w-5 text-blue-600" />
                How can I book a service?
                </AccordionTrigger>
                <AccordionContent>
                You can book through our website, contact us directly via phone or email, or visit our physical office in Tuguegarao City.
                </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
                <AccordionTrigger>
                <CreditCard className="mr-2 h-5 w-5 text-blue-600" />
                What payment options are available?
                </AccordionTrigger>
                <AccordionContent>
                We accept payments through cash, bank transfers, and various digital wallets like GCash and PayMaya.
                </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
                <AccordionTrigger>
                <CheckCircle className="mr-2 h-5 w-5 text-blue-600" />
                Can I get help with customizing packages?
                </AccordionTrigger>
                <AccordionContent>
                Yes! Our team is happy to assist in customizing your funeral package based on your family’s needs and preferences.
                </AccordionContent>
            </AccordionItem>
            </Accordion>
        </div>
        </section>
    )
}
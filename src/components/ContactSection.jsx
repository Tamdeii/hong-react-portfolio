import { cn } from "../lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import {
    Mail,
    MapPin,
    Send,
    PhoneCallIcon,
    Linkedin
} from "lucide-react";

export const ContactSection = () => {
    const { toast } = useToast(); // <-- lowercase 'toast'
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        setTimeout(() => {
            toast({
                title: "Message Sent",
                description:
                    "Your message has been sent successfully. I'll get back to you as soon as possible.",
            });
            setIsSubmitting(false);
        }, 2000);
    };

    return (
        <section id="contact" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">

                {/* CONTACT ME */}
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Contact <span className="text-primary">Me</span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    I'm always open to discussing new projects, or opportunities.
                </p>

                {/* CONTACT INFORMATION */}
                <div className="space-y-8">
                    {/* CONTACT INFORMATION BLOCK SECTION */}
                    <h3 className="text-2xl font-semibold mb-6">
                        Contact Information
                    </h3>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                        <div className="flex flex-row items-center gap-3">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Mail className="h-6 w-6 text-primary" />
                            </div>
                            <div className="flex flex-col">
                                <h4 className="font-medium">Email</h4>
                                <a
                                    href="mailto:nguyenhongton02@gmail.com"
                                    className="text-muted-foreground hover:text-primary transition-colors"
                                >
                                    nguyenhongton02@gmail.com
                                </a>
                            </div>
                        </div>

                        <div className="flex flex-row items-center gap-3">
                            <div className="p-3 rounded-full bg-primary/10">
                                <PhoneCallIcon className="h-6 w-6 text-primary" />
                            </div>
                            <div className="flex flex-col">
                                <h4 className="font-medium">Phone</h4>
                                <a
                                    href="tel:+13344922761"
                                    className="text-muted-foreground hover:text-primary transition-colors"
                                >
                                    +1 334-492-2761
                                </a>
                            </div>
                        </div>

                        <div className="flex flex-row items-center gap-3">
                            <div className="p-3 rounded-full bg-primary/10">
                                <MapPin className="h-6 w-6 text-primary" />
                            </div>
                            <div className="flex flex-col">
                                <h4 className="font-medium">Location</h4>
                                <a
                                    href=""
                                    className="text-muted-foreground hover:text-primary transition-colors"
                                >
                                    100 Gibbs St, Troy, AL 36081, USA
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* CONNECT WITH ME */}
                    <div className="pt-8">
                        <h4 className="font-medium mb-4">Connect With Me</h4>
                        <div className="flex space-x-4 justify-center">
                            <a
                                href="https://www.linkedin.com/in/nguyen-hong-ton/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                                className="text-primary hover:text-primary/80 transition-colors"
                            >
                                <Linkedin size={36}/>
                            </a>
                        </div>
                    </div>
                </div>

                {/* CONTACT FORM */}
                <div className="bg-card p-8 rounded-lg shadow-xs mt-8">
                    <h3 className="text-2xl font-semibold mb-6">Send me a message</h3>
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium mb-2"
                            >
                                Your FullName
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                                placeholder="your Full Name..."
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium mb-2"
                            >
                                Your Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                                placeholder="yourname@gmail.com"
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="message"
                                className="block text-sm font-medium mb-2"
                            >
                                Your Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                required
                                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                                placeholder="Hello, I'd like to talk about..."
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={cn(
                                "cosmic-button w-full flex items-center justify-center gap-2"
                            )}
                        >
                            {isSubmitting ? "Sending..." : "Send Message"}
                            <Send size={16} />
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};
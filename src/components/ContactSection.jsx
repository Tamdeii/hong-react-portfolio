import {
    Github,
    Instagram,
    Linkedin,
    LinkedinIcon,
    Mail,
    MapPin,
    Phone,
    PhoneCall,
    Send,
    SendIcon,
    Twitch,
    Twitter,
} from "lucide-react"
import { cn } from "../lib/utils"
import { useToast } from "@/hooks/use-toast";


export const ContactSection = () => {

    const {toast} = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();

        setIsSubmitting(true);

        setTimeout(() => {
            toast({
                title: "Message Sent",
                description: "Thank you for reaching out! I'll get back to you soon.",
                variant: "success",
            });
            
            setIsSubmitting(false);
        }, 1500);
    }
    return (
        <section
            id="contact"
            className="py-24 px-4 relative bg-secondary/30"
        >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                Get in <span>touch</span>
            </h2>

            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Have a project in mind or just want to say hello?
                I'm always open to discussing new opportunities, collaborations, or just a friendly chat.
                Feel free to reach out through the contact form below.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-8">
                    <h3 className="text-2xl font-semibold mb-6">
                        Contact Information
                    </h3>

                    <div className="space-y-6 justify-center">
                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Mail className="h-6 w-6 text-primary" />
                            </div>

                            <div>
                                <h4 className="font-medium">
                                    Email
                                </h4>
                                <a
                                    href="nguyenhongton02@gmail.com"
                                    className="text-muted-foreground hover:text-primary transition-colors"
                                >
                                    nguyenhongton02@gmail.com
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <PhoneCall className="h-6 w-6 text-primary" />
                            </div>

                            <div>
                                <h4 className="font-medium">
                                    Phone
                                </h4>
                                <a
                                    href="tel:+13344922761"
                                    className="text-muted-foreground hover:text-primary transition-colors"
                                >
                                    +1 (334) 492-2761
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-start space-x-4">
                        <div className="p-3 rounded-full bg-primary/10">
                            <MapPin className="h-6 w-6 text-primary" />
                        </div>

                        <div>
                            <h4 className="font-medium">
                                Location
                            </h4>
                            <a
                                className="text-muted-foreground hover:text-primary transition-colors"
                            >
                                Troy, Alabama, USA
                            </a>
                        </div>
                    </div>
                </div>

                <div>
                    <h4> Connect With Me</h4>
                    <div>
                        <a href="https://www.linkedin.com/in/nguyen-hong-ton/" target="_blank">
                            <LinkedinIcon />
                        </a>
                        <a href="https://github.com/Tamdeii" target="_blank" className="ml-4">
                            <Github />
                        </a>
                    </div>
                </div>

                <div 
                    className="bg-card p-8 rounded-lg shadow-xs" 
                    onSubmit={handleSubmit}
                >
                    <h3>Send a message</h3>

                    <form className="space-y-6">
                        <div>
                            <label
                                htmlFor="message"
                                className="block text-sm font-medium mb-2"
                            >
                                Your Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                className=""
                                placeholder="Enter your name"
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
                                className=""
                                placeholder="Enter your name"
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium mb-2"
                            >
                                Your Message
                            </label>
                            <input
                                type="text"
                                id="email"
                                name="email"
                                required
                                className=""
                                placeholder="Hello, I would like to..."
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
                            <SendIcon size={16} />
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}
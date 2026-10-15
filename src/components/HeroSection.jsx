import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
    return (
        <section
            id="hero"
            className="relative min-h-screen flex flex-col items-center justify-center px-4"
        >
            <div className="container max-w-4xl mx-auto text-center z-10">
                <div className="space-y-6">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                        <span className="opacity-0 animate-fade-in">
                            Hi, I am {" "}
                        </span>
                        <span className="text-primary opacity-0 animate-fade-in-delay-1">
                            Hong
                        </span>
                        <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
                            Ton
                        </span>
                    </h1>

                    <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">
                        M.S. in Artificial Intelligence @ Troy University (GPA 4.00)
                        <br />
                        Graduate Research Assistant building disaster-resilient
                        communication networks & full-stack web apps.
                    </p>

                    <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-in-delay-4">
                        <a href="#projects" className="cosmic-button">
                            View My Work
                        </a>
                        <a
                            href="/Hong Resume final.pdf"
                            download="Hong Resume final.pdf"
                            className="
                                px-6 py-2 rounded-full border border-primary
                                text-primary hover:bg-primary/10 transition-colors duration-300
                                inline-flex items-center justify-center"
                        >
                            Download CV
                        </a>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
                <span className="text-sm text-muted-foreground mb-2">Scroll</span>
                <ArrowDown className="h-5 w-5 text-primary" />
            </div>
        </section>
    );
}
import { BrainCircuit, Code, GraduationCap } from "lucide-react"


export const AboutSection = () => {
    return (
        <section id="about" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary">Me</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">
                            AI Researcher & Full-Stack Developer
                        </h3>
                        <p className="text-muted-foreground">
                            I'm pursuing an M.S. in Artificial Intelligence at Troy University
                            (GPA 4.00/4.00) after graduating with a B.S. in Computer Science,
                            Magna Cum Laude. As a Graduate Research Assistant, I design
                            AI-driven network simulations to evaluate communication
                            performance and smart-city resilience under disaster scenarios.
                        </p>

                        <p className="text-muted-foreground">
                            Beyond research, I build full-stack web applications with React,
                            Express.js, Spring Boot and FastAPI — and I hold certifications
                            in Google AI Essentials, AWS Generative AI and AWS Prompt
                            Engineering.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="cosmic-button">
                                Get in touch
                            </a>
                            <a href="/Hong-Ton-Resume.pdf" download="Hong-Ton-Resume.pdf" className="
                                px-6 py-2 rounded-full border border-primary 
                                text-primary hover:bg-primary/10 transition-colors duration-300
                                inline-flex items-center justify-center"
                            >
                                Download CV
                            </a>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">

                                {/* Code: Web development */}
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className="h-6 w-6 text-primary" />
                                </div>

                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">AI Research</h4>
                                    <p className="text-muted-foreground">Disaster-resilient networks, OMNeT++ simulation, seismic data analytics and published research on cascading failures.</p>
                                </div>

                            </div>
                        </div>

                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">

                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className="h-6 w-6 text-primary" />
                                </div>

                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Full-Stack Development</h4>
                                    <p className="text-muted-foreground">
                                        Responsive web and mobile apps with React, Next.js,
                                        Express.js, Spring Boot and REST APIs.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">

                                <div className="p-3 rounded-full bg-primary/10">
                                    <GraduationCap className="h-6 w-6 text-primary" />
                                </div>

                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Mentorship & Leadership</h4>
                                    <p className="text-muted-foreground">
                                        CS tutor, lab assistant, and student leader — VP of the
                                        Vietnamese Student Association and president of the
                                        5 Good Merits Student Club.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
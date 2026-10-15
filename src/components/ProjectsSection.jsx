import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "D2PSim: Disaster-to-Packet Simulation Framework",
        description:
            "Multi-layer OMNeT++ framework modeling seismic hazard propagation and cascading failures across a 6,000+ node IoT topology; HAZUS-based fragility assessment over 25,000+ buildings with 690 earthquake scenarios.",
        image: "/utils/project1.png",
        tags: ["OMNeT++", "Python", "ObsPy", "OpenStreetMap", "USGS ShakeMap"],
        demoUrl: "#",
        githubUrl: "https://github.com/Tamdeii",
    },
    {
        id: 2,
        title: "YBA Member & Donation Management App",
        description:
            "Web/mobile app with Express.js managing participants, donations and financial data for 600+ enterprise members, with data workflows and an admin dashboard.",
        image: "/utils/project2.png",
        tags: ["Express.js", "JavaScript", "REST APIs", "Admin Dashboard"],
        demoUrl: "#",
        githubUrl: "https://github.com/Tamdeii",
    },
    {
        id: 3,
        title: "Music Generation App with LSTM",
        description:
            "Generative music app using LSTM networks to compose melodies, with an interactive web interface for playback and experimentation.",
        image: "/utils/project3.png",
        tags: ["Python", "TensorFlow/Keras", "LSTM", "JavaScript"],
        demoUrl: "#",
        githubUrl: "https://github.com/Tamdeii/Music-generation-app",
    },
];

export const ProjectsSection = () => {

    return <section id="projects" className="py-24 px-4 relative" >
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                Featured {" "}
                <span className="text-primary">Projects</span>
            </h2>

            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Research and engineering projects spanning AI-driven network
                simulation, full-stack web apps and generative AI.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, key) => (
                    <div
                        key={key}
                        className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover border"
                    >
                        <div className="h-48 overflow-hidden">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                        </div>

                        <div className="p-6">
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tags.map((tag) => (
                                    <span
                                        className="bg-primary/10 px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                                    >
                                        {tag}</span>
                                ))}
                            </div>


                            <div>
                                <h3 className="text-xl font-semibold mb-1">
                                    {project.title}
                                </h3>

                                <p className="text-muted-foreground text-sm mb-4">
                                    {project.description}
                                </p>

                                <div className="flex justify-between items-center">
                                    <div className="flex space-x-3">
                                        <a
                                            href={project.demoUrl}
                                            target="_blank"
                                            className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                        >
                                            <ExternalLink size={20} />
                                        </a>
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                        >
                                            <Github size={20} />
                                        </a>
                                    </div>
                                </div>
                            </div>    
                        </div>
                    </div>
                ))}
            </div>

            <div className="text-center mt-12">
                <a 
                    href="https://github.com/Tamdeii"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cosmic-button w-fit flex items-center mx-auto gap-2"
                >
                    Check my GitHub for more projects <ArrowRight size={16}/>
                </a>
            </div>
        </div>
    </section>
}
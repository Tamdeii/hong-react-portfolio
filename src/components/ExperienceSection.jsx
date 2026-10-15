import { Award, Briefcase, GraduationCap } from "lucide-react";

const experiences = [
    {
        role: "Graduate Research Assistant, M.S. in Artificial Intelligence",
        org: "Dept. of Computer Science, Troy University — Alabama, US",
        period: "May 2026 – Present",
        points: [
            "Design experiments for an AI-driven network simulation framework evaluating communication performance and smart-city resilience under disasters.",
            "Integrate OMNeT++/INET modules with SDN and URLLC; use ObsPy seismic analytics to study packet loss, throughput, delay and cascading failures.",
            "Publish research on AI, disaster-resilient communications and propagation failures.",
        ],
    },
    {
        role: "Computer Science Tutor & Lab Assistant",
        org: "Dept. of Computer Science, Troy University — Alabama, US",
        period: "Jan 2026 – May 2026",
        points: [
            "Tutored students in DSA, C++/Python, Calculus, Algebra, Statistics and Probability.",
            "Maintained lab computers, I/O devices and operating systems with instructors.",
        ],
    },
    {
        role: "Software Assistant & IT Specialist",
        org: "Youth Business Association Danang — Da Nang, Vietnam",
        period: "Jun 2023 – Mar 2024",
        points: [
            "Built a web/mobile app with Express.js managing participants, donations and finances for 600+ enterprise members.",
            "Implemented data-management workflows and an admin dashboard.",
        ],
    },
];

const education = [
    {
        degree: "M.S. in Artificial Intelligence — Computer Science",
        school: "Troy University",
        detail: "GPA 4.00/4.00 · Expected May 2027",
    },
    {
        degree: "B.S. in Computer Science, Magna Cum Laude",
        school: "Troy University",
        detail: "GPA 3.61/4.00 · Fall 2025 · Merit Scholarship · Chancellor's List · Provost's List",
    },
];

const certifications = [
    "Google AI Essentials",
    "AWS Generative AI",
    "AWS Prompt Engineering",
];
export const ExperienceSection = () => {
    return (
        <section id="experience" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Work <span className="text-primary">Experience</span>
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Research, teaching and industry experience across AI,
                    networks and full-stack development.
                </p>
                <div className="space-y-6 mb-16">
                    {experiences.map((exp) => (
                        <div key={exp.role} className="bg-card rounded-lg border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10 shrink-0">
                                    <Briefcase className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left w-full">
                                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1">
                                        <h3 className="font-semibold text-lg">{exp.role}</h3>
                                        <span className="text-sm text-muted-foreground whitespace-nowrap">{exp.period}</span>
                                    </div>
                                    <p className="text-sm text-primary mb-3">{exp.org}</p>
                                    <ul className="list-disc list-inside space-y-1.5 text-muted-foreground text-sm">
                                        {exp.points.map((point) => (
                                            <li key={point}>{point}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-card rounded-lg border p-6 card-hover">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <GraduationCap className="h-6 w-6 text-primary" />
                            </div>
                            <h3 className="font-semibold text-lg">Education</h3>
                        </div>
                        <div className="space-y-4 text-left">
                            {education.map((edu) => (
                                <div key={edu.degree}>
                                    <p className="font-medium">{edu.degree}</p>
                                    <p className="text-sm text-primary">{edu.school}</p>
                                    <p className="text-sm text-muted-foreground">{edu.detail}</p>
                                </div>
                            ))}
                            <p className="text-sm text-muted-foreground">
                                Leadership: VP of Vietnamese Student Association · President of 5 Good Merits Student Club
                            </p>
                        </div>
                    </div>
                    <div className="bg-card rounded-lg border p-6 card-hover">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Award className="h-6 w-6 text-primary" />
                            </div>
                            <h3 className="font-semibold text-lg">Certifications</h3>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {certifications.map((cert) => (
                                <span key={cert} className="bg-primary/10 text-sm font-medium px-3 py-1.5 rounded-full border border-primary/20">
                                    {cert}
                                </span>
                            ))}
                        </div>
                        <p className="text-sm text-muted-foreground mt-4 text-left">
                            Interests: Piano (5+ years) · Guitar (8+ years) · Chess (Elo 800)
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
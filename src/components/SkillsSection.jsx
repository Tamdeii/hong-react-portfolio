
import { useState } from "react";
import { cn } from "@/lib/utils";

const skillGroups = [
    {
        id: "languages",
        label: "Programming Languages",
        items: ["C/C++", "Python", "Java", "SQL", "JavaScript"],
    },
    {
        id: "ai",
        label: "AI / Machine Learning",
        items: [
            "PyTorch",
            "TensorFlow",
            "Keras",
            "Scikit-learn",
            "Transformers / LLMs",
            "Hugging Face",
            "LangChain",
            "Vector DBs",
            "ObsPy",
        ],
    },
    {
        id: "web",
        label: "Web Development",
        items: [
            "React",
            "Next.js",
            "Spring Boot",
            "FastAPI",
            "Flask",
            "Express.js",
            "REST APIs",
            "Tailwind CSS",
        ],
    },
    {
        id: "tools",
        label: "Tools & Platforms",
        items: [
            "Docker",
            "Git / GitHub",
            "Google Colab",
            "VS Code",
            "Figma",
            "OMNeT++ / INET",
            "Gemini API",
            "Claude Code",
        ],
    },
];

const categories = [
    { id: "all", label: "All" },
    ...skillGroups.map((group) => ({ id: group.id, label: group.label })),
];

export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("all");

    const visibleGroups = skillGroups.filter(
        (group) => activeCategory === "all" || group.id === activeCategory
    );
        
    return (
        <section id="skills" className="py-24 px-4 relative bg-secondary/30">
            {
                <div className="container mx-auto max-w-5xl">
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                        My <span className="text-primary"> Skills</span>
                    </h2>

                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        {categories.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => setActiveCategory(category.id)}
                                className={cn(
                                    "px-5 py-2 rounded-full transition-colors duration-300",
                                    activeCategory === category.id
                                    ? "bg-primary text-primary-foreground"
                                    : "bg-secondary/70 text-foreground hover:bg-secondary"
                                )}
                            >
                                {category.label}
                            </button>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {visibleGroups.map((group) => (
                            <div
                                key={group.id}
                                className="bg-card p-6 rounded-lg shadow-xs card-hover border"
                            >
                                <h3 className="font-semibold text-lg mb-4">
                                    {group.label}
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {group.items.map((skill) => (
                                        <span
                                            key={skill}
                                            className="bg-primary/10 text-sm font-medium px-3 py-1.5 rounded-full border border-primary/20"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            }
        </section>
    );
};
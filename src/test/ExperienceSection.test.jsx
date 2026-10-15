import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { ExperienceSection } from "@/components/ExperienceSection";

describe("ExperienceSection", () => {
    it("renders all work experiences with role, org and period", () => {
        render(<ExperienceSection />);

        expect(
            screen.getByText("Graduate Research Assistant, M.S. in Artificial Intelligence")
        ).toBeInTheDocument();
        expect(
            screen.getByText("Computer Science Tutor & Lab Assistant")
        ).toBeInTheDocument();
        expect(
            screen.getByText("Software Assistant & IT Specialist")
        ).toBeInTheDocument();
        expect(screen.getByText("May 2026 – Present")).toBeInTheDocument();
        expect(screen.getByText("Jun 2023 – Mar 2024")).toBeInTheDocument();
    });

    it("renders education entries", () => {
        render(<ExperienceSection />);

        expect(
            screen.getByText("M.S. in Artificial Intelligence — Computer Science")
        ).toBeInTheDocument();
        expect(
            screen.getByText("B.S. in Computer Science, Magna Cum Laude")
        ).toBeInTheDocument();
        expect(screen.getByText("GPA 4.00/4.00 · Expected May 2027")).toBeInTheDocument();
    });

    it("renders all certifications", () => {
        render(<ExperienceSection />);

        expect(screen.getByText("Google AI Essentials")).toBeInTheDocument();
        expect(screen.getByText("AWS Generative AI")).toBeInTheDocument();
        expect(screen.getByText("AWS Prompt Engineering")).toBeInTheDocument();
    });
});

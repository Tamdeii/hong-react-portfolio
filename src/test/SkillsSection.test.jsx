import { describe, expect, it } from "vitest";
import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { SkillsSection } from "@/components/SkillsSection";

const groupHeadings = () => screen.getAllByRole("heading", { level: 3 });
const groupTitles = () => groupHeadings().map((h) => h.textContent);

describe("SkillsSection", () => {
    it("renders all skill groups by default", () => {
        render(<SkillsSection />);
        const titles = groupTitles();
        expect(titles).toContain("Programming Languages");
        expect(titles).toContain("AI / Machine Learning");
        expect(titles).toContain("Web Development");
        expect(titles).toContain("Tools & Platforms");
    });

    it("renders skills as plain list items without progress bars", () => {
        render(<SkillsSection />);
        expect(screen.getByText("PyTorch")).toBeInTheDocument();
        expect(screen.getByText("React")).toBeInTheDocument();
        expect(screen.queryByText(/^\d+%$/)).not.toBeInTheDocument();
    });

    it("filters groups when a category button is clicked", async () => {
        const user = userEvent.setup();
        render(<SkillsSection />);

        await user.click(screen.getByRole("button", { name: "AI / Machine Learning" }));

        expect(groupTitles()).toEqual(["AI / Machine Learning"]);
        expect(screen.getByText("PyTorch")).toBeInTheDocument();
    });

    it("shows all groups again after clicking All", async () => {
        const user = userEvent.setup();
        render(<SkillsSection />);

        await user.click(screen.getByRole("button", { name: "Web Development" }));
        expect(groupTitles()).toEqual(["Web Development"]);

        await user.click(screen.getByRole("button", { name: "All" }));
        expect(groupTitles()).toHaveLength(4);
    });

    it("keeps the active category button highlighted", async () => {
        const user = userEvent.setup();
        render(<SkillsSection />);

        const aiButton = screen.getByRole("button", { name: "AI / Machine Learning" });
        await user.click(aiButton);
        expect(aiButton.className).toContain("bg-primary");

        const allButton = screen.getByRole("button", { name: "All" });
        expect(allButton.className).not.toContain("bg-primary ");
        expect(within(allButton).getByText("All")).toBeInTheDocument();
    });
});


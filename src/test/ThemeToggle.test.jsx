import { describe, expect, it, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ThemeToggle } from "@/components/ThemeToggle";

beforeEach(() => {
    localStorage.clear();
    document.documentElement.classList.remove("dark");
});

describe("ThemeToggle", () => {
    it("defaults to dark mode (starry night) when no theme is stored", () => {
        render(<ThemeToggle />);
        expect(document.documentElement.classList.contains("dark")).toBe(true);
        expect(localStorage.getItem("theme")).toBe("dark");
    });

    it("respects a stored light theme", () => {
        localStorage.setItem("theme", "light");
        render(<ThemeToggle />);
        expect(document.documentElement.classList.contains("dark")).toBe(false);
    });

    it("toggles from dark to light and back", async () => {
        const user = userEvent.setup();
        render(<ThemeToggle />);
        const button = screen.getByRole("button");

        // default dark -> click -> light
        await user.click(button);
        expect(document.documentElement.classList.contains("dark")).toBe(false);
        expect(localStorage.getItem("theme")).toBe("light");

        // light -> click -> dark
        await user.click(button);
        expect(document.documentElement.classList.contains("dark")).toBe(true);
        expect(localStorage.getItem("theme")).toBe("dark");
    });
});

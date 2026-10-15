import { describe, expect, it } from "vitest";
import { cn } from "@/lib/utils";

describe("cn", () => {
    it("merges plain class names", () => {
        expect(cn("px-4", "py-2")).toBe("px-4 py-2");
    });

    it("ignores falsy values", () => {
        expect(cn("px-4", false, undefined, null, "py-2")).toBe("px-4 py-2");
    });

    it("resolves conflicting tailwind classes with tailwind-merge", () => {
        expect(cn("px-2", "px-4")).toBe("px-4");
        expect(cn("bg-red-500", "bg-blue-500")).toBe("bg-blue-500");
    });

    it("supports conditional object syntax", () => {
        expect(cn("btn", { "btn-active": true, "btn-hidden": false })).toBe(
            "btn btn-active"
        );
    });

    it("supports array input", () => {
        expect(cn(["px-4", "py-2"])).toBe("px-4 py-2");
    });
});

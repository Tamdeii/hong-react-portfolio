import { ArrowUp } from "lucide-react"


export const Footer = () => {
    return (
        <footer className="py-8 px-4 border-t border-border">
            <div className="container mx-auto max-w-5xl flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-sm text-muted-foreground">
                    &copy; {new Date().getFullYear()} Hong Ton. All rights reserved.
                </p>
            <a 
                href="#hero"
                className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
            >
                <ArrowUp size={20} />
            </a>
            </div>
        </footer>
    )
}
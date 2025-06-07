import { ArrowUp } from "lucide-react"


export const Footer = () => {
    return (
        <footer>
            <p>
                &copy; {new Date().getFullYear()} Hong.co. All rights reserved.
            </p>
            <a 
                href="#hero"
                className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
            >
                <ArrowUp size={20} />
            </a>
        </footer>
    )
}
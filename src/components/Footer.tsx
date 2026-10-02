import { motion } from "framer-motion";

function Footer() {
    return (
        <footer className="relative border-t border-white/10 px-5 py-8 text-center text-sm text-teal-100/60">
            <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-amber-200/50 to-transparent" />
            <p>
                Done in &copy; {new Date().getFullYear()}, by Victor with{" "}
                <motion.span
                    className="inline-block"
                    animate={{ scale: [1, 1.25, 1, 1.25, 1] }}
                    transition={{ duration: 1.4, repeat: Infinity, repeatDelay: 0.6 }}
                >
                    💖
                </motion.span>
            </p>
        </footer>
    );
}

export default Footer;

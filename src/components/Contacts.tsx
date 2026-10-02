import { motion } from "framer-motion";
import github from "../assets/socials/github.png";
import gmail from "../assets/socials/mailogo.png";
import linkedIn from "../assets/socials/linkedinlogo.png";
import x from "../assets/socials/xlogo.png";
import Button from "./Button";
import Reveal, { SectionHeading } from "./Reveal";

const socials = [
    { href: "mailto:ansimavicky@gmail.com", img: gmail, label: "Email" },
    { href: "https://www.linkedin.com/in/victoire-ansima-6bb506284/", img: linkedIn, label: "LinkedIn" },
    { href: "https://github.com/Victoire67", img: github, label: "GitHub" },
    { href: "https://www.linkedin.com/in/victoire-ansima-6bb506284/", img: x, label: "X" },
];

function Contacts() {
    return (
        <section id="contact-me" className="relative grid min-h-svh place-content-center overflow-hidden px-5 py-28">
            {/* Pulsing concentric rings */}
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 grid place-items-center">
                {[0, 1, 2].map((i) => (
                    <motion.div
                        key={i}
                        className="absolute h-[40vmax] w-[40vmax] rounded-full border border-teal-300/20"
                        animate={{ scale: [0.6, 1.6], opacity: [0.6, 0] }}
                        transition={{ duration: 6, repeat: Infinity, delay: i * 2, ease: "easeOut" }}
                    />
                ))}
                <div className="h-96 w-96 rounded-full bg-teal-500/20 blur-3xl" />
            </div>

            <div className="relative text-center">
                <SectionHeading eyebrow="What's next?" title="Let's build something together" />

                <Reveal delay={0.1}>
                    <p className="mx-auto max-w-xl text-lg text-teal-100/80">
                        I'm open to new opportunities and collaborations. Whether you have a project in mind or just
                        want to say hi, my inbox is always open.
                    </p>
                </Reveal>

                <Reveal delay={0.2} className="mt-10 flex justify-center">
                    <Button txt="Say hello" href="mailto:ansimavicky@gmail.com" variant="solid" />
                </Reveal>

                <motion.ul
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } } }}
                    className="mt-14 flex flex-wrap justify-center gap-5"
                >
                    {socials.map(({ href, img, label }) => (
                        <motion.li
                            key={label}
                            variants={{
                                hidden: { opacity: 0, y: 30, scale: 0.6 },
                                show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 260, damping: 18 } },
                            }}
                        >
                            <motion.a
                                href={href}
                                target={href.startsWith("http") ? "_blank" : undefined}
                                rel="noreferrer"
                                aria-label={label}
                                whileHover={{ y: -8, rotate: 6, scale: 1.08 }}
                                whileTap={{ scale: 0.92 }}
                                className="group relative grid h-20 w-20 place-content-center rounded-2xl bg-white shadow-lg transition-shadow duration-300 hover:shadow-[0_0_40px_rgba(253,230,138,0.6)] sm:h-24 sm:w-24"
                            >
                                <img src={img} alt="" className="h-10 w-10 object-contain sm:h-12 sm:w-12" />
                                <span className="pointer-events-none absolute -bottom-8 left-1/2 -translate-x-1/2 text-sm whitespace-nowrap text-amber-200 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                                    {label}
                                </span>
                            </motion.a>
                        </motion.li>
                    ))}
                </motion.ul>
            </div>
        </section>
    );
}

export default Contacts;

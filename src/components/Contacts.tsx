import { motion } from "framer-motion";
import Button from "./Button";
import Reveal, { SectionHeading, WindowBar } from "./Reveal";

const socials = [
    { key: "email", value: "ansimavicky@gmail.com", href: "mailto:ansimavicky@gmail.com" },
    { key: "linkedin", value: "in/victoire-ansima", href: "https://www.linkedin.com/in/victoire-ansima-6bb506284/" },
    { key: "github", value: "github.com/Victoire67", href: "https://github.com/Victoire67" },
];

function Contacts() {
    return (
        <section id="contact-me" className="bg-dots relative border-t border-line px-5 py-28">
            <SectionHeading index="04" file="contact.py" title="Let's build something together" />

            <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
                <Reveal>
                    <p className="max-w-lg text-lg leading-relaxed text-muted">
                        I'm open to new opportunities and collaborations, especially around{" "}
                        <span className="text-fg">Python, AI and machine learning</span>. Whether you have a project
                        in mind or just want to say hi, my inbox is always open.
                    </p>
                    <div className="mt-10 flex flex-wrap gap-4">
                        <Button txt="say_hello()" href="mailto:ansimavicky@gmail.com" variant="solid" />
                        <Button txt="git clone github" href="https://github.com/Victoire67" />
                    </div>
                </Reveal>

                <Reveal delay={0.15}>
                    <div className="overflow-hidden rounded-xl border border-line bg-ink font-mono text-sm">
                        <WindowBar title="terminal — python3" />
                        <div className="p-5 leading-7 sm:p-6">
                            <p>
                                <span className="text-py-blue">&gt;&gt;&gt;</span> <span className="text-syn-kw">from</span>{" "}
                                victoire <span className="text-syn-kw">import</span> contact
                            </p>
                            <p>
                                <span className="text-py-blue">&gt;&gt;&gt;</span> contact.<span className="text-syn-fn">links</span>()
                            </p>
                            <p className="text-fg">{"{"}</p>
                            <motion.ul
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true }}
                                variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } } }}
                                className="pl-6"
                            >
                                {socials.map(({ key, value, href }) => (
                                    <motion.li
                                        key={key}
                                        variants={{ hidden: { opacity: 0, x: -10 }, show: { opacity: 1, x: 0 } }}
                                    >
                                        <span className="text-syn-str">"{key}"</span>
                                        <span className="text-muted">: </span>
                                        <a
                                            href={href}
                                            target={href.startsWith("http") ? "_blank" : undefined}
                                            rel="noreferrer"
                                            className="text-syn-str underline decoration-line underline-offset-4 transition-colors hover:text-py-yellow hover:decoration-py-yellow"
                                        >
                                            "{value}"
                                        </a>
                                        <span className="text-muted">,</span>
                                    </motion.li>
                                ))}
                            </motion.ul>
                            <p className="text-fg">{"}"}</p>
                            <p>
                                <span className="text-py-blue">&gt;&gt;&gt;</span>{" "}
                                <span className="inline-block h-4 w-2 animate-blink bg-fg align-middle" />
                            </p>
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}

export default Contacts;

function Footer() {
    return (
        <footer className="border-t border-line bg-panel px-5 py-6 font-mono text-xs text-muted">
            <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3">
                <p>
                    <span className="text-dim"># </span>&copy; {new Date().getFullYear()} Victoire Ansima · built with React, coffee &amp;{" "}
                    <span className="text-py-yellow">🐍</span>
                </p>
                <p className="flex items-center gap-4">
                    <span>
                        <span className="text-py-blue">●</span> Python 3
                    </span>
                    <span>UTF-8</span>
                    <span>LF</span>
                    <span className="text-syn-ok">✓ all tests passing</span>
                </p>
            </div>
        </footer>
    );
}

export default Footer;

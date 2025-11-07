import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-black text-slate-400 py-8 px-4">
            <div className="max-w-6xl mx-auto flex flex-col items-center gap-4">
                {/* Links sociais */}
                {/* <div className="flex gap-6">
                    <a
                        href="https://github.com/PedroSousx"
                        target="_blank"
                        rel="noreferrer"
                        className="text-slate-400 hover:text-amber-400 transition-colors"
                        aria-label="GitHub"
                    >
                        <FaGithub className="w-6 h-6" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/pedro-sousa-251a382b1/"
                        target="_blank"
                        rel="noreferrer"
                        className="text-slate-400 hover:text-amber-400 transition-colors"
                        aria-label="LinkedIn"
                    >
                        <FaLinkedin className="w-6 h-6" />
                    </a>
                </div> */}

                {/* Copyright */}
                <p className="text-sm text-center">
                    © {currentYear} Pedro Sousa. Todos os direitos reservados.
                </p>
            </div>
        </footer>
    );
}

export default Footer;

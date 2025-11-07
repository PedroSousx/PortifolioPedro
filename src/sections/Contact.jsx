import React from 'react';
import Email from '../assets/Email.png';
import Linkedin from '../assets/linkedin2.png'
import Github from '../assets/github2.png'

function Contact() {

	return (
		<section id="Contact" className="bg-zinc-950 py-16 px-4 md:px-8 lg:px-16">
			<div className="max-w-6xl mx-auto">
				<h2 className="text-white uppercase text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-16">
					Contato
				</h2>

				<div className="flex flex-col sm:flex-row sm:justify-center gap-8 md:gap-12 lg:gap-16 items-stretch">
					{/* Card Email */}
					<div className="flex flex-col items-center gap-3 w-full sm:w-64 md:w-72 px-4">
						<img src={Email} alt="Email" className="w-14 h-14" />
						<h3 className="text-white font-semibold text-2xl mb-1">Email</h3>
						<a
							href="mailto:pedroh.scintra@gmail.com"
							className="text-amber-400 transition-colors text-xl  block"
						>
							pedroh.scintra@gmail.com
						</a>
						<p className="text-white max-w-xs text-center mt-4">Tem um projeto em mente ou quer trocar uma ideia? Me envie uma mensagem — vou adorar conversar sobre novas oportunidades e colaborações.</p>
					</div>

					{/* Card LinkedIn */}
					<div className="flex flex-col items-center gap-3 w-full sm:w-64 md:w-72 px-4">
						<img src={Linkedin} alt="LinkedIn" className="w-14 h-14" />
						<h3 className="text-white font-semibold text-2xl mb-1">LinkedIn</h3>
						<a
							href="https://www.linkedin.com/in/pedro-sousa-251a382b1/"
							target="_blank"
							rel="noreferrer"
							className="text-amber-400 transition-colors text-xl block"
						>
							Pedro Sousa
						</a>
						<p className="text-white max-w-xs text-center mt-4">Acompanhe minha trajetória profissional e as novidades dos projetos que estou desenvolvendo. Vamos nos conectar!</p>
					</div>

					{/* Card GitHub */}
					<div className="flex flex-col items-center gap-3 w-full sm:w-64 md:w-72 px-4">
						<img src={Github} alt="GitHub" className="w-14 h-14" />
						<h3 className="text-white font-semibold text-2xl mb-1">GitHub</h3>
						<a
							href="https://github.com/PedroSousx"
							target="_blank"
							rel="noreferrer"
							className="text-amber-400 transition-colors text-xl block"
						>
							PedroSousx
						</a>
						<p className="text-white max-w-xs text-center mt-4">Veja meus projetos, códigos e experimentos. Sempre busco aprender e compartilhar o que descubro no mundo do desenvolvimento.</p>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Contact;
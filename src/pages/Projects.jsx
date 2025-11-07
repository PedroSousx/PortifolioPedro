// import Site_Protazio from '../assets/Site_Protazio.png';
// import Site_Airbnb from '../assets/Foto_dash_1.png';
// import Producao from '../assets/Producao.png';
// import info from '../assets/info.png';
// import Site_Genexus from '../assets/Site_Genexus.png';

// function Projects(){
//     return(
//         <section id="projetos" className="bg-black text-white pt-20 pb-20 px-20">
//             <h1 className="text-7xl text-center font-semibold uppercase mb-16">Projetos</h1>
//             <div className="flex flex-row gap-12 text-4xl font-opensans leading-10 px-36 text-justify font-light">
//                 <div className="grid grid-cols-2 gap-12 mx-auto">
//                     <div className="bg-slate-950 p-10 border rounded-4xl border-slate-700 hover:scale-105 hover:border-slate-500 transition-all duration-300">
//                         <div className='flex justify-between items-center'>
//                             <h2 className="text-start w-96 font-semibold uppercase border-b-slate-500">Landing Page</h2>
//                             <img src={info} alt="Mais Informações" className='w-10 hover:scale-105'/>
//                         </div>
//                         <p className="font-extralight text-slate-500 text-xl py-2">Protázio Music</p>
//                         <img src={ Site_Protazio } alt="Site Protázio Music" />
                      
//                     </div>
//                     <div className="bg-slate-950 p-10 border rounded-4xl border-slate-700 hover:scale-105 hover:border-slate-500 transition-all duration-300">
//                         <div className='flex justify-between items-center'>
//                             <h2 className="text-start w-96 font-semibold uppercase border-b-slate-500">Dashboard</h2>
//                             <img src={info} alt="Mais Informações" className='w-10 hover:scale-105'/>
//                         </div>
//                         <p className="font-extralight text-slate-500 text-xl py-2">Airbnb Nova York</p>
//                         <img src={ Site_Airbnb } alt="Site Airbnb" />
                       
//                     </div>
//                     <div className="bg-slate-950 p-10 border rounded-4xl border-slate-700 hover:scale-105 hover:border-slate-500 transition-all duration-300">
//                         <div className='flex justify-between items-center'>
//                             <h2 className="text-start w-96 font-semibold uppercase border-b-slate-500">Loja de Jogos</h2>
//                             <img src={info} alt="Mais Informações" className='w-10 hover:scale-105'/>
//                         </div>
//                         <p className="font-extralight text-slate-500 text-xl py-2">Genexus</p>
//                         <img src={Site_Genexus} alt="Site Genexus" />
                        
//                     </div>
//                     <div className="bg-slate-950 p-10 border rounded-4xl border-slate-700 hover:scale-105 hover:border-slate-500 transition-all duration-300">
//                         <div className='flex justify-between items-center'>
//                             <h2 className="text-start w-96 font-semibold uppercase border-b-slate-500">Cardápio Online</h2>
//                             <img src={info} alt="Mais Informações" className='w-10 hover:scale-105'/>
//                         </div>
//                         <p className="font-extralight text-slate-500 text-xl py-2">Need Salgados</p>
//                         <img src={ Producao } alt="Em produção" />
                     
//                     </div>
//                 </div>
//             </div>
//         </section>
//     )
// }

import { useState } from "react";
import Site_Protazio from "../assets/Site_Protazio.png";
import Site_Airbnb from "../assets/Foto_dash_1.png";
import Producao from "../assets/Producao.png";
import info from "../assets/info.png";
import Site_Genexus from "../assets/Site_Genexus.png";

function Projects() {
	const [selectedProject, setSelectedProject] = useState(null);

	const projects = [
		{
			id: 1,
			title: "Landing Page",
			subtitle: "Protázio Music",
			stack: "HTML, CSS e Tailwind",
            link: "https://protaziomusic.com.br/",
			img: Site_Protazio,
			description:
				"Uma landing page desenvolvida para a escola de música Protázio Music, focando em performance, design responsivo e clareza visual.",
		},
		{
			id: 2,
			title: "Dashboard",
			subtitle: "Airbnb Nova York",
			stack: "Python (pandas, dash e numpy)",
			img: Site_Airbnb,
			description:
				"Dashboard interativo com análise de dados reais do Airbnb em Nova York. Inclui gráficos dinâmicos e regressão linear.",
		},
		{
			id: 3,
			title: "Loja de Jogos",
			subtitle: "Genexus",
			stack: "Genexus e SQL Server",
			img: Site_Genexus,
			description:
				"Projeto feito em Genexus para simular uma loja de jogos, com cadastro, gerenciamento e integração de banco de dados.",
		},
		{
			id: 4,
			title: "Cardápio Online",
			subtitle: "Need Salgados",
			stack: "React e Tailwind",
			img: Producao,
			description:
				"Sistema web para cardápio digital",
		},
	];

	return (

		   <section id="projetos" className="bg-zinc-950 text-white pt-20 pb-20 px-4 md:px-20">
			   <h1 className="text-4xl md:text-7xl text-center font-semibold uppercase mb-8 md:mb-16">Projetos</h1>

			   <div className="flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-12 mx-auto md:px-36">
				   {projects.map((project) => (
					   <div
						   key={project.id}
						   className="bg-black p-4 md:p-10 border rounded-3xl md:rounded-4xl border-zinc-700 hover:scale-105 hover:border-amber-400 transition-all duration-300 relative flex flex-col"
					   >
						   <div className="flex justify-between items-center">
							   <h2 className="text-lg md:text-3xl font-semibold uppercase text-slate-100 mb-2">
								   {project.title}
							   </h2>
							   <img
								   src={info}
								   alt="Mais Informações"
								   className="w-6 md:w-8 hover:scale-110 cursor-pointer"
								   onClick={() => setSelectedProject(project)}
							   />
						   </div>
						   <p className="font-extralight text-amber-400 text-base md:text-xl py-2">{project.subtitle}</p>
						   <img src={project.img} alt={project.title} className="rounded-lg border border-zinc-700 w-full h-auto mt-2 md:mt-4" />

					   </div>
				   ))}
			   </div>

			{/* ===== Modal ===== */}
			{selectedProject && (
				<div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm flex justify-center items-center z-50">
					<div className="bg-gray-950 p-6 md:p-12 rounded-3xl max-w-4xl w-11/12 md:w-3/4 relative shadow-2xl">
						<button
							onClick={() => setSelectedProject(null)}
							className="absolute top-3 right-4 text-slate-400 text-2xl hover:text-white"
						>
							✕
						</button>

						<h2 className="text-3xl md:text-4xl font-semibold mb-4 text-amber-400">{selectedProject.title}</h2>
						<p className="text-slate-400 mb-2">{selectedProject.subtitle}</p>
						<img
							src={selectedProject.img}
							alt={selectedProject.title}
							className="rounded-lg mb-4 w-full max-h-96 object-cover"
						/>
						<p className="text-slate-300 mb-3">{selectedProject.description}</p>
						<p className="text-slate-500 mb-3 text-sm">Tecnologias: {selectedProject.stack}</p>
                        <a className="text-amber-400 italic" href={selectedProject.link}>{selectedProject.link}</a>
					</div>
				</div>
			)}
		</section>
	);
}

export default Projects;

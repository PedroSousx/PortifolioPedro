import React, { useState } from 'react';

function About(){
    const [selectedExp, setSelectedExp] = useState(null);

    const experiences = [
        {
            id: 1,
            period: '07/25 - presente',
            title: 'Desenvolvedor Full-Stack - CHB',
            description: 'Atuo no desenvolvimento de soluções empresariais com Genexus, atendendo o setor de Folha de Pagamento e RH. Também atuo na parte de Front-End, criando interfaces responsivas com highcharts para melhorar a experiência do usuário.'
        },
        {
            id: 2,
            period: '08/24 - 07/25',
            title: 'Desenvolvedor Front-End - Barão Alpha',
            description: 'Desenvolvimento de interfaces responsivas com atenção a performance, acessibilidade e experiências ricas para o usuário.'
        },
        {
            id: 3,
            period: '01/23 - presente',
            title: 'Desenvolvedor Front-End - Freelancer',
            description: 'Projetos freelance envolvendo landing pages, portfólios e sistemas simples em React e Tailwind, com foco em entrega rápida e limpa.'
        }
    ];

    return(
        <section id="sobre">

            <div className="text-white bg- pt-20 px-4 md:px-20 text-start align-middle bg-gradient-to-b to-zinc-950 to-95%">
                <h1 className="uppercase text-4xl md:text-7xl text-center font-semibold">Sobre mim</h1>
                <div className="flex flex-col md:flex-row gap-8 md:gap-12 text-lg md:text-4xl mt-10 md:mt-20 font-opensans leading-7 md:leading-10 md:px-36 text-justify font-light pb-20 md:pb-56">
                    {/* PARTE 1 */}
                    <div className="md:flex-3 md:w-3/5 md:pr-10 mb-8 md:mb-0">
                        <p>Sou um desenvolvedor <span className='text-amber-400'>front-end</span> em formação, atualmente cursando Análise e Desenvolvimento de Sistemas na Fatec Franca. Trabalho com Genexus na empresa CHB, onde aplico na prática meus aprendizados e desenvolvo soluções reais para diferentes demandas.</p>
                        <br />
                        <p>Além disso, atuo como <span className='text-amber-400'>freelancer</span>, criando interfaces modernas e funcionais como: landing pages, cardápios online e portfólios — sempre com foco em usabilidade e uma boa experiência do usuário.</p>
                    </div>
                    {/* PARTE 2 */}
                    <div className="md:flex-1 md:w-2/5">
                        <h2 className="mx-auto text-start uppercase font-normal text-xl md:text-2xl">Experiência</h2>

                        <div className="mt-4 flex flex-col gap-2 md:gap-4">
                            {experiences.map((exp) => (
                                <div
                                    key={exp.id}
                                    className="group my-1 md:my-2 text-base md:text-2xl border-l-2 border-slate-300 pl-2 md:pl-4 hover:bg-zinc-900 p-2 text-start cursor-pointer rounded-md"
                                    onClick={() => setSelectedExp(exp)}
                                    role="button"
                                    tabIndex={0}
                                    onKeyDown={(e) => { if (e.key === 'Enter') setSelectedExp(exp); }}
                                >
                                    <span className="font-medium">{exp.period}</span>
                                    <h3 className="mt-1">{exp.title}</h3>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Modal de experiência */}
                {selectedExp && (
                    <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm flex justify-center items-center z-50">
                        <div className="bg-zinc-950 p-6 md:p-8 rounded-3xl max-w-2xl w-11/12 relative shadow-2xl">
                            <button
                                onClick={() => setSelectedExp(null)}
                                className="absolute top-3 right-4 text-slate-400 text-2xl hover:text-white"
                            >
                                ✕
                            </button>

                            <h2 className="text-xl md:text-2xl font-semibold mb-2 text-amber-400">{selectedExp.title}</h2>
                            <p className="text-slate-400 mb-4">{selectedExp.period}</p>
                            <p className="text-slate-300">{selectedExp.description}</p>
                        </div>
                    </div>
                )}
            </div>
        </section>
    )
}

export default About;
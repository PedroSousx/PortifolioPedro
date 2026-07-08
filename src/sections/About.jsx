import React, { useState } from 'react';

function About(){
    const [selectedExp, setSelectedExp] = useState(null);

    const experiences = [
        {
            id: 1,
            period: '07/25 - presente',
            title: 'Desenvolvedor Full-Stack - CHB',
            description: 'Desenvolvimento de software corporativo para os módulos de RH, Folha de Pagamento e ERP — sistemas em produção para dezenas de clientes. Criação do módulo NR-1 do zero (modelagem de tabelas, regras de negócio, procedures e configurações finais), hoje ativo em 26 clientes. Refatoração de filtros em 400+ relatórios para ganho de performance, com documentação técnica completa. Manutenção de esquemas relacionais em SQL Server, PostgreSQL e Oracle sem downtime.'
        },
        {
            id: 2,
            period: '08/24 - 07/25',
            title: 'Desenvolvedor Front-End - Barão Alpha',
            description: 'Criação de interfaces responsivas em HTML e CSS puro para e-commerce. Aplicação de SEO on-page (estrutura semântica, meta tags e hierarquia de conteúdo) e redação de descrições de produtos com foco em conversão.'
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
                        <p>Desenvolvedor <span className='text-amber-400'>Front-End</span> em formação e com sede de aprendizado! Atualmente trabalho como desenvolvedor trainee na CHB no setor de RH, Folha de Pagamento e ERP.</p>
                        <br />
                        <p>Além disso, atuo como <span className='text-amber-400'>freelancer</span>, criando interfaces modernas e funcionais como: landing pages, cardápios online e portfólios! Usando métodos com mobile-first e SEO sempre buscando o melhor para o usuário.</p>
                        <br />
                        <p><span className='text-amber-400'>Stack Principal: </span>React, Next.js, JavaScript, TypeScript e Tailwind CSS.</p>
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
import Navbar from "../components/Navbar";
import 'animate.css';

function Header(){
    const scrollToProjects = () => {
        const projectsSection = document.getElementById('projetos');
        if (projectsSection) {
            projectsSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return(
        <header className="relative overflow-hidden"> 

              <Navbar />

            
            <div className="relative z-10 text-white text-center font-opensans py-28 md:py-60 px-4 md:px-6 lg:px-8 uppercase">
                <h1 className="mb-2 font-light animate__animated animate__fadeInLeftBig text-2xl md:text-4xl">Olá, eu sou o</h1>
                <p className="font-semibold animate__animated animate__fadeInLeftBig text-4xl md:text-8xl text-amber-400 leading-tight">Pedro Sousa</p>
               
                <p className="text-base md:text-2xl max-w-3xl mx-auto my-4 font-light animate__animated animate__fadeInLeftBig text-zinc-500">Desenvolvedor front-end apaixonado por criar interfaces modernas e funcionais</p>
                <button 
                    onClick={scrollToProjects}
                    className="text-base md:text-4xl hover:text-slate-200 bg-black hover:bg-zinc-950 py-3 md:py-4 px-6 md:px-20 rounded-xl mt-4 uppercase animate__animated animate__fadeInLeftBig cursor-pointer transition-colors duration-300"
                >
                    Ver projetos
                </button>
            </div>
        </header>
        
    )
}

export default Header

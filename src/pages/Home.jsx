
import Header from "../sections/Header";
import About from "../sections/About";
import Habilitys from "../sections/Habilitys";

function Home(){
    return(
        <>
        {/* <div className="min-h-screen bg-gradient-to-r from-sky-950 via-slate-500 to-sky-950 bg-cover bg-center"> */}
        <div className=" bg-zinc-900">
            <Header />
            <About />
            <Habilitys />
        </div>
        </>
    )
}

export default Home;
// import htmllogo from '../assets/html.png'
// import csslogo from '../assets/css.png'
// import jslogo from '../assets/java-script.png'
// import tailwind from '../assets/tailwind.png'
// import reactlogo from '../assets/react.png'
// import gitlogo from '../assets/git.png'
// import pythonlogo from '../assets/python.png'
// import vercel from '../assets/vercel.png'
// import sql from '../assets/sql-server.png'
// import bootstrap from '../assets/bootstrap.png'
// import { motion } from "framer-motion";
// import Box from '../components/box'

// function Habilitys(){
//     return(    
//     <section id="habilidades" className="bg-black">
//         <div>
//             <h1 className="text-white text-7xl text-center font-semibold uppercase">Habilidades</h1>
//             <div className='flex flex-row gap-6'>
//                 <div className="text-white text-4xl pt-20 pb-56 font-opensans leading-10 px-56 mx-auto space-y-10 items-center grid grid-cols-5">
//                     <div className="hover:border border-slate-500 rounded-lg h-32 w-32 p-6 mx-14"> 
//                         <img src={htmllogo} alt="HTML"/>

//                     </div>
//                     {/* <div>
//                         <Box />
//                     </div> */}
//                     <div className="hover:border border-slate-500 rounded-lg h-32 w-32 p-6 mx-14"> 
//                         <img src={csslogo} alt="CSS" />
//                     </div>
//                     <div className="hover:border border-slate-500 rounded-lg h-32 w-32 p-6 mx-14">
//                         <img src={jslogo} alt="JavaScript" />
//                     </div>
//                     <div className="hover:border border-slate-500 rounded-lg h-32 w-32 p-6 mx-14">
//                         <img src={bootstrap} alt="Bootstrap" />
//                     </div>
//                     <div className="hover:border border-slate-500 rounded-lg h-32 w-32 p-6 mx-14">
//                         <img src={reactlogo} alt="React" />
//                     </div>
//                     <div className="hover:border border-slate-500 rounded-lg h-32 w-32 p-6 mx-14">
//                         <img src={tailwind} alt="Tailwind" />
//                     </div>
//                     <div className="hover:border border-slate-500 rounded-lg h-32 w-32 p-6 mx-14">
//                         <img src={pythonlogo} alt="python" />
//                     </div>
//                     <div className="hover:border border-slate-500 rounded-lg h-32 w-32 p-6 mx-14">
//                         <img src={sql} alt="sql" />
//                     </div>
//                     <div className="hover:border border-slate-500 rounded-lg h-32 w-32 p-6 mx-14">
//                         <img src={gitlogo} alt="Git"/>
//                     </div>
//                     <div className="hover:border border-slate-500 rounded-lg h-32 w-32 p-6 mx-14">
//                         <img src={vercel} alt="Vercel" />
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </section>
//     )

// }

// export default Habilitys;

import { motion } from "framer-motion";

import htmllogo from "../assets/html.png";
import csslogo from "../assets/css.png";
import jslogo from "../assets/java-script.png";
import tailwind from "../assets/tailwind.png";
import reactlogo from "../assets/react.png";
import gitlogo from "../assets/git.png";
import pythonlogo from "../assets/python.png";
import Genexus from "../assets/genexus.png";
import sql from "../assets/sql-server.png";
import bootstrap from "../assets/bootstrap.png";

function Habilitys() {
  // Variantes de animação (entrar na tela)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // tempo entre a animação de cada ícone
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const skills = [
    { img: htmllogo, name: "HTML" },
    { img: csslogo, name: "CSS" },
    { img: jslogo, name: "JavaScript" },
    { img: bootstrap, name: "Bootstrap" },
    { img: reactlogo, name: "React" },
    { img: tailwind, name: "Tailwind" },
    { img: pythonlogo, name: "Python" },
    { img: sql, name: "SQL" },
    { img: gitlogo, name: "Git" },
    { img: Genexus, name: "Genexus" },
  ];

  return (
    <section id="habilidades" className="bg-zinc-950 pb-20">
      <h1 className="text-white text-4xl md:text-7xl text-center font-semibold uppercase mb-8 md:mb-16">
        Habilidades
      </h1>

      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-10 justify-items-center px-4 md:px-12 lg:px-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.98 }}
            className="flex flex-col items-center gap-2"
          >
            <div className="hover:border border-amber-400 rounded-lg p-4 flex items-center justify-center bg-gradient-to-b hover:bg-black shadow-md w-20 h-20 md:w-32 md:h-32">
              <img src={skill.img} alt={skill.name} className="w-full h-full object-contain" />
            </div>
            <p className="text-sm md:text-base mt-1 text-center text-slate-200">{skill.name}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default Habilitys;

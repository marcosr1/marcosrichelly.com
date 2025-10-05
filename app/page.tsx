"use client";

import { useState } from "react";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import { TypeAnimation } from 'react-type-animation';
import ParticlesBackground from "./ParticlesBackground";

export default function Home() {
  const [particlesOn, setParticlesOn] = useState(true);
  const [hover, setHover] = useState(false);
  
  return (
    <div className="relative w-full min-h-screen scrollbar-none">
      
        <ParticlesBackground isActive={particlesOn} />

        <div className="relative z-10 text-center px-4 flex flex-col items-center justify-center font-mono tracking-wide h-screen">
          <header className="w-full flex items-center justify-between px-6 py-4 p-4 space-x-6 fixed top-0 left-0 z-50 bg-[#47382A]">
            <ul className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex space-x-8">
              <a href="https://www.linkedin.com/in/marcos-richelly-6bb536336/" className="flex items-center text-white hover:text-yellow-500 font-light space-x-2">
                <FaLinkedin size={16} className="mr-1"/>Linkedin
              </a>
              <a href="https://github.com/marcosr1" className="flex items-center text-white hover:text-yellow-500 space-x-2 font-light">
                <FaGithub size={16} className="mr-1"/>
                Github
              </a>
              <a href="https://www.instagram.com/_chellynk/" className="flex items-center text-white hover:text-yellow-500 font-light space-x-2">
                <FaInstagram size={16} className="mr-1"/>
                Instagram
              </a>
            </ul>
            <div className="relative ml-auto flex items-center">
            <button
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            onClick={() => setParticlesOn(!particlesOn)}
            className="w-12 h-12 rounded-full bg-[#47382A] hover:bg-[#6A5F50] text-white flex items-center justify-center shadow-md transitiond">
            {particlesOn ? "off" : "on"}
            
            {hover && (
              <span className="absolute top-full mt-2 left-1/2 transform -translate-x-7/8 px-3 py-1 rounded bg-[#6A5F50] text-white text-sm whitespace-nowrap shadow-md">
                Ativa / desativa o background animado
              </span>
            )}
            </button>
            </div>
          
          </header>
          <section id="apresentacao" className="min-h-screen flex items-center justify-center text-lg flex-col mt-250 row-start-2 font-light">
              <p className="text-lg text-white-500">Oi! eu sou o</p>
              <div className="flex space-x-5">
                <h1 className="text-center text-4xl text-yellow-500 font-light">
                  <TypeAnimation
                    sequence={[
                      'Marcos',
                      1500  
                    ]}
                    wrapper="span"
                    speed={50}               
                    repeat={0}
                    cursor={false}
                    />
                </h1>
                <h1 className="text-center text-4xl font-light text-white">
                <TypeAnimation
                    sequence={[
                      1500,
                      'Richelly :',
                      1500  
                    ]}
                    wrapper="span"
                    speed={50}               
                    repeat={0}
                    cursor={false}
                    />
                <TypeAnimation
                    sequence={[
                      1500,
                      'D',  
                      1500, 
                      ' Desenvolvedor Web.', 
                      1500, 
                      ')', 
                      1500,
                    ]}
                    wrapper="span"
                    speed={50}               
                    repeat={Infinity}
                    />
                </h1>
              </div>
              <p className="text-lg text-white-500 font-light">Estudante de Ciência da Computação,</p>
              <p className="text-lg text-white-500 mt-0 font-light">e futuro Engenheiro de Software</p>
          </section>
        
          <h2 className="text-3xl font-light mb-2 mt-10">Sobre Mim:</h2>
          <section id="Sobre" className="max-w-[800px] flex flex-col items-center sm:items-start">
              <p className="leading-7 sm:mr-15 text-base text-left">
                Olá! Eu sou Marcos Richelly, estudante de <span className="text-yellow-500">Ciência da Computação</span>.
              </p>
              <br></br>
              <p className=" leading-7 sm:mr-15 text-base text-left">
                Tenho facilidade em aprender, acredito que a <span className="text-yellow-500">Maestria</span> venha com Empenho, Esforço e Exposição.
              </p>
              <br></br>
              <p className="leading-7 sm:mr-15 text-base text-left">
                Não há <span className="text-yellow-500">Tempo</span> perdido se você ainda estiver vivo.
              </p>
              <br></br>
              <p className="leading-7 sm:mr-15 text-base text-left">
                Estou estudando desevolvimento <span className="text-yellow-500">Web</span>.
              </p>
              <br></br>
              <p className="leading-7 sm:mr-15 text-base text-left">
                Tenho muito interesse em <span className="text-yellow-500">back-end</span>, mas também gosto de <span className="text-yellow-500">front-end</span>.
              </p>
              <br></br>
              <p className="leading-7 sm:mr-15 text-base text-left">
                Meu objetivo é me tornar um <span className="text-yellow-500">Engenheiro de Software</span> completo, capaz de trabalhar em todas as camadas de uma aplicação.
              </p>
              <br></br>
          </section>


          <h2 className="text-3xl font-light mb-2 mt-10">Habilidades:</h2>
          <section id="Habilidades" className="max-w-[800px] flex flex-col items-center sm:items-start">
              <p className="leading-7 sm:mr-15 text-base text-left">
                Tenho conhecimento em <span className="text-yellow-500">HTML</span>, <span className="text-yellow-500">CSS</span>, <span className="text-yellow-500">JavaScript</span> e <span className="text-yellow-500">TypeScript</span>. 
                tambem estou versionando minhas atividades no Github utizando o git Bash.
              </p>
              <br></br>
              <p className=" leading-7 sm:mr-15 text-base text-left">
                Atualmente estou focando em <span className="text-yellow-500">React</span>, <span className="text-yellow-500">Next.js</span> e <span className="text-yellow-500">Tailwind CSS</span>. 
                  Buscando aprender mais sobre desenvolvimento Web.
              </p>
              <br></br>
              <p className="leading-7 sm:mr-15 text-base text-left">
                Também já desevolvi projetos em <span className="text-yellow-500">Python</span> e <span className="text-yellow-500">Java</span>. Acesse no meu github.
              </p>
              <br></br>
              <p className="leading-7 sm:mr-15 text-base text-left">
                Estou aberto a aprender novas tecnologias e linguagens de programação.
              </p>
              <br></br>
          </section>
          
          <br></br>

          <footer className="text-center text-sm text-gray-500 mt-20 space-y-0">
            <p className="text-gray-500 font-light">© 2025 Marcos Richelly</p>
            <p className="text-gray-500 font-light">Portfolio feito para fins de estudo utilizando NextJs e TailwindCSS</p>
            <br></br>
          </footer>
          <br></br>
        </div>

    </div>
  );
}

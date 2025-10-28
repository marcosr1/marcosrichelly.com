"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import { TypeAnimation } from 'react-type-animation';
import { useEffect } from "react";
import Card from "../app/components/Card/card";
import Nuvens from "./components/Card/Nuvens";


export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); 
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center w-full min-h-screen bg-gradient-to-b from-yellow-800 to-blue-800 text-white overflow-x-hidden">
      <Nuvens />
      {/* Header fixo */}
      <header className="w-full fixed top-0 left-0 z-50 backdrop-blur-md shadow-md flex justify-center items-center py-3 font-mono">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-8 py-3">
          {/* Ícones sociais centralizados no mobile */}
          <ul className="flex items-center justify-center w-full sm:w-auto gap-6 sm:gap-8">
            <a
              href="https://www.linkedin.com/in/marcos-richelly-6bb536336/"
              target="_blank"
              className="flex items-center hover:text-yellow-500 transition-all font-light"
            >
              <FaLinkedin size={18} className="mr-1" />
              <span className="hidden sm:block">Linkedin</span>
            </a>

            <a
              href="https://github.com/marcosr1"
              target="_blank"
              className="flex items-center hover:text-yellow-500 transition-all font-light"
            >
              <FaGithub size={18} className="mr-1" />
              <span className="hidden sm:block">Github</span>
            </a>

            <a
              href="https://www.instagram.com/_chellynk/"
              target="_blank"
              className="flex items-center hover:text-yellow-500 transition-all font-light"
            >
              <FaInstagram size={18} className="mr-1" />
              <span className="hidden sm:block">Instagram</span>
            </a>
          </ul>
        </div>
      </header>

      {/* Conteúdo principal */}
      <main className="relative z-10 flex flex-col items-center justify-center w-full max-w-5xl px-6 sm:px-10 pt-30 pb-20 text-center font-mono tracking-wide">
        {/* Apresentação */}
          <section
            id="apresentacao"
            className="min-h-[60vh] flex flex-col items-center justify-center space-y-4 sm:space-y-6 mt-10 backdrop-blur-xs">
            <p className="text-base sm:text-lg text-gray-300">Oi! Eu sou o</p>

            <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-4">
              <h1 className="text-3xl sm:text-5xl text-yellow-500 font-light">
                <TypeAnimation
                  sequence={["Marcos", 1500]}
                  wrapper="span"
                  speed={50}
                  repeat={0}
                  cursor={false}
                />
              </h1>

              <h1 className="text-3xl sm:text-5xl font-light text-white">
                <TypeAnimation
                  sequence={[1500, "Richelly :", 1500]}
                  wrapper="span"
                  speed={50}
                  repeat={0}
                  cursor={false}
                />
                <TypeAnimation
                  sequence={[1500, "D", 1500, "-}", 1500, ")", 1500]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </h1>
            </div>

            <p className="text-gray-300 text-base sm:text-lg font-light">
              Estudante de Ciência da Computação,
            </p>
            <p className="text-gray-300 text-base sm:text-lg font-light">
              e futuro Engenheiro de Software.
            </p>
          </section>

        {/* Sobre mim */}
          <section id="sobre" className="w-full max-w-3xl mx-auto px-4 sm:px-0 text-left sm:text-justify mt-45 space-y-4 backdrop-blur-xs">
              <h2 className="text-2xl sm:text-3xl text-yellow-500 font-light mb-4">
                Sobre Mim
              </h2>
              <p>
                Olá! Eu sou Marcos Richelly, estudante de{" "}
                <span className="text-yellow-500">Ciência da Computação</span>.
              </p>
              <p>
                Tenho facilidade em aprender e acredito que a{" "}
                <span className="text-yellow-500">maestria</span> vem com empenho,
                esforço e exposição.
              </p>
              <p>
                Não há <span className="text-yellow-500">tempo</span> perdido se
                você ainda estiver vivo.
              </p>
              <p>
                Estou estudando desenvolvimento{" "}
                <span className="text-yellow-500">web</span>, com foco em{" "}
                <span className="text-yellow-500">front-end</span> e{" "}
                <span className="text-yellow-500">back-end</span>.
              </p>
              <p>
                Meu objetivo é me tornar um{" "}
                <span className="text-yellow-500">Engenheiro de Software</span>{" "}
                completo.
              </p>
          </section>
        
        {/* Habilidades */}
        <section id="habilidades" className="w-full max-w-3xl mx-auto px-4 sm:px-0 text-left sm:text-justify mt-16 space-y-4 backdrop-blur-xs">
          <h2 className="text-2xl sm:text-3xl text-yellow-500 font-light mb-4">
            Habilidades
          </h2>
          <p>
            Tenho conhecimento em{" "}
            <span className="text-yellow-500">HTML</span>,{" "}
            <span className="text-yellow-500">CSS</span>,{" "}
            <span className="text-yellow-500">JavaScript</span> e{" "}
            <span className="text-yellow-500">TypeScript</span>. Também
            versiono meus projetos no{" "}
            <span className="text-yellow-500">GitHub</span> usando Git Bash.
          </p>
          <p>
            Atualmente estou focado em{" "}
            <span className="text-yellow-500">React</span>,{" "}
            <span className="text-yellow-500">Next.js</span> e{" "}
            <span className="text-yellow-500">TailwindCSS</span>, buscando
            dominar o desenvolvimento Web.
          </p>
          <p>
            Já desenvolvi projetos em{" "}
            <span className="text-yellow-500">Python</span> e{" "}
            <span className="text-yellow-500">Java</span> — acesse meu GitHub!
          </p>
          <p>
            Estou sempre aberto a aprender novas tecnologias e linguagens de
            programação.
          </p>
          {/* Cards de habilidades */}
          <div className="mt-12  w-full">
            <Card />
          </div>
        </section>
      </main>

      {/* Footer */}
        <footer className="mt-10 text-center text-gray-400 text-sm space-y-0 backdrop-blur-3xl mb-10 font-mono">
          <p>© 2025 Marcos Richelly</p>
          <p>
            Portfólio feito para fins de estudo utilizando{" "}
            <span className="text-yellow-500">Next.js</span> e{" "}
            <span className="text-yellow-500">TailwindCSS</span>.
          </p>
        </footer>
    </div>
  );
}

"use client";
import React, { useRef, useEffect, useState } from "react";

const projects = [
  {
    id: 1,
    title: "Portfolio Next.js",
    description: "Portfólio pessoal feito com Next.js, TailwindCSS e React Icons.",
    languages: ["JavaScript", "React", "Next.js", "TailwindCSS"],
    link: "https://github.com/marcosr1/marcosrichelly.com",
  },
  {
    id: 3,
    title: "API de Açaí",
    description: "Backend feito em Java com Spring Boot para consumir banco de dados de e mandar para o front componentes de um copo de açaí.",
    languages: ["Java", "Spring Boot", "SQL"],
    link: "https://github.com/marcosr1/ApiAcaiteria",
  },
  {
    id: 4,
    title: "Web Site de pedidos de açai",
    description: "Fazer o pedidodo copo de açai e enviar no whatsapp da loja de açai (OBS: Não fazer pedido completo no deplpy!!!)",
    languages: ["JavaScript", "React", "CSS"],
    link: "https://github.com/marcosr1/a-aiteria",
    link1: "https://acaiteria-six.vercel.app/",
  },
];

export default function AutoSlider() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
  if (!sliderRef.current) return;

  setIsDragging(true);

  const pageX = "touches" in e ? e.touches[0].pageX : e.pageX;
  setStartX(pageX - sliderRef.current.offsetLeft);
  setScrollLeft(sliderRef.current.scrollLeft);
};

const handleMouseMove = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
  if (!isDragging || !sliderRef.current) return;
  e.preventDefault();

  const pageX = "touches" in e ? e.touches[0].pageX : e.pageX;
  const walk = (pageX - startX) * 2;
  sliderRef.current.scrollLeft = scrollLeft - walk;
};

const handleMouseUp = () => setIsDragging(false);
const handleMouseLeave = () => setIsDragging(false);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let scrollAmount = 0;
    const speed = 1;
    let lastTime = 0;
    let requestId: number;

    const animate = (time: number) => {
      if (!lastTime) lastTime = time;
      const delta = time - lastTime;
      lastTime = time;

      if (!isPaused) {
        scrollAmount += speed * delta * 0.06;

        if (scrollAmount >= slider.scrollWidth / 2) {
          scrollAmount = 0;
        }

        slider.scrollLeft = scrollAmount;
      }

      requestId = requestAnimationFrame(animate);
    };

    requestId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(requestId);
  }, [isPaused]);

  return (
    <div className="w-full max-w-12xl mx-auto px-4 py-8">
      <h2 className="text-center text-2xl sm:text-3xl font-semibold text-yellow-500 mb-6">
        Meus Projetos
      </h2>
      
      <div
      ref={sliderRef}
      className="flex gap-4 overflow-x-hidden hide-scrollbar"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={(e) => {
                            setIsPaused(false);
                            handleMouseLeave();
                          }}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      onTouchStart={handleMouseDown}
      onTouchMove={handleMouseMove}
      onTouchEnd={handleMouseUp}
      >
        {[...projects, ...projects].map((project, index) => (
          <div
            key={index}
            className="flex flex-col justify-between flex-shrink-0 w-[100%] sm:w-[300px] md:w-[350px] lg:w-[380px] backdrop-blur-md p-8 hover:scale-102">
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-yellow-400 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-300 text-sm sm:text-base mb-3">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.languages.map((lang, idx) => (
                  <span
                    key={idx}
                    className="bg-yellow-500 text-black text-xs px-2 py-1 rounded-full"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>

            {/* Botão para link */}
             <div className="mt-4 flex flex-col gap-1">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full text-center bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 rounded-lg transition-colors"
                >
                  Ver no GitHub
                </a>
                {project.link1 && (
                  <a
                    href={project.link1}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block w-full text-center bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 rounded-lg transition-colors"
                  >
                    Ver Online
                  </a>
                )}
              </div>
          </div>
        ))}
      </div>
    </div>
  );
}

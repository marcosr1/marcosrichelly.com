"use client";
import { FiCloud } from "react-icons/fi";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Nuvens() {
  const [nuvens, setNuvens] = useState<
    { top: string; size: number; opacity: string; duration: number; left: string }[]
  >([]);
  const [show, setShow] = useState(false);
  useEffect(() => {
    const novasNuvens = [
      { top: "10%", size: 60, opacity: "70", duration: 60 },
      { top: "20%", size: 90, opacity: "60", duration: 70 },
      { top: "25%", size: 100, opacity: "50", duration: 85 },
      { top: "33%", size: 60, opacity: "40", duration: 65 },
      { top: "18%", size: 90, opacity: "60", duration: 95 },
      { top: "55%", size: 70, opacity: "50", duration: 75 },
      { top: "60%", size: 56, opacity: "40", duration: 90 },
      { top: "75%", size: 90, opacity: "60", duration: 55 },
      { top: "48%", size: 80, opacity: "50", duration: 86 },
      { top: "86%", size: 70, opacity: "40", duration: 90 },
      { top: "90%", size: 90, opacity: "60", duration: 75 },
      { top: "57%", size: 110, opacity: "50", duration: 60 },
    ].map((n) => ({
      ...n,
      left: `${Math.random() * 100}%`,
    }));
    setNuvens(novasNuvens);

    const timer = setTimeout(() => setShow(true), 100);
    return () => clearTimeout(timer);
  }, []);

  if (nuvens.length === 0) return null;

  return (
    <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
      {nuvens.map((nuvem, index) => (
        <motion.div
          key={index}
          className="absolute"
          style={{ top: nuvem.top, left: nuvem.left }}
          animate={{ x: ["-120%", "120%"],  y: [0, -10, 0] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: nuvem.duration,
            ease: "linear",
          }}
        >
          <FiCloud
            className={`text-white/${nuvem.opacity} text-gray-400`}
            style={{ width: nuvem.size, height: nuvem.size }}
          />
        </motion.div>
      ))}
      <div className="hidden md:fixed md:right-5 md:top-0 md:h-screen md:flex md:flex-col md:items-end md:justify-start md:overflow-hidden md:pointer-events-none md:mt-5 md:mr-5">
        {["|","|"].map((letter, index) => (
          <span
            key={index}
            className={`inline-block text-2xl font-extrabold text-yellow-500`}
            style={{  opacity: 0, animation: `fall 3s linear ${index * 0.5}s infinite`,}}>
            {letter}
          </span>
        ))}
        <div className="hidden md:fixed md:right-5 md:top-0 md:h-screen md:flex md:flex-col md:items-end md:justify-start md:overflow-hidden md:pointer-events-none md:mt-5 md:mr-15">
          {["|"].map((letter, index) => (
            <span
              key={index}
              className={`inline-block text-2xl font-extrabold text-yellow-500`}
              style={{  opacity: 0, animation: `fall 5s linear ${index * 0.5}s infinite`,}}>
              {letter}
            </span>
          ))}
        </div>
        <style jsx>{`
          @keyframes fall {
            0% { 
                transform: translateY(-50px);
                opacity: 0; 
                }
            10% {
              opacity: 1; 
            }
            15% {
              opacity: 1; 
            }
            25% {
              opacity: 0; 
            }
            30% {
              opacity: 1; 
            }
            99% {
              opacity: 0; 
            }
            100% { 
              transform: translateY(100vh);
              opacity: 1; 
              }
          }`}
        </style>
      </div>
      
    </div>
  );
}

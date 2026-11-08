"use client";

import "./globals.css";
//import { Home, Cpu } from "lucide-react";
//import { Home, Cpu, DollarSign } from "lucide-react";
//import { Home, Cpu, DollarSign, Settings } from "lucide-react";
import { Home, Cpu, DollarSign, Settings, Activity } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // Este hook detecta en qué página estamos actualmente
  const pathname = usePathname();

  return (
    <html lang="es">
      {/* Fondo oscuro uniforme para toda la aplicación */}
      <body className="bg-[#0b132b] text-white font-sans flex flex-col md:flex-row min-h-screen overflow-hidden">
        
        {/* Sidebar (Menú Lateral) - Desktop */}
        <nav className="hidden md:flex flex-col w-64 bg-[#1c2541] border-r border-white/5 px-4 py-8 shadow-lg z-10">
          <div className="text-2xl font-bold text-white mb-10 text-center flex items-center justify-center gap-2">
            <span className="text-[#11CAA0]">💧</span> RE-UBICA
          </div>
          <div className="flex flex-col gap-2">
            {/* Botón Inicio */}
            <Link 
              href="/" 
              className={`flex items-center gap-3 px-4 py-3 rounded-xl font-semibold transition-colors ${
                pathname === '/' ? 'text-[#11CAA0] bg-[#11CAA0]/10' : 'text-[#8d99ae] hover:text-white hover:bg-white/5'
              }`}
            >
              <Home size={20} /> Inicio
            </Link>

            {/* Botón Precios */}
            <Link 
              href="/precios" 
              className={`flex items-center gap-3 px-4 py-3 rounded-xl font-semibold transition-colors ${
                pathname === '/precios' ? 'text-[#11CAA0] bg-[#11CAA0]/10' : 'text-[#8d99ae] hover:text-white hover:bg-white/5'
              }`}
            >
              <DollarSign size={20} /> Precios
            </Link>
            {/* Botón Programación */}
            <Link 
              href="/programacion" 
              className={`flex items-center gap-3 px-4 py-3 rounded-xl font-semibold transition-colors ${
                pathname === '/programacion' ? 'text-[#11CAA0] bg-[#11CAA0]/10' : 'text-[#8d99ae] hover:text-white hover:bg-white/5'
              }`}
            >
              <Settings size={20} /> Ajustes
            </Link>

            {/* Botón Máquina */}
            <Link 
              href="/maquina" 
              className={`flex items-center gap-3 px-4 py-3 rounded-xl font-semibold transition-colors ${
                pathname === '/maquina' ? 'text-[#11CAA0] bg-[#11CAA0]/10' : 'text-[#8d99ae] hover:text-white hover:bg-white/5'
              }`}
            >
              <Cpu size={20} /> Monitoreo

            </Link>
            {/* Botón Proceso */}
            <Link 
              href="/proceso" 
              className={`flex items-center gap-3 px-4 py-3 rounded-xl font-semibold transition-colors ${
                pathname === '/proceso' ? 'text-[#11CAA0] bg-[#11CAA0]/10' : 'text-[#8d99ae] hover:text-white hover:bg-white/5'
              }`}
            >
              <Activity size={20} /> Proceso
            </Link>
          </div>
        </nav>

        {/* Contenedor Principal (Donde van las pantallas) */}
        <div className="flex-1 pb-20 md:pb-0 h-screen overflow-y-auto">
          {children}
        </div>

        {/* Menú Inferior - Mobile */}
        <nav className="md:hidden fixed bottom-0 w-full bg-[#1c2541] border-t border-white/5 flex justify-around px-2 py-3 text-xs z-50 shadow-[0_-5px_20px_rgba(0,0,0,0.5)]">
          <Link 
            href="/" 
            className={`flex flex-col items-center w-16 transition-colors ${
              pathname === '/' ? 'text-[#11CAA0]' : 'text-[#8d99ae]'
            }`}
          >
            <Home size={22} className="mb-1" /> Inicio
          </Link>

          {/* Botón Precios Mobile */}
          <Link 
            href="/precios" 
            className={`flex flex-col items-center w-16 transition-colors ${
              pathname === '/precios' ? 'text-[#11CAA0]' : 'text-[#8d99ae]'
            }`}
          >
            <DollarSign size={22} className="mb-1" /> Precios
          </Link>

          {/* Botón Programación Mobile */}
          <Link 
            href="/programacion" 
            className={`flex flex-col items-center w-16 transition-colors ${
              pathname === '/programacion' ? 'text-[#11CAA0]' : 'text-[#8d99ae]'
            }`}
          >
            <Settings size={22} className="mb-1" /> Ajustes
          </Link>


          <Link 
            href="/maquina" 
            className={`flex flex-col items-center w-16 transition-colors ${
              pathname === '/maquina' ? 'text-[#11CAA0]' : 'text-[#8d99ae]'
            }`}
          >
            <Cpu size={22} className="mb-1" /> Máquina
          </Link>
          {/* Botón Proceso Mobile */}
          <Link 
            href="/proceso" 
            className={`flex flex-col items-center w-16 transition-colors ${
              pathname === '/proceso' ? 'text-[#11CAA0]' : 'text-[#8d99ae]'
            }`}
          >
            <Activity size={22} className="mb-1" /> Proceso
          </Link>
        </nav>
      </body>
    </html>
  );
}
export default function Programacion() {
  return (
    <main className="p-6 md:p-10 max-w-3xl mx-auto h-full overflow-y-auto">
      
      {/* Encabezado */}
      <header className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-white">Programación</h1>
        <p className="text-sm text-[#8d99ae] mt-1">Define cuándo y cómo debe iniciar el proceso.</p>
      </header>

      {/* Tarjeta de Estado Automático (Diseño basado en Figma) */}
      <section className="bg-[#11CAA0] rounded-3xl p-6 md:p-8 mb-8 shadow-[0_10px_30px_rgba(17,202,160,0.15)] text-black">
        <div className="bg-black/20 text-black px-3 py-1 rounded-md text-[10px] font-bold tracking-widest uppercase inline-block mb-3">
          Proceso Automático
        </div>
        <h2 className="text-3xl font-bold mb-2">Activado</h2>
        <p className="text-black/80 text-sm font-medium">
          La producción inicia cuando se cumplen litros mínimos y horario permitido.
        </p>
      </section>

      {/* Sección de Condiciones */}
      <section>
        <h3 className="text-xl font-bold text-white mb-4">Condiciones</h3>
        
        {/* Lista de parámetros */}
        <div className="bg-[#1c2541] rounded-2xl shadow-lg border border-white/5 overflow-hidden">
          
          <div className="flex justify-between items-center p-5 border-b border-white/5">
            <span className="text-[#8d99ae] font-medium text-sm">Litros mínimos para iniciar</span>
            <span className="text-white font-bold">20 L</span>
          </div>
          
          <div className="flex justify-between items-center p-5 border-b border-white/5">
            <span className="text-[#8d99ae] font-medium text-sm">Horario permitido</span>
            <span className="text-white font-bold">08:00 - 18:00</span>
          </div>
          
          <div className="flex justify-between items-center p-5">
            <span className="text-[#8d99ae] font-medium text-sm">Inicio automático</span>
            <span className="text-[#11CAA0] font-bold">Activado</span>
          </div>
          
        </div>

        {/* Selectores de Modo Día/Noche */}
        <div className="grid grid-cols-2 gap-4 mt-6">
          <button className="bg-[#11CAA0]/10 border-2 border-[#11CAA0] text-[#11CAA0] rounded-xl p-4 flex flex-col items-center justify-center transition-colors">
            <span className="mb-2 text-2xl">☀️</span>
            <span className="text-sm font-bold">Modo día</span>
            <span className="text-[10px] font-medium mt-1 uppercase tracking-wider">Activo</span>
          </button>
          
          <button className="bg-[#1c2541] border-2 border-transparent text-[#8d99ae] hover:bg-white/5 rounded-xl p-4 flex flex-col items-center justify-center transition-colors shadow-sm">
            <span className="mb-2 text-2xl opacity-50">🌙</span>
            <span className="text-sm font-bold">Modo noche</span>
            <span className="text-[10px] font-medium mt-1 uppercase tracking-wider opacity-60">Apagado</span>
          </button>
        </div>

        {/* Botón de Guardar */}
        <button className="w-full bg-white text-black font-bold py-4 rounded-xl mt-8 hover:bg-gray-200 transition-colors shadow-lg">
          Guardar programación
        </button>
      </section>

    </main>
  );
}
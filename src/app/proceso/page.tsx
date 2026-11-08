export default function ProcesoMezcla() {
  return (
    <main className="p-6 md:p-10 max-w-3xl mx-auto h-full overflow-y-auto">
      
      {/* Encabezado */}
      <header className="mb-6">
        <h1 className="text-2xl md:text-3xl font-bold text-white">Proceso de mezcla</h1>
        <p className="text-sm text-[#8d99ae] mt-1">Seguimiento del lote de producción.</p>
      </header>

      {/* Tarjeta Lote Actual */}
      <section className="bg-gradient-to-r from-blue-500 to-cyan-400 rounded-3xl p-6 md:p-8 mb-6 shadow-lg shadow-blue-500/20 text-white">
        <h3 className="text-xs font-bold tracking-wider uppercase mb-1 opacity-90">Lote Actual</h3>
        <h2 className="text-3xl md:text-4xl font-bold mb-2">En proceso</h2>
        <p className="text-sm font-medium opacity-90">Tiempo restante estimado: 12 minutos.</p>
      </section>

      {/* Grid para Etapas e Insumos */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Etapas del Proceso */}
        <section className="bg-[#1c2541] rounded-3xl p-6 shadow-lg border border-white/5">
          <h3 className="text-lg font-bold text-white mb-1">Etapas del proceso</h3>
          <p className="text-sm text-[#8d99ae] mb-5">
            Temperatura: <span className="text-orange-400 font-bold">42°C</span><br/>
            <span className="text-blue-400 font-bold">Mezcla activa</span>
          </p>

          <div className="space-y-5">
            <div>
              <div className="flex justify-between text-sm font-bold mb-1 text-[#11CAA0]">
                <span>• Carga de aceite completada</span>
                <span>100%</span>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-sm font-bold mb-2 text-orange-400">
                <span>• Mezcla con potasa en proceso</span>
                <span>71%</span>
              </div>
              <div className="w-full bg-black/50 rounded-full h-2">
                <div className="bg-orange-400 h-2 rounded-full" style={{ width: '71%' }}></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-sm font-bold mb-2 text-blue-400">
                <span>• Agua destilada agregado</span>
                <span>40%</span>
              </div>
              <div className="w-full bg-black/50 rounded-full h-2">
                <div className="bg-blue-400 h-2 rounded-full" style={{ width: '40%' }}></div>
              </div>
            </div>

            <div className="text-sm font-medium text-[#8d99ae] space-y-2 pt-2">
              <p>• Acido cítrico pendiente</p>
              <p>• Conservador cosmético pendiente</p>
              <p>• Fragancia pendiente</p>
            </div>
          </div>
        </section>

        {/* Insumos */}
        <section className="bg-[#1c2541] rounded-3xl p-6 shadow-lg border border-white/5">
          <div className="flex justify-between items-center mb-5">
            <h3 className="text-lg font-bold text-white">Insumos</h3>
            <span className="text-xs text-[#8d99ae]">Niveles</span>
          </div>

          <div className="space-y-4">
            {/* Potasa */}
            <div>
              <div className="flex justify-between text-xs font-bold text-white mb-1">
                <span>Potasa cáustica</span>
                <span>30 / 40 L</span>
              </div>
              <div className="w-full bg-black/50 rounded-full h-1.5">
                <div className="bg-orange-500 h-1.5 rounded-full" style={{ width: '75%' }}></div>
              </div>
            </div>

            {/* Agua destilada */}
            <div>
              <div className="flex justify-between text-xs font-bold text-white mb-1">
                <span>Agua destilada</span>
                <span>40 / 40 L</span>
              </div>
              <div className="w-full bg-black/50 rounded-full h-1.5">
                <div className="bg-cyan-400 h-1.5 rounded-full" style={{ width: '100%' }}></div>
              </div>
            </div>

            {/* Fragancia */}
            <div>
              <div className="flex justify-between text-xs font-bold text-white mb-1">
                <span>Fragancia</span>
                <span>6 / 10 L</span>
              </div>
              <div className="w-full bg-black/50 rounded-full h-1.5">
                <div className="bg-purple-500 h-1.5 rounded-full" style={{ width: '60%' }}></div>
              </div>
            </div>

            {/* Acido citrico */}
            <div>
              <div className="flex justify-between text-xs font-bold text-white mb-1">
                <span>Acido cítrico</span>
                <span>1000 / 4000 Gr</span>
              </div>
              <div className="w-full bg-black/50 rounded-full h-1.5">
                <div className="bg-yellow-400 h-1.5 rounded-full" style={{ width: '25%' }}></div>
              </div>
            </div>

            {/* Colorante */}
            <div>
              <div className="flex justify-between text-xs font-bold text-white mb-1">
                <span>Colorante para colores</span>
                <span>20 / 40 L</span>
              </div>
              <div className="w-full bg-black/50 rounded-full h-1.5">
                <div className="bg-pink-500 h-1.5 rounded-full" style={{ width: '50%' }}></div>
              </div>
            </div>

            {/* Conservador */}
            <div>
              <div className="flex justify-between text-xs font-bold text-white mb-1">
                <span>Conservador cosmético</span>
                <span>15 / 40 L</span>
              </div>
              <div className="w-full bg-black/50 rounded-full h-1.5">
                <div className="bg-amber-700 h-1.5 rounded-full" style={{ width: '37%' }}></div>
              </div>
            </div>
          </div>
          
          <button className="w-full bg-white/5 border border-white/10 text-white font-bold py-3 rounded-xl mt-6 hover:bg-white/10 transition-colors text-sm">
            Proceso Interno
          </button>
        </section>

      </div>
    </main>
  );
}
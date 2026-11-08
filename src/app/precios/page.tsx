export default function Precios() {
  return (
    <main className="p-6 md:p-10 max-w-3xl mx-auto h-full overflow-y-auto">
      
      {/* Encabezado */}
      <header className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-white">Precios</h1>
        <p className="text-sm text-[#8d99ae] mt-1">Configura cuánto compra y vende la máquina.</p>
      </header>

      {/* Tarjeta Principal de Control de Precios */}
      <section className="bg-[#11CAA0] rounded-3xl p-6 md:p-8 shadow-[0_10px_30px_rgba(17,202,160,0.15)] relative overflow-hidden">
        
        {/* Etiqueta superior */}
        <div className="bg-black/20 text-black px-3 py-1 rounded-md text-[10px] font-bold tracking-widest uppercase inline-block mb-3">
          Configuración Económica
        </div>
        
        <h2 className="text-3xl font-bold text-black mb-2">Control de precios</h2>
        <p className="text-black/70 text-sm mb-6 font-medium">
          Estos valores afectan compras, ventas y estadísticas.
        </p>

        {/* Lista de Valores Actuales */}
        <div className="space-y-3">
          
          <div className="bg-white rounded-xl p-4 flex justify-between items-center shadow-sm">
            <span className="text-gray-700 font-bold text-sm">Precio de compra de aceite</span>
            <span className="text-gray-900 font-black">$10.00 / L</span>
          </div>

          <div className="bg-white rounded-xl p-4 flex justify-between items-center shadow-sm">
            <span className="text-gray-700 font-bold text-sm">Precio de venta de jabón</span>
            <span className="text-gray-900 font-black">$35.00 / L</span>
          </div>

          <div className="bg-white rounded-xl p-4 flex justify-between items-center shadow-sm">
            <span className="text-gray-700 font-bold text-sm">Inversión estimada hoy</span>
            <span className="text-gray-900 font-black">$440.00</span>
          </div>

          <div className="bg-white rounded-xl p-4 flex justify-between items-center shadow-sm">
            <span className="text-gray-700 font-bold text-sm">Ingreso estimado hoy</span>
            <span className="text-gray-900 font-black">$1,470.00</span>
          </div>

          {/* Resumen de Ganancia (Destacado) */}
          <div className="bg-white rounded-xl p-5 shadow-md mt-4 border-l-4 border-[#0b132b]">
            <span className="text-gray-500 font-bold text-xs uppercase tracking-wider block mb-1">
              Ganancia estimada actual
            </span>
            <span className="text-3xl font-black text-gray-900">$1,030.00</span>
          </div>

        </div>

        {/* Botón de Guardar */}
        <button className="w-full bg-[#0b132b] text-white font-bold py-4 rounded-xl mt-6 hover:bg-[#1c2541] transition-colors shadow-lg">
          Guardar configuración
        </button>
        
      </section>
    </main>
  );
}
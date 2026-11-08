export default function Inicio() {
  return (
    <main className="p-6 h-full overflow-y-auto">
      
     {/* Encabezado */}
      <header className="mb-6">
        <div className="flex justify-between items-start">
          <div>
            {/* Cambiamos a text-white y text-[#8d99ae] */}
            <h1 className="text-2xl font-bold text-white">Hola, Administrador</h1>
            <p className="text-sm text-[#8d99ae]">Monitoreo remoto del sistema</p>
          </div>
        </div>
        <div className="mt-3 inline-block bg-[#11CAA0]/20 text-[#11CAA0] px-3 py-1 rounded-full text-xs font-bold border border-[#11CAA0]/30 shadow-[0_0_10px_rgba(17,202,160,0.2)]">
          🟢 Máquina en línea
        </div>
      </header>

      {/* Sección: Stock de contenedores */}
      <section className="mb-6">
        <h2 className="text-lg font-bold mb-3">Stock de contenedores</h2>
        <div className="grid grid-cols-2 gap-4">
          {/* Tarjeta Recolector */}
          <div className="bg-indigo-700 text-white p-4 rounded-2xl shadow-md relative overflow-hidden">
            <div className="absolute -right-4 -top-4 bg-indigo-600 w-16 h-16 rounded-full opacity-50"></div>
            <div className="bg-indigo-900/50 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold mb-2">A</div>
            <div className="text-2xl font-bold">42 / <span className="text-sm font-normal">80 L</span></div>
            <div className="text-xs text-indigo-200 mb-3">Recolector 1</div>
            <div className="w-full bg-indigo-900 rounded-full h-1.5">
              <div className="bg-white h-1.5 rounded-full" style={{ width: '52%' }}></div>
            </div>
          </div>

          {/* Tarjeta Depósito */}
          <div className="bg-purple-600 text-white p-4 rounded-2xl shadow-md relative overflow-hidden">
            <div className="absolute -right-4 -top-4 bg-purple-500 w-16 h-16 rounded-full opacity-50"></div>
            <div className="bg-purple-900/50 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold mb-2">J</div>
            <div className="text-2xl font-bold">124 / <span className="text-sm font-normal">180 L</span></div>
            <div className="text-xs text-purple-200 mb-3">Depósito</div>
            <div className="w-full bg-purple-900 rounded-full h-1.5 flex">
              <div className="bg-blue-400 h-1.5 rounded-l-full" style={{ width: '40%' }}></div>
              <div className="bg-white h-1.5 rounded-r-full" style={{ width: '28%' }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección: Balance del día */}
      <section className="mb-6">
        <h2 className="text-lg font-bold mb-3">Balance del día</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-orange-500 text-white p-4 rounded-2xl shadow-md">
            <div className="bg-orange-700/30 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold mb-1">A</div>
            <div className="text-2xl font-bold">20 L</div>
            <div className="text-xs">Aceite comprado</div>
            <div className="text-[10px] text-orange-200 mt-1">$10.00 por litro</div>
          </div>
          
          <div className="bg-blue-500 text-white p-4 rounded-2xl shadow-md">
            <div className="bg-blue-700/30 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold mb-1">J</div>
            <div className="text-2xl font-bold">42 L</div>
            <div className="text-xs">Jabón vendido</div>
            <div className="text-[10px] text-blue-200 mt-1">$35.00 por litro</div>
          </div>
        </div>
      </section>

      {/* Sección: Actividad reciente */}
      <section>
        <h2 className="text-lg font-bold mb-3">Actividad reciente</h2>
        <div className="space-y-3">
          <div className="bg-white border border-gray-100 p-3 rounded-xl flex gap-3 items-start shadow-sm">
            <div className="bg-green-100 text-green-600 rounded-full p-2 mt-1">✓</div>
            <div>
              <div className="flex justify-between items-center w-full">
                <h4 className="text-sm font-bold">Error solucionado</h4>
                <span className="text-[10px] text-gray-400">Hace 40 min.</span>
              </div>
              <p className="text-xs text-gray-500 mt-1">El sistema corrigió automáticamente una falla temporal del sensor.</p>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
export default function MonitoreoMaquina() {
  return (
    <main className="p-6 md:p-10 max-w-5xl mx-auto h-full">
      
      {/* Encabezado */}
      <header className="mb-6">
        <h1 className="text-2xl font-bold text-white-900">Proceso interno</h1>
        <p className="text-sm text-white-500">Supervisión de motores y sistema de mezcla.</p>
      </header>

      {/* Banner de Estado General */}
      <section className="mb-8">
        <div className="bg-gradient-to-r from-blue-400 to-blue-500 rounded-3xl p-6 md:p-8 text-white shadow-lg shadow-blue-200">
          <h3 className="text-xs font-bold tracking-wider uppercase mb-1 opacity-90">Estado General</h3>
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Sistema trabajando</h2>
          <p className="text-sm md:text-base opacity-90">Los componentes internos están operando correctamente.</p>
        </div>
      </section>

      {/* Componentes Activos */}
      <section>
        <h3 className="text-xl font-bold text-white-900 mb-4">Componentes activos</h3>
        
        {/* Grid responsivo: 1 columna en móvil, 2 columnas en desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          
          {/* Bomba peristáltica */}
          <div className="bg-white border border-gray-100 rounded-2xl p-4 flex gap-4 items-center shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-green-500 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold shrink-0 shadow-inner">
              1
            </div>
            <div className="flex-1">
              <h4 className="font-bold text-gray-900">Bomba peristáltica</h4>
              <p className="text-xs text-gray-500 mb-2">Dosificación de jabón líquido.</p>
              <div className="flex gap-2 text-[10px] font-bold">
                <span className="text-gray-400">Estado:</span>
                <span className="bg-green-500 text-white px-2 py-0.5 rounded">Activo</span>
                <span className="text-gray-300">Inactivo</span>
              </div>
            </div>
          </div>

          {/* Bomba dosificadora */}
          <div className="bg-white border border-gray-100 rounded-2xl p-4 flex gap-4 items-center shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-green-500 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold shrink-0 shadow-inner">
              1
            </div>
            <div className="flex-1">
              <h4 className="font-bold text-gray-900">Bomba dosificadora</h4>
              <p className="text-xs text-gray-500 mb-2">Control de mezcla.</p>
              <div className="flex gap-2 text-[10px] font-bold">
                <span className="text-gray-400">Estado:</span>
                <span className="bg-green-500 text-white px-2 py-0.5 rounded">Activo</span>
                <span className="text-gray-300">Inactivo</span>
              </div>
            </div>
          </div>

          {/* Bomba para succión */}
          <div className="bg-white border border-gray-100 rounded-2xl p-4 flex gap-4 items-center shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold shrink-0 shadow-inner">
              2
            </div>
            <div className="flex-1">
              <h4 className="font-bold text-gray-900">Bomba para succión</h4>
              <p className="text-xs text-gray-500 mb-2">Transferencia interna de líquidos.</p>
              <div className="flex gap-2 text-[10px] font-bold">
                <span className="text-gray-400">Estado:</span>
                <span className="bg-green-500 text-white px-2 py-0.5 rounded">Activo</span>
                <span className="text-gray-300">Inactivo</span>
              </div>
            </div>
          </div>

          {/* Bomba diafragma */}
          <div className="bg-white border border-gray-100 rounded-2xl p-4 flex gap-4 items-center shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-orange-500 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold shrink-0 shadow-inner">
              3
            </div>
            <div className="flex-1">
              <h4 className="font-bold text-gray-900">Bomba diafragma</h4>
              <p className="text-xs text-gray-500 mb-2">Succión y movimiento del aceite.</p>
              <div className="flex gap-2 text-[10px] font-bold">
                <span className="text-gray-400">Estado:</span>
                <span className="bg-green-500 text-white px-2 py-0.5 rounded">Activo</span>
                <span className="text-gray-300">Inactivo</span>
              </div>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
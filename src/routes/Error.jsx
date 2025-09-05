
const Error = () => {
  return (
    <div className="bg-gray-100 min-h-[calc(100vh-140px)] flex flex-col items-center justify-center p-8">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-blue-800 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Página não encontrada</h2>
        <p className="text-gray-600 mb-8">A página que você está procurando não existe ou foi movida.</p>

        <div className="space-x-4">
          <Link
            href="/"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            Voltar ao Home
          </Link>
          <Link
            href="/calculadora"
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            Ir para Calculadora
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Error;
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Error  from './routes/Error'
import Home from './routes/Home'
import Footer from './components/Footer'

function App() {

  return (
    // Habilita a navegação por rotas na aplicação
    <BrowserRouter>
    {/* Chamando o componente Nav */}
    <Nav/>
    <main>
      {/* Gerencia a exibição dos componentes com base na url */}
      <Routes>
        {/* Rota para chamar urls não encontradas */}
        <Route path='*' element={<Error/>}/>

        {/* Rota para chamar o Home */}
        <Route path='/' element={<Home/>}/>

        {/*Rota para chamar a Calculadora*/}
        <Route path='/calculator' element={<CalculatorPage/>}/>

      </Routes>
    </main>
    <Footer/>

    </BrowserRouter>
  )
}

export default App

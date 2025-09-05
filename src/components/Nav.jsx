import { Link } from "react-router-dom"

const Nav = () => {
  return (
    <header className="bg-gray-800 text-white p-4 shadow-md">
        <nav className="container mx-auto flex justify-between items-center">
            <ul className="flex space-x-4"> 
                <li className="list-none">
                    <Link to="/" className="hover:text-yellow-300 transition-colors duration-300">Home</Link>
                </li>
                <li className="list-none">
                    <Link to="/calculator" className="hover:text-yellow-300 transition-colors duration-300">Calculadora</Link>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Nav
import { Link } from "react-router-dom"
import Logo from "../assets/logo.png"

const Nav = () => {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="hover:text-blue-200 hover:underline transition-colors">
          Home
        </Link>

        <div className="flex items-center">
            <img src={Logo} alt="logo" className="h-6 w-auto" />
        </div>

        <Link to="/calculator" className="hover:text-blue-200 hover:underline transition-colors">
          Calculadora
        </Link>
      </div>
    </nav>
  )
}

export default Nav


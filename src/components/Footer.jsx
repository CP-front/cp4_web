import { FaCalculator } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-white p-6 flex flex-col items-center justify-center space-y-4">
      <h3>&copy; 2025 - Todos o direitos reservados</h3>
        <div className="flex space-x-5">
        <a>
          <FaCalculator className="w-10 h-10 hover:text-blue-400"/>
        </a>
        </div>
    </footer>
  )
}

export default Footer
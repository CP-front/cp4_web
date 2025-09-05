import { useState } from "react";
import { FaCalculator } from "react-icons/fa6";

const Footer = () => {
  // criando animaçõ de click no icone
  const [clickCount, setClickCount] = useState(0);
  const [animKey, setAnimKey] = useState(0); 

  const handleClick = () => {
    setClickCount(prev => (prev >= 10 ? 1 : prev + 1));
    setAnimKey(prev => prev + 1);
  };

  return (
    <footer className="bg-gray-950 text-white p-6 flex flex-col items-center justify-center space-y-4 relative">
      <h3>&copy; 2025 - Todos os direitos reservados</h3>

      <div className="flex space-x-5">
        <div className="relative">
          <FaCalculator onClick={handleClick} className="w-10 h-10 cursor-pointer transition-colors duration-150 hover:text-blue-400 active:text-white"/>

           <span key={animKey} className="absolute left-1/2 -translate-x-1/2 -top-3 text-white font-bold select-none opacity-100 -translate-y-0 transition-all duration-500 ease-out"
            style={{ animation: "fadeUp 0.5s forwards" }}>
            {clickCount}
            </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

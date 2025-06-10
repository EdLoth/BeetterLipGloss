import { motion } from "framer-motion"
import { FaShoppingCart } from "react-icons/fa"

const CarrinhoButton = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.button
      className="flex items-center gap-2 
                 text-white font-extrabold py-3 px-6 
                 rounded-full text-md shadow-2xl 
                 transition-all duration-300 
                 bg-[length:200%_200%] 
                 bg-gradient-to-r from-[#8b0039] via-[#cc0044] to-[#800b0b] 
                 cursor-pointer"
      animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
      transition={{
        duration: 6,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
      }}
      onClick={() => console.log("Vamos pro carrinho! 🛒")}
    >
      <FaShoppingCart className="text-xl" />
      {children}
    </motion.button>
  )
}

export default CarrinhoButton

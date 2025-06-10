import { motion } from "framer-motion";
import CarrinhoButton from "./Button"; // ajuste o caminho conforme sua estrutura
import product from "/7.jpg";

const CardProduct = () => {
  return (
    <div className="relative bg-white w-[750px] h-[450px] overflow-hidden flex items-center shadow-xl rounded-md">
      {/* Texto */}
      <motion.div
        className="absolute left-55 -translate-x-1/2 z-10 text-justify"
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <span className="inline-block font-bold text-[#800b0b] bg-cornflowerblue py-1 text-xl rounded-full mb-2">
          EXCLUSIVE
        </span>
        <h1 className="text-2xl font-bold text-[#111] leading-tight">
          Beetter Lip Gloss
        </h1>
        <p className="text-sm text-gray-500 mt-3 w-[280px] leading-relaxed">
          O brilho irresistível de um gloss com pigmentação intensa e acabamento
          vinílico. Traz sofisticação e ousadia em um só produto
          — perfeito para destacar sua beleza natural com atitude.
        </p>

        <span className="inline-block text-[#800b0b] bg-cornflowerblue py-1 text-2xl rounded-full mb-2">
          R$49,90
        </span>
        {/* Botão com preço e ação */}
        <div className="mt-4 text-sm">
          <CarrinhoButton>Levar esse brilho pro carrinho ✨</CarrinhoButton>
        </div>
      </motion.div>

      {/* Imagem */}
      <motion.img
        src={product}
        alt="product"
        className="absolute right-[0px] top-0 z-0 w-[310px]"
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      />
    </div>
  );
};

export default CardProduct;

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import img1 from "/1.jpg";
import img2 from "/2.jpg";
import img3 from "/3.jpg";
import img4 from "/4.jpg";
import CardProduct from "./CardProduct";

const imageList = [img1, img2, img3, img4];

function App() {
  const [showBackdrop, setShowBackdrop] = useState(false);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const backdropDelay = imageList.length * 800;
    const textDelay = backdropDelay + 500;

    const b = setTimeout(() => setShowBackdrop(true), backdropDelay);
    const t = setTimeout(() => setShowText(true), textDelay);

    return () => {
      clearTimeout(b);
      clearTimeout(t);
    };
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Imagens com animação sequencial */}
      <div className="flex w-full h-full">
        {imageList.map((img, i) => (
          <motion.img
            key={i}
            src={img}
            alt={`img${i + 1}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: i * 0.8 }}
            className="w-1/4 object-cover"
          />
        ))}
      </div>

      {/* Backdrop com texto e botão */}
      {showBackdrop && (
        <motion.div
          className="absolute inset-0 flex flex-col items-center justify-center gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-black/70 backdrop-blur-md w-full h-full px-10 py-6 rounded-2xl shadow-lg flex flex-col items-center justify-center gap-6">
            {showText && (
              <>
                <motion.h1
                  className="text-4xl font-bold text-white text-center drop-shadow-lg"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  Beleza que nasce da raiz
                </motion.h1>
                <CardProduct />

              </>
            )}
          </div>
        </motion.div>
      )}
    </div>
  );
}

export default App;

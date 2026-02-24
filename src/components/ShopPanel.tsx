import { motion } from "motion/react";
import { products } from "../data";

interface ShopPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ShopPanel({ isOpen, onClose }: ShopPanelProps) {
  return (
    <motion.div
      initial={{ y: "100%" }}
      animate={{ y: isOpen ? "0%" : "100%" }}
      transition={{ type: "spring", damping: 25, stiffness: 200 }}
      className="fixed bottom-0 left-0 right-0 h-[85vh] bg-presente-yellow rounded-t-2xl z-50 overflow-hidden flex flex-col shadow-[0_-10px_40px_rgba(0,0,0,0.1)]"
    >
      <div className="flex justify-between items-center p-4 border-b border-black/10">
        <button className="bg-white text-black text-sm px-4 py-1.5 rounded-full border border-black/10 hover:bg-gray-50 transition-colors">
          Cart
        </button>
        <button
          onClick={onClose}
          className="bg-white text-black text-sm px-4 py-1.5 rounded-full border border-black/10 hover:bg-gray-50 transition-colors"
        >
          Close
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-4 md:p-6">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 md:gap-6">
          {products.map((p) => (
            <div
              key={p.id}
              className="break-inside-avoid mb-6 flex flex-col gap-2"
            >
              <img
                src={p.image}
                alt={p.name}
                className="w-full rounded-lg object-cover border border-black/5"
                referrerPolicy="no-referrer"
              />
              <div className="flex gap-2">
                <div className="bg-white text-black text-xs px-3 py-1.5 rounded-md border border-black/10 font-mono">
                  {p.name} - ${p.price}
                </div>
                <button className="bg-white text-black text-xs px-3 py-1.5 rounded-md border border-black/10 hover:bg-gray-50 transition-colors font-mono">
                  Buy
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

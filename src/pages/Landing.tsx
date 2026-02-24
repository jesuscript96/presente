import { useState } from "react";
import { Link } from "react-router-dom";
import { Youtube, Music, Headphones, Radio } from "lucide-react";
import { events } from "../data";
import ShopPanel from "../components/ShopPanel";

export default function Landing() {
  const [isShopOpen, setIsShopOpen] = useState(false);

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black">
      {/* Background Image */}
      <img
        src="https://picsum.photos/seed/ufo/1920/1080?blur=1"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover opacity-80"
        referrerPolicy="no-referrer"
      />

      {/* Main Content Panel */}
      <div className="absolute top-4 left-4 md:top-8 md:left-8 w-[90%] max-w-[400px] bg-presente-yellow rounded-xl p-6 shadow-2xl">
        <h1 className="font-display text-6xl md:text-7xl uppercase tracking-tighter leading-none mb-8 text-black">
          PRESENTE
        </h1>

        <div className="flex flex-col gap-6">
          {events.map((event) => (
            <Link
              key={event.id}
              to={`/event/${event.id}`}
              className="group flex justify-between items-start text-xs font-mono text-black hover:opacity-70 transition-opacity"
            >
              <div className="flex flex-col gap-1">
                <div
                  className={`font-bold ${event.status === "past" ? "line-through opacity-50" : ""}`}
                >
                  {event.date}
                </div>
                <div className="leading-tight max-w-[200px]">
                  {event.title}
                  <br />
                  {event.subtitle}
                </div>
              </div>
              <div
                className={`uppercase ${event.status === "past" ? "line-through opacity-50" : ""}`}
              >
                {event.label}
              </div>
            </Link>
          ))}
        </div>

        <div className="flex gap-4 mt-10">
          <button
            onClick={() => setIsShopOpen(true)}
            className="flex-1 border border-black/20 rounded-md py-2.5 text-sm font-mono text-black hover:bg-black/5 transition-colors"
          >
            Shop
          </button>
          <button className="flex-1 border border-black/20 rounded-md py-2.5 text-sm font-mono text-black hover:bg-black/5 transition-colors">
            IG
          </button>
        </div>
      </div>

      {/* Social Links Panel */}
      <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8 bg-presente-yellow rounded-xl p-3 shadow-xl flex flex-col gap-4">
        <a href="#" className="text-black hover:opacity-70 transition-opacity">
          <Youtube size={20} />
        </a>
        <a href="#" className="text-black hover:opacity-70 transition-opacity">
          <Music size={20} />
        </a>
        <a href="#" className="text-black hover:opacity-70 transition-opacity">
          <Headphones size={20} />
        </a>
        <a href="#" className="text-black hover:opacity-70 transition-opacity">
          <Radio size={20} />
        </a>
      </div>

      {/* Shop Overlay */}
      <ShopPanel isOpen={isShopOpen} onClose={() => setIsShopOpen(false)} />
    </div>
  );
}

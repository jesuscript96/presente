import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function EventDetail() {
  const { id } = useParams();

  return (
    <div className="min-h-screen bg-presente-brown text-[#f5f5f0] p-8 md:p-16 flex flex-col items-center justify-center relative">
      <Link
        to="/"
        className="absolute top-8 left-8 text-[#f5f5f0] hover:opacity-70 transition-opacity flex items-center gap-2 font-mono text-sm"
      >
        <ArrowLeft size={16} /> Back
      </Link>

      <div className="max-w-4xl w-full flex flex-col items-center">
        <h1 className="font-script text-8xl md:text-[12rem] leading-none mb-4 -rotate-2 text-center">
          Presente.
        </h1>

        <p className="font-serif text-xl md:text-2xl italic mb-24 text-center opacity-80">
          Capítulo {id || "1"}: Prueba y error.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32 w-full">
          <div className="font-serif text-xl md:text-2xl leading-relaxed space-y-8 text-center md:text-left">
            <p>
              Presente
              <br />
              No es pasado.
              <br />
              No es futuro.
            </p>
            <p>Es ritmo en tiempo real.</p>
            <p>
              Un espacio donde el sonido y la imagen
              <br />
              convergen.
              <br />
              Sin distracción.
              <br />
              Sin expectativa.
            </p>
            <p>Solo ahora.</p>
          </div>

          <div className="font-serif text-xl md:text-2xl leading-relaxed text-center md:text-right flex flex-col items-center md:items-end">
            <div className="space-y-2 mb-12">
              <p>I. Intro</p>
              <p>II. Parte 1</p>
              <p>III. Intermedio</p>
              <p>IV. Parte 2</p>
              <p>V. Outro</p>
            </div>

            <div className="w-full max-w-[300px]">
              <p className="mb-4 text-center">Selected Tracks</p>
              <div className="space-y-2 font-mono text-sm">
                <div className="flex gap-4 items-center">
                  <span>01.</span>
                  <div className="flex-1 border-b border-dashed border-[#f5f5f0]/50"></div>
                </div>
                <div className="flex gap-4 items-center">
                  <span>02.</span>
                  <div className="flex-1 border-b border-dashed border-[#f5f5f0]/50"></div>
                </div>
                <div className="flex gap-4 items-center">
                  <span>03.</span>
                  <div className="flex-1 border-b border-dashed border-[#f5f5f0]/50"></div>
                </div>
                <div className="flex gap-4 items-center">
                  <span>04.</span>
                  <div className="flex-1 border-b border-dashed border-[#f5f5f0]/50"></div>
                </div>
                <div className="flex gap-4 items-center">
                  <span>05.</span>
                  <div className="flex-1 border-b border-dashed border-[#f5f5f0]/50"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

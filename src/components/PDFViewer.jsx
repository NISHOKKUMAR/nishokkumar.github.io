import React from "react";

export default function PDFViewer({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-lg z-50 flex items-center justify-center p-4 animate-fadeIn">
      <div className="w-[95%] md:w-[80%] lg:w-[70%] h-[90vh]
        rounded-2xl bg-[#0f172a]/90 shadow-[0_0_40px_rgba(0,0,0,0.5)]
        border border-white/10 overflow-hidden flex flex-col">

        {/* Header */}
        <div className="flex items-center justify-between px-6 py-3
            bg-[#1e293b]/70 border-b border-white/10">

          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-red-500"></span>
            <span className="h-3 w-3 rounded-full bg-yellow-500"></span>
            <span className="h-3 w-3 rounded-full bg-green-500"></span>

            <h2 className="text-white text-sm font-medium ml-4 tracking-wide">
              Nishok-SOC_Resume.pdf
            </h2>
          </div>

          <button
            onClick={onClose}
            className="px-4 py-1 rounded-lg bg-red-600/80 hover:bg-red-600
            text-white text-sm transition-all shadow-lg"
          >
            Close
          </button>
        </div>

        {/* PDF Display */}
        <div className="w-full h-full bg-[#0b1220]">
          <object
            data="/Nishok-SOC_Resume.pdf"
            type="application/pdf"
            className="w-full h-full"
          >
            <p className="text-white text-center mt-6">
              PDF cannot load.{" "}
              <a
                href="/Nishok-SOC_Resume.pdf"
                className="underline text-blue-400"
                download
              >
                Download here
              </a>
            </p>
          </object>
        </div>
      </div>
    </div>
  );
}

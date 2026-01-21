import { Play, Quote, Star } from "lucide-react"
import RightSection from "./RightSection"

export default function Landing() {
  return (
    <div className="relative min-h-screen bg-[#ECF9FF] font-sans selection:bg-cyan-100 overflow-hidden">

      <div className="max-w-7xl mx-auto px-6 pt-40 pb-32 grid lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* --- LEFT SECTION --- */}
        <div className="flex flex-col gap-8">
          <div className="relative">
            {/* The semi-circle accent above "Perfect" */}
            <div className="absolute -top-4 left-[22%] -translate-x-1/2 w-10 h-5 border-t-4 border-l-4 border-r-4 border-secondary rounded-t-full"></div>
            
            <h1 className="text-2xl lg:text-5xl font-extrabold text-primary leading-[1.15]">
              Perfect place for <br/>
              your business<br/>
              <span className="relative inline-block">
                promotion
                {/* Hand-drawn style underline */}
              </span> ✌️
            </h1>
          </div>

          <p className="text-slate-500 text-lg lg:text-xl max-w-md leading-relaxed">
            Businesses generally promote their brand, products, and services by identifying audience.
          </p>

          <div className="flex items-center gap-6">
            <button className="bg-primary text-white px-10 py-5 rounded-2xl font-bold shadow-xl shadow-blue-900/20 hover:scale-105 transition-transform active:scale-95">
              Get Started
            </button>
            <button className="group flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-white shadow-lg flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-all">
                <Play fill="currentColor" size={20} className="ml-1" />
              </div>
            </button>
          </div>

          {/* Testimonial Card */}
          <div className="mt-12 bg-white/70 backdrop-blur-md p-8 rounded-[2rem] border border-white/50 shadow-sm max-w-sm relative">
            <div className="flex justify-between items-start mb-4">
              <Quote className="text-secondary fill-secondary rotate-180" size={32} />
              <div className="flex items-center gap-1 px-2 py-1 text-sm font-bold">
                <Star size={14} fill="yellow" stroke="yellow" /> 4.9
              </div>
            </div>
            <p className="text-slate-400 font-medium italic leading-relaxed">
              There's no shortage of ideas, what's missing is the will to execute them  – Seth Godin.
            </p>
           
          </div>
        </div>

        {/* --- RIGHT SECTION (BROWSER MOCKUP) --- */}
      <RightSection/>
      </div>
    </div>
  )
}

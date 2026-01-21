
import { ChevronDown, Search } from 'lucide-react'
export default function VideoBrowser() {
  return (
    <div className="relative z-10 bg-white overflow-hidden
         border-[8px] border-white
        ring-1 ring-slate-100 shadow-2xl shadow-blue-900/10">

        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b bg-white">
          <div className="flex gap-2">
            <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
            <span className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
            <span className="w-3 h-3 rounded-full bg-[#28C840]" />
          </div>

          <div className="flex-1 mx-6 max-w-md bg-cyan-50/50 h-9 rounded-xl
            flex items-center px-4">
            <Search size={16} className="text-secondary" />
          </div>

          <img
            src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"
            className="w-8 h-8 rounded-full bg-slate-100 border"
            alt="user"
          />
        </div>

        {/* Video */}
        <div className="relative aspect-[4/3] bg-slate-50">
          <img
            src="public/presenter.svg"
            className="w-full h-full object-cover"
            alt="Presenter"
          />

          {/* Live Badge */}
          <div className="absolute top-6 right-6 flex items-center gap-2
            bg-white/90 px-3 py-1 rounded-full shadow">
            <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
            <span className="text-[10px] font-black uppercase text-slate-800">
              Live
            </span>
          </div>

          {/* Bottom Overlay */}
          <div className="absolute bottom-0 left-0 w-full px-6 py-5
            flex items-center justify-between
            bg-gradient-to-t from-black/25 to-transparent">

            <div className="flex items-center gap-3">
              <div className="flex -space-x-3">
                {[1, 2, 3].map(i => (
                  <img
                    key={i}
                    src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i}`}
                    className="w-8 h-8 rounded-full border-2 border-white"
                    alt="viewer"
                  />
                ))}
                <div className="w-8 h-8 rounded-full bg-slate-900
                  border-2 border-white flex items-center justify-center
                  text-[9px] font-bold text-white">
                  +3k
                </div>
              </div>
              <span className="text-white text-xs font-bold">
                Watching
              </span>
            </div>

            <div className="flex items-center gap-1
              text-white text-xs font-bold">
              Live chat <ChevronDown size={14} />
            </div>
          </div>
        </div>
      </div>
  )
}

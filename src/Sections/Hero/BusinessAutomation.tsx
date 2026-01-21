import { Play } from 'lucide-react'
export default function BusinessAutomation() {
  return (
   <div className="absolute top-[38%] left-[-18%]
        w-44 p-3 bg-white rounded-lg
        shadow-lg border z-20">

        <div className="flex items-center gap-2">
          <div className="p-2 rounded-full bg-slate-100 text-primary">
            <Play size={14} fill="currentColor" />
          </div>

          <div>
            <h4 className="text-[10px] font-black text-primary leading-tight">
              Business Automation
            </h4>
            <p className="text-[9px] font-bold text-secondary">
              +1.2M watching
            </p>
          </div>
        </div>

        <div className="mt-3 space-y-2">
          {[1, 2].map(i => (
            <div key={i}>
              <p className="text-[8px] text-slate-300
                font-bold uppercase mb-0.5">
                Live Promotion
              </p>
              <div className="h-1 bg-slate-100 rounded-full" />
              <div className="h-1 w-3/4 bg-slate-50 rounded-full mt-0.5" />
            </div>
          ))}
        </div>
      </div>
  )
}

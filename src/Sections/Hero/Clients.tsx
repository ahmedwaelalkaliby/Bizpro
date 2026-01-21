import { MoreHorizontal } from "lucide-react"

export default function Clients() {
  return (
      <div className="absolute top-[42%] -right-[18%]
        w-44 p-3 bg-white rounded-lg
        shadow-lg border z-20">

        <div className="flex justify-between items-center mb-3">
          <h4 className="text-[10px] font-black text-primary">
            Clients
          </h4>
          <MoreHorizontal size={14} className="text-slate-300" />
        </div>

        {[1, 2, 3].map(i => (
          <div key={i}
            className="flex items-center gap-2 mb-2 last:mb-0">

            <img
              src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i + 30}`}
              className="w-6 h-6 rounded-full bg-slate-100"
              alt="client"
            />

            <div className="flex-1 space-y-0.5">
              <div className="h-1 bg-slate-100 rounded-full" />
              <div className="h-0.5 w-2/3 bg-slate-50 rounded-full" />
            </div>
          </div>
        ))}
      </div>
  )
}

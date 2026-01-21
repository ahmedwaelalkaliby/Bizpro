import { MoreHorizontal } from "lucide-react"   

export default function LiveUpdate() {
  return (
        <div className="absolute -bottom-[15%] left-[35%]
        -translate-x-[20%] w-60 p-4 bg-white
        rounded-lg shadow-lg border z-30">

        <div className="flex justify-between items-center mb-3">
          <h4 className="text-xs font-black text-primary">
            Live Update
          </h4>
          <MoreHorizontal size={14} className="text-slate-300" />
        </div>

        <div className="space-y-3">
          {[
            { label: "Growth rate", value: "37%" },
            { label: "New Users", value: "1.65M" },
          ].map((item, i) => (
            <div key={i}
              className="bg-cyan-50/30 rounded-md p-2">

              <div className="flex justify-between items-center
                text-[10px] font-bold mb-1">
                <span className="text-secondary text-sm">
                  {item.value}
                </span>
                <span className="text-slate-400">
                  {item.label}
                </span>
              </div>

              <svg
                className="w-full h-4 text-secondary"
                viewBox="0 0 100 20"
                preserveAspectRatio="none"
              >
                <path
                  d="M0 15 C 20 15, 30 5, 50 15
                     S 80 5, 100 15"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          ))}
        </div>
          </div>
  )
}

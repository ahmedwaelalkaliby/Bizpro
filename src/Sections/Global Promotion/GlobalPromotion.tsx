import { Send, MoreHorizontal } from "lucide-react";

export default function GlobalPromotion() {
  const users = [
    {
      id: 1,
      pos: "top-[18%] left-[15%] md:top-[25%] md:left-[25%]",
    },
    {
      id: 2,
      pos: "top-[55%] left-[8%] md:top-[60%] md:left-[18%]",
    },
    {
      id: 3,
      pos: "top-[28%] right-[12%] md:top-[35%] md:right-[28%]",
    },
    {
      id: 4,
      pos: "bottom-[18%] right-[15%] md:bottom-[20%] md:right-[25%]",
    },
    {
      id: 5,
      pos: "bottom-[6%] left-[40%] md:bottom-[5%] md:left-[45%]",
    },
  ];

  return (
    <section className="py-16 md:py-24 px-4 md:px-6 bg-white overflow-hidden font-sans">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-14 md:mb-20 relative">
        <div className="inline-block relative">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-primary mb-4 md:mb-6">
            Global promotion
          </h2>

          <div className="absolute -top-2 md:-top-3 left-[55%] -translate-x-1/2 w-8 md:w-10 h-4 md:h-5 border-t-4 border-l-4 border-r-4 border-secondary rounded-t-full" />
        </div>

        <p className="text-slate-400 text-xs sm:text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
          Businesses generally promote their brand, products, and services by
          identifying audience. No wonder that promotion strategy is one of the
          most important processes in marketing.
        </p>
      </div>

      {/* Map Section */}
      <div className="relative max-w-6xl mx-auto aspect-[16/9]">
        {/* World Map */}
        <div className="absolute inset-0 opacity-10 flex items-center justify-center">
          <img
            src="/Images/world.svg"
            alt="World Map"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Center Hub */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
          <div className="w-10 h-10 md:w-16 md:h-16 bg-secondary rounded-xl md:rounded-2xl flex items-center justify-center shadow-[0_0_20px_rgba(0,229,204,0.4)] md:shadow-[0_0_30px_rgba(0,229,204,0.4)] text-white">
            <Send
              size={18}
              className="md:size-[32px] rotate-[-10deg]"
              fill="currentColor"
            />
          </div>
        </div>

        {/* Users */}
        {users.map((user) => (
          <div key={user.id} className={`absolute ${user.pos} z-10`}>
            {/* Line */}
            <svg
              className="absolute pointer-events-none overflow-visible hidden md:block"
              width="200"
              height="150"
            >
              <path
                d="M 0 0 Q 50 50, 100 100"
                fill="none"
                stroke="#0FFFCF"
                strokeWidth="1.5"
                strokeOpacity="0.4"
                strokeDasharray="4 2"
              />
            </svg>

            {/* Card */}
            <div className="bg-white/90 backdrop-blur-sm p-2 md:p-3 rounded-lg md:rounded-xl shadow-md md:shadow-lg border border-slate-50 flex items-center gap-2 md:gap-3 w-32 md:w-44">
              <img
                src={`https://api.dicebear.com/7.x/avataaars/svg?seed=User${user.id}`}
                className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-slate-100"
                alt="User"
              />

              <div className="flex-1 space-y-1 md:space-y-1.5">
                <div className="h-1 md:h-1.5 bg-[#F0FDFD] rounded-full w-full" />
                <div className="h-1 md:h-1.5 bg-[#F0FDFD] rounded-full w-2/3" />
              </div>

              <MoreHorizontal
                size={12}
                className="md:size-[14px] text-slate-200"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

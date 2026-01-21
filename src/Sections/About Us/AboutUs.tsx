import { ShieldCheck, Users } from "lucide-react"

export default function AboutUs() {
  return (
    <section className="relative py-24 px-6 bg-white overflow-hidden">

      {/* Decorative Arrow */}
      <div className="absolute bottom-10 right-10 opacity-40 -z-10 rotate-12">
        <svg
          width="120"
          height="120"
          viewBox="0 0 100 100"
          fill="none"
          className="text-slate-900"
        >
          <path
            d="M80 10 C 90 40, 40 50, 60 80 S 100 90, 80 100
               M 85 15 L 75 10
               M 85 15 L 90 25"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">

        {/* ================= LEFT CONTENT ================= */}
        <div className="flex-1 space-y-8">

          {/* Title */}
          <div className="relative inline-block">
            <h2 className="text-4xl font-extrabold text-primary">
              About us
            </h2>
            <div className="absolute -top-3 left-1/2 -translate-x-1/2
              w-10 h-5 border-t-4 border-l-4 border-r-4
              border-secondary rounded-t-full" />
          </div>

          {/* Description */}
          <p className="text-slate-400 text-lg leading-relaxed max-w-xl">
            No wonder that promotion strategy is one of the most important
            processes in marketing. In fact, it supports your marketing voices
            to reach your target audience, creates interest, and helps you to
            engage with them.
          </p>

          {/* Features */}
          <div className="space-y-8">

            {/* Feature 1 */}
            <div className="flex items-start gap-5">
              <div className="p-4 bg-[#EDF9FB] rounded-2xl shadow-sm">
                <ShieldCheck className="w-8 h-8 text-secondary" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-primary mb-2">
                  Safe and secured
                </h4>
                <p className="text-slate-400 leading-relaxed max-w-xs">
                  Safe and secured promotion strategy is one of the most
                  important processes in marketing.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex items-start gap-5">
              <div className="p-4 bg-[#EDF9FB] rounded-2xl shadow-sm">
                <Users className="w-8 h-8 text-pink-500" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-primary mb-2">
                  Highly expert team
                </h4>
                <p className="text-slate-400 leading-relaxed max-w-xs">
                  We support your marketing voices to reach your target
                  audience and create interest.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* ================= RIGHT IMAGE ================= */}
        
        <div className="flex-1 relative w-full max-w-lg mx-auto lg:max-w-none">
          <img src="/Images/stars.svg" alt="stars" className="absolute top-[-20%] right-[-12%]" />
          
          {/* Main Image */}
          <div className="rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
            <img
              src="/Images/About.svg"
              alt="Business team discussing"
              className="w-full h-full object-cover"
            />
          </div>

           <img src="/Images/line2.svg" alt="stars"  className="absolute button-[-20%] right-[-12%]"/>

          {/* Floating Growth Card */}
          <div
            className="
              absolute z-20 bg-white rounded-2xl border border-slate-50
              shadow-[0_20px_50px_rgba(0,0,0,0.15)]
              p-4 sm:p-6

              bottom-[-20px] left-1/2 -translate-x-1/2
              w-[85%] max-w-[240px]

              sm:bottom-[-40px] sm:left-[-48px]
              sm:translate-x-0 sm:w-64
            "
          >
            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <div className="w-8 h-8 sm:w-10 sm:h-10
                border-2 border-orange-400 rounded-full
                bg-orange-50 flex items-center justify-center text-orange-400">
                ★
              </div>
              <h5 className="text-[11px] sm:text-[13px]
                font-bold text-primary leading-tight">
                Rewarded <br className="hidden sm:block" />
                growth guaranteed
              </h5>
            </div>

            {/* Chart */}
            <div className="relative h-16 sm:h-24 flex items-end gap-1">
              {[40, 60, 45, 70, 55, 85, 65, 95].map((h, i) => (
                <div
                  key={i}
                  className="w-1.5 sm:w-2 bg-[#F0FDFD] rounded-t-sm"
                  style={{ height: `${h}%` }}
                />
              ))}

              <svg
                className="absolute inset-0 text-red-500"
                viewBox="0 0 100 40"
                preserveAspectRatio="none"
              >
                <path
                  d="M0 35 Q 25 35, 40 25 T 70 30 T 100 5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <circle cx="100" cy="5" r="3" fill="orange" />
              </svg>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

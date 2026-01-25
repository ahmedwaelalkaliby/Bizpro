import { useRef } from "react";
import PackageCard from "./PackageCard";

const packageData = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=500&q=80",
    rating: 4.9,
    title: "The basic package to start your promotion",
    usersCount: "200K+",
    price: "89.00",
    userAvatars: ["https://i.pravatar.cc/150?u=1", "https://i.pravatar.cc/150?u=2", "https://i.pravatar.cc/150?u=3"]
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=500&q=80",
    rating: 5.0,
    title: "The standard package to grow your business",
    usersCount: "140K+",
    price: "109.00",
    userAvatars: ["https://i.pravatar.cc/150?u=4", "https://i.pravatar.cc/150?u=5", "https://i.pravatar.cc/150?u=6"]
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=500&q=80",
    rating: 4.8,
    title: "The premium package to boost your promotion",
    usersCount: "99K+",
    price: "149.00",
    userAvatars: ["https://i.pravatar.cc/150?u=7", "https://i.pravatar.cc/150?u=8", "https://i.pravatar.cc/150?u=9"]
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?auto=format&fit=crop&w=500&q=80",
    rating: 4.7,
    title: "Full-stack social media management pack",
    usersCount: "310K+",
    price: "199.00",
    userAvatars: ["https://i.pravatar.cc/150?u=10", "https://i.pravatar.cc/150?u=11", "https://i.pravatar.cc/150?u=12"]
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=500&q=80",
    rating: 5.0,
    title: "Advanced SEO and content strategy engine",
    usersCount: "55K+",
    price: "125.00",
    userAvatars: ["https://i.pravatar.cc/150?u=13", "https://i.pravatar.cc/150?u=14", "https://i.pravatar.cc/150?u=15"]
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=500&q=80",
    rating: 4.6,
    title: "Startup launchpad and technical setup",
    usersCount: "12K+",
    price: "299.00",
    userAvatars: ["https://i.pravatar.cc/150?u=16", "https://i.pravatar.cc/150?u=17", "https://i.pravatar.cc/150?u=18"]
  }
];

export default function PopularPackages() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.8; // Move 80% of view
      const target = direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount;
      
      scrollRef.current.scrollTo({ left: target, behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-slate-50 py-20 px-6 md:px-12 min-h-screen overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header Area */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div>
            <h2 className="text-5xl md:text-6xl font-bold text-slate-900 leading-[1.1]">
              Popular <span className="text-slate-900">packages</span>
            </h2>
            <div className="h-2 w-10 bg-cyan-400 rounded-full mt-3 opacity-60"></div>
          </div>

          {/* Functional Navigation Arrows */}
          <div className="flex gap-3">
            <button 
              onClick={() => scroll('left')}
              className="w-14 h-14 rounded-2xl flex items-center justify-center bg-white border border-slate-200 text-slate-300 hover:text-cyan-500 hover:border-cyan-200 transition-all shadow-sm active:scale-90"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={() => scroll('right')}
              className="w-14 h-14 rounded-2xl flex items-center justify-center bg-cyan-400 text-white shadow-lg shadow-cyan-100 hover:bg-cyan-500 transition-all active:scale-90"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Scrollable Container */}
        <div 
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto pb-10 no-scrollbar snap-x snap-mandatory scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {packageData.map((pkg) => (
            <div key={pkg.id} className="shrink-0">
              <PackageCard {...pkg} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
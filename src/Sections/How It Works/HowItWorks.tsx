import { Package, Calendar, BarChart3 } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      title: "Choose packages",
      description: "Businesses generally promote their brand, products, and services by identifying audience or users.",
      icon: <Package className="w-8 h-8 text-orange-400" />
    },
    {
      title: "Schedule appointment",
      description: "When you have important information to pass onto your people, text messaging can be a great way to do it.",
      icon: <Calendar className="w-8 h-8 text-red-500" />
    },
    {
      title: "Grow together",
      description: "Texting can sometimes come across as an impersonal way to communicate, it can be highly beneficial.",
      icon: <BarChart3 className="w-8 h-8 text-teal-400" />
    }
  ];

  return (
    <section className="py-20 px-6 font-sans bg-white">
      {/* Header Section */}
      <div className="max-w-4xl mx-auto text-center mb-16 relative">
        <div className="inline-block relative">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            How it works
          </h2>
          {/* Cyan semi-circle flourish */}
          <div className="absolute -top-4 left-[75%] -translate-x-1/2 w-10 h-5 border-t-4 border-l-4 border-r-4 border-secondary rounded-t-full"></div>
        </div>
        <p className="text-slate-600 text-sm md:text-base max-w-lg mx-auto leading-relaxed">
          Businesses generally promote their brand, products, and services by identifying audience.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
        {steps.map((step, index) => (
          <div
            key={index}
            className="relative rounded-3xl p-8 border border-slate-100 bg-white shadow-sm transition-all duration-300 hover:shadow-md"
          >
            {/* Icon Container */}
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-8 bg-slate-50">
              {step.icon}
            </div>

            {/* Content */}
            <h3 className="text-xl font-bold mb-4 text-primary">
              {step.title}
            </h3>
            <p className="text-sm leading-relaxed text-slate-500">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
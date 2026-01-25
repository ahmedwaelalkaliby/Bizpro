import React from 'react';

interface PackageCardProps {
  image: string;
  rating: number;
  title: string;
  usersCount: string;
  price: string;
  userAvatars: string[];
}

const PackageCard: React.FC<PackageCardProps> = ({
  image, rating, title, usersCount, price, userAvatars,
}) => {
  return (
    <div className="bg-white rounded-[2.5rem] p-5 shadow-sm border border-blue-50 flex flex-col min-w-[340px] md:min-w-[380px] snap-start transition-all hover:shadow-md">
      <div className="relative h-64 w-full mb-6">
        <img src={image} alt={title} className="w-full h-full object-cover rounded-[1.8rem]" />
        <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm">
          <span className="text-yellow-400 text-xs">★</span>
          <span className="font-bold text-slate-800 text-sm">{rating.toFixed(1)}</span>
        </div>
      </div>
      <h3 className="text-slate-900 font-bold text-xl leading-tight mb-8 flex-grow">{title}</h3>
      <div className="flex items-center justify-between pt-5 border-t border-slate-50">
        <div className="flex items-center gap-3">
          <div className="flex -space-x-2.5">
            {userAvatars.map((url, i) => (
              <img key={i} src={url} className="w-8 h-8 rounded-full border-2 border-white object-cover" alt="user" />
            ))}
          </div>
          <span className="text-slate-400 text-sm font-semibold">{usersCount} users</span>
        </div>
        <div className="text-[#2DD4BF] font-bold text-lg">${price}</div>
      </div>
    </div>
  );
};

export default PackageCard;
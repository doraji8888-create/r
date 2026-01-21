import React from 'react';
import { Location, Character } from '../types';
import { CHARACTERS } from '../constants';

interface LocationViewProps {
  location: Location;
  onEnterChat: (character: Character) => void;
  onBack: () => void;
}

const LocationView: React.FC<LocationViewProps> = ({ location, onEnterChat, onBack }) => {
  // Filter characters present in this location
  const charsHere = location.characters.map(id => CHARACTERS[id]).filter(Boolean);

  return (
    <div className="animate-fade-in max-w-6xl mx-auto p-6 md:p-12 pb-32">
      <button 
        onClick={onBack}
        className="mb-8 text-xs text-slate-400 hover:text-white transition-colors flex items-center gap-2 font-cinzel tracking-widest uppercase group"
      >
        <span className="group-hover:-translate-x-1 transition-transform">←</span> Return to Map
      </button>

      <div className="relative rounded-2xl overflow-hidden glass-panel mb-16 group shadow-2xl">
        <div className="h-[400px] relative">
            <img 
                src={location.customBgImage || `https://picsum.photos/seed/${location.bgSeed}/1200/600`} 
                alt={location.name}
                className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-all duration-[2s] ease-in-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/40 to-transparent"></div>
            
            <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full">
                <div className="flex items-center gap-4 mb-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 delay-100">
                    <span className="text-sm font-cinzel text-blue-300 tracking-[0.3em] uppercase border border-blue-500/30 px-3 py-1 rounded backdrop-blur-md">
                        {location.faction.split(' ')[1]}
                    </span>
                </div>
                <h2 className="text-5xl md:text-7xl font-serif font-thin text-white mb-6 tracking-tight text-glow">
                    {location.name}
                </h2>
                <p className="text-slate-300 max-w-2xl text-lg leading-relaxed font-gowun border-l-2 border-white/20 pl-6">
                    {location.description}
                </p>
            </div>
        </div>
      </div>

      <div className="mb-4">
        <h3 className="font-cinzel text-xl text-slate-400 border-b border-white/10 pb-4 mb-8 flex items-center justify-between tracking-[0.2em]">
          <span>INHABITANTS</span>
          <span className="text-xs opacity-50">{charsHere.length} Active</span>
        </h3>
        
        {charsHere.length === 0 ? (
            <div className="py-24 text-center glass-panel rounded-xl border-dashed border-white/10">
                <p className="text-slate-500 italic text-lg font-gowun">
                    "이곳에는 오직 차가운 바람만이 머물고 있습니다."
                </p>
            </div>
        ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {charsHere.map(char => (
                <div 
                    key={char.id}
                    onClick={() => onEnterChat(char)}
                    className="glass-panel p-6 rounded-xl cursor-pointer hover:bg-white/5 hover:border-blue-300/30 transition-all duration-300 group flex items-center gap-6"
                >
                    <div className="w-20 h-20 rounded-full overflow-hidden border border-white/10 group-hover:border-blue-300/50 shadow-lg shrink-0 relative">
                         <img 
                            src={char.customImage ? char.customImage : `https://picsum.photos/seed/${char.imageSeed}/200/200`} 
                            alt={char.name}
                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                        />
                    </div>
                    <div>
                        <h4 className="font-bold text-xl text-slate-200 group-hover:text-blue-100 font-serif mb-1 transition-colors">
                            {char.name}
                        </h4>
                        <p className="text-xs text-slate-500 font-gowun italic line-clamp-1 mb-2">
                            "{char.shortDesc}"
                        </p>
                        <span className="text-[10px] text-blue-300/70 font-cinzel uppercase tracking-widest group-hover:text-blue-200">
                            View Profile →
                        </span>
                    </div>
                </div>
            ))}
            </div>
        )}
      </div>
    </div>
  );
};

export default LocationView;
import React from 'react';
import { Location, Faction } from '../types';

interface MapProps {
  locations: Location[];
  onSelectLocation: (location: Location) => void;
}

const Map: React.FC<MapProps> = ({ locations, onSelectLocation }) => {
  
  const getFactionColor = (faction: Faction) => {
    switch (faction) {
      case Faction.Civilization: return 'border-blue-900/50 bg-blue-950/20 hover:border-blue-500';
      case Faction.Warmort: return 'border-orange-900/50 bg-orange-950/20 hover:border-orange-500';
      case Faction.Vagrance: return 'border-green-900/50 bg-green-950/20 hover:border-green-500';
      case Faction.Mist: return 'border-purple-900/50 bg-purple-950/20 hover:border-purple-500';
      default: return 'border-slate-700 bg-slate-800/20 hover:border-slate-400';
    }
  };

  return (
    <div className="animate-fade-in space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-serif font-bold text-slate-200 mb-2">World Map</h2>
        <p className="text-slate-400 italic">Select a destination to travel.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {locations.map((loc) => (
          <button
            key={loc.id}
            onClick={() => onSelectLocation(loc)}
            disabled={loc.isRestricted}
            className={`
              relative overflow-hidden p-6 rounded-lg border-2 text-left transition-all duration-300 group
              ${getFactionColor(loc.faction)}
              ${loc.isRestricted ? 'opacity-50 cursor-not-allowed grayscale' : 'cursor-pointer transform hover:-translate-y-1 shadow-md hover:shadow-xl'}
            `}
          >
            {/* Background Image Overlay */}
            <div 
                className="absolute inset-0 bg-cover bg-center opacity-10 group-hover:opacity-20 transition-opacity duration-500"
                style={{ backgroundImage: `url(${loc.customBgImage || `https://picsum.photos/seed/${loc.bgSeed}/400/200`})` }}
            />
            
            <div className="relative z-10 flex items-start justify-between">
              <div>
                <div className="flex items-center gap-2 mb-1">
                    <span className="text-2xl">{loc.emoji}</span>
                    <h3 className="font-serif text-xl font-bold text-slate-100">{loc.name}</h3>
                </div>
                <span className="text-xs uppercase tracking-widest text-slate-500 font-semibold mb-2 block">
                  {loc.faction.split(' ')[1]}
                </span>
                <p className="text-sm text-slate-400 line-clamp-2">{loc.description}</p>
              </div>
              
              {loc.isRestricted && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm z-20">
                    <span className="text-red-500 font-mono font-bold border border-red-500 px-3 py-1 rounded">RESTRICTED</span>
                </div>
              )}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Map;
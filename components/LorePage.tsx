import React, { useState } from 'react';
import { CHARACTERS, LOCATIONS, FACTION_DETAILS } from '../constants';
import { Location, Character } from '../types';

interface LorePageProps {
  onNavigateToLocation: (location: Location) => void;
  onNavigateToCharacter: (character: Character) => void;
}

const LorePage: React.FC<LorePageProps> = ({ onNavigateToLocation, onNavigateToCharacter }) => {
  const [openSections, setOpenSections] = useState<Set<string>>(new Set(['worldview', 'regions', 'factions', 'characters']));
  const [showWorldTruth, setShowWorldTruth] = useState(false);

  const toggleSection = (section: string) => {
    const next = new Set(openSections);
    if (next.has(section)) next.delete(section);
    else next.add(section);
    setOpenSections(next);
  };

  // Group locations by Region Group
  const regions: Record<string, Location[]> = {};
  LOCATIONS.forEach(loc => {
    if (!regions[loc.regionGroup]) regions[loc.regionGroup] = [];
    regions[loc.regionGroup].push(loc);
  });

  const orderedRegionKeys = ['중립구역', '배그런스', '워모트', '문명의 선', '카데이잔'];

  return (
    <div className="max-w-6xl mx-auto p-6 md:p-12 animate-fade-in pb-32">
      {/* Title Section */}
      <div className="text-center mb-24 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-500/10 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
        
        <h1 className="text-5xl md:text-7xl font-serif font-thin text-white mb-6 tracking-tight text-glow animate-float">
          찢어진 페이지
        </h1>
        <div className="h-px w-32 bg-gradient-to-r from-transparent via-blue-400 to-transparent mx-auto mb-6 opacity-50"></div>
        <p className="text-lg md:text-xl text-blue-200/80 font-cinzel tracking-[0.2em] mb-4">
          The Rewritten Realm
        </p>
        <p className="text-slate-400/80 font-gowun italic max-w-lg mx-auto leading-loose text-sm">
          "원전에서 분리된 그림자들의 세계.<br/>
          잔혹하고도 아름다운, 끝나지 않는 겨울밤의 꿈."
        </p>
      </div>

      {/* Worldview Section */}
      <section className="mb-16">
        <button 
          onClick={() => toggleSection('worldview')}
          className="w-full flex items-center justify-between text-2xl font-serif text-slate-200 mb-6 group"
        >
          <span className="flex items-center gap-3">
            <span className="w-1 h-8 bg-blue-500/50 rounded-full group-hover:h-10 group-hover:bg-blue-400 transition-all duration-300"></span>
            <span className="group-hover:text-blue-200 transition-colors text-glow">Memory Fragment</span>
            <span className="text-sm text-slate-500 font-gowun font-normal ml-2 opacity-60">
               세계관 (Worldview)
            </span>
          </span>
          <span className="text-sm text-slate-600 font-cinzel tracking-widest group-hover:text-blue-300 transition-colors">{openSections.has('worldview') ? 'CLOSE' : 'OPEN'}</span>
        </button>
        
        {openSections.has('worldview') && (
          <div className="animate-fade-in">
            <div className="glass-panel p-1 rounded-lg mb-8 relative group overflow-hidden">
               <div className="absolute inset-0 bg-blue-900/20 group-hover:bg-transparent transition-colors duration-700 z-10"></div>
               <div className="aspect-[21/9] w-full bg-slate-950 relative overflow-hidden flex items-center justify-center rounded border border-white/5">
                  <img 
                    src="https://i.postimg.cc/9QqKNXMG/67.webp" 
                    alt="World Map" 
                    className="w-full h-full object-cover opacity-50 grayscale hover:grayscale-0 scale-105 hover:scale-100 transition-all duration-[2s] ease-in-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent"></div>
                  <div className="absolute bottom-6 left-6 text-xs text-blue-300/60 font-mono tracking-widest border border-blue-500/30 px-2 py-1 rounded backdrop-blur-md">
                     SYSTEM: REALITY_FRACTURED
                  </div>
               </div>
               <div className="p-8 text-center relative z-20">
                 <p className="text-slate-300 font-gowun leading-loose text-lg">
                   이곳은 <span className="text-blue-300 font-bold">'찢어진 페이지'</span>.<br/>
                   자신들의 원전에서 찢겨 나온 악역들이 모여든 유배지입니다.<br/>
                   당신의 존재를 유지하기 위해, <span className="text-cyan-300 text-glow inline-block">💎 결정석</span>을 찾아 헤매야 합니다.
                 </p>
               </div>
            </div>

            <div className="mt-4">
                <button 
                  onClick={() => setShowWorldTruth(!showWorldTruth)}
                  className="w-full text-left glass-panel p-5 rounded-lg hover:bg-white/5 transition-all duration-300 flex items-center justify-between group border-l-4 border-l-red-900/50 hover:border-l-red-500"
                >
                   <span className="text-lg font-bold text-slate-400 group-hover:text-red-300 transition-colors flex items-center gap-3 font-cinzel">
                     <span className="text-xl">🔏</span> THE TRUTH
                   </span>
                   <span className="text-xs tracking-widest text-slate-600 group-hover:text-red-400">{showWorldTruth ? 'CONCEAL' : 'REVEAL'}</span>
                </button>
                
                {showWorldTruth && (
                    <div className="mt-2 glass-panel p-8 rounded-lg text-slate-300 font-gowun leading-loose text-sm shadow-inner animate-fade-in border-t border-red-900/30">
                        <p>이 세계의 모든 존재는 <strong className="text-red-400">존재도(EP)</strong>라는 수치에 묶여 있습니다.</p>
                        <p className="mt-2">존재도가 0%가 되면 육신은 투명해지며, 결국 소멸하여 세계의 거름이 됩니다.</p>
                        <p className="mt-2 text-slate-400 italic">소멸하지 않기 위해, 결정석을 모으십시오. 살아남으십시오.</p>
                    </div>
                )}
            </div>
          </div>
        )}
      </section>

      {/* Regions Section */}
      <section className="mb-16">
        <button 
          onClick={() => toggleSection('regions')}
          className="w-full flex items-center justify-between text-2xl font-serif text-slate-200 mb-6 group"
        >
          <span className="flex items-center gap-3">
             <span className="w-1 h-8 bg-emerald-500/50 rounded-full group-hover:h-10 group-hover:bg-emerald-400 transition-all duration-300"></span>
             <span className="group-hover:text-emerald-200 transition-colors text-glow">Locations</span>
             <span className="text-sm text-slate-500 font-gowun font-normal ml-2 opacity-60">지역 (Regions)</span>
          </span>
          <span className="text-sm text-slate-600 font-cinzel tracking-widest group-hover:text-emerald-300 transition-colors">{openSections.has('regions') ? 'CLOSE' : 'OPEN'}</span>
        </button>
        
        {openSections.has('regions') && (
            <div className="space-y-12 animate-fade-in mt-8">
                {orderedRegionKeys.map(regionName => {
                    const locs = regions[regionName] || [];
                    if (locs.length === 0) return null;

                    return (
                        <div key={regionName} className="relative">
                            <h3 className="text-xl font-cinzel font-bold text-slate-400 mb-6 pl-4 border-l border-slate-700 tracking-[0.2em] uppercase">
                               {regionName}
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {locs.map(loc => (
                                    <div 
                                        key={loc.id}
                                        onClick={() => !loc.isRestricted && onNavigateToLocation(loc)}
                                        className={`
                                            glass-panel rounded-xl p-6 transition-all duration-500 relative overflow-hidden group
                                            ${loc.isRestricted ? 'opacity-40 grayscale cursor-not-allowed' : 'hover:-translate-y-2 cursor-pointer glass-panel-hover'}
                                        `}
                                    >
                                        <div 
                                            className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-20 transition-opacity duration-700"
                                            style={{ backgroundImage: `url(${loc.customBgImage || `https://picsum.photos/seed/${loc.bgSeed}/400/200`})` }}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                        
                                        <div className="flex items-center justify-between mb-4 relative z-10">
                                            <div className="text-4xl filter drop-shadow-md group-hover:scale-110 transition-transform duration-300">{loc.emoji}</div>
                                            <span className="text-[10px] font-cinzel uppercase tracking-widest text-slate-500 border border-slate-700/50 px-2 py-1 rounded-full">
                                                {loc.faction.split(' ')[1].replace(/[()]/g, '')}
                                            </span>
                                        </div>
                                        
                                        <h4 className="text-xl font-bold text-slate-200 font-serif mb-2 group-hover:text-white group-hover:text-glow transition-colors relative z-10">
                                            {loc.name}
                                        </h4>
                                        <p className="text-sm text-slate-400 font-gowun line-clamp-2 leading-relaxed group-hover:text-slate-300 transition-colors relative z-10">
                                            {loc.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    );
                })}
            </div>
        )}
      </section>

      {/* Characters Section */}
      <section className="mb-16">
        <button 
          onClick={() => toggleSection('characters')}
          className="w-full flex items-center justify-between text-2xl font-serif text-slate-200 mb-6 group"
        >
           <span className="flex items-center gap-3">
             <span className="w-1 h-8 bg-purple-500/50 rounded-full group-hover:h-10 group-hover:bg-purple-400 transition-all duration-300"></span>
             <span className="group-hover:text-purple-200 transition-colors text-glow">Personas</span>
             <span className="text-sm text-slate-500 font-gowun font-normal ml-2 opacity-60">등장인물 (Characters)</span>
          </span>
          <span className="text-sm text-slate-600 font-cinzel tracking-widest group-hover:text-purple-300 transition-colors">{openSections.has('characters') ? 'CLOSE' : 'OPEN'}</span>
        </button>

        {openSections.has('characters') && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in mt-8">
                {Object.values(CHARACTERS).map(char => (
                    <div 
                        key={char.id} 
                        className="glass-panel rounded-xl overflow-hidden group hover:border-purple-400/30 transition-all duration-500 flex flex-col"
                    >
                        {/* Image Area */}
                        <div className="h-48 overflow-hidden relative">
                             <img 
                                src={char.customImage ? char.customImage : `https://picsum.photos/seed/${char.imageSeed}/400/300`} 
                                alt={char.name}
                                className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#1e1b4b]/80 to-transparent"></div>
                            <div className="absolute bottom-3 left-4 right-4 flex justify-between items-end">
                                <h3 className="text-xl font-bold text-white font-serif drop-shadow-md group-hover:text-purple-200 transition-colors">
                                    {char.name}
                                </h3>
                                <span className="text-2xl filter drop-shadow-md">{char.emoji}</span>
                            </div>
                        </div>

                        {/* Content Area */}
                        <div className="p-5 flex-1 flex flex-col">
                            <div className="mb-3">
                                <span className="text-[10px] text-purple-300/80 font-cinzel uppercase tracking-widest border border-purple-500/20 px-2 py-0.5 rounded bg-purple-900/10">
                                    {char.faction.split(' ')[1]}
                                </span>
                            </div>
                            <p className="text-sm text-slate-400 font-gowun leading-relaxed mb-6 italic">
                                "{char.shortDesc}"
                            </p>
                            
                            <div className="mt-auto">
                                <button 
                                    onClick={() => onNavigateToCharacter(char)}
                                    className="w-full py-2.5 rounded border border-white/10 hover:bg-white/5 text-slate-400 hover:text-white text-xs font-cinzel uppercase tracking-[0.2em] transition-all duration-300 group-hover:border-purple-500/30"
                                >
                                    View Profile
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        )}
      </section>

      {/* Factions Section (Bottom, smaller) */}
      <section className="mb-8 opacity-80 hover:opacity-100 transition-opacity">
        <button 
          onClick={() => toggleSection('factions')}
          className="w-full flex items-center justify-between text-xl font-serif text-slate-400 mb-4 group"
        >
          <span className="flex items-center gap-3">
             <span className="w-1 h-6 bg-slate-700 rounded-full group-hover:bg-slate-500 transition-all"></span>
             <span>Factions & Groups</span>
          </span>
          <span className="text-xs text-slate-700 font-cinzel tracking-widest">{openSections.has('factions') ? '▲' : '▼'}</span>
        </button>

        {openSections.has('factions') && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-fade-in mt-4">
                {FACTION_DETAILS.map(faction => (
                    <div key={faction.id} className="border border-white/5 bg-white/[0.02] p-4 rounded hover:bg-white/[0.04] transition-colors">
                        <h3 className="text-sm font-bold text-slate-300 mb-1 font-serif">{faction.name}</h3>
                        <p className="text-xs text-slate-500 leading-relaxed font-gowun">{faction.desc}</p>
                    </div>
                ))}
            </div>
        )}
      </section>

    </div>
  );
};

export default LorePage;
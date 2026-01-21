import React, { useState } from 'react';
import { Character } from '../types';

interface CharacterDetailViewProps {
  character: Character;
  onBack: () => void;
}

const CharacterDetailView: React.FC<CharacterDetailViewProps> = ({ character, onBack }) => {
  const [isSecretRevealed, setIsSecretRevealed] = useState(false);
  const [isOriginRevealed, setIsOriginRevealed] = useState(false);
  const [isTriggerRevealed, setIsTriggerRevealed] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6 md:p-12 animate-fade-in pb-32">
       <button 
        onClick={onBack}
        className="mb-8 text-xs text-slate-400 hover:text-white transition-colors flex items-center gap-2 font-cinzel tracking-widest uppercase group"
      >
        <span className="group-hover:-translate-x-1 transition-transform">←</span> Back
      </button>

      <div className="glass-panel rounded-2xl overflow-hidden relative shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/10">
        
        {/* Background Ambient Light */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px] pointer-events-none -z-10"></div>

        {/* Header / Banner */}
        <div className="h-[300px] relative overflow-hidden group">
             <img 
                src={character.customImage ? character.customImage : `https://picsum.photos/seed/${character.imageSeed}/1200/600`} 
                alt={character.name}
                className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 transition-all duration-[3s]"
            />
             <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/60 to-transparent"></div>
             
             <div className="absolute bottom-0 left-0 w-full p-8 md:p-10 flex flex-col md:flex-row items-end md:items-center gap-8">
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-2 border-white/10 overflow-hidden shadow-2xl bg-black/50 backdrop-blur shrink-0 relative group-hover:scale-105 transition-transform duration-500">
                    <img 
                        src={character.customImage ? character.customImage : `https://picsum.photos/seed/${character.imageSeed}/300/300`} 
                        alt={character.name}
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="mb-2">
                    <h1 className="text-4xl md:text-5xl font-serif font-thin text-white flex items-center gap-4 text-glow mb-2">
                        {character.name}
                    </h1>
                    <div className="flex items-center gap-3">
                        <span className="text-sm font-cinzel text-purple-300 tracking-[0.2em] border border-purple-500/30 px-3 py-1 rounded-full bg-purple-900/20">
                            {character.faction.split(' ')[1]}
                        </span>
                        <span className="text-2xl opacity-80">{character.emoji}</span>
                    </div>
                </div>
             </div>
        </div>

        {/* Content Body */}
        <div className="p-8 md:p-12 space-y-12 bg-gradient-to-b from-[#0f172a] to-transparent">
            {/* Short Description */}
            <section className="text-center">
                <div className="w-12 h-1 bg-purple-500/50 mx-auto mb-6 rounded-full"></div>
                <p className="text-xl md:text-2xl text-slate-300 font-gowun italic leading-relaxed text-glow">
                    "{character.shortDesc}"
                </p>
            </section>

            {/* Full Profile (Raw Data) */}
            <section>
                <h3 className="text-sm font-cinzel font-bold text-slate-500 mb-6 border-b border-white/5 pb-2 tracking-[0.2em]">
                    ARCHIVED DATA
                </h3>
                <div className="bg-black/20 border border-white/5 p-8 rounded-lg text-slate-300 font-gowun text-sm md:text-base whitespace-pre-wrap leading-8 shadow-inner hover:bg-black/30 transition-colors">
                    {character.fullProfile.trim()}
                </div>
            </section>
            
            <div className="space-y-4">
                {/* ORIGIN Section */}
                <section>
                    <button 
                        onClick={() => setIsOriginRevealed(!isOriginRevealed)}
                        className="w-full flex items-center justify-between p-4 glass-panel rounded hover:bg-cyan-900/10 transition-colors group border-l-2 border-l-cyan-600"
                    >
                        <span className="flex items-center gap-4">
                            <span className="text-xl group-hover:text-cyan-400 transition-colors">📘</span>
                            <span className="font-cinzel font-bold text-slate-400 group-hover:text-cyan-200 tracking-widest text-sm">ORIGIN STORY</span>
                        </span>
                        <span className="text-[10px] font-mono text-slate-600 group-hover:text-cyan-400">{isOriginRevealed ? 'CLOSE' : 'READ'}</span>
                    </button>
                    
                    {isOriginRevealed && (
                        <div className="mt-2 bg-cyan-950/10 border border-cyan-900/20 p-6 rounded-lg animate-fade-in relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-900 to-transparent opacity-50"></div>
                            <p className="text-cyan-200/90 leading-loose font-gowun relative z-10">
                                {character.origin}
                            </p>
                        </div>
                    )}
                </section>

                {/* TRIGGER Section */}
                <section>
                    <button 
                        onClick={() => setIsTriggerRevealed(!isTriggerRevealed)}
                        className="w-full flex items-center justify-between p-4 glass-panel rounded hover:bg-amber-900/10 transition-colors group border-l-2 border-l-amber-600"
                    >
                        <span className="flex items-center gap-4">
                            <span className="text-xl group-hover:text-amber-400 transition-colors">⚡</span>
                            <span className="font-cinzel font-bold text-slate-400 group-hover:text-amber-200 tracking-widest text-sm">TRIGGER POINT</span>
                        </span>
                        <span className="text-[10px] font-mono text-slate-600 group-hover:text-amber-400">{isTriggerRevealed ? 'CLOSE' : 'CHECK'}</span>
                    </button>
                    
                    {isTriggerRevealed && (
                        <div className="mt-2 bg-amber-950/10 border border-amber-900/20 p-6 rounded-lg animate-fade-in relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-900 to-transparent opacity-50"></div>
                            <p className="text-amber-200/90 leading-loose font-gowun relative z-10">
                                {character.trigger}
                            </p>
                        </div>
                    )}
                </section>

                {/* Secret Section */}
                <section>
                    <button 
                        onClick={() => setIsSecretRevealed(!isSecretRevealed)}
                        className="w-full flex items-center justify-between p-4 glass-panel rounded hover:bg-red-900/10 transition-colors group border-l-2 border-l-red-800"
                    >
                        <span className="flex items-center gap-4">
                            <span className="text-xl group-hover:text-red-400 transition-colors">🔏</span>
                            <span className="font-cinzel font-bold text-slate-400 group-hover:text-red-200 tracking-widest text-sm">HIDDEN TRUTH</span>
                        </span>
                        <span className="text-[10px] font-mono text-slate-600 group-hover:text-red-400">{isSecretRevealed ? 'CLOSE' : 'DECRYPT'}</span>
                    </button>
                    
                    {isSecretRevealed ? (
                        <div className="mt-2 bg-red-950/10 border border-red-900/20 p-8 rounded-lg animate-fade-in relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-900 to-transparent opacity-50"></div>
                            <p className="text-red-200/90 leading-loose font-gowun relative z-10">
                                {character.secret}
                            </p>
                        </div>
                    ) : (
                        <div 
                            onClick={() => setIsSecretRevealed(true)}
                            className="mt-2 h-24 border border-white/5 border-dashed rounded flex flex-col items-center justify-center cursor-pointer hover:border-red-900/30 hover:bg-red-900/5 transition-all group opacity-50 hover:opacity-100"
                        >
                            <span className="text-slate-600 group-hover:text-red-400 transition-colors text-xs font-cinzel tracking-[0.3em] mb-2">
                                ENCRYPTED CONTENT
                            </span>
                            <span className="text-[10px] text-slate-700 font-mono">Click to reveal forbidden knowledge</span>
                        </div>
                    )}
                </section>
            </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterDetailView;
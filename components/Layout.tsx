import React from 'react';
import { PlayerStats } from '../types';

interface LayoutProps {
  children: React.ReactNode;
  stats: PlayerStats;
  currentLocationName: string;
  onNavigateHome: () => void;
}

const Layout: React.FC<LayoutProps> = ({ children, stats, currentLocationName, onNavigateHome }) => {
  // EP Color logic
  const epColor = stats.ep < 20 ? 'text-red-400 animate-pulse text-glow-red' : 'text-blue-200 text-glow';
  const epBarColor = stats.ep < 20 ? 'bg-red-900 shadow-[0_0_10px_rgba(220,38,38,0.5)]' : 'bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]';

  return (
    <div className="min-h-screen text-slate-200 font-gowun selection:bg-purple-900 selection:text-white flex flex-col relative overflow-hidden">
      
      {/* Background - Atmospheric Gradient */}
      <div className="fixed inset-0 z-[-1] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#1e1b4b] via-[#0f172a] to-[#020617]"></div>
      
      {/* Mist/Fog Overlay (Static for performance, could be animated) */}
      <div className="fixed inset-0 z-[-1] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-150 contrast-150 mix-blend-overlay pointer-events-none"></div>

      {/* Top Navigation / Status Bar */}
      <header className="sticky top-0 z-50 glass-panel border-b-0">
        <div className="max-w-5xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer group" onClick={onNavigateHome}>
            <span className="text-2xl opacity-80 group-hover:scale-110 transition-transform filter drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">📜</span>
            <div className="flex flex-col">
                <h1 className="font-cinzel text-sm md:text-base font-bold tracking-[0.2em] text-transparent bg-clip-text bg-gradient-to-r from-slate-100 to-slate-400 group-hover:from-white group-hover:to-blue-200 transition-all duration-500 whitespace-nowrap">
                  New rewriter
                </h1>
                <span className="text-[10px] text-slate-400 tracking-widest uppercase opacity-60">The Rewritten Realm</span>
            </div>
          </div>
          
          <div className="flex items-center gap-6 text-xs font-cinzel">
             <div className="flex flex-col items-end">
                <div className="flex items-center gap-2 tracking-widest" title="존재도 (Existence Presence)">
                  <span className={`${epColor} font-bold`}>EP {stats.ep}%</span>
                </div>
                {/* Visual EP Bar */}
                <div className="w-24 h-0.5 bg-slate-800/50 rounded-full mt-1.5 overflow-hidden backdrop-blur-sm">
                    <div className={`h-full ${epBarColor} transition-all duration-1000 opacity-80`} style={{ width: `${stats.ep}%` }}></div>
                </div>
             </div>
             
             <div className="flex items-center gap-4 border-l border-white/10 pl-6 h-8">
                <div className="flex flex-col items-center group">
                    <span className="text-cyan-300 font-bold group-hover:text-cyan-100 transition-colors drop-shadow-sm">💎 {stats.crystals}</span>
                </div>
                <div className="flex flex-col items-center group">
                    <span className="text-amber-300 font-bold group-hover:text-amber-100 transition-colors drop-shadow-sm">💰 {stats.coins}</span>
                </div>
             </div>
          </div>
        </div>
      </header>

      {/* Sub-header for location */}
      {currentLocationName && (
        <div className="bg-gradient-to-r from-transparent via-blue-900/20 to-transparent border-y border-white/5 py-1.5 backdrop-blur-sm">
            <div className="max-w-4xl mx-auto px-4 flex items-center justify-center text-xs text-blue-200/60 font-cinzel tracking-[0.3em]">
                <span className="mr-3 opacity-50">LOCATION //</span>
                <span className="text-blue-100 text-glow">{currentLocationName}</span>
            </div>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-1 w-full relative z-10">
        {children}
      </main>

      {/* Footer */}
      <footer className="py-12 text-center text-slate-500 text-xs font-gowun relative z-10">
        <div className="w-24 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent mx-auto mb-6"></div>
        <p className="mb-2 tracking-widest opacity-70">⚠️ 경고: 상호작용할 때마다 존재도가 감소합니다.</p>
        <p className="italic opacity-50">"악역들을 위한 낙원은 없다."</p>
      </footer>
    </div>
  );
};

export default Layout;
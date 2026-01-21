import React, { useState, useEffect, useRef } from 'react';
import { Character, ChatMessage, PlayerStats } from '../types';
import { generateCharacterResponse } from '../geminiService';

interface ChatInterfaceProps {
  character: Character;
  playerStats: PlayerStats;
  onUpdateStats: (newStats: PlayerStats) => void;
  onLeave: () => void;
}

const ChatInterface: React.FC<ChatInterfaceProps> = ({ character, playerStats, onUpdateStats, onLeave }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Initial greeting
  useEffect(() => {
    if (messages.length === 0) {
      setMessages([
        {
          id: 'init',
          role: 'model',
          text: `*${character.name}이(가) 당신을 바라봅니다.*`,
          timestamp: Date.now()
        }
      ]);
    }
  }, [character, messages.length]);

  // Scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;
    
    // 1. Decrease EP for action
    const epCost = Math.floor(Math.random() * 2) + 1; // 1-2% drop
    const newStats = { ...playerStats, ep: Math.max(0, playerStats.ep - epCost) };
    onUpdateStats(newStats);

    // 2. Add User Message
    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: input,
      timestamp: Date.now()
    };
    
    const updatedHistory = [...messages, userMsg];
    setMessages(updatedHistory);
    setInput('');
    setIsLoading(true);

    if (newStats.ep === 0) {
        // Death state simulation
        setTimeout(() => {
            setMessages(prev => [...prev, {
                id: 'death',
                role: 'model',
                text: `(당신의 존재도가 완전히 희미해졌습니다. 당신은 이 세계의 안개 속으로 흩어집니다...)`,
                timestamp: Date.now()
            }]);
            setIsLoading(false);
        }, 1000);
        return;
    }

    // 3. Call AI
    const responseText = await generateCharacterResponse(character, updatedHistory, newStats, userMsg.text);

    const aiMsg: ChatMessage = {
      id: (Date.now() + 1).toString(),
      role: 'model',
      text: responseText,
      timestamp: Date.now()
    };

    setMessages(prev => [...prev, aiMsg]);
    setIsLoading(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-6 h-[calc(100vh-100px)]">
        <div className="flex flex-col h-full bg-slate-900/40 rounded-sm border border-slate-800 overflow-hidden relative shadow-2xl">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-slate-800 bg-black/60 backdrop-blur">
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden border border-slate-600">
                        <img 
                            src={character.customImage ? character.customImage : `https://picsum.photos/seed/${character.imageSeed}/100/100`} 
                            alt={character.name}
                            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all"
                        />
                    </div>
                    <div>
                        <h3 className="font-serif font-bold text-slate-200 text-lg">{character.name}</h3>
                        <span className="text-xs text-slate-500 font-mono tracking-wider">{character.faction.split(' ')[1]}</span>
                    </div>
                </div>
                <button onClick={onLeave} className="text-slate-500 hover:text-red-400 px-3 py-1 rounded border border-slate-800 hover:border-red-900/50 transition-colors text-xs font-serif uppercase tracking-widest">
                    떠나기 (Leave)
                </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-6 scrollbar-thin scrollbar-thumb-slate-800 scrollbar-track-transparent">
                {messages.map((msg) => (
                    <div 
                        key={msg.id} 
                        className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                        <div 
                            className={`
                                max-w-[85%] rounded-lg px-5 py-3 text-sm leading-relaxed whitespace-pre-wrap shadow-lg
                                ${msg.role === 'user' 
                                    ? 'bg-slate-800/80 text-slate-300 border border-slate-700' 
                                    : 'bg-black/40 text-slate-200 border border-slate-800'
                                }
                            `}
                        >
                            {msg.role === 'model' && (
                                <span className="block text-[10px] text-red-900 mb-1 font-bold uppercase tracking-wider">
                                    {character.name}
                                </span>
                            )}
                            {msg.text}
                        </div>
                    </div>
                ))}
                {isLoading && (
                    <div className="flex justify-start">
                        <div className="bg-black/40 rounded-lg px-5 py-3 border border-slate-800 flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-red-900 rounded-full animate-bounce"></div>
                            <div className="w-1.5 h-1.5 bg-red-900 rounded-full animate-bounce delay-75"></div>
                            <div className="w-1.5 h-1.5 bg-red-900 rounded-full animate-bounce delay-150"></div>
                        </div>
                    </div>
                )}
                <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 bg-black/80 border-t border-slate-800">
                <div className="relative">
                    <textarea
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={handleKeyPress}
                        placeholder={playerStats.ep > 0 ? "대화를 입력하세요..." : "당신의 존재가 희미해져 말을 걸 수 없습니다..."}
                        disabled={playerStats.ep <= 0 || isLoading}
                        className="w-full bg-slate-900/50 border border-slate-700 rounded-sm pl-4 pr-12 py-3 text-sm text-slate-200 focus:outline-none focus:border-red-900 resize-none h-16 placeholder:text-slate-600 font-serif"
                    />
                    <button
                        onClick={handleSend}
                        disabled={!input.trim() || playerStats.ep <= 0 || isLoading}
                        className="absolute right-2 top-2 p-2 text-slate-500 hover:text-red-500 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </div>
  );
};

export default ChatInterface;
// Template: Netflix Clone (app/page.tsx)
"use client";
import React from 'react';
import { Play, Info, Plus, Search, Bell } from 'lucide-react';

export default function NetflixTemplate() {
  return (
    <div className="min-h-screen bg-[#141414] text-white font-sans selection:bg-red-600">
      <nav className="px-12 py-6 flex items-center justify-between fixed top-0 w-full z-50 bg-gradient-to-b from-black/80 to-transparent">
        <div className="flex items-center gap-12">
          <h1 className="text-red-600 text-3xl font-black tracking-tighter">FLUXIFLIX</h1>
          <div className="hidden md:flex gap-4 text-sm font-medium text-gray-300">
            <span className="text-white">Home</span><span>TV Shows</span><span>Movies</span><span>New & Popular</span>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <Search className="w-5 h-5" /><Bell className="w-5 h-5" />
          <div className="w-8 h-8 bg-blue-500 rounded" />
        </div>
      </nav>

      <section className="h-[90vh] relative flex flex-col justify-center px-12">
        <div className="absolute inset-0 -z-10">
          <img src="https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#141414] to-transparent" />
        </div>
        
        <div className="max-w-xl space-y-6">
          <h2 className="text-7xl font-black tracking-tight uppercase">Cyber <br/> Legends</h2>
          <p className="text-lg text-gray-200">In a world where digital consciousness is the new currency, one hacker must break the ultimate firewall to save reality.</p>
          <div className="flex gap-4 pt-4">
            <button className="bg-white text-black px-8 py-3 rounded flex items-center gap-2 font-bold hover:bg-gray-200 transition-colors">
              <Play className="fill-current w-5 h-5" /> Play
            </button>
            <button className="bg-gray-500/50 text-white px-8 py-3 rounded flex items-center gap-2 font-bold hover:bg-gray-500/70 backdrop-blur">
              <Info className="w-5 h-5" /> More Info
            </button>
          </div>
        </div>
      </section>

      <section className="px-12 -mt-20 relative z-10 space-y-12 pb-20">
        <div>
          <h3 className="text-xl font-bold mb-4">Trending Now</h3>
          <div className="flex gap-2 overflow-x-auto no-scrollbar">
            {[1,2,3,4,5,6].map(i => (
              <div key={i} className="min-w-[240px] aspect-video rounded-md overflow-hidden bg-zinc-800 hover:scale-110 transition-transform duration-300 cursor-pointer">
                <img src={`https://images.unsplash.com/photo-1621839673705-6617adf9e890?q=80&w=2232&auto=format&fit=crop`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

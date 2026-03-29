// Template: Netflix Clone (app/page.tsx)
"use client";
import React, { useState, useEffect } from 'react';
import { Play, Info, Plus, Search, Bell, Menu, ChevronRight, Check, Volume2, RotateCcw } from 'lucide-react';

export default function NetflixTemplate() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const movieRows = [
    {
      title: "Trending Now",
      movies: [
        "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=2025&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2059&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1542204172-356399558651?q=80&w=1974&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1616530940355-351fabd9524b?q=80&w=1935&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1574267432553-4b4628081c31?q=80&w=2062&auto=format&fit=crop"
      ]
    },
    {
      title: "New Releases",
      movies: [
        "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1559570278-eb8d71d06403?q=80&w=1956&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1620145646320-9118c7280373?q=80&w=2071&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?q=80&w=2056&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1509248961158-e54f6934749c?q=80&w=2074&auto=format&fit=crop"
      ]
    },
    {
      title: "Action & Adventure",
      movies: [
        "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1968&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1535016120720-40c646bebbdc?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1524712245354-2c4e5e7121c0?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1533928298208-27ff66555d8d?q=80&w=2070&auto=format&fit=crop"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#141414] text-white font-sans selection:bg-red-600 overflow-x-hidden">
      {/* Navigation */}
      <nav className={`px-4 md:px-12 py-4 flex items-center justify-between fixed top-0 w-full z-[100] transition-colors duration-500 ${isScrolled ? 'bg-[#141414]' : 'bg-gradient-to-b from-black/80 to-transparent'}`}>
        <div className="flex items-center gap-4 md:gap-12">
          <h1 className="text-red-600 text-2xl md:text-3xl font-black tracking-tighter cursor-pointer hover:scale-105 transition-transform">FLUXIFLIX</h1>
          <div className="hidden lg:flex gap-5 text-sm font-medium text-gray-300">
            <span className="text-white cursor-pointer hover:text-gray-300 transition-colors">Home</span>
            <span className="cursor-pointer hover:text-gray-300 transition-colors">TV Shows</span>
            <span className="cursor-pointer hover:text-gray-300 transition-colors">Movies</span>
            <span className="cursor-pointer hover:text-gray-300 transition-colors">New & Popular</span>
            <span className="cursor-pointer hover:text-gray-300 transition-colors">My List</span>
            <span className="cursor-pointer hover:text-gray-300 transition-colors">Browse by Languages</span>
          </div>
          {/* Mobile Menu Icon */}
          <div className="lg:hidden">
            <Menu className="w-6 h-6" />
          </div>
        </div>
        <div className="flex items-center gap-4 md:gap-6">
          <Search className="w-5 h-5 cursor-pointer hover:text-gray-400 transition-colors" />
          <span className="hidden md:block text-sm font-medium">Children</span>
          <Bell className="w-5 h-5 cursor-pointer hover:text-gray-400 transition-colors" />
          <div className="w-8 h-8 bg-blue-500 rounded cursor-pointer overflow-hidden border-2 border-transparent hover:border-white transition-all">
            <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1760&auto=format&fit=crop" className="w-full h-full object-cover" alt="profile" />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="h-[70vh] md:h-[95vh] relative flex flex-col justify-center px-4 md:px-12">
        <div className="absolute inset-0 -z-10 bg-black">
          <img 
            src="https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=2070&auto=format&fit=crop" 
            className="w-full h-full object-cover opacity-80" 
            alt="Hero Background"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-[#141414] via-[#141414]/80 to-transparent" />
        </div>
        
        <div className="max-w-2xl space-y-4 md:space-y-6 animate-in fade-in slide-in-from-left-10 duration-1000">
          <div className="flex items-center gap-2">
            <div className="bg-red-600 p-0.5 rounded-sm">
              <h4 className="text-[10px] font-black leading-none px-1">SERIES</h4>
            </div>
            <h4 className="text-gray-400 font-bold tracking-[0.3em] text-xs uppercase">Netflix Original</h4>
          </div>
          <h2 className="text-5xl md:text-8xl font-black tracking-tight leading-none uppercase drop-shadow-2xl">
            CYBER <br/> <span className="text-red-600">LEGENDS</span>
          </h2>
          <div className="flex items-center gap-3 text-lg font-medium">
             <span className="text-green-500">98% Match</span>
             <span className="text-gray-400">2024</span>
             <span className="border border-gray-500 px-2 py-0.5 text-xs rounded">18+</span>
             <span className="text-gray-400">4 Seasons</span>
          </div>
          <p className="text-base md:text-xl text-gray-200 max-w-lg leading-relaxed drop-shadow-md">
            In a world where digital consciousness is the new currency, one elite hacker must break the ultimate firewall to save what's left of human reality.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <button className="bg-white text-black px-6 md:px-10 py-3 rounded-md flex items-center justify-center gap-3 font-bold hover:bg-white/80 transition-all transform active:scale-95 shadow-xl">
              <Play className="fill-current w-6 h-6" /> Play Now
            </button>
            <button className="bg-gray-500/40 text-white px-6 md:px-10 py-3 rounded-md flex items-center justify-center gap-3 font-bold hover:bg-gray-500/60 backdrop-blur-md transition-all transform active:scale-95 border border-white/10">
              <Info className="w-6 h-6" /> More Info
            </button>
          </div>
        </div>

        {/* Hero Bottom Controls */}
        <div className="absolute bottom-20 md:bottom-40 right-0 flex items-center gap-4">
           <button className="p-2 border border-white/40 rounded-full hover:bg-white/10 transition-colors">
              <RotateCcw className="w-5 h-5" />
           </button>
           <button className="p-2 border border-white/40 rounded-full hover:bg-white/10 transition-colors">
              <Volume2 className="w-5 h-5" />
           </button>
           <div className="bg-gray-800/80 border-l-4 border-gray-300 py-2 px-10 text-lg font-medium">
              18+
           </div>
        </div>
      </section>

      {/* Rows Container */}
      <section className="relative z-10 -mt-32 md:-mt-48 pb-20 space-y-12">
        {movieRows.map((row, rowIndex) => (
          <div key={rowIndex} className="space-y-2 group/row">
            <div className="px-4 md:px-12 flex items-center justify-between">
               <h3 className="text-lg md:text-2xl font-bold cursor-pointer group-hover/row:text-white transition-colors flex items-center gap-2">
                 {row.title}
                 <ChevronRight className="w-5 h-5 opacity-0 group-hover/row:opacity-100 -translate-x-2 group-hover/row:translate-x-0 transition-all" />
               </h3>
            </div>
            
            <div className="flex gap-2.5 overflow-x-auto no-scrollbar px-4 md:px-12 py-4">
              {row.movies.map((movieUrl, i) => (
                <div 
                  key={i} 
                  className="relative min-w-[200px] md:min-w-[300px] aspect-video rounded-md overflow-hidden bg-zinc-900 group cursor-pointer transition-all duration-300 hover:scale-[1.05] hover:z-50 shadow-lg"
                >
                  <img 
                    src={movieUrl} 
                    className="w-full h-full object-cover transition-transform duration-500" 
                    alt={`Movie ${i}`}
                  />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4 space-y-3">
                     <div className="flex gap-2">
                        <div className="bg-white p-2 rounded-full text-black hover:bg-gray-200"><Play className="w-4 h-4 fill-current" /></div>
                        <div className="bg-zinc-800/80 p-2 rounded-full border border-gray-500 hover:border-white"><Plus className="w-4 h-4" /></div>
                        <div className="ml-auto bg-zinc-800/80 p-2 rounded-full border border-gray-500 hover:border-white"><Info className="w-4 h-4" /></div>
                     </div>
                     <div className="space-y-1">
                        <div className="flex items-center gap-2 text-[10px] font-bold">
                           <span className="text-green-500">97% Match</span>
                           <span className="border border-gray-400 px-1 py-0 rounded-sm">16+</span>
                           <span>2h 15m</span>
                           <span className="border border-gray-500 px-1 rounded-sm text-[8px]">HD</span>
                        </div>
                        <div className="flex flex-wrap gap-2 text-[10px] text-gray-400">
                           <span>Suspenseful</span>
                           <span>•</span>
                           <span>Sci-Fi</span>
                           <span>•</span>
                           <span>Cyberpunk</span>
                        </div>
                     </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer className="px-4 md:px-12 py-20 max-w-6xl mx-auto space-y-12 opacity-60 hover:opacity-100 transition-opacity">
         <div className="flex gap-8">
            {/* Social icons placeholder */}
            <div className="text-2xl cursor-pointer">f</div>
            <div className="text-2xl cursor-pointer">i</div>
            <div className="text-2xl cursor-pointer">x</div>
            <div className="text-2xl cursor-pointer">y</div>
         </div>
         
         <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-sm text-gray-400">
            <ul className="space-y-4">
               <li className="hover:underline cursor-pointer transition-all">Audio Description</li>
               <li className="hover:underline cursor-pointer transition-all">Investor Relations</li>
               <li className="hover:underline cursor-pointer transition-all">Legal Notices</li>
            </ul>
            <ul className="space-y-4">
               <li className="hover:underline cursor-pointer transition-all">Help Center</li>
               <li className="hover:underline cursor-pointer transition-all">Jobs</li>
               <li className="hover:underline cursor-pointer transition-all">Cookie Preferences</li>
            </ul>
            <ul className="space-y-4">
               <li className="hover:underline cursor-pointer transition-all">Gift Cards</li>
               <li className="hover:underline cursor-pointer transition-all">Terms of Use</li>
               <li className="hover:underline cursor-pointer transition-all">Corporate Information</li>
            </ul>
            <ul className="space-y-4">
               <li className="hover:underline cursor-pointer transition-all">Media Center</li>
               <li className="hover:underline cursor-pointer transition-all">Privacy</li>
               <li className="hover:underline cursor-pointer transition-all">Contact Us</li>
            </ul>
         </div>

         <div className="pt-8">
            <button className="border border-gray-500 px-4 py-2 text-xs hover:text-white hover:border-white transition-all">Service Code</button>
            <p className="mt-8 text-xs">© 1997-2024 FluxiFlix, Inc.</p>
         </div>
      </footer>
    </div>
  );
}


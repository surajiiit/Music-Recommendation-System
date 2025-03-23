import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Search, Library, PlusSquare, Heart, Music, User, History, Settings } from 'lucide-react';

export function Sidebar() {
  return (
    <div className="w-64 bg-black text-white h-screen p-6 flex flex-col">
      <div className="flex items-center gap-2 mb-8">
        <Music className="w-8 h-8" />
        <span className="text-xl font-bold">Melodify</span>
      </div>
      
      <nav className="space-y-4">
        <NavLink 
          to="/" 
          className={({ isActive }) => 
            `flex items-center gap-4 transition-colors ${isActive ? 'text-white' : 'text-gray-300 hover:text-white'}`
          }
        >
          <Home className="w-6 h-6" />
          <span>Home</span>
        </NavLink>
        <NavLink 
          to="/search" 
          className={({ isActive }) => 
            `flex items-center gap-4 transition-colors ${isActive ? 'text-white' : 'text-gray-300 hover:text-white'}`
          }
        >
          <Search className="w-6 h-6" />
          <span>Search</span>
        </NavLink>
        <NavLink 
          to="/library" 
          className={({ isActive }) => 
            `flex items-center gap-4 transition-colors ${isActive ? 'text-white' : 'text-gray-300 hover:text-white'}`
          }
        >
          <Library className="w-6 h-6" />
          <span>Your Library</span>
        </NavLink>
        <NavLink 
          to="/history" 
          className={({ isActive }) => 
            `flex items-center gap-4 transition-colors ${isActive ? 'text-white' : 'text-gray-300 hover:text-white'}`
          }
        >
          <History className="w-6 h-6" />
          <span>History</span>
        </NavLink>
      </nav>

      <div className="mt-8 space-y-4">
        <NavLink 
          to="/create-playlist" 
          className={({ isActive }) => 
            `flex items-center gap-4 transition-colors ${isActive ? 'text-white' : 'text-gray-300 hover:text-white'}`
          }
        >
          <PlusSquare className="w-6 h-6" />
          <span>Create Playlist</span>
        </NavLink>
        <NavLink 
          to="/liked-songs" 
          className={({ isActive }) => 
            `flex items-center gap-4 transition-colors ${isActive ? 'text-white' : 'text-gray-300 hover:text-white'}`
          }
        >
          <Heart className="w-6 h-6" />
          <span>Liked Songs</span>
        </NavLink>
      </div>

      <div className="mt-auto">
        <div className="border-t border-gray-800 pt-4 space-y-4">
          <NavLink 
            to="/settings" 
            className={({ isActive }) => 
              `flex items-center gap-4 transition-colors ${isActive ? 'text-white' : 'text-gray-300 hover:text-white'}`
            }
          >
            <Settings className="w-6 h-6" />
            <span>Settings</span>
          </NavLink>
          <div className="text-sm text-gray-400">Signed in as</div>
          <NavLink 
            to="/profile" 
            className="flex items-center gap-2 group hover:text-white transition-colors"
          >
            <img
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=50&h=50&fit=crop"
              alt="User avatar"
              className="w-8 h-8 rounded-full"
            />
            <span className="text-sm font-medium group-hover:text-white transition-colors">John Doe</span>
          </NavLink>
        </div>
      </div>
    </div>
  );
}


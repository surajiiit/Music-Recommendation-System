import React from 'react';
import { Play, Clock } from 'lucide-react';

const recentlyPlayed = [
  {
    id: '1',
    title: 'Midnight City',
    artist: 'M83',
    cover: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop'
  },
  {
    id: '2',
    title: 'Blinding Lights',
    artist: 'The Weeknd',
    cover: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&h=300&fit=crop'
  },
  // Add more songs as needed
];

const recommendedPlaylists = [
  {
    id: '1',
    title: 'Synthwave Dreams',
    description: 'Best retro-wave tracks',
    cover: 'https://images.unsplash.com/photo-1614149162883-504ce4d13909?w=300&h=300&fit=crop'
  },
  {
    id: '2',
    title: 'Chill Vibes',
    description: 'Relaxing beats',
    cover: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=300&h=300&fit=crop'
  },
  // Add more playlists as needed
];

export function Dashboard() {
  return (
    <div className="flex-1 overflow-auto bg-gradient-to-b from-blue-900 to-black text-white p-8">
      <header className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">Good evening</h1>
        <div className="flex items-center gap-4">
          <button className="hover:text-gray-300 transition-colors">
            <Clock className="w-6 h-6" />
          </button>
          <img
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=40&h=40&fit=crop"
            alt="User avatar"
            className="w-10 h-10 rounded-full"
          />
        </div>
      </header>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Recently Played</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
          {recentlyPlayed.map(song => (
            <div
              key={song.id}
              className="bg-gray-900/50 rounded-lg p-4 hover:bg-gray-900/80 transition-colors group cursor-pointer"
            >
              <div className="relative">
                <img
                  src={song.cover}
                  alt={song.title}
                  className="w-full aspect-square object-cover rounded-md mb-4"
                />
                <button className="absolute bottom-4 right-4 bg-green-500 rounded-full p-3 opacity-0 group-hover:opacity-100 transition-opacity shadow-lg hover:scale-105 transform">
                  <Play className="w-6 h-6 text-black" />
                </button>
              </div>
              <h3 className="font-medium truncate">{song.title}</h3>
              <p className="text-sm text-gray-400 truncate">{song.artist}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Made for You</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {recommendedPlaylists.map(playlist => (
            <div
              key={playlist.id}
              className="bg-gray-900/50 rounded-lg p-4 hover:bg-gray-900/80 transition-colors group cursor-pointer"
            >
              <div className="relative">
                <img
                  src={playlist.cover}
                  alt={playlist.title}
                  className="w-full aspect-square object-cover rounded-md mb-4"
                />
                <button className="absolute bottom-4 right-4 bg-green-500 rounded-full p-3 opacity-0 group-hover:opacity-100 transition-opacity shadow-lg hover:scale-105 transform">
                  <Play className="w-6 h-6 text-black" />
                </button>
              </div>
              <h3 className="font-medium truncate">{playlist.title}</h3>
              <p className="text-sm text-gray-400 truncate">{playlist.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}


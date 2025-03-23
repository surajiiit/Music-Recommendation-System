import React, { useState } from 'react';
import { Grid, List, Filter } from 'lucide-react';
import clsx from 'clsx';

const playlists = [
  {
    id: '1',
    name: 'Chill Vibes',
    type: 'Playlist',
    owner: 'John Doe',
    lastPlayed: '2 hours ago',
    cover: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=300&h=300&fit=crop'
  },
  {
    id: '2',
    name: 'Workout Mix',
    type: 'Playlist',
    owner: 'John Doe',
    lastPlayed: 'Yesterday',
    cover: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&h=300&fit=crop'
  },
];

export function Library() {
  const [viewType, setViewType] = useState<'grid' | 'list'>('grid');

  return (
    <div className="flex-1 overflow-auto bg-gradient-to-b from-gray-900 to-black p-8">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
            <Filter className="w-5 h-5" />
          </button>
          <div className="flex bg-white/10 rounded-full p-1">
            <button
              className={clsx(
                'p-2 rounded-full transition-colors',
                viewType === 'grid' && 'bg-white/20'
              )}
              onClick={() => setViewType('grid')}
            >
              <Grid className="w-5 h-5" />
            </button>
            <button
              className={clsx(
                'p-2 rounded-full transition-colors',
                viewType === 'list' && 'bg-white/20'
              )}
              onClick={() => setViewType('list')}
            >
              <List className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {viewType === 'grid' ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {playlists.map((playlist) => (
            <div
              key={playlist.id}
              className="bg-gray-900/50 rounded-lg p-4 hover:bg-gray-900/80 transition-colors cursor-pointer group"
            >
              <img
                src={playlist.cover}
                alt={playlist.name}
                className="w-full aspect-square object-cover rounded-md mb-4"
              />
              <h3 className="font-medium truncate">{playlist.name}</h3>
              <p className="text-sm text-gray-400 truncate">{playlist.type} • {playlist.owner}</p>
            </div>
          ))}
        </div>
      ) : (
        <div className="space-y-2">
          {playlists.map((playlist) => (
            <div
              key={playlist.id}
              className="flex items-center gap-4 p-2 hover:bg-white/10 rounded-md transition-colors cursor-pointer"
            >
              <img
                src={playlist.cover}
                alt={playlist.name}
                className="w-12 h-12 object-cover rounded"
              />
              <div className="flex-1 min-w-0">
                <h3 className="font-medium truncate">{playlist.name}</h3>
                <p className="text-sm text-gray-400 truncate">{playlist.type} • {playlist.owner}</p>
              </div>
              <span className="text-sm text-gray-400">{playlist.lastPlayed}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
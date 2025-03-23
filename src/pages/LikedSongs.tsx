import React from 'react';
import { Play, Heart, Clock } from 'lucide-react';

const likedSongs = [
  {
    id: '1',
    title: 'Midnight City',
    artist: 'M83',
    album: 'Hurry Up, We\'re Dreaming',
    dateAdded: '2024-03-15',
    duration: '4:03',
    cover: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop'
  },
  {
    id: '2',
    title: 'Blinding Lights',
    artist: 'The Weeknd',
    album: 'After Hours',
    dateAdded: '2024-03-14',
    duration: '3:20',
    cover: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&h=300&fit=crop'
  },
];

export function LikedSongs() {
  return (
    <div className="flex-1 overflow-auto">
      <div className="h-96 bg-gradient-to-b from-purple-900 to-black p-8">
        <div className="flex items-end h-full">
          <div className="flex items-center gap-6">
            <Heart className="w-20 h-20 text-purple-500" />
            <div>
              <h1 className="text-7xl font-bold mb-6">Liked Songs</h1>
              <p className="text-gray-300">John Doe • {likedSongs.length} songs</p>
            </div>
          </div>
        </div>
      </div>

      <div className="p-8 bg-black bg-opacity-90">
        <button className="mb-8 bg-green-500 rounded-full p-3 hover:scale-105 transition-transform">
          <Play className="w-8 h-8 text-black" fill="black" />
        </button>

        <table className="w-full text-left">
          <thead className="border-b border-white/10">
            <tr className="text-gray-400 text-sm">
              <th className="pb-4 w-12">#</th>
              <th className="pb-4">Title</th>
              <th className="pb-4">Album</th>
              <th className="pb-4">Date Added</th>
              <th className="pb-4 text-right"><Clock className="w-4 h-4 inline" /></th>
            </tr>
          </thead>
          <tbody>
            {likedSongs.map((song, index) => (
              <tr key={song.id} className="group hover:bg-white/10">
                <td className="py-4">{index + 1}</td>
                <td>
                  <div className="flex items-center gap-4">
                    <img
                      src={song.cover}
                      alt={song.title}
                      className="w-12 h-12 object-cover"
                    />
                    <div>
                      <p className="font-medium">{song.title}</p>
                      <p className="text-sm text-gray-400">{song.artist}</p>
                    </div>
                  </div>
                </td>
                <td className="text-gray-400">{song.album}</td>
                <td className="text-gray-400">{song.dateAdded}</td>
                <td className="text-gray-400 text-right">{song.duration}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
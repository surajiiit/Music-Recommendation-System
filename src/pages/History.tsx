import React from 'react';
import { Clock } from 'lucide-react';
import { Song } from '../types';

interface HistoryProps {
  onPlaySong: (song: Song) => void;
}

const recentlyPlayed = [
  {
    id: '1',
    title: 'Midnight City',
    artist: 'M83',
    album: 'Hurry Up, We\'re Dreaming',
    playedAt: '2 hours ago',
    duration: '4:03',
    cover: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop'
  },
  {
    id: '2',
    title: 'Blinding Lights',
    artist: 'The Weeknd',
    album: 'After Hours',
    playedAt: '3 hours ago',
    duration: '3:20',
    cover: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&h=300&fit=crop'
  },
  {
    id: '3',
    title: 'Take on Me',
    artist: 'a-ha',
    album: 'Hunting High and Low',
    playedAt: '5 hours ago',
    duration: '3:46',
    cover: 'https://images.unsplash.com/photo-1614149162883-504ce4d13909?w=300&h=300&fit=crop'
  },
  {
    id: '4',
    title: 'Dreams',
    artist: 'Fleetwood Mac',
    album: 'Rumours',
    playedAt: 'Yesterday',
    duration: '4:14',
    cover: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=300&h=300&fit=crop'
  },
];

export function History({ onPlaySong }: HistoryProps) {
  return (
    <div className="flex-1 overflow-auto">
      <div className="h-48 bg-gradient-to-b from-blue-900 to-black p-8">
        <div className="flex items-end h-full">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Recently Played</h1>
            <p className="text-gray-300">{recentlyPlayed.length} tracks in your history</p>
          </div>
        </div>
      </div>

      <div className="p-8 bg-black bg-opacity-90">
        <table className="w-full text-left">
          <thead className="border-b border-white/10">
            <tr className="text-gray-400 text-sm">
              <th className="pb-4 w-12">#</th>
              <th className="pb-4">Title</th>
              <th className="hidden md:table-cell pb-4">Album</th>
              <th className="pb-4">Played</th>
              <th className="pb-4 text-right"><Clock className="w-4 h-4 inline" /></th>
            </tr>
          </thead>
          <tbody>
            {recentlyPlayed.map((song, index) => (
              <tr 
                key={song.id} 
                className="group hover:bg-white/10 cursor-pointer"
                onClick={() => onPlaySong(song)}
              >
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
                <td className="hidden md:table-cell text-gray-400">{song.album}</td>
                <td className="text-gray-400">{song.playedAt}</td>
                <td className="text-gray-400 text-right">{song.duration}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
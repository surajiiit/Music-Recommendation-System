import React from 'react';
import { Play, SkipBack, SkipForward, Volume2, Heart, X } from 'lucide-react';
import { Song } from '../types';

interface PlayerProps {
  song: Song;
  onClose: () => void;
}

export function Player({ song, onClose }: PlayerProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-t from-black to-gray-900 text-white p-4">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img
            src={song.cover}
            alt={`${song.title} cover`}
            className="w-14 h-14 rounded-md"
          />
          <div>
            <h4 className="font-medium">{song.title}</h4>
            <p className="text-sm text-gray-400">{song.artist}</p>
          </div>
          <button className="ml-4">
            <Heart className="w-5 h-5 text-gray-400 hover:text-white transition-colors" />
          </button>
        </div>

        <div className="flex flex-col items-center gap-2 flex-1 max-w-xl px-8">
          <div className="flex items-center gap-6">
            <button className="hover:text-white text-gray-400 transition-colors">
              <SkipBack className="w-5 h-5" />
            </button>
            <button className="bg-white text-black rounded-full p-2 hover:scale-105 transition-transform">
              <Play className="w-6 h-6" />
            </button>
            <button className="hover:text-white text-gray-400 transition-colors">
              <SkipForward className="w-5 h-5" />
            </button>
          </div>
          <div className="w-full flex items-center gap-2 text-sm">
            <span className="text-gray-400">0:00</span>
            <div className="h-1 flex-1 bg-gray-600 rounded-full">
              <div className="h-full w-0 bg-white rounded-full"></div>
            </div>
            <span className="text-gray-400">{song.duration}</span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Volume2 className="w-5 h-5 text-gray-400" />
            <div className="w-24 h-1 bg-gray-600 rounded-full">
              <div className="h-full w-2/3 bg-white rounded-full"></div>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-white/10 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}


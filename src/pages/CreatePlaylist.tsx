import React, { useState } from 'react';
import { Music, Upload, Plus } from 'lucide-react';

export function CreatePlaylist() {
  const [playlistName, setPlaylistName] = useState('');
  const [description, setDescription] = useState('');
  const [isPublic, setIsPublic] = useState(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle playlist creation logic here
  };

  return (
    <div className="flex-1 overflow-auto bg-gradient-to-b from-gray-900 to-black p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Create New Playlist</h1>
        
        <div className="bg-gray-800 rounded-lg p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex items-center gap-6">
              <div className="w-48 h-48 bg-gray-700 rounded-lg flex items-center justify-center group cursor-pointer hover:bg-gray-600 transition-colors">
                <div className="text-center">
                  <Music className="w-12 h-12 mx-auto mb-2" />
                  <span className="text-sm text-gray-400">Choose a cover image</span>
                </div>
              </div>
              
              <div className="flex-1 space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Playlist name
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={playlistName}
                    onChange={(e) => setPlaylistName(e.target.value)}
                    className="w-full px-4 py-2 rounded bg-gray-700 border border-gray-600 focus:border-white focus:outline-none"
                    placeholder="My Playlist"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="description" className="block text-sm font-medium mb-2">
                    Description
                  </label>
                  <textarea
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="w-full px-4 py-2 rounded bg-gray-700 border border-gray-600 focus:border-white focus:outline-none"
                    rows={3}
                    placeholder="Give your playlist a catchy description"
                  />
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <input
                type="checkbox"
                id="public"
                checked={isPublic}
                onChange={(e) => setIsPublic(e.target.checked)}
                className="rounded bg-gray-700 border-gray-600 text-green-500 focus:ring-green-500"
              />
              <label htmlFor="public" className="text-sm">
                Make this playlist public
              </label>
            </div>
            
            <div className="pt-6 border-t border-gray-700">
              <button
                type="submit"
                className="bg-green-500 text-black font-semibold px-6 py-2 rounded-full hover:bg-green-400 transition-colors"
              >
                Create Playlist
              </button>
            </div>
          </form>
        </div>
        
        <div className="mt-8">
          <h2 className="text-xl font-bold mb-4">Add Songs</h2>
          <div className="bg-gray-800 rounded-lg p-6">
            <div className="border-2 border-dashed border-gray-600 rounded-lg p-8 text-center">
              <Upload className="w-12 h-12 mx-auto mb-4 text-gray-400" />
              <p className="text-gray-400 mb-4">Drag and drop songs here</p>
              <button className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 transition-colors px-4 py-2 rounded-full">
                <Plus className="w-5 h-5" />
                <span>Choose Files</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
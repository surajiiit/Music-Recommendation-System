import React, { useState } from 'react';
import { Search as SearchIcon } from 'lucide-react';

const genres = [
  { id: '1', name: 'Pop', color: 'bg-pink-500' },
  { id: '2', name: 'Rock', color: 'bg-red-500' },
  { id: '3', name: 'Hip Hop', color: 'bg-purple-500' },
  { id: '4', name: 'Electronic', color: 'bg-blue-500' },
  { id: '5', name: 'Jazz', color: 'bg-yellow-500' },
  { id: '6', name: 'Classical', color: 'bg-green-500' },
];

export function Search() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="flex-1 overflow-auto bg-gradient-to-b from-gray-900 to-black p-8">
      <div className="max-w-4xl mx-auto">
        <div className="relative mb-8">
          <SearchIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="What do you want to listen to?"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-white bg-opacity-10 rounded-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-20"
          />
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Browse All</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {genres.map((genre) => (
              <div
                key={genre.id}
                className={`${genre.color} p-6 rounded-lg cursor-pointer transform hover:scale-105 transition-transform`}
              >
                <h3 className="text-xl font-bold">{genre.name}</h3>
              </div>
            ))}
          </div>
        </div>

        {searchQuery && (
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">Top Results</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {/* Add search results here */}
                <div className="bg-gray-900/50 p-4 rounded-lg">
                  <p className="text-gray-400">No results found</p>
                </div>
              </div>
            </section>
          </div>
        )}
      </div>
    </div>
  );
}
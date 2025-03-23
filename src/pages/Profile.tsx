import React from 'react';
import { Settings, ExternalLink } from 'lucide-react';

const stats = [
  { label: 'Following', value: '183' },
  { label: 'Followers', value: '47' },
  { label: 'Playlists', value: '12' },
];

const topArtists = [
  {
    id: '1',
    name: 'The Weeknd',
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&h=300&fit=crop',
    monthlyListeners: '12.5M'
  },
  {
    id: '2',
    name: 'M83',
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop',
    monthlyListeners: '8.2M'
  },
];

export function Profile() {
  return (
    <div className="flex-1 overflow-auto bg-gradient-to-b from-blue-900 to-black">
      <div className="max-w-4xl mx-auto p-8">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-6">
            <img
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200&h=200&fit=crop"
              alt="Profile"
              className="w-40 h-40 rounded-full object-cover"
            />
            <div>
              <p className="text-sm text-gray-400 mb-1">Profile</p>
              <h1 className="text-6xl font-bold mb-4">John Doe</h1>
              <div className="flex items-center gap-4 text-sm">
                {stats.map((stat, index) => (
                  <React.Fragment key={stat.label}>
                    <span>
                      <strong>{stat.value}</strong> {stat.label}
                    </span>
                    {index < stats.length - 1 && <span className="text-gray-400">•</span>}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
          <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
            <Settings className="w-6 h-6" />
          </button>
        </div>

        <section className="mb-12">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold">Top Artists This Month</h2>
            <button className="text-sm text-gray-400 hover:text-white transition-colors">
              See All
            </button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {topArtists.map((artist) => (
              <div
                key={artist.id}
                className="bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-colors group cursor-pointer"
              >
                <img
                  src={artist.image}
                  alt={artist.name}
                  className="w-full aspect-square object-cover rounded-full mb-4"
                />
                <h3 className="font-medium mb-1">{artist.name}</h3>
                <p className="text-sm text-gray-400">
                  {artist.monthlyListeners} monthly listeners
                </p>
                <button className="mt-4 text-sm text-white/60 hover:text-white transition-colors flex items-center gap-1">
                  Follow <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Public Playlists</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {/* Placeholder for playlists */}
            <div className="bg-white/5 rounded-lg aspect-square flex items-center justify-center">
              <p className="text-gray-400">No public playlists</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
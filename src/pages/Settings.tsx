import React, { useState } from 'react';
import { Bell, Shield, Volume2, Laptop2, Moon, Sun } from 'lucide-react';

export function Settings() {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const [volume, setVolume] = useState(80);
  const [notifications, setNotifications] = useState(true);
  const [privateSession, setPrivateSession] = useState(false);

  return (
    <div className="flex-1 overflow-auto bg-gradient-to-b from-gray-900 to-black p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Settings</h1>
        
        <div className="space-y-6">
          <section className="bg-gray-800 rounded-lg p-6">
            <h2 className="text-xl font-bold mb-4">Account</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <img
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop"
                  alt="Profile"
                  className="w-16 h-16 rounded-full"
                />
                <div>
                  <h3 className="font-medium">John Doe</h3>
                  <p className="text-sm text-gray-400">john.doe@example.com</p>
                </div>
                <button className="ml-auto bg-white/10 hover:bg-white/20 transition-colors px-4 py-2 rounded-full">
                  Edit Profile
                </button>
              </div>
            </div>
          </section>

          <section className="bg-gray-800 rounded-lg p-6">
            <h2 className="text-xl font-bold mb-4">Appearance</h2>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                {theme === 'dark' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
                <span>Theme</span>
              </div>
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="bg-white/10 hover:bg-white/20 transition-colors px-4 py-2 rounded-full"
              >
                {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
              </button>
            </div>
          </section>

          <section className="bg-gray-800 rounded-lg p-6">
            <h2 className="text-xl font-bold mb-4">Playback</h2>
            <div className="space-y-6">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Volume2 className="w-5 h-5" />
                    <span>Volume</span>
                  </div>
                  <span className="text-sm text-gray-400">{volume}%</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={volume}
                  onChange={(e) => setVolume(parseInt(e.target.value))}
                  className="w-full"
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Laptop2 className="w-5 h-5" />
                  <span>Crossfade</span>
                </div>
                <select className="bg-gray-700 rounded px-3 py-1">
                  <option>Off</option>
                  <option>2s</option>
                  <option>4s</option>
                  <option>8s</option>
                </select>
              </div>
            </div>
          </section>

          <section className="bg-gray-800 rounded-lg p-6">
            <h2 className="text-xl font-bold mb-4">Privacy</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Bell className="w-5 h-5" />
                  <span>Notifications</span>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={notifications}
                    onChange={(e) => setNotifications(e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-500"></div>
                </label>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5" />
                  <span>Private Session</span>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={privateSession}
                    onChange={(e) => setPrivateSession(e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-500"></div>
                </label>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
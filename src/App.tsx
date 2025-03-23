import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Sidebar } from './components/Sidebar';
import { Player } from './components/Player';
import { Dashboard } from './components/Dashboard';
import { Search } from './pages/Search';
import { Library } from './pages/Library';
import { LikedSongs } from './pages/LikedSongs';
import { Profile } from './pages/Profile';
import { History } from './pages/History';
import { Login } from './pages/Login';
import { Signup } from './pages/Signup';
import { CreatePlaylist } from './pages/CreatePlaylist';
import { Settings } from './pages/Settings';
import { Song } from './types';

function App() {
  const [currentSong, setCurrentSong] = useState<Song | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const playSong = (song: Song) => {
    setCurrentSong(song);
  };

  // Protected Route wrapper
  const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
    if (!isAuthenticated) {
      return <Navigate to="/login" />;
    }
    return <>{children}</>;
  };

  return (
    <Router>
      <div className="flex h-screen bg-black text-white">
        {isAuthenticated && <Sidebar />}
        <main className={`flex-1 flex flex-col ${!isAuthenticated ? 'w-full' : ''}`}>
          <Routes>
            <Route path="/login" element={<Login onLogin={() => setIsAuthenticated(true)} />} />
            <Route path="/signup" element={<Signup onSignup={() => setIsAuthenticated(true)} />} />
            
            <Route path="/" element={
              <ProtectedRoute>
                <Dashboard onPlaySong={playSong} />
              </ProtectedRoute>
            } />
            <Route path="/search" element={
              <ProtectedRoute>
                <Search onPlaySong={playSong} />
              </ProtectedRoute>
            } />
            <Route path="/library" element={
              <ProtectedRoute>
                <Library onPlaySong={playSong} />
              </ProtectedRoute>
            } />
            <Route path="/liked-songs" element={
              <ProtectedRoute>
                <LikedSongs onPlaySong={playSong} />
              </ProtectedRoute>
            } />
            <Route path="/profile" element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            } />
            <Route path="/history" element={
              <ProtectedRoute>
                <History onPlaySong={playSong} />
              </ProtectedRoute>
            } />
            <Route path="/create-playlist" element={
              <ProtectedRoute>
                <CreatePlaylist />
              </ProtectedRoute>
            } />
            <Route path="/settings" element={
              <ProtectedRoute>
                <Settings />
              </ProtectedRoute>
            } />
          </Routes>
          {currentSong && <Player song={currentSong} onClose={() => setCurrentSong(null)} />}
        </main>
      </div>
    </Router>
  );
}

export default App;
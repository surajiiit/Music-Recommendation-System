import { create } from 'zustand';
import { Howl } from 'howler';
import { Song, User } from '../types';

interface PlayerState {
  currentSong: Song | null;
  isPlaying: boolean;
  volume: number;
  howl: Howl | null;
  queue: Song[];
  playbackProgress: number;
  setCurrentSong: (song: Song | null) => void;
  play: () => void;
  pause: () => void;
  setVolume: (volume: number) => void;
  setQueue: (songs: Song[]) => void;
  playNext: () => void;
  playPrevious: () => void;
  setProgress: (progress: number) => void;
}

interface AuthState {
  user: User | null;
  setUser: (user: User | null) => void;
}

export const usePlayerStore = create<PlayerState>((set, get) => ({
  currentSong: null,
  isPlaying: false,
  volume: 1,
  howl: null,
  queue: [],
  playbackProgress: 0,
  
  setCurrentSong: (song) => {
    const { howl } = get();
    if (howl) {
      howl.unload();
    }
    
    if (song) {
      const newHowl = new Howl({
        src: [song.audioUrl],
        volume: get().volume,
        onplay: () => set({ isPlaying: true }),
        onpause: () => set({ isPlaying: false }),
        onend: () => get().playNext(),
        onseek: () => {
          set({ playbackProgress: (howl?.seek() || 0) / (howl?.duration() || 1) * 100 });
        }
      });
      
      set({ currentSong: song, howl: newHowl });
      newHowl.play();
    } else {
      set({ currentSong: null, howl: null, isPlaying: false });
    }
  },
  
  play: () => {
    const { howl } = get();
    if (howl) {
      howl.play();
    }
  },
  
  pause: () => {
    const { howl } = get();
    if (howl) {
      howl.pause();
    }
  },
  
  setVolume: (volume) => {
    const { howl } = get();
    if (howl) {
      howl.volume(volume);
    }
    set({ volume });
  },
  
  setQueue: (songs) => set({ queue: songs }),
  
  playNext: () => {
    const { currentSong, queue } = get();
    if (!currentSong || queue.length === 0) return;
    
    const currentIndex = queue.findIndex(song => song.id === currentSong.id);
    const nextSong = queue[currentIndex + 1];
    
    if (nextSong) {
      get().setCurrentSong(nextSong);
    }
  },
  
  playPrevious: () => {
    const { currentSong, queue } = get();
    if (!currentSong || queue.length === 0) return;
    
    const currentIndex = queue.findIndex(song => song.id === currentSong.id);
    const previousSong = queue[currentIndex - 1];
    
    if (previousSong) {
      get().setCurrentSong(previousSong);
    }
  },
  
  setProgress: (progress) => {
    const { howl } = get();
    if (howl) {
      const duration = howl.duration();
      howl.seek(duration * (progress / 100));
    }
    set({ playbackProgress: progress });
  }
}));

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  setUser: (user) => set({ user })
}));
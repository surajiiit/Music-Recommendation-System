export interface Song {
  id: string;
  title: string;
  artist: string;
  album?: string;
  cover: string;
  duration: string;
  dateAdded?: string;
  playedAt?: string;
}

export interface Playlist {
  id: string;
  name: string;
  description: string;
  cover: string;
  songCount: number;
  type?: string;
  owner?: string;
  lastPlayed?: string;
}

export interface Artist {
  id: string;
  name: string;
  image: string;
  monthlyListeners: string;
}

export interface User {
  name: string;
  avatar: string;
  stats: {
    following: number;
    followers: number;
    playlists: number;
  };
}
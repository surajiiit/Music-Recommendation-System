export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      users: {
        Row: {
          id: string
          username: string | null
          avatar_url: string | null
          created_at: string
        }
        Insert: {
          id: string
          username?: string | null
          avatar_url?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          username?: string | null
          avatar_url?: string | null
          created_at?: string
        }
      }
      songs: {
        Row: {
          id: string
          title: string
          artist: string
          album: string | null
          cover_url: string | null
          audio_url: string
          duration: number
          created_at: string
        }
        Insert: {
          id?: string
          title: string
          artist: string
          album?: string | null
          cover_url?: string | null
          audio_url: string
          duration: number
          created_at?: string
        }
        Update: {
          id?: string
          title?: string
          artist?: string
          album?: string | null
          cover_url?: string | null
          audio_url?: string
          duration?: number
          created_at?: string
        }
      }
      playlists: {
        Row: {
          id: string
          name: string
          description: string | null
          cover_url: string | null
          user_id: string
          is_public: boolean
          created_at: string
        }
        Insert: {
          id?: string
          name: string
          description?: string | null
          cover_url?: string | null
          user_id: string
          is_public?: boolean
          created_at?: string
        }
        Update: {
          id?: string
          name?: string
          description?: string | null
          cover_url?: string | null
          user_id?: string
          is_public?: boolean
          created_at?: string
        }
      }
      playlist_songs: {
        Row: {
          playlist_id: string
          song_id: string
          position: number
          added_at: string
        }
        Insert: {
          playlist_id: string
          song_id: string
          position: number
          added_at?: string
        }
        Update: {
          playlist_id?: string
          song_id?: string
          position?: number
          added_at?: string
        }
      }
      user_song_history: {
        Row: {
          id: string
          user_id: string
          song_id: string
          played_at: string
        }
        Insert: {
          id?: string
          user_id: string
          song_id: string
          played_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          song_id?: string
          played_at?: string
        }
      }
    }
  }
}
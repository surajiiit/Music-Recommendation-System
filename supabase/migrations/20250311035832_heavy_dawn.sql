/*
  # Initial Schema Setup for Music Streaming App

  1. New Tables
    - users (extends auth.users)
      - id (uuid, references auth.users)
      - username (text)
      - avatar_url (text)
      - created_at (timestamp)
    
    - songs
      - id (uuid)
      - title (text)
      - artist (text)
      - album (text)
      - cover_url (text)
      - audio_url (text)
      - duration (int)
      - created_at (timestamp)
    
    - playlists
      - id (uuid)
      - name (text)
      - description (text)
      - cover_url (text)
      - user_id (uuid, references users)
      - is_public (boolean)
      - created_at (timestamp)
    
    - playlist_songs
      - playlist_id (uuid, references playlists)
      - song_id (uuid, references songs)
      - position (int)
      - added_at (timestamp)
    
    - user_song_history
      - id (uuid)
      - user_id (uuid, references users)
      - song_id (uuid, references songs)
      - played_at (timestamp)

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users
*/

-- Users table (extends auth.users)
CREATE TABLE users (
  id uuid PRIMARY KEY REFERENCES auth.users,
  username text UNIQUE,
  avatar_url text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE users ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read own data"
  ON users
  FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "Users can update own data"
  ON users
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = id);

-- Songs table
CREATE TABLE songs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  artist text NOT NULL,
  album text,
  cover_url text,
  audio_url text NOT NULL,
  duration int NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE songs ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read songs"
  ON songs
  FOR SELECT
  TO authenticated
  USING (true);

-- Playlists table
CREATE TABLE playlists (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text,
  cover_url text,
  user_id uuid REFERENCES users(id) NOT NULL,
  is_public boolean DEFAULT true,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE playlists ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read public playlists"
  ON playlists
  FOR SELECT
  TO authenticated
  USING (is_public OR user_id = auth.uid());

CREATE POLICY "Users can create own playlists"
  ON playlists
  FOR INSERT
  TO authenticated
  WITH CHECK (user_id = auth.uid());

CREATE POLICY "Users can update own playlists"
  ON playlists
  FOR UPDATE
  TO authenticated
  USING (user_id = auth.uid());

CREATE POLICY "Users can delete own playlists"
  ON playlists
  FOR DELETE
  TO authenticated
  USING (user_id = auth.uid());

-- Playlist songs junction table
CREATE TABLE playlist_songs (
  playlist_id uuid REFERENCES playlists(id) ON DELETE CASCADE,
  song_id uuid REFERENCES songs(id) ON DELETE CASCADE,
  position int NOT NULL,
  added_at timestamptz DEFAULT now(),
  PRIMARY KEY (playlist_id, song_id)
);

ALTER TABLE playlist_songs ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read playlist songs"
  ON playlist_songs
  FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM playlists
      WHERE id = playlist_id
      AND (is_public OR user_id = auth.uid())
    )
  );

CREATE POLICY "Users can modify own playlist songs"
  ON playlist_songs
  FOR ALL
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM playlists
      WHERE id = playlist_id
      AND user_id = auth.uid()
    )
  );

-- User song history table
CREATE TABLE user_song_history (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES users(id) NOT NULL,
  song_id uuid REFERENCES songs(id) NOT NULL,
  played_at timestamptz DEFAULT now()
);

ALTER TABLE user_song_history ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read own history"
  ON user_song_history
  FOR SELECT
  TO authenticated
  USING (user_id = auth.uid());

CREATE POLICY "Users can add to own history"
  ON user_song_history
  FOR INSERT
  TO authenticated
  WITH CHECK (user_id = auth.uid());
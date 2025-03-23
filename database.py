import spotipy
from spotipy.oauth2 import SpotifyClientCredentials
import os

# Load credentials from environment variables
SPOTIFY_CLIENT_ID = os.getenv("SPOTIFY_CLIENT_ID")
SPOTIFY_CLIENT_SECRET = os.getenv("SPOTIFY_CLIENT_SECRET")

# Authenticate with Spotify API
sp = spotipy.Spotify(auth_manager=SpotifyClientCredentials(
    client_id=SPOTIFY_CLIENT_ID,
    client_secret=SPOTIFY_CLIENT_SECRET
))

def search_song(song_name):
    results = sp.search(q=song_name, limit=10, type='track')
    return results['tracks']['items']

def get_artist_top_tracks(artist_name):
    artist_results = sp.search(q=artist_name, limit=1, type='artist')
    if artist_results['artists']['items']:
        artist_id = artist_results['artists']['items'][0]['id']
        return sp.artist_top_tracks(artist_id)['tracks']
    return []

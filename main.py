from fastapi import FastAPI, HTTPException
from fastapi import FastAPI, HTTPException, Depends 
from fastapi.staticfiles import StaticFiles
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from pydantic import BaseModel
from typing import List, Dict
from uuid import uuid4
import os

app = FastAPI()

# Enable CORS for frontend-backend communication
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Serve frontend build
frontend_path = os.path.join(os.path.dirname(__file__), "dist")
app.mount("/", StaticFiles(directory=frontend_path, html=True), name="frontend")

# Sample database
users_db = {}
playlists_db = {}
recently_played_db = {}

class User(BaseModel):
    username: str
    password: str

class Playlist(BaseModel):
    name: str
    tracks: List[str]

class Track(BaseModel):
    track_name: str
    artist: str

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.get("/search/")
async def search_song_api(query: str):
    return search_song(query)

@app.get("/artist/")
async def artist_songs(artist: str):
    return get_artist_top_tracks(artist)

@app.post("/register")
def register(user: User):
    if user.username in users_db:
        raise HTTPException(status_code=400, detail="User already exists")
    users_db[user.username] = user.password
    return {"message": "User registered successfully"}

@app.post("/login")
def login(user: User):
    if users_db.get(user.username) != user.password:
        raise HTTPException(status_code=401, detail="Invalid credentials")
    return {"message": "Login successful"}

@app.post("/create_playlist")
def create_playlist(username: str, playlist: Playlist):
    if username not in users_db:
        raise HTTPException(status_code=401, detail="Unauthorized")
    playlist_id = str(uuid4())
    playlists_db[playlist_id] = {"owner": username, "name": playlist.name, "tracks": playlist.tracks}
    return {"playlist_id": playlist_id, "message": "Playlist created"}

@app.get("/get_playlists")
def get_playlists(username: str):
    user_playlists = {pid: data for pid, data in playlists_db.items() if data["owner"] == username}
    return user_playlists

@app.post("/add_song/")
def add_song(title: str, artist: str, file_path: str, db: Session = Depends(get_db)):
    song = Song(title=title, artist=artist, file_path=file_path)
    db.add(song)
    db.commit()
    db.refresh(song)
    return {"message": "Song added", "song_id": song.id}

@app.get("/songs/")
def get_songs(db: Session = Depends(get_db)):
    return db.query(Song).all()

@app.get("/play_song/{song_id}")
def play_song(song_id: int, db: Session = Depends(get_db)):
    song = db.query(Song).filter(Song.id == song_id).first()
    if not song:
        raise HTTPException(status_code=404, detail="Song not found")
    
    return FileResponse(song.file_path, media_type="audio/flac")

@app.post("/add_recently_played")
def add_recently_played(username: str, track: Track):
    if username not in users_db:
        raise HTTPException(status_code=401, detail="Unauthorized")
    if username not in recently_played_db:
        recently_played_db[username] = []
    recently_played_db[username].insert(0, track.dict())
    recently_played_db[username] = recently_played_db[username][:5]  # Keep only last 5 tracks
    return {"message": "Track added to recently played"}

@app.get("/recently_played")
def get_recently_played(username: str):
    return recently_played_db.get(username, [])

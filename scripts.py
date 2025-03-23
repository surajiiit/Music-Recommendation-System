import requests

url = "http://127.0.0.1:8000/add_song/"
data = {"title": "Sexy Chick", "artist": "David Guetta", "file_path": "I:/Endorphins/Sexy Chick.flac"}

response = requests.post(url, params=data)
print(response.json())

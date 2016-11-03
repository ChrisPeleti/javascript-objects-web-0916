var playlist = {artist_name: "song title"} // {artist_name: "song title"}

function updatePlaylist(playlist, artist, song) {
   playlist = Object.assign({}, playlist, { [artist]: song})
  return playlist

}

function removeFromPlaylist(playlist, artist, song) {
  delete playlist[artist]
  return playlist

}

const { Schema, model } = require('mongoose');

const playlistSchema = new Schema({
    userID: { type: String, required: true},
    playlistName: { type: String, required: true},
    songs: {type: [String], required: true}
});

module.exports = model('playlist', playlistSchema);
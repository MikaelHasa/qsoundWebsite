const playlist = require('../models/playlist.js');

const getPlaylist = async (userID) =>{
    try {
        
        const userPlaylist = await playlist.find({ userID: `${userID}`});
        console.log('user playlist: ', userPlaylist);

        return userPlaylist;

    } catch (err) {
        throw new Error(err);
    }
};

module.exports = {getPlaylist};
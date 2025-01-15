const express = require('express');
const { getPlaylist } = require('../../middlewares/get-user-playlist');
const router = express.Router();


const DISCORD_ENDPOINT = 'https://discord.com/api/v10';

router.get('/', (req, res) => {

  if (req.user) {
    const { accessToken, refreshToken, ...user } = req.user;

    res.status(200).json(req.user);

  } else {
    res.status(401).json({ message: 'not logged in!' })
  }
});

router.get('/playlist', async (req, res) => {
  if (req.user) {
    const { accessToken, refreshToken, ...user } = req.user;

    const pl = await getPlaylist(req.user.id);


    res.json(pl)

  } else {
    res.status(401).json({ message: 'not logged in!' })
  }
});

module.exports = router;

//let pl = await playlist.findOne({ id: req.user.id });
//if (!pl) {
//  pl = new playlist({
//    userID: req.user.id,
//    playlistName: 'playlist',
//    songs: ['song0', 'song1', 'song2']
//
//  });
//}
//
//await pl.save();

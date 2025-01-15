const express = require('express');
const setReqUser = require('./set-req-user');
const getUserPlaylist = require('./get-user-playlist');

const router = express.Router();

router.use(setReqUser);

module.exports = router;
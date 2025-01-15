const { Schema, model } = require('mongoose');

const userSchema = new Schema(
	{
		id: { type: String, required: true },
		username: { type: String, required: true },
		avatarHash: { type: String, required: true },
		accessToken: { type: String, required: true },
		refreshToken: { type: String, required: true },

	},
	{ timestamps: true }
);

module.exports = model('User', userSchema);
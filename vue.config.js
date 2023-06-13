module.exports = {
	devServer: {
		port: 80,
		proxy: {
			"/game_record": {
				target: "https://api-takumi-record.mihoyo.com",
				changeOrigin: true
			}
		}
	}
}
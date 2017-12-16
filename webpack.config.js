const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
module.exports = {
	entry: "./src/index.ts",
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: "awesome-typescript-loader",
				exclude: /node_modules/
			}
		]
	},
	plugins: [new CopyWebpackPlugin([{ from: "examples"}])],
	resolve: {
		modules: [path.resolve("./"), path.resolve("node_modules")],
		extensions: [".tsx", ".ts", ".js"]
	},
	output: {
		libraryTarget: "umd",
		library: "RandomHistoricalGame",
		filename: "random-historical-game.js",
		path: path.resolve(__dirname, "dist")
	}
};

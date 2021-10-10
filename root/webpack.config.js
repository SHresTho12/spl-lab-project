module.exports = {
	mode: 'development',
	entry: {
		memoryGame: ['./scripts/Games/memoryGame.js'],
		dots: ['./scripts/Games/ConnectDotsGame/dots.js'],
		typingTest: ['./scripts/quizzes/typingTest.js'],
		newDots: ['./scripts/Games/ConnectDotsGame/newDots.js']
		
		
	  },
	  output: {
		filename: '[name].js',
	  },
	  devtool: "source-map"
};

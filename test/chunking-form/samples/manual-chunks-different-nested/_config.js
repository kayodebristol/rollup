module.exports = {
	description: 'manual chunks can have other manual chunks as dependencies',
	options: {
		input: ['main.js'],
		manualChunks: {
			'manual-outer': ['outer.js'],
			'manual-inner': ['inner.js'],
			'manual-middle': ['middle.js']
		}
	}
};

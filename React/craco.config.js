const path = require(`path`);

module.exports = {
	webpack: {
		alias: {
			'@': path.resolve(__dirname, 'src/'),
			'@App': path.resolve(__dirname, 'src/app'),
			'@Components': path.resolve(__dirname, 'src/components'),
			'@Pages': path.resolve(__dirname, 'src/pages'),
			'@Libs': path.resolve(__dirname, 'src/libs'),
			'@Services': path.resolve(__dirname, 'src/services'),
			'@Hooks': path.resolve(__dirname, 'src/libs/hooks'),
			'@Styles': path.resolve(__dirname, 'src/libs/styles'),
			'@Assets': path.resolve(__dirname, 'src/assets'),
			'@Projects': path.resolve(__dirname, 'src/assets/projects_datas'),
			'@Images': path.resolve(__dirname, 'src/assets/img'),
			'@Logos': path.resolve(__dirname, 'src/assets/logos'),
			'@Videos': path.resolve(__dirname, 'src/assets/videos'),
			'@Documents': path.resolve(__dirname, 'src/assets/documents'),
			'@Test': path.resolve(__dirname, 'src/test'),
		},
	},
};

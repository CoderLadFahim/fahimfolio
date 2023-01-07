import { createStore } from 'vuex';

const store = createStore({
	state() {
		return {
			projects: [
				{
					thumbnail:
						'data:image/jpeg;base64,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',
					sourceCodeLink: 'www.github.com',
					link: 'www.google.com',
					title: 'WeatherNow',
					dependencies: [
						{
							name: 'tehc eins',
							iconPath:
								'https://imgs.search.brave.com/hCjEciwkS33wfv5zHqMZHOwI1lJJzv-6CU7hf4TNU5g/rs:fit:568:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5P/TWhNdmNPaFhLcThn/UFhpM21SZVl3SGFH/TCZwaWQ9QXBp',
						},
					]
				},
				{
					thumbnail:
						'data:image/jpeg;base64,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',
					sourceCodeLink: 'www.github.com',
					link: 'www.google.com',
					title: 'WeatherNow',
					dependencies: [
						{
							name: 'tehc eins',
							iconPath:
								'https://imgs.search.brave.com/hCjEciwkS33wfv5zHqMZHOwI1lJJzv-6CU7hf4TNU5g/rs:fit:568:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5P/TWhNdmNPaFhLcThn/UFhpM21SZVl3SGFH/TCZwaWQ9QXBp',
						},
					]
				},
				{
					thumbnail:
						'data:image/jpeg;base64,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',
					sourceCodeLink: 'www.github.com',
					link: 'www.google.com',
					title: 'WeatherNow',
					dependencies: [
						{
							name: 'tehc eins',
							iconPath:
								'https://imgs.search.brave.com/hCjEciwkS33wfv5zHqMZHOwI1lJJzv-6CU7hf4TNU5g/rs:fit:568:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5P/TWhNdmNPaFhLcThn/UFhpM21SZVl3SGFH/TCZwaWQ9QXBp',
						},
					]
				},
			]
		};
	},
	getters: {},
	mutations: {},
	actions: {},
});

export default store;

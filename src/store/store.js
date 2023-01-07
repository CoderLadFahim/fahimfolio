import { createStore } from 'vuex';

const store = createStore({
	state() {
		return {
			projects: [
				{
					thumbnail:
						'src/assets/ProjectPreviews/ReaditPreview.png',
					sourceCodeLink: 'https://github.com/CoderLadFahim/readit',
					link: 'https://readreddit.netlify.app/',
					title: 'Readit',
					dependencies: [
						{
							name: 'ReactJS',
							iconPath:
								'/src/assets/TechLogos/React-Logo.png',
						},
						{
							name: 'ReduxJS',
							iconPath:
								'/src/assets/TechLogos/redux.png',
						},
						{
							name: 'TailwindCSS',
							iconPath:
								'/src/assets/TechLogos/Tailwind.png',
						},
						
					]
				},
				{
					thumbnail:
						'src/assets/ProjectPreviews/SaleXPreview.png',
					link: 'https://core-pos.dev.gainhq.com/admin/users/login',
					title: 'SaleX',
					dependencies: [
						{
							name: 'VueJS',
							iconPath:
								'/src/assets/TechLogos/Vue-Logo.png',
						},
						{
							name: 'VueX',
							iconPath:
								'/src/assets/TechLogos/vuex.png',
						},
						{
							name: 'Bootstrap',
							iconPath:
								'/src/assets/TechLogos/bootstrap.png',
						},
						
					]
				}
			],
			skills: [

			]
		};
	},
	getters: {},
	mutations: {},
	actions: {},
});

export default store;

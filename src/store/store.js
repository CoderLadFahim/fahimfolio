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
								'/src/assets/TechLogos/reactjs.png',
						},
						{
							name: 'ReduxJS',
							iconPath:
								'/src/assets/TechLogos/reduxjs.png',
						},
						{
							name: 'TailwindCSS',
							iconPath:
								'/src/assets/TechLogos/tailwindcss.png',
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
								'/src/assets/TechLogos/vuejs.png',
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
			skills: { 
				languages: [
					{
						skillName: 'HTML+CSS',
						skillImgPath: '/src/assets/TechLogos/css.png',
						magnified: false,
					},
					{
						skillName: 'Sass',
						skillImgPath: '/src/assets/TechLogos/sass.png',
						magnified: false,
					},
					{
						skillName: 'JavaScript',
						skillImgPath: '/src/assets/TechLogos/js.png',
						magnified: false,
					},
					{
						skillName: 'TypeScript',
						skillImgPath: '/src/assets/TechLogos/ts.png',
						magnified: false,
					},
				]	,
				frameworks: [
					{
						skillName: 'VueJS',
						skillImgPath: '/src/assets/TechLogos/vuejs.png',
						magnified: true,
					},
					{
						skillName: 'VueX',
						skillImgPath: '/src/assets/TechLogos/vuex.png',
						magnified: false,
						isSeparator: true,
					},
					{
						skillName: 'ReactJS',
						skillImgPath: '/src/assets/TechLogos/reactjs.png',
						magnified: true,
					},
					{
						skillName: 'ReduxJS',
						skillImgPath: '/src/assets/TechLogos/reduxjs.png',
						magnified: false,
						isSeparator: true,
					},
					{
						skillName: 'TailwindCSS',
						skillImgPath: '/src/assets/TechLogos/tailwindcss.png',
						magnified: false,
					},
					{
						skillName: 'Bootstrap',
						skillImgPath: '/src/assets/TechLogos/bootstrap.png',
						magnified: false,
					},
				],
				tools: [
					{
						skillName: 'Figma',
						skillImgPath: '/src/assets/TechLogos/figma.png',
						magnified: false,
					},
					{
						skillName: 'WSL2',
						skillImgPath: '/src/assets/TechLogos/linux.png',
						magnified: false,
					},
					{
						skillName: 'Vim',
						skillImgPath: '/src/assets/TechLogos/vim.png',
						magnified: false,
					},
					{
						skillName: 'Git',
						skillImgPath: '/src/assets/TechLogos/git.png',
						magnified: false,
					},
					{
						skillName: 'GitHub',
						skillImgPath: '/src/assets/TechLogos/github.png',
						magnified: false,
					},
				]
			}
		};
	},
	getters: {},
	mutations: {},
	actions: {},
});

export default store;

import { createStore } from 'vuex';

const store = createStore({
	state() {
		return {
			projects: [
				{
					thumbnail:
						'/ProjectPreviews/ReaditPreview.png',
					sourceCodeLink: 'https://github.com/CoderLadFahim/readit',
					link: 'https://readreddit.netlify.app/',
					title: 'Readit',
					description: 'Read-only Reddit client',
					dependencies: [
						{
							name: 'ReactJS',
							iconPath:
								'/TechLogos/reactjs.png',
						},
						{
							name: 'ReduxJS',
							iconPath:
								'/TechLogos/reduxjs.png',
						},
						{
							name: 'TailwindCSS',
							iconPath:
								'/TechLogos/tailwindcss.png',
						},
						
					]
				},
				{
					thumbnail:
						'/ProjectPreviews/SaleXPreview.png',
					link: 'https://core-pos.dev.gainhq.com/admin/users/login',
					title: 'SaleX',
					description: 'Inventory management system',
					dependencies: [
						{
							name: 'VueJS',
							iconPath:
								'/TechLogos/vuejs.png',
						},
						{
							name: 'VueX',
							iconPath:
								'/TechLogos/vuex.png',
						},
						{
							name: 'Bootstrap',
							iconPath:
								'/TechLogos/bootstrap.png',
						},
						
					]
				},
                {
					thumbnail:
						'/ProjectPreviews/ReadykitPreview.png',
					link: 'https://readykit.gainhq.com/admin/users/login',
					title: 'ReadyKit',
					description: 'Component library',
					dependencies: [
						{
							name: 'VueJS',
							iconPath:
								'/TechLogos/vuejs.png',
						},
						{
							name: 'VueX',
							iconPath:
								'/TechLogos/vuex.png',
						},
						{
							name: 'Bootstrap',
							iconPath:
								'/TechLogos/bootstrap.png',
						},
						
					]
				},
                {
					thumbnail:
						'/ProjectPreviews/PipexPreview.png',
					link: 'https://pipex.gainhq.com/admin/users/login',
					title: 'Pipex',
					description: 'A CRM application',
					dependencies: [
						{
							name: 'VueJS',
							iconPath:
								'/TechLogos/vuejs.png',
						},
						{
							name: 'VueX',
							iconPath:
								'/TechLogos/vuex.png',
						},
						{
							name: 'Bootstrap',
							iconPath:
								'/TechLogos/bootstrap.png',
						},
						
					]
				},
                {
					thumbnail:
						'/ProjectPreviews/PaydayPreview.png',
					link: 'https://payday.gainhq.com/admin/users/login',
					title: 'PayDay',
					description: 'An HRM application',
					dependencies: [
						{
							name: 'VueJS',
							iconPath:
								'/TechLogos/vuejs.png',
						},
						{
							name: 'VueX',
							iconPath:
								'/TechLogos/vuex.png',
						},
						{
							name: 'Bootstrap',
							iconPath:
								'/TechLogos/bootstrap.png',
						},
						
					]
				},
                {
					thumbnail:
						'/ProjectPreviews/JobpointPreview.png',
					link: 'https://jobpoint.gainhq.com/admin/users/login',
					title: 'JobPoint',
					description: 'Recruit management system',
					dependencies: [
						{
							name: 'VueJS',
							iconPath:
								'/TechLogos/vuejs.png',
						},
						{
							name: 'VueX',
							iconPath:
								'/TechLogos/vuex.png',
						},
						{
							name: 'Bootstrap',
							iconPath:
								'/TechLogos/bootstrap.png',
						},
						
					]
				}
			],
			skills: { 
				languages: [
					{
						skillName: 'HTML+CSS',
						skillImgPath: '/TechLogos/css.png',
						magnified: false,
					},
					{
						skillName: 'Sass',
						skillImgPath: '/TechLogos/sass.png',
						magnified: false,
					},
					{
						skillName: 'JavaScript',
						skillImgPath: '/TechLogos/js.png',
						magnified: false,
					},
					{
						skillName: 'TypeScript',
						skillImgPath: '/TechLogos/ts.png',
						magnified: false,
					},
				]	,
				frameworks: [
					{
						skillName: 'VueJS',
						skillImgPath: '/TechLogos/vuejs.png',
						magnified: true,
					},
					{
						skillName: 'VueX',
						skillImgPath: '/TechLogos/vuex.png',
						magnified: false,
						isSeparator: true,
					},
					{
						skillName: 'ReactJS',
						skillImgPath: '/TechLogos/reactjs.png',
						magnified: true,
					},
					{
						skillName: 'ReduxJS',
						skillImgPath: '/TechLogos/reduxjs.png',
						magnified: false,
						isSeparator: true,
					},
					{
						skillName: 'TailwindCSS',
						skillImgPath: '/TechLogos/tailwindcss.png',
						magnified: false,
					},
					{
						skillName: 'Bootstrap',
						skillImgPath: '/TechLogos/bootstrap.png',
						magnified: false,
					},
				],
				tools: [
					{
						skillName: 'Figma',
						skillImgPath: '/TechLogos/figma.png',
						magnified: false,
					},
					{
						skillName: 'WSL2',
						skillImgPath: '/TechLogos/linux.png',
						magnified: false,
					},
					{
						skillName: 'Vim',
						skillImgPath: '/TechLogos/vim.png',
						magnified: false,
					},
					{
						skillName: 'Git',
						skillImgPath: '/TechLogos/git.png',
						magnified: false,
					},
					{
						skillName: 'GitHub',
						skillImgPath: '/TechLogos/github.png',
						magnified: false,
					},
				]
			},
			jobs: [
                {
                    name: 'Classic IT',
                    imgPath: '/CompanyLogos/cism_logo.png',
                    location: 'Uttara, Dhaka',
                    link: 'https://www.classicit.com.bd/',
                    duration: 'Nov 2021 - Feb 2022'
                },
                {
                    name: 'Gain Solutions',
                    imgPath: '/CompanyLogos/gs_logo.png',
                    location: 'Mirpur-12, Dhaka',
                    link: 'https://gain.solutions/',
                    duration: 'Mar 2022 - present'
                }
			]
		};
	},
	getters: {},
	mutations: {},
	actions: {},
});

export default store;

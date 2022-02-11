import { createApp } from 'vue';
import App from './App.vue';
import store from './store/store';
import './index.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import {
	faHome,
	faCode,
	faProjectDiagram,
	faPhone,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faHome, faCode, faProjectDiagram, faPhone);

createApp(App)
	.component('font-awesome-icon', FontAwesomeIcon)
	.mount('#app')
	.use(store);

import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faCaretUp, faCaretDown, faXmark, faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";

/* add icons to the library */
library.add(faCaretUp, faCaretDown, faXmark, faCaretLeft, faCaretRight);

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')

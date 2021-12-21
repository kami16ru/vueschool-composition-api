import { createApp } from 'vue'
import BasicsApp from './apps/basics/App.vue'
import BlogApp from './apps/blog/App.vue'

const App = (() => {
    switch (import.meta.env.VITE_APP_APP) {
        case 'basics': return BasicsApp
        case 'blog': return BlogApp
        default: return BasicsApp
    }
})()

createApp(App).mount('#app')

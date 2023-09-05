import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ContactView from '../views/ContactView.vue'
import ProjectsView from '../views/ProjectsView.vue'
import NotFoundView from '../views/Errors/NotFoundView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
            meta: {
                headerItem: true,
                footerItem: true,
                title: 'IamSeb w/ Vue | Home'
            }
        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            // component: () => import('../views/AboutView.vue')
            component: AboutView,
            meta: {
                headerItem: true,
                footerItem: true,
                title: 'IamSeb w/ Vue | About Me'
            }
        },
        {
            path: '/contact',
            name: 'contact',
            // component: () => import('../views/ContactView.vue')
            component: ContactView,
            meta: {
                headerItem: true,
                footerItem: true,
                title: 'IamSeb w/ Vue | Contact'
            }
        },
        {
            path: '/projects',
            name: 'projects',
            // component: () => import('../views/ProjectsView.vue')
            component: ProjectsView,
            meta: {
                headerItem: true,
                footerItem: true,
                title: 'IamSeb w/ Vue | Projects'
            }
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'not-found',
            // component: () => import('../views/Errors/NotFoundView.vue'),
            component: NotFoundView,
            meta: {
                headerItem: false,
                footerItem: false
            }
        }
    ]
})

router.beforeEach((to, from, next) => {
    // Get the page title from the route meta data that we have defined
    const title = to.meta.title
    // If the route has a title, set it as the page title of the document/page
    if (title) {
        document.title = title
    }
    // Continue resolving the route
    next()
})

export default router

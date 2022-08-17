import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import IndexLayout from '../components/Layouts/IndexLayout.vue'
import DashboardLayout from '../components/Layouts/DashboardLayout.vue'
import IndexView from '../views/IndexView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import DashboardView from '../views/DashboardView.vue'
import TaskListView from '../views/TaskListView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    meta: { parent: true },
    component: IndexLayout,
    children: [
      {
        path: '/',
        alias: '/index',
        component: IndexView,
        meta: { title: 'Index', ParentName: 'Index'}
      },
      {
        path: '/',
        alias: '/login',
        component: LoginView,
        meta: { title: 'Login', ParentName: 'Index'}
      },
      {
        path: '/',
        alias: '/register',
        component: RegisterView,
        meta: { title: 'Register', ParentName: 'Index'}
      },
    ]
  },
  {
    path: '/home',
    meta: { parent: true },
    component: DashboardLayout,
    children: [
      {
        path: '/',
        alias: '/home',
        component: DashboardView,
        meta: { title: 'Home', ParentName: 'Home'}
      },
      {
        path: '/',
        alias: '/tasks',
        component: TaskListView,
        meta: { title: 'Tasks', ParentName: 'Home'}
      },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';
import PostManager from '../views/PostManager.vue'; // Trang quản lý bài viết mới
import PostDetail from '../views/PostDetail.vue';
import Profile from '../views/Profile.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  { 
    path: '/manage-posts', 
    component: PostManager,
    meta: { requiresAuth: true } // Đánh dấu trang cần xác thực
  },
  { path: '/post/:id', component: PostDetail },
  {
    path: '/profile', 
    component: Profile,
    meta: { requiresAuth: true } // Đánh dấu trang cần xác thực
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Navigation Guard: Kiểm tra đăng nhập trước mỗi lần chuyển trang
router.beforeEach((to, from, next) => {
  const isLoggedIn = !!localStorage.getItem('currentUser');
  if (to.meta.requiresAuth && !isLoggedIn) {
    next('/login'); // Nếu chưa login mà vào trang quản lý thì đá về trang login
  } else {
    next();
  }
});

export default router;
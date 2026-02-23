import { createRouter, createWebHistory } from 'vue-router';

// Giả lập trạng thái đăng nhập (Yêu cầu 3c)
const isAuthenticated = false; 

const routes = [
  { path: '/', name: 'Home', component: () => import('../views/Home.vue') },
  { path: '/blog', name: 'BlogList', component: () => import('../views/BlogList.vue') },
  { path: '/blog/:id', name: 'BlogPost', component: () => import('../views/BlogPost.vue') }, // Route động
  { 
    path: '/login', 
    name: 'Login', 
    component: () => import('../views/Login.vue') 
  },
  { 
    path: '/dashboard', 
    name: 'Dashboard', 
    component: () => import('../views/Dashboard.vue'),
    // Bảo vệ route (Yêu cầu 3c)
    beforeEnter: (to, from, next) => {
      if (!isAuthenticated) {
        alert("Bạn cần đăng nhập!");
        next({ name: 'Login' });
      } else {
        next();
      }
    }
  },
  { 
    path: '/profile', 
    name: 'UserProfile', 
    alias: '/me', // Alias (Yêu cầu 3e)
    component: () => import('../views/UserProfile.vue'),
    children: [ // Routes lồng nhau (Yêu cầu 3a)
      { 
        path: 'info', 
        component: { template: '<div><h5>Thông tin cơ bản: Nguyễn Văn A</h5></div>' } 
      },
      { 
        path: 'settings', 
        component: { template: '<div><h5>Cài đặt: Đổi mật khẩu, Thông báo...</h5></div>' } 
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
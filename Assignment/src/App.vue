<template>
  <div class="min-vh-100 bg-light"> <nav class="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm mb-4">
      <div class="container">
        <a class="navbar-brand fw-bold" href="#" @click.prevent="currentTab = 'home'">
          <i class="bi bi-share-fill me-2"></i>MyApp
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <button class="nav-link btn btn-link border-0" :class="{active: currentTab === 'home'}" @click="currentTab = 'home'">Trang chủ</button>
            </li>
            <li class="nav-item">
              <button class="nav-link btn btn-link border-0" :class="{active: currentTab === 'auth'}" @click="currentTab = 'auth'">Đăng nhập</button>
            </li>
            <li class="nav-item">
              <button class="nav-link btn btn-link border-0" :class="{active: currentTab === 'profile'}" @click="currentTab = 'profile'">Đăng bài</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <main>
      <Home v-if="currentTab === 'home'" />
      <LoginRegister v-if="currentTab === 'auth'" />
      <Profile v-if="currentTab === 'profile'" />
    </main>
  </div>
</template>

<script>
// BƯỚC IMPORT: Khai báo các file trong thư mục components
import Home from './components/Home.vue'
import LoginRegister from './components/LoginRegister.vue'
import Profile from './components/Profile.vue'

export default {
  name: 'App',
  components: {
    // Đăng ký component để sử dụng trong <template>
    Home,
    LoginRegister,
    Profile
  },
  data() {
    return {
      // Tab mặc định khi mở web là trang chủ
      currentTab: 'home'
    }
  }
}
</script>

<style>
/* Bạn có thể thêm CSS tùy chỉnh ở đây */

</style>
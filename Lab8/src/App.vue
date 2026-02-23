<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
      <div class="container">
        <router-link class="navbar-brand" :to="{ name: 'Home' }">MyBlog</router-link>
        <div class="navbar-nav">
          <router-link class="nav-link" :to="{ name: 'Home' }">Trang chủ</router-link>
          <router-link class="nav-link" :to="{ name: 'BlogList' }">Blog</router-link>
          <router-link class="nav-link" :to="{ name: 'UserProfile' }">Hồ sơ (Alias: /me)</router-link>
          <router-link class="nav-link" :to="{ name: 'Dashboard' }">Bảng điều khiển</router-link>
          <router-link class="nav-link btn btn-outline-info ms-2" :to="{ name: 'Login' }">Đăng nhập</router-link>
        </div>
      </div>
    </nav>

    <router-view></router-view>
  </div>
</template>

<script setup>
/**
 * Lưu ý: Trong một dự án thực tế, bạn nên tách router ra file riêng. 
 * Đoạn code dưới đây giả định bạn đã cấu hình router trong dự án của mình.
 */
</script>

<style>
/* CSS bổ sung để giao diện mượt mà hơn */
.nav-link.router-link-active {
  color: #0dcaf0 !important;
  font-weight: bold;
}
</style>
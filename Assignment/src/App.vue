<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
      <div class="container">
        <router-link class="navbar-brand" to="/">My Blog</router-link>
        <div class="navbar-nav ms-auto">
          <router-link class="nav-link" to="/">Trang chủ</router-link>
          
          <button class="btn btn-outline-light btn-sm ms-2"><router-link v-if="!isLoggedIn" class="nav-link" to="/login">Đăng nhập</router-link></button>
          <router-link v-if="!isLoggedIn" class="nav-link" to="/register">Đăng ký</router-link>
          
          <span v-if="isLoggedIn" class="nav-link text-light">Chào, {{ username }}</span>
          <button v-if="isLoggedIn" @click="handleLogout" class="btn btn-outline-danger btn-sm ms-2">Đăng xuất</button>
        </div>
      </div>
    </nav>

    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoggedIn: !!localStorage.getItem('currentUser'),
      username: localStorage.getItem('currentUser') || ''
    };
  },
  methods: {
    handleLogout() {
      localStorage.removeItem('currentUser');
      this.isLoggedIn = false;
      this.$router.push('/login');
    }
  },
  watch: {
    // Theo dõi thay đổi route để cập nhật trạng thái login
    '$route'() {
      this.isLoggedIn = !!localStorage.getItem('currentUser');
      this.username = localStorage.getItem('currentUser');
    }
  }
};
</script>
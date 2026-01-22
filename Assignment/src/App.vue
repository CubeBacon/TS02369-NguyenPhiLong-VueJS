<script setup>

</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary mb-4">
    <div class="container">
      <router-link class="navbar-brand" to="/">MySocial</router-link>
      <div class="navbar-nav ms-auto">
        <router-link class="nav-link" to="/">Trang chủ</router-link>
        <router-link class="nav-link" to="/profile">Cá nhân</router-link>
        <router-link class="nav-link" to="/auth">Đăng nhập</router-link>
      </div>
    </div>
  </nav>
  <div class="container">
    <router-view />
  </div>
</template>

<style scoped>
</style>

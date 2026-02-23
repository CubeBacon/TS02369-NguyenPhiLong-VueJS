<template>
  <div class="container mt-5">
    <div class="alert alert-success">
      <h2 class="alert-heading">Chào mừng đến với Dashboard!</h2>
      <p>Đây là khu vực quản trị chỉ dành cho người dùng đã xác thực.</p>
    </div>
    
    <div class="row mt-4">
      <div class="col-md-4">
        <div class="card bg-light p-3">
          <h5>Số bài viết: 15</h5>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card bg-light p-3">
          <h5>Lượt xem: 1,200</h5>
        </div>
      </div>
      <div class="col-md-4">
        <button @click="handleLogout" class="btn btn-danger w-100 h-100">Đăng xuất</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const handleLogout = () => {
  localStorage.removeItem('isAuthenticated');
  // Quay về trang chủ sau khi đăng xuất
  router.push({ name: 'Home' });
};
</script>
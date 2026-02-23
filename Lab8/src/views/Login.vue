<template>
  <div class="container mt-5 d-flex justify-content-center">
    <div class="card p-4 shadow-sm" style="max-width: 400px; width: 100%;">
      <h3 class="text-center mb-4">Đăng nhập hệ thống</h3>
      <div class="mb-3">
        <label class="form-label">Tên đăng nhập:</label>
        <input type="text" class="form-control" v-model="username" placeholder="admin" />
      </div>
      <div class="mb-3">
        <label class="form-label">Mật khẩu:</label>
        <input type="password" class="form-control" v-model="password" />
      </div>
      <button @click="handleLogin" class="btn btn-primary w-100">Đăng nhập</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const username = ref('');
const password = ref('');

const handleLogin = () => {
  if (username.value === 'admin' && password.value === '123') {
    // Giả lập lưu trạng thái đăng nhập vào localStorage
    localStorage.setItem('isAuthenticated', 'true');
    alert("Đăng nhập thành công!");
    
    // Yêu cầu 3d: Điều hướng bằng tên (Named Route)
    router.push({ name: 'Dashboard' });
  } else {
    alert("Sai tài khoản hoặc mật khẩu! (Thử: admin/123)");
  }
};
</script>
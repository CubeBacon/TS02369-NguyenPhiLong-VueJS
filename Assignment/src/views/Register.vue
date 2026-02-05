<template>
  <div class="row justify-content-center">
    <div class="col-md-5">
      <div class="card shadow">
        <div class="card-body">
          <h3 class="text-center mb-4">Đăng ký thành viên</h3>
          <form @submit.prevent="handleRegister">
            <div class="mb-3">
              <label class="form-label">Tên người dùng</label>
              <input v-model="form.username" type="text" class="form-control" required>
            </div>
            <div class="mb-3">
              <label class="form-label">Email</label>
              <input v-model="form.email" type="email" class="form-control" required>
            </div>
            <div class="mb-3">
              <label class="form-label">Mật khẩu</label>
              <input v-model="form.password" type="password" class="form-control" required>
            </div>
            <button type="submit" class="btn btn-primary w-100">Đăng ký ngay</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: { username: '', email: '', password: '' }
    };
  },
  methods: {
    handleRegister() {
      // Lưu vào localStorage (giả lập database)
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      users.push(this.form);
      localStorage.setItem('users', JSON.stringify(users));
      
      alert('Đăng ký thành công!');
      this.$router.push('/login');
    }
  }
};
</script>
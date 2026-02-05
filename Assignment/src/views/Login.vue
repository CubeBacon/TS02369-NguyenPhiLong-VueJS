<template>
  <div class="row justify-content-center">
    <div class="col-md-5">
      <div class="card shadow">
        <div class="card-body">
          <h3 class="text-center mb-4">Đăng nhập</h3>
          <form @submit.prevent="handleLogin">
            <div class="mb-3">
              <label class="form-label">Tên người dùng</label>
              <input v-model="username" type="text" class="form-control" :class="{'is-invalid': error}">
            </div>
            <div class="mb-3">
              <label class="form-label">Mật khẩu</label>
              <input v-model="password" type="password" class="form-control" :class="{'is-invalid': error}">
            </div>
            <div v-if="error" class="text-danger mb-3 small">{{ error }}</div>
            <button type="submit" class="btn btn-success w-100">Đăng nhập</button>
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
      username: '',
      password: '',
      error: ''
    };
  },
  methods: {
    handleLogin() {
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      const user = users.find(u => u.username === this.username && u.password === this.password);
      
      if (user) {
        localStorage.setItem('currentUser', user.username);
        this.$router.push('/');
      } else {
        this.error = 'Sai tên đăng nhập hoặc mật khẩu!';
      }
    }
  }
};
</script>
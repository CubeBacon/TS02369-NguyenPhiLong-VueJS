<template>
  <div class="profile-page row justify-content-center">
    <div class="col-md-6">
      <div class="card shadow border-0">
        <div class="card-body p-5">
          <h2 class="text-center mb-4 fw-bold">Thông tin cá nhân</h2>
          
          <div class="text-center mb-4">
            <img :src="getImageUrl(userForm.avatarName)" 
                 class="rounded-circle shadow-sm border" 
                 style="width: 150px; height: 150px; object-fit: cover;">
            <div class="mt-3">
              <input type="file" class="form-control form-control-sm" @change="onFileSelected" accept="image/*">
            </div>
          </div>

          <form @submit.prevent="updateProfile">
            <div class="mb-3">
              <label class="form-label fw-bold">Tên người dùng</label>
              <input v-model="userForm.username" type="text" class="form-control" disabled>
              <small class="text-muted">Tên đăng nhập không thể thay đổi.</small>
            </div>
            <div class="mb-3">
              <label class="form-label fw-bold">Email</label>
              <input v-model="userForm.email" type="email" class="form-control" required>
            </div>
            <div class="mb-3">
              <label class="form-label fw-bold">Mật khẩu mới</label>
              <input v-model="userForm.password" type="password" class="form-control" required>
            </div>
            
            <div class="d-grid gap-2 mt-4">
              <button type="submit" class="btn btn-primary">Lưu thay đổi</button>
              <router-link to="/" class="btn btn-outline-secondary">Quay lại</router-link>
            </div>
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
      userForm: {
        username: '',
        email: '',
        password: '',
        avatarName: ''
      }
    };
  },
  mounted() {
    this.loadUserData();
  },
  methods: {
    loadUserData() {
      const currentUsername = localStorage.getItem('currentUser');
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      const user = users.find(u => u.username === currentUsername);
      
      if (user) {
        this.userForm = { ...user };
      }
    },
    onFileSelected(event) {
      const file = event.target.files[0];
      if (file) {
        this.userForm.avatarName = file.name;
      }
    },
    getImageUrl(name) {
      if (!name) return 'https://via.placeholder.com/150?text=User';
      try {
        return new URL(`../assets/uploads/${name}`, import.meta.url).href;
      } catch (e) {
        return 'https://via.placeholder.com/150';
      }
    },
    updateProfile() {
      let users = JSON.parse(localStorage.getItem('users') || '[]');
      const index = users.findIndex(u => u.username === this.userForm.username);
      
      if (index !== -1) {
        users[index] = { ...this.userForm };
        localStorage.setItem('users', JSON.stringify(users));
        alert('Cập nhật thông tin thành công!');
      }
    }
  }
};
</script>
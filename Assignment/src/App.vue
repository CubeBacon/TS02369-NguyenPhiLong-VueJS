<template>
  <div id="app" class="d-flex flex-column min-vh-100">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm fixed-top">
      <div class="container">
        <router-link class="navbar-brand fw-bold" to="/">
          <i class="bi bi-journal-richtext text-primary"></i> MY BLOG
        </router-link>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNav">
          <form class="d-flex mx-auto col-md-5 my-2 my-lg-0" @submit.prevent="handleSearch">
            <div class="input-group">
              <input v-model="searchText" class="form-control form-control-sm bg-dark border-secondary text-white"
                type="search" placeholder="Tìm tiêu đề bài viết..." aria-label="Search">
              <button class="btn btn-sm btn-outline-primary" type="submit">
                <i class="bi bi-search"></i>
              </button>
            </div>
          </form>

          <ul class="navbar-nav ms-auto align-items-center">
            <li class="nav-item">
              <router-link class="nav-link" to="/">Trang chủ</router-link>
            </li>

            <li class="nav-item">
              <router-link class="btn btn-primary btn-sm mx-2" to="/manage-posts">
                <i class="bi bi-pencil-square"></i> Viết bài
              </router-link>
            </li>

            <template v-if="!isLoggedIn">
              <li class="nav-item">
                <router-link class="nav-link" to="/login">Đăng nhập</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/register">Đăng ký</router-link>
              </li>
            </template>

            <template v-else>
              <li class="nav-item d-flex align-items-center">
                <router-link to="/profile" class="text-decoration-none d-flex align-items-center">
                  <img :src="getUserAvatar(username)" class="rounded-circle border border-secondary me-2"
                    style="width: 32px; height: 32px; object-fit: cover;">
                  <span class="nav-link text-info small p-0">
                    Chào, <strong>{{ username }}</strong>
                  </span>
                </router-link>
              </li>
              <li class="nav-item">
                <button @click="handleLogout" class="btn btn-outline-danger btn-sm ms-3">Thoát</button>
              </li>
            </template>
          </ul>
        </div>
      </div>
    </nav>

    <main class="container py-5 flex-grow-1" style="margin-top: 60px;">
      <router-view></router-view>
    </main>

    <footer class="bg-dark text-light py-4 mt-auto border-top border-secondary">
      <div class="container text-center text-md-start">
        <div class="row">
          <div class="col-md-6">
            <h5 class="fw-bold">Blog System v1.0</h5>
            <p class="small text-muted">Dự án học tập VueJS & Bootstrap của sinh viên.</p>
          </div>
          <div class="col-md-6 text-md-end">
            <p class="mb-1">Kết nối:</p>
            <a href="#" class="text-light me-3 fs-5"><i class="bi bi-facebook"></i></a>
            <a href="https://github.com/CubeBacon" class="text-light fs-5"><i class="bi bi-github"></i></a>
          </div>
        </div>
        <hr class="border-secondary">
        <div class="text-center small text-muted">
          &copy; 2026 Personal Blog Project. All rights reserved.
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoggedIn: false,
      username: '',
      searchText: '' // Lưu nội dung nhập vào ô tìm kiếm
    };
  },
  methods: {
    getUserAvatar(uname) {
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      const user = users.find(u => u.username === uname);

      // Nếu tìm thấy user và có avatarName thì lấy ảnh từ uploads
      if (user && user.avatarName) {
        try {
          return new URL(`./assets/uploads/${user.avatarName}`, import.meta.url).href;
        } catch (e) {
          return 'https://via.placeholder.com/32?text=U';
        }
      }
      // Ảnh mặc định nếu chưa có avatar
      return 'https://via.placeholder.com/32?text=U';
    },
    checkLogin() {
      const user = localStorage.getItem('currentUser');
      this.isLoggedIn = !!user;
      this.username = user || '';
    },
    handleLogout() {
      if (confirm('Bạn có muốn đăng xuất?')) {
        localStorage.removeItem('currentUser');
        this.checkLogin();
        this.$router.push('/login');
      }
    },
    // KỸ THUẬT TÌM KIẾM
    handleSearch() {
      if (this.searchText.trim() !== '') {
        // Đẩy tham số tìm kiếm lên URL dưới dạng query: ?q=nội-dung
        this.$router.push({ path: '/', query: { q: this.searchText } });
        this.searchText = ''; // Reset ô nhập sau khi nhấn Enter
      } else {
        // Nếu để trống thì quay về trang chủ gốc
        this.$router.push('/');
      }
    }
  },
  mounted() {
    this.checkLogin();
  },
  watch: {
    '$route'() {
      this.checkLogin();
    }
  }
};
</script>

<style>
/* Đảm bảo icon Bootstrap hiển thị */
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css");

.navbar-brand {
  letter-spacing: 1px;
}

.nav-link {
  font-size: 0.95rem;
}
</style>
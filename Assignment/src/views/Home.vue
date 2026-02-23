<template>
  <div class="home-page">
    <div class="row mb-5">
      <div class="col-md-8">
        <h1 class="fw-bold display-5 text-dark">Blog của tôi</h1>
        <p class="lead text-secondary">Khám phá các bài viết và kỷ niệm cá nhân.</p>
      </div>
    </div>

    <div v-if="searchQuery" class="alert alert-light border mb-4 d-flex justify-content-between align-items-center">
      <span>Kết quả tìm kiếm cho: <strong>"{{ searchQuery }}"</strong></span>
      <button @click="clearSearch" class="btn btn-sm btn-outline-secondary">Xóa tìm kiếm</button>
    </div>

    <div v-if="filteredPosts.length === 0" class="text-center py-5 bg-white rounded shadow-sm border">
      <i class="bi bi-search fs-1 text-light-emphasis"></i>
      <p class="mt-3 text-muted">Không tìm thấy bài viết nào.</p>
    </div>

    <div class="row">
      <div v-for="post in filteredPosts" :key="post.id" class="col-md-4 mb-4">
        <div class="card h-100 border-0 shadow-sm post-card">
          <router-link :to="'/post/' + post.id">
            <img :src="getImageUrl(post.imageName)" class="card-img-top" style="height: 220px; object-fit: cover;">
          </router-link>
          
          <div class="card-body">
            <h5 class="card-title fw-bold">
              <router-link :to="'/post/' + post.id" class="text-dark text-decoration-none">
                {{ post.title }}
              </router-link>
            </h5>
            <p class="card-text text-muted small">{{ truncateText(post.content, 120) }}</p>
          </div>
          
          <div class="card-footer bg-white border-0 pb-3 d-flex justify-content-between align-items-center">
            <span class="badge rounded-pill bg-light text-dark border">{{ post.author }}</span>
            <router-link :to="'/post/' + post.id" class="btn btn-sm btn-outline-primary">Chi tiết</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: [],
      searchQuery: ''
    };
  },
  computed: {
    filteredPosts() {
      // Nếu không có searchQuery, trả về toàn bộ posts
      if (!this.searchQuery) return this.posts;
      // Lọc không phân biệt hoa thường
      return this.posts.filter(post => 
        post.title.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }
  },
  // Kỹ thuật quan trọng: Theo dõi sự thay đổi của Route
  watch: {
    '$route.query.q': {
      immediate: true, // Chạy ngay khi vừa vào trang
      handler(newVal) {
        this.searchQuery = newVal || '';
        this.loadPosts(); // Load lại dữ liệu mỗi khi search
      }
    }
  },
  methods: {
    loadPosts() {
      const data = localStorage.getItem('allPosts');
      if (data) {
        this.posts = JSON.parse(data).reverse();
      }
    },
    getImageUrl(name) {
      if (!name) return 'https://via.placeholder.com/600x400';
      try {
        return new URL(`../assets/uploads/${name}`, import.meta.url).href;
      } catch (e) {
        return 'https://via.placeholder.com/600x400';
      }
    },
    truncateText(text, length) {
      return text.length > length ? text.substring(0, length) + '...' : text;
    },
    clearSearch() {
      this.$router.push('/');
    }
  }
};
</script>
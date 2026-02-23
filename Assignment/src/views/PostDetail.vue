<template>
  <div v-if="post" class="post-detail">
    <div class="row justify-content-center">
      <div class="col-md-9">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><router-link to="/">Trang chủ</router-link></li>
            <li class="breadcrumb-item active">{{ post.title }}</li>
          </ol>
        </nav>

        <img :src="getImageUrl(post.imageName)" class="img-fluid rounded mb-4 w-100 shadow-sm"
          style="max-height: 500px; object-fit: cover;">

        <h1 class="fw-bold mb-3">{{ post.title }}</h1>
        <div class="d-flex align-items-center text-muted mb-4 border-bottom pb-3">
          <span class="me-3"><i class="bi bi-person"></i> Tác giả: <strong>{{ post.author }}</strong></span>
          <span><i class="bi bi-calendar"></i> {{ post.date }}</span>
        </div>

        <p class="lead" style="white-space: pre-wrap; line-height: 1.8;">{{ post.content }}</p>

        <hr class="my-5">

        <h3 class="mb-4">Bình luận ({{ comments.length }})</h3>

        <div v-if="!isLoggedIn" class="alert alert-info d-flex align-items-center">
          <i class="bi bi-info-circle-fill me-2"></i>
          <div>
            Bạn cần <router-link to="/login" class="fw-bold">Đăng nhập</router-link> để tham gia bình luận.
          </div>
        </div>

        <div v-else class="card mb-4 border-0 shadow-sm bg-light">
          <div class="card-body">
            <h6 class="fw-bold mb-3">Để lại ý kiến của bạn</h6>
            <form @submit.prevent="submitComment">
              <textarea v-model="commentText" class="form-control mb-2" rows="3" placeholder="Viết bình luận..."
                required></textarea>
              <button type="submit" class="btn btn-primary btn-sm px-4">Gửi bình luận</button>
            </form>
          </div>
        </div>

        <div class="comment-list">
          <div v-for="(comment, index) in comments" :key="index" class="d-flex mb-4">
            <div class="flex-shrink-0">
              <img :src="getCommentUserAvatar(comment.user)" class="rounded-circle shadow-sm border"
                style="width: 45px; height: 45px; object-fit: cover;">
            </div>
            <div class="ms-3 p-3 bg-white border rounded shadow-sm flex-grow-1">
              <div class="d-flex justify-content-between">
                <h6 class="fw-bold mb-1">{{ comment.user }}</h6>
                <small class="text-muted" style="font-size: 0.75rem;">{{ comment.time }}</small>
              </div>
              <p class="mb-0 text-secondary">{{ comment.text }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-else class="text-center py-5">
    <h3>Bài viết không tồn tại.</h3>
    <router-link to="/">Quay về trang chủ</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      post: null,
      isLoggedIn: !!localStorage.getItem('currentUser'),
      commentText: '',
      comments: [] // Bình luận sẽ lưu theo id bài viết
    };
  },
  mounted() {
    const postId = this.$route.params.id;
    const allPosts = JSON.parse(localStorage.getItem('allPosts') || '[]');
    this.post = allPosts.find(p => p.id == postId);

    // Lấy bình luận từ localStorage
    const allComments = JSON.parse(localStorage.getItem('allComments') || '{}');
    this.comments = allComments[postId] || [];
  },
  methods: {
    getCommentUserAvatar(username) {
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      const user = users.find(u => u.username === username);

      if (user && user.avatarName) {
        try {
          // Đường dẫn tới folder uploads của bạn
          return new URL(`../assets/uploads/${user.avatarName}`, import.meta.url).href;
        } catch (e) {
          return 'https://via.placeholder.com/45?text=' + username.charAt(0);
        }
      }
      // Nếu user chưa có ảnh đại diện, hiện ảnh placeholder với chữ cái đầu của tên
      return `https://via.placeholder.com/45?text=${username.charAt(0).toUpperCase()}`;
    },
    getImageUrl(name) {
      if (!name) return 'https://via.placeholder.com/800x400';
      try {
        return new URL(`../assets/uploads/${name}`, import.meta.url).href;
      } catch (e) {
        return 'https://via.placeholder.com/800x400';
      }
    },
    submitComment() {
      const postId = this.$route.params.id;
      const currentUser = localStorage.getItem('currentUser');

      const newComment = {
        user: currentUser,
        text: this.commentText,
        time: new Date().toLocaleString('vi-VN')
      };

      this.comments.unshift(newComment); // Thêm lên đầu danh sách

      // Lưu lại vào localStorage
      const allComments = JSON.parse(localStorage.getItem('allComments') || '{}');
      allComments[postId] = this.comments;
      localStorage.setItem('allComments', JSON.stringify(allComments));

      this.commentText = ''; // Xóa form
    }
  }
};
</script>
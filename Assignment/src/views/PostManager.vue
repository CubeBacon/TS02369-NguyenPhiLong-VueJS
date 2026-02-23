<template>
  <div class="post-manager">
    <h2 class="mb-4 fw-bold text-primary">
      <i class="bi" :class="isEditing ? 'bi-pencil-square' : 'bi-plus-circle'"></i>
      {{ isEditing ? 'Chỉnh sửa bài viết' : 'Đăng bài viết mới' }}
    </h2>
    
    <div class="card p-4 shadow-sm mb-5 border-0 bg-light">
      <form @submit.prevent="savePost">
        <div class="mb-3">
          <label class="form-label fw-bold">Tiêu đề bài viết</label>
          <input v-model="postForm.title" type="text" class="form-control" placeholder="Nhập tiêu đề..." required>
        </div>
        
        <div class="mb-3">
          <label class="form-label fw-bold">Nội dung bài viết</label>
          <textarea v-model="postForm.content" class="form-control" rows="5" placeholder="Viết nội dung tại đây..." required></textarea>
        </div>

        <div class="mb-3">
          <label class="form-label fw-bold">Hình ảnh minh họa</label>
          <input type="file" class="form-control" @change="onFileSelected" accept="image/*">
          </div>

        <div class="d-flex gap-2">
          <button type="submit" class="btn" :class="isEditing ? 'btn-warning' : 'btn-primary px-4'">
            {{ isEditing ? 'Cập nhật bài viết' : 'Đăng bài ngay' }}
          </button>
          <button v-if="isEditing" type="button" @click="resetForm" class="btn btn-secondary">Hủy bỏ</button>
        </div>
      </form>
    </div>

    <h3 class="mb-3 fw-bold">Danh sách bài viết cá nhân</h3>
    <div class="list-group shadow-sm">
      <div v-for="post in myPosts" :key="post.id" class="list-group-item list-group-item-action d-flex justify-content-between align-items-center py-3">
        <div class="d-flex align-items-center">
          <img :src="getImageUrl(post.imageName)" class="rounded me-3" style="width: 50px; height: 50px; object-fit: cover;">
          <div>
            <h6 class="mb-0 fw-bold text-dark">{{ post.title }}</h6>
            <small class="text-muted">{{ post.date }}</small>
          </div>
        </div>
        <div class="btn-group">
          <button @click="editPost(post)" class="btn btn-sm btn-outline-info">Sửa</button>
          <button @click="deletePost(post.id)" class="btn btn-sm btn-outline-danger">Xóa</button>
        </div>
      </div>
      <div v-if="myPosts.length === 0" class="list-group-item text-center py-4 text-muted border-0">
        Bạn chưa có bài viết nào.
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentUser: localStorage.getItem('currentUser'),
      posts: JSON.parse(localStorage.getItem('allPosts') || '[]'),
      postForm: { id: null, title: '', content: '', imageName: '', author: '' },
      isEditing: false
    };
  },
  computed: {
    myPosts() {
      return this.posts.filter(p => p.author === this.currentUser);
    }
  },
  methods: {
    onFileSelected(event) {
      const file = event.target.files[0];
      if (file) {
        this.postForm.imageName = file.name;
      }
    },
    getImageUrl(name) {
      if (!name) return 'https://via.placeholder.com/150';
      try {
        return new URL(`../assets/uploads/${name}`, import.meta.url).href;
      } catch (e) {
        return 'https://via.placeholder.com/150';
      }
    },
    savePost() {
      if (this.isEditing) {
        const index = this.posts.findIndex(p => p.id === this.postForm.id);
        if (index !== -1) {
          this.posts[index] = { ...this.postForm, date: new Date().toLocaleDateString() };
        }
      } else {
        const newPost = {
          ...this.postForm,
          id: Date.now(),
          author: this.currentUser,
          date: new Date().toLocaleDateString()
        };
        this.posts.push(newPost);
      }
      this.syncStorage();
      this.resetForm();
    },
    editPost(post) {
      this.isEditing = true;
      this.postForm = { ...post };
      window.scrollTo(0, 0);
    },
    deletePost(id) {
      if (confirm('Xóa bài viết này?')) {
        this.posts = this.posts.filter(p => p.id !== id);
        this.syncStorage();
      }
    },
    resetForm() {
      this.postForm = { id: null, title: '', content: '', imageName: '', author: '' };
      this.isEditing = false;
    },
    syncStorage() {
      localStorage.setItem('allPosts', JSON.stringify(this.posts));
    }
  }
};
</script>
<template>
  <div>
    <h2 class="mb-4">Bài viết mới nhất</h2>
    <div class="row">
      <div v-for="post in posts" :key="post.id" class="col-md-6 mb-4">
        <div class="card h-100 shadow-sm" :style="post.isFeatured ? 'border: 2px solid gold' : ''">
          <div class="card-body">
            <h5 class="card-title">{{ post.title }}</h5>
            <p class="card-text text-muted">{{ post.excerpt }}</p>
            <span class="badge bg-info text-dark">Tác giả: {{ post.author }}</span>
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
      posts: [
        { id: 1, title: 'Học VueJS căn bản', excerpt: 'VueJS là một framework rất linh hoạt...', author: 'Admin', isFeatured: true },
        { id: 2, title: 'Sử dụng Bootstrap 5', excerpt: 'Bootstrap giúp thiết kế giao diện nhanh chóng...', author: 'Sancho', isFeatured: false }
      ]
    };
  }
};
</script>
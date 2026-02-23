<template>
  <div class="container mt-4">
    <h2>Danh sách bài viết</h2>
    <div class="list-group">
      <router-link 
        v-for="post in posts" :key="post.id"
        :to="{ name: 'BlogPost', params: { id: post.id }}"
        class="list-group-item list-group-item-action"
      >
        {{ post.title }}
      </router-link>
    </div>
  </div>
</template>

<script setup>
const posts = [
  { id: 1, title: 'Hướng dẫn Vue Router' },
  { id: 2, title: 'Làm quen với Composition API' },
  { id: 3, title: 'Bootstrap 5 trong Vue' }
];
</script>
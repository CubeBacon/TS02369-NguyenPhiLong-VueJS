<template>
  <div class="container mt-4">
    <h3>Chi tiết bài viết</h3>
    <div class="alert alert-info">
      Đang hiển thị nội dung cho bài viết có <strong>ID: {{ $route.params.id }}</strong>
    </div>
    <button @click="$router.push({ name: 'BlogList' })" class="btn btn-secondary">Quay lại</button>
  </div>
</template>
<template>
  <div class="row">
    <div class="col-md-8 mx-auto mb-4">
      <div class="card">
        <div class="card-body">
          <h5>Đăng bài viết mới</h5>
          <input type="text" class="form-control mb-2" placeholder="Tiêu đề bài viết">
          <textarea class="form-control mb-2" rows="3" placeholder="Bạn đang nghĩ gì?"></textarea>
          <input type="file" class="form-control mb-2">
          <button class="btn btn-success float-end">Đăng bài</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  border-radius: 15px;
  overflow: hidden;
}

.form-control:focus {
  border-color: #0d6efd;
  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.1);
}
</style>
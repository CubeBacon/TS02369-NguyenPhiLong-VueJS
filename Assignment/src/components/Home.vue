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

    <div class="col-md-8 mx-auto">
      <div class="card mb-3" v-for="i in 2" :key="i">
        <div class="card-body">
          <h5 class="card-title">Tiêu đề bài viết mẫu {{ i }}</h5>
          <p class="card-text">Nội dung tóm tắt của bài viết sẽ hiển thị ở đây...</p>
          <div class="d-flex justify-content-between">
            <router-link to="/post/1" class="btn btn-sm btn-outline-primary">Xem chi tiết & Bình luận</router-link>
            <div>
              <button class="btn btn-sm btn-warning me-2">Sửa</button>
              <button class="btn btn-sm btn-danger">Xóa</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
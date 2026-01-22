<template>
  <div class="row justify-content-center">
    <div class="col-md-6">
      <div class="card">
        <div class="card-header bg-white text-center">
          <img src="https://via.placeholder.com/150" class="rounded-circle img-thumbnail mb-2" style="width: 120px;">
          <h4>Hồ sơ của tôi</h4>
        </div>
        <div class="card-body">
          <div class="mb-3">
            <label class="form-label">Họ và tên</label>
            <input type="text" class="form-control" value="Nguyễn Văn A">
          </div>
          <div class="mb-3">
            <label class="form-label">Email</label>
            <input type="email" class="form-control" value="user@example.com">
          </div>
          <div class="mb-3">
            <label class="form-label">Mật khẩu mới</label>
            <input type="password" class="form-control" placeholder="Để trống nếu không đổi">
          </div>
          <div class="mb-3">
            <label class="form-label">Ảnh đại diện</label>
            <input type="file" class="form-control">
          </div>
          <button class="btn btn-primary w-100">Cập nhật thông tin</button>
        </div>
      </div>
    </div>
  </div>
</template>
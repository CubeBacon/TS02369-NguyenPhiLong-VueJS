<template>
  <div class="container mt-5">
    <div class="row border p-4 rounded shadow-sm bg-white">
      <div class="col-md-6 border-end">
        <h2 class="mb-4">Form Đăng Ký</h2>
        <form @submit.prevent>
          <div class="mb-3">
            <label class="form-label">Họ tên:</label>
            <input type="text" v-model="form.hoTen" class="form-control" placeholder="Nhập họ tên">
          </div>

          <div class="mb-3">
            <label class="form-label">Email:</label>
            <input type="email" v-model="form.email" class="form-control" placeholder="Nhập email">
          </div>

          <div class="mb-3">
            <label class="form-label">Mật khẩu:</label>
            <input type="password" v-model="form.matKhau" class="form-control" placeholder="***">
          </div>

          <div class="mb-3">
            <label class="form-label">Ngày sinh:</label>
            <input type="date" v-model="form.ngaySinh" class="form-control">
          </div>

          <div class="mb-3">
            <label class="form-label d-block">Giới tính:</label>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" v-model="form.gioiTinh" value="Nam">
              <label class="form-check-label">Nam</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" v-model="form.gioiTinh" value="Nữ">
              <label class="form-check-label">Nữ</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" v-model="form.gioiTinh" value="Khác">
              <label class="form-check-label">Khác</label>
            </div>
          </div>

          <div class="mb-3">
            <label class="form-label d-block">Ngôn ngữ:</label>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="checkbox" v-model="form.ngonNgu" value="Tiếng Việt">
              <label class="form-check-label">Tiếng Việt</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="checkbox" v-model="form.ngonNgu" value="Tiếng Anh">
              <label class="form-check-label">Tiếng Anh</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="checkbox" v-model="form.ngonNgu" value="Tiếng Nhật">
              <label class="form-check-label">Tiếng Nhật</label>
            </div>
          </div>

          <button class="btn btn-primary" @click="dangKy">Đăng ký</button>
        </form>
      </div>

      <div class="col-md-6 ps-4">
        <h2 class="mb-4">Thông tin đã đăng ký:</h2>
        <div v-if="daDangKy">
          <p><strong>Họ tên:</strong> {{ form.hoTen }}</p>
          <p><strong>Email:</strong> {{ form.email }}</p>
          <p><strong>Ngày sinh:</strong> {{ form.ngaySinh }}</p>
          <p><strong>Giới tính:</strong> {{ form.gioiTinh }}</p>
          <p><strong>Ngôn ngữ:</strong> {{ form.ngonNgu.join(', ') }}</p>
        </div>
        <p v-else class="text-muted italic">Vui lòng nhấn nút "Đăng ký" để xem thông tin.</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue';

// Sử dụng reactive để quản lý toàn bộ dữ liệu form một cách tập trung
const form = reactive({
  hoTen: '',
  email: '',
  matKhau: '',
  ngaySinh: '',
  gioiTinh: 'Nam', // Giá trị mặc định
  ngonNgu: []      // Mảng chứa các checkbox được chọn
});

// Biến trạng thái để kiểm soát việc hiển thị thông tin
const daDangKy = ref(false);

const dangKy = () => {
  // Kiểm tra đơn giản trước khi hiển thị
  if (form.hoTen && form.email) {
    daDangKy.value = true;
  } else {
    alert("Vui lòng nhập đủ Họ tên và Email!");
  }
};
</script>
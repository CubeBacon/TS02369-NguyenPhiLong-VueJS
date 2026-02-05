<template>
  <div class="container mt-5">
    <div class="card shadow-sm mx-auto" style="max-width: 400px;">
      <div class="card-header bg-primary text-white">
        <h5 class="mb-0 text-center">Xếp loại học lực</h5>
      </div>
      <div class="card-body">
        
        <div class="mb-3">
          <label for="diemTB" class="form-label">Nhập điểm của bạn:</label>
          <input 
            type="number" 
            id="diemTB" 
            v-model.number="dtb" 
            class="form-control" 
            placeholder="0 - 10"
            min="0"
            max="10"
            step="0.1"
          />
        </div>

        <div v-if="dtb !== null" class="text-center">
          <hr />
          <h4 :class="textClass">{{ xepLoai }}</h4>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

// Khởi tạo biến chứa điểm trung bình (DTB)
const dtb = ref(null);

// Logic xử lý xếp loại dựa trên các điều kiện đã cho
const xepLoai = computed(() => {
  if (dtb.value === null || dtb.value === "") return "";
  
  const score = dtb.value;

  if (score < 5.0) {
    return "Yếu";
  } else if (score >= 5.0 && score < 6.5) {
    return "Trung bình";
  } else if (score >= 6.5 && score < 8.0) {
    return "Khá";
  } else if (score >= 8.0 && score < 9.0) {
    return "Giỏi";
  } else if (score >= 9.0 && score <= 10) {
    return "Xuất sắc";
  } else {
    return "Điểm không hợp lệ";
  }
});

// Thêm class màu sắc cho sinh động
const textClass = computed(() => {
  if (dtb.value >= 8.0) return "text-success fw-bold";
  if (dtb.value >= 5.0) return "text-primary";
  return "text-danger";
});
</script>

<style scoped>
/* Bạn có thể thêm CSS riêng ở đây nếu cần */
</style>
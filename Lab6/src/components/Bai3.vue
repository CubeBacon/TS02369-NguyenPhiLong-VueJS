<template>
    <div class="container mt-5">
        <h1 class="text-center mb-4">Kiến thức sức khỏe cộng đồng</h1>
        <div class="row">
            <div class="col-sm-4 mb-4" v-for="(item, index) in items" :key="index">
                <div class="card h-100"> <img :src="item.image" class="card-img-top" :alt="item.title" />
                    <div class="card-body d-flex flex-column">
                        <h3 class="card-title">{{ item.title }}</h3>
                        <p class="card-text">{{ item.content }}</p>
                        <button class="btn btn-info mt-auto">Xem chi tiết</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'; // Nên dùng ref để dữ liệu có tính phản hồi

// Import hình ảnh từ thư mục assets
import img1 from '../assets/images/img1.jpg';
import img2 from '../assets/images/img2.jpg';
import img5 from '../assets/images/img5.jpg';

// Khai báo mảng items dưới dạng một reactive reference
const items = ref([
    {
        title: '8 loại rau củ quả giàu canxi',
        content: 'Canxi là khoáng chất cần thiết cho xương và răng...',
        image: img1
    },
    {
        title: 'Các loại gia vị tốt cho sức khỏe',
        content: 'Một số loại gia vị không chỉ làm ngon món ăn mà còn...',
        image: img2
    },
    {
        title: '9 loại đậu bổ dưỡng nên dùng',
        content: 'Đậu lăng, đậu đen và các loại đậu khác cung cấp protein...',
        image: img5
    },
]);
</script>

<style scoped>
.card-img-top {
    height: 200px;
    /* Cố định chiều cao ảnh để layout đều nhau */
    object-fit: cover;
    /* Giúp ảnh không bị méo khi co giãn */
}
</style>
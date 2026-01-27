<template>
  <div class="container py-4">
    <div class="row justify-content-center">
      <div class="col-md-8">

        <div class="card mb-4 shadow-sm border-0">
          <img src="../assets/images/img1.jpg" class="card-img-top" alt="Ảnh 1">
          <div class="card-body">
            <h5 class="card-title fw-bold">Khám phá vẻ đẹp Hạ Long</h5>
            <p class="card-text text-muted">Vịnh Hạ Long là di sản thiên nhiên thế giới với hàng ngàn đảo đá vôi.</p>
            <div class="d-flex justify-content-between">
              <button class="btn btn-sm btn-outline-primary">Xem chi tiết</button>
              <div>
                <button class="btn btn-sm btn-warning me-1">Sửa</button>
                <button class="btn btn-sm btn-danger">Xóa</button>
              </div>
            </div>
          </div>
        </div>

        <div class="card mb-4 shadow-sm border-0">
          <img src="../assets/images/img2.jpg" class="card-img-top" alt="Ảnh 2">
          <div class="card-body">
            <h5 class="card-title fw-bold">Tuyệt chiêu nấu ăn ngon</h5>
            <p class="card-text text-muted">Bí quyết để có một bữa cơm gia đình đầm ấm và đầy đủ dinh dưỡng.</p>
            <div class="d-flex justify-content-between">
              <button class="btn btn-sm btn-outline-primary">Xem chi tiết</button>
              <div>
                <button class="btn btn-sm btn-warning me-1">Sửa</button>
                <button class="btn btn-sm btn-danger">Xóa</button>
              </div>
            </div>
          </div>
        </div>

        <div class="card mb-4 shadow-sm border-0">
          <img src="../assets/images/img3.jpg" class="card-img-top" alt="Ảnh 3">
          <div class="card-body">
            <h5 class="card-title fw-bold">Lập trình VueJS cho người mới</h5>
            <p class="card-text text-muted">Bắt đầu hành trình trở thành Frontend Developer với framework VueJS.</p>
            <div class="d-flex justify-content-between">
              <button class="btn btn-sm btn-outline-primary">Xem chi tiết</button>
              <div>
                <button class="btn btn-sm btn-warning me-1">Sửa</button>
                <button class="btn btn-sm btn-danger">Xóa</button>
              </div>
            </div>
          </div>
        </div>

        <div class="card mb-4 shadow-sm border-0">
          <img src="../assets/images/img4.jpg" class="card-img-top" alt="Ảnh 4">
          <div class="card-body">
            <h5 class="card-title fw-bold">Chăm sóc cây cảnh tại nhà</h5>
            <p class="card-text text-muted">Những lưu ý quan trọng để cây cảnh trong nhà luôn xanh tốt và khỏe mạnh.</p>
            <div class="d-flex justify-content-between">
              <button class="btn btn-sm btn-outline-primary">Xem chi tiết</button>
              <div>
                <button class="btn btn-sm btn-warning me-1">Sửa</button>
                <button class="btn btn-sm btn-danger">Xóa</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Img1 from '../assets/images/img1.jpg';
import Img2 from '../assets/images/img2.jpg';
import Img3 from '../assets/images/img3.jpg';
import Img4 from '../assets/images/img4.jpg';
export default {
  name: 'Home',
  data() {
    return {
      posts: [
        {
          id: 1,
          title: 'Khám phá vẻ đẹp thiên nhiên hùng vĩ tại Hạ Long',
          content: 'Vịnh Hạ Long, một trong những kỳ quan thiên nhiên thế giới, luôn làm say đắm lòng người bởi vẻ đẹp độc đáo của hàng ngàn hòn đảo đá vôi và làn nước xanh biếc.',
          imageUrl: Img1 // Ảnh giả định
        },
        {
          id: 2,
          title: 'Tuyệt chiêu nấu ăn ngon với nguyên liệu đơn giản',
          content: 'Bạn không cần phải là đầu bếp chuyên nghiệp để tạo ra những món ăn hấp dẫn. Chỉ với vài nguyên liệu cơ bản và một chút bí quyết, bạn đã có thể biến bữa ăn hàng ngày thành tuyệt tác.',
          imageUrl: Img2 // Ảnh giả định
        },
        {
          id: 3,
          title: 'Học lập trình VueJS từ cơ bản đến nâng cao',
          content: 'VueJS là một framework JavaScript mạnh mẽ và dễ học, được sử dụng rộng rãi để xây dựng giao diện người dùng tương tác. Bài viết này sẽ hướng dẫn bạn từng bước để làm chủ VueJS.',
          imageUrl: Img3 // Ảnh giả định
        },
        {
          id: 4,
          title: 'Bí quyết chăm sóc cây cảnh trong nhà luôn xanh tốt',
          content: 'Cây cảnh không chỉ làm đẹp không gian sống mà còn mang lại không khí trong lành. Tuy nhiên, để chúng luôn tươi tốt, bạn cần nắm vững một số bí quyết chăm sóc đặc biệt.',
          imageUrl: Img4 // Ảnh giả định
        }
      ]
    }
  }
}
</script>

<style scoped>
.card-img-top {
  height: 200px;
  /* Chiều cao cố định cho ảnh */
  object-fit: cover;
  /* Đảm bảo ảnh không bị méo */
  border-bottom: 1px solid #eee;
}

.card {
  border-radius: 0.75rem;
  /* Bo góc card */
}
</style>
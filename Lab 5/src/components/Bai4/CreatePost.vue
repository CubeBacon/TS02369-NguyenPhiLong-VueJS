<template>
  <div>
    <h2>Tạo bài viết mới</h2>
    <input v-model="title" placeholder="Tiêu đề bài viết" />
    <input v-model="author" placeholder="Tên tác giả" />
    <textarea v-model="content" placeholder="Nội dung bài viết"></textarea>
    <button @click="submitPost">Đăng bài</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// Khai báo emit để gửi dữ liệu ra ngoài
const emit = defineEmits(['add-post'])

const title = ref('')
const content = ref('')
const author = ref('')

function submitPost() {
  if (title.value && content.value && author.value) {
    const newPost = {
      title: title.value,
      content: content.value,
      author: author.value
    }

    // Gửi sự kiện 'add-post' kèm object bài viết
    emit('add-post', newPost)

    // Reset các ô nhập liệu về rỗng
    title.value = ''
    content.value = ''
    author.value = ''
  }
}
</script>

<style scoped>
input,
textarea {
  display: block;
  width: 100%;
  margin: 10px 0;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ddd;
  box-sizing: border-box; /* Giúp padding không làm tràn chiều rộng 100% */
}

button {
  padding: 10px 20px;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #2980b9; /* Thêm hiệu ứng khi di chuột vào nút */
}
</style>
<template>
  <div class="container mt-4">
    <div class="row">
      <div class="col-md-3">
        <div class="list-group">
          <router-link to="/profile/info" class="list-group-item list-group-item-action">
            Thông tin cá nhân
          </router-link>
          <router-link to="/profile/settings" class="list-group-item list-group-item-action">
            Cài đặt tài khoản
          </router-link>
        </div>
      </div>
      <div class="col-md-9">
        <div class="card p-4">
          <h2>Hồ sơ người dùng</h2>
          <p class="text-muted">(Có thể truy cập qua URL: /profile hoặc /me)</p>
          <hr />
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>
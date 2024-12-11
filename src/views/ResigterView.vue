<template>
  <AppHeader />
  <section class="d_cnt">
    <div class="container">
      <div class="row">
        <div class="col-md-8 col-xs-12 last-xs first-md">
          <div class="d_box">
            <div class="row">
              <div class="col-md-6 col-sm-6 col-xs-12">
                <div class="media">
                  <img
                    src="http://thehappystay.vn/upload/account/coins@2x.png"
                    width="65"
                    height="70"
                  />
                  <h3 class="media__title">Tích điểm nhanh chóng</h3>
                  <p class="media__content m--0">
                    Tích điểm đối với mỗi lượt đặt chỗ thành công. Quy đổi thành
                    HappyCoin để du lịch nhiều hơn nữa.
                  </p>
                </div>
              </div>
              <div class="col-md-6 col-sm-6 col-xs-12">
                <div class="media">
                  <img
                    src="http://thehappystay.vn/upload/account/top-sales@2x.png"
                    width="55"
                    height="70"
                  />
                  <h3 class="media__title">Tiện ích thông minh</h3>
                  <p class="media__content m--0">
                    Check-in và kiểm tra hóa đơn thanh toán kể cả khi không có
                    kết nối mạng. Hoàn tiền nhanh gọn. Đổi lịch dễ dàng.
                  </p>
                </div>
              </div>
              <div class="col-md-6 col-sm-6 col-xs-12">
                <div class="media">
                  <img
                    src="http://thehappystay.vn/upload/account/wallet@2x.png"
                    width="60"
                    height="70"
                  />
                  <h3 class="media__title">Thanh toán đơn giản</h3>
                  <p class="media__content m--0">
                    Phương thức thanh toán tiện lợi, an toàn. Tích hợp chức năng
                    lưu thẻ để đặt phòng lần sau.
                  </p>
                </div>
              </div>
              <div class="col-md-6 col-sm-6 col-xs-12">
                <div class="media">
                  <img
                    src="http://thehappystay.vn/upload/account/backpack@2x.png"
                    width="55"
                    height="70"
                  />
                  <h3 class="media__title">Ưu đãi mỗi ngày</h3>
                  <p class="media__content m--0">
                    Nhận thông báo ưu đãi từ TheHappyStay khi có kế hoạch du
                    lịch để lựa chọn và đặt ngay cho mình một chỗ ở phù hợp,
                    tiện nghi với giá tốt nhất.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-4 col-md-4 col-lg-4">
          <div class="d_box">
            <h2>Đăng ký thành viên</h2>
            <form
              data-toggle="validator"
              method="POST"
              action="/register_success.html"
              id="myForm"
              role="form"
              novalidate="true"
            >
              <div class="form-group">
                <label for="inputEmail" class="control-label">Email</label>
                <input
                  type="email"
                  class="form-control"
                  id="inputEmail"
                  placeholder="Email"
                  name="user_email"
                  data-error="Định dạng Email chưa đúng"
                  required=""
                />
                <div class="help-block with-errors"></div>
              </div>
              <div class="form-group">
                <label for="inputPhone" class="control-label"
                  >Số điện thoại</label
                >
                <input
                  type="number"
                  class="form-control"
                  id="inputPhone"
                  placeholder="Phone"
                  name="user_phone"
                  data-error="Số điện thoại không được để trống"
                  required=""
                />
                <div class="help-block with-errors"></div>
              </div>
              <div class="form-group">
                <label for="usr">Họ và Tên:</label>
                <input
                  type="text"
                  class="form-control"
                  required=""
                  name="user_full_name"
                />
              </div>

              <div class="form-group">
                <label for="inputPassword" class="control-label"
                  >Mật khẩu</label
                >
                <input
                  type="password"
                  data-minlength="6"
                  class="form-control"
                  name="user_pass"
                  id="inputPassword"
                  placeholder="Password"
                  required=""
                />
                <div class="help-block">Tối thiểu 6 ký tự</div>
              </div>

              <div class="form-group">
                <label for="inputRePassword" class="control-label"
                  >Xác nhận lại mật khẩu</label
                >
                <input
                  type="password"
                  class="form-control"
                  id="inputPasswordConfirm"
                  data-match="#inputPassword"
                  data-match-error="Mật khẩu chưa chính xác"
                  placeholder="Confirm"
                  required=""
                />
                <div class="help-block with-errors"></div>
              </div>
              <input type="hidden" name="ctv" value="1" />
              <p class="d_intro"></p>
              <div class="form-group">
                <button type="button" class="btn btn-primary btn-reg">
                  Đăng ký
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
  <AppFooter />
</template>

<script>
import { defineComponent } from "vue";
import AppHeader from "../components/Header";
import AppFooter from "../components/Footer";
export default defineComponent({
  name: "RegisterPage",
  components: {
    AppHeader,
    AppFooter,
  },
});
</script>

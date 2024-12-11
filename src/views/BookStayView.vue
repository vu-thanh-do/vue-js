<template>
  <AppHeader />
  <section class="main-container bg_agray page-checkout">
    <div class="container">
      <div class="step-booking flex">
        <div class="col_70">
          <h2 class="mh_tll2">Thông tin đặt chỗ</h2>
          <div class="form">
            <div class="form-group width_50">
              <label for=""><span class="text-danger">*</span>Số khách</label>
              <input type="" class="form-control" id="" value="1" />
            </div>
            <div class="form-group nhan_tra_p">
              <label for="">
                đêm tại Hanoi Home 2 - Căn hộ dịch vụ view Hồ Tây, miễn phí xe
                đạp (2nd floor)</label
              >
              <div class="flex">
                <div class="item nhan">
                  <div class="warp">
                    <div class="title">Nhận phòng</div>
                    <p>07-12-2024</p>
                    <span>Thứ 7</span>
                  </div>
                </div>
                <div class="item tra">
                  <div class="warp">
                    <div class="title">Trả phòng</div>
                    <p>10-12-2024</p>
                    <span>Thứ 3</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="form-group">
              <label for="">Trách nhiệm vật chất</label>
              <p>
                Khách hàng chịu mọi trách nhiệm thiệt hại về tài sản đã gây ra
                tại chỗ ở trong thời gian lưu trú.
              </p>
            </div>
            <div class="form-group">
              <label for="">Nội quy chỗ ở</label>
              <p>Không hút thuốc Không chấp nhận động vật Không tiệc tùng</p>
            </div>
          </div>
          <h2 class="mh_tll2">Thông tin của bạn</h2>
          <form
            data-toggle="validator"
            method="POST"
            action="/confirm_info.html"
            id="myForm"
            role="form"
            novalidate="true"
          >
            <div class="form">
              <div class="form-group">
                <label for=""
                  ><span class="text-danger">*</span>Tên Khách hàng</label
                >
                <p>Họ tên trên CMND/ Thẻ căn cước</p>
                <input
                  type="text"
                  class="form-control"
                  name="user_full_name"
                  id=""
                  value="thanhdo vu"
                  data-error="Vui lòng nhập name"
                  required=""
                />
              </div>
              <div class="flex">
                <div class="form-group">
                  <label for=""
                    ><span class="text-danger">*</span>Số điện thoại</label
                  >
                  <p>Mã điện thoại quốc gia</p>
                  <input
                    type="number"
                    class="form-control"
                    name="user_tel"
                    placeholder="Số điện thoại"
                    value="0566730000"
                    data-error="Số điện thoại chỉ có thể chứa các kí tự số"
                    required=""
                  />
                </div>
                <div class="form-group">
                  <label for=""><span class="text-danger">*</span>Email</label>
                  <p>VD: email@example.com</p>
                  <input
                    type="email"
                    name="user_email"
                    class="form-control"
                    value="dovtph24172@fpt.edu.vn"
                    data-error="Bạn cần nhập Email hợp lệ"
                    required=""
                  />
                </div>
              </div>
              <div class="form-group">
                <label for=""
                  ><span class="text-danger">*</span>Quốc gia cư trú</label
                >
                <p>Nội dung này sẽ được sử dụng cho vấn đề pháp lý và thuế.</p>
                <select class="form-control" name="user_address">
                  <option value="Việt Nam">Việt Nam</option>
                  <option value="Nước ngoài">Nước ngoài</option>
                </select>
              </div>
              <div class="form-group">
                <input
                  type="checkbox"
                  id="check1"
                  class="toidatphongchonguoikhac"
                  name="toidatphongchonguoikhac"
                />
                <label for="check1">Tôi đặt phòng cho người khác</label>
              </div>
              <div class="form-group hotennguoinhanphong hidden">
                <label for=""
                  ><span class="text-danger">*</span>Họ và tên</label
                >
                <p>Họ tên trên CMND/ Thẻ căn cước</p>
                <input
                  type="text"
                  class="form-control"
                  name="hoten"
                  id=""
                  data-error="Vui lòng nhập name"
                />
              </div>

              <h2 class="mh_tll2">Thông tin thêm</h2>
              <div class="form-group">
                <label for=""
                  ><span class="text-danger">*</span>Mục đích của chuyến đi
                  này?</label
                >
                <select class="form-control" name="mucdichdatphong">
                  <option value="1">Tôi đi công tác</option>
                  <option value="2">Dành cho gia đình</option>
                  <option value="3">Tổ chức tiệc</option>
                  <option value="4">Khác</option>
                </select>
              </div>
              <div class="form-group">
                <label for="">Thời gian đến dự kiến</label>
                <input
                  type=""
                  class="form-control"
                  placeholder=""
                  name="thoigianden"
                  value="14:00"
                />
              </div>
              <div class="form-group">
                <label for="">Yêu cầu đặc biệt</label>
                <textarea
                  name="user_other_request"
                  cols="30"
                  rows="10"
                  class="form-control"
                ></textarea>
              </div>
              <h2 class="mh_tll2">Mã khuyến mại</h2>
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  name="coupo"
                  placeholder="Nhập mã khuyến mại"
                />
              </div>
              <input type="hidden" name="homestay_id" value="34850" />
              <input type="hidden" name="daycheckin" value="07-12-2024" />
              <input type="hidden" name="daycheckout" value="10-12-2024" />
              <input type="hidden" name="amount_guests" value="1" />

              <input type="hidden" name="price" value="2400000" />
              <input type="hidden" name="other_price" value="0" />
              <input type="hidden" name="sale_price" value="" />
              <input type="hidden" name="total_price" value="2400000" />
              <div class="form-group">
                <button
                  type="button"
                  class="btn btn-default btn-coupo"
                  disabled="disabled"
                >
                  Áp dụng
                </button>
              </div>

              <div class="form-group">
                <button type="submit" class="btn btn-default">
                  Gửi yêu cầu cho chủ nhà
                </button>
              </div>
            </div>
          </form>
        </div>

        <div class="col_30">
          <h2 class="mh_tll2">Chi tiết đặt phòng</h2>
          <div class="checkup checkup--sticky">
            <div class="checkup__header">
              <div class="flex">
                <div class="content">
                  <h4 class="checkup__title">
                    <a href="/"
                      >Hanoi Home 2 - Căn hộ dịch vụ view Hồ Tây, miễn phí xe
                      đạp (2nd floor)</a
                    >
                  </h4>
                  <div class="checkup__add">
                    <svg
                      version="1.1"
                      viewBox="0 0 24 24"
                      class="mt--5 svg-icon svg-fill"
                    >
                      <g fill="none" fill-rule="evenodd">
                        <circle
                          pid="0"
                          cx="12"
                          cy="12"
                          r="12"
                          fill="#000"
                          fill-opacity=".2"
                          fill-rule="nonzero"
                        ></circle>
                        <path
                          pid="1"
                          fill="#FFF"
                          d="M11.92 6c2.87 0 5.218 2.335 5.218 5.205a5.112 5.112 0 0 1-1.055 3.137c-.97 1.252-3.77 3.461-3.882 3.56a.43.43 0 0 1-.282.098.43.43 0 0 1-.281-.098c-.113-.099-2.912-2.308-3.883-3.546a5.182 5.182 0 0 1-1.055-3.15C6.7 8.335 9.05 6 11.92 6zm0 7.203a2.104 2.104 0 0 0 0-4.207 2.104 2.104 0 0 0 0 4.206z"
                        ></path>
                      </g>
                    </svg>
                    <span class="medium">Tây Hồ, Vietnam</span>
                  </div>
                </div>
                <div class="ava">
                  <a
                    href="/"
                    class="thumb-img thumb_5x3 radius-xs"
                    style="
                      background-image: url('https://cdn.thehappystay.vn/thumb_x128x80/upload/2019/09/29/hanoi-home-2-can-ho-dich-vu-view-ho-tay-mien-phi-xe-dap-2nd-floor.jpg');
                    "
                  ></a>
                </div>
              </div>
            </div>
            <div class="checkup__body">
              <div class="checkup__detail">
                <div class="flex">
                  <svg
                    version="1.1"
                    viewBox="0 0 24 24"
                    class="icon--24 svg-icon svg-fill"
                  >
                    <g fill="none" fill-rule="evenodd">
                      <path
                        pid="0"
                        fill="#F65E39"
                        fill-rule="nonzero"
                        d="M12 0c6.614 0 12 5.386 12 12s-5.386 12-12 12S0 18.614 0 12 5.386 0 12 0z"
                      ></path>
                      <path
                        pid="1"
                        fill="#FFF"
                        d="M10 7h4a1 1 0 1 1 2 0h.5A1.5 1.5 0 0 1 18 8.5v8a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 6 16.5v-8A1.5 1.5 0 0 1 7.5 7H8a1 1 0 1 1 2 0zm4 7v2h2v-2h-2zm-3 0v2h2v-2h-2zm-3 0v2h2v-2H8zm3-3v2h2v-2h-2zm3 0v2h2v-2h-2zm-6 0v2h2v-2H8z"
                      ></path>
                    </g>
                  </svg>
                  <span><b> đêm</b> · 07-12-2024 - 10-12-2024 </span>
                </div>
                <div class="flex">
                  <svg
                    version="1.1"
                    viewBox="0 0 24 24"
                    class="icon--24 svg-icon svg-fill"
                  >
                    <g fill="none">
                      <circle
                        pid="0"
                        cx="12"
                        cy="12"
                        r="12"
                        fill="#F65E39"
                      ></circle>
                      <path
                        pid="1"
                        fill="#FFF"
                        d="M12.007 12c.844 0 1.807-.083 2.414-.747.518-.539.681-1.396.518-2.585C14.702 6.995 13.607 6 12.007 6c-1.599 0-2.695.995-2.946 2.668-.163 1.19 0 2.046.518 2.585.607.664 1.57.747 2.428.747zm-3.67 6h7.335c.411 0 .779-.16 1.029-.442.264-.309.367-.724.264-1.126C16.436 14.408 14.408 13 12.012 13c-2.41 0-4.439 1.408-4.968 3.432-.103.402 0 .817.264 1.126.25.281.618.442 1.03.442z"
                      ></path>
                    </g>
                  </svg>
                  <span><b>1 khách</b></span>
                </div>
              </div>
              <div class="checkup__price">
                <ul>
                  <li>
                    <div class="td1">Giá thuê đêm</div>
                    <div class="td2">2,400,000₫</div>
                  </li>
                  <li>
                    <div class="td1">Phí dọn dẹp</div>
                    <div class="td2">0₫</div>
                  </li>
                  <li>
                    <div class="td1">Giảm giá</div>
                    <div class="td2 sale_show">0₫</div>
                  </li>
                  <li>
                    <div class="td1"><strong>Tổng tiền</strong></div>
                    <div class="td2">
                      <strong class="tongtien_show">2,400,000₫</strong>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div class="checkup__footer">
              <p><strong>Chính sách hủy phòng</strong></p>
              <p>
                <span>Moderate</span>: Hoàn tiền 100% trước 5 ngày check-in (trừ
                phí dịch vụ)
              </p>
            </div>
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
  name: "BookStay",
  components: {
    AppHeader,
    AppFooter,
  },
});
</script>

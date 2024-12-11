<template>
  <AppHeader />
  <section
    class="banner clearfix"
    style="
      background: url(https://thehappystay.vn/templates/themes/images/banner.png)
        no-repeat center center;
    "
  >
    <h2 class="mh_bnr">Homestay tại Sóc Sơn</h2>
    <div class="bnr_s">
      <div class="container">
        <div class="row">
          <form
            data-toggle="validator"
            method="GET"
            action="/"
            id="myForm"
            role="form"
          >
            <div class="col-sm-4 col-md-4 col-lg-4 box_search">
              <input type="hidden" name="mod" value="homestay" />
              <input type="hidden" name="act" value="search" />
              <input
                type="text"
                id=""
                name=""
                autocomplete="off"
                value="Sóc Sơn . Hà Nội . Vietnam"
                placeholder="Điểm đến tiếp theo cho hành trình của bạn?"
                class="in_dd mod-search-searchword txt_search"
              />
              <input type="hidden" name="location" value="112" />

              <div id="show_data" style="display: none">
                <ul></ul>
              </div>
            </div>
            <div class="col-sm-2 col-md-2 col-lg-2">
              <div class="se_date se_date_bnr">
                <input
                  class="form-control"
                  name="datecheckin"
                  id="datecheckin"
                  readonly=""
                  autocomplete="off"
                  placeholder="Ngày đến"
                  required=""
                  type="text"
                  value=""
                />
              </div>
            </div>
            <div class="col-sm-2 col-md-2 col-lg-2">
              <div class="se_date se_date_bnr">
                <input
                  class="form-control"
                  name="datecheckout"
                  id="datecheckout"
                  readonly=""
                  autocomplete="off"
                  placeholder="Ngày đi"
                  required=""
                  type="text"
                  value=""
                />
              </div>
            </div>
            <div class="col-sm-2 col-md-2 col-lg-2">
              <input
                type="text"
                class="in_dd"
                autocomplete="off"
                name="maximum_guests"
                value="0"
                placeholder="Số lượng khách"
              />

              <link
                rel="stylesheet"
                href="https://thehappystay.vn/host/themes/css/element-ui.css"
              />

              <div
                role="tooltip"
                id="el-popover-9738"
                aria-hidden="false"
                class="el-popover el-popper"
                tabindex="0"
                style="
                  display: none;
                  width: 320px;
                  transform-origin: center top;
                  z-index: 2005;
                "
                x-placement="bottom-start"
              >
                <!---->
                <div class="select-number">
                  <div class="select-number__title">
                    <p class="mb--0 semi-bold">Người lớn</p>
                  </div>
                  <div class="el-input-number">
                    <span role="button" class="el-input-number__decrease"
                      ><i class="el-icon-minus"></i
                    ></span>
                    <span role="button" class="el-input-number__increase"
                      ><i class="el-icon-plus"></i
                    ></span>
                    <div class="el-input">
                      <!---->
                      <input
                        type="number"
                        autocomplete="off"
                        max="20"
                        min="0"
                        class="el-input__inner nglon"
                        value="0"
                        role="spinbutton"
                        aria-valuemax="20"
                        aria-valuemin="0"
                        aria-valuenow="0"
                        aria-disabled="undefined"
                      /><!----><!----><!---->
                    </div>
                  </div>
                </div>
                <div class="select-number mt--18">
                  <div class="select-number__title">
                    <p class="mb--0 semi-bold">Trẻ em</p>
                    <p class="mb--0 p--small-2 c-gray-5">Tuổi từ 2–12</p>
                  </div>
                  <div class="el-input-number">
                    <span role="button" class="el-input-number__decrease"
                      ><i class="el-icon-minus"></i
                    ></span>
                    <span role="button" class="el-input-number__increase"
                      ><i class="el-icon-plus"></i
                    ></span>
                    <div class="el-input">
                      <!---->
                      <input
                        type="number"
                        autocomplete="off"
                        max="20"
                        min="0"
                        class="el-input__inner treem"
                        value="0"
                        role="spinbutton"
                        aria-valuemax="20"
                        aria-valuemin="0"
                        aria-valuenow="0"
                        aria-disabled="undefined"
                      /><!----><!----><!---->
                    </div>
                  </div>
                </div>
                <div class="select-number mt--18">
                  <div class="select-number__title">
                    <p class="mb--0 semi-bold">Trẻ sơ sinh</p>
                    <p class="mb--0 p--small-2 c-gray-5">Dưới 2 tuổi</p>
                  </div>
                  <div class="el-input-number">
                    <span role="button" class="el-input-number__decrease"
                      ><i class="el-icon-minus"></i
                    ></span>
                    <span role="button" class="el-input-number__increase"
                      ><i class="el-icon-plus"></i
                    ></span>
                    <div class="el-input">
                      <!---->
                      <input
                        type="number"
                        autocomplete="off"
                        max="20"
                        min="0"
                        class="el-input__inner"
                        value="0"
                        role="spinbutton"
                        aria-valuemax="20"
                        aria-valuemin="0"
                        aria-valuenow="0"
                        aria-disabled="undefined"
                      /><!----><!----><!---->
                    </div>
                  </div>
                </div>
                <div class="is-flex align-center jbetween mt--30">
                  <button
                    class="cursor semi-bold xoa"
                    type="button"
                    style="border: 0"
                  >
                    Xoá
                  </button>
                  <button
                    class="cursor semi-bold c-primary apdung"
                    type="button"
                    style="border: 0; float: right"
                  >
                    Áp dụng
                  </button>
                </div>
                <div
                  x-arrow=""
                  class="popper__arrow"
                  style="left: 25.3906px"
                ></div>
              </div>
            </div>
            <div class="col-sm-2 col-md-2 col-lg-2">
              <input
                type="submit"
                id=""
                name=""
                value="Tìm kiếm"
                class="in_sub_bnr"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
  <section class="top_cnt">
    <div class="container">
      <div class="row">
        <div class="col-sm-9 col-md-9 col-lg-9 col_right">
          <div class="top_cnt_r">
            <div class="path clearfix">
              <ul>
                <li><a href="https://thehappystay.vn">Trang chủ</a></li>
                <li>
                  <a href="https://thehappystay.vn/vi/vietnam/ha-noi">Hà Nội</a>
                </li>
                <li>
                  <a href="https://thehappystay.vn/vi/vietnam/ha-noi/soc-son"
                    >Sóc Sơn</a
                  >
                </li>
              </ul>
            </div>
            <div class="top_filter clearfix">
              <div class="top_filter_r">
                <div class="custom-select custom-select-xt">
                  <select>
                    <option value="0">Số lượng khách</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                  <div class="select-selected">Số lượng khách</div>
                  <div class="select-items select-hide">
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                  </div>
                </div>
                <p>Xếp theo:</p>
              </div>
            </div>
            <ul class="top_lst clearfix">
              <li style="position: relative; clear: both">
                <div class="roomImg">
                  <a href="https://thehappystay.vn/rooms/44898"
                    ><img
                      src="https://cdn.thehappystay.vn/thumb_x406x330/upload/7679/08/26/moc-house-ho-dong-do-bungalow-2-tang7.jpg"
                      alt=""
                  /></a>
                </div>
                <div class="roomInfo">
                  <h3>
                    <a href="https://thehappystay.vn/rooms/44898"
                      >Mộc house hồ Đồng Đò - Bungalow 2 tầng</a
                    >
                  </h3>
                  <div class="promo__description my--6 text-lowercase">
                    10 khách · 2 Phòng ngủ · 2 phòng tắm
                  </div>
                  <div class="hs_ttl_r"><strong>3,000,000 ₫ </strong></div>
                  <div class="promo__add mb--6 promo__add mb--6">Hà Nội,</div>
                </div>
              </li>
              <li style="position: relative">
                <div class="roomImg">
                  <a href="https://thehappystay.vn/rooms/44897"
                    ><img
                      src="https://cdn.thehappystay.vn/thumb_x406x330/upload/6370/08/23/star-hill-diem-hen-tren-may-soc-son-can-hoa-lan9.jpg"
                      alt=""
                  /></a>
                </div>
                <div class="roomInfo">
                  <h3>
                    <a href="https://thehappystay.vn/rooms/44897"
                      >Star hill điểm hẹn trên mây Sóc Sơn - Căn Hoa Lan</a
                    >
                  </h3>
                  <div class="promo__description my--6 text-lowercase">
                    8 khách · 1 Phòng ngủ · 1 phòng tắm
                  </div>
                  <div class="hs_ttl_r"><strong>850,000 ₫ </strong></div>
                  <div class="promo__add mb--6 promo__add mb--6">Hà Nội,</div>
                </div>
              </li>
              <li style="position: relative">
                <div class="roomImg">
                  <a href="https://thehappystay.vn/rooms/44896"
                    ><img
                      src="https://cdn.thehappystay.vn/thumb_x406x330/upload/5810/08/23/star-hill-diem-hen-tren-may-soc-son-can-hoa-hong8.jpg"
                      alt=""
                  /></a>
                </div>
                <div class="roomInfo">
                  <h3>
                    <a href="https://thehappystay.vn/rooms/44896"
                      >Star hill điểm hẹn trên mây Sóc Sơn - Căn Hoa Hồng</a
                    >
                  </h3>
                  <div class="promo__description my--6 text-lowercase">
                    10 khách · 1 Phòng ngủ · 1 phòng tắm
                  </div>
                  <div class="hs_ttl_r"><strong>850,000 ₫ </strong></div>
                  <div class="promo__add mb--6 promo__add mb--6">Hà Nội,</div>
                </div>
              </li>
              <li style="position: relative; clear: both">
                <div class="roomImg">
                  <a href="https://thehappystay.vn/rooms/44894"
                    ><img
                      src="https://cdn.thehappystay.vn/thumb_x406x330/upload/2024/08/22/nha-ben-rung-ulesa-soc-son-phong-mama2.PNG"
                      alt=""
                  /></a>
                </div>
                <div class="roomInfo">
                  <h3>
                    <a href="https://thehappystay.vn/rooms/44894"
                      >Nhà Bên Rừng - Ulesa Sóc Sơn - Phòng Mama</a
                    >
                  </h3>
                  <div class="promo__description my--6 text-lowercase">
                    2 khách · 1 Phòng ngủ · 1 phòng tắm
                  </div>
                  <div class="hs_ttl_r"><strong>950,000 ₫ </strong></div>
                  <div class="promo__add mb--6 promo__add mb--6">Sóc Sơn,</div>
                </div>
              </li>
              <li style="position: relative">
                <div class="roomImg">
                  <a href="https://thehappystay.vn/rooms/44893"
                    ><img
                      src="https://cdn.thehappystay.vn/thumb_x406x330/upload/2024/08/22/nha-ben-rung-ulesa-soc-son-lemon-tree-villa9.PNG"
                      alt=""
                  /></a>
                </div>
                <div class="roomInfo">
                  <h3>
                    <a href="https://thehappystay.vn/rooms/44893">
                      Nhà Bên Rừng - Ulesa Sóc Sơn - Lemon Tree Villa
                    </a>
                  </h3>
                  <div class="promo__description my--6 text-lowercase">
                    20 khách · 4 Phòng ngủ · 3 phòng tắm
                  </div>
                  <div class="hs_ttl_r"><strong>5,300,000 ₫ </strong></div>
                  <div class="promo__add mb--6 promo__add mb--6">Sóc Sơn,</div>
                </div>
              </li>
              <li style="position: relative">
                <div class="roomImg">
                  <a href="https://thehappystay.vn/rooms/44892"
                    ><img
                      src="https://cdn.thehappystay.vn/thumb_x406x330/upload/2024/08/22/nha-ben-rung-ulesa-soc-son-nha-log10.PNG"
                      alt=""
                  /></a>
                </div>
                <div class="roomInfo">
                  <h3>
                    <a href="https://thehappystay.vn/rooms/44892">
                      Nhà Bên Rừng - Ulesa Sóc Sơn - Nhà Log</a
                    >
                  </h3>
                  <div class="promo__description my--6 text-lowercase">
                    2 khách · 1 Phòng ngủ · 1 phòng tắm
                  </div>
                  <div class="hs_ttl_r"><strong>1,300,000 ₫ </strong></div>
                  <div class="promo__add mb--6 promo__add mb--6">Sóc Sơn,</div>
                </div>
              </li>
              <li style="position: relative; clear: both">
                <div class="roomImg">
                  <a href="https://thehappystay.vn/rooms/44891"
                    ><img
                      src="https://cdn.thehappystay.vn/thumb_x406x330/upload/2024/08/21/nha-ben-rung-ulesa-soc-son-nha-blooming7.PNG"
                      alt=""
                  /></a>
                </div>
                <div class="roomInfo">
                  <h3>
                    <a href="https://thehappystay.vn/rooms/44891"
                      >Nhà Bên Rừng - Ulesa Sóc Sơn - Nhà Blooming</a
                    >
                  </h3>
                  <div class="promo__description my--6 text-lowercase">
                    2 khách · 1 Phòng ngủ · 1 phòng tắm
                  </div>
                  <div class="hs_ttl_r"><strong>1,600,000 ₫ </strong></div>
                  <div class="promo__add mb--6 promo__add mb--6">Sóc Sơn,</div>
                </div>
              </li>
              <li style="position: relative">
                <div class="roomImg">
                  <a href="https://thehappystay.vn/rooms/44890"
                    ><img
                      src="https://cdn.thehappystay.vn/thumb_x406x330/upload/2024/08/21/nha-ben-rung-ulesa-soc-son-nha-nam10.PNG"
                      alt=""
                  /></a>
                </div>
                <div class="roomInfo">
                  <h3>
                    <a href="https://thehappystay.vn/rooms/44890"
                      >Nhà Bên Rừng - Ulesa Sóc Sơn - Nhà Nấm</a
                    >
                  </h3>
                  <div class="promo__description my--6 text-lowercase">
                    3 khách · 1 Phòng ngủ · 1 phòng tắm
                  </div>
                  <div class="hs_ttl_r"><strong>1,600,000 ₫ </strong></div>
                  <div class="promo__add mb--6 promo__add mb--6">Sóc Sơn,</div>
                </div>
              </li>
              <li style="position: relative">
                <div class="roomImg">
                  <a href="https://thehappystay.vn/rooms/44888"
                    ><img
                      src="https://cdn.thehappystay.vn/thumb_x406x330/upload/2024/08/19/omely-villa-soc-son-7-pn6.jfif"
                      alt=""
                  /></a>
                </div>
                <div class="roomInfo">
                  <h3>
                    <a href="https://thehappystay.vn/rooms/44888"
                      >Omely villa Sóc Sơn - 7 PN</a
                    >
                  </h3>
                  <div class="promo__description my--6 text-lowercase">
                    50 khách · 7 Phòng ngủ · 3 phòng tắm
                  </div>
                  <div class="hs_ttl_r"><strong>16,000,000 ₫ </strong></div>
                  <div class="promo__add mb--6 promo__add mb--6">Hà Nội,</div>
                </div>
              </li>
              <li style="position: relative; clear: both">
                <div class="roomImg">
                  <a href="https://thehappystay.vn/rooms/44874"
                    ><img
                      src="https://cdn.thehappystay.vn/thumb_x406x330/upload/2024/08/06/cana-glamping-homestay-dong-do-soc-son-nguyen-khu8.jpg"
                      alt=""
                  /></a>
                </div>
                <div class="roomInfo">
                  <h3>
                    <a href="https://thehappystay.vn/rooms/44874"
                      >CANA Glamping &amp; Homestay Đồng Đò Sóc Sơn - Nguyên
                      khu</a
                    >
                  </h3>
                  <div class="promo__description my--6 text-lowercase">
                    6 khách · 2 Phòng ngủ · 2 phòng tắm
                  </div>
                  <div class="hs_ttl_r"><strong>1,800,000 ₫ </strong></div>
                  <div class="promo__add mb--6 promo__add mb--6">Hà Nội,</div>
                </div>
              </li>
              <li style="position: relative">
                <div class="roomImg">
                  <a href="https://thehappystay.vn/rooms/44873"
                    ><img
                      src="https://cdn.thehappystay.vn/thumb_x406x330/upload/2024/08/06/cana-glamping-homestay-dong-do-soc-son-bean-24.jpg"
                      alt=""
                  /></a>
                </div>
                <div class="roomInfo">
                  <h3>
                    <a href="https://thehappystay.vn/rooms/44873"
                      >CANA Glamping &amp; Homestay Đồng Đò Sóc Sơn - Bean 2</a
                    >
                  </h3>
                  <div class="promo__description my--6 text-lowercase">
                    3 khách · 1 Phòng ngủ · 1 phòng tắm
                  </div>
                  <div class="hs_ttl_r"><strong>900,000 ₫ </strong></div>
                  <div class="promo__add mb--6 promo__add mb--6">Hà Nội,</div>
                </div>
              </li>
              <li style="position: relative">
                <div class="roomImg">
                  <a href="https://thehappystay.vn/rooms/44871"
                    ><img
                      src="https://cdn.thehappystay.vn/thumb_x406x330/upload/2024/08/06/cana-glamping-homestay-dong-do-soc-son-bean-12.jfif"
                      alt=""
                  /></a>
                </div>
                <div class="roomInfo">
                  <h3>
                    <a href="https://thehappystay.vn/rooms/44871"
                      >CANA Glamping &amp; Homestay Đồng Đò Sóc Sơn - Bean 1</a
                    >
                  </h3>
                  <div class="promo__description my--6 text-lowercase">
                    2 khách · 1 Phòng ngủ · 1 phòng tắm
                  </div>
                  <div class="hs_ttl_r"><strong>900,000 ₫ </strong></div>
                  <div class="promo__add mb--6 promo__add mb--6">Hà Nội,</div>
                </div>
              </li>
              <li style="position: relative; clear: both">
                <div class="roomImg">
                  <a href="https://thehappystay.vn/rooms/44870"
                    ><img
                      src="https://cdn.thehappystay.vn/thumb_x406x330/upload/6310/08/05/moc-huong-villa-soc-son-3pn9.jfif"
                      alt=""
                  /></a>
                </div>
                <div class="roomInfo">
                  <h3>
                    <a href="https://thehappystay.vn/rooms/44870"
                      >Mộc Hương villa Sóc Sơn- 3PN</a
                    >
                  </h3>
                  <div class="promo__description my--6 text-lowercase">
                    15 khách · 3 Phòng ngủ · 4 phòng tắm
                  </div>
                  <div class="hs_ttl_r"><strong>4,000,000 ₫ </strong></div>
                  <div class="promo__add mb--6 promo__add mb--6">Hà Nội,</div>
                </div>
              </li>
              <li style="position: relative">
                <div class="roomImg">
                  <a href="https://thehappystay.vn/rooms/44861"
                    ><img
                      src="https://cdn.thehappystay.vn/thumb_x406x330/upload/2024/07/01/hana-farm-homestay-soc-son-bungalow-biglove3.jpg"
                      alt=""
                  /></a>
                </div>
                <div class="roomInfo">
                  <h3>
                    <a href="https://thehappystay.vn/rooms/44861"
                      >Hana Farm Homestay Sóc Sơn - Bungalow Biglove
                    </a>
                  </h3>
                  <div class="promo__description my--6 text-lowercase">
                    6 khách · 1 Phòng ngủ · 1 phòng tắm
                  </div>
                  <div class="hs_ttl_r"><strong>800,000 ₫ </strong></div>
                  <div class="promo__add mb--6 promo__add mb--6">Sóc Sơn ,</div>
                </div>
              </li>
              <li style="position: relative">
                <div class="roomImg">
                  <a href="https://thehappystay.vn/rooms/44860"
                    ><img
                      src="https://cdn.thehappystay.vn/thumb_x406x330/upload/2024/07/01/love-house7.jpg"
                      alt=""
                  /></a>
                </div>
                <div class="roomInfo">
                  <h3>
                    <a href="https://thehappystay.vn/rooms/44860"
                      >Hana Farm Homestay Sóc Sơn - Love house</a
                    >
                  </h3>
                  <div class="promo__description my--6 text-lowercase">
                    3 khách · 1 Phòng ngủ · 1 phòng tắm
                  </div>
                  <div class="hs_ttl_r"><strong>500,000 ₫ </strong></div>
                  <div class="promo__add mb--6 promo__add mb--6">Sóc Sơn ,</div>
                </div>
              </li>
              <li style="position: relative; clear: both">
                <div class="roomImg">
                  <a href="https://thehappystay.vn/rooms/44859"
                    ><img
                      src="https://cdn.thehappystay.vn/thumb_x406x330/upload/2024/07/01/hana-farm-khu-b10.jpg"
                      alt=""
                  /></a>
                </div>
                <div class="roomInfo">
                  <h3>
                    <a href="https://thehappystay.vn/rooms/44859"
                      >Hana Farm Homestay Sóc Sơn - Full khu B</a
                    >
                  </h3>
                  <div class="promo__description my--6 text-lowercase">
                    12 khách · 2 Phòng ngủ · 2 phòng tắm
                  </div>
                  <div class="hs_ttl_r"><strong>1,600,000 ₫ </strong></div>
                  <div class="promo__add mb--6 promo__add mb--6">Sóc Sơn ,</div>
                </div>
              </li>
              <li style="position: relative">
                <div class="roomImg">
                  <a href="https://thehappystay.vn/rooms/44845"
                    ><img
                      src="https://cdn.thehappystay.vn/thumb_x406x330/upload/2024/04/19/cheery-house-soc-son-7pn3.PNG"
                      alt=""
                  /></a>
                </div>
                <div class="roomInfo">
                  <h3>
                    <a href="https://thehappystay.vn/rooms/44845"
                      >Cheery House Sóc Sơn- 7PN</a
                    >
                  </h3>
                  <div class="promo__description my--6 text-lowercase">
                    26 khách · 7 Phòng ngủ · 4 phòng tắm
                  </div>
                  <div class="hs_ttl_r"><strong>10,400,000 ₫ </strong></div>
                  <div class="promo__add mb--6 promo__add mb--6">Hà Nội,</div>
                </div>
              </li>
              <li style="position: relative">
                <div class="roomImg">
                  <a href="https://thehappystay.vn/rooms/44843"
                    ><img
                      src="https://cdn.thehappystay.vn/thumb_x406x330/upload/2024/04/16/tara-eco-village-soc-son-ha-noi-6pn7.jpg"
                      alt=""
                  /></a>
                </div>
                <div class="roomInfo">
                  <h3>
                    <a href="https://thehappystay.vn/rooms/44843"
                      >Tara Eco Village Sóc Sơn Hà Nội - 6PN</a
                    >
                  </h3>
                  <div class="promo__description my--6 text-lowercase">
                    40 khách · 6 Phòng ngủ · 6 phòng tắm
                  </div>
                  <div class="hs_ttl_r"><strong>5,000,000 ₫ </strong></div>
                  <div class="promo__add mb--6 promo__add mb--6">Hà Nội,</div>
                </div>
              </li>
            </ul>
            <ul class="pageLst clearfix">
              <li>
                <a
                  href="https://thehappystay.vn/vi/vietnam/ha-noi/soc-son?page=1"
                  >1</a
                >
              </li>
              <li>
                <a
                  href="https://thehappystay.vn/vi/vietnam/ha-noi/soc-son?page=2"
                  >2</a
                >
              </li>
              <li>
                <a
                  href="https://thehappystay.vn/vi/vietnam/ha-noi/soc-son?page=3"
                  >3</a
                >
              </li>
              <li>
                <a
                  href="https://thehappystay.vn/vi/vietnam/ha-noi/soc-son?page=4"
                  >4</a
                >
              </li>
              <li>
                <a
                  href="https://thehappystay.vn/vi/vietnam/ha-noi/soc-son?page=5"
                  >5</a
                >
              </li>
              <li>
                <a
                  href="https://thehappystay.vn/vi/vietnam/ha-noi/soc-son?page=23"
                  >Cuối</a
                >
              </li>
            </ul>
          </div>
        </div>
        <div class="col-sm-3 col-md-3 col-lg-3 col_left">
          <div class="top_cnt_l">
            <div class="gmd">
              <div class="dpn">
                <input type="checkbox" id="check1" name="booking_type" />
                <label for="check1">Đặt phòng nhanh</label>
              </div>
            </div>
            <div class="spn">
              <h3>Số phòng ngủ</h3>
              <div class="custom-select custom-select-spn">
                <select name="num_bedrooms">
                  <option value="0">Số phòng ngủ</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
                <div class="select-selected">Số phòng ngủ</div>
                <div class="select-items select-hide">
                  <div>1</div>
                  <div>2</div>
                  <div>3</div>
                </div>
              </div>
            </div>
            <div class="top_cnt_l_block">
              <h3>Giá mỗi đêm</h3>
              <ul>
                <li>
                  <input
                    type="checkbox"
                    id="checkprice2"
                    value="1"
                    name="range_price"
                  />
                  <label for="checkprice2">0 - 500,000</label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    id="checkprice3"
                    value="2"
                    name="range_price"
                  />
                  <label for="checkprice3">500,000 - 1,000,000</label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    id="checkprice4"
                    value="3"
                    name="range_price"
                  />
                  <label for="checkprice4">1,000,000 - 2,000,000</label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    id="checkprice5"
                    value="4"
                    name="range_price"
                  />
                  <label for="checkprice5">2,000,000 - 3,000,000</label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    id="checkprice6"
                    value="5"
                    name="range_price"
                  />
                  <label for="checkprice6">3,000,000 - 5,000,000</label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    id="checkprice7"
                    value="6"
                    name="range_price"
                  />
                  <label for="checkprice7">5,000,000 - 10,000,000</label>
                </li>
              </ul>
              <input
                type="button"
                class="in_sub_bnr btn_apdung"
                value="Áp dụng"
              />
            </div>
            <div class="top_cnt_l_block">
              <h3>Phân loại bất động sản</h3>
              <ul>
                <li>
                  <input
                    type="checkbox"
                    id="check2"
                    value="48"
                    name="propertyType_id"
                  />
                  <label for="check2">Căn hộ chung cư</label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    id="check3"
                    value="38"
                    name="propertyType_id"
                  />
                  <label for="check3">Studio</label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    id="check4"
                    value="45"
                    name="propertyType_id"
                  />
                  <label for="check4">Biệt thự</label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    id="check5"
                    value="46"
                    name="propertyType_id"
                  />
                  <label for="check5">Nhà riêng</label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    id="check6"
                    value="43"
                    name="propertyType_id"
                  />
                  <label for="check6">Căn hộ dịch vụ</label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    id="check7"
                    value="41"
                    name="propertyType_id"
                  />
                  <label for="check7">Khác</label>
                </li>
              </ul>
              <input
                type="button"
                class="in_sub_bnr btn_apdung"
                value="Áp dụng"
              />
            </div>
            <div class="top_cnt_l_block">
              <h3>Loại phòng</h3>
              <ul>
                <li>
                  <input
                    type="checkbox"
                    id="check8"
                    value="37"
                    name="roomType_id"
                  />
                  <label for="check8">Nguyên căn</label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    id="check9"
                    value="40"
                    name="roomType_id"
                  />
                  <label for="check9">Phòng riêng</label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    id="check10"
                    value="52"
                    name="roomType_id"
                  />
                  <label for="check10">Ở ghép</label>
                </li>
              </ul>
              <input
                type="button"
                class="in_sub_bnr btn_apdung"
                value="Áp dụng"
              />
            </div>

            <div class="top_cnt_l_block">
              <h3>Cho gia đình</h3>
              <ul>
                <li>
                  <input
                    type="checkbox"
                    id="check916"
                    value="16"
                    name="amenities_id"
                  />
                  <label for="check916" value="16">Đệm bổ sung</label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    id="check917"
                    value="17"
                    name="amenities_id"
                  />
                  <label for="check917" value="17">Không hút thuốc</label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    id="check930"
                    value="30"
                    name="amenities_id"
                  />
                  <label for="check930" value="30">Phù hợp với trẻ nhỏ</label>
                </li>
              </ul>
              <input
                type="button"
                class="in_sub_bnr btn_apdung"
                value="Áp dụng"
              />
            </div>
            <div class="top_cnt_l_block">
              <h3>Tiện ích bếp</h3>
              <ul>
                <li>
                  <input
                    type="checkbox"
                    id="check98"
                    value="8"
                    name="amenities_id"
                  />
                  <label for="check98" value="8">Bếp điện</label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    id="check99"
                    value="9"
                    name="amenities_id"
                  />
                  <label for="check99" value="9">Tủ lạnh</label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    id="check928"
                    value="28"
                    name="amenities_id"
                  />
                  <label for="check928" value="28">Lò vi sóng</label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    id="check932"
                    value="32"
                    name="amenities_id"
                  />
                  <label for="check932" value="32">Bếp Ga</label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    id="check958"
                    value="58"
                    name="amenities_id"
                  />
                  <label for="check958" value="58">Phục vụ bữa sáng</label>
                </li>
              </ul>
              <input
                type="button"
                class="in_sub_bnr btn_apdung"
                value="Áp dụng"
              />
            </div>
            <div class="top_cnt_l_block">
              <h3>Hoạt động giải trí</h3>
              <ul>
                <li>
                  <input
                    type="checkbox"
                    id="check910"
                    value="10"
                    name="amenities_id"
                  />
                  <label for="check910" value="10">Nướng BBQ</label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    id="check929"
                    value="29"
                    name="amenities_id"
                  />
                  <label for="check929" value="29">BBQ</label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    id="check931"
                    value="31"
                    name="amenities_id"
                  />
                  <label for="check931" value="31">Bể Bơi</label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    id="check933"
                    value="33"
                    name="amenities_id"
                  />
                  <label for="check933" value="33">Cho thú cưng</label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    id="check934"
                    value="34"
                    name="amenities_id"
                  />
                  <label for="check934" value="34">Gần sân golf</label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    id="check935"
                    value="35"
                    name="amenities_id"
                  />
                  <label for="check935" value="35">Hướng biển</label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    id="check936"
                    value="36"
                    name="amenities_id"
                  />
                  <label for="check936" value="36">Câu cá</label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    id="check943"
                    value="43"
                    name="amenities_id"
                  />
                  <label for="check943" value="43">Bể bơi cá nhân</label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    id="check956"
                    value="56"
                    name="amenities_id"
                  />
                  <label for="check956" value="56">Phòng karaoke</label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    id="check957"
                    value="57"
                    name="amenities_id"
                  />
                  <label for="check957" value="57">Có bàn Bi-A</label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    id="check965"
                    value="65"
                    name="amenities_id"
                  />
                  <label for="check965" value="65">Có bàn Bi lắc</label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    id="check966"
                    value="66"
                    name="amenities_id"
                  />
                  <label for="check966" value="66">Chèo thuyền</label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    id="check968"
                    value="68"
                    name="amenities_id"
                  />
                  <label for="check968" value="68">Đốt lửa trại</label>
                </li>
              </ul>
            </div>
            <div class="top_cnt_l_block">
              <h3>Tiện ích phòng</h3>
              <ul>
                <li>
                  <input
                    type="checkbox"
                    id="check912"
                    value="12"
                    name="amenities_id"
                  />
                  <label for="check912" value="12">Ban Công</label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    id="check940"
                    value="40"
                    name="amenities_id"
                  />
                  <label for="check940" value="40">Cửa sổ</label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    id="check941"
                    value="41"
                    name="amenities_id"
                  />
                  <label for="check941" value="41">Nhà bếp</label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    id="check964"
                    value="64"
                    name="amenities_id"
                  />
                  <label for="check964" value="64">Phù hợp cho cặp đôi</label>
                </li>
              </ul>
              <input
                type="button"
                class="in_sub_bnr btn_apdung"
                value="Áp dụng"
              />
            </div>
            <div class="top_cnt_l_block">
              <h3>Tiện ích</h3>
              <ul>
                <li>
                  <input
                    type="checkbox"
                    id="check911"
                    value="11"
                    name="amenities_id"
                  />
                  <label for="check911" value="11">Wifi</label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    id="check913"
                    value="13"
                    name="amenities_id"
                  />
                  <label for="check913" value="13">TV</label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    id="check914"
                    value="14"
                    name="amenities_id"
                  />
                  <label for="check914" value="14">Điều hoà</label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    id="check915"
                    value="15"
                    name="amenities_id"
                  />
                  <label for="check915" value="15">Máy giặt</label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    id="check918"
                    value="18"
                    name="amenities_id"
                  />
                  <label for="check918" value="18">Dầu gội, dầu xả</label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    id="check919"
                    value="19"
                    name="amenities_id"
                  />
                  <label for="check919" value="19">Giấy vệ sinh</label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    id="check920"
                    value="20"
                    name="amenities_id"
                  />
                  <label for="check920" value="20">Giấy ăn</label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    id="check921"
                    value="21"
                    name="amenities_id"
                  />
                  <label for="check921" value="21">Nước khoáng</label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    id="check922"
                    value="22"
                    name="amenities_id"
                  />
                  <label for="check922" value="22">Khăn tắm</label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    id="check923"
                    value="23"
                    name="amenities_id"
                  />
                  <label for="check923" value="23">Kem đánh răng</label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    id="check924"
                    value="24"
                    name="amenities_id"
                  />
                  <label for="check924" value="24">Xà phòng tắm</label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    id="check925"
                    value="25"
                    name="amenities_id"
                  />
                  <label for="check925" value="25">Thang máy</label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    id="check927"
                    value="27"
                    name="amenities_id"
                  />
                  <label for="check927" value="27">Máy sấy</label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    id="check942"
                    value="42"
                    name="amenities_id"
                  />
                  <label for="check942" value="42">Internet</label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    id="check944"
                    value="44"
                    name="amenities_id"
                  />
                  <label for="check944" value="44">Bồn tắm</label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    id="check967"
                    value="67"
                    name="amenities_id"
                  />
                  <label for="check967" value="67">Bình nóng lạnh</label>
                </li>
              </ul>
              <input
                type="button"
                class="in_sub_bnr btn_apdung"
                value="Áp dụng"
              />
            </div>
            <div class="top_cnt_l_block">
              <h3>Tiện ích nổi bật</h3>
              <ul>
                <li>
                  <input
                    type="checkbox"
                    id="check926"
                    value="26"
                    name="amenities_id"
                  />
                  <label for="check926" value="26">Smart tivi</label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    id="check937"
                    value="37"
                    name="amenities_id"
                  />
                  <label for="check937" value="37">Sân vườn rộng</label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    id="check938"
                    value="38"
                    name="amenities_id"
                  />
                  <label for="check938" value="38">Ghế massage</label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    id="check939"
                    value="39"
                    name="amenities_id"
                  />
                  <label for="check939" value="39">Máy chiếu phim</label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    id="check959"
                    value="59"
                    name="amenities_id"
                  />
                  <label for="check959" value="59">Bể bơi bốn mùa</label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    id="check960"
                    value="60"
                    name="amenities_id"
                  />
                  <label for="check960" value="60">Team building</label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    id="check961"
                    value="61"
                    name="amenities_id"
                  />
                  <label for="check961" value="61">View hồ</label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    id="check962"
                    value="62"
                    name="amenities_id"
                  />
                  <label for="check962" value="62">View núi</label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    id="check963"
                    value="63"
                    name="amenities_id"
                  />
                  <label for="check963" value="63">Thiết kế độc đáo</label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    id="check969"
                    value="69"
                    name="amenities_id"
                  />
                  <label for="check969" value="69">Phù hợp cho cặp đôi</label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    id="check970"
                    value="70"
                    name="amenities_id"
                  />
                  <label for="check970" value="70">Có bể bơi riêng</label>
                </li>
              </ul>
              <input
                type="button"
                class="in_sub_bnr btn_apdung"
                value="Áp dụng"
              />
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
  name: "HomeView",
  components: {
    AppHeader,
    AppFooter,
  },
});
</script>
<style scoped>
#show_data {
  z-index: 11;
  top: 61px;
  left: 0px;
  display: none;
  width: 92%;
  position: absolute;
  border: 1px solid #aaaaaa;
  background-color: #ffffff;
  margin-left: 15px;
}
#show_data ul {
  float: left;
  margin-bottom: 0px;
}
#show_data ul li {
  text-decoration: none;
  display: -webkit-inline-box;
  width: 100%;
  padding: 0.7em 0.4em 0.7em 0.6em;
  line-height: 1.5;
  zoom: 1;
}
#show_data li a {
  color: #000 !important;
  font-size: 14px;
}
.select-number {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.select-number__title {
  flex: 0 0 100px;
}
.el-input__inner {
  border: 0px solid #dcdfe6;
}
.el-input-number {
  position: relative;
  display: inline-block;
  width: 180px;
  line-height: 1rem;
}
.el-input-number {
  line-height: 38px;
  width: 140px;
}

.el-input-number__decrease {
  left: 1px;
  border-radius: 4px 0 0 4px;
  border-right: 1px solid #ced4da;
}
.el-input-number__decrease,
.el-input-number__increase {
  border-radius: 50%;
  border: 1px solid #ced4da;
  width: 40px;
}
.is-flex {
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
}
.mt--30 {
  margin-top: 30px !important;
}
</style>

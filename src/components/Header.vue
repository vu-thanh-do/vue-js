<template>
  <header>
    <div class="container">
      <div class="row">
        <div class="col-sm-12 col-md-12 col-lg-12 clearfix">
          <div class="h_left clearfix">
            <h1 class="logo" style="width: 188px">
              <a href="https://thehappystay.vn"
                ><img
                  src="https://thehappystay.vn/templates/themes/images/logo.png?v1"
                  alt=""
              /></a>
            </h1>
          </div>
          <div class="h_right clearfix">
            <p class="h_dk">
              <a href="https://thehappystay.vn/register.html">Đăng ký</a
              >&nbsp;|&nbsp;<a href="https://thehappystay.vn/login.html"
                >Đăng nhập</a
              >
            </p>

            <div class="language">
              <dl id="sample" class="dropdownl">
                <dt>
                  <a href="#"
                    ><span
                      ><img
                        class="flag"
                        src="https://thehappystay.vn/templates/themes/images/vn.png"
                        alt="" /></span
                  ></a>
                </dt>
                <dd>
                  <ul>
                    <li>
                      <a href="#"
                        ><img
                          class="flag"
                          src="https://thehappystay.vn/templates/themes/images/vn.png"
                          alt=""
                      /></a>
                    </li>
                    <li>
                      <a href="#"
                        ><img
                          class="flag"
                          src="https://thehappystay.vn/templates/themes/images/En.png"
                          alt=""
                      /></a>
                    </li>
                  </ul>
                </dd>
              </dl>
              <span id="result"></span>
            </div>
            <p class="h_phone">Hotline: 08888.22.368</p>
          </div>
        </div>
      </div>
    </div>
  </header>
  <nav class="navbar navbar-default affix-top" role="navigation" id="BB-nav">
    <div class="container-fluid">
      <div class="container nav-container">
        <div class="row">
          <div class="logo">
            <a href="https://thehappystay.vn"
              ><img
                src="https://thehappystay.vn/templates/themes/images/logo_mb.png?v3"
                alt=""
            /></a>
          </div>
          <div class="col-sm-12 col-md-12 col-lg-12">
            <button
              type="button"
              class="navbar-toggle"
              data-toggle="collapse"
              data-target=".BB-nav"
            >
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span> <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <ul
              id="menu-menu"
              class="nav navbar-nav BB-nav collapse navbar-collapse menu"
            >
              <li class="dropdown">
                <a class="" data-toggle="dropdown">Hà Nội </a>
              </li>
              <li class="dropdown">
                <a data-toggle="dropdown">Hồ Chí Minh</a>
              </li>
              <li class="dropdown">
                <a data-toggle="dropdown">Đà Lạt</a>
              </li>
              <li class="dropdown">
                <a data-toggle="dropdown">Hội An</a>
              </li>
              <li class="dropdown">
                <a data-toggle="dropdown">Phú Quốc</a>
              </li>
            </ul>

            <div class="theothang">
              <a target="_blank" href="https://bookingtour.vn/">Booking Tour</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "AppHeader",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@charset "utf-8";
/* # reset
---------------------------------------------------------------------------- */
html {
}
body,
h1,
h2,
h3,
h4,
h5,
h6,
p,
ul,
ol,
dl,
dt,
dd,
li,
table,
th,
td,
form,
address,
pre,
caption,
cite,
code,
dfn,
var {
  font-size: 100%;
  font-style: normal;
  margin: 0;
  padding: 0;
  text-decoration: none;
}
img {
  border: 0;
  vertical-align: bottom;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
caption,
th {
  text-align: left;
}
ol,
ul {
  list-style: none;
}
body {
  background: #fff;
  color: #222 !important;
  font-size: 16px;
  font-family: "Oswald", sans-serif;
  line-height: normal;
}
.hotstay a {
  float: right;
  color: #fff !important;
  font-family: "Oswald", sans-serif !important;
  font-weight: 300;
  font-size: 18px;
  padding: 0 5px 0 0 !important;
  text-align: left;
  display: block;
  height: 45px;
  line-height: 47px;
}
.theothang a {
  float: right;
  color: #f4511e !important;
  font-family: "Oswald", sans-serif !important;
  font-weight: 300;
  font-size: 18px;
  padding: 0 5px 0 0 !important;
  text-align: left;
  display: block;
  height: 45px;
  line-height: 47px;
}
.clearfix {
  zoom: 1;
}
.clearfix:after {
  clear: both;
  content: ".";
  display: block;
  height: 0;
  line-height: 0;
  visibility: hidden;
}
/* # style
---------------------------------------------------------------------------- */
header {
  background: #fff;
  padding-bottom: 10px;
}
.h_left {
  float: left;
  width: 40%;
}
.logo {
  margin-top: 10px;
}
.logo img {
  width: 100%;
  max-width: 275px;
}
.h_right {
  float: right;
  width: 60%;
}
.h_right .checkout__progress {
  margin-top: 20px;
}
.h_right .checkout__progress .checkout__progress-step {
  margin-right: 1.5rem;
  font-size: 16px;
}
.h_right .checkout__progress .checkout__progress-step.active {
  color: #f4511e;
}
.h_right .checkout__progress svg {
  width: 16px;
  height: 16px;
  margin-right: 1.5rem;
  vertical-align: middle;
}
.h_phone {
  float: right;
  color: #1a1a1a;
  font-size: 18px;
  margin-top: 15px;
}
.h_dk {
  float: right;
  margin-left: 70px;
  margin-top: 15px;
  color: #1a1a1a;
  font-size: 18px;
}
.h_dk a {
  text-decoration: none;
  color: #1a1a1a;
}
.h_dk a:hover {
  color: #f4511e;
}
.language {
  float: right;
  position: relative;
  z-index: 10000;
  margin-left: 20px;
  margin-top: 23px;
}
.language span {
  display: none;
}
.dropdownl dd,
.dropdownl dt,
.dropdownl ul {
  margin: 0px;
  padding: 0px;
}
.dropdownl dd {
  position: relative;
}
.dropdownl a,
.dropdownl a:visited {
  color: #888888;
  text-decoration: none;
  outline: none;
  font-size: 14px;
  font-weight: normal;
  text-transform: none;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  display: block;
  width: 32px;
  height: 12px;
}
.dropdownl a:hover {
  color: #888888;
}
.dropdownl dt a {
  background: url(https://thehappystay.vn/templates/themes/images/ico_down1.png)
    no-repeat right 3px;
  /* https://thehappystay.vn/templates/themes/images/vn.png */
  display: block;
  padding-right: 0;
  width: 32px;
  height: 12px;
  margin: 0;
  padding: 0;
}
.dropdownl dt img {
  margin: 0;
}
.dropdownl dt a span {
  cursor: pointer;
  display: block;
  padding: 0;
  margin: 0;
  line-height: 0;
}
.dropdownl dd ul {
  display: none;
  left: 0px;
  padding: 0px;
  position: absolute;
  top: 0;
  width: auto;
  list-style: none;
  width: 100%;
  padding: 0 0;
}
.dropdownl span.value {
  display: none;
}
.dropdownl dd ul li a {
  padding: 5px 0 0 0;
  display: block;
}
.dropdownl dd ul li a img {
  margin-right: 0;
}
.dropdownl dd ul li:first-child a {
  padding: 0;
}

.dropdownl img.flag {
  border: none;
  vertical-align: middle;
}
.flagvisibility {
  display: none;
}
.money {
  margin-left: 20px;
  margin-top: 15px;
  float: right;
}
.custom-select {
  position: relative;
  margin-top: 20px;
}
.custom-select select {
  display: none;
}
.select-selected {
  width: 100%;
  background: url(https://thehappystay.vn/templates/themes/images/down.png)
    no-repeat right 0;
  box-sizing: border-box;
  padding: 0 10px;
  color: #1a1a1a;
  font-size: 18px;
  border: none;
  border-radius: 5px;
  outline: none;
}
.select-items {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  z-index: 1000;
  background: #dddddd;
}
.select-hide {
  display: none;
}
.select-items div {
  padding: 10px;
}
.select-items div:hover {
  background-color: rgba(0, 0, 0, 0.1);
}
.custom-select-header {
  margin-top: 0 !important;
}
.custom-select-header .select-selected {
  width: 100%;
  background: #fff
    url(https://thehappystay.vn/templates/themes/images/ico_down1.png) no-repeat
    right center !important;
  box-sizing: border-box;
  padding: 0 12px 0 0;
  color: #1a1a1a;
  font-size: 18px;
  outline: none;
}
.custom-select-header .select-items {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: #fff;
  border: 1px solid #e3e3e3;
}
#BB-nav.affix {
  position: fixed;
  top: 0px;
  -webkit-transition: top 1s ease-in;
  transition: top 1s ease-out;
}
#BB-nav {
  width: 100%;
  background-color: #2a3342;
  z-index: 999;
}
#BB-nav .logo {
  float: left;
  margin-top: 12px;
  display: none;
  width: 170px;
}
#BB-nav .menu-main {
  float: right;
}
.navbar-default {
  background: #fff;
  border: none;
  border-radius: 0;
  margin: 0;
  min-height: 45px;
}
.menu {
  margin: 0 0 0 0 !important;
  padding: 0 !important;
}
.BB-nav li {
  padding: 0 15px 0 0;
}
.BB-nav li a {
  color: #fff !important;
  font-family: "Oswald", sans-serif !important;
  font-weight: 300;
  font-size: 18px;
  padding: 0 !important;
  text-align: left;
  display: block;
  height: 45px;
  line-height: 47px;
}
.promo__label-wrap {
  left: 1rem;
  top: 1rem;
}

.promo__label-wrap {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  left: 5px;
  top: 5px;
}

.is-absolute {
  position: absolute !important;
}
.promo__label {
  font-size: 10px;
  background: #f65e39;
  color: #fff;
  border-radius: 1.5rem;
  letter-spacing: 0.5px;
  line-height: 1.375rem;
  padding: 3px 5px;
}
img {
  border-radius: 0.575rem;
}
.datcoc__label {
  background: #f65e39;
  color: #fff;
  padding: 3px 5px;
  font-size: 10px;
}
.BB-nav li a img {
  vertical-align: middle;
}
.BB-nav li.active a,
.BB-nav li a:hover {
  color: #f4511e !important;
}
.BB-nav li a span {
  display: block;
  padding-bottom: 8px;
}
.BB-nav li:hover .dropdown-menu {
  display: block !important;
}
.dropdown-menu {
  background-color: #2a3342;
  margin-top: 0 !important;
  border: none;
}
.dropdown-menu li {
  padding: 0;
}
.dropdown-menu li a {
  padding: 0 5px !important;
  font-size: 14px;
  height: 25px;
  line-height: 25px;
}
.banner {
  background-size: cover !important;
}
.mh_bnr {
  text-align: center;
  font-size: 46px;
  color: #fff;
  padding: 40px 0;
  font-weight: 400;
}
.bnr_s {
  background-color: rgba(0, 0, 0, 0.24);
  padding-bottom: 20px;
}
.in_dd {
  width: 100%;
  background: #fff
    url(https://thehappystay.vn/templates/themes/images/ico_l.png) no-repeat 9px
    center;
  height: 42px;
  line-height: 42px;
  box-sizing: border-box;
  padding: 0 10px 0 30px;
  font-family: "Oswald", sans-serif;
  color: #9b9b9b;
  font-size: 16px;
  font-weight: 300;
  border: 1px solid #cccccc;
  outline: none;
  margin-top: 20px;
  border-radius: 5px !important;
}
.se_date {
  width: 100% !important;
  height: 45px;
  line-height: 45px;
  box-sizing: border-box;
  padding: 0;
  font-family: "Oswald", sans-serif;
  color: #9b9b9b;
  font-size: 16px;
  font-weight: 300;
  border: none;
  border-radius: 0;
  outline: none;
  margin-top: 20px;
  background: #ddd url(https://thehappystay.vn/templates/themes/images/down.png)
    no-repeat right top !important;
  border-radius: 5px !important;
}
.se_date input {
  width: 100%;
  background: none;
  height: 42px;
  line-height: 42px;
  box-sizing: border-box;
  padding: 0 10px;
  font-family: "Oswald", sans-serif;
  color: #9b9b9b;
  font-size: 16px;
  font-weight: 300;
  border: none;
  border-radius: 5px;
  outline: none !important;
  margin-top: 0;
  box-shadow: none !important;
  border-radius: 5px !important;
}
.se_dateOut {
  margin-top: 20px;
}
.input-group {
  width: 100%;
}
.input-group-addon {
  background-color: none !important;
  background: url(https://thehappystay.vn/templates/themes/images/down.png)
    no-repeat right top !important;
  text-indent: -9999px;
  border: none !important;
  width: 39px !important;
}
.glyphicon-chevron-right {
  content: "\f000" !important;
}
.se_date_bnr {
  width: 100%;
  background: #fff
    url(https://thehappystay.vn/templates/themes/images/ico_date.png) no-repeat
    90% center !important;
  height: 42px;
  line-height: 42px;
  box-sizing: border-box;
  padding: 0;
  font-family: "Oswald", sans-serif;
  color: #9b9b9b;
  font-size: 16px;
  font-weight: 300;
  border: 1px solid #ccc;
  border-radius: 0;
  outline: none;
  margin-top: 20px;
}
.datepicker.dropdown-menu {
  background: #fff !important;
}
.custom-select-bnr {
  margin-top: 20px;
}
.custom-select-bnr .select-selected {
  width: 100%;
  background: #fff
    url(https://thehappystay.vn/templates/themes/images/ico_down_bnr.png)
    no-repeat right center;
  height: 42px;
  line-height: 42px;
  box-sizing: border-box;
  padding: 0 32px 0 10px;
  font-family: "Oswald", sans-serif;
  color: #9b9b9b;
  font-size: 16px;
  font-weight: 300;
  border: 1px solid #ccc;
  border-radius: 0;
  outline: none;
}
.custom-select-bnr .select-items {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  z-index: 99;
  background: #fff;
  border: 1px solid #ccc;
}
input.in_sub_bnr {
  background: #f4511e;
  height: 42px;
  line-height: 42px;
  box-sizing: border-box;
  padding: 0;
  font-family: "Oswald", sans-serif;
  color: #fff;
  font-size: 16px;
  font-weight: 300;
  border: none;
  border-radius: 0;
  outline: none;
  margin-top: 20px;
  text-align: center;
  display: block;
  width: 100%;
  border-radius: 5px !important;
}
.top_cnt {
  padding: 20px 0 45px;
}
.top_cnt_l {
  margin-top: 20px;
}
.top_cnt_r {
  margin-top: 20px;
}
.gmd {
}
.gmd h3 {
  font-size: 20px;
  font-weight: 700;
}
.gmd_bar {
  height: 5px;
  background: #f4511e;
  width: 100%;
  position: relative;
  margin-top: 14px;
  margin-bottom: 70px;
}
.gmd_bar_l {
  position: absolute;
  left: -7px;
  top: -9px;
  text-align: center;
}
.gmd_bar_l span {
  display: block;
  font-size: 16px;
  font-weight: 300;
  padding-top: 5px;
}
.gmd_bar_r {
  position: absolute;
  right: -7px;
  top: -9px;
  text-align: center;
}
.gmd_bar_r span {
  display: block;
  font-size: 16px;
  font-weight: 300;
  padding-top: 5px;
}
[type="checkbox"]:checked,
[type="checkbox"]:not(:checked) {
  position: absolute;
  left: -9999px;
}
[type="checkbox"]:checked + label,
[type="checkbox"]:not(:checked) + label {
  position: relative;
  cursor: pointer;
  display: inline-block;
  font-family: "Oswald", sans-serif;
  font-size: 16px;
  font-weight: 300;
  padding: 0 0 0 25px;
  line-height: 17px;
  margin: 0;
}
[type="checkbox"]:checked + label:before,
[type="checkbox"]:not(:checked) + label:before {
  position: absolute;
  left: 0;
  top: 0;
  width: 17px;
  height: 17px;
  background: url(https://thehappystay.vn/templates/themes/images/ico_checkbox.png)
    no-repeat 0 0;
  display: block;
  content: "";
}
[type="checkbox"]:checked + label:after,
[type="checkbox"]:not(:checked) + label:after {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 17px;
  height: 17px;
  border-radius: 100%;
  -webkit-transition: all 0.2s ease;
  transition: all 0.2s ease;
  background: url(https://thehappystay.vn/templates/themes/images/ico_checkbox2.png)
    no-repeat 0 0;
}
[type="checkbox"]:not(:checked) + label:after {
  opacity: 0;
  -webkit-transform: scale(0);
  transform: scale(0);
}
[type="checkbox"]:checked + label:after {
  opacity: 1;
  -webkit-transform: scale(1);
  transform: scale(1);
}
.spn {
  margin-top: 25px;
}
.spn h3 {
  font-size: 20px;
  font-weight: 700;
}
.custom-select-spn {
  margin-top: 10px;
}
.custom-select-spn .select-selected {
  width: 100%;
  background: #fff
    url(https://thehappystay.vn/templates/themes/images/ico_down_spn.png)
    no-repeat right center;
  height: 34px;
  line-height: 30px;
  box-sizing: border-box;
  padding: 0 30px 0 10px;
  font-family: "Oswald", sans-serif;
  color: #3a3a3a;
  font-size: 16px;
  font-weight: 300;
  border: 1px solid #edebeb;
  border-radius: 0;
  outline: none;
}
.custom-select-spn .select-items {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  z-index: 99;
  background: #fff;
  border: 1px solid #ccc;
}
.top_cnt_l_block {
  border-top: 1px solid #cdcdcd;
  margin-top: 7px;
  padding-top: 15px;
  padding-bottom: 25px;
}
.top_cnt_l_block h3 {
  font-size: 20px;
  font-weight: 700;
}
.top_cnt_l_block ul li {
  margin-top: 20px;
}
.path {
  margin: 15px 0 0 0;
}
.path li {
  float: left;
  background: url(https://thehappystay.vn/templates/themes/images/path_arrow.png)
    no-repeat right center;
  color: #3a3a3a;
  font-size: 16px;
  padding: 0 10px 0 0;
  margin-right: 3px;
  font-weight: 300;
}
.path li a {
  color: #3a3a3a;
  text-decoration: none;
}
.path li a:hover {
  color: #f4511e;
}
.path li:last-child {
  background: none;
  padding: 0;
  margin: 0;
}
.col_left {
  float: left;
}
.col_right {
  float: right;
}
.top_filter {
  border-bottom: 1px solid #c4c4c4;
  padding-bottom: 15px;
}
.top_filter_l {
  float: left;
  width: 40%;
  color: #9a9a9a;
  font-weight: 300;
  font-size: 16px;
  margin-top: 15px;
}
.top_filter_r {
  float: right;
  width: 50%;
  margin-top: 15px;
}
.top_filter_r p {
  float: right;
  font-weight: 300;
  font-size: 16px;
  line-height: 28px;
  padding-right: 15px;
}
.custom-select-xt {
  margin-top: 0;
  width: 160px;
  float: right;
}
.custom-select-xt .select-selected {
  width: 100%;
  background: #fff
    url(https://thehappystay.vn/templates/themes/images/ico_down_xt.png)
    no-repeat right center;
  height: 28px;
  line-height: 24px;
  box-sizing: border-box;
  padding: 0 32px 0 10px;
  font-family: "Oswald", sans-serif;
  color: #9b9b9b;
  font-size: 12px;
  font-weight: 300;
  border: 1px solid #ccc;
  border-radius: 0;
  outline: none;
}
.custom-select-xt .select-items {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  z-index: 99;
  background: #fff;
  border: 1px solid #ccc;
  width: 160px;
}
.top_lst {
}
.top_lst li {
  float: left;
  width: 32%;
  margin-top: 25px;
  margin-right: 5px;
}
.top_lst li .roomImg > a {
  display: block;
  overflow: hidden;
  padding-bottom: 80%;
  position: relative;
  width: 100%;
}
.top_lst li .roomImg > a img {
  -o-object-fit: cover;
  object-fit: cover;
  -o-object-position: center;
  object-position: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
}
.roomImg {
}
.roomImg img {
  width: 100%;
}
.roomInfo {
  border: 1px solid #eff2f7;
  border-top: none;
  padding: 15px;
}
.r_price {
  color: #f4511e;
  font-size: 24px;
  font-weight: 700;
}
.roomInfo h3 {
  padding-top: 0px;
  font-size: 20px;
  font-weight: 700;
}
.roomInfo h3 a {
  text-decoration: none;
  color: #3a3a3a;
}
.roomInfo h3 a:hover {
  color: #f4511e;
}
.r_txt {
  font-size: 16px;
  font-weight: 300;
  padding-top: 15px;
}
.r_ti {
}
.r_ti_l {
  float: left;
  width: 40%;
  font-size: 16px;
  font-weight: 300;
  margin-top: 15px;
}
.r_ti_r {
  float: right;
  width: 60%;
  font-size: 16px;
  font-weight: 300;
  margin-top: 15px;
  text-align: right;
}
.r_ti_r span {
  display: inline-block;
}
span.bed {
  background: url(https://thehappystay.vn/templates/themes/images/ico_bed.png)
    no-repeat 0 center;
  padding: 0 0 0 30px;
  margin-left: 7px;
}
span.bath {
  background: url(https://thehappystay.vn/templates/themes/images/ico_bath.png)
    no-repeat 0 center;
  padding: 0 0 0 30px;
  margin-left: 7px;
}
span.car {
  background: url(https://thehappystay.vn/templates/themes/images/ico_car.png)
    no-repeat 0 center;
  padding: 0 0 0 30px;
  margin-left: 7px;
}
.pageLst {
  text-align: center;
  margin: 40px 0 20px 0;
}
.pageLst li {
  display: inline-block;
  margin: 0 3px;
}
.pageLst li a {
  border: 1px solid #eeeeee;
  height: 35px;
  width: 35px;
  display: inline-block;
  line-height: 35px;
  text-align: center;
  border-radius: 5px;
  font-weight: 700;
  color: #6d6d6d;
  text-decoration: none;
}
.pageLst li a.active,
.pageLst li a:hover {
  background: #eee;
}
.footer {
  background: #141e30;
  padding: 30px 0;
  color: #fff;
}
.f_col {
  margin-top: 30px;
  width: 100%;
  max-width: 320px;
}
.f_txt {
  font-size: 16px;
  font-weight: 300;
}
.f_txt a {
  color: #fff;
}
.f_social {
  margin-top: 20px;
}
.f_social li {
  display: inline-block;
  padding-right: 8px;
}
.sh_f {
  font-size: 16px;
  font-weight: 300;
  text-transform: uppercase;
  margin-bottom: 25px;
}
.f_lst2 {
  font-size: 16px;
  font-weight: 300;
}
.f_lst2 li a {
  color: #fff;
  font-size: 16px;
  font-weight: 300;
  text-decoration: none;
}
.f_lst2 li a:hover {
  color: #f4511e;
}
.f_lst1 {
  margin-top: 25px;
}
.f_lst1 li {
  margin-bottom: 25px;
}
.f_lst1_img {
  float: left;
  width: 93px;
}
.f_lst1_txt {
  float: right;
  width: calc(100% - 105px);
  color: #545454;
  font-size: 12px;
}
.f_lst1_txt h4 {
  margin-bottom: 10px;
}
.f_lst1_txt h4 a {
  font-size: 16px;
  font-weight: 300;
  text-decoration: none;
  color: #fff;
}
.f_lst1_txt h4 a:hover {
  color: #f4511e;
}
.copyRight {
  text-align: center;
  font-size: 16px;
  color: #676767;
  font-weight: 300;
  padding-top: 25px;
}
.gt_bnt {
  text-align: center;
  padding-top: 70px;
}
.gt_bnt a {
  display: inline-block;
  border: 1px solid #fff;
  color: #fff;
  text-decoration: none;
  font-size: 20px;
  font-weight: 200;
  height: 54px;
  line-height: 50px;
  width: 186px;
}
.gt_bnt a:hover {
  border: 1px solid #f4511e;
  color: #f4511e;
}
.gt_txt {
  text-align: center;
  margin: 30px auto 0;
  font-size: 25px;
  font-weight: 200;
  color: #fff;
  width: 100%;
  max-width: 800px;
  padding: 0 15px;
}
.bnr_s_top {
  background: none;
  padding-top: 20px;
  padding-bottom: 60px;
}
.mh_tll {
  font-size: 35px;
  font-weight: 300;
  text-align: center;
  color: #0f0f0f;
  text-transform: uppercase;
}
.hs_hot {
  padding: 60px 0 0 0;
}
.hs_hot_slide {
  margin-top: 60px;
  position: relative;
}
.hs_Item {
  padding: 0 10px;
}
.hs_img {
}
.hs_img img {
  /*width: 100%;*/
}
.hs_txt {
  font-size: 16px;
  font-weight: 300;
  padding-top: 5px;
}
.hs_ttl {
  padding-top: 5px;
}
.hs_ttl_l {
  float: left;
  width: calc(100% - 100px);
}
.hs_ttl_l a {
  font-size: 16px;
  font-weight: 700;
  color: #3a3a3a;
  text-decoration: none;
}
.hs_ttl_l a:hover {
  color: #f4511e;
}
.hs_ttl_r {
  float: right;
  width: 80px;
}
.hs_ttl_r span {
  display: block;
  font-size: 16px;
  font-weight: 300;
  color: #f4511e;
  text-decoration: line-through;
}
.hs_ttl_r strong {
  display: block;
  font-size: 18px;
  font-weight: 700;
  color: #f4511e;
}
.prev_v {
  position: absolute;
  left: 10px;
  top: 25%;
}
.next_v {
  position: absolute;
  right: 10px;
  top: 25%;
}
.prev_v1 {
  position: absolute;
  left: 10px;
  top: 25%;
}
.next_v1 {
  position: absolute;
  right: 10px;
  top: 25%;
}
.hs_hot_slide .owl-controls .owl-pagination {
  display: block;
  text-align: center;
  margin-top: 35px;
}
.hs_hot_slide .owl-controls .owl-pagination .owl-page {
  display: inline-block;
}
.hs_hot_slide .owl-controls .owl-pagination .owl-page span {
  background: url(https://thehappystay.vn/templates/themes/images/hs_dot.png)
    no-repeat 0 0;
  width: 15px;
  margin: 0 5px;
  height: 15px;
  display: inline-block;
}
.hs_hot_slide .owl-controls .owl-pagination .owl-page.active span {
  background: url(https://thehappystay.vn/templates/themes/images/hs_dot_o.png)
    no-repeat 0 0;
}
.bolck_news {
  padding: 70px 0;
}
.bolck_news .mh_tll {
  padding-bottom: 20px;
}
.newsItem1 {
  margin-top: 30px;
}
.bolck_news2 {
  padding-top: 30px;
  padding-bottom: 15px;
}
.bolck_news2 .mh_tll {
  margin-top: 20px;
}
.newsItem2 {
  padding-top: 10px;
}
.newsItem2 li {
  border-bottom: 1px solid #e5e5e5;
  padding: 15px 0 15px 0;
}
.newsItem2 li:last-child {
  border: none;
  padding-bottom: 0;
}
.newsItem2_img {
  display: none;
}
.newsItem2_img img {
  width: 100%;
}
.newsItem2 li:first-child .newsItem2_img {
  display: block;
}
.newsItem2 li h3 {
  background: url(https://thehappystay.vn/templates/themes/images/news_dot.png)
    no-repeat 2px center;
  padding: 0 0 0 18px;
}
.newsItem2 li:first-child h3 {
  padding: 10px 0 0 0;
  background: none;
}
.newsItem2 li h3 a {
  font-size: 16px;
  font-weight: 300;
  color: #3a3a3a;
  text-decoration: none;
}
.newsItem2 li h3 a:hover {
  color: #f4511e;
}
.newsItem2 li:first-child h3 a {
  font-size: 18px;
  font-weight: 700;
  color: #3a3a3a;
  text-decoration: none;
}
.newsItem2 li:first-child h3 a:hover {
  color: #f4511e;
}
.newsItem2_txt {
  font-size: 16px;
  font-weight: 300;
  padding-top: 10px;
  display: none;
}
.newsItem2 li:first-child .newsItem2_txt {
  display: block;
}
.newsItem1_img {
}
.newsItem1_img img {
  width: 100%;
}
.newsItem1 h3 {
  padding-top: 10px;
}
.newsItem1 h3 a {
  font-size: 18px;
  font-weight: 700;
  color: #3a3a3a;
  text-decoration: none;
}
.newsItem1 h3 a:hover {
  color: #f4511e;
}
.newsItem1_txt {
  font-size: 16px;
  font-weight: 300;
  padding-top: 10px;
}
.xt_bnt {
  text-align: center;
  padding-top: 50px;
  clear: both;
}
.xt_bnt a {
  display: inline-block;
  border: 1px solid #c0c0c0;
  color: #c0c0c0;
  text-decoration: none;
  font-size: 20px;
  font-weight: 200;
  height: 54px;
  line-height: 50px;
  width: 186px;
}
.xt_bnt a:hover {
  border: 1px solid #f4511e;
  color: #f4511e;
}
.share {
  background: #2193b0;
  padding: 60px 0;
  text-align: center;
  color: #fff;
}
.share h2 {
  font-size: 53px;
  font-weight: 400;
  padding: 10px 0;
}
.share p {
  font-size: 25px;
  font-weight: 200;
}
.share .gt_bnt {
  padding-top: 40px;
}
.h_deatil {
  background: #1a1a1a;
}
.h_deatil .h_phone,
.h_deatil .h_dk,
.h_deatil .h_dk a {
  color: #fff;
}
.h_deatil .h_dk a:hover {
  color: #f4511e;
}
.h_deatil .custom-select-header .select-selected {
  color: #fff;
  background: #1a1a1a
    url(https://thehappystay.vn/templates/themes/images/ico_down2.png) no-repeat
    right center !important;
}
.h_deatil .dropdownl dt a {
  background: url(https://thehappystay.vn/templates/themes/images/ico_down2.png)
    no-repeat right 3px;
}
.d_box {
  padding-top: 30px;
}
.d_date {
  color: #838383;
  font-size: 14px;
  font-weight: 300;
}
.d_date span {
  color: #f4511e;
}
.d_box h2 {
  font-size: 26px;
  color: #222;
  font-weight: 700;
  padding-top: 20px;
}
.d_box h3 {
  font-size: 24px;
  color: #222;
  font-weight: 700;
  padding-top: 20px;
}
.d_intro {
  font-size: 16px;
  font-weight: 400;
  padding-top: 20px;
}
.d_img {
  margin-top: 20px;
  text-align: center;
}
.d_img img {
  max-width: 100%;
}
.d_txt {
  font-size: 16px;
  font-weight: 300;
  padding-top: 20px;
}
.news_cat {
  margin-top: 50px;
  border-top: dashed 1px #ccc;
  padding-top: 30px;
  padding-bottom: 50px;
}
.news_cat h3 {
  font-size: 22px;
  color: #222;
  font-weight: 700;
  text-transform: uppercase;
}
.news_cat_slide {
  position: relative;
  margin-top: 15px;
}
.news_cat_slide .hs_ttl_l {
  float: none;
  width: 100%;
}
.news_cat_slide .hs_txt {
  font-size: 14px;
}
.prev_d {
  position: absolute;
  left: -15px;
  top: 22%;
}
.next_d {
  position: absolute;
  right: -15px;
  top: 22%;
}
.d_col_r {
  margin-top: 30px;
}
.d_col_r .sh_ttl {
  border-bottom: 3px solid #d5d5d5;
}
.d_col_r .sh_ttl span {
  color: #f4511e;
  background: #fff;
  display: inline-block;
  font-size: 22px;
  font-weight: 700;
  padding: 0 15px 3px 0;
  margin-bottom: -5px;
}
.place {
}
.place li {
  margin-top: 30px;
}
.place li a {
  position: relative;
}
.place li a img {
  width: 100%;
}
.place li a span {
  position: absolute;
  left: 10px;
  bottom: 10px;
  font-size: 24px;
  font-weight: 700;
  color: #fff;
}
.place li a:hover span {
  color: #f4511e;
}
.d_slide .hs_ttl_r {
  text-align: right;
}
.d_slide {
  position: relative;
  margin: 30px 0 40px 0;
}
.prev_f {
  position: absolute;
  left: 0;
  top: 27%;
}
.d_slide .hs_Item {
  padding: 0;
}
.next_f {
  position: absolute;
  right: 0;
  top: 27%;
}
.d_r_lst1 {
  padding: 10px 0 30px 0;
}
.d_r_lst1 li {
  border-bottom: 1px solid #ccc;
  padding: 15px 0;
  color: #838383;
  font-size: 14px;
  font-weight: 300;
}
.d_r_lst1 li:last-child {
  border: none;
  padding-bottom: 0;
}
.d_r_lst1_img {
  float: left;
  width: 120px;
}
.d_r_lst1_img img {
  width: 100%;
}
.d_r_lst1_info {
  float: right;
  width: calc(100% - 130px);
  color: #838383;
  font-size: 14px;
  font-weight: 300;
}
.d_r_lst1_info h3 {
  margin-bottom: 5px;
}
.d_r_lst1_info a {
  color: #333333;
  font-size: 14px;
  font-weight: 700;
  text-decoration: none;
  line-height: 20px;
}
.d_r_lst1_info a:hover {
  color: #f4511e;
}
.d_r_lst2 {
  padding: 10px 0 40px 0;
}
.d_r_lst2 li {
  border-bottom: 1px solid #ccc;
  padding: 15px 0;
  color: #838383;
  font-size: 14px;
  font-weight: 300;
}
.d_r_lst2 li:last-child {
  border: none;
  padding-bottom: 0;
}
.d_r_lst2 li h3 {
  margin-bottom: 5px;
}
.d_r_lst2 li h3 a {
  color: #333333;
  font-size: 14px;
  font-weight: 700;
  text-decoration: none;
  line-height: 20px;
}
.d_r_lst2 li h3 a:hover {
  color: #f4511e;
}
.map {
  height: 355px;
}
.d_home_item {
  padding: 0 1px;
}
.d_home_item img {
  width: 100%;
}
.chtt {
  padding-top: 70px;
}
.mh_tll2 {
  border-bottom: 1px solid #dce0e0;
  color: #3a3a3a;
  font-size: 20px;
  font-weight: 700;
  padding-bottom: 10px;
}
.chtt .hs_hot_slide {
  margin-top: 30px;
}
.kpt {
  padding: 30px 0 70px;
}
.d_home_cnt {
  padding: 30px 0;
}
.d_home_cnt_l {
  float: left;
  width: calc(100% - 274px);
  margin-top: 30px;
}
.d_home_cnt_r {
  float: right;
  width: 274px;
  margin-top: 30px;
}
.d_home_book {
  border: 1px solid #ebebeb;
}
.d_price {
  border-bottom: 1px solid #ebebeb;
  padding: 8px 13px;
}
.d_price_l {
  float: left;
  width: 50%;
  color: #f4511e;
  font-size: 20px;
  font-weight: 700;
}
.d_price_r {
  float: right;
  width: 50%;
  color: #3a3a3a;
  font-size: 20px;
  font-weight: 700;
  text-align: right;
}
.d_home_form {
  padding: 15px;
}
.dh_date {
}
.dh_date li {
  float: left;
  width: 48%;
}
.dh_date li:last-child {
  float: right;
}
.dh_date li label {
  color: #000;
  font-size: 16px;
  font-weight: 300;
}
.se_date_dh {
  margin-top: 0;
  background: #fff !important;
  border: 1px solid #ebebeb;
  line-height: 30px !important;
  height: 34px;
}
.se_date_dh input {
  height: 34px;
  line-height: 30px !important;
}
.dh_per {
  padding-top: 15px;
}
.dh_per li label {
  color: #000;
  font-size: 16px;
  font-weight: 300;
}
.dh_per li .in_dd {
  width: 100%;
  background: #fff;
  height: 34px;
  line-height: 34px;
  box-sizing: border-box;
  padding: 0 10px 0 10px;
  font-family: "Oswald", sans-serif;
  color: #9b9b9b;
  font-size: 16px;
  font-weight: 300;
  border: 1px solid #ebebeb;
  outline: none;
  margin-top: 0;
}
.dh_money {
  margin-top: 15px;
}
.dh_money li {
  color: #000;
  font-size: 14px;
  font-weight: 300;
}
.dh_money li:last-child {
  font-size: 16px;
  font-weight: 700;
  margin-top: 15px;
}
.dh_money li .dh_money_l {
  float: left;
}
.dh_money li .dh_money_r {
  float: right;
}
.dh_ht {
  color: #000;
  font-size: 14px;
  font-weight: 400;
  padding-top: 7px;
}
.d_t_info_l {
  float: left;
  width: calc(100% - 170px);
}
.d_t_info_r {
  float: right;
  width: 150px;
}
.avatar {
  margin: 0 auto;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  overflow: hidden;
}
.avatar img {
  height: 100px;
}
.ava_name {
  text-align: center;
  font-size: 18px;
  font-weight: 300;
  padding-top: 10px;
}
.d_t_info_l h2 {
  color: #131313;
  font-size: 30px;
  font-weight: 400;
}
.d_location {
  background: url(https://thehappystay.vn/templates/themes/images/ico_location.png)
    no-repeat 0 3px;
  color: #acacac;
  font-size: 16px;
  font-weight: 300;
  padding: 0 0 0 30px;
  margin-top: 30px;
}
.d_t_info_l ul {
}
.d_t_info_l ul li {
  text-align: center;
  color: #000;
  font-size: 14px;
  font-weight: 300;
  display: inline-block;
  padding: 0 20px;
  margin-top: 20px;
}
.d_t_info_l ul li span {
  display: block;
  padding-top: 3px;
}
.d_home_cnt_l .mh_tll2 {
  margin-top: 40px;
}
.note {
  color: #000;
  font-size: 16px;
  font-weight: 300;
  padding-top: 15px;
}
.ct_img_lst {
}
.ct_img_lst li {
  color: #000;
  font-size: 16px;
  font-weight: 400;
  margin-top: 20px;
  float: left;
  width: 32%;
  margin-right: 2%;
}
.ct_img_lst li:nth-child(3n) {
  float: right;
  margin-right: 0;
}
.ct_img_lst li a {
  display: block;
  margin-bottom: 5px;
}
.ct_img_lst li a img {
  width: 100%;
}
.about_ch {
  font-size: 16px;
  font-weight: 300;
  padding-top: 15px;
}
.about_ch span {
  font-weight: 400;
}
.d_table {
}
.d_table table {
  width: 100%;
}
.d_table table tr td {
  border-bottom: 1px solid #dbdbdb;
  color: #7d7d7d;
  font-size: 16px;
  font-weight: 300;
  padding: 10px 0;
  vertical-align: top;
}
.d_table table tr:last-child td {
  border-bottom: none;
}
.d_table table tr td.col1 {
  width: 30%;
}
.d_table table tr td ul {
}
.d_table table tr td ul li {
  float: left;
  width: 50%;
  line-height: 20px;
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 10px;
}
.d_table table tr td li img {
  float: left;
  margin-right: 5px;
}
.d_table2 {
}
.d_table2 table tr td {
  color: #555;
  font-size: 16px;
  padding: 10px;
  vertical-align: top;
}
.d_table2 table tr td:first-child {
  width: 30%;
}
.d_table2 table tr td strong {
  font-size: 16px;
  font-weight: 400;
  color: #000;
}
.d_table2 table tr td span {
  font-size: 16px;
  font-weight: 400;
  color: #f45625;
  display: block;
}
@media (max-width: 1200px) {
  .BB-nav li a {
    font-size: 14px;
  }
  .prev_v {
    top: 20%;
  }
  .next_v {
    top: 20%;
  }
}
@media (max-width: 992px) {
  .h_left {
    width: 30%;
  }
  .h_right {
    width: 70%;
  }
  .h_dk {
    margin-left: 30px;
  }
  .BB-nav li {
    padding-right: 6px;
  }
  .BB-nav li a {
    font-size: 12px;
  }
  .r_ti_l {
    float: none;
    width: 100%;
  }
  .r_ti_r {
    float: none;
    width: 100%;
  }
}

/* Calendar Slide */
.calendar_wrap .customNavigation {
  position: relative;
  z-index: 2;
}
.calendar_wrap .customNavigation a {
  cursor: pointer;
}
.calendar_wrap .item {
  padding: 0 5px;
}
.calendar_wrap .mh_tll2 {
  margin-bottom: 20px;
}
.calendar_wrap ul.dw {
  margin-top: 10px;
  height: 30px;
}
.dw li {
  float: left;
  width: 14%;
  text-align: center;
}
.dm {
  clear: both;
}
.dm li {
  float: left;
  width: 14%;
  padding: 10px 5px;
  text-align: center;
}
.dm li.enable {
  border: 2px solid #fff;
  background: rgba(38, 166, 91, 0.1451) !important;
  color: #26a65b !important;
}
.dm li.disable_khoa {
  background: rgba(246, 94, 57, 0.1);
  color: #ccc !important;
  opacity: 1;
  border: 2px solid #fff;
}

.dm li.disable {
  background: #f6f6f6 !important;
  color: #ccc !important;
  opacity: 1;
  border: 2px solid #fff;
}
.dm li.enable_ {
  border: 2px solid #fff;
  background: #22a65b !important;
  color: #fff !important;
}
.dm li.disable_ {
  background: #f6f6f6 !important;
  color: #ccc !important;
  opacity: 1;
  border: 2px solid #fff;
}
.bt_prev {
  float: left;
}
.bt_next {
  float: right;
}
.dm .enable {
  cursor: pointer;
}

/* STYLE NEW */
.content_detail img {
  height: 100%;
}
.flex {
  display: inherit;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  position: relative;
}
.booking_pin {
  position: fixed;
  border-top: 1px solid #dfdfdf;
  display: none;
  bottom: 0;
  width: 100%;
  padding: 10px 15px;
  background: #fff;
  align-items: center;
  z-index: 9;
}
.booking_pin .flex {
  align-items: center;
}
.booking_pin .price {
  font-size: 16px;
  float: left;
  margin-top: 8px;
}
.booking_pin .price2 .detail {
  font-size: 13px;
  color: #f65e39;
}
.booking_pin .price2 {
  margin-top: 0 !important;
}
.booking_pin .price2 strong {
  font-size: 16px !important;
  font-weight: 500;
}
.booking_pin .price strong {
  font-size: 22px;
}
.booking_pin .btn {
  background-image: linear-gradient(90deg, #f65e38 0, #f68a39 51%, #f65e38);
  float: RIGHT;
  background-size: 200% auto;
  box-shadow: 0 4px 12px 0 rgba(246, 116, 57, 0.4);
  text-align: center;
  color: #fff;
  padding: 10px 20px;
  font-size: 16px;
  outline: 0;
}
.booking_pin .btn svg {
  float: left;
  margin: 2px 10px 0 0;
}

.bg_agray {
  background: #f4f4f4;
}
.radius-xs {
  border-radius: 0.1875rem;
}
.bg-cover,
.thumb-img {
  background-size: cover;
  background-repeat: no-repeat;
  display: block;
}
.thumb-img {
  width: 100%;
  background-position: 50%;
  background-color: #eee;
}
.thumb_5x3 {
  padding-top: 62.5%;
}
.svg-icon {
  display: inline-block;
  width: 1em;
  height: auto;
  color: inherit;
  vertical-align: middle;
  fill: none;
  stroke: currentColor;
}
.svg-fill {
  fill: currentColor;
  stroke: none;
}
.icon--24 {
  width: 24px;
  height: 24px;
}
.checkup--sticky {
  position: -webkit-sticky;
  position: sticky;
  top: 20px;
}
.step-booking {
  padding: 40px 0;
}
.step-booking .col_70 {
  width: 680px;
  width: calc(100% - 480px);
}
.step-booking .col_30 {
  width: 400px;
  margin-left: 80px;
}
.step-booking .mh_tll2 {
  border-bottom: 0;
  margin-bottom: 20px;
  font-size: 25px;
}

.step-booking .form .flex {
  margin: 0 -10px;
}
.step-booking .form .flex .form-group {
  width: 50%;
  padding: 0 10px;
}
.step-booking .form .form-group {
  font-size: 16px;
  margin-bottom: 30px;
}
.step-booking .form .form-group.width_50 {
  width: 50%;
  padding-right: 20px;
}
.step-booking .form .form-group label {
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 10px;
}
.step-booking .form .form-group .form-control {
  height: 48px;
  font-size: 16px;
  font-weight: 300;
  border: 0;
  box-shadow: 1px 1px 1px 0 rgba(0, 0, 0, 0.05);
}
.step-booking .form .form-group textarea.form-control {
  height: 200px;
  font-weight: 300;
}
.step-booking .form .form-group p {
  font-size: 14px;
  color: #555;
  margin-bottom: 15px;
}
.step-booking .form .form-group .text-danger {
  color: #f65e39;
  font-size: 14px;
}
.step-booking .form .form-group .error {
  color: #f65e39;
  font-size: 14px;
}
.step-booking .form .form-group.nhan_tra_p {
}
.step-booking .form .form-group.nhan_tra_p .flex {
  margin: 0 -10px;
}
.step-booking .form .form-group.nhan_tra_p .item {
  width: 50%;
  padding: 0 10px;
}
.step-booking .form .form-group.nhan_tra_p .item .warp {
  box-shadow: 1px 1px 1px 0 rgba(0, 0, 0, 0.05);
  border-radius: 5px !important;
  background: #fff;
  padding: 30px 12px 12px 12px;
  position: relative;
}
.step-booking .form .form-group.nhan_tra_p .item .warp::before {
  content: "";
  height: 4px;
  width: 100px;
  background-color: #28ca6e;
  position: absolute;
  top: 15px;
}
.step-booking .form .form-group.nhan_tra_p .item.tra .warp::before {
  background-color: #fbdb91;
}
.step-booking .form .form-group.nhan_tra_p .item .title {
  color: #555;
  font-size: 16px;
  margin-bottom: 10px;
}
.step-booking .form .form-group.nhan_tra_p .item p {
  font-size: 20px;
  color: #222;
  margin-bottom: 10px;
}
.step-booking .form .form-group.nhan_tra_p .item span {
  font-size: 14px;
  color: #555;
}
.step-booking .form .btn {
  background: #f65e39;
  color: #fff;
  border: 0;
  padding: 10px 22px;
  font-size: 16px;
}
.step-booking .form .btn[disabled="disabled"] {
  background: #d8d8d8;
  color: #fff;
}

.page-checkout .checkup {
  background: #fff;
  box-shadow: 1px 1px 1px 0 rgba(0, 0, 0, 0.05);
  border: none;
  border-radius: 5px;
  padding: 30px;
}
.page-checkout .checkup p {
  margin-bottom: 10px;
  line-height: 1.5;
  color: #555;
}
.page-checkout .checkup strong,
.page-checkout .checkup b {
  font-weight: 500;
}
.checkup__header {
  border-bottom: 1px solid #eaeaea;
  padding-bottom: 15px;
  margin-bottom: 15px;
}
.checkup__header .content {
  flex: 1;
  padding-right: 15px;
}
.checkup__header .content h4 {
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 10px;
}
.checkup__header .content h4 a {
  color: #222;
}
.checkup__header .content h4 a:hover {
  text-decoration: none;
}
.checkup__header .content .checkup__add {
  position: relative;
  padding-left: 34px;
}
.checkup__header .content .checkup__add svg {
  width: 24px;
  height: 24px;
  position: absolute;
  left: 0;
  right: 0;
  top: 2px;
}
.checkup__header .content .checkup__add .medium {
}
.checkup__header .ava {
  width: 128px;
}
.checkup__body {
  border-bottom: 1px solid #eaeaea;
  padding-bottom: 15px;
  margin-bottom: 15px;
}
.checkup__body .checkup__detail div + div {
  padding-top: 10px;
}
.checkup__body .checkup__detail {
  font-size: 14px;
  border-bottom: 1px solid #eaeaea;
  padding-bottom: 15px;
  margin-bottom: 15px;
}
.checkup__body .checkup__detail svg {
  width: 24px;
  height: 24px;
}
.checkup__body .checkup__detail span {
  margin-left: 10px;
}
.checkup__body .checkup__price ul li {
  box-sizing: border-box;
  margin: 10px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  -ms-justify-content: space-between;
  -ms-flex-pack: distribute;
  -webkit-justify-content: space-between;
}
.checkup__body .checkup__price ul li .td1 {
}
.checkup__body .checkup__price ul li .td2 {
}

@media (max-width: 1024px) {
  .step-booking .col_70 {
    width: calc(100% - 380px);
  }
  .step-booking .col_30 {
    margin-left: 30px;
    width: 350px;
  }
}
@media (max-width: 860px) {
  .d_home_book {
    display: none;
  }
  .booking_pin {
    display: block;
  }
  .modal-content .d_home_book {
    display: block;
    border: 0;
  }
  .modal-content .d_home_book .d_price_l {
    font-size: 16px;
    color: #333;
    font-weight: 400;
  }
  .modal-content .d_home_book .d_price_l strong {
    font-size: 22px;
    color: #333;
    font-weight: bold;
    color: #f4511e;
  }
  .modal-content .d_home_book button.btn {
    background-image: linear-gradient(90deg, #f65e38 0, #f68a39 51%, #f65e38);
    width: 100%;
    background-size: 200% auto;
    box-shadow: 0 4px 12px 0 rgba(246, 116, 57, 0.4);
    text-align: center;
    color: #fff;
    padding: 10px 20px;
    font-size: 16px;
    outline: 0;
    margin: 15px 0;
    text-transform: uppercase;
  }
  .modal-content .d_home_book button.btn svg {
    vertical-align: bottom;
    margin: 2px 10px 0 0;
  }
  .modal-content .checkup {
    padding: 10px;
  }

  .step-booking .col_70 {
    width: 100%;
    margin-bottom: 30px;
  }
  .step-booking .col_30 {
    display: none;
  }
}
@media (max-width: 767px) {
  #BB-nav.affix .logo {
    display: block;
  }
  #BB-nav #menu-menu {
    width: 100%;
    padding-bottom: 10px !important;
  }
  #BB-nav #menu-menu li {
  }
  #BB-nav #menu-menu li a {
  }
}
@media (max-width: 680px) {
  .calendar_wrap .item {
    padding: 0 10px;
  }
}
@media (max-width: 500px) {
  .calendar_wrap .item {
    padding: 0px;
  }
}
.strike {
  position: relative;
  display: inline-block;
}
.strike:before {
  content: "";
  position: absolute;
  width: 100%;
  height: 1px;
  background: #999;
  top: 50%;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  left: 0;
}
.p--small {
  font-size: 14px !important;
}
.c-gray-9 {
  color: #999 !important;
}
.d_img_lst {
  background: black;
}
.content_detail img {
  max-width: 100%;
  height: 100%;
}
.content_detail p {
  font-size: 16px;
  /*font-weight: 300;*/
  padding-top: 20px;
}

.datphong-loading {
  background: url(https://thehappystay.vn/templates/themes/images/preloader.gif)
    center no-repeat;
  width: 100%;
  background-size: 79px;
}
.promo__content {
  margin-top: 0.5rem;
  font-size: 0.875rem;
}
.promo__description {
  font-size: 14px;
}
.my--6 {
  margin-top: 6px;
  margin-bottom: 6px !important;
  clear: both;
}
.mb--6 {
  margin-bottom: 6px !important;
  clear: both;
}
.hs_ttl_l {
  width: 100%;
}
.hs_ttl_r {
  float: left;
  width: 100px;
}
.text-lowercase {
  text-transform: lowercase !important;
}

@font-face {
  font-family: FontAwesome;
  /* src: local("FontAwesome"), url(fonts/fontawesome-webfont.eot?v=4.7.0);
  src: url(fonts/fontawesome-webfont.eot?#iefix&v=4.7.0)
      format("embedded-opentype"),
    url(fonts/fontawesome-webfont.woff2?v=4.7.0) format("woff2"),
    url(fonts/fontawesome-webfont.woff?v=4.7.0) format("woff"),
    url(fonts/fontawesome-webfont.ttf?v=4.7.0) format("truetype"),
    url(fonts/fontawesome-webfont.svg?v=4.7.0#fontawesomeregular) format("svg"); */
  font-weight: 400;
  font-style: normal;
}
.detail-gallery {
  display: none;
  position: fixed;
  z-index: 9999999;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: #000;
}
.detail-gallery img {
  max-width: 100%;
}
.detail-gallery .content {
  height: 100%;
}
.detail-gallery .content {
  position: relative;
  margin: 0px 0 0;
  padding: 0;
  width: 100%;
  -webkit-animation-name: animatetop;
  -webkit-animation-duration: 0.4s;
  animation-name: animatetop;
  animation-duration: 0.4s;
}
.detail-gallery ul {
  padding: 0;
}
.filter-slide ul {
  width: 100%;
  padding: 0 0 5px;
  margin: 0;
  list-style-type: none;
  border-bottom: 1px solid #5a5a5a;
  float: left;
}
.filter-slide li {
  padding-right: 35px;
  display: inline-block;
}
.filter-slide li a {
  font-size: 12px;
  color: #999;
  padding-bottom: 2px;
  text-decoration: none;
}
.filter-slide li span {
  margin-left: 4px;
}
.close-gallery {
  color: #fff;
  font-size: 14px;
  position: fixed;
  top: 0;
  right: 20px;
  z-index: 10;
}
.close-gallery span {
  font-size: 46px;
  vertical-align: middle;
  margin-left: 8px;
  font-family: Georgia, serif;
  position: relative;
  top: -4px;
}
.detail-gallery .content .rg-gallery {
  height: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  max-height: 768px;
}
.rg-image,
.rg-image-wrapper {
  height: 100%;
  position: relative;
}
.rg-image-nav a {
  position: fixed;
  top: 38%;
  width: 40px;
  height: 40px;
  font-size: 0;
  cursor: pointer;
  outline: 0;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  border-radius: 50%;
  z-index: 1;
  background-color: rgba(255, 255, 255, 0.2);
}
.rg-image-nav a.rg-image-nav-prev:before {
  content: "\f104";
}
.rg-image-nav a:before {
  font-family: FontAwesome;
  font-size: 30px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
}
.rg-image-nav a.rg-image-nav-next {
  left: auto;
}
.rg-image-nav a.rg-image-nav-next:before {
  content: "\f105";
}
.rg-image,
.rg-image-wrapper {
  height: 100%;
  position: relative;
}
.es-carousel,
.hotel-search,
.rg-image {
  overflow: hidden;
}
.rg-image {
  width: 100%;
  text-align: center;
  line-height: 0;
  margin: auto;
}
.rg-loading {
  width: 46px;
  height: 46px;
  position: absolute;
  top: 50%;
  left: 50%;
  background: url(https://statics.vntrip.vn/images/ajax-loader.gif) center
    center no-repeat #000;
  margin: -23px 0 0 -23px;
  z-index: 100;
  -moz-border-radius: 10px;
  -webkit-border-radius: 10px;
  border-radius: 10px;
  opacity: 0.7;
}
.filter-slide {
  width: 100%;
  height: 25px;
  position: relative;
  text-align: center;
  margin-top: 15px;
  padding: 0 140px;
}
.hidden {
  display: none !important;
}
.rg-thumbs {
  position: fixed;
  width: 100%;
  bottom: 3px;
  height: 80px;
  overflow: hidden;
}
.es-carousel-wrapper {
  position: relative;
  width: 100%;
  margin: auto;
}
.es-nav span.es-nav-prev {
  left: -50px;
}
.es-nav span {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  font-size: 0;
}
.es-nav span:before {
  font-family: FontAwesome;
  font-size: 24px;
  padding: 5px 10px;
  color: #fff;
}
.es-nav span.es-nav-prev:before {
  content: "\f104";
}
.es-nav span {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  font-size: 0;
}
.es-nav span.es-nav-next {
  right: -50px;
}
.es-nav span:before {
  font-family: FontAwesome;
  font-size: 24px;
  padding: 5px 10px;
  color: #fff;
}
.es-nav span.es-nav-next:before {
  content: "\f105";
}
.es-carousel,
.hotel-search,
.rg-image {
  overflow: hidden;
}
.es-carousel ul:after,
.es-carousel ul:before {
  content: " ";
  display: table;
}
.slick-slider,
.t-dates,
::after,
::before {
  box-sizing: border-box;
}
.es-carousel ul li {
  float: left;
  list-style: none;
}
.es-carousel ul li a {
  display: block;
  border-style: solid;
  border-color: #fff;
  -webkit-touch-callout: none;
  transition: all 0.2s ease-in-out;
}
.es-carousel ul li a img {
  width: 100%;
  height: 66px;
  object-fit: cover;
}
.es-carousel ul:after {
  clear: both;
}
.es-carousel ul:after,
.es-carousel ul:before {
  content: " ";
  display: table;
}
.es-nav span {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  font-size: 0;
}
.es-nav span.es-nav-prev {
  left: -50px;
}
.es-nav span.es-nav-next {
  right: -50px;
}
.d-none {
  display: none !important;
}
.p--small-2 {
  font-size: 12px !important;
}
.room-id__wrapper {
  top: 0;
  right: 0;
  width: 70px;
  border-radius: 3px;
  position: relative;
  background-color: rgba(246, 94, 57, 0.1);
  padding: 2px 5px;
  color: #f65e39;
}
.room-id__wrapper:after {
  content: "";
  position: absolute;
  -webkit-transform: translateY(100%);
  transform: translateY(100%);
  bottom: 0;
  left: 0;
  border-color: rgba(246, 94, 57, 0.1) transparent transparent;
  border-style: solid;
  border-width: 10px 40px;
}
#d_img_lst .owl-item img {
  height: 190px;
}
.d_home_cnt_l {
  margin-top: 0px;
}
.newsItem1_img img:hover {
  transform: scale(1.03);
}
@media (min-width: 1024px) {
  #d_img_lst .owl-item img {
    height: 420px;
  }
}
@media (min-width: 575px) {
  #d_img_lst .owl-item img {
    height: 400px;
  }
}

#d_img_lst .owl-prev,
#d_img_lst .owl-next {
  position: absolute;
  top: 50%;
}
#d_img_lst .owl-buttons div {
  width: 40px;
  height: 40px;
  font-size: 0;
  cursor: pointer;
  outline: 0;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  border-radius: 50%;
  z-index: 1;
  background-color: rgba(255, 255, 255, 0.2);
}
#d_img_lst .owl-next:before {
  font-size: 40px;
  content: "\f105";
}
#d_img_lst .owl-prev:before {
  font-size: 40px;
  content: "\f104";
}
#d_img_lst .owl-buttons div:before {
  font-family: FontAwesome;
  font-size: 30px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
}
#d_img_lst .owl-item {
  width: auto !important;
}
#d_img_lst img {
  width: auto !important;
}
#d_img_lst .owl-prev {
  left: 5rem;
}
.detail-slider-img img:hover {
  -webkit-transform: scale(1.025);
  transform: scale(1.025);
  transition: -webkit-transform 0.45s cubic-bezier(0.645, 0.045, 0.355, 1) 0s,
    transform 0.45s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
}
#d_img_lst .owl-next {
  right: 5rem;
}
.d_img_lst {
  position: relative;
}
.d_img_lst .room-id {
  position: absolute;
  top: 0;
  right: 5px;
}
.d_img_lst .room-id__wrapper {
  background-color: rgba(0, 0, 0, 0.75);
  color: #fff;
}
.d_img_lst .room-id__wrapper:after {
  border-top-color: rgba(0, 0, 0, 0.75);
}
.ml--12 {
  margin-left: 12px !important;
}
.c-green {
  color: #28ca6e !important;
}
.mt--50 {
  margin-top: 50px !important;
}
.mt--18 {
  margin-top: 18px !important;
}
.d_location {
  display: inline-block;
  clear: both;
}
.es-carousel ul li.selected a {
  border-color: #a90707;
}
.rg-image:before {
  content: "";
  display: inline-block;
  height: 55%;
  width: 1px;
  margin-right: -1px;
}
.modal-content .d_home_book button.btn {
  opacity: 0.65;
}
.modal-content .d_home_book button.btn.action {
  opacity: 1;
}
@media (min-width: 992px) {
  .rg-image-nav a {
    width: 66px;
    height: 66px;
  }
  .rg-image-nav a:before {
    font-size: 40px;
  }
}
@media (min-width: 768px) {
  .rg-image img {
    height: 100%;
    object-fit: contain;
  }
  .rg-image-nav a.rg-image-nav-prev {
    left: 20px;
  }
  .rg-image-nav a.rg-image-nav-next {
    right: 20px;
  }
  .d-sm-block {
    display: block !important;
  }
  .d-sm-none {
    display: none !important;
  }
}
@media (min-width: 320px) and (max-width: 768px) {
  .d_img_lst {
    height: 190px !important;
    overflow: hidden;
  }
  #d_img_lst .owl-buttons {
    display: none;
  }
  .detail-gallery .content .rg-gallery {
    height: 100%;
  }
  .rg-thumbs {
    bottom: 1px;
  }
  .rg-image-nav a.rg-image-nav-prev {
    left: 20px;
  }
  .rg-image-nav a.rg-image-nav-next {
    right: 20px;
  }
}
</style>

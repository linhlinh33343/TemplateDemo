<template>
  <div>
    <div class="header-main">
      <div class="nav">
        <div class="header">
          <div class="logo">
            <img :src="Logowhite" alt="" />
          </div>
          <div class="menu">
            <li><a href="">Home</a></li>
            <li><a href="">Solutions</a></li>
            <li><a href="">Pages</a></li>
            <li><a href="">Elements</a></li>
            <li><a href="">Blog</a></li>
            <li><a href="">Contact</a></li>
          </div>
          <div class="watch-video">
            <button class="btn-watch">Watch the demo</button>
          </div>
        </div>
      </div>
      <div class="slider-block">
        <div class="slider">
          <div class="slogan">Find true power in your data with Ensome</div>
          <div class="menu-active">
            <button class="btn-watch btn-learn-more">Learn more</button>
            <button class="btn-watch">Watch the demo</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import logo from "../assets/logo.png";
import Logowhite from "../assets/Logo_white.svg";

export default {
  data() {
    return {
      Logowhite,
    };
  },
};
</script>

<style scoped>
.hader-main {
  font-family: Manrope;
}
.header,
.menu {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.header {
  padding: 40px 0;
  width: 60%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
}
.nav {
  background-color: #002b4e;
}
li {
  list-style: none;
  margin-right: 25px;
}
a {
  text-decoration: none;
  color: white;
  font-size: 14px;
}
.logo {
}
.btn-watch {
  outline: none;
  border-radius: 6px;
  padding: 10px 13px;
  background: white;
  border: 1px solid white;
  cursor: pointer;
}
.slider-block {
  background-color: #002b4e;
  border-top: 1px solid #194060;
  padding: 80px 0;
}
.slider {
  display: flex;
  justify-content: space-around;

  width: 60%;
  margin: auto;
}
.slogan {
  font-size: 46px;
  color: white;
  font-weight: 800;
  width: 50%;
}
.menu-active {
  width: 50%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
}
.btn-learn-more {
  margin-right: 10px;
}
.feature-block {
  display: flex;
  width: 60%;
  margin: auto;
}
</style>

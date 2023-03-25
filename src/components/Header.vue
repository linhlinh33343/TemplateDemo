<template>
  <div>
    <div class="header-main">
      <div class="nav">
        <div class="header">
          <div class="logo">
            <img :src="Logowhite" alt="" class="icon-logo" />
            <img :src="Logo_mobile" alt="" class="icon-logo-mobile">
            
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
            <button class="btn-watch"><img :src="icon1" alt="" class="icon-img">Watch the demo</button>
          </div>
          <i class="fa-solid fa-bars icon-menu"></i>
        </div>
       
      </div>
      <div class="slider-block">
        <div class="slider">
          <div class="slogan">Find true power in your data with Ensome</div>
          <div class="slogan-heading">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</div>

          <div class="menu-active">
            <button class="btn-watch btn-learn-more ">Learn more</button>
            <button class="btn-watch btn-watch-transparent"><i class="fa-regular fa-circle-play btn-icon"></i>Watch the demo</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import logo from "../assets/logo.png";
import Logowhite from "../assets/Logo_white.svg";
import Logo_mobile from "../assets/Logo_mobile.png";
import icon1 from  "../assets/icon1.png";

export default {
  data() {
    return {
      Logowhite,
      icon1,
      Logo_mobile
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
  display: flex;
  align-items: center;
}
.btn-watch-transparent{
  background: transparent;
    color: white;
    border: transparent;
    transform: translateY(5px);
}
.icon-img-transparent{
  background-color: #002b4e;
  color: transparent;
}
.btn-icon{
  font-size: 24px;
  margin-right: 4px;
}
.icon-img{
  margin-right: 4px;
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
.icon-logo-mobile{
  display: none;
}
.icon-logo {
  display:block;
}
.btn-learn-more{
 
  color: #002B4E;
}
.slogan-heading{
  display: none;}
@media screen and (max-width : 769px){
.icon-logo {
  display:none
}
.icon-logo-mobile{
  display: block;
}
.header[data-v-61dd7a3d] {
    padding: unset;
    width: unset;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: auto;
}
.header .menu{
  display: none;

}
.watch-video {
    display: none;
}
.logo{
  padding: 20px 16px;
}
.icon-menu
  {
    color: white;
    margin-right: 16px;
    font-size: 30px;

}
.slider-block {
   
    padding: unset;
}
.slider {
    display: flex;
    justify-content: space-around;
    width: unset;
    margin: auto;
    flex-direction: column;
    padding: 20px 16px;
}
.slogan {
    font-size: 46px;
    color: white;
    /* font-weight: 800; */
    width: unset;
    font-style: normal;
    font-weight: 800;
    font-size: 30px;
    line-height: 40px;
}
.menu-active[data-v-61dd7a3d] {
    width: unset;
    display: flex;
    align-items: unset;
    justify-content: unset;
    flex-direction: column;
    /* text-align: center; */
    cursor: pointer;
}
.btn-watch {
    font-size: 16px;
    display: flex;
    justify-content: center;
    
    border: 1px solid white;
    margin-top: 10px;
}
.btn-learn-more{
  margin-right: unset;
  padding: 13px 0px;
  color: #002B4E;
}
.slogan-heading{
  display: block;
  font-style: normal;
font-weight: 400;
font-size: 14px;
color: #FFFFFF;
line-height: 24px;
margin: 15px 0px;
}
}

</style>

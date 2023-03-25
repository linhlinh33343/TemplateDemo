<template>
  <div class="footer">
    <div class="footer-top">
      <div class="subcribe">
        <div class="subcribe-left">
          <div class="subcribe-heading">Subscribe to our newsletter</div>
          <div class="subcribe-sub-heading">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium.
          </div>
        </div>
        <div class="subcribe-right">
          <div class="subcribe-email">
            <input type="text" placeholder="Your email" class="your-email" />
            <button class="btn-send">Send</button>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="footer-bottom-blocks">
        <div class="footer-block">
          <div class="block1">
            <div class="block1-logo">
              <img :src="Logowhite" alt="" />
            </div>
            <div class="block1-title">
              Ut enim ad minima veniam, quis nostrum exercitationem ullam
              corporis suscipit laboriosam, nisi ut aliquid ex ea commodi.
            </div>
          </div>
          <div class="block2 block">
            <div class="block-title">Quick link</div>
            <div class="block-params">Home</div>
            <div class="block-params">Solutions</div>
            <div class="block-params">Blog</div>
            <div class="block-params">Contacts</div>
            <div class="block-params">Out team</div>
            <div class="block-params">Abpout Us</div>
            <div class="block-params">Sevices</div>

            <div class="block-params">FAQ</div>
          </div>
          <div class="block3 block">
            <div class="block-title">Service</div>
            <div class="block-params">Pages</div>
            <div class="block-params">Elements</div>
            <div class="block-params">FAQ</div>
            <div class="block-params">Pricing</div>
            <div class="block-params">Site map</div>
          </div>
          <div class="block4 block">
            <div class="block-title">Cantact info</div>
            <div class="block-params">ensome@info.co.us</div>
            <div class="block-params">+1 601-201-5580</div>
            <div class="block-params">
              1642 Washington Avenue, Jackson, MS, Mississippi, 39201
            </div>
          </div>
        </div>
        <div class="footer-block-us">
          <div class="block-trademark">Ensome© 2022 All Rights Reserved</div>
          <div class="block-action">
            <span>Privacy policy</span>
            <span>Terms of us</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
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
.footer-top {
  background-color: #002b4e;

  color: white;
  border-bottom: 1px solid #607d94;
}
.subcribe {
  width: 60%;
  margin: auto;
  display: flex;
  padding: 80px 0;
}
.subcribe-heading {
  font-size: 38px;
  font-weight: 800;
}
.subcribe-sub-heading {
  font-size: 20px;
  width: 62%;
  margin-top: 24px;
}
.subcribe-right {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
}
.subcribe-email {
  border-radius: 6px;
  overflow: hidden;
}
.your-email {
  padding: 15px 0px 15px 25px;
  background-color: #c9dcec;
  outline: none;
  min-width: 320px;

  border: none;
}
.btn-send {
  border: none;

  border: none;
  outline: none;
  padding: 15px;
  min-width: 126px;
  cursor: pointer;
}
.footer-bottom {
  background-color: #002b4e;
  padding: 50px 0 0 0;
}
.footer-bottom-blocks {
  width: 60%;
  margin: auto;
  color: white;
}
.footer-block {
  margin-bottom: 30px;
}

.footer-block {
  display: flex;
  align-items: flex-start;
}
.block1 {
  width: 45%;
}
.block1-title {
  width: 65%;
  font-size: 14px;
  color: #9497a1;
}
.block {
  width: 15%;
}
.block4 {
  flex: 1;
}
.block-title {
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 30px;
}

.block-params {
  font-size: 14px;
  color: #9497a1;
  margin-bottom: 12px;
  font-weight: 400;
}
.footer-block-us {
  border-top: 1px solid #607d94;
  display: flex;
  align-items: center;
  padding: 30px 0;
}
.block-trademark {
  width: 50%;
  font-size: 14px;
  font-weight: 400;
  color: #607d94;
}
.block-action {
  width: 50%;
  text-align: end;
}
.block-action span {
  width: 50%;
  font-size: 14px;
  font-weight: 400;
  color: #607d94;
  margin-left: 100px;
}
@media screen and (max-width : 769px){
  .subcribe {
    width: unset;
    margin: auto;
    display: flex;
    padding: 50px 16px 20px 16px;
    flex-direction: column;
}
.subcribe-sub-heading {
 
    display: none;
}
.subcribe-right{
    display: unset;
   
    width: unset;
 
}
.subcribe-email {
    border-radius: unset;
    overflow: unset;
    display: flex;
    flex-direction: column;
    margin: 35px 0px 60px 0px;
}
.your-email {
    padding: 15px 0px 15px 25px;
    background-color: #c9dcec;
    outline: none;
    min-width: 320px;
    border: none;
    margin: 0px 0px 20px 0px;
    /* text-align: center; */
    border-radius: 4px;
    font-weight: 600;
    font-size: 14px;
    color: #607D94;
    background: #002B4E;
    border: 1px solid #607D94;
border-radius: 6px;


}
.btn-send {
    border: none;
    border: none;
    outline: none;
    padding: 15px;
    min-width: 126px;
    cursor: pointer;
    background: #FFFFFF;
    border-radius: 6px;
    color: #002B4E;
    font-weight: 700;
    font-size: 16px;
}
}
</style>

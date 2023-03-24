<template>
  <div class="feature-section">
    <div class="pricing">
      <div class="sub-logo">
        <img :src="logo1" alt="" v-for="item in 6" :key="item" />
      </div>
    </div>
    <div class="pricing">
      <div class="pricing-bottom">
        <div class="pricing-bottom-items" v-for="item in 3" :key="item">
          <img :src="iconBrain" alt="" />
          <p class="title">Machine learning</p>
          <p class="sevice-params">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores.
          </p>
          <a href="" class="blog-link">Read more -></a>
        </div>
      </div>
    </div>

    <div class="pricing blog contact-information">
      <div class="contact-information-left">
        <div class="content-heading contact-information-heading">
          Contact information
        </div>
        <p class="info-sub-heading">
          Fill up the form and our Team will get back to you with 25 hours.
        </p>
        <p class="sub-title">ensome@info.co.us</p>
        <p class="sub-title">+1 601-201-5580</p>
        <p class="sub-title">1642 Washington Ave, Jackson, MS</p>
      </div>
      <div class="contact-information-right">
        <div class="contact1">
          <div class="contact-items">
            <div class="contact-name">Name</div>
            <div>
              <input type="text" class="contact-input" value="Andrea" />
            </div>
          </div>
          <div class="contact-items">
            <div class="contact-name">Email</div>
            <div>
              <input
                type="text"
                class="contact-input"
                value="andrea@gmaol.com"
              />
            </div>
          </div>
        </div>
        <div class="contact2">
          <div class="contact-items contact2-items">
            <div class="contact-name">Theme</div>
            <div>
              <input type="text" class="contact-input" value="Job" />
            </div>
          </div>
        </div>
        <div class="contact2">
          <div class="contact-items contact2-items">
            <div class="contact-name">Message</div>
            <div>
              <input type="text" class="contact-input" value="Your message" />
            </div>
          </div>
        </div>
        <button class="btn-watch">Send</button>
      </div>
    </div>
  </div>
</template>

<script>
import features01 from "../assets/feature01.png";
import ensome from "../assets/ensome.png";
import customer from "../assets/customer.png";
import vector1 from "../assets/vector1.png";
import vector from "../assets/vector.png";
import blog from "../assets/blog.png";
import logo1 from "../assets/logo1.png";
import iconBrain from "../assets/iconBrain.png";
export default {
  data() {
    return {
      features01,
      ensome,
      customer,
      vector,
      vector1,
      blog,
      logo1,
      iconBrain,
    };
  },
};
</script>

<style scoped>
.feature-content {
  font-family: Manrope;
}
.feature-block {
  width: 60%;
  display: flex;
  align-items: flex-start;
  margin: auto;
  margin-top: 120px;
}
.feature-block-1 {
  width: 80%;
  display: flex;
  align-items: flex-start;
}
.feature-block-2 {
  width: 60%;
  /* display: flex;
      align-items: flex-start; */
  margin: auto;
}
.feature-content {
  width: 50%;
  padding: 0 30px 0 0;
}
.feature-content-2 {
  width: 50%;
  padding: 0 0 0 30px;
}
.content-heading {
  font-size: 38px;
  font-weight: 800;
  color: black;
  margin-bottom: 30px;
  width: 65%;
}
.content-heading-1 {
  font-size: 38px;
  font-weight: 800;
  color: black;
  margin-bottom: 30px;
}
.content-param {
  font-size: 20px;
  font-weight: 400;
  color: #9497a1;
}
.btn-watch {
  color: white;
  padding: 13px 30px;
  font-size: 14px;
  background: #185cff;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 5px;
  margin-top: 30px;
}
.ensome-block {
  width: 60%;

  margin: auto;
  margin-top: 120px;
}
.ensome {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}
.ensome-title {
  font-size: 14px;
  font-weight: 600;
  color: #9497a1;
  width: 80%;
}
.ensome-number {
  font-size: 75px;
  color: #185cff;
}
.ensome-heading {
  font-size: 20px;
  font-weight: 700;
  color: black;
  margin-bottom: 10px;
}
.ensome-heading:not(:first-child) {
  margin-top: 30px;
}
.ensome-params {
  font-size: 16px;
  font-weight: 400;
  color: gray;
  line-height: 28px;
}
.feature-block-1 {
  width: 80%;
  display: flex;
  align-items: flex-start;

  margin-top: 120px;
}
.customer-say {
  background: #f0f9ff;
  padding: 120px 0;
  margin-top: 120px;
}
.customer-content {
  background: white;
  padding: 35px;
  width: 49%;
}
.customer-items {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.avatar {
  margin-right: 25px;
}
.name {
  font-size: 16px;
  font-weight: 700;
}
.career {
  font-size: 14px;
  font-weight: 500;
  color: gray;
}
.customer-params {
  font-size: 14px;
  font-weight: 500;
  color: gray;
}
.customer-action {
  text-align: end;
}
.btn-customer {
  outline: none;
  padding: 10px 18px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  background-color: #c9dcec;
  margin-bottom: 30px;
  margin-left: 20px;
}
.pricing {
  width: 60%;
  margin: auto;
  padding: 120px 0 0 0;
}
.pricing-top {
  display: flex;
  justify-content: space-between;
  width: 100%;
}
.pricing-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}
.pricing-bottom-items {
  width: 32%;
  box-shadow: 0px 4px 12px rgb(12 68 204 / 10%);
  border-radius: 6px;
  padding: 50px 35px;
  margin-bottom: 20px;
}
p.title {
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 16px;
}
p.heading {
  font-style: normal;
  font-weight: 800;
  font-size: 38px;
  margin-bottom: 16px;
}
p.params {
  font-weight: 700;
  font-size: 22px;
  margin-bottom: 16px;
}
.pricing-btn {
  padding: 10px 14px;
  gap: 10px;
  width: 280px;
  height: 44px;
  border: 1px solid #185cff;
  border-radius: 6px;
  background: white;
  color: #185cff;
  cursor: pointer;
  margin-bottom: 16px;
}
p.sub-title {
  font-weight: 400;
  font-size: 16px;
  margin-bottom: 16px;
}
.pricing-top-heading {
  margin-bottom: 20px;
}
.pricing-bottom-items.blog-items {
  width: 32%;
  box-shadow: unset;
  border-radius: unset;
  padding: unset;
}
img.blog-img {
  width: 100%;
}
p.blog-date {
  font-weight: 400;
  font-size: 14px;
  color: gray;
  margin-top: 10px;
}
p.blog-title {
  font-weight: 700;
  font-size: 22px;

  margin-top: 10px;
}
a.blog-link {
  color: #185cff;
  text-decoration: none;
  margin-top: 10px;
  display: block;
  font-weight: 600;
  font-size: 14px;
}
.blog {
  padding: unset;
}
.sub-logo {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.contact-information {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 120px 0;
}
.info-sub-heading {
  font-weight: 400;
  font-size: 20px;
  color: gray;
  margin-bottom: 10px;
}
.contact-information-left {
  width: 35%;
}
.contact-information-heading {
  width: unset;
  margin-bottom: 10px;
}
.contact-information-right {
  width: 50%;
}
.contact1 {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.contact-items {
  width: 49%;
  border-bottom: 1px solid #9497a1;
}
.contact-name {
  font-weight: 600;
  font-size: 12px;
  color: #9497a1;
  margin-bottom: 6px;
}
.contact-input {
  width: 100%;
  border: none;
  outline: none;
  font: 14px;
  padding: 5px;
}
.contact2-items {
  margin-top: 45px;
  width: unset;
}
.sevice-params {
  font-weight: 400;
  font-size: 16px;
  color: #9497a1;
}
</style>

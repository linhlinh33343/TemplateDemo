<template>
  <div class="contact">
    <div class="contact-block">
      <div class="contact-map" :style="{ backgroundImage: `url('${map}')` }">
        <div class="contact-title">Contacts</div>
        <div class="contact-form">
          <div class="contact-information-right">
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
                <div class="contact-name">Theme</div>
                <div>
                  <input type="text" class="contact-input" value="Job" />
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
                  <input
                    type="text"
                    class="contact-input"
                    value="Your message"
                  />
                </div>
              </div>
            </div>
            <div class="contact-btn">
              <button class="btn-watch">Send</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="contact-block-info">
      <div class="contact-info">
        <div class="info-heading">Phone</div>
        <div class="info-sub">+1 601-201-5580</div>
      </div>
      <div class="contact-info">
        <div class="info-heading">Phone</div>
        <div class="info-sub">+1 601-201-5580</div>
      </div>
      <div class="contact-info">
        <div class="info-heading">Phone</div>
        <div class="info-sub">+1 601-201-5580</div>
      </div>
    </div>
  </div>
</template>

<script>
import map from "../assets/map.png";
export default {
  data() {
    return {
      map,
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
  padding: 120px 0;
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
}
.pricing-bottom-items {
  width: 32%;
  box-shadow: 0px 4px 12px rgb(12 68 204 / 10%);
  border-radius: 6px;
  padding: 50px 35px;
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
  width: 100%;
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
  padding: 0 0 120px 0;
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
.brainMobile {
  display: none;
}
.brain {
  display: inline-block;
  margin-right: 10px;
}
.ensome-heading {
  font-size: 20px;
  font-weight: 700;
  color: black;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: start;
}
.feature-img {
  width: 50%;
}
.feature-img img {
  width: 100%;
}
.btn-learn-more {
  display: none;
}
.feature-block-mobile {
  display: none;
}
.sub-logo-img {
  width: calc(100% / 6);
}
.sub-logo-img img {
  width: 100%;
}
.pricing {
  padding: 57px 0;
}
.sub-logo-img-pc {
  display: inline-block;
}

.sub-logo-img-mobile {
  display: none;
}
.pricing-bottom-items {
  background: #f0f9ff;
}
.slution-title {
  font-style: normal;
  font-weight: 700;
  font-size: 22px;

  margin: 15px 0px;
}
.slution-params {
  display: flex;
  justify-content: start;
  align-items: center;
  margin-bottom: 25px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
}
.slution-params img {
  margin-right: 5px;
}
h1 {
  margin-bottom: 30px;
}
.feature-block.slution-block {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.slution-items {
  width: 50%;
}
.items-top {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.items-top-number {
  font-style: normal;
  font-weight: 800;
  font-size: 130px;
  color: #185cff;
  /* margin-right: 10px; */
  width: 30%;
}
.items-top-heading {
  padding: 10px 47px 10px 40px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
}
.items-bottom {
  font-style: normal;
  font-weight: 800;
  font-size: 38px;
}
.items-bottom {
  font-style: normal;
  font-weight: 800;
  font-size: 38px;
  color: #9497a1;
}
.slution-heading {
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  margin-bottom: 10px;
}
.slution-sub-heading {
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  color: #9497a1;
}
.slution-sub-heading p {
  margin-bottom: 10px;
}
.btn-watch {
  margin-right: 20px;
}
.about-us-btn {
  background: white;
  border: 1px solid #185cff;
  color: #185cff;
}
.contact-map {
  padding: 145px 405px 260px 405px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.contact-title {
  font-style: normal;
  font-weight: 800;
  font-size: 46px;
}
.contact-form {
  box-shadow: 0px 4px 12px rgb(12 68 204 / 10%);
  border-radius: 6px;
  background: white;
  padding: 50px;
}
.contact-information-right {
  width: unset;
}
.contact2-items {
  min-width: 320px;
  margin-top: unset;
  width: unset;
  margin-bottom: 40px;
}
.contact-map {
  position: relative;
}
.contact-form {
  position: absolute;
  right: 405px;
  top: 0;
}
.contact-btn {
  text-align: end;
}
.btn-watch {
  margin-right: unset;
}
.contact-block-info {
  padding: 60px 405px 206px 405px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.contact-info {
  margin-right: 30px;
}
.info-heading {
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  margin-bottom: 10px;
}
.info-sub {
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
}
/* cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc */
@media screen and (max-width: 769px) {
  .feature-section {
    padding: 20px 16px;
  }
  .ensome-block {
    width: unset;
    margin: unset;
    margin-top: 120px;
  }
  .content-heading {
    font-size: 38px;
    font-weight: 800;
    color: black;
    margin-bottom: 30px;
    width: unset;
    font-weight: 800;
    font-size: 30px;
  }
  .ensome {
    display: flex;
    align-items: unset;
    justify-content: unset;
    flex-wrap: wrap;
  }
  .ensome-items {
    width: 50%;
  }
  .ensome-title {
    font-size: 14px;
    font-weight: 600;
    color: #9497a1;
    width: unset;
    font-weight: 400;
    font-size: 14px;
  }
  .ensome-number {
    color: #185cff;
    font-weight: 400;
    font-size: 55px;
  }
  .feature-img img {
    width: 100%;
  }
  .feature-block-1 {
    width: unset;
    display: flex;
    align-items: flex-start;
    margin-top: 40px;
    flex-direction: column;
  }
  .content-heading-1 {
    font-size: 30px;
    font-weight: 800;
    color: black;
    margin-bottom: 30px;
  }
  .feature-content-2 {
    width: unset;
    padding: unset;
    margin-top: 10px;
  }
  .ensome-params {
    font-size: 16px;
    font-weight: 400;
    color: gray;
    line-height: 28px;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
  }
  .brainMobile {
    display: inline-block;
    margin-right: 5px;
  }
  .brain {
    display: none;
  }
  .feature-img {
    width: unset;
  }
  .customer-say {
    background: #f0f9ff;
    padding: 10px 0;
    margin-top: unset;
    margin: 23px -16px;
  }
  .feature-block-2 {
    width: unset;
    margin: auto;
    padding: 16px;
  }
  .pricing-top {
    display: flex;
    justify-content: space-between;
    width: 100%;
    flex-direction: column;
  }
  .customer-action {
    text-align: start;
  }
  .btn-customer {
    margin: 10px 10px 30px 0;
  }
  .pricing-bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
  }
  .customer-content {
    background: white;
    padding: 15px;
    width: unset;
    margin-bottom: 19px;
  }
  .pricing {
    width: unset;
    margin: auto;
    padding: 30px 0;
  }
  .pricing-bottom-items {
    width: unset;
    box-shadow: 0px 4px 12px rgb(12 68 204 / 10%);
    border-radius: 6px;
    padding: 50px 35px;
    width: 100%;
  }
  .btn-customer {
    margin: 10px 10px 18px 0;
  }
  .sub-logo {
    overflow: hidden;
  }
  .sub-logo img {
    width: 20%;
  }
  .pricing {
    width: unset;
    margin: auto;
    padding: 10px 0;
  }
  .contact-information {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    flex-direction: column;
  }
  .contact-information-left {
    width: unset;
  }
  .contact-information-right {
    display: none;
  }
  .pricing-bottom-items.blog-items {
    width: unset;
  }
  .btn-learn-more {
    display: block;
    margin-top: unset;
    width: 100%;
  }

  .feature-block-pc {
    display: none;
  }
  .feature-content[data-v-8dc7cce2] {
    width: unset;
    padding: unset;
  }
  .feature-block[data-v-8dc7cce2] {
    width: unset;
    display: flex;
    align-items: flex-start;
    margin: auto;
    margin-top: 15px;
    flex-direction: column;
  }
  .btn-watch[data-v-8dc7cce2] {
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    padding: 15px 46px;
    width: 100%;
  }
  .content-heading[data-v-8dc7cce2] {
    margin-bottom: 20px;
    margin-top: 30px;
  }
  .feature-block-mobile {
    display: block;
  }
  .feature-block.feature-block-pc {
    display: none;
  }
  .sub-logo-img {
    width: 25%;
  }
  .sub-logo-img-pc {
    display: none;
  }

  .sub-logo-img-mobile {
    display: inline-block;
  }
  .pricing-bottom-items {
    margin-bottom: 15px;
  }
  .feature-block {
    width: unset;
    display: flex;
    align-items: flex-start;
    margin: auto;
    margin-top: unset;
  }
  .feature-block {
    width: unset;
    display: flex;
    align-items: flex-start;
    margin: auto;
    margin-top: unset;
    flex-direction: column;
  }
  .slution-items {
    width: unset;
    margin-bottom: 20px;
  }
  .items-top-number {
    color: #185cff;
    margin-right: unset;
    width: 30%;
    font-style: normal;
    font-weight: 800;
    font-size: 100px;
    line-height: 100%;
  }
  .items-bottom {
    color: #9497a1;
    font-style: normal;
    font-weight: 800;
    font-size: 30px;
  }
  .slution-heading {
    margin-bottom: 10px;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
  }
  .slution-sub-heading {
    color: #9497a1;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
  }
  .btn-watch {
    margin-top: 10px;
    margin-right: unset;
  }
  .slution-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .slution-btn button {
    width: 100%;
  }
  .slution-items {
    width: unset;
    margin-bottom: 20px;
    width: 100%;
  }
  .contact-map {
    padding: 100px auto auto au;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 100px 0;
    flex-direction: column;
  }
  .contact-form {
    position: absolute;
    right: 16px;
    left: 16px;
    top: 80%;
  }
  .contact-information-right {
    display: block;
  }
  .contact2-items {
    min-width: unset;
    margin-top: unset;
    width: unset;
    margin-bottom: 31px;
  }
  .btn-watch {
    width: 100%;
  }
  .contact-form {
    padding: 30px;
  }
  .contact-block-info {
    margin-top: 400px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding: 0px 16px 50px 16px;
    flex-direction: column;
  }
  .contact-info {
    margin-right: unset;
    margin-bottom: 20px;
  }
  .contact-title {
    font-style: normal;
    font-weight: 800;
    font-size: 46px;
    width: 100%;
    margin-left: 16px;
  }
}
</style>

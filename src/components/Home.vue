<template>
  <div class="feature-section">
     <div class="feature-block feature-block-pc">
      <div class="feature-content">
        <div class="content-heading">
          The newest business analytics platform
        </div>
        <div class="content-param">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo.
        </div>
        <button class="btn-watch">Watch the demo</button>
      </div>
      <div class="feature-img">
        <img :src="features01" alt="" />
      </div>
    </div>
    <div class="feature-block feature-block-pc">
      <div class="feature-img">
        <img :src="features01" alt="" />
      </div>
      <div class="feature-content-2">
        <div class="content-heading">
          The newest business analytics platform
        </div>
        <div class="content-param">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo.
        </div>
        <button class="btn-watch">Watch the demo</button>
      </div>
    </div> 
    <div class="feature-block feature-block-mobile ">
      <div class="feature-content">
        <div class="feature-img">
          <img :src="features01" alt="" />
        </div>
        <div class="content-heading">
          The newest business analytics platform
        </div>
        <div class="content-param">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo.
        </div>
        
      </div>
      
      <button class="btn-watch">Discover more</button>
    </div>
    <div class="feature-block feature-block-mobile ">
      <div class="feature-content">
        <div class="feature-img">
          <img :src="features01" alt="" />
        </div>
        <div class="content-heading">
          The newest business analytics platform
        </div>
        <div class="content-param">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo.
        </div>
        
      </div>
      
      <button class="btn-watch">Discover more</button>
    </div>
    <div class="ensome-block">
      <div class="content-heading">Ensome in numbers</div>
      <div class="ensome">
        <div class="ensome-items">
          <div class="ensome-title">Data analytics performed by Ensome's</div>
          <div class="ensome-number">220</div>
        </div>
        <div class="ensome-items">
          <div class="ensome-title">Data analytics performed by Ensome's</div>
          <div class="ensome-number">220</div>
        </div>
        <div class="ensome-items">
          <div class="ensome-title">Data analytics performed by Ensome's</div>
          <div class="ensome-number">220</div>
        </div>
        <div class="ensome-items">
          <div class="ensome-title">Data analytics performed by Ensome's</div>
          <div class="ensome-number">220</div>
        </div>
      </div>
    </div>
    <div class="feature-block-1">
      <div class="feature-img">
        <img :src="ensome" alt="" />
      </div>
      <div class="feature-content-2">
        <div class="content-heading-1"> The benefits of Ensome</div>
        <div class="ensome-content">
          <div class="ensome-heading"><img :src="brainMobile" alt="" class="brainMobile"> <img :src="brain" alt="" class="brain">Machine learning</div>
          <div class="ensome-params">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores. Totam rem aperiam, eaque ipsa quae ab illo inventore
            veritatis et quasi architecto.
          </div>
          
          <div class="ensome-heading"><img :src="brainMobile" alt="" class="brainMobile"> <img :src="brain" alt="" class="brain">Machine learning</div>
          <div class="ensome-params">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores. Totam rem aperiam, eaque ipsa quae ab illo inventore
            veritatis et quasi architecto.
          </div>
          <div class="ensome-heading"><img :src="brainMobile" alt="" class="brainMobile"> <img :src="brain" alt="" class="brain">Machine learning</div>
          <div class="ensome-params">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores. Totam rem aperiam, eaque ipsa quae ab illo inventore
            veritatis et quasi architecto.
          </div>
        </div>
      </div>
    </div>
     <div class="customer-say">
      <div class="feature-block-2">
        <div class="pricing-top">
          <h1>What our customers say</h1>
          <div class="customer-action">
            <button class="btn-customer"><img :src="vector" alt="" /></button>
            <button class="btn-customer"><img :src="vector1" alt="" /></button>
          </div>
        </div>
        <div class="pricing-bottom">
          <div class="customer-content" v-for="item in 2" :key="item">
            <div class="customer-items">
              <div class="avatar"><img :src="customer" alt="" /></div>
              <div class="info">
                <div class="name">Alex Bern</div>
                <div class="career">CEO by PixelPerfect</div>
              </div>
            </div>
            <div class="customer-params">
              “Ut enim ad minima veniam, quis nostrum exercitationem ullam
              corpor suscipit laboriosam, nisi ut aliquid ex ea commodi
              consequatur? Quis utem vel eum iure reprehender qui in ea
              voluptate velit esse quam nihil molesti consequatur, vel illum.”
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="pricing">
      <div class="pricing-top">
        <h1>Our pricing</h1>
        <div class="customer-action">
          <button class="btn-customer"><img :src="vector" alt="" /></button>
          <button class="btn-customer"><img :src="vector1" alt="" /></button>
        </div>
      </div>
      <div class="pricing-bottom">
        <div class="pricing-bottom-items" v-for="item in 3" :key="item">
          <p class="title">Starter</p>
          <p class="heading">Free</p>
          <p class="params">Trial plan for starters</p>
          <button class="pricing-btn">Get started</button>
          <p class="sub-title">For small teams – 5 users</p>
          <p class="sub-title">For small teams – 5 users</p>
          <p class="sub-title">For small teams – 5 users</p>
        </div>
      </div>
    </div>
   <div class="pricing blog">
      <div class="pricing-top">
        <h1 class="pricing-top-heading">Ensome blog</h1>
      </div>
      <div class="pricing-bottom">
        <div
          class="pricing-bottom-items blog-items"
          v-for="item in 3"
          :key="item"
        >
          <img :src="blog" alt="" class="blog-img" />
          <p class="blog-date">22 June 2022</p>
          <p class="blog-title">
            Staffing software: key capabilities and top products
          </p>
          <a href="" class="blog-link">Read more -></a>
        </div>
      </div>
    </div>
    <div class="pricing">
      <div class="sub-logo">
        <div class="sub-logo-img  sub-logo-img-pc" v-for="item in 6" :key="item">
           <img :src="logo1" alt=""  />
        </div>
        <div class="sub-logo-img sub-logo-img-mobile" v-for="item in 4" :key="item">
           <img :src="logo1" alt=""  />
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
      <button class="btn-watch btn-learn-more ">Contact us</button>
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
import brainMobile from '../assets/brainMobile.png';
import brain from '../assets/brain.png';
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
      brainMobile,
      brain
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
.brainMobile{
  display: none;
}
.brain{
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
.feature-img img{
  width: 100%;
}
.btn-learn-more{
  display: none;
}
.feature-block-mobile{
  display: none;
}
.sub-logo-img{
  width:calc(100% / 6)
}
.sub-logo-img img{
  width: 100%;
}
.pricing{
  padding: 57px 0;
}
.sub-logo-img-pc{
  display: inline-block;
}
  
.sub-logo-img-mobile{
  display: none;
}
@media screen and (max-width : 769px){
.feature-section{
  padding: 20px 16px;
}
.ensome-block{
    width: unset;
    margin: unset;
    margin-top: 120px;
}
.content-heading{
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
.ensome-title{
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
.feature-img img{
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
.brainMobile{
  display: inline-block;
  margin-right: 5px;
}
.brain{
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
.sub-logo{
  overflow: hidden;
}
.sub-logo img{
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
.pricing-bottom-items.blog-items{
  width: unset;
}
.btn-learn-more{    
  display: block;
  margin-top: unset;
  width: 100%;
    
  }

.feature-block-pc{
  display: none;
}
.feature-content[data-v-8dc7cce2] {
    width: unset;
    padding:unset;
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
.feature-block-mobile{
  display: block;
}
.feature-block.feature-block-pc{
  display: none;
}
.sub-logo-img{
  width:25%
}
.sub-logo-img-pc{
  display: none;
}
  
.sub-logo-img-mobile{
  display: inline-block;
}
}

</style>

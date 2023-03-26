<template>
    <div class="feature-section">
        <div class="feature-block ">
      <div class="feature-content">
        
      <div class="about-params">
        <div class="about-params__items">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quaeab illo inventore. Donec tincidunt tempor quam, non mollis quam finibus nec.
        </div>
        <div class="about-params__items">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quaeab illo inventore. Donec tincidunt tempor quam, non mollis quam finibus nec.
        </div>
      </div>
      
      </div>
     
    </div>
      <div class="pricing">
        <div class="pricing-bottom">
          <div class="pricing-bottom-items" v-for="item in 9" :key="item">
            <img :src="person" alt="" />
           
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
  import iconBrain from "../assets/iconBrain.png";
  import person from '../assets/person.png';
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
        person
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
  .pricing-bottom {
   
    /* min-height: 1700px; */
}
/* .pricing-bottom-items{
    align-self: flex-end;
  }

  .pricing-bottom-items:nth-child(5){
    align-self: flex-start;
  }
  .pricing-bottom-items:nth-child(8){
    align-self: flex-start;
  } */
  .pricing-bottom-items:nth-child(2){
    transform: translateY(70px);
  }
  .pricing-bottom-items:nth-child(5){
    transform: translateY(70px);
  }
  .pricing-bottom-items:nth-child(8){
    transform: translateY(70px);
  }
  .pricing-bottom-items img{
    width: 100%;
  }
  .pricing-bottom-items{
    padding:unset;
  }
  .pricing {
   
    padding: 65px 0 100px 0;
}
.feature-block {
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
  .pricing-bottom-items{
    padding: unset;
  }
  .pricing-bottom-items:nth-child(2){
    transform: unset;
  }
  .pricing-bottom-items:nth-child(5){
    transform: unset;
  }
  .pricing-bottom-items:nth-child(2){
    transform: translateY(30px);
  }
  .pricing-bottom-items:nth-child(4){
    transform: translateY(30px);
  }
  .pricing-bottom-items:nth-child(6){
    transform: translateY(30px);
  }
  .pricing-bottom-items:nth-child(8){
    transform: translateY(30px);
  }
  .pricing-bottom {
  
    flex-direction: row;
}
.pricing-bottom-items{
    width: 49%;
}
.feature-block {
    display: block;
}
.about-params {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.feature-block {
    width: unset;
    display: flex;
    align-items: flex-start;
    margin: auto;
    margin-top: unset;
}
.about-params {
    /* display: flex; */
    justify-content: space-between;
    align-items: center; 
    flex-direction: column;
}
.feature-content {
    width: unset;
    padding: unset;
   
}
.about-params__items {
  
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 27px;
    color: #9497A1;
    margin-top: 10px;
}
.about-params[data-v-4fd998ea] {
   
   flex-direction: column;
}
.pricing {
   
   padding: 65px 0 0px 0;
}
  }
  
  </style>
  
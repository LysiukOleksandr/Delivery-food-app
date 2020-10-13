<template>
<section class="restraunt">
  <div class="restraunt__top">
    <h2 class="restraunt__title">{{restrauntDetails.name}}</h2>
    <div class="restraunt__rating">
      <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.6515 6.24221C14.5553 5.94476 14.2915 5.73349 13.9793 5.70536L9.73947 5.32038L8.06292 1.39623C7.9393 1.10864 7.65776 0.922485 7.34495 0.922485C7.03215 0.922485 6.75061 1.10864 6.62699 1.39691L4.95043 5.32038L0.709893 5.70536C0.398319 5.73417 0.135163 5.94476 0.0384405 6.24221C-0.0582818 6.53966 0.0310434 6.86592 0.266741 7.07158L3.47158 9.88224L2.52655 14.0451C2.45739 14.3512 2.5762 14.6676 2.83016 14.8512C2.96667 14.9498 3.12638 15 3.28744 15C3.4263 15 3.56404 14.9626 3.68766 14.8886L7.34495 12.7028L11.0009 14.8886C11.2684 15.0495 11.6057 15.0349 11.8591 14.8512C12.1131 14.667 12.2318 14.3505 12.1627 14.0451L11.2177 9.88224L14.4225 7.07214C14.6582 6.86592 14.7482 6.54022 14.6515 6.24221Z" fill="#FFC107"/>
        </svg>
        <span>{{restrauntDetails.rating}}</span> 
    </div>
    <span class="restraunt__start-price">от {{restrauntDetails.startPrice}} Р</span>
    <span class="restraunt__category">{{restrauntDetails.category}}</span>
  </div>
  <div class="restraunt__products">
    <v-restraunt-item v-for="item in restrauntItems" 
    :key="item.id" 
    :id="item.id" 
    :name='item.name' 
    :ingredients='item.ingredients'
    :img='item.img' 
    :price='item.price' 
     ></v-restraunt-item>
  </div>
</section>
</template>

<script>
import RestrauntItem from '../components/v-restraunt-item'
export default {
name:'Restraunt',
components:{
  'v-restraunt-item': RestrauntItem
},
computed:{
restrauntDetails(){
  return this.$store.state.restraunt.restrauntDetails
},
restrauntItems(){
  return this.$store.state.restraunt.items
}
},
created(){
  this.$store.dispatch('getRestrauntData',this.$route.params)
}
}
</script>

<style lang='scss'>
.restraunt {
  padding-top: 40px;
  padding-bottom: 90px;
  &__top {
    display: flex;
    align-items: center;
  }
  &__title {
    font-size: 36px;
    font-weight: 700;
    line-height: 42.19px;
    color: #000;
  }
  &__rating {
    font-weight: 700;
    line-height: 32px;
    margin-left: 30px;
    span {
      color: #ffc107;
      margin-left: 5px;
    }
    @media screen and(max-width:350px) {
      margin-left: 10px;
    }
  }

  &__start-price {
    line-height: 32px;
    font-weight: 400;
    color: #8c8c8c;
    margin-left: 26px;
    position: relative;
    &:after {
      content: '';
      position: absolute;
      width: 5px;
      height: 5px;
      background: #8c8c8c;
      border-radius: 50%;
      top: calc(50% - 2.5px);
      right: -15px;
      @media screen and(max-width:480px) {
        display: none;
      }
    }
    @media screen and(max-width:350px) {
      margin-left: 5px;
    }
  }

  &__category {
    line-height: 32px;
    font-weight: 400;
    color: #8c8c8c;
    margin-left: 26px;
    @media screen and(max-width:480px) {
      display: none;
    }
  }
  &__products {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    justify-items: center;
    row-gap: 30px;
    column-gap: 24px;
    margin-top: 45px;
  }
  &__item {
    border-radius: 5px;
    max-width: 384px;
    background: #fff;
    overflow: hidden;
    padding-bottom: 35px;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.05);
    display: grid;
    grid-auto-flow: row;
    grid-template: auto 1fr 1fr minmax(60px, 1fr) / 1fr;
    &-img {
      max-width: 384px;
      img {
        width: 100%;
        height: 250px;
      }
    }
    &-title {
      font-size: 24px;
      line-height: 32px;
      color: #000;
      font-weight: 400;
      padding: 0 24px;
      display: flex;
      margin-top: 10px;
    }
    &-ingredients {
      font-weight: 400;
      line-height: 21.09px;
      color: #8c8c8c;
      padding: 0 24px;
    }
    &-bottom {
      display: flex;
      margin-top: 20px;
      padding: 0 24px;
      align-items: center;
    }
    &-button {
      width: 124px;
      height: 40px;
      background: #1890ff;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #fff;
      justify-self: start;
      border-radius: 2px;
      &:hover {
        background: #262626;
        transition: 0.5s linear;
      }
      svg {
        margin-left: 5px;
      }
    }
    &-price {
      margin-left: 32px;
      color: #000;
      font-size: 20px;
      font-weight: 700;
      line-height: 32px;
    }
  }
}
</style>
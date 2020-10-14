<template>
<div class="cart">
  <div class="cart__container">
    <div class="cart__content">
    <h3 class="cart__title">Корзина</h3>
    <div class="cart__close" @click="changeCartStatus(false)">
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16.0035 13L25.3506 3.65245C25.6077 3.39513 25.7496 3.05184 25.75 2.68578C25.75 2.31952 25.6081 1.97582 25.3506 1.71891L24.5315 0.900011C24.274 0.642084 23.9307 0.500824 23.5642 0.500824C23.1984 0.500824 22.8551 0.642084 22.5976 0.900011L13.2504 10.247L3.90285 0.900011C3.64573 0.642084 3.30224 0.500824 2.93598 0.500824C2.57012 0.500824 2.22663 0.642084 1.96951 0.900011L1.15 1.71891C0.616667 2.25225 0.616667 3.11973 1.15 3.65245L10.4974 13L1.15 22.3472C0.892683 22.6049 0.751016 22.9482 0.751016 23.3142C0.751016 23.6803 0.892683 24.0236 1.15 24.2811L1.96931 25.1C2.22642 25.3577 2.57012 25.4992 2.93577 25.4992C3.30203 25.4992 3.64553 25.3577 3.90264 25.1L13.2502 15.7529L22.5974 25.1C22.8549 25.3577 23.1982 25.4992 23.564 25.4992H23.5644C23.9305 25.4992 24.2738 25.3577 24.5313 25.1L25.3504 24.2811C25.6075 24.0238 25.7494 23.6803 25.7494 23.3142C25.7494 22.9482 25.6075 22.6049 25.3504 22.3474L16.0035 13Z" fill="black"/>
      </svg>
      </div>
      <h5 class="cart__empty" v-if="products.length === 0">Корзина пустая</h5>
    <div class="cart__body" v-else>
      <v-cart-item v-for="product in products" :key="product.id" :product='product'></v-cart-item>
    </div>
    <div class="cart__bottom">
      <p class="cart__total-price"> {{ totalPrice }} грн</p>
      <div class="cart__bottom-flex">
      <button class="cart__accept" @click="checkout">Оформить заказ</button>
      <button class="cart__cancel" @click="changeCartStatus(false)">Отмена</button>
    </div>
    </div>
  </div>
</div>
</div>
</template>

<script>
import CartItem from './v-cart-item'
export default {
name:'v-cart',
components:{
  'v-cart-item': CartItem
},
methods:{
  changeCartStatus(val){
    this.$store.commit('IS_CART_OPEN',val)
  },
  checkout(){
    console.log('RECEIPT')
    this.products.map((item)=>{
      console.log(`${item.name} --- ${item.price}грн --- ${item.quantity}шт`);
      
    })
    console.log(`Total price - ${this.totalPrice}`)
  }
 },
 computed:{
   products(){
     return this.$store.getters.products
   },
   totalPrice(){
     return this.$store.getters.totalPrice
   }
 }
}
</script>

<style lang='scss'>
.cart {
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  top: 0;
  left: 0;
  z-index: 10;

  &__container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100%;
    padding: 30px 20px;
  }

  &__content {
    background: #fff;
    max-width: 780px;
    height: 637px;
    padding: 40px 45px;
    border-radius: 5px;
    position: relative;
    overflow-y:auto;
    padding-bottom: 20px;
    @media screen and(max-width:1400px) {
      height: 510px;
    }
    @media screen and(max-width:490px) {
      padding: 20px 65px;
    }
    @media screen and(max-width:390px) {
      padding: 20px 25px;
    }
  }

  &__title {
    font-size: 36px;
    font-weight: 700;
    line-height: 42.19px;
    color: #000;
  }

  &__empty{
    text-align: center;
    font-size: 30px;
    margin-top: 20px;
    color:#000;
  }

  &__close {
    position: absolute;
    top: 45px;
    right: 45px;
    cursor: pointer;
    @media screen and(max-width:490px) {
      top: 30px;
      right: 30px;
    }
  }

  &__body {
    margin-top: 45px;
    @media screen and(max-width:550px) {
      margin-top: 15px;
    }
  }
  &__item {
    display: flex;
    align-items: center;
    border-bottom: 1px solid #d9d9d9;
    padding: 10px 0;
    @media screen and(max-width:550px) {
      flex-direction: column;
      justify-content: center;
    }
    &-name {
      line-height: 32px;
      font-weight: 400;
      color: #000;
      min-width: 200px;
      @media screen and (max-width:820px){
        width: 140px;
      }
       @media screen and(max-width:670px){
        min-width: 0;
        width: 120px;
      }
    }
    &-price {
      font-size: 20px;
      font-weight: 700;
      line-height: 32px;
      color: #000;
      margin-left: 235px;
      min-width: 110px;
      @media screen and(max-width:820px) {
        margin-left: 70px;
      }
      @media screen and(max-width:590px) {
        margin-left: 50px;
      }
      @media screen and(max-width:550px) {
        margin-left: 0;
        text-align: center;
      }
    }
    &-flex {
      margin-left: 47px;
      display: flex;
      align-items: center;
      
      @media screen and(max-width:550px) {
        margin-left: 0;
        margin-top: 10px;
      }
    }
    &-minus {
      width: 40px;
      height: 32px;
      border-radius: 2px;
      border: 1px solid #40a9ff;
      color: #40a9ff;
      &:hover {
        background: #40a9ff;
        color: #fff;
        transition: 0.4s linear;
      }
    }
    &-count {
      font-size: 16px;
      font-weight: 400;
      line-height: 24px;
      text-align: center;
      color: #000;
      margin: 0 13px;
      @media screen and(max-width:550px) {
        margin: 0 10px;
      }
    }
    &-plus {
      width: 40px;
      height: 32px;
      border-radius: 2px;
      border: 1px solid #40a9ff;
      color: #40a9ff;
      &:hover {
        background: #40a9ff;
        color: #fff;
        transition: 0.4s linear;
      }
    }
  }
  &__bottom {
    margin-top: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    &-flex {
      display: flex;
    }
    @media screen and(max-width:490px) {
      flex-direction: column;
      margin-top: 20px;
    }
  }
  &__total-price {
    width: 106px;
    height: 54px;
    background: #262626;
    border-radius: 5px;
    color: #fff;
    font-size: 20px;
    line-height: 23.44px;
    font-weight: 700;
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and(max-width:490px) {
      margin-bottom: 20px;
      width: 126px;
      height: 44px;
    }
  }

  &__accept {
    width: 149px;
    height: 40px;
    background: #1890ff;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 2px;
    font-size: 16px;
    font-weight: 400;
    margin: 0 18px;
    &:hover {
      background: #262626;
      transition: 0.5s linear;
    }
    @media screen and(max-width:490px) {
      width: 140px;
      margin: 0 10px;
    }
  }
  &__cancel {
    width: 88px;
    height: 40px;
    border: 1px solid #d9d9d9;
    border-radius: 2px;
    color: #595959;
    &:hover {
      background: #262626;
      color: #fff;
      transition: 0.5s linear;
    }
    @media screen and(max-width:490px) {
      width: 78px;
    }
  }
}
</style>
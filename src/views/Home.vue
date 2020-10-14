<template>
  <div class="home">
    <v-advertising></v-advertising>
    <section class="restraunts">
      <div class="restraunts__top">
        <h2 class="restraunts__title">Рестораны</h2>
      
      </div>
      <div class="restraunts__content">
        <v-restraunts-item
         v-for="(item) in restrauntsData" 
         :key="item.id" 
         :id="item.id" 
         :name="item.name" 
         :time="item.time" 
         :rating="item.rating" 
         :startPrice="item.startPrice" 
         :imgUrl='item.imgUrl'
         :category="item.category"
         ></v-restraunts-item>
      </div>
    </section>
  </div>
</template>

<script>
import Advertising from '../components/v-advertising'
import RestrauntsItem from '../components/v-restraunts-item'
export default {
  name: 'Home',
  components: {
    'v-advertising': Advertising,
    'v-restraunts-item': RestrauntsItem,
  },
  created() {
    this.$store.dispatch('getRestraunts')
  },
  computed:{
    restrauntsData(){
      return this.$store.state.home.restraunts
    }
  }
}
</script>

<style lang="scss">
.restraunts {
  padding-top: 58px;
  padding-bottom: 90px;
  &__top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media screen and (max-width: 600px) {
      flex-direction: column;
    }
  }
  &__title {
    font-size: 36px;
    font-weight: 700;
    color: #000;
    line-height: 42.19px;
  }
  

  &__content {
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
    &-img {
      max-width: 384px;
      img {
        width: 100%;
       height: 250px;
        object-fit: cover;
      }
    }
    &-about {
      padding: 0 24px;
      margin-top: 20px;
      display: flex;
      justify-content: space-between;
    }
    &-title {
      max-width: 259px;
      font-size: 24px;
      font-weight: 700;
      line-height: 32px;
      color: #000;
    }
    &-time {
      width: 55px;
      height: 22px;
      background: #262626;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      font-size: 12px;
      line-height: 20px;
      font-weight: 400;
      border-radius: 2px;
    }
    &-flex {
      display: flex;
      align-items: center;
      margin-top: 10px;
      padding: 0 24px;
    }
    &-stars {
      font-weight: 700;
      line-height: 32px;
      span {
        color: #ffc107;
        margin-left: 7px;
      }
    }
    &-price {
      margin-left: 26px;
      line-height: 32px;
      font-weight: 400;
      color: #8c8c8c;
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
      }
    }
    &-category {
      margin-left: 26px;
      line-height: 32px;
      font-weight: 400;
      color: #8c8c8c;
    }
  }
}
</style>

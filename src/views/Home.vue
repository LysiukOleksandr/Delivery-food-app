<template>
  <div class="home">
    <v-advertising></v-advertising>
    <section class="restraunts">
      <div class="restraunts__top">
        <h2 class="restraunts__title">Рестораны</h2>
        <form class="restraunts__search">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.9891 14.0205L10.424 9.45547C11.1324 8.53965 11.5156 7.41992 11.5156 6.24219C11.5156 4.83242 10.9654 3.51055 9.97051 2.51387C8.97559 1.51719 7.6502 0.96875 6.24219 0.96875C4.83418 0.96875 3.50879 1.51895 2.51387 2.51387C1.51719 3.50879 0.96875 4.83242 0.96875 6.24219C0.96875 7.6502 1.51895 8.97559 2.51387 9.97051C3.50879 10.9672 4.83242 11.5156 6.24219 11.5156C7.41992 11.5156 8.53789 11.1324 9.45371 10.4258L14.0188 14.9891C14.0321 15.0025 14.048 15.0131 14.0655 15.0203C14.083 15.0276 14.1018 15.0313 14.1207 15.0313C14.1396 15.0313 14.1584 15.0276 14.1759 15.0203C14.1934 15.0131 14.2093 15.0025 14.2227 14.9891L14.9891 14.2244C15.0025 14.211 15.0131 14.1951 15.0203 14.1776C15.0276 14.1601 15.0313 14.1414 15.0313 14.1225C15.0313 14.1035 15.0276 14.0848 15.0203 14.0673C15.0131 14.0498 15.0025 14.0339 14.9891 14.0205V14.0205ZM9.02656 9.02656C8.28125 9.77012 7.29336 10.1797 6.24219 10.1797C5.19102 10.1797 4.20313 9.77012 3.45781 9.02656C2.71426 8.28125 2.30469 7.29336 2.30469 6.24219C2.30469 5.19102 2.71426 4.20137 3.45781 3.45781C4.20313 2.71426 5.19102 2.30469 6.24219 2.30469C7.29336 2.30469 8.28301 2.7125 9.02656 3.45781C9.77012 4.20313 10.1797 5.19102 10.1797 6.24219C10.1797 7.29336 9.77012 8.28301 9.02656 9.02656Z"
              fill="#8C8C8C"
            />
          </svg>
          <input
            type="text"
            class="restraunts__input"
            placeholder="Поиск блюд и ресторанов"
          />
        </form>
      </div>
      <div class="restraunts__content">
        <v-restraunts-item
         v-for="(item) in getRestrauntsData" 
         :key="item.id" 
         :id="item.id" 
         :name="item.name" 
         :time="item.time" 
         :rating="item.rating" 
         :startPrice="item.startPrice" 
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
    getRestrauntsData(){
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
  &__search {
    width: 306px;
    height: 34px;
    border: 1px solid #bfbfbf;
    border-radius: 3px;
    display: flex;
    align-items: center;
    padding: 0 10px;
    @media screen and (max-width: 600px) {
      margin-top: 20px;
      height: 40px;
    }
  }
  &__input {
    width: 100%;
    height: 24px;
    margin-left: 5px;
    border: none;
    outline: none;
    font-weight: 300;
    color: #000;
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
        max-height: 250px;
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

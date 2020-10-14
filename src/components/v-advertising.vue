<template>
  <section class="advertising" >
    <h1 class="advertising__title">Онлайн-сервис доставки еды на дом</h1>
    <p class="advertising__subtitle">Блюда из любимого ресторана привезет курьер в перчатках, маске и с антисептиком</p>
  </section>
</template>

<script>
export default {
  name:'v-advertising',
}
</script>

<style lang='scss'>

.advertising {
  max-width: 1200px;
  margin: 0 auto;
  background: #fff1b8 url('../assets/vegetables.png') no-repeat 100% 0 / cover;
  margin-top: 40px;
  padding: 68px 68px 68px 70px;
  border-radius: 7px;
  @media screen and (max-width: 768px) {
    background: #fff1b8;
  }
  @media screen and (max-width: 500px) {
    padding: 30px 10px 30px 10px;
    text-align: center;
  }
  &__title {
    max-width: 538px;
    color: #302c34;
    font-size: 39px;
    font-weight: 700;
    line-height: 45.7px;
    @media screen and (max-width: 768px) {
      font-size: 25px;
    }
  }
  &__subtitle {
    max-width: 538px;
    color: #302c34;
    font-size: 24px;
    font-weight: 400;
    line-height: 28.13px;
    margin-top: 15px;
    @media screen and (max-width: 768px) {
      font-size: 20px;
    }
  }
}

</style>
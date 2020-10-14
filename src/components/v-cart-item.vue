<template>
  <div class="cart__item">
        <p class="cart__item-name">{{product.name}}</p>
        <span class="cart__item-price">{{product.price}} грн</span>
        <div class="cart__item-flex">
          <button class="cart__item-minus" @click="minusItemQuantity(product.index)" :disabled='product.quantity === 0'>-</button>
          <span class="cart__item-count">{{product.quantity}}</span>
          <button class="cart__item-plus" @click="plusItemQuantity(product.index)">+</button>
        </div>
      </div>
</template>

<script>
export default {
  name: 'v-cart-item',
  props:{
    product: Object
  },
  methods:{
    plusItemQuantity(index){
      this.$store.commit('PLUS_ITEM_QUANTITY', index)
    },
    minusItemQuantity(index){
      this.$store.commit('MINUS_ITEM_QUANTITY', index)
    }
  }
}
</script>
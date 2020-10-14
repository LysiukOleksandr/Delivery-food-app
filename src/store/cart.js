export default {
  state:{
    isCartOpen: false,
    items:[]
  },
  mutations:{
    IS_CART_OPEN(state,payload){
      state.isCartOpen = payload
    },
    PUSH_PRODUCT_TO_CART(state ,product){
      state.items.push({
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: 1
      })
    },
    INCREMENT_ITEM_QUANTITY(_,cartItem){
      cartItem.quantity++
    },
    PLUS_ITEM_QUANTITY(state,itemIndex){
      state.items[itemIndex].quantity++
    },
    MINUS_ITEM_QUANTITY(state,itemIndex){
      state.items[itemIndex].quantity--
    }
   
  },
  actions:{  
    addProductToCart({commit, state},product){
      
      const cartItem = state.items.find(item => item.id === product.id)
      if(!cartItem){
        commit('PUSH_PRODUCT_TO_CART', {id: product.id,name:product.name,price:product.price})
      }else{
        commit('INCREMENT_ITEM_QUANTITY',cartItem)
      }
    }
  },
  getters:{
    products(state){
      return state.items.map((cartItem,index)=>{
        const product = state.items.find(product => product.id === cartItem.id)
        return{
          id:product.id,
          name: product.name,
          price: product.price * cartItem.quantity,
          index,
          quantity: cartItem.quantity
        }
      })
    },
    totalPrice(state, getters){
      return getters.products.reduce((total, product)=> total + product.price,0)
    }
  }
}
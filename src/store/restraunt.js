import axios from 'axios'
export default{
  state:{
    restrauntDetails:{
    id: null,
    name: null,
    category: null,
    rating: null,
    startPrice: null,
    },
    items:[]
  },
  mutations:{
SET_RESTRAUNT_DATA(state,{restrauntDetails,items}){
    state.restrauntDetails = restrauntDetails;
    state.items = items
}
  },
  actions:{
    getRestrauntData({commit},{id}){
      axios.get(`http://localhost:3000/restraunts/${id}`)
      .then(({data})=>{
        const payload = {
          restrauntDetails:{
          id: data.id,
          name: data.name,
          category: data.category,
          rating: data.rating,
          startPrice: data.startPrice
          },
          items: data.items
        }
        commit('SET_RESTRAUNT_DATA',payload)

      }).catch((error)=>{
        console.log(error)
      })
    }
  },
  getters:{

  }
}
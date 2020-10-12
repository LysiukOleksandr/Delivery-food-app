import axios from 'axios'
import { SET_RESTRAUNTS_DATA } from './mutation-types';
export default{
  state:{
    restraunts:[]
  },
  mutations:{
    [SET_RESTRAUNTS_DATA](state,payload){
      state.restraunts = payload
    }
  },
  actions:{
    getRestraunts({commit}){
      axios.get('http://localhost:3000/restraunts')
      .then(({data})=>{
       
        console.log(data)
      commit(SET_RESTRAUNTS_DATA, data)
      }).catch((error)=>{
        console.log(error)
      })
    }
  },
  getters:{}
}
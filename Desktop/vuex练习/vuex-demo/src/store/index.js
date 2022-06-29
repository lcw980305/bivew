import Vue from "vue";
import Vuex from "vuex"
Vue.use(Vuex)
import axios from 'axios'

import classObj from './modules/classObj'
import user from './modules/user'
import book from './modules/books'
import getBooks from "./modules/getBook";

const store = new Vuex.Store({
    state: {
        name:'jony',
        age:25
      

       

       
    },
    mutations: {
        setName(state){
            state.name = 'tom'
        }
      
    },
    getters: {
        gAge(state){
            return state.age+2
        }
        // sum(state) {
        //     /*reduce(函数【函数的参数：累加值，数组的每一项】，初始值)   ===》返回的是total或者是累加值  */
        //     // return state.newBooks.reduce((total,item)=>{
        //     //   return total+=item.price
        //     // },0)
        //     return state.newBooks.reduce((total, item) => total + item.price, 0)

        // }
    },
    actions: {
        aSet(context,m){
            var n=1
            setInterval(() => {
              n+=m
              console.log(n);
            }, 500);
          }
       


    },
    modules:{
        classObj,
        user,
        book,
        getBooks
      }
})

export default store
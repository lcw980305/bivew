export default {
  namespaced: true,
  state: {
    class1: 'web67',
    class2:'web68'
  },
  actions:{
    MaSet(context,m){
      var n=1
      setInterval(() => {
        n+=m
        console.log(n);
      }, 500);
    }
  }
}
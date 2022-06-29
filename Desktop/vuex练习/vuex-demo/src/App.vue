<template>
  <div>
    111
    {{ $store.state.classObj.class }}
    <img :src="$store.state.user.userInfo.logo" alt="" />
    <button @click="btn">点击按钮修改图片</button>
    <p>{{ $store.state.user.userInfo.name }}</p>
    <hr />
    <Header></Header>
    <hr />
    <ul>
      <li v-for="(obj, index) in $store.state.getBooks.books" :key="index">
        <img :src="obj.img" alt="" />
        <p>名字:{{ obj.name }}</p>
        <p>价格:{{ obj.price }}</p>
      </li>
    </ul>
    <hr />
    <!-- computed:{{ total }}==={{ $store.getters.sum }} -->
    <p>商品的总价是:{{ $store.getters["book/sum"] }}</p>
    <hr />
    <h1>辅助函数的使用</h1>
    {{ $store.state.name }}==={{ name }} <br />
    {{ $store.state.age }}==={{ newage }}
    <h1>在模块中使用</h1>
    {{ $store.state.classObj.class1 }}==={{ class1 }}<br />
    {{ $store.state.classObj.class2 }}==={{ class2 }}
    <hr />
    <h1>在getter中使用</h1>
    {{ $store.getters.gAge }}==={{ gAge }}<br />
    {{ $store.getters["book/sum"] }}=={{ sum }}
    <hr />
    <h1>mapmutationsd的使用</h1>
    <button @click="btnFn">点击按钮修改name</button>
    <button @click="btnlogo">点击修改模块中logo</button>
    <hr />
    <h1>mapActions</h1>
    <input type="button" value="actions按钮" @click="actionsHandle" />
    <input type="button" value="actions按钮==模块" @click="actionsHandleM" />
  </div>
</template>
<script>
import Header from "./components/Header.vue";
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
export default {
  components: {
    Header,
  },
  async created() {
    console.log(this.$store.state.classObj.class);
    /* 调用actions中的函数 */
    this.$store.dispatch("getBooks/AgetBooks");
  },
  methods: {
    ...mapMutations(["setName"]),
    ...mapMutations("user", ["changeLogo"]),
    btnFn() {
      // this.$store.commit('setName')
      this.setName();
    },
    btnlogo() {
      //  this.$store.commit(
      //   'user/changeLogo',{
      //     newLogo:'https://www.runoob.com/wp-content/uploads/2016/02/react.png',
      //     second:'老三',
      //     uname:'sam'
      //   }
      // )
      this.changeLogo({
        newLogo: 'https://www.runoob.com/wp-content/uploads/2016/02/react.png',
        second: "老二",
        uname: "make",
      });
    },
    btn() {
      this.$store.commit("user/changeLogo", {
        newLogo: " https://www.runoob.com/wp-content/uploads/2016/02/react.png",
        second: "熊大",
        uname: "jack",
      });
    },
    actionsHandle() {
      /* 触发全局中的aSet */
      //this.$store.dispatch('aSet',1)
      this.aSet(2);
    },
    ...mapActions(["aSet"]),
    ...mapActions("classObj", ["MaSet"]),
    actionsHandleM() {
      // this.$store.dispatch('classObj/MaSet',3)
      this.MaSet(4);
    },
  },
  computed: {
    ...mapState(["name"]),
    ...mapState({ newage: "age" }),
    ...mapState("classObj", ["class1"]),
    ...mapState("classObj", { class2: "class1" }),
    ...mapGetters(["gAge"]),
    ...mapGetters("book", ["sum"]),
    total() {
      console.log(111);
      return 123;
    },
  },
};
</script>

<style lang="less" scoped>
img {
  width: 100px;
  height: 100px;
}
</style>>


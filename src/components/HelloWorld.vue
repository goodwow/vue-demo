<template>
  <div class="hello">
    <div>{{ nickName }}</div>
    <button v-on:click="reversedMessage">ok</button>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      nickName: "123"
    };
  },
  methods: {
    reversedMessage: function() {
      let postData = this.$qs.stringify({
        userCode: "admin"
      });
      this.$http({
        method: "post",
        url: "/getUserInfo",
        data: postData
      }).then(result => {
        let res = result.data;
        this.nickName = res;
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

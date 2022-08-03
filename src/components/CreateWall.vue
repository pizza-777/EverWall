<template>
  <div class="hello">
      <button @click="test()">Create Wall</button>    
      <div id="createWallInfo" v-html="createWallInfoMessage"></div>
  </div>  
</template>

<script lang="ts">
import Vue from 'vue';
import {createWall} from '@/api';

export default Vue.extend({
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  data() {
    return {
      createWallInfoMessage: null,
    };
  },
  methods: {
    async test() {
      const address: string = await createWall();
      this.createWallInfoMessage = `<a href="/#/chat/${address}">New wall created</a>`;   
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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

<template>
  <div class="hello">
      <b-button variant="outline-primary" @click="createWall()">Create Wall</b-button>    
      <div id="createWallInfo" class="mt-3" v-html="createWallInfoMessage"></div>
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
    async createWall() {
      const address: string | undefined = await createWall();
      if(typeof address === 'undefined') return
      this.createWallInfoMessage = `<a href="/#/wall/${address}">New wall</a> created`;   
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

<template>
  <div>
      <b-button variant="outline-primary" @click="createWall()">Create Wall</b-button>    
      <div id="createWallInfo" class="mt-3" v-html="createWallInfoMessage"></div>
  </div>  
</template>

<script lang="ts">
import Vue from 'vue';
import {createWall, genRandomAddress} from '@/api';

export default Vue.extend({
  name: 'CreateWall',
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
      // const address: string | undefined = await createWall();
      const address: string = genRandomAddress();
      if(typeof address === 'undefined') return
      this.createWallInfoMessage = `<a href="/#/wall/${address}">New wall</a> created`;   
    },
  },
});
</script>

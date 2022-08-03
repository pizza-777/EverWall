<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <CreateWall msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import CreateWall from '@/components/CreateWall.vue'; // @ is an alias to /src

export default Vue.extend({
  name: 'HomeView',
  components: {
    CreateWall,
  },
});
</script>

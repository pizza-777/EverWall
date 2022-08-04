<template>
  <div>
    <b-container>
      <b-row class="vh-100 text-center" align-v="center">
        <b-col> </b-col>
        <b-col>
          <CreateWall msg="Everscale Walls" />
        </b-col>
        <b-col></b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import CreateWall from "@/components/CreateWall.vue"; // @ is an alias to /src

export default Vue.extend({
  name: "HomeView",
  components: {
    CreateWall,
  },
});
</script>

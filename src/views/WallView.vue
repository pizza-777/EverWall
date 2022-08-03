<template>
  <div class="about">
    <h1>This is an title of wall</h1>
     {{this.$route.params.chatAddress}}
     <textarea v-model="message"></textarea>
     <button @click="submit()">submit</button>
      <ul>        
        <li v-for="post in posts" :key="post.message">
          {{post.message}}
        </li>
      </ul>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import {sendMessage, getMessages} from '@/api';

export default Vue.extend({
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  data() {
    return {
      message: '',
      posts: [],
    };
  },
  methods: {
    async submit() {
      sendMessage(this.message, this.$route.params.chatAddress).then(() => {
        this.message = '';
      });
    },
  },
  async mounted() {
    this.posts = await getMessages(this.$route.params.chatAddress);
    console.log(this.posts);
  },
});
</script>
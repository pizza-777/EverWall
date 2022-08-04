<template>
  <div class="container">
    <h1>This is the title of wall</h1>
     <div class="text-primary">Wall contract: {{this.$route.params.chatAddress}}</div>
     <b-form>
     <b-form-group>
     <b-form-textarea class="mt-3 mb-3" placeholder="Write something ... "  v-model="message"></b-form-textarea>
     </b-form-group>
    
     <b-button variant="outline-primary" @click="submit()">submit</b-button>
    
     </b-form>
      <b-list-group class="mt-5">        
        <b-list-group-item v-for="post in posts" :key="post.message">
          <div>{{post.message}}</div>
          <br>
          <div class="text-secondary d-flex justify-content-between">
            <div>From: {{post.sender.slice(0,6) + '...'+ post.sender.slice(60)}}</div>
            <div>{{new Date(post.timestamp * 1000).toLocaleDateString("ru-RU") + ' ' + new Date(post.timestamp * 1000).toLocaleTimeString("en-US")}}</div>
          </div>
        </b-list-group-item>
      </b-list-group>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import {sendMessage, getMessages} from '@/api';

export default Vue.extend({
  name: 'WallView',
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
      if(this.message === '') {
        alert('Please, write something');
        return;
      }
      sendMessage(this.message, this.$route.params.chatAddress).then(() => {
        this.message = '';
        //refresh posts
       getMessages(this.$route.params.chatAddress).then(posts => {
         this.posts = posts;
       });
      });
    },
  },
  async mounted() {
    this.posts = await getMessages(this.$route.params.chatAddress);
    console.log(this.posts);
  },
});
</script>
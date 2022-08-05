<template>
<div> 
  <div><LoginLogout :authProp="authTrigger"/></div>
   <nav class="text-center mt-1">
      <router-link to="/">Home</router-link> 
    </nav> 
 <div class="container mt-5">   
     <div class="text-primary">Wall address: {{this.$route.params.chatAddress}}</div>
     <b-form class="mt-3">
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
            <div>From: {{post.sender.slice(0,6) + '...'+ post.sender.slice(62)}}</div>          
            <div>
              <a :href="'./#/post/' + post.id">
                {{new Date(post.timestamp * 1000).toLocaleDateString("ru-RU") + '  ' + new Date(post.timestamp * 1000).toLocaleTimeString("en-US")}}
              </a>
            </div>
          </div>
        </b-list-group-item>
      </b-list-group>
  </div>
</div>
 
</template>
<script lang="ts">
import Vue from 'vue';
import {sendMessage, getPosts} from '@/api';
import LoginLogout from '@/components/LoginLogout.vue'; 

export default Vue.extend({
  name: 'WallView',
  props: {
    msg: String,
  },
  data() {
    return {
      message: '',
      posts: [],
      authTrigger: false,
    };
  },
  methods: {
    async submit() {
      if(this.message === '') {
        alert('Please, write something');        
        return;
      }
      sendMessage(this.message, this.$route.params.chatAddress).then(() => {
        this.authTrigger= this.authTrigger ? false : true;
        this.message = '';
        //refresh posts
       getPosts(this.$route.params.chatAddress).then(posts => {
        if(typeof posts === 'undefined'){
          alert('Something went wrong');
        }else{
         this.posts = posts;
        }
       });
      });
    },
  },
  async mounted() {
    this.posts = await getPosts(this.$route.params.chatAddress);
    console.log(this.posts);
  },
  components:{
    LoginLogout
  }
});
</script>
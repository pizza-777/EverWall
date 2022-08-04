<template>
    <div>
         <div class="container mt-5">   
     <div class="text-primary">Post ID: {{this.$route.params.messageId}}</div>
        <b-list-group class="mt-5">        
        <b-list-group-item v-for="post in posts" :key="post.message">
          <div>{{post.message}}</div>
          <br>
          <div class="text-secondary d-flex justify-content-between">
            <div>From: {{post.sender.slice(0,6) + '...'+ post.sender.slice(62)}}</div>          
            <div>
              <a :href="'#/message/' + post.id">
                {{new Date(post.timestamp * 1000).toLocaleDateString("ru-RU") + '  ' + new Date(post.timestamp * 1000).toLocaleTimeString("en-US")}}
              </a>
            </div>
          </div>
        </b-list-group-item>
      </b-list-group>
    </div>
    </div>
</template>
<script>
import Vue from 'vue';
import   {getMessage} from '@/api';

export default Vue.extend({
  name: 'LoginLogout',
  data() {
    return {
      posts: null
    };
  },
    mounted(){
        getMessage(this.$route.params.messageId).then(post => {
            if(!post){
                this.posts = 'Message not found';
            }else{
                this.posts = [post];
            }        
        });
    }    
});
</script>
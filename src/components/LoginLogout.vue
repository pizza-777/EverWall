<template>
<div>
<nav class="text-right mt-2 " style="text-align: right">
      <span @click="auth()" class="btn-link text-primary" style="cursor: pointer; padding-right: 2em">{{ls}}</span> 
</nav> 
</div>
</template>

<script>
import Vue from 'vue';
import   {subscriber, authState, login, logout} from '@/api';

export default Vue.extend({
  name: 'LoginLogout',
  data() {
    return {
      ls: null
    };
  },
  methods: {
    subscriber(){
      subscriber().then(res => {
        this.ls = res.data.username;
      });
    },
    async auth() {           
      
       if((await authState()) === false){
        await login();
        const auth = await authState()
        console.log('auth: ', auth);
        if(typeof auth === 'string'){
          this.ls = `${auth.slice(0,6)}...${auth.slice(62)} ⎆`
        }
        
          // login().then(()=>{
          //   const auth = await authState()
          //   this.ls = `${auth.slice(0,6)}...${auth.slice(62)} ⎆`
          // });

       }else{
          logout().then(()=>{
             this.ls = 'Connect'
          });
       }        
    }
  },
  async created(){
    const auth = await authState()
    this.ls = ((auth) === false) ?  'Connect' : `${auth.slice(0,6)}...${auth.slice(62)} ⎆`
  },
  updated(){
    console.log('updated');
  }

});
</script>
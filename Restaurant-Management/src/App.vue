<template>

 <RouterView />
</template>

<script>
import { RouterView } from 'vue-router';

export default {
  name: 'App',
  components:{
    RouterView,

}
}
</script>

<style scoped>
#app {
margin:0;
padding: 0;
}
</style>

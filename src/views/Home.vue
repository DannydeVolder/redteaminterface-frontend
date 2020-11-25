<template>
  <v-container fluid class="pa-0 ma-0">
    <Header/> 
    <router-view class="component"/>
  </v-container>
</template>

<script>
import Header from '@/components/Header.vue'
export default {
  name: 'Home',
  components: {
    Header,
  }
}
</script>

<style scoped>
    .component {
      position: absolute !important;
      top: 64px;
      /* margin-top: 64px !important;
      margin-left: 280px !important; */
      padding: 0px !important;
    }
</style>

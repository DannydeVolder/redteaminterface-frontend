<template>
  <v-app-bar fixed flat id="navbar">
      <v-spacer></v-spacer>
    <v-toolbar-title>
          <router-link to="/" class="homeLink">
              <h3 style="color: red;font-family: 'Press Start 2P', cursive;">Red Team Interface</h3>
                  </router-link>
    </v-toolbar-title>
    
 <v-spacer />
  </v-app-bar>
</template>

<script>
export default {

  data(){
    return {

    }
  },

  methods:{

  },

  computed:{
  }
}
</script>

<style scoped>

    .link{
        text-decoration: none;
    }
    .linkDiv{
        width: 100px;
        height: 63px;
        text-align: center;
        font-size: 1.3em;
        
    }

    .linkText{
      color: white;
    }
    .theme--light.v-app-bar.v-toolbar.v-sheet {
        background-color: black;
    }
    .v-app-bar{
      color: white;
            border: 1px solid red !important;
            border-left: none !important;
            border-right: none !important;
    border-top: none !important;
    border-width: 1px !important;
    }
    #navbar {
     
    position: absolute;
    /*z-index: 1;*/
    width: 100%;

    }

    span {
    font-size: 1.3em;
    }
        .homeLink{
        display: inline-block;
        width: 100%;
        text-decoration: none;
        color: white;
        text-align: left;

    }
</style>
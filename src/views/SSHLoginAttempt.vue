<template>
  <v-container fluid>

    <v-card style="color: #c7c7c7; width: 95%; margin-top: 60px; margin-left: 2.5%; margin-right: 2.5%;">

            <v-card-title style="font-size: 1.4em;font-weight: bold" class="justify-center" >SSH Login Attempt attack</v-card-title>

            <v-card-text style="color: #c7c7c7; font-size: 1.2em; width: 70%; margin: 0 auto">
                <p>In cryptography, a brute-force attack consists of an attacker submitting many passwords or passphrases with the hope of eventually guessing a combination correctly. The attacker systematically checks all possible passwords and passphrases until the correct one is found.</p> 
                <p>By executing this attack, multiple brute-force attempts will be made against an important SSH account.</p>
            </v-card-text>

            <v-divider style="width: 80%; margin: 0 auto;"></v-divider>

           
                <v-card-text style="width: 50%; margin: 0 auto; margin-bottom: 40px;" >
                    <v-row
                        align="center"
                        justify="center"
                    >
                        <v-spacer>
                        </v-spacer>
                        <v-btn @click="executeAttack()" color="error" class="black--text" style="font-weight: bold; font-size: 1.3em; height: 80px; width: 300px;">
                            EXECUTE ATTACK
                        </v-btn>
                        <v-spacer>
                        </v-spacer>
                    </v-row>
                </v-card-text>
        </v-card>
                <div class="text-center ma-2">
          <v-snackbar v-model="alert.show" class="alert" :color="`${alert.type}`">
            <v-row>
            <span style="margin-left: 10px !important; margin-top: 10px !important;">{{alert.message}}</span>
            <v-spacer></v-spacer>
              <v-btn
                @click="clearAlert"
                fab small
               
              >
                <v-icon>mdi-close</v-icon>
              </v-btn>
              </v-row>
            </v-snackbar>
        </div>
  </v-container>
</template>

<script>
import API  from '../axios/axios';
import { mapState, mapActions } from 'vuex'
export default {

    methods:{
        ...mapActions({
            clearAlert: 'alert/clear' 
        }),

        executeAttack(){
            try{
                API.executeSSHBruteForce().then(response =>{
                    if(response.status === 200){
                        this.$store.dispatch("alert/success", 'Attack executed!')
                    }
                });

            }
            catch(e){
                console.error(e);
            }
        }
    },
    
    computed:{
        ...mapState({
            alert: state => state.alert
        }),
    },
    watch:{
        $route (){
            this.clearAlert();
        },
    }
}
</script>

<style scoped>
    .theme--light.v-card{
        background-color: #303030;
    }
    .theme--light.v-divider {
        border-color: #ad0000 !important; 
    }
</style>
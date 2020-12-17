<template>
  <v-container fluid>

    <v-card style="color: #c7c7c7; width: 95%; margin-top: 60px; margin-left: 2.5%; margin-right: 2.5%;">

            <v-card-title style="font-size: 1.4em;font-weight: bold" class="justify-center" >Attack 1: SQL Injection</v-card-title>

            <v-card-text style="color: #c7c7c7; font-size: 1.2em;">
                <p>This attack performs SQL Injection on a machine, the results of which show up on the SIEM.</p>
                <p>This attack gets executed every 2 minutes and will stop by clicking "Stop attack".</p>
            </v-card-text>

            <v-divider style="width: 80%; margin: 0 auto;"></v-divider>

           
                <v-card-text style="width: 50%; margin: 0 auto; margin-bottom: 40px;" >
                    <v-row
                        align="center"
                        justify="center"
                    >
                        <v-spacer>
                        </v-spacer>
                        <v-btn v-if="!attackExecuting" @click="executeAttackAndStartTimer()" color="error" class="black--text" style="font-weight: bold; font-size: 1.3em; height: 80px; width: 300px;">
                            EXECUTE ATTACK
                        </v-btn>
                        <v-btn v-else @click="stopAttack()" color="error" class="black--text" style="font-weight: bold; font-size: 1.3em; height: 80px; width: 300px;">
                            STOP ATTACK
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
    
    data(){
        return{
            interval: '',
            attackExecuting: false,
        }
    },

    //Executes the attack every 2 minutes. Change the amount of milliseconds to increase/decrease the attack time.


    methods:{
        ...mapActions({
            clearAlert: 'alert/clear' 
        }),

        executeAttackAndStartTimer(){
            this.executeAttack();
            this.interval = '',
            this.interval = setInterval(function(){
                this.executeAttack()
            }, 120000);
        },

        executeAttack(){
            try{
                API.executeSQLI().then(response =>{
                    if(response.status === 200){
                        this.attackExecuting = true;
                        this.$store.dispatch("alert/success", 'Attack executed!')
                    }
                    else{
                        this.$store.dispatch("alert/error", 'Something went wrong.')
                    }
                });

            }
            catch(e){
                console.error(e);
            }
        },

        stopAttack(){
            try{
                API.executeSQLI().then(response =>{
                    if(response.status === 200){
                        clearInterval(this.interval);
                        this.attackExecuting = false;
                        this.interval = '';
                        this.$store.dispatch("alert/success", 'Attack has been stopped!')
                    }
                    else{
                        this.$store.dispatch("alert/error", 'Something went wrong.')
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
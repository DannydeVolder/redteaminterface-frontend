<template>
  <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col
            cols="12"
            sm="8"
            md="4"
          >
            <v-card class="elevation-12">
              <v-toolbar
                color="black"
                dark
                flat
              >
                <v-toolbar-title style="text-align: center">
                    <span style="color: red; font-size: 0.8em; font-family: 'Press Start 2P', cursive;">Red team interface - Sign In</span>

                </v-toolbar-title>
              </v-toolbar>

                <v-card-text>
                  <v-form>
                    <v-text-field
                      v-model="username"
                      :error-messages="usernameErrors"
                      label="Username"
                      prepend-icon="person"
                      required
                      @input="$v.username.$touch()"
                      @blur="$v.username.$touch()"
                    />

                    <v-text-field
                      v-model="password"
                      :error-messages="passwordErrors"
                      id="password"
                      label="Password"
                      name="password"
                      prepend-icon="lock"
                      type="password"
                      required
                      @input="$v.password.$touch()"
                      @blur="$v.password.$touch()"
                    />
                  </v-form>
                </v-card-text>
              
              <v-card-actions>
                <v-spacer />
                <v-btn :disabled="loading" @click="login" color="primary">Login</v-btn>
              </v-card-actions>


            </v-card>
          </v-col>
        </v-row>
        <div class="text-center ma-2">
          <v-snackbar v-model="alert.show" class="alert" :color="`${alert.type}`">
            {{alert.message}}
              <v-btn
                @click="clearAlert"
                fab small
              >
                <v-icon>mdi-close</v-icon>
              </v-btn>
            </v-snackbar>
        </div>
      </v-container>
      
</template>

<script>
  import { required, maxLength} from 'vuelidate/lib/validators';
  import { mapState, mapActions } from 'vuex'
  export default {


    data() {
      return{
        username: '',
        password: '',
        loading: false,
      }
    },

    methods:{
      ...mapActions({
          clearAlert: 'alert/clear' 
      }),

      async login(){
        this.loading = true
        this.$v.$touch(); //it will validate all fields
        if (!this.$v.$invalid){
            const userObj = {
                Username: this.username,
                Password: this.password,

            }

            var result = await this.$store.dispatch("auth/signin", userObj);

            if(result == 1){
                this.loading = false
                this.$router.push('/')
            }
            if(result == 0){
                this.$store.dispatch("alert/error", 'Username or password incorrect.')
                this.loading = false
            }
            

          
          }
        },
    },





    validations: {
      username: { required, maxLength: maxLength(50)},
      password: { required, maxLength: maxLength(99)},
    },

    computed: {
      ...mapState({
          alert: state => state.alert
      }),

      usernameErrors(){
        const errors = [];
        if(!this.$v.username.$dirty) return errors;
        !this.$v.username.maxLength &&
          errors.push("Username can be 100 characters at maximum.");
        !this.$v.username.required && errors.push("Entering a username is required.");
        return errors;
      },

      passwordErrors(){
        const errors = [];
        if(!this.$v.password.$dirty) return errors;
        !this.$v.password.maxLength &&
          errors.push("Password can be 150 characters at maximum.");
        !this.$v.password.required && errors.push("Entering a password is required.");
        return errors;
      }
    },
    watch: {
      $route (){
          this.clearAlert();
      },

    
    }
  }
</script>

<style scoped>
    .alert{
      margin-bottom: 250px !important;
    }
    .validationError{
        color: red !important
    }
</style>


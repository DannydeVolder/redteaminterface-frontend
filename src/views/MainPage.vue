<template>
    <v-container fluid>
        <v-card style="color: #c7c7c7; width: 95%; margin-top: 60px; margin-left: 2.5%; margin-right: 2.5%;">
            <v-card-title style="font-size: 1.4em;font-weight: bold" class="justify-center" >Attacks to be executed</v-card-title>
            <v-card-text style="color: #c7c7c7">
                Below is a list of attacks that can be performed, separated into categories. Clicking on an attack will take you to a page explaining what the attack does, and where the attack can be executed.
            </v-card-text>
            <v-divider style="width: 80%; margin: 0 auto;"></v-divider>
            <v-card-title style="font-size: 1.2em;font-weight: bold; margin-top: 20px;" class="justify-center" >Low impact</v-card-title>
            <v-divider style="width: 80%; margin: 0 auto;"></v-divider>
            <v-card-title style="font-size: 1.2em;font-weight: bold; margin-top: 20px;" class="justify-center" >Medium impact</v-card-title>
                        <v-divider style="width: 80%; margin: 0 auto;"></v-divider>
            <v-card-title style="font-size: 1.2em;font-weight: bold; margin-top: 20px;" class="justify-center" >High impact</v-card-title>
        </v-card>
    </v-container>

</template>

<script>
export default {

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
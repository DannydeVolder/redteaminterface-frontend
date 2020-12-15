<template>
    <v-container fluid>
        <v-card style="color: #c7c7c7; width: 95%; margin-top: 60px; margin-left: 2.5%; margin-right: 2.5%;">

            <v-card-title style="font-size: 1.4em;font-weight: bold" class="justify-center" >Attacks to be executed</v-card-title>

            <v-card-text style="color: #c7c7c7">
                Below is a list of attacks that can be executed, separated into phases. 
            </v-card-text>

            <v-divider style="width: 80%; margin: 0 auto;"></v-divider>

            <v-card-title style="font-size: 1.2em;font-weight: bold; margin-top: 40px; color: lightgreen" class="justify-center" >Phase 1: Introduction to the blue team NMAP and Bruteforce</v-card-title>
                <v-card-text style="width: 50%; margin: 0 auto; margin-bottom: 40px;" >
                    <v-row
                        align="center"
                        justify="center"
                    >
                        <v-spacer>
                        </v-spacer>
                        <v-btn to="/nmapattack" class="red--text" style="font-weight: bold">
                            Attack 1: PortScan (Nmap)
                        </v-btn>
                        <v-spacer>
                        </v-spacer>
                        <v-btn to="/bruteforce" class="red--text" style="font-weight: bold">
                            Attack 2: BruteForce (SSH login)
                        </v-btn>
                        <v-spacer>
                        </v-spacer>
                    </v-row>
                </v-card-text>

            <v-divider style="width: 80%; margin: 0 auto;"></v-divider>

            <v-card-title style="font-size: 1.2em;font-weight: bold; margin-top: 40px; color: orange" class="justify-center" >Phase 2: First real threats?</v-card-title>
                <v-card-text style="width: 50%; margin: 0 auto; margin-bottom: 40px;" >
                    <v-row
                        align="center"
                        justify="center"
                    >
                        <v-spacer>
                        </v-spacer>
                        <v-btn to="/sqli" class="red--text" style="font-weight: bold">
                            Attack 1: SQL Injection
                        </v-btn>

                        <v-spacer>
                        </v-spacer>
                        <v-btn to="/ddos" class="red--text" style="font-weight: bold">
                            Attack 2: DDOS
                        </v-btn>
                        <v-spacer>
                        </v-spacer>
                    </v-row>
                </v-card-text>

            <v-divider style="width: 80%; margin: 0 auto;"></v-divider>

            <v-card-title style="font-size: 1.2em;font-weight: bold; margin-top: 40px; color: red" class="justify-center" >Phase 3: Something bad is going on…</v-card-title>
                <v-card-text style="width: 50%; margin: 0 auto; margin-bottom: 40px;" >
                    <v-row
                        align="center"
                        justify="center"
                    >
                        <v-spacer>
                        </v-spacer>
                        <v-btn to="/ransomware" class="red--text" style="font-weight: bold">
                            Attack 1: RansomWare
                        </v-btn>

                        <v-spacer>
                        </v-spacer>
                    </v-row>
                </v-card-text>
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
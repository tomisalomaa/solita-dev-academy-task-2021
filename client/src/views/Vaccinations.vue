<template>
  <div class="vaccinations">
    <h1>This page is for overall general vaccination data</h1>
    <v-container>
      <v-col sm="4" class="pa-3" v-for="vaccination in vaccinations" :key="vaccination._id">
        <v-card>
          <v-card-text>
            <p>{{ vaccination }}</p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-container>
  </div>
</template>

<script>
  import API from "../api"
  export default {
    name: 'Vaccinations',
    data() {
      return {
        vaccinations: []
      }
    },
    async created() {
      this.vaccinations = await API.getAllVaccinations()
    }
  }
</script>

<template>
  <div class="antiqua">
    <h1>This page is for Solar Buddhica data</h1>
    <v-container>
      <v-col sm="4" class="pa-3" v-for="solar in solars" :key="solar._id">
        <v-card>
          <v-card-text>
            <p>{{ solar }}</p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-container>
  </div>
</template>

<script>
  import API from "../api"
  export default {
    name: 'Solarbuddhicas',
    data() {
      return {
        solars: []
      }
    },
    async created() {
      this.solars = await API.getAllSolarbuddhicas()
    }
  }
</script>

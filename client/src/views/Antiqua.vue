<template>
  <div class="antiqua">
    <h1>This page is for Antiqua data</h1>
    <v-container>
      <v-col sm="4" class="pa-3" v-for="antiqua in antiquas" :key="antiqua._id">
        <v-card>
          <v-card-text>
            <p>{{ antiqua }}</p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-container>
  </div>
</template>

<script>
  import API from "../api"
  export default {
    name: 'Antiquas',
    data() {
      return {
        antiquas: []
      }
    },
    async created() {
      this.antiquas = await API.getAllAntiquas()
    }
  }
</script>
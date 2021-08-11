<template>
  <div class="zerpfy">
    <h1>This page is for Zerpfy data</h1>
    <v-container>
      <v-col sm="4" class="pa-3" v-for="zerpfy in zerpfys" :key="zerpfy._id">
        <v-card>
          <v-card-text>
            <p>{{ zerpfy }}</p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-container>
  </div>
</template>

<script>
  import API from "../api"
  export default {
    name: 'Zerpfys',
    data() {
      return {
        zerpfys: []
      }
    },
    async created() {
      this.zerpfys = await API.getAllZerpfys()
    }
  }
</script>
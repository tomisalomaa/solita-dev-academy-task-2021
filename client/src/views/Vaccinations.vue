<template>
  <div class="vaccinations">
    <v-container fluid>
      <v-row class="mb-12 mt-2" justify="center"><h1>Vaccinations administered up to {{ date }}</h1></v-row>
      <v-row v-if="loaded">
        <v-spacer />
        <v-col md="5" align="center">
          <h3>Vaccinations administered by date</h3>
          <Barchart :chartData="vaccinationAmounts" :chartLabels="vaccinationDates" />
        </v-col>
        <v-spacer />
        <v-col md="3" align="center">
          <h3>Vaccinations received by gender</h3>
          <Piechart :chartData="vaccinationsByGender" :chartLabels="genders" />
        </v-col>
        <v-spacer />
      </v-row>
    </v-container>
  </div>
</template>

<script>
  import API from "../api"
  import Barchart from "../components/Barchart.vue"
  import Piechart from "../components/Piechart.vue"

  export default {
    components: { Barchart, Piechart },
    name: 'Vaccinations',
    data() {
      return {
        date: new Date().toISOString().substr(0, 10),
        loaded: false,
        apiDownload: [],
        vaccinationDates: [],
        vaccinationAmounts: [],
        vaccinationsByGender: [],
        genders: []
      }
    },
    async created() {
      this.apiDownload = await API.getVaccinationsPerDay()
      this.vaccinationDates = this.apiDownload.map(date => date._id)
      this.vaccinationAmounts = this.apiDownload.map(date => date.vaccinationsPerDay)
      this.apiDownload = await API.getVaccinationsByGender()
      this.vaccinationsByGender = this.apiDownload.map(amount => amount.amountVaccinatedByGender)
      this.genders = this.apiDownload.map(gender => gender._id)
      this.loaded = true
    }
  }
</script>

<style>

</style>
<template>
  <div class="home">
    <v-container fluid>
        <v-row class="mb-12 mt-2" justify="center"><h1>Welcome to Vaccination Data Central</h1></v-row>
    </v-container>
    <v-container fluid>
          <v-row v-if="loaded">
            <v-spacer />
            <v-col md="5" align="center">
              <h4 class="mb-4">Overall vaccination orders up to {{date}}</h4>
              <v-simple-table>
                  <thead>
                    <tr>
                      <th class="text-center">
                        Total amount of orders
                      </th>
                      <th class="text-center">
                        Potential injections from orders
                      </th>
                      <th class="text-center">
                        Injections administered
                      </th>
                      <th class="text-center">
                        Unused and potentially expired injections
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="text-center">{{ totalOrders }}</td>
                      <td class="text-center">{{ totalInjections }}</td>
                      <td class="text-center">{{ vaccinations }}</td>
                      <td class="text-center">{{ totalExpired }}</td>
                    </tr>
                  </tbody>
                </v-simple-table>
            </v-col>
            <v-spacer />
          </v-row>
          <v-row v-if="loaded" class="mt-8">
            <v-spacer />
              <v-col md="3" align="center">
                <h4 class="mb-4">Orders by healthcare district</h4>
                <Piechart :chartData="this.totalOrdersByDist" :chartLabels="this.healthcareDists" />
            </v-col>
            <v-col md="3" align="center">
                <h4 class="mb-4">Injections by healthcare district</h4>
                <Piechart :chartData="this.totalInjectionsByDist" :chartLabels="this.healthcareDists" />
            </v-col>
            <v-spacer />
          </v-row>
    </v-container>
  </div>
</template>

<script>
  import API from "../api"
  import Piechart from "../components/Piechart.vue"

  export default {
    components: { Piechart },
    name: 'Home',
    data() {
      return {
        date: new Date().toISOString().substr(0, 10),
        loaded: false,
        apiDownload: [],
        totalOrders: 0,
        totalInjections: 0,
        vaccinations: 0,
        totalExpired: 0,
        healthcareDists: [],
        totalInjectionsByDist: [],
        totalOrdersByDist: []
      }
    },
    methods: {
      fillTotalsByDist: function(apiRes) {
        this.totalOrders = this.totalOrders + apiRes.length
        apiRes.forEach(element => {
          this.totalInjections += element.injections
          for (let i=0; i < this.healthcareDists.length; i++) {
            if (this.healthcareDists[i] == element.healthCareDistrict) {
              this.totalInjectionsByDist[i] += element.injections
              this.totalOrdersByDist[i] += 1
            }
          }
        })
      }
    },
    async created() {
      this.apiDownload = await API.getAntiquaDistricts()
      this.healthcareDists = this.apiDownload.map(dist => dist._id)
      for (let i=0; i<this.healthcareDists.length; i++) {
        this.totalInjectionsByDist.push(0)
        this.totalOrdersByDist.push(0)
      }

      this.apiDownload = await API.getAllAntiquas()
      this.fillTotalsByDist(this.apiDownload)

      this.apiDownload = await API.getAllSolarbuddhicas()
      this.fillTotalsByDist(this.apiDownload)

      this.apiDownload = await API.getAllZerpfys()
      this.fillTotalsByDist(this.apiDownload)

      this.apiDownload = await API.getAllVaccinations()
      this.vaccinations = this.apiDownload.length
      this.totalExpired = this.totalInjections - this.vaccinations

      this.loaded = true
    }
  }
</script>
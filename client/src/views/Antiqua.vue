<template>
  <div class="antiqua">
    <v-container fluid>
        <v-row class="mb-12 mt-2" justify="center"><h1>Data on Antiqua vaccinations up to {{ date }}</h1></v-row>
    </v-container>
    <v-container fluid>
          <v-row v-if="loaded">
            <v-spacer />
            <v-col md="4" align="center">
              <h3>Overall Antiqua vaccination orders</h3>
              <v-simple-table>
                  <thead>
                    <tr>
                      <th class="text-center">
                        Total amount of orders
                      </th>
                      <th class="text-center">
                        Ordered injections
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="text-center">{{ antiquas }}</td>
                      <td class="text-center">{{ totalInjections }}</td>
                    </tr>
                  </tbody>
                </v-simple-table>
            </v-col>
            <v-spacer />
          </v-row>
          <v-row class="mb-6 mt-12" justify="center">
            <h3>Orders total vs injections acquired total</h3>
          </v-row>
          <v-row v-if="loaded">
            <v-spacer />
              <v-col md="3" align="center">
              <h4>Orders</h4>
              <Piechart :chartData="this.ordersByDist" :chartLabels="this.healthcareDists" />
            </v-col>
            <v-col md="3" align="center">
              <h4>Injections</h4>
              <Piechart :chartData="this.injectionsByDist" :chartLabels="this.healthcareDists" />
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
    name: 'Antiquas',
    data() {
      return {
        date: new Date().toISOString().substr(0, 10),
        apiDownload: [],
        loaded: false,
        antiquas: 0,
        totalInjections: 0,
        injectionsByDist: [],
        healthcareDists: [],
        ordersByDist: []
      }
    },
    async created() {
      this.apiDownload = await API.getAntiquaDistricts()
      this.healthcareDists = this.apiDownload.map(dist => dist._id)
      this.ordersByDist = this.apiDownload.map(dist => dist.ordersByDistrict)

      for (var i=0; i<this.healthcareDists.length; i++) {
        this.injectionsByDist.push(0)
      }

      this.apiDownload = await API.getAllAntiquas()
      this.antiquas = this.apiDownload.length
      this.apiDownload.forEach(element => {
        this.totalInjections += element.injections
        switch(element.healthCareDistrict) {
          case this.healthcareDists[0]:
            this.injectionsByDist[0] += element.injections
            break;
          case this.healthcareDists[1]:
            this.injectionsByDist[1] += element.injections
            break;
          case this.healthcareDists[2]:
            this.injectionsByDist[2] += element.injections
            break;
          case this.healthcareDists[3]:
            this.injectionsByDist[3] += element.injections
            break;
          case this.healthcareDists[4]:
            this.injectionsByDist[4] += element.injections
            break;
          default:
        }
      })

      this.loaded = true
    }
  }
</script>
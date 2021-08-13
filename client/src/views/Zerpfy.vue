<template>
  <div class="zerpfy">
    <v-container fluid>
      <v-row class="mb-12 mt-2" justify="center">
        <h1>Data on Zerpfy vaccinations up to {{ date }}</h1>
      </v-row>
    </v-container>
    <v-container v-if="!loaded">
      <v-row>
        <v-col align="center">
          <v-progress-circular :size="50" color="primary" indeterminate />
        </v-col>
      </v-row>
    </v-container>
    <v-container fluid v-if="loaded">
      <v-row>
        <v-spacer />
        <v-col md="4" align="center">
          <h3>Overall Zerpfy vaccination orders</h3>
          <v-simple-table>
            <thead>
              <tr>
                <th class="text-center">Total amount of orders</th>
                <th class="text-center">Ordered injections</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="text-center">{{ zerpfys }}</td>
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
          <Piechart
            :chartData="this.ordersByDist"
            :chartLabels="this.healthcareDists"
          />
        </v-col>
        <v-col md="3" align="center">
          <h4>Injections</h4>
          <Piechart
            :chartData="this.injectionsByDist"
            :chartLabels="this.healthcareDists"
          />
        </v-col>
        <v-spacer />
      </v-row>
    </v-container>
  </div>
</template>

<script>
import API from "../api";
import Piechart from "../components/Piechart.vue";

export default {
  components: { Piechart },
  name: "Zerpfyz",
  data() {
    return {
      date: new Date().toISOString().substr(0, 10),
      apiDownload: [],
      loaded: false,
      zerpfys: 0,
      totalInjections: 0,
      injectionsByDist: [],
      healthcareDists: [],
      ordersByDist: [],
    };
  },
  async created() {
    this.apiDownload = await API.getZerpfyDistricts();
    this.healthcareDists = this.apiDownload.map((dist) => dist._id);
    this.ordersByDist = this.apiDownload.map((dist) => dist.ordersByDistrict);
    /*
    Initialize the length of healthcareDists array to fit the fetch from database
    */
    for (var i = 0; i < this.healthcareDists.length; i++) {
      this.injectionsByDist.push(0);
    };

    this.apiDownload = await API.getAllZerpfys();
    this.zerpfys = this.apiDownload.length;
    /*
    Correlate and separate the vaccination injections by healthcare district
    */
    this.apiDownload.forEach((element) => {
      this.totalInjections += element.injections;
      switch (element.healthCareDistrict) {
        case this.healthcareDists[0]:
          this.injectionsByDist[0] += element.injections;
          break;
        case this.healthcareDists[1]:
          this.injectionsByDist[1] += element.injections;
          break;
        case this.healthcareDists[2]:
          this.injectionsByDist[2] += element.injections;
          break;
        case this.healthcareDists[3]:
          this.injectionsByDist[3] += element.injections;
          break;
        case this.healthcareDists[4]:
          this.injectionsByDist[4] += element.injections;
          break;
        default:
      }
    });

    this.loaded = true;
  },
};
</script>
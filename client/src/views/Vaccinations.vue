<template>
  <div class="vaccinations">
    <v-container fluid>
      <v-row class="mb-12 mt-2" justify="center">
        <h1>Data on vaccinations administered up to {{ date }}</h1>
      </v-row>
    </v-container>
    <v-container v-if="!loaded">
      <v-row>
        <v-col align="center">
          <v-progress-circular :size="50" color="primary" indeterminate />
        </v-col>
      </v-row>
    </v-container>
    <v-container fluid>
      <v-row v-if="loaded">
        <v-spacer />
        <v-col md="5" align="center">
          <h3>Vaccinations administered by date</h3>
          <Barchart
            :chartData="vaccinationAmounts"
            :chartLabels="vaccinationDates"
          />
        </v-col>
        <v-spacer />
        <v-col md="3" align="center">
          <h3>Vaccinations received by gender</h3>
          <Piechart :chartData="vaccinationsByGender" :chartLabels="genders" />
        </v-col>
        <v-spacer />
      </v-row>
    </v-container>
    <v-container fluid>
      <v-row v-if="loaded">
        <v-spacer />
        <v-col md="4" align="center">
          <v-simple-table fixed-header height="20vh">
            <thead>
              <tr>
                <th class="text-center">Date</th>
                <th class="text-center">Cumulative amount vaccinated</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(date, index) in this.barChartOrgData[0]
                  .slice()
                  .reverse()"
                :key="date"
              >
                <td>{{ date }}</td>
                <td align="center">{{ barChartOrgData[2].slice()[index] }}</td>
              </tr>
            </tbody>
          </v-simple-table>
        </v-col>
        <v-spacer />
        <v-col md="3" align="center">
          <h4>
            Total by gender up to
            {{ vaccinationDates[vaccinationDates.length - 1] }}
          </h4>
          <v-simple-table>
            <tbody>
              <tr v-for="(gender, index) in this.genders" :key="gender">
                <td>{{ gender }}</td>
                <td>{{ vaccinationsByGender[index] }}</td>
              </tr>
            </tbody>
          </v-simple-table>
        </v-col>
        <v-spacer />
      </v-row>
    </v-container>
  </div>
</template>

<script>
import API from "../api";
import Barchart from "../components/Barchart.vue";
import Piechart from "../components/Piechart.vue";

export default {
  components: { Barchart, Piechart },
  name: "Vaccinations",
  data() {
    return {
      date: new Date().toISOString().substr(0, 10),
      loaded: false,
      apiDownload: [],
      barChartOrgData: [],
      vaccinationDates: [],
      vaccinationAmounts: [],
      cumulativeVaccinationAmounts: [],
      vaccinationsByGender: [],
      genders: [],
    };
  },
  methods: {
    /*
    Calculates the sum of values of elements in the parameter array.
    @pre requires an array with numerical value elements for the 
    function to fill its purpose as is.
    */
    cumulativeSumsOfArr: function (arr) {
      var copyArrRev = arr.slice();
      var resultArray = [];
      for (var i = 0; i < arr.length; i++) {
        resultArray.push(copyArrRev.slice(i).reduce((a, b) => a + b, 0));
      }
      return resultArray;
    },
  },
  async created() {
    this.apiDownload = await API.getVaccinationsPerDay();
    this.vaccinationDates = this.apiDownload.map((date) => date._id);
    this.vaccinationAmounts = this.apiDownload.map(
      (date) => date.vaccinationsPerDay
    );

    this.apiDownload = await API.getVaccinationsByGender();
    this.vaccinationsByGender = this.apiDownload.map(
      (amount) => amount.amountVaccinatedByGender
    );
    this.genders = this.apiDownload.map((gender) => gender._id);
    
    this.barChartOrgData = [
      this.vaccinationDates,
      this.vaccinationAmounts,
      this.cumulativeSumsOfArr(this.vaccinationAmounts.slice().reverse()),
    ];

    this.loaded = true;
  },
};
</script>
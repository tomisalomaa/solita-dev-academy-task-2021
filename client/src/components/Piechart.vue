<script>
import { Pie } from "vue-chartjs";

export default {
  extends: Pie,
  props: {
    chartData: {
      type: Array,
      required: true,
    },
    chartLabels: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      options: {
        legend: {
          display: true,
        },
        responsive: true,
        maintainAspectRatio: false,
      },
    };
  },
  mounted() {
    this.renderChart(
      {
        labels: this.chartLabels,
        datasets: [
          {
            data: this.chartData,
            backgroundColor: ["#A691AE", "#235FA4", "#0A284B"],
            hoverOffset: 4,
          },
        ],
      },
      this.options
    );
  },
};
</script>

<style>
</style>
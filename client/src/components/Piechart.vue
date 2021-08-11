<script>
import { Pie } from 'vue-chartjs'

export default {
  extends: Pie,
  props: {
    chartData: {
      type: Array,
      required: true
    },
    chartLabels: {
        type: Array,
        required: true
    }
  },
  data () {
      return {
        options: {
          legend: {
            display: true
          },
          responsive: true,
          maintainAspectRatio: false
        }
      }
  },
  mounted () {
     this.renderChart({
        labels: this.chartLabels,
        datasets: [{
            data: this.chartData,
            backgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(54, 162, 235)',
              'rgb(255, 205, 86)'
            ],
    hoverOffset: 4
        }]
      },
    this.options)
  }
}
</script>

<style>
</style>
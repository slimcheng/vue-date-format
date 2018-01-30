<template>
  <div id="app">
    <vueDateFormat :type="'ago'" :time="time" :autoUpdate="true"></vueDateFormat>
  </div>
</template>

<script>
import vueDateFormat from "../src/vue-date-format.vue";
export default {
  name: 'app',
  components: {
    vueDateFormat
  },
  data () {
    return {
      time:'2018-1-30 17:14:00'
    }
  }
}
</script>

<style>

</style>

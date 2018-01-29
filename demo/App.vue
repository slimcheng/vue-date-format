<template>
  <div id="app">
    <vueDateFormat :format="'yyyy年MM月dd日 hh:mm:ss'" :time="time"></vueDateFormat>
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
      time:'2017-12-12'
    }
  }
}
</script>

<style>

</style>

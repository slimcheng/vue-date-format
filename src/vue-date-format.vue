/*
 * @Author: slimcheng 
 * @Date: 2018-01-26 16:09:46 
 * @Last Modified by: slimcheng
 * @Last Modified time: 2018-01-29 15:26:13
 */


<template>
  <span>{{type=='fmt'?dateFmt:timeago}}</span>
</template>

<script>
export default {
    name:'vueDateFormat',
    props: {
        format: {
          type: String,
          default: 'yyyy-MM-dd hh:mm:ss'
        },
        time:{
          type: null,
          default: function () {
            return new Date()
          } 
        },
        type:{
          type: String,
          default: 'fmt'
        }
    },
    data() {
        return {
           timeago:''
        }
    },
    mounted () {
       
    },
    computed: {
      dateFmt: function () {
        var t=this;
        return t.dateFormat(t.anyToDate(t.time),t.format)
      }
    },
    watch: {
       
    },
    methods: {
        anyToDate(d){
          if (d instanceof Date){
            return d;
          } 
          if (/^\d+$/.test(d)){
            return new Date(parseInt(d));
            
          } 
          return new Date((d || '').trim().replace(/\.\d+/, '') 
            .replace(/-/, '/').replace(/-/, '/')
            .replace(/(\d)T(\d)/, '$1 $2').replace(/Z/, ' UTC') 
            .replace(/([\+\-]\d\d)\:?(\d\d)/, ' $1$2')); 
        },
        dateFormat(date,fmt){
          var o = {
              "M+" : date.getMonth() + 1,
              "d+" : date.getDate(),
              "h+" : date.getHours(),
              "m+" : date.getMinutes(),
              "s+" : date.getSeconds(),
              "q+" : Math.floor((date.getMonth() + 3) / 3),
              "S" : date.getMilliseconds()
          };
          if (/(y+)/.test(fmt))
              fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
          for (var k in o)
          if (new RegExp("(" + k + ")").test(fmt))
              fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
          return fmt;
        }
    }
}
</script>
<style>

</style>

/*
 * @Author: slimcheng 
 * @Date: 2018-01-26 16:09:46 
 * @Last Modified by: slimcheng
 * @Last Modified time: 2018-01-30 17:16:28
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
        },
        autoUpdate:{
          type:Boolean,
          default:false
        },
        autoTime:{
          type:Number,
          default:30
        }
    },
    data() {
        return {
            autoInterval:null,
            timeNow:new Date(),
            agos:[
              {
                maxTime:0,
                text:'未来',
                unit:0
              },
              {
                maxTime:30,/**一分钟**/
                text:'刚刚',
                unit:1
              },
              {
                maxTime:60,/**一分钟**/
                text:'tt 秒前',
                unit:1
              },
              {
                maxTime:3600,/**一小时**/
                text:'tt 分钟前',
                unit:60
              },
              {
                maxTime:86400,/**一天**/
                text:'tt 小时前',
                unit:3600
              },
              {
                maxTime:604800,/**一周**/
                text:'tt 天前',
                unit:86400
              },
              {
                maxTime:2678400,/**一月**/
                text:'tt 周前',
                unit:604800
              },
              {
                maxTime:31536000,/**一年**/
                text:'tt 月前',
                unit:2678400
              },
              {
                maxTime:3153600000,/**一百年**/
                text:'tt 年前',
                unit:31536000
              }
            ]
        }
    },
    mounted () {
       this.checkAutoUpdate()
    },
    computed: {
      dateFmt: function () {
        var t=this;
        if(t.autoUpdate){
          return t.dateFormat(t.anyToDate(t.timeNow),t.format)
        }else{
          return t.dateFormat(t.anyToDate(t.time),t.format)
        }
        
      },
      timeago:function(){
        var t=this,
        _time=Math.round((t.anyToDate(t.timeNow)-t.anyToDate(t.time))/1000),
        isin;
        
        for(var i=0;i<t.agos.length;i++){
          //console.log(_time,t.agos[i].maxTime)
          if(_time<t.agos[i].maxTime){
            return t.agos[i].text.replace(/tt/, Math.round(_time/t.agos[i].unit));
            //console.log(1111);
            break;
          }
          
        }
      }
    },
    watch: {
      autoUpdate:function(newVal,oldVal){
        this.checkAutoUpdate()
      }
    },
    methods: {
        checkAutoUpdate(){
          var t=this;
          if(t.autoInterval){
            window.clearInterval(t.autoInterval)
          }
          if(t.autoUpdate){
            /**自动，‘fmt’模式下开启自动，会变为系统时间**/
            t.goAutoUpdate();
          }
        },
        goAutoUpdate(){
          var t=this;
          t.autoInterval=setInterval(function(){
            t.timeNow=new Date();
          },t.autoTime*1000)
        },
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

# vue-date-format

Date format component for Vue2.0

日期格式化、美化插件

## Installation

``` bash
# npm
npm install vue-date-format

# yarn
yarn add vue-date-format

```


## Import
``` bash
// main.js

import vueDateFormat from 'vue-date-format'
Vue.use(vueDateFormat)

```


## Usage

### In template
``` bash
<vueDateFormat :format="format" :time="time" :type="type" :autoUpdate="autoUpdate"></vueDateFormat>

```

### Set config value
``` bash
data () {
    return {
        format:'yyyy年MM月dd日 hh:mm:ss',
        time:new Date(), //时间或字符串(eg:'2017-12-12'),
        type:'fmt',
        autoUpdate:false
    }
}

```

| 参数           | 说明           | 类型           |  可选值        |  默认值  |
| ------------- |:--------------:|:-------------:|:-------------:| -------:|
| format        | 格式化          | String        |-              | 'yyyy-MM-dd hh:mm:ss'   |
| time          | 需要展示的时间   | Date/String   |Date或时间字符串，不传默认为当前时间   | new Date()   |
| type          | 类型（格式化/多久以前）   | String   |'fmt'/'ago'   | 'fmt'   |
| autoUpdate          | 是否自动更新时间；type为‘fmt’时，开启自动更新，会忽略传入的time值，自动展示系统时间   | Boolean   |true/false   | false   |
| autoTime          | 自动更新间隔时间(autoUpdate为false设置无效果)  | Number   |正整数，单位为秒(s)   | 30   |

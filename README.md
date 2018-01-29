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
<vueDateFormat :format="format" :time="time"></vueDateFormat>

```

### Set config value
``` bash
data () {
    return {
        format:'yyyy年MM月dd日 hh:mm:ss',
        time:new Date(), //时间或字符串(eg:'2017-12-12')
    }
}

```

| 参数           | 说明           | 类型           |  可选值        |  默认值  |
| ------------- |:--------------:|:-------------:|:-------------:| -------:|
| format        | 格式化          | String        |-              | 'yyyy-MM-dd hh:mm:ss'   |
| time          | 需要展示的时间   | Date/String   |Date或时间字符串，不传默认为当前时间   | new Date()   |
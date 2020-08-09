<!--
 * @Description: Description
 * @Version: 1.0
 * @Autor: WangQiaoLing
 * @Date: 2020-08-09 09:42:30
 * @LastEditors: WangQiaoLing
 * @LastEditTime: 2020-08-09 09:48:32
-->
<template>
  <quick :data="left"
         v-if="left.length" />
  <li>{{flag}}</li>
  <quick :data="right"
         v-if="right.length" />
</template>
<script>
export default {
  name: 'quick',
  props: ['data'],
  setup (props) {
    let flag = data[0]
    let left = [], right = []
    props.data.slice(1).forEach(item => {
      item > flag ? right.push(item) : left.push(item)
    })
    return { left, right, flag }
  }
}
</script>
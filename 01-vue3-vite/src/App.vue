<template>
  <!-- <h1>{{title}}</h1>
  <input type="text"
         v-model="title"> -->
  <h1>hi {{title}}</h1>
  <h2>count is {{count}}</h2>
  <button @click="add">+1</button>
  <p></p>
  <input type="text"
         v-model="todaData.val"
         @keydown.enter="addTodo">
  <ul>
    <li v-for="(item,index) in todaData.items"
        :key="index">{{item.title}}</li>
  </ul>
  <p>total:{{total}}</p>
  <p></p>

</template>

<script>
import { ref, reactive, onMounted, computed } from 'vue'
import useTodos from './useTodos'
/**
 * vue2中的mixin可以将公共逻辑抽离，但是会带来变量来源不明、命名冲突等问题 --- vue3中的composition api完美解决
 * 将 TODO 相关的数据和方法逻辑都在这里 并且这个函数可以放在任何地方：抽离成单独的文件 --- 解决代码或者状态复用的问题
 */
// function useToDos () {
//   const todaData = reactive({
//     val: '',
//     items: [
//       {
//         title: '吃饭'
//       },
//       {
//         title: '睡觉'
//       },
//       {
//         title: 'LeetCode'
//       }
//     ]
//   })
//   function addTodo () {
//     if (todaData.val) {
//       todaData.items.push({ title: todaData.val })
//       todaData.val = ''
//     }

//   }
//   const total = computed(() => todaData.items.length)
//   return { todaData, addTodo, total }
// }

export default {

  setup () {
    const title = ref('kkb')
    const count = ref(0)
    function add () {
      return count.value++
    }

    onMounted(() => {
      console.log('加载完毕');
    })

    // 在这里体现了 "组合复用" --- 和 todo 相关的数据都在这里 -> 来源清晰明了
    const { todaData, addTodo, total } = useTodos()

    return { title, count, add, todaData, addTodo, total }
  }
}

</script>

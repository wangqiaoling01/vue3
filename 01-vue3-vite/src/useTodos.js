/*
 * @Description: Description
 * @Version: 1.0
 * @Autor: WangQiaoLing
 * @Date: 2020-08-08 10:33:21
 * @LastEditors: WangQiaoLing
 * @LastEditTime: 2020-08-08 10:39:05
 */
import { reactive, computed, onMounted } from 'vue'
/**
 * @description: 和 todo 相关的数据和方法逻辑都在这里
 * @param {type}
 * @return {type}
 * @author: WangQiaoLing
 */
function useToDos() {
  onMounted(() => {
    console.log('useToDos 加载完成')
  })
  const todaData = reactive({
    val: '',
    items: [
      {
        title: '吃饭',
      },
      {
        title: '睡觉',
      },
      {
        title: 'LeetCode',
      },
    ],
  })
  function addTodo() {
    if (todaData.val) {
      todaData.items.push({ title: todaData.val })
      todaData.val = ''
    }
  }
  const total = computed(() => todaData.items.length)
  return { todaData, addTodo, total }
}

export default useToDos

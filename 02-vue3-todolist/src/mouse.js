/*
 * @Description: Description
 * @Version: 1.0
 * @Autor: WangQiaoLing
 * @Date: 2020-08-09 10:18:34
 * @LastEditors: WangQiaoLing
 * @LastEditTime: 2020-08-09 10:24:31
 */
import { ref, onMounted, onUnmounted } from 'vue'

export default function useMousePosition() {
  const x = ref(10)
  const y = ref(10)

  function update(e) {
    x.value = e.pageX
    y.value = e.pageY
  }

  onMounted(() => {
    window.addEventListener('mousemove', update)
  })

  onUnmounted(() => {
    window.removeEventListener('mousemove', update)
  })

  return { x, y }
}

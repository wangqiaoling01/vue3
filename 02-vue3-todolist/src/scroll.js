/*
 * @Description: Description
 * @Version: 1.0
 * @Autor: WangQiaoLing
 * @Date: 2020-08-09 10:18:38
 * @LastEditors: WangQiaoLing
 * @LastEditTime: 2020-08-09 10:20:57
 */
import { ref, onMounted, onUnmounted } from 'vue'
export default function useScroll() {
  const top = ref(0)

  function update(e) {
    top.value = window.scrollY
  }

  onMounted(() => {
    window.addEventListener('scroll', update)
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', update)
  })

  return { top }
}

<template>
  <div class="home">
    <div>
      <input type="text" v-model="a" />
      <input type="button" value="a++" @click="incrementA" />
    </div>
    <div>
      <input type="text" v-model="b" />
      <input type="button" value="b--" @click="decrementB" />
    </div>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { ref, reactive, watchEffect, onMounted, onUpdated, onUnmounted, provide } from 'vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  setup () {
    // const a = ref(0)
    // const b = ref(1)
    // const obj = reactive({})
    // const incrementA = () => a.value++
    // const decrementB = () => b.value--
    const data = {
      a: ref(0),
      b: ref(1),
      obj: reactive({}),
      incrementA: () => data.a.value++,
      decrementB: () => data.b.value--,
      asyncPrint: val => {
        return setTimeout(() => {
          console.log(val)
        }, 1000)
      }
    }
    // 依赖注入 provide向后代组件注入，inject接收
    const provideObj = reactive({ a: 1, b: 2 })
    provide('useData', provideObj)

    watchEffect((onInvalidate) => {
      const timer = data.asyncPrint(data.a.value)

      onInvalidate(() => {
        // 清除副作用
        console.log('clear!')
        clearTimeout(timer)
      })
      console.log('a change: ', data.a.value)
    })

    const stop = watchEffect((onInvalidate) => {
      const value = data.b.value
      console.log(value)
      if (value < 0) {
        // 停止监听
        stop()
      }
    })

    onMounted(() => {
      console.log('onMounted')
    })

    onUpdated(() => {
      console.log('onUpdated')
    })

    onUnmounted(() => {
      console.log('onUnmounted')
    })
    // return {
    //   a, b, obj, incrementA, decrementB
    // }
    return data
  },
  mounted () {
    console.log('mounted')
    this.a = 3
    this.obj = { a: ref(7).value, b: ref(8).value }
  }
}
</script>

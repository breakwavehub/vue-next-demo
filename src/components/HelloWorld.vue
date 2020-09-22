<template>
  <div class="hello" ref="hello">
    <h1>This is an hello page</h1>
    <div>
      {{message.data}} | {{message.id}}
    </div>
    <div>
      useData: {{useData}}
    </div>
    <div v-for="(item,i) in list" :key="i" :ref="el => {divs[i] = el}">

    </div>
    <HelloChild />
  </div>
</template>
<script>
import HelloChild from '@/components/HelloChild.vue'
import { ref, reactive, inject, onMounted, onBeforeUpdate } from 'vue'
export default {
  name: 'HelloWorld',
  components: {
    HelloChild
  },
  props: {
    msg: String
  },
  setup (props) {
    const hello = ref(null)

    const message = reactive({
      data: props.msg,
      id: ref(1000)
    })

    const useData = inject('useData')

    const list = reactive([1, 2, 3])
    const divs = ref([])

    onMounted(() => {
      console.log('ref hello:', hello.value)
    })

    onBeforeUpdate(() => {
      divs.value = []
    })
    return {
      hello, message, useData, list, divs
    }
  }
}
</script>
<style lang="scss">

</style>

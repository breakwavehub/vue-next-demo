<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div>
      {{ user }}
    </div>
  </div>
</template>
<script>
import { ref, reactive, readonly, isRef, computed } from 'vue'
export default {
  name: 'about',
  props: {
    msg: {
      type: String,
      default: 'this is a default message'
    }
  },
  setup () {
    const a = ref(0)
    const plusA = computed({
      set: (val) => {
        a.value = val - 1
      },
      get: () => a.value + 1
    })
    plusA.value = 5
    console.log(plusA.value, a.value)
    const user = reactive({
      name: ref('fuck'),
      age: ref(38)
    })

    const copyUser = readonly(user)
    copyUser.age = 10
    console.log(copyUser.age) // readonly 只读
    console.log(isRef(a)) // true
    console.log(user.name) // fuck
    console.log(isRef(user.name)) // false

    return {
      user,
      copyUser,
      plusA
    }
  }
}
</script>

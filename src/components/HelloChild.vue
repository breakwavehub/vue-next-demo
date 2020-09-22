<template>
  <div class="hello-child">
     child-useData: {{useData}}
  </div>
</template>
<script>
import { inject } from 'vue'
export default {
  name: 'HelloChild',
  setup (props) {
    const useData = inject('useData')
    return {
      useData
    }
  }
}
</script>
<style lang="scss">

</style>

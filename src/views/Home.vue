<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div>newsTitle: {{ news.newsTitle }}</div>
    <div>newsInfo:{{ news.newsInfo }}</div>
    <div>newsDate:{{ news.newsDate }}</div>
  </div>
</template>

<script>
// @ is an alias to /src
import { reactive } from 'vue'
import { formatDate } from '@/utils/util'

export default {
  name: 'Home',

  setup () {
    const news = reactive({
      newsTitle: 'vue-next-demo',
      newsInfo: 'Hello world!'
    })
    return {
      news
    }
  },

  created () {
    this.news.newsDate = formatDate()
  }
}
</script>

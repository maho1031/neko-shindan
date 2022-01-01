<template>
  <div id="app" class="mainContainer">
    <div class="mainWrapper">
      <h1 class="mainTitle">ねこ診断</h1>

      <main-start
      :status="status"
      @click-start="start"
      ></main-start>

    </div>

    <main-content 
    :sum="sum"
    :status="status"
    :questions="questions"
    @click-start="start"
    @click-addPoint="addPoint"
    @click-status="addStatus"
    ></main-content>

    <main-result
    :sum="sum"
    :status="status"
    :questions="questions"
    @click-reset="reset"
    ></main-result>
  </div>
</template>

<script>
import MainContent from './components/MainContent.vue'
import MainResult from './components/MainResult.vue'
import MainStart from './components/MainStart.vue'

const questions = [
    {
        num: 1,
        point: 1,
        sentence: '大きい猫が好き！！'

    },
    {
        num: 2,
        point: 3,
        sentence: 'できれば大人しい猫がいいかも。。。'
    },
    {
        num: 3,
        point: 5,
        sentence: 'いっぱい遊びたい！！'
    },
    {
        num: 4,
        point: 8,
        sentence: 'どちらかと言うと人なつこい猫が好き'
    },

]

export default {
  data(){
    return {
      status: 0,
      sum: 0,
      questions: questions,
    }
  },
  components: {
    MainContent,
    MainResult,
    MainStart
  },
  methods: {
    // 合計ポイントを加算(MainContentより)
    addPoint(value){
      this.sum = this.sum + value;
    },
    // statusを加算(MainContentより)
    addStatus(){
      this.status++;
    },
    // 診断スタート(MainStartより)
    start(){
      this.status = 1
    },
    // 診断リセット(MainResultより)
    reset(){
      this.status = 0
      this.sum = 0;
    }
  }
}
</script>

<style>
@import "./assets/css/style.css";
</style>



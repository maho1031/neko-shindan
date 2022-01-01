<template>
    <div class="mainWrapper">
        <!-- 質問表示画面 -->
        <transition name="fade" v-for="question in questions" :key="question.num" mode="out-in" appear>
            <main class="mainContent" v-show="question.num === status">
                <p class="questionTitle">質問{{question.num}}</p>
                <p class="questionSentence">{{question.sentence}}</p>
                <ul>
                    <li class="btn btn-list"><a href="#" @click.prevent.stop="answer('yes')" class="itemLink">そう思う</a></li>
                    <li class="btn btn-list"><a href="#" @click.prevent.stop="answer('num')" class="itemLink">そうは思わない</a></li>
                </ul>
            </main>
        </transition>
    </div>
</template>

<script>

export default{
   props: ['status', 'sum', 'questions'],
   data(){
       return {
       }
   },
   computed : {
       question(){
        //    statusと同じnumの質問を返す
           return this.questions.filter(question => question.num === this.status).shift();
       },
   },
   methods: {
       answer(type){
        //    現在の質問を取得
        //  質問numとstatusが合っているもので新しい配列を作り、最初のデータを抽出
        let current_question = this.questions.filter((question) => {
               return question.num === this.status
           }).shift()

           if(type === 'yes'){
            //    yesの時にpointを加算(親)
               this.$emit('click-addPoint', current_question.point);
   
           }
        // statusを加算(親)
        this.$emit('click-status');
       
       },
    

   }
}

</script>

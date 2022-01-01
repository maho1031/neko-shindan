<template>
    <!-- 診断結果画面 -->
     <div class="mainWrapper">
          <transition enter-active-class="animate__animated animate__pulse animate__delay-0.5s" mode="out-in" appear>
            <main class="mainContent" v-show="isFinish">
                <p class="questionTitle">診断結果</p>
                <p class="resultSentence">あなたにぴったりな猫は{{result.name}}です。</p>
                <img :src="result.image" alt="" class="resultImg">
                <p class="resultSentence">{{result.sentence}}</p>
                <li class="btn">
                    <a href="#" @click="reset()">最初からやり直す</a>
                </li>
            </main>
        </transition>
     </div>
</template>

<script>
const results = [
    {
        point: 0,
        name:'シャトルリュー',
        sentence: 'マイペースで賢いシャトルリューがあなたにはぴったりです。大型になる猫種なので、よく運動させてあげましょう。',
        image: require('@/assets/image/sya.jpg')
    },
    {
        point: 1,
        name: 'メインクーン',
        sentence: '大きくて穏やかなメインクーンがあなたにぴったりです。多くの運動量が必要なため、たくさん遊んであげるといいでしょう。',
        image: require('@/assets/image/mai.jpg')
    },
    {
        point: 3,
        name: 'ブリティッシュショートヘア',
        sentence: '穏やかで落ち着いたブリティッシュショートヘアがあなたにはぴったりです。静かな環境が好きなので、ほどよい距離を保って接するともっと仲良くなれそう。',
        image: require('@/assets/image/bri.jpg')
    },
    {
        point: 4,
        name: 'ラグドール',
        sentence: '大きくておっとりとしたラグドールがあなたにはぴったりです。「ぬいぐるみ」の愛称で知られていますが、抱っこが好きじゃないラグドールも多いそう。',
        image: require('@/assets/image/rag.jpg')
    },
    {
        point: 5,
        name:'ベンガル',
        sentence: '活発で好奇心旺盛なベンガルがあなたにはぴったりです。遊ぶことが大好きなため、キャットタワーやキャットステップを置いてあげるともっと喜ばれるかも！',
        image: require('@/assets/image/ben.jpg')
    },
    {
        point: 6,
        name:'ノルウェージャンフォレストキャット',
        sentence: '大きくて温和なノルウェージャンフォレストキャットがあなたにはぴったりです。長毛種のため、毎日のブラッシングは忘れずに。',
        image: require('@/assets/image/nor.jpg')
    },
    {
        point: 8,
        name:'日本猫',
        sentence: '活発で人懐こい日本猫があなたにぴったりです。保護猫施設やカフェに運命の出会いがあるかも！',
        image: require('@/assets/image/ja.jpg')

    },
    {
        point: 9,
        name: 'ラグドール',
        sentence: '大きくておっとりとしたラグドールがあなたにはぴったりです。「ぬいぐるみ」の愛称で知られていますが、抱っこが好きじゃないラグドールも多いそう。',
        image: require('@/assets/image/rag.jpg')
    },
    {
        point: 11,
        name:'ロシアンブルー',
        sentence: '賢く落ち着いているロシアンブルーがあなたにはぴったりです。少し繊細な部分があるため、最初はゆっくり環境に慣らしていくことが大切です。',
        image: require('@/assets/image/ros.jpg')
    },
     {
        point: 12,
        name:'ラグドール',
        sentence: '大きくておっとりとしたラグドールがあなたにはぴったりです。「ぬいぐるみ」の愛称で知られていますが、抱っこが好きじゃないラグドールも多いそう。',
        image: require('@/assets/image/rag.jpg')
    },

    {
        point: 13,
        name:'アメリカンショートヘア',
        sentence: '陽気で活発なアメリカンショートヘアがあなたにはぴったりです。やんちゃでいたずら好きな一面もあるため、部屋のインテリアには気をつける必要があるかも。',
        image: require('@/assets/image/ame.jpg')
    },
     {
        point: 14,
        name:'ノルウェージャンフォレストキャット',
        sentence: '大きくて温和なノルウェージャンフォレストキャットがあなたにはぴったりです。長毛種のため、毎日のブラッシングは忘れずに。',
        image: require('@/assets/image/nor.jpg')
    },
     {
        point: 16,
        name:'日本猫',
        sentence: '活発で人懐こい日本猫があなたにぴったりです。保護猫施設やカフェに運命の出会いがあるかも！',
        image: require('@/assets/image/ja.jpg')
    },
     {
        point: 17,
        name: 'メインクーン',
        sentence: '大きくて穏やかなメインクーンがあなたにぴったりです。多くの運動量が必要なため、たくさん遊んであげるといいでしょう。',
        image: require('@/assets/image/mai.jpg')
    },
]

export default{
    props: ['sum', 'questions','status'],
    data(){
        return {
            results: results,
        }
    },
    computed :{
         result(){
            //  合計ポイントとpointが合っているもので新しい配列を作り、最初のデータを抽出
            return results.filter(result => this.sum === (result.point)).shift();
     },
        isFinish(){
        // question.lengthよりstatusが大きくなったらisFinishを表示して診断結果へ
        return this.status > this.questions.length;
      },
     
       
    },
    methods: {
        // 診断リセット(親)
        reset(){
           this.$emit("click-reset");
       },
    }
    

}
</script>

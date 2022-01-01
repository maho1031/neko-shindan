<template>
    <div class="mainWrapper">
         <!-- 初期画面 -->
        <transition name="fade" mode="out-in">
            <main class="mainContent" v-show="status === 0">
                <img src="@/assets/image/yuru_neko1.png" alt="" class="mainImg">
                <p class="mainText">あなたにぴったりな猫を診断します。</p>
                <ul class="mainList">
                    <li class="btn">
                    <a href="#" class="itemLink" @click.prevent.stop="start">診断スタート</a>
                    </li>
                </ul>
            </main>
        </transition>
    </div>
</template>

<script>
export default{
   props: ['status'],

    methods: {
        // 診断スタート(親)
       start(){
           this.$emit("click-start");
           
       },
    },
}
</script>
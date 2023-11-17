<script lang="ts" setup>
import { ref, watch } from "vue";
import type { Ref } from "vue";
import Card from "@/components/Card.vue";
import QuizHeader from "@/components/QuizHeader.vue";
// import gsap from "gsap";

// Assuming q is an array of quizzes
import q from "@/data/quizes.json";
import { type Quiz } from "@/modules/format";

// Define 'quizes' as a reactive reference to the imported quiz data
const quizes: Ref<Quiz[]> = ref(q);

// Define 'search' as a reactive string reference
const search: Ref<string> = ref("");
    

// Watch for changes in 'search' and filter the quizzes accordingly
watch(search, () => {
    quizes.value = q.filter((quiz) => quiz.name.toLowerCase().includes(search.value.toLowerCase()));
});

// Uncomment and use these functions where necessary
// const beforeEnter = (el) => {
//     el.style.transform = "translateY(-60px)";
//     el.style.opacity = 0;
// };

// const enter = (el, done) => {
//     gsap.to(el, {
//         duration: 1,
//         y: 0,
//         opacity: 1,
//         delay: el.dataset.index * 0.2,
//         onComplete: done,
//     });
// };
</script>

<template>
    <div class="container p-5 m-auto">
        <QuizHeader />
        <div class="options-container">
            <!-- <TransitionGroup @before-enter="beforeEnter" @enter="enter" appear> -->
            <Card v-for="(quiz, index) in quizes" :key="quiz.id" :quiz="quiz" :data-index="index" />
            <!-- </TransitionGroup> -->
        </div>
    </div>
</template>

<style scoped>
header {
    margin-bottom: 10px;
    margin-top: 30px;
    display: flex;
    align-items: center;
}

header h1 {
    font-weight: bold;
    margin-right: 30px;
}

header input {
    border: none;
    background-color: rgba(128, 128, 128, 0.1);
    padding: 10px;
    border-radius: 5px;
}

.options-container {
    display: flex;
    flex-wrap: wrap;
    margin-top: 40px;
}

/* CARD */
</style>

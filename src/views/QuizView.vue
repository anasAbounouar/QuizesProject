<template>
    <div>
        <QuizHeader />
        <div>
            <Question
                :question="quiz?.questions[currentQuestionIndex]"
            />
            <Result />
        </div>
    </div>
</template>
<script lang="ts" setup>
import { useRoute } from "vue-router";
import { ref } from "vue";
import Question from "@/components/Question.vue";
import q from "@/data/quizes.json";
const route = useRoute();
const quizId: number = parseInt(route.params.id[0]);
const currentQuestionIndex = ref(0);
const quiz = q.find((quiz) => quiz.id === quizId);
console.log(quiz);
</script>

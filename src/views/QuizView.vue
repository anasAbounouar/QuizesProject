<template>
    <div>
        <QuizHeader :questionStatus="questionStatus" :barPercentage="barPercentage" />
        <div>
            <Question
                v-if="!showResults"
                :question="quiz?.questions[currentQuestionIndex]"
                @selectOption="onOptionSelected"
            />
            <Result
                v-if="showResults"
                :quizQuestionLength="quizQuestionLength"
                :numberOfCorrectAnswers="numberOfCorrectAnswers"
                class="p-0"
            />
        </div>
    </div>
</template>
<script lang="ts" setup>
import QuizHeader from "@/components/QuizHeader.vue";
import Result from "@/components/Result.vue";
import { useRoute } from "vue-router";
import { ref, computed } from "vue";
import Question from "@/components/Question.vue";
import { type Quiz } from "@/modules/format";
import q from "@/data/quizes.json";
import type { Ref } from "vue";
import type { ComputedRef } from "vue";

const route = useRoute();

const quizId: number = parseInt(route.params.id[0]);

const quiz: Quiz | undefined = q.find((quiz) => quiz.id === quizId);
const quizQuestionLength: number | undefined = quiz?.questions.length;
const currentQuestionIndex: Ref<number> = ref(0);
console.log(currentQuestionIndex.value);

const questionStatus: ComputedRef<string | void> = computed(() => {
    if (currentQuestionIndex.value !== undefined) {
        return `${currentQuestionIndex.value}/${quiz?.questions.length}`;
    }
    return console.log("error in currentQuestionIndex");
});
const showResults = ref(false);
const numberOfCorrectAnswers = ref(0);
const onOptionSelected = (isCorrect: boolean) => {
    if (isCorrect) {
        numberOfCorrectAnswers.value++;
    }
    if (quiz && quiz?.questions?.length - 1 === currentQuestionIndex.value) {
        showResults.value = true;
        return;
    }
    return currentQuestionIndex.value++;
};
console.log(questionStatus.value);
const barPercentage = computed(() => {
    if (quiz && quiz.questions) {
        return `${(currentQuestionIndex.value / quiz.questions.length) * 100}%`;
    } else {
        return "0%"; // or some other fallback value
    }
});
</script>

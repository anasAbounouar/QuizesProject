<template>
    <div>
        <QuizHeader :questionStatus="questionStatus" :barPercentage="barPercentage" />
        <div>
            <Question
                :question="quiz?.questions[currentQuestionIndex]"
                @selectOption="onOptionSelected"
            />
            <button
                @click.prevent="
                    currentQuestionIndex < 3 ? currentQuestionIndex++ : currentQuestionIndex
                "
            >
                next
            </button>
            <Result />
        </div>
    </div>
</template>
<script lang="ts" setup>
import QuizHeader from "@/components/QuizHeader.vue";
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
console.log(quiz);

const currentQuestionIndex: Ref<number> = ref(0);
console.log(currentQuestionIndex.value);

const questionStatus: ComputedRef<string | void> = computed(() => {
    if (currentQuestionIndex.value !== undefined) {
        return `${currentQuestionIndex.value}/${quiz?.questions.length}`;
    }
    return console.log("error in currentQuestionIndex");
});
const onOptionSelected = (isCorrect: boolean) => {
    console.log("emmited", isCorrect);
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

<!-- eslint-disable vue/multi-word-component-names -->
<script lang="ts" setup>
import { defineProps } from "vue";
import { RouterLink } from "vue-router";

const { numberOfCorrectAnswers, quizQuestionLength } = defineProps([
    "quizQuestionLength",
    "numberOfCorrectAnswers",
]);
</script>

<template class="m-0 p-0">
    <div class="results">
        <p>Your Results...</p>
        <h1>{{ numberOfCorrectAnswers }}/{{ quizQuestionLength }}</h1>
        <RouterLink to="/">Go Back</RouterLink>
    </div>
</template>

<style scoped>
.results {
    text-align: center;
}

p {
    font-size: 25px;
}

h1 {
    font-size: 80px;
}
</style>

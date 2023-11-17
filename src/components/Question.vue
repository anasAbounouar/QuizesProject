<!-- eslint-disable vue/multi-word-component-names -->
<script lang="ts" setup>
import { defineProps, defineEmits } from "vue";
import { type Quiz } from "@/modules/format";
import { ref } from "vue";
const emit = defineEmits(["selectOption"]);

const emitSelectedOption = (isCorrect: boolean): void => {
    console.log("order to emit sent ", isCorrect);
    emit("selectOption", isCorrect);
};

console.log(emit);

const { question }: { question?: Quiz } = defineProps(["question"]);

let trueCount = ref(0);

const check = (bol: boolean) => {
    if (bol === true) {
        return trueCount.value++;
    }
    return;
};
</script>

<template>
    <div class="question-container">
        <h1 class="question">
            {{ question?.text }}
        </h1>
    </div>
    <div class="options-container">
        <div
            v-for="option in question.options"
            :key="option.id"
            class="option"
            @click.prevent="emitSelectedOption(option.isCorrect)"
        >
            <p class="option-label">{{ option.label }}</p>
            <div class="option-value">
                <p>{{ option.text }}</p>
            </div>
        </div>
        <div>{{ trueCount }}</div>
    </div>
</template>

<style scoped>
.question-container {
    margin-top: 20px;
}

.question {
    font-size: 40px;
    margin-bottom: 20px;
}

.option {
    display: flex;
    margin-bottom: 20px;
    cursor: pointer;
}

.option-label {
    background-color: bisque;
    width: 50px;
    height: 50px;
    font-size: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.option-value {
    background-color: rgb(244, 239, 239);
    width: 100%;
    font-size: 30px;
    padding: 0 20px;
}
</style>

import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            component: () => import("@/views/QuizesView.vue"),
        },
        {
            path: "/home",
            redirect: "/",
        },
        {
            path: "/:pathMatch(.*)*",
            name: "note found",
            component: () => import("@/views/PageNotFoundView.vue"),
        },
        {
            path: "/quiz/:id",
            component: () => import("@/views/QuizView.vue"),
        },
    ],
});

export default router;

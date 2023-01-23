import { createRouter, createWebHistory } from "vue-router";
import GoalOfTheDayView from "../views/GoalOfTheDayView.vue";
import ActivityView from "../views/ActivityView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "goal_of_the_day",
      component: GoalOfTheDayView,
    },
    {
      path: "/activity",
      name: "activity",
      component: ActivityView,
    },
  ],
});

export default router;

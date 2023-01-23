<script setup>
import ActivityCurrentGoal from '../components/ActivityCurrentGoal.vue';
import ActivityTimeline from '../components/ActivityTimeline.vue';
import GoalOfTheDay from '../components/GoalOfTheDay.vue';
import { goalOfTheDay, findUserGoalOfTheDay, timeline } from '../fixtures';

const userGoal = findUserGoalOfTheDay()
</script>

<template>
  <div class="ActivityView">
    <ActivityCurrentGoal
      v-if="userGoal"
      :goal="userGoal"
    />
    <GoalOfTheDay 
      v-else
      :goal="goalOfTheDay" 
    />

    <hr>

    <div>
      <p>Ca se passe en ce moment...</p>
      <ActivityTimeline :timeline="timeline" />
    </div>
  </div>
</template>
